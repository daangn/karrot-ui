"use client";

import { ActionButton } from "seed-design/ui/action-button";
import { useController, useForm } from "react-hook-form";
import { TextField, TextFieldTextarea } from "seed-design/ui/text-field";
import { useCallback, type FormEvent, type KeyboardEvent } from "react";

interface FormValues {
  bio: string;
  address: string;
}

export default function MultilineTextFieldReactHookForm() {
  const { handleSubmit, reset, control } = useForm<FormValues>({
    defaultValues: {
      bio: "",
      address: "",
    },
    shouldFocusError: true,
  });

  const { field: bioField, fieldState: bioFieldState } = useController({
    name: "bio",
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

  const onMetaReturn = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        handleSubmit(onValid)();
      }
    },
    [handleSubmit, onValid],
  );

  return (
    <form
      className="grid grid-cols-2 gap-3 w-full"
      onSubmit={handleSubmit(onValid)}
      onReset={onReset}
    >
      <TextField
        label="자기소개"
        indicator="(필수)"
        description="자기소개를 써주세요"
        invalid={bioFieldState.invalid}
        errorMessage={bioFieldState.error?.message}
        required
        {...bioField}
      >
        <TextFieldTextarea placeholder="저는…" onKeyDown={onMetaReturn} />
      </TextField>
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
        <TextFieldTextarea placeholder="대한민국" onKeyDown={onMetaReturn} />
      </TextField>
      <div className="col-span-2 flex gap-2">
        <ActionButton type="submit" className="grow">
          제출
        </ActionButton>
        <ActionButton type="reset" variant="neutralWeak">
          초기화
        </ActionButton>
      </div>
    </form>
  );
}
