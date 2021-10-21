import { FC } from "react";
import Form from "react-bootstrap/Form";
import FormInputInterface from "./FormInput.interface";

const FormInput: FC<FormInputInterface> = ({
  label,
  type,
  placeHolder,
  error,
  value,
  name,
  onChang,
}) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>
        {label}
        <span className="text-danger">*</span>
      </Form.Label>
      <Form.Control
        type={type}
        placeholder={placeHolder}
        name={name}
        value={value}
        onChange={onChang}
      />
      <Form.Text className="text-danger">{error}</Form.Text>
    </Form.Group>
  );
};

export default FormInput;
