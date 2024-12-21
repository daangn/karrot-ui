"use client";

import { ActionButton } from "seed-design/ui/action-button";
import { IconHouseLine } from "@daangn/react-monochrome-icon";
import { useForm } from "react-hook-form";
import { FormControl, MultilineTextField } from "seed-design/ui/text-field";

interface FormValues {
  bio: string;
  address: string;
}

export default function MultilineTextFieldReactHookForm() {
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
        {...register("bio", { required: "필수 입력 항목입니다" })}
        label="자기소개"
        description="자기소개를 써주세요"
        invalid={!!errors.bio}
        errorMessage={errors.bio?.message}
        requiredIndicator="(필수)"
        required
      >
        <MultilineTextField placeholder="저는…" />
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
        <MultilineTextField placeholder="대한민국 서울특별시 은평구" />
      </FormControl>
      <div className="col-span-2 flex gap-2">
        <ActionButton type="submit" className="grow">
          제출
        </ActionButton>
        <ActionButton
          type="reset"
          onClick={() => clearErrors(["bio", "address"])}
          variant="neutralWeak"
        >
          초기화
        </ActionButton>
      </div>
    </form>
  );
}
