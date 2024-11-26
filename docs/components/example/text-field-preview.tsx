import { TextField } from "seed-design/ui/text-field";

export default function TextFieldPreview() {
  return (
    <div className="flex gap-8">
      <div className="flex flex-col gap-8">
        <TextField
          label="Label"
          placeholder="Enabled"
          description="Description"
          required
          requiredIndicator="필수"
          optionalIndicator="선택"
        />
        <TextField
          label="Deserunt amet et dolore adipisicing velit culpa."
          placeholder="Enabled"
          description="Incididunt eiusmod occaecat exercitation eu do incididunt qui ex non."
          requiredIndicator="필수"
          optionalIndicator="선택"
        />
        <TextField label="Label" placeholder="Enabled" value="Enabled Value" />
        <TextField label="Label" placeholder="Disabled" disabled />
        <TextField label="Label" placeholder="Disabled" disabled value="Disabled Value" />
        <TextField label="Label" placeholder="Read Only" readOnly />
        <TextField label="Label" placeholder="Read Only" readOnly value="Read Only Value" />
        <TextField label="Label" placeholder="Error" invalid errorMessage="Error" />
        <TextField
          label="Label"
          placeholder="Error"
          invalid
          errorMessage="Error"
          value="Error Value"
        />
        <TextField
          label="Label"
          placeholder="Error"
          invalid
          errorMessage="Et tempor ut ad mollit esse in dolore veniam in occaecat incididunt qui sint aliquip."
          value="Error Value"
        />
      </div>
      <div className="flex flex-col gap-8">
        <TextField
          size="large"
          label="Label"
          placeholder="Enabled"
          description="Description"
          required
          requiredIndicator="필수"
          optionalIndicator="선택"
        />
        <TextField
          size="large"
          label="Deserunt amet et dolore adipisicing velit culpa."
          placeholder="Enabled"
          description="Incididunt eiusmod occaecat exercitation eu do incididunt qui ex non."
        />
        <TextField size="large" label="Label" placeholder="Enabled" value="Enabled Value" />
        <TextField size="large" label="Label" placeholder="Disabled" disabled />
        <TextField
          size="large"
          label="Label"
          placeholder="Disabled"
          disabled
          value="Disabled Value"
        />
        <TextField size="large" label="Label" placeholder="Read Only" readOnly />
        <TextField
          size="large"
          label="Label"
          placeholder="Read Only"
          readOnly
          value="Read Only Value"
        />
        <TextField size="large" label="Label" placeholder="Error" invalid errorMessage="Error" />
        <TextField
          size="large"
          label="Label"
          placeholder="Error"
          invalid
          errorMessage="Error"
          value="Error Value"
        />
        <TextField size="large" label="Label" placeholder="Enabled" description="Description" />
        <TextField
          size="large"
          label="Deserunt amet et dolore adipisicing velit culpa."
          placeholder="Enabled"
          description="Incididunt eiusmod occaecat exercitation eu do incididunt qui ex non."
        />
        <TextField
          size="large"
          label="Label"
          placeholder="Error"
          invalid
          errorMessage="Et tempor ut ad mollit esse in dolore veniam in occaecat incididunt qui sint aliquip."
          value="Error Value"
        />
      </div>
      <div className="flex flex-col gap-8">
        <TextField
          size="xlarge"
          label="Label"
          placeholder="Enabled"
          description="Description"
          required
          requiredIndicator="필수"
          optionalIndicator="선택"
        />
        <TextField
          size="xlarge"
          label="Deserunt amet et dolore adipisicing velit culpa."
          placeholder="Enabled"
          description="Incididunt eiusmod occaecat exercitation eu do incididunt qui ex non."
        />
        <TextField size="xlarge" label="Label" placeholder="Enabled" value="Enabled Value" />
        <TextField size="xlarge" label="Label" placeholder="Disabled" disabled />
        <TextField
          size="xlarge"
          label="Label"
          placeholder="Disabled"
          disabled
          value="Disabled Value"
        />
        <TextField size="xlarge" label="Label" placeholder="Read Only" readOnly />
        <TextField
          size="xlarge"
          label="Label"
          placeholder="Read Only"
          readOnly
          value="Read Only Value"
        />
        <TextField size="xlarge" label="Label" placeholder="Error" invalid errorMessage="Error" />
        <TextField
          size="xlarge"
          label="Label"
          placeholder="Error"
          invalid
          errorMessage="Error"
          value="Error Value"
        />
        <TextField size="xlarge" label="Label" placeholder="Enabled" description="Description" />
        <TextField
          size="xlarge"
          label="Deserunt amet et dolore adipisicing velit culpa."
          placeholder="Enabled"
          description="Incididunt eiusmod occaecat exercitation eu do incididunt qui ex non."
        />
        <TextField
          size="xlarge"
          label="Label"
          placeholder="Error"
          invalid
          errorMessage="Et tempor ut ad mollit esse in dolore veniam in occaecat incididunt qui sint aliquip."
          value="Error Value"
        />
      </div>
    </div>
  );
}
