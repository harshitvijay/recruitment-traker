import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Container from "react-bootstrap/Container";
import Button from "@restart/ui/esm/Button";
import Form from "react-bootstrap/Form";
import FormInput from "../FormInput";
import { ErrorInterface, FieldsInterface } from "src/common.interface";
import { signup } from "src/service";
import {
  nameValidation,
  emailValidation,
  passwordValidation,
  confirmPasswordValidation,
} from "src/validation";
import {
  initialFields,
  RegistrationFormInputData,
  signupUrl,
} from "src/constants";

const Signup: FC = () => {
  const [fields, setFields] = useState<FieldsInterface>(initialFields);
  const [errors, setErrors] = useState<ErrorInterface>(initialFields);

  const handleValidation = () => {
    let formIsValid = true;
    const fieldObj = { ...fields };
    const errorObj = { ...errors };
    errorObj.name = nameValidation(fieldObj.name, errorObj.name);
    errorObj.email = emailValidation(fieldObj.email, errorObj.email);
    errorObj.password = passwordValidation(
      fieldObj.password,
      errorObj.password
    );
    errorObj.confirmPassword = confirmPasswordValidation(
      {
        confirmPassword: fieldObj.confirmPassword,
        password: fieldObj.password,
      },
      errorObj.confirmPassword
    );
    if (
      errorObj.name !== "" ||
      errorObj.email !== "" ||
      errorObj.password !== "" ||
      errorObj.confirmPassword !== ""
    ) {
      formIsValid = false;
    }
    setErrors(errorObj);
    return formIsValid;
  };
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (handleValidation()) {
      const response = await signup(signupUrl, {
        name: fields.name,
        email: fields.email,
        password: fields.password,
        confirmPassword: fields.confirmPassword,
      });
      if (response.success) {
        swal(response.message, "", "success");
      } else {
        swal(response.message, "", "error");
      }
      setErrors(initialFields);
    }
    setFields(initialFields);
  };

  return (
    <Container className="w-50 border border-secondary p-4 bg-light mt-5">
      <Form>
        <h1 className="font-weight-bold text-center">User Registration Form</h1>
        {RegistrationFormInputData.map((data, index) => (
          <FormInput
            key={index}
            label={data.label}
            type={data.type}
            placeHolder={data.placeHolder}
            error={errors[data.name]}
            name={data.name}
            value={fields[data.name]}
            setFields={setFields}
            fields={fields}
          />
        ))}
        <Button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => handleSubmit(e)}
        >
          Signup
        </Button>
        <Link className="m-3" to="/">
          Login Here!
        </Link>
      </Form>
    </Container>
  );
};

export default Signup;
