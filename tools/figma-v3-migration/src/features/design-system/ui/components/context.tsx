import { h } from "preact";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "preact/compat";

import { emit, on } from "@create-figma-plugin/utilities";
import type {
  CheckComponentEventHandler,
  FocusNodeEventHandler,
  InstanceInfo,
  SendComponentInfoEventHandler,
  SwapAllComponentsEventHandler,
  SwapComponentEventHandler,
  SwapResult,
  SwapResultEventHandler,
} from "../../types";
import { useMigration } from "../context";

import componentMappings from "@/features/design-system/mapping";

type Context = {
  selectedComponent: InstanceInfo | null;
  newComponents: InstanceInfo[];
  oldComponents: InstanceInfo[];
  swapResults: SwapResult;
  selectedVariants: Record<string, string>;

  handleSelectComponent: (component: InstanceInfo) => void;
  swapComponent: (instanceNode: InstanceInfo, selectedVariants: Record<string, string>) => void;
  swapAllComponents: (
    instanceNodes: InstanceInfo[],
    selectedVariants: Record<string, string>,
  ) => void;
  focusComponent: (componentId: string) => void;
  handleVariantSelect: (componentId: string, oldVariant: string, newVariant: string) => void;
  refresh: () => void;
};

export const ComponentsContext = createContext<Context | null>(null);

export const ComponentsProvider = ({ children }: { children: React.ReactNode }) => {
  const { targets } = useMigration();
  const [selectedComponent, setSelectedComponent] = useState<InstanceInfo | null>(null);
  const [components, setComponents] = useState<InstanceInfo[]>([]);
  const [swapResults, setSwapResults] = useState<SwapResult>({});
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});

  const swapComponent = useCallback(
    (instanceNode: InstanceInfo, selectedVariants: Record<string, string>) => {
      emit<SwapComponentEventHandler>("SWAP_COMPONENT", instanceNode, selectedVariants);
    },
    [],
  );

  const swapAllComponents = useCallback(
    (instanceNodes: InstanceInfo[], selectedVariants: Record<string, string>) => {
      emit<SwapAllComponentsEventHandler>("SWAP_ALL_COMPONENTS", instanceNodes, selectedVariants);
    },
    [],
  );

  const focusComponent = (componentId: string) => {
    emit<FocusNodeEventHandler>("FOCUS_NODE", { nodeIds: [componentId] });
  };

  const handleSelectComponent = (component: InstanceInfo) => {
    setSelectedComponent(component);
    focusComponent(component.id);
  };

  const handleVariantSelect = (componentId: string, oldVariant: string, newVariant: string) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [`${componentId}:${oldVariant}`]: newVariant,
    }));
  };

  const refresh = useCallback(() => {
    emit<CheckComponentEventHandler>(
      "CHECK_COMPONENT",
      targets.map(({ id }) => id),
    );
    setSwapResults({});
  }, [targets]);

  useEffect(() => {
    if (targets?.length !== 1) return;

    refresh();
  }, [targets, refresh]);

  useEffect(() => {
    on<SendComponentInfoEventHandler>("SEND_COMPONENT_INFO", (components) => {
      setComponents(components);
    });
  }, []);

  useEffect(() => {
    on<SwapResultEventHandler>("SWAP_RESULT", (results) => {
      // result를 받으면, 기존의 swapResults에 있는 것과 합치는데, id가 같은건 새롭게 들어온 result로 덮어씌운다.
      const newSwapResults = Object.entries(results).reduce((acc, [instanceId, newResult]) => {
        const oldResult = acc[instanceId];
        // biome-ignore lint/performance/noAccumulatingSpread: <explanation>
        return { ...acc, [instanceId]: { ...oldResult, ...newResult } };
      }, swapResults);

      setSwapResults(newSwapResults);
    });
  }, [swapResults]);

  const oldComponents = useMemo(() => components.filter((c) => c.version === "v2"), [components]);
  const newComponents = useMemo(() => components.filter((c) => c.version === "v3"), [components]);

  // oldComponents가 설정되면 default variants 설정
  useEffect(() => {
    const defaultVariants: Record<string, string> = {};

    for (const oldComponent of oldComponents) {
      const mapping = componentMappings.find((m) => m.oldComponent === oldComponent.name);

      if (mapping?.swappableVariants) {
        for (const variant of mapping.swappableVariants) {
          // variant.newVariants의 첫 번째 값을 기본값으로 설정
          const [oldKey, oldValue] = variant.oldVariant.split(":");
          const currentValue = oldComponent.componentProperties[oldKey]?.value;

          // 현재 variant 값이 swappableVariants의 oldVariant와 일치할 때만 기본값 설정
          // if (variant.newVariants.length > 0 && currentValue === oldValue) {
          //   defaultVariants[`${oldComponent.id}:${variant.oldVariant}`] = variant.newVariants[0];
          // }
        }
      }
    }

    setSelectedVariants(defaultVariants);
  }, [oldComponents]);

  return (
    <ComponentsContext.Provider
      value={{
        selectedComponent,
        newComponents,
        oldComponents,
        swapResults,
        selectedVariants,
        swapComponent,
        swapAllComponents,
        focusComponent,
        handleSelectComponent,
        handleVariantSelect,
        refresh,
      }}
    >
      {children}
    </ComponentsContext.Provider>
  );
};

export const useComponentsContext = () => {
  const context = useContext(ComponentsContext);
  if (!context) throw new Error("useComponentsContext must be used within a ComponentsProvider");
  return context;
};
