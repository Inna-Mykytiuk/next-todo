"use client"
import { useRef, ReactNode } from "react";

interface formProps {
  className?: string;
  children: React.ReactNode;
  onsubmit?: () => void;
  action: (formData: FormData) => Promise<void | boolean>;
}

const Form = ({ children, action, className, onsubmit }: formProps) => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      className={className}
      onSubmit={onsubmit}
      ref={ref}
      action={async (formData) => {
        await action(formData)
        ref.current?.reset();
      }}

    >
      {children}
    </form>
  )
}

//comment

export { Form }
