export const nameValidation = (name: string, error: string): string => {
  if (!name) {
    error = "Cannot be empty";
  }

  if (name) {
    if (!name.match(/^[a-zA-Z]+$/)) {
      error = "Only letters";
    }
  }
  return error;
};
export const emailValidation = (email: string, error: string): string => {
  if (!email) {
    error = "Cannot be empty";
  }

  if (email) {
    const lastAtPos = email.lastIndexOf("@");
    const lastDotPos = email.lastIndexOf(".");

    if (
      !(
        lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        email.indexOf("@@") === -1 &&
        lastDotPos > 2 &&
        email.length - lastDotPos > 2
      )
    ) {
      error = "Email is not valid";
    }
  }
  return error;
};
export const passwordValidation = (password: string, error: string): string => {
  if (!password) {
    error = "Cannot be empty";
  }
  if (password) {
    const reg =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!password.match(reg)) {
      error =
        "Password Must be in 8 to 15 Chracters with one uppercase one lowercase one digit and one special character";
    }
  }
  return error;
};
export const confirmPasswordValidation = (
  fields: { confirmPassword: string; password: string },
  error: string
): string => {
  if (!fields.confirmPassword) {
    error = "Cannot be empty";
  }
  if (fields.confirmPassword) {
    if (fields.password !== fields.confirmPassword) {
      error = "Password Mismatch";
    }
  }
  return error;
};
