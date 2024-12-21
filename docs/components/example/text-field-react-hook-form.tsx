"use client";

import { ActionButton } from "seed-design/ui/action-button";
import { IconHouseLine } from "@daangn/react-monochrome-icon";
import { useForm } from "react-hook-form";
import { FormControl, TextField } from "seed-design/ui/text-field";

interface FormValues {
  name: string;
  address: string;
}

export default function TextFieldReactHookForm() {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<FormValues>();

  const onValid = (data: FormValues) => {
    window.alert(JSON.stringify(data, null, 2));
  };

  return (
    <form className="grid grid-cols-2 gap-3 w-full" onSubmit={handleSubmit(onValid)}>
      <FormControl
        {...register("name", { required: "필수 입력 항목입니다" })}
        label="이름"
        description="이름을 써주세요"
        invalid={!!errors.name}
        errorMessage={errors.name?.message}
        requiredIndicator="(필수)"
        required
      >
        <TextField placeholder="홍길동" />
      </FormControl>
      <FormControl
        {...register("address", {
          required: "필수 입력 항목입니다",
          pattern: {
            value: /^대한민국/,
            message: "대한민국으로 시작해주세요",
          },
        })}
        label="주소"
        description="주소를 써주세요"
        invalid={!!errors.address}
        errorMessage={errors.address?.message}
        requiredIndicator="(필수)"
        required
      >
        <TextField placeholder="대한민국 서울특별시 은평구" prefixIcon={<IconHouseLine />} />
      </FormControl>
      <div className="col-span-2 flex gap-2">
        <ActionButton type="submit" className="grow">
          제출
        </ActionButton>
        <ActionButton
          type="reset"
          onClick={() => clearErrors(["name", "address"])}
          variant="neutralWeak"
        >
          초기화
        </ActionButton>
      </div>
    </form>
  );
}
