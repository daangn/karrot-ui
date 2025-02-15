import { ActionButton } from "seed-design/ui/action-button";
import { useController, useForm } from "react-hook-form";
import { TextField, TextFieldInput } from "seed-design/ui/text-field";
import { useCallback, type FormEvent } from "react";
import { Column, Columns, Stack } from "seed-design/ui/layout";

interface FormValues {
  name: string;
  address: string;
}

export default function TextFieldReactHookForm() {
  const { handleSubmit, reset, control } = useForm<FormValues>({
    defaultValues: {
      name: "",
      address: "",
    },
  });

  const { field: nameField, fieldState: nameFieldState } = useController({
    name: "name",
    control,
    rules: {
      required: "필수 입력 항목입니다",
    },
  });
  const {
    field: { onChange: addressOnChange, ...addressField },
    fieldState: addressFieldState,
  } = useController({
    name: "address",
    control,
    rules: {
      required: "필수 입력 항목입니다",
      pattern: { value: /^대한민국/, message: "대한민국으로 시작해주세요" },
    },
  });

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
    <Stack gap="x3" width="full" as="form" onSubmit={handleSubmit(onValid)} onReset={onReset}>
      <Columns gap="x2">
        <Column>
          <TextField
            label="이름"
            indicator="(필수)"
            description="이름을 써주세요"
            invalid={nameFieldState.invalid}
            errorMessage={nameFieldState.error?.message}
            required
            {...nameField}
          >
            <TextFieldInput placeholder="홍길동" />
          </TextField>
        </Column>
        <Column>
          <TextField
            label="주소"
            indicator="(필수)"
            description="주소를 써주세요"
            invalid={addressFieldState.invalid}
            errorMessage={addressFieldState.error?.message}
            maxGraphemeCount={30}
            onValueChange={({ slicedValue }) => addressOnChange(slicedValue)}
            required
            {...addressField}
          >
            <TextFieldInput placeholder="대한민국" />
          </TextField>
        </Column>
      </Columns>
      <Columns gap="x2">
        <Column width="content">
          <ActionButton type="reset" variant="neutralWeak">
            초기화
          </ActionButton>
        </Column>
        <Column>
          <ActionButton type="submit">제출</ActionButton>
        </Column>
      </Columns>
    </Stack>
  );
}
