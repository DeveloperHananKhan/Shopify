import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"
import type { User } from "../types/data"

export const useUser = ()=>{
    const navigate = useNavigate()
    const API = "https://reqres.in/api/login"
    const [email,setEmail]=useState("eve.holt@reqres.in")
  const [password,setPassword]=useState("cityslicka")
  const [checked,setChecked]=useState(false)
  const handleSubmit=async (e :React.FormEvent)=>{
      e.preventDefault();
    const cred = {
      email:email,
      password : password
    }
   
   

    try {
          const response = await axios.post<User>(API,cred) 
          console.log("login succesfull",response.data)
           alert("login succesfull")
          localStorage.setItem("token", response.data.token);
            navigate('/')
    } catch (error) {
        alert("login failed")
    }
  

  }





return {email,password,checked,handleSubmit,setEmail,setPassword,setChecked}
}