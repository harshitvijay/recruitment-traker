import React from "react";

interface FormInputInterface {
  label: string;
  type: string;
  placeHolder: string;
  error?: string;
  name: string;
  value?: string;
  onChang(e: React.ChangeEvent<HTMLInputElement>): void;
}

export default FormInputInterface;
