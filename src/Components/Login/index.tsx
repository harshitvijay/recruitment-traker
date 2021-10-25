import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "@restart/ui/esm/Button";
import Form from "react-bootstrap/Form";
import swal from "sweetalert";
import FormInput from "../FormInput";
import { ErrorInterface, FieldsInterface } from "src/common.interface";
import { login } from "src/service";
import { emailValidation, passwordValidation } from "src/validation";
import { LoginFormInputData, initialFields, loginUrl } from "src/constants";

const Login: FC = () => {
  const [fields, setFields] = useState<FieldsInterface>(initialFields);
  const [errors, setErrors] = useState<ErrorInterface>(initialFields);
  // const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };
  const handleValidation = () => {
    let formIsValid = true;
    const fieldObj = { ...fields };
    let errorObj = { ...errors };
    errorObj = emailValidation(fieldObj, errorObj);
    errorObj = passwordValidation(fieldObj, errorObj);
    if (errorObj.email !== "" || errorObj.password !== "") {
      formIsValid = false;
    }
    setErrors(errorObj);
    return formIsValid;
  };
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (handleValidation()) {
      e.preventDefault();
      const temp = { email: fields.email, password: fields.password };
      const response = await login(loginUrl, temp);
      const data = {
        userId: response.data.user.id,
        token: response.data.token,
        userName: response.data.user.name,
        userEmail: response.data.user.email,
        userType: response.data.user.user_type,
      };
      sessionStorage.setItem("currentUser", JSON.stringify(data));
      if (response.success) {
        swal(response.message, "", "success").then((value) => {
          window.location.href = `/dashboard?username=${data.userName}`;
        });
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
        <h1 className="font-weight-bold text-center">User Login Form</h1>
        {LoginFormInputData.map((data, index) => (
          <FormInput
            key={index}
            label={data.label}
            type={data.type}
            placeHolder={data.placeHolder}
            name={data.name}
            error={errors[data.name]}
            value={fields[data.name]}
            onChang={handleChange}
          />
        ))}
        <Button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => handleSubmit(e)}
        >
          Login
        </Button>
        <Link className="m-3" to="/signup">
          New Registration!
        </Link>
      </Form>
    </Container>
  );
};

export default Login;
