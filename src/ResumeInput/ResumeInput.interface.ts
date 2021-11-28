import { UserProfileInterface } from "src/Components/AddUserProfile/userProfile.interface";

interface ResumInputInterface {
  fields: UserProfileInterface;
  setFields(fields: UserProfileInterface): void;
}

export default ResumInputInterface;
