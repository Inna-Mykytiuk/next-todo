"use client"
import { useRef } from "react";
import { ReactNode } from "react";

interface FormProps {
  children: ReactNode;
  className?: string;
  onSubmit?: () => void;
  action: (formData: FormData) => Promise<void | boolean>;
}

const Form = ({
  children,
  action,
  className,
  onSubmit,
}: FormProps) => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      className={className}
      onSubmit={onSubmit}
      ref={ref}
      action={async (formData) => {
        await action(formData);
        ref.current?.reset();
      }}
    >
      {children}
    </form>
  );
};

export { Form }
