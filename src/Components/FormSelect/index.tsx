import React, { FC } from "react";
import Form from "react-bootstrap/Form";
import FormSelectInterface from "./FormSelect.interface";

const FormSelect: FC<FormSelectInterface> = ({
  label,
  error,
  name,
  fields,
  setFields,
  option,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };
  console.log("field select", fields[name]);
  return (
    <Form.Group className="mb-3">
      <Form.Label>
        {label}
        <span className="text-danger">*</span>
      </Form.Label>
      <Form.Select
        onChange={handleChange}
        name={name}
        // defaultValue={option[0]}
        value={fields[name]}
      >
        {option.map((val: string, index: number) => (
          <option key={index} value={val}>
            {val}
          </option>
        ))}
      </Form.Select>
      <Form.Text className="text-danger">{error}</Form.Text>
    </Form.Group>
  );
};

export default FormSelect;
