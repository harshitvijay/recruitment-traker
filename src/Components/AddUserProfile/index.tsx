import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import DashboardHeader from "../DashboardHeader";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";
import FormMultipleInput from "../FormMultipleInput";
import { UserProfileInterface } from "./userProfile.interface";
import {
  addProfileFormSelect,
  CandidatePersonalInfo,
  userProfileInitialFields,
  userProfileListUrl,
} from "src/constants";
import { getCandidateProfile } from "src/service";
import { nameValidation, emailValidation } from "src/validation";
import { formatProfileData, userID } from "src/utils";

const AddUserProfile: FC = () => {
  const [fields, setFields] = useState<UserProfileInterface>(
    userProfileInitialFields
  );
  const [errors, setErrors] = useState<UserProfileInterface>(
    userProfileInitialFields
  );
  const id = userID();
  useEffect(() => {
    const getData = async () => {
      const data = await getCandidateProfile(userProfileListUrl, id);
      if (data.success) {
        const result = await formatProfileData(data.data.profiles[0]);
        setFields(result);
      }
    };
    getData();
  }, []);
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
              <Col key={index} xs={4}>
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
          </Row>
          <Row>
            <Col xs={4}>
              <FormMultipleInput />
            </Col>
          </Row>
          <Button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => handleSubmit(e)}
          >
            Add User
          </Button>
          <Link type="submit" className="btn btn-danger " to={"/tables"}>
            Cancle
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default AddUserProfile;
