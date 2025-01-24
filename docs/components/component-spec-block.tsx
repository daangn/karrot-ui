import { Fragment } from "react";
import { ComponentVariantTable } from "./component-variant-table";
import { getRootage } from "./rootage";
import { stringifyVariants } from "./rootage";

interface ComponentSpecTableProps {
  id: string;
}

export async function ComponentSpecBlock(props: ComponentSpecTableProps) {
  const rootage = await getRootage();
  const componentSpec = rootage.componentSpecEntities[props.id];

  if (!componentSpec) {
    return <div>Component spec {props.id} not found</div>;
  }

  return componentSpec.body.map((variantDecl) => {
    const variantKey = stringifyVariants(variantDecl.variants);
    return (
      <Fragment key={variantKey}>
        <h3>{variantKey}</h3>
        <ComponentVariantTable rootage={rootage} variant={variantDecl} />
      </Fragment>
    );
  });
}
