import React, { FC, useState } from "react";
import Form from "react-bootstrap/Form";
import "./style.css";

const FormMultipleInput: FC = () => {
  const [technology, setTechnology] = useState<string>("");
  const [data, setData] = useState<string[]>([]);
  const inputElement = document.getElementById("techno") as HTMLInputElement;

  const addText = (text: string): void => {
    setData((prevState) => {
      return [...prevState, text];
    });
  };
  const deleteText = (index: number): void => {
    const newData = [...data];
    console.log(index);
    const temp = newData.splice(index, 1);
    console.log(temp);
    setData(temp);
  };
  const addCustomEvent = (event: any) => {
    if (event.which === 44 || event.which === 13) {
      addText(inputElement.value);
      console.log(data);
      setTechnology("");
      event.preventDefault();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTechnology(e.target.value);
  };
  return (
    <Form.Group className="mb-3">
      {data.length > 0 &&
        data.map((elem, index) => (
          <div
            key={index}
            className="text-light bg-warning ms-2 ps-1 d-flex rounded-pill lead"
          >
            <span>{elem}</span>
            <span
              id={`${index}`}
              className="ms-2 p-2 lead close-button"
              onClick={() => deleteText(index)}
            >
              &times;
            </span>
          </div>
        ))}
      <Form.Label>
        Technology
        <span className="text-danger">*</span>
      </Form.Label>
      <Form.Control
        id="techno"
        type="text"
        placeholder="Enter Technlogies"
        name="techno"
        value={technology}
        onChange={handleChange}
        onKeyPress={addCustomEvent}
      />
      <Form.Text className="text-danger">{}</Form.Text>
    </Form.Group>
  );
};

export default FormMultipleInput;
