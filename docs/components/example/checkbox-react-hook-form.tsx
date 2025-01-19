"use client";

import { useController, useForm } from "react-hook-form";
import { Checkbox } from "seed-design/ui/checkbox";
import { ActionButton } from "seed-design/ui/action-button";
import { useCallback, type FormEvent } from "react";

const POSSIBLE_FRUIT_VALUES = ["apple", "melon", "mango"] as const;

type FormValues = Record<(typeof POSSIBLE_FRUIT_VALUES)[number], boolean>;

export default function CheckboxReactHookForm() {
  const { handleSubmit, reset, setValue, control } = useForm<FormValues>({
    defaultValues: {
      apple: false,
      melon: true,
      mango: false,
    },
  });

  const onValid = useCallback((data: FormValues) => {
    window.alert(JSON.stringify(data, null, 2));
  }, []);

  const onReset = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      reset();
    },
    [reset],
  );

  return (
    <form className="flex flex-col gap-3 w-96" onSubmit={handleSubmit(onValid)} onReset={onReset}>
      <div className="flex flex-col">
        {POSSIBLE_FRUIT_VALUES.map((name) => {
          const {
            field: { value, ...restProps },
            fieldState: { invalid },
          } = useController({ name, control });

          return (
            <Checkbox
              key={name}
              label={name}
              checked={value}
              inputProps={restProps}
              invalid={invalid}
            />
          );
        })}
      </div>
      <div className="flex gap-2">
        <ActionButton type="submit" className="grow">
          제출
        </ActionButton>
        <ActionButton type="button" variant="neutralWeak" onClick={() => setValue("mango", true)}>
          mango 선택
        </ActionButton>
        <ActionButton type="reset" variant="neutralWeak">
          초기화
        </ActionButton>
      </div>
    </form>
  );
}
