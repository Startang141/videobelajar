import { FC } from "react";

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  name: string;
}

const InputField: FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  name,
}) => {
  return (
    <>
      <div>
        <label htmlFor="email" className="text-md text-slate-700">
          {label} <span className="text-red-600">*</span>
        </label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="border block w-full rounded-md border-gray-400 px-3 py-2.5 text-md focus:border-green-600 focus:outline focus:outline-green-600"
        />
      </div>
    </>
  );
};

export default InputField;
