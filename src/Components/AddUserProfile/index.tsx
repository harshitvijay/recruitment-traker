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
  userProfileUpdatedProfileListUrl,
  userCreateProfileListUrl,
} from "src/constants";
import { getCandidateProfile, postCandidateProfile } from "src/service";
import {
  nameValidation,
  emailValidation,
  phoneNumberValidation,
  fieldValidation,
} from "src/validation";
import { formatProfileData, userID } from "src/utils";
import swal from "sweetalert";
import ResumeInput from "src/ResumeInput";
import { UserProfileType } from "src/common.interface";

const AddUserProfile: FC = () => {
  const [fields, setFields] = useState<UserProfileInterface>(
    userProfileInitialFields
  );
  const [errors, setErrors] = useState<UserProfileInterface>(
    userProfileInitialFields
  );
  const [showEditing, setShowEditing] = useState<boolean>(false);
  const id = userID();
  useEffect(() => {
    const getData = async () => {
      if (!id) {
        setFields(userProfileInitialFields);
      } else {
        const data = await getCandidateProfile(userProfileListUrl, id);
        if (data.success) {
          const result = await formatProfileData(data.data.profiles[0]);
          setFields(result);
          setShowEditing(true);
        }
      }
    };
    getData();
  }, [id]);
  const handleValidation = () => {
    let formIsValid = true;
    const fieldObj = { ...fields };
    const errorObj = { ...errors };
    errorObj.name = nameValidation(fieldObj.name, errorObj.name);
    errorObj.email = emailValidation(fieldObj.email, errorObj.email);
    errorObj.contact_no = phoneNumberValidation(
      fieldObj.contact_no,
      errorObj.contact_no
    );
    errorObj.current_salary = fieldValidation(
      fieldObj.current_salary,
      errorObj.current_salary
    );
    errorObj.current_status = fieldValidation(
      fieldObj.current_status,
      errorObj.current_status
    );
    errorObj.expected_ctc = fieldValidation(
      fieldObj.expected_ctc,
      errorObj.expected_ctc
    );
    errorObj.experience = fieldValidation(
      fieldObj.experience,
      errorObj.experience
    );
    errorObj.source_of_hire = fieldValidation(
      fieldObj.source_of_hire,
      errorObj.source_of_hire
    );
    errorObj.gender = fieldValidation(fieldObj.gender, errorObj.gender);
    errorObj.head_hunted_by = fieldValidation(
      fieldObj.head_hunted_by,
      errorObj.head_hunted_by
    );
    errorObj.notice_period = fieldValidation(
      fieldObj.notice_period,
      errorObj.notice_period
    );
    if (errorObj.name !== "" || errorObj.email !== "") {
      formIsValid = false;
    }
    setErrors(errorObj);
    return formIsValid;
  };
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (handleValidation()) {
      const userModifiedData: UserProfileType = {
        name: fields.name,
        email: fields.email,
        // gender: fields.gender,
        experience: fields.experience,
        current_salary: fields.current_salary,
        expected_ctc: fields.expected_ctc,
        notice_period: fields.notice_period,
        current_status: fields.current_status,
        technology: fields.technology,
        contact_no: fields.contact_no,
        head_hunted_by: fields.head_hunted_by,
        source_of_hire: fields.source_of_hire,
        id: 0,
        created_at: "",
        updated_at: "",
      };
      if (id) {
        const response = await postCandidateProfile(
          `${userProfileUpdatedProfileListUrl}${id}`,
          userModifiedData
        );
        if (response.success) {
          swal(response.message, "", "success");
        } else {
          swal(response.message, "", "error");
        }
        setErrors(userProfileInitialFields);
      } else {
        const response = await postCandidateProfile(
          userCreateProfileListUrl,
          userModifiedData
        );
        if (response.success) {
          swal(response.message, "", "success");
        } else {
          swal(response.message, "", "error");
        }
        setErrors(userProfileInitialFields);
        setFields(userProfileInitialFields);
      }
    }
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
              <FormMultipleInput fields={fields} setFields={setFields} />
            </Col>
            <Col xs={4}>
              <ResumeInput fields={fields} setFields={setFields} />
            </Col>
          </Row>
          <Button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => handleSubmit(e)}
          >
            ADD
          </Button>
          {showEditing ? (
            <Link type="submit" className="btn btn-danger " to={"/tables"}>
              Done editing
            </Link>
          ) : null}
        </Form>
      </div>
    </div>
  );
};

export default AddUserProfile;
