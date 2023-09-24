import Input from "@/components/Input";
import React, { forwardRef } from "react";

type FormInputProps = {
  label: string;
};

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({ label, ...props }, ref) => {
  return (
    <div className="mb-4">
      <label className="font-bold text-sm ">
        {label}
        <Input ref={ref} className="w-full h-10 pl-2 border border-cMain rounded-md" {...props} />
      </label>
    </div>
  );
});

FormInput.displayName = "FormInput";

export default FormInput;
