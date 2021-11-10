export const RegistrationFormInputData = [
  {
    label: "Name",
    type: "text",
    placeHolder: "Enter Name",
    name: "name",
  },
  {
    label: "Email Address",
    type: "email",
    placeHolder: "Enter Email",
    name: "email",
  },
  {
    label: "Password",
    type: "password",
    placeHolder: "Enter Password",
    name: "password",
  },
  {
    label: "Confirm Password",
    type: "password",
    placeHolder: "Enter Confirm Password",
    name: "confirmPassword",
  },
];

export const LoginFormInputData = [
  {
    label: "Email Address",
    type: "email",
    placeHolder: "Enter Email",
    name: "email",
  },
  {
    label: "Password",
    type: "password",
    placeHolder: "Enter Password",
    name: "password",
  },
];

export const addProfileFormSelect = [
  {
    label: "Gender",
    name: "gender",
    option: ["Male", "Female", "Other"],
  },
  {
    label: "Joining Location",
    name: "location",
    option: ["Indore", "Pune", "Hyderabad", "Ahemdabad"],
  },
  {
    label: "Hunted By",
    name: "hunted_by",
    option: [
      "Aman Yadva",
      "Vishal Soni",
      "Ayush Saini",
      "Samiksha Agrawal",
      "Ayushi Sengar",
      "Mohini Bansal",
      "Arpita Saxena",
    ],
  },
];
export const initialFields = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export const userProfileInitialFields = {
  name: "",
  email: "",
  gender: "",
  experience: "",
  current_salary: "",
  expected_ctc: "",
  notice_period: "",
  current_status: "",
  technology: "",
  contact_no: "",
  head_hunted_by: "",
  source_of_hire: "",
};

export const CandidatePersonalInfo = [
  {
    label: "Name",
    type: "text",
    placeHolder: "Enter Name",
    name: "name",
  },
  {
    label: "Email Address",
    type: "email",
    placeHolder: "Enter Email",
    name: "email",
  },

  {
    label: "Contact Number",
    type: "tel",
    placeHolder: "Enter Number",
    name: "contact_no",
  },
  {
    label: "Birth Date",
    type: "date",
    placeHolder: "Enter DOB",
    name: "dob",
  },
  {
    label: "Current CTC(In Lakh Per Annum)",
    type: "text",
    placeHolder: "Enter Current CTC",
    name: "CurrCTC",
  },
  {
    label: "Expected CTC(In Lakh Per Annum)",
    type: "text",
    placeHolder: "Enter Expected CTC",
    name: "expCTC",
  },
];

export const tableHeadings = [
  {
    label: "S.No",
    value: "S.no",
  },
  {
    label: "name",
    value: "Name",
  },
  {
    label: "email",
    value: "Email",
  },
  {
    label: "contact number",
    value: "Contact Number",
  },
  {
    label: "technology",
    value: "Technology",
  },
  {
    label: "current_status",
    value: "Current_Status",
  },
  {
    label: "experience",
    value: "Experience",
  },
  {
    label: "current_salary",
    value: "Current_Salary",
  },
  {
    label: "expected_ctc",
    value: "Excpected_CTC",
  },
];

export const dropDownConstants = [
  {
    label: "five",
    value: "5",
  },
  {
    label: "ten",
    value: "10",
  },
  {
    label: "fifteen",
    value: "15",
  },
];
export const header = {
  name: "No Item Found",
  page: "Per Page",
  loading: "Loading...",
};

export const loginUrl = "https://rms-01.herokuapp.com/api/login";
export const signupUrl = "https://rms-01.herokuapp.com/api/register";
export const candidateProfileURL =
  "https://rms-01.herokuapp.com/api/get-profiles";
export const userProfileList = "https://rms-01.herokuapp.com/api/get-profiles";
