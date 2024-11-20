import * as V3Icons from "@daangn/react-monochrome-icon";
import * as V2Icons from "@seed-design/react-icon";
import Link from "fumadocs-core/link";
import * as changecase from "change-case";

export const V3 = ({
  name,
  type,
}: { name: keyof typeof V3Icons; type: "monochrome" | "multicolor" }) => {
  const NewIcon = V3Icons[name];

  if (!NewIcon) {
    return <code>{name}</code>;
  }

  const snakeCase = changecase.snakeCase(name);
  return (
    <div className="flex items-center gap-2">
      <NewIcon size={20} />
      <Link href={`/docs/design/foundation/iconography/${type}?icon=${snakeCase}`}>
        <code>{name}</code>
      </Link>
    </div>
  );
};

export const V2 = ({ name }: { name: keyof typeof V2Icons }) => {
  const OldIcon = V2Icons[name];

  if (!OldIcon) {
    return <code>{name}</code>;
  }

  return (
    <div className="flex items-center gap-2">
      <OldIcon size={20} />
      <code>{name}</code>
    </div>
  );
};
