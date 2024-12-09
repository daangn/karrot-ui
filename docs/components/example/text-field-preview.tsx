import { IconPlusCircleLine } from "@daangn/react-monochrome-icon";
import { FormControl, TextField } from "seed-design/ui/text-field";

export default function TextFieldPreview() {
  return (
    <FormControl label="Hello world" required requiredIndicator="asdf" maxGraphemeCount={10}>
      <TextField placeholder="Placeholder" prefix="https://" suffixIcon={<IconPlusCircleLine />} />
    </FormControl>
  );
}
