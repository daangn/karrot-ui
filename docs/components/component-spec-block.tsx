import { Fragment } from "react";
import { ComponentVariantTable } from "./component-variant-table";
import { getRootage } from "./get-rootage";

function stringifyVariantKey(key: Record<string, string>) {
  const entries = Object.entries(key);

  if (entries.length === 0) {
    return "base";
  }

  return entries.map(([key, value]) => `${key}=${value}`).join(", ");
}

interface ComponentSpecTableProps {
  id: string;
}

export async function ComponentSpecBlock(props: ComponentSpecTableProps) {
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
        <ComponentVariantTable variant={variant} />
      </Fragment>
    );
  });
}
