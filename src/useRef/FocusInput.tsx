import { useEffect, useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <div>
      <h2>FocusInput</h2>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default FocusInput;
