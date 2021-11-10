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
const getCitis = async () => {
  const headers = new Headers();
  headers.append(
    "X-CSCAPI-KEY",
    "cGFJdmpIc2tlaVV0QmoxemF0NnpqS0xDSTJtOW1LNU1tR3RBdGpiag=="
  );

  const requestOptions = {
    method: "GET",
    headers: headers,
  };

  const response = await fetch(
    "https://api.countrystatecity.in/v1/countries/IN/cities",
    requestOptions
  );
  const result = await response.json();
  console.log(result);
};
getCitis();
