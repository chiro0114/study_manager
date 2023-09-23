import Input from "@/components/Input";
import React from "react";

type FormInputProps = {
  label: string;
};

const FormInput: React.FC<FormInputProps> = ({ label }) => {
  return (
    <div className="mb-4">
      <label className="font-bold text-sm ">
        {label}
        <Input className="w-full h-10 pl-2 border border-cMain rounded-md" />
      </label>
    </div>
  );
};

export default FormInput;
