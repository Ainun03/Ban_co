import axios from 'axios'

const API_URL = 'http://localhost:3000/register/'

const register = async (userData) => {
    const response = await fetch(API_URL, userData,
    {
        headers: {
            method: "POST",
        //   'Content-Type': 'application/json;charset=UTF-8',
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userData
        }),
      })
      let data = await response.json()
      console.log("data", data)
  
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
  
    return response.data
  }


  const testService = {
    register,

  }
  
  export default testService