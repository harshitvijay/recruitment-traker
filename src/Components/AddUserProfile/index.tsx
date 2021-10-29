import React, { FC, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import DashboardHeader from "../DashboardHeader";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";
import { UserProfileInterface } from "./userProfile.interface";
import {
  addProfileFormSelect,
  CandidatePersonalInfo,
  userProfileInitialFields,
} from "src/constants";
import { nameValidation, emailValidation } from "src/validation";

const AddUserProfile: FC = () => {
  const gender = "gender";
  const dob = "dob";
  const [fields, setFields] = useState<UserProfileInterface>(
    userProfileInitialFields
  );
  const [errors, setErrors] = useState<UserProfileInterface>(
    userProfileInitialFields
  );

  const handleValidation = () => {
    let formIsValid = true;
    const fieldObj = { ...fields };
    const errorObj = { ...errors };
    errorObj.name = nameValidation(fieldObj.name, errorObj.name);
    errorObj.email = emailValidation(fieldObj.email, errorObj.email);
    if (errorObj.name !== "" || errorObj.email !== "") {
      formIsValid = false;
    }
    setErrors(errorObj);
    return formIsValid;
  };
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (handleValidation()) {
      console.log(fields);
    }
    setFields(userProfileInitialFields);
  };

  return (
    <div className="dash-content">
      <DashboardHeader title="Add Profile" mainHeading="Add Users" />
      <div className="row my-4">
        <Form>
          <Row>
            <h4 className="text-secondary">Enter Candidate Info</h4>
            {CandidatePersonalInfo.map((data, index) => (
              <Col key={index}>
                <FormInput
                  label={data.label}
                  type={data.type}
                  placeHolder={data.placeHolder}
                  error={errors[data.name]}
                  name={data.name}
                  value={fields[data.name]}
                  setFields={setFields}
                  fields={fields}
                />
              </Col>
            ))}
          </Row>
          <Row>
            {addProfileFormSelect.map((data, index) => (
              <Col key={index}>
                <FormSelect
                  label={data.label}
                  error={errors[data.name]}
                  name={data.name}
                  fields={fields}
                  setFields={setFields}
                  option={data.option}
                />
              </Col>
            ))}
            <Col>
              <FormInput
                label="Birth Date"
                type="date"
                placeHolder="Birth Date"
                error={errors[gender]}
                name="dob"
                value={fields[dob]}
                setFields={setFields}
                fields={fields}
              />
            </Col>
          </Row>
          <Button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => handleSubmit(e)}
          >
            Add User
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddUserProfile;
