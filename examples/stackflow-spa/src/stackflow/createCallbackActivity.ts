import { useEffect } from "react";
import type { ActivityName, ActivityParamOf } from "./Stack";
import { useFlow } from "./useFlow";

export interface CallbackActivity<ID extends ActivityName, Type> {
  useCallbackPush: () => (param: ActivityParamOf<ID>) => Promise<Type | undefined>;
  useCallbackPop: () => { pop: (data?: Type | undefined) => void };
}

export function createCallbackActivity<ID extends ActivityName, Type>(
  id: ID,
  _type: Type,
): CallbackActivity<ID, Type> {
  let resolvePromise: ((value: Type | undefined) => void) | undefined;

  function useCallbackPush() {
    const { push } = useFlow();

    const callbackPush = (param: ActivityParamOf<ID>): Promise<Type | undefined> => {
      if (resolvePromise && process.env.NODE_ENV !== "production") {
        console.warn(
          `resolvePromise already exists for ${id}. You are trying to push same callback activity twice.`,
        );
      }

      push(id as ActivityName, param);
      return new Promise((resolve) => {
        resolvePromise = resolve;
      });
    };

    return callbackPush;
  }

  function useCallbackPop() {
    const { pop } = useFlow();

    // TODO: We might use activity.exitedBy here
    useEffect(() => {
      if (!resolvePromise && process.env.NODE_ENV !== "production") {
        console.warn(
          `No promise to resolve for ${id}. You have to push with useCallbackPush first.`,
        );
      }

      return () => {
        resolvePromise?.(undefined);
        resolvePromise = undefined;
      };
    }, [id]);

    return {
      pop: (data: Type | undefined = undefined) => {
        // TODO: type pop params and pass it
        pop();

        if (!resolvePromise && process.env.NODE_ENV !== "production") {
          console.warn(
            `No promise to resolve for ${id}. You have already resolved promise of this activity.`,
          );
        }
        resolvePromise?.(data);
        resolvePromise = undefined;
      },
    };
  }

  return { useCallbackPush, useCallbackPop };
}
