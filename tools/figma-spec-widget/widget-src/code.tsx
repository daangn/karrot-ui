import {
  parseComponentSpecData,
  stringifyPrimitiveExpression,
  stringifyTokenExpression,
  type ComponentSpecExpression,
} from "@seed-design/rootage-core";
import YAML from "yaml";
import { stringifyConditions, stringifyVariants } from "./stringify";

const { widget } = figma;
const { AutoLayout, Fragment, Text, usePropertyMenu, useSyncedState } = widget;

const COMPONENT_KEYS = [
  "avatar",
  "action-button",
  "callout",
  "action-chip",
  "checkbox",
  "dialog",
  "radio",
];
const getSpecUrl = (key: string) =>
  `https://raw.githubusercontent.com/daangn/seed-design/wip/packages/rootage/artifacts/${key}.yaml`;

function Widget() {
  const [componentKey, setComponentKey] = useSyncedState<string>("componentKey", "");
  const [spec, setSpec] = useSyncedState<ComponentSpecExpression>("componentSpec", []);

  usePropertyMenu(
    [
      {
        itemType: "dropdown",
        propertyName: "component",
        tooltip: "Component",
        selectedOption: componentKey,
        options: [
          { option: "", label: "None" },
          ...COMPONENT_KEYS.map((c) => ({ option: c, label: c })),
        ],
      },
      {
        itemType: "action",
        propertyName: "update",
        tooltip: "Update",
      },
    ],
    async ({ propertyName, propertyValue }) => {
      if (propertyName === "component") {
        setComponentKey(propertyValue!);
        await updateSpec(propertyValue!);
      }
      if (propertyName === "update") {
        await updateSpec(componentKey);
      }
    },
  );

  async function updateSpec(componentKey: string) {
    const response = await fetch(getSpecUrl(componentKey));
    const text = await response.text();
    console.log(spec);
    setSpec(parseComponentSpecData(YAML.parse(text).data));
  }

  if (!componentKey) {
    return (
      <AutoLayout
        fill="#FFFFFF"
        cornerRadius={4}
        direction="vertical"
        height="hug-contents"
        spacing={12}
        padding={12}
        width={720}
      >
        <AutoLayout width="fill-parent">
          <Text>Select a component</Text>
        </AutoLayout>
      </AutoLayout>
    );
  }

  return (
    <AutoLayout
      fill="#FFFFFF"
      cornerRadius={4}
      direction="vertical"
      height="hug-contents"
      spacing={12}
      padding={12}
      width={720}
    >
      {Object.values(spec).map(({ key, state }, i) => (
        <AutoLayout spacing={12} direction="vertical" width={"fill-parent"} key={i}>
          <Text fontSize={14} fontWeight={"semi-bold"}>
            {stringifyVariants(key)}
          </Text>
          <AutoLayout direction="vertical" width={"fill-parent"}>
            <AutoLayout fill="#dcdcdc" padding={12} width={"fill-parent"} spacing="auto">
              <AutoLayout width={"fill-parent"}>
                <Text fontSize={12}>State</Text>
              </AutoLayout>
              <AutoLayout width={"fill-parent"}>
                <Text fontSize={12}>Slot</Text>
              </AutoLayout>
              <AutoLayout width={"fill-parent"}>
                <Text fontSize={12}>Property</Text>
              </AutoLayout>
              <AutoLayout width={"fill-parent"}>
                <Text fontSize={12}>Value</Text>
              </AutoLayout>
            </AutoLayout>
            {state.map(({ key: state, slot }, i) => {
              return (
                <Fragment key={i}>
                  {slot.map(({ key: slot, property }, j) =>
                    property.map(({ key: property, value }, k) => (
                      <AutoLayout key={k} padding={12} width={"fill-parent"} spacing="auto">
                        <AutoLayout width={"fill-parent"}>
                          <Text fontSize={12}>
                            {j === 0 && k === 0 ? stringifyConditions(state) : ""}
                          </Text>
                        </AutoLayout>
                        <AutoLayout width={"fill-parent"}>
                          <Text fontSize={12}>{k === 0 ? slot : ""}</Text>
                        </AutoLayout>
                        <AutoLayout width={"fill-parent"}>
                          <Text fontSize={12}>{property}</Text>
                        </AutoLayout>
                        <AutoLayout width={"fill-parent"}>
                          <Text fontSize={12}>
                            {value.type === "token"
                              ? stringifyTokenExpression(value)
                              : stringifyPrimitiveExpression(value)}
                          </Text>
                        </AutoLayout>
                      </AutoLayout>
                    )),
                  )}
                </Fragment>
              );
            })}
          </AutoLayout>
        </AutoLayout>
      ))}
    </AutoLayout>
  );
}
widget.register(Widget);
