"use client";

import { RadioGroup, Radio } from "seed-design/ui/radio-group";

export default function RadioGroupPreview() {
  return (
    <div className="flex flex-col gap-4">
      <RadioGroup fontWeight="bold" label="Label">
        <Radio value="a">
          Est excepteur qui eu est anim sit adipisicing id eu tempor nulla officia amet laborum.
        </Radio>
        <Radio value="b">
          Et consectetur non esse eu nisi ad esse et minim elit aute cillum nulla.
        </Radio>
        <Radio value="c">Irure aliqua culpa eiusmod incididunt incididunt.</Radio>
      </RadioGroup>
      <RadioGroup orientation="horizontal">
        <Radio value="a">exercitation</Radio>
        <Radio value="b">aliqua</Radio>
        <Radio value="c">dolore</Radio>
      </RadioGroup>
    </div>
  );
}
