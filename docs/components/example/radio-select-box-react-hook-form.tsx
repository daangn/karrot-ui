"use client";

import { Column, Columns, Stack } from "@seed-design/react";
import { useCallback, type FormEvent } from "react";
import { useController, useForm } from "react-hook-form";
import { ActionButton } from "seed-design/ui/action-button";
import { RadioSelectBoxItem, RadioSelectBoxRoot } from "seed-design/ui/select-box";

const POSSIBLE_FRUIT_VALUES = ["apple", "melon", "mango"] as const;

interface FormValues {
  fruit: (typeof POSSIBLE_FRUIT_VALUES)[number];
}

export default function RadioSelectBoxReactHookForm() {
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
    <form onSubmit={handleSubmit(onValid)} onReset={onReset}>
      <Stack gap="s3" width="384px">
        <RadioSelectBoxRoot aria-label="Fruit" {...field}>
          <Stack gap="spacingY.componentDefault">
            {POSSIBLE_FRUIT_VALUES.map((value) => (
              <RadioSelectBoxItem key={value} value={value} label={value} />
            ))}
          </Stack>
        </RadioSelectBoxRoot>
        <Columns gap="s2">
          <Column>
            <ActionButton type="submit">제출</ActionButton>
          </Column>
          <Column width="content">
            <ActionButton
              type="button"
              variant="neutralWeak"
              onClick={() => setValue("fruit", "mango")}
            >
              mango 선택
            </ActionButton>
          </Column>
          <Column width="content">
            <ActionButton type="reset" variant="neutralWeak">
              초기화
            </ActionButton>
          </Column>
        </Columns>
      </Stack>
    </form>
  );
}
