import {
  ComponentSpecExpression,
  stringifyTokenExpression,
  stringifyValueExpression,
} from "@seed-design/rootage-core";
import { getRootage } from "./get-rootage";
import { Fragment } from "react";

interface ComponentSpecTableProps {
  id: string;
}

function stringifyVariantKey(key: Record<string, string>) {
  const entries = Object.entries(key);

  if (entries.length === 0) {
    return "base";
  }

  return entries.map(([key, value]) => `${key}=${value}`).join(", ");
}

function VariantTable(props: { variant: ComponentSpecExpression[number] }) {
  const { variant } = props;
  const tableItems = variant.state.flatMap((state) => {
    const stateKey = state.key.join(", ");
    return state.slot.flatMap((slot) => {
      const slotKey = slot.key;
      return slot.property.map((property) => {
        const propertyKey = property.key;
        const value = property.value;
        return {
          stateKey,
          slotKey,
          propertyKey,
          value,
        };
      });
    });
  });

  return (
    <table>
      <colgroup>
        <col style={{ width: "15%" }} />
        <col style={{ width: "15%" }} />
        <col style={{ width: "15%" }} />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th>상태</th>
          <th>슬롯</th>
          <th>속성</th>
          <th>값</th>
        </tr>
      </thead>
      <tbody>
        {tableItems.map(({ stateKey, slotKey, propertyKey, value }, index) => {
          const prevItem = tableItems[index - 1];
          const shouldRenderState = stateKey !== prevItem?.stateKey;
          const shouldRenderSlot = shouldRenderState || slotKey !== prevItem?.slotKey;
          const shouldRenderProperty = shouldRenderSlot || propertyKey !== prevItem?.propertyKey;
          return (
            <tr key={`${stateKey}/${slotKey}/${propertyKey}`}>
              <td>{shouldRenderState ? stateKey : null}</td>
              <td>{shouldRenderSlot ? slotKey : null}</td>
              <td>{shouldRenderProperty ? propertyKey : null}</td>
              <td>
                {value.type === "token"
                  ? stringifyTokenExpression(value)
                  : stringifyValueExpression(value)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export async function ComponentSpecTable(props: ComponentSpecTableProps) {
  const rootage = await getRootage();
  const componentSpec = rootage.componentSpecs.find((spec) => spec.id === props.id);

  if (!componentSpec) {
    return <div>Component spec {props.id} not found</div>;
  }

  return componentSpec.data.map((variant) => {
    const variantKey = stringifyVariantKey(variant.key);
    return (
      <Fragment key={variantKey}>
        <h3>{variantKey}</h3>
        <VariantTable variant={variant} />
      </Fragment>
    );
  });
}
