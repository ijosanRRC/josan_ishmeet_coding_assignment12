import React from "react";

interface RadioButtonProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  checked,
  onChange,
}) => {
  return (
    <div>
      <input type="radio" value={value} checked={checked} onChange={onChange} />
      <label>{label}</label>
    </div>
  );
};

export default RadioButton;
export type { RadioButtonProps };
