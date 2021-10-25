export const login = async (
  url: string,
  data: { email: string; password: string }
) => {
  const formdata = new FormData();
  formdata.append("email", data.email);
  formdata.append("password", data.password);
  const option = {
    method: "POST",
    body: formdata,
  };
  const response = await fetch(url, option);
  const result = await response.json();
  return result;
};

export const signup = async (
  url: string,
  data: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
) => {
  const urlencoded = new URLSearchParams();
  urlencoded.append("name", data.name);
  urlencoded.append("email", data.email);
  urlencoded.append("password", data.password);
  urlencoded.append("c_password", data.confirmPassword);

  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: urlencoded,
  };
  const response = await fetch(url, option);
  const result = await response.json();
  return result;
};
export const getCandidateProfile = async (url: string) => {
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser") || "{}");
  const option = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${currentUser.token}`,
    },
  };
  const response = await fetch(url, option);
  const result = await response.json();
  return result;
};
