import { getRootage, stringifyValueLit } from "@/components/rootage";
import { TokenLink } from "@/components/token-link";
import { TypeIndicator } from "@/components/type-indicator";
import { IconArrowRightLine } from "@daangn/react-monochrome-icon";
import { resolveReferences, resolveToken } from "@seed-design/rootage-core";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";

function decodeTokenIdFromParams(id: string) {
  return decodeURIComponent(id) as `$${string}`;
}

export default async function Page({
  params,
}: {
  params: { id: string };
}) {
  const rootage = await getRootage();
  const tokenId = decodeTokenIdFromParams(params.id);
  const decl = rootage.tokenEntities[tokenId];
  const { path, value } = resolveToken(rootage, tokenId, {
    global: "default",
    color: "theme-light",
  });
  const references = resolveReferences(rootage, tokenId, {
    global: "default",
    color: "theme-light",
  });

  return (
    <DocsPage tableOfContent={{ enabled: false }}>
      <DocsTitle>{tokenId}</DocsTitle>
      <DocsDescription>{decl.description}</DocsDescription>
      <DocsBody>
        <h2>Definition</h2>
        <div className="flex items-center space-x-2">
          {path.map((id) => (
            <Fragment key={id}>
              <div className="flex items-center space-x-2 px-3 py-2 bg-fd-background rounded-md border border-fd-border">
                <TypeIndicator value={value} />
                <TokenLink id={id} />
              </div>
              <IconArrowRightLine className="w-4 h-4" />
            </Fragment>
          ))}
          <div className="flex items-center space-x-2 px-3 py-2 bg-fd-background rounded-md border border-fd-border">
            <TypeIndicator value={value} />
            <div>{stringifyValueLit(value)}</div>
          </div>
        </div>
        <h2>References</h2>
        <table>
          <thead>
            <tr>
              <th>이름</th>
            </tr>
          </thead>
          <tbody>
            {references.map((ref) => (
              <tr key={ref}>
                <td>
                  {ref.startsWith("$") ? (
                    <TokenLink id={ref} />
                  ) : (
                    <Link href={`/docs/design/components/${ref.split("/")[0]}`}>{ref}</Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  const rootage = await getRootage();

  return rootage.tokenIds.map((id) => ({
    id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const rootage = await getRootage();
  const tokenId = decodeTokenIdFromParams(params.id);
  const decl = rootage.tokenEntities[tokenId];

  return {
    title: tokenId ?? "SEED Design Token",
    description: decl?.description ?? null,
  } satisfies Metadata;
}
