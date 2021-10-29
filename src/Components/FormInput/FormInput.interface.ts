interface FormInputInterface {
  label: string;
  type: string;
  placeHolder: string;
  error?: string;
  name: string;
  value?: string;
  setFields(fields: any): void;
  fields: any;
}

export default FormInputInterface;
