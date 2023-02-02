import axios from "axios";

const getAllUsers = async ({ token }) => {
  return await axios.get(`http://localhost:8080/profile`,{
  // headers: {
  //   accept: "*/*",
  //   'Authorization': `Bearer ${token}`,
  //   "Content-Type": "multipart/form-data",
  // }
});
};

const getUsers = async ({ token }) => {
  // axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
  return await axios.get(`http://localhost:8080/profile`,{
  //     email, password  
  // }, 
  // {
  headers: {
      // Authorization: "Bearer " + token,
      'Authorization': `Bearer ${token}`,
      "accept": "*/*",
      "Content-Type": "multipart/form-data",

    }
  });
};
  
  // TODO user other services
  
  const userService = { getUsers, getAllUsers };
  
  export default userService;