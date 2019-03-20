import { useState } from "react";

export function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  const onChange = ({ target: { value } }) => {
    setValue(value);
  };

  return { value, onChange };
}
