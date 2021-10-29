import { UserProfileInterface } from "../AddUserProfile/userProfile.interface";

interface FormSelectInterface {
  label: string;
  error?: string;
  name: string;
  fields: UserProfileInterface;
  setFields(fields: UserProfileInterface): void;
  option: Array<string>;
}

export default FormSelectInterface;
