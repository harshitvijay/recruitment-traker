import { ErrorInterface, FieldsInterface } from "./common.interface";

export const nameValidation = (
  fields: FieldsInterface,
  errors: ErrorInterface
) => {
  if (!fields.name) {
    errors.name = "Cannot be empty";
  }

  if (fields.name) {
    if (!fields.name.match(/^[a-zA-Z]+$/)) {
      errors.name = "Only letters";
    }
  }
  return errors;
};
export const emailValidation = (
  fields: FieldsInterface,
  errors: ErrorInterface
) => {
  if (!fields.email) {
    errors.email = "Cannot be empty";
  }

  if (fields.email) {
    const lastAtPos = fields.email.lastIndexOf("@");
    const lastDotPos = fields.email.lastIndexOf(".");

    if (
      !(
        lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        fields.email.indexOf("@@") === -1 &&
        lastDotPos > 2 &&
        fields.email.length - lastDotPos > 2
      )
    ) {
      errors.email = "Email is not valid";
    }
  }
  return errors;
};
export const passwordValidation = (
  fields: FieldsInterface,
  errors: ErrorInterface
) => {
  if (!fields.password) {
    errors.password = "Cannot be empty";
  }
  if (fields.password) {
    const reg =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!fields.password.match(reg)) {
      errors.password =
        "Password Must be in 8 to 15 Chracters with one uppercase one lowercase one digit and one special character";
    }
  }
  return errors;
};
export const confirmPasswordValidation = (
  fields: FieldsInterface,
  errors: ErrorInterface
) => {
  if (!fields.confirmPassword) {
    errors.confirmPassword = "Cannot be empty";
  }
  if (fields.confirmPassword) {
    if (fields.password !== fields.confirmPassword) {
      errors.confirmPassword = "Password Mismatch";
    }
  }
  return errors;
};
