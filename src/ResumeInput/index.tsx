import { FC } from "react";
import { Form } from "react-bootstrap";
import ResumInputInterface from "./ResumeInput.interface";

const handleChange = (e: any) => {
  const files = e.target.files;
  const reader = new FileReader();
  reader.readAsDataURL(files[0]);
  reader.onload = (e) => {
    console.log("image data", e.target?.result);
  };
};
const ResumeInput: FC<ResumInputInterface> = () => {
  return (
    <div>
      <Form.Group>
        <Form.Label>
          Upload Resume <span className="text-danger">*</span>
        </Form.Label>
        <Form.Control type="file" onChange={(e) => handleChange(e)} />
      </Form.Group>
    </div>
  );
};
export default ResumeInput;
