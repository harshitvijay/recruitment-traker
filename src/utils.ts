export const getCurrentUser = () => {
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser") || "{}");
  return currentUser;
};
