import React, { FC, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { skillSetUrl } from "src/constants";
import { getCandidateProfile } from "src/service";
import FormMultipleInputInterface from "./FormMultipleInput.interface";
import "./style.css";

const FormMultipleInput: FC<FormMultipleInputInterface> = ({
  fields,
  setFields,
}) => {
  const [technology, setTechnology] = useState<string>("");
  const [data, setData] = useState<string[]>([]);
  const [skill, setSkill] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const inputElement = document.getElementById("techno") as HTMLInputElement;
  useEffect(() => {
    const getData = async () => {
      const data = await getCandidateProfile(skillSetUrl);
      if (data.success) {
        setSkill(data.data.skills);
      }
    };
    getData();
  }, []);

  const addText = (text: string): void => {
    setData((prevState) => {
      return [...prevState, text];
    });
    setFields(data);
  };
  const deleteText = (index: number): void => {
    const newData = [...data];
    const temp = newData.splice(index, 1);
    setData(temp);
  };
  const addCustomEvent = (event: any) => {
    if (event.which === 44 || event.which === 13) {
      addText(inputElement.value);
      setTechnology("");
      event.preventDefault();
    }
  };
  const onSuggestHandler = (text: any): void => {
    setTechnology(text);
    setSuggestions([]);
    console.log("textttttttt", text);
    setFields({ fields, [technology]: [text] });
    console.log("textttttttttttttttttttt", fields);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let matches: string[] = [];
    if (technology.length > 0) {
      matches = skill.filter((user: any) => {
        const regex = new RegExp(`${technology}`, "gi");
        console.log(regex);
        return user.name.match(regex);
      });
    }
    setSuggestions(matches);
    setTechnology(e.target.value);
    setFields({ ...fields, [e.target.name]: e.target.value });
  };
  return (
    <Form.Group className="mb-3">
      {data.length > 0 &&
        data.map((elem, index) => (
          <div key={index} className=" ps-2 rounded-pill lead select">
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
      <div>
        <Form.Label>
          Technology
          <span className="text-danger">*</span>
        </Form.Label>
      </div>
      <Form.Control
        id="techno"
        type="text"
        placeholder="Enter Technlogies"
        name="technology"
        value={fields.technology}
        onChange={handleChange}
        onKeyPress={addCustomEvent}
        // onBlur={() => {
        //   setTimeout(() => {
        //     setSuggestions([]);
        //   }, 100);
        // }}
      />
      {suggestions &&
        suggestions.map((suggestions: any, i: number) => (
          <div
            key={i}
            className="suggestions"
            onClick={() => onSuggestHandler(suggestions.name)}
          >
            {suggestions.name}
          </div>
        ))}
      <Form.Text className="text-danger">{}</Form.Text>
    </Form.Group>
  );
};

export default FormMultipleInput;
