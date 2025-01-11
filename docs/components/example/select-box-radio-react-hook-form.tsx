"use client";

import { useForm, useController } from "react-hook-form";
import { SelectBoxRadio, SelectBoxRadioGroup } from "seed-design/ui/select-box";
import { ActionButton } from "seed-design/ui/action-button";
import { useCallback, type FormEvent } from "react";

const POSSIBLE_FRUIT_VALUES = ["apple", "melon", "mango"] as const;

interface FormValues {
  fruit: (typeof POSSIBLE_FRUIT_VALUES)[number];
}

export default function SelectBoxRadioReactHookForm() {
  const { handleSubmit, reset, setValue, control } = useForm<FormValues>({
    defaultValues: {
      fruit: "melon",
    },
  });
  const { field } = useController({ name: "fruit", control });

  const onValid = useCallback((data: FormValues) => {
    window.alert(JSON.stringify(data, null, 2));
  }, []);

  const onReset = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      reset();
    },
    [reset],
  );

  return (
    <div>
      <form className="flex flex-col gap-3 w-96" onSubmit={handleSubmit(onValid)} onReset={onReset}>
        <SelectBoxRadioGroup aria-label="Fruit" {...field}>
          {POSSIBLE_FRUIT_VALUES.map((value) => (
            <SelectBoxRadio key={value} value={value} label={value} />
          ))}
        </SelectBoxRadioGroup>
        <div className="flex gap-2">
          <ActionButton type="submit" className="grow">
            제출
          </ActionButton>
          <ActionButton
            type="button"
            variant="neutralWeak"
            onClick={() => setValue("fruit", "mango")}
          >
            mango 선택
          </ActionButton>
          <ActionButton type="reset" variant="neutralWeak">
            초기화
          </ActionButton>
        </div>
      </form>
    </div>
  );
}
