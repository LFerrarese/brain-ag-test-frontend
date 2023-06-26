import { FormEvent, ReactNode } from "react";

type FormProps = {
  onSubmit: (event?: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
};

export const Form = ({ onSubmit, children }: FormProps): JSX.Element => (
  <form onSubmit={onSubmit}>{children}</form>
);
