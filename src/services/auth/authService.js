import axios from 'axios'

const API_URL = 'http://localhost:8080/'

// const register = async (data) => {
//   return await axios.post('http://localhost:8080/register', data);
// };
const register = async (userData) => {
    const response = await axios.post(API_URL + 'register', userData )
    console.log(userData);
  
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
  
    return response.data
  }

  const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)
  
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
  
    return response.data
  }

  const logout = () => {
    localStorage.removeItem('user')
  }
  
  const authService = {
    register,
    logout,
    login,
  }
  
  export default authService