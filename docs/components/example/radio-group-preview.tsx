"use client";

import { RadioGroup, Radio } from "seed-design/ui/radio-group";

export default function RadioGroupPreview() {
  return (
    <RadioGroup size="large">
      <Radio
        label="Est excepteur qui eu est anim sit adipisicing id eu tempor nulla officia amet laborum."
        value="a"
      />
      <Radio
        label="Et consectetur non esse eu nisi ad esse et minim elit aute cillum nulla."
        value="b"
      />
      <Radio label="Irure aliqua culpa eiusmod incididunt incididunt." value="c" />
    </RadioGroup>
  );
}
