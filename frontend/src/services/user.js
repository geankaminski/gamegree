export const setUser = (username, first_name) => {
    localStorage.setItem("username", username);
    localStorage.setItem("first_name", first_name);
  };