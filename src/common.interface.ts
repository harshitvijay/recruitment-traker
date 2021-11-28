export interface FieldsInterface {
  [name: string]: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ErrorInterface {
  [name: string]: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface CandidateProfileDataInterface {
  success: boolean;
  data: {
    profiles: Array<CandidateProfileInterface>;
  };
  message: string;
}
export interface CandidateProfileInterface {
  id: number;
  name: string;
  email: string;
  experience: string;
  current_salary: string;
  expected_ctc: string;
  notice_period: string;
  current_status: string;
  technology: string;
  contact_no: string;
  head_hunted_by: string;
  source_of_hire: string;
  created_at: string;
  updated_at: string;
}

export type DropDownTypes = {
  label: string;
  value: string;
};
export type skillSetType = {
  id: number;
  name: string;
  type: string;
  total_marks: number;
};

export type Event = {};

export type UserProfileType = {
  id: number;
  name: string;
  email: string;
  experience: string;
  current_salary: string;
  expected_ctc: string;
  notice_period: string;
  current_status: string;
  technology: string;
  contact_no: string;
  head_hunted_by: string;
  source_of_hire: string;
  created_at: string;
  updated_at: string;
};
export type UserProfileUpdationField = {
  id: number;
  name: string;
  email: string;
  experience: string;
  current_salary: string;
  expected_ctc: string;
  notice_period: string;
  current_status: string;
  technology: string;
  contact_no: string;
  head_hunted_by: string;
  source_of_hire: string;
  created_at: string;
  updated_at: string;
};
