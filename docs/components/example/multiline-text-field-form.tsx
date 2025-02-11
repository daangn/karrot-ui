"use client";

import { ActionButton } from "seed-design/ui/action-button";
import { TextField, TextFieldTextarea } from "seed-design/ui/text-field";
import { Column, Columns, Inline, Stack } from "seed-design/ui/layout";
import { useState, useCallback, type FormEvent } from "react";

interface FormValues {
  bio: string;
  address: string;
}

type FieldErrors = Record<keyof FormValues, string | null>;

export default function MultilineTextFieldForm() {
  const [formValues, setFormValues] = useState<FormValues>({
    bio: "",
    address: "",
  });

  const [fieldErrors, setFieldStates] = useState<FieldErrors>({
    bio: null,
    address: null,
  });

  const validateForm = useCallback((): boolean => {
    let isValid = true;

    const newFieldErrors: FieldErrors = {
      bio: null,
      address: null,
    };

    // Name validation
    if (!formValues.bio) {
      newFieldErrors.bio = "필수 입력 항목입니다";
      isValid = false;
    }

    if (!formValues.address.startsWith("대한민국")) {
      newFieldErrors.address = "대한민국으로 시작해주세요";
      isValid = false;
    }

    if (!formValues.address) {
      newFieldErrors.address = "필수 입력 항목입니다";
      isValid = false;
    }

    setFieldStates(newFieldErrors);

    return isValid;
  }, [formValues]);

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      if (validateForm()) {
        window.alert(JSON.stringify(formValues, null, 2));
      }
    },
    [formValues, validateForm],
  );

  const handleReset = useCallback((event: FormEvent) => {
    event.preventDefault();

    setFormValues({ bio: "", address: "" });
    setFieldStates({ bio: null, address: null });
  }, []);

  const handleNameChange = (value: string) => {
    setFormValues((prev) => ({ ...prev, bio: value }));
    setFieldStates((prev) => ({ ...prev, name: null }));
  };

  const handleAddressChange = (value: string) => {
    setFormValues((prev) => ({ ...prev, address: value }));
    setFieldStates((prev) => ({ ...prev, address: null }));
  };

  return (
    <Stack gap="x3" width="full" as="form" onSubmit={handleSubmit} onReset={handleReset}>
      <Columns gap="x2">
        <Column>
          <TextField
            label="자기소개"
            indicator="(필수)"
            description="자기소개를 써주세요"
            required
            value={formValues.bio}
            onValueChange={({ value }) => handleNameChange(value)}
            {...(fieldErrors.bio && { invalid: true, errorMessage: fieldErrors.bio })}
          >
            <TextFieldTextarea placeholder="저는…" />
          </TextField>
        </Column>
        <Column>
          <TextField
            label="주소"
            indicator="(필수)"
            description="주소를 써주세요"
            maxGraphemeCount={30}
            required
            value={formValues.address}
            onValueChange={({ slicedValue }) => handleAddressChange(slicedValue)}
            {...(fieldErrors.address && { invalid: true, errorMessage: fieldErrors.address })}
          >
            <TextFieldTextarea placeholder="대한민국" />
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
