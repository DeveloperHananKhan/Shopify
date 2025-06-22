import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import type { User } from "../types/data";
import type { UserDetail } from "../types/data";
import { toast } from "react-toastify";

export const useUser = () => {
  const navigate = useNavigate();
  const API = "https://reqres.in/api/login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [userDetail, setUserDetail] = useState<UserDetail>();
  const [loading, setLoading] = useState(false);
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const cred = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post<User>(API, cred, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1",
        },
      });

      console.log("login succesfull", response.data);
      localStorage.setItem("token", response.data.token);

      if (response) {
        const user = {
          id: 2,
          firstName: "Eve",
          lastName: "Holt",
          email: "eve.holt@reqres.in",
          avatar: "https://i.pravatar.cc/150?img=47",
        };
        setUserDetail(user);
        localStorage.setItem("user", JSON.stringify(user));
        toast.success(`Welcome, ${user.firstName} ${user.lastName}!`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }

      navigate("/");
    } catch (error) {
      toast.error("Login failed. Please try again.",{
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
    } finally {
      setLoading(false);
    }
  };

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/signIn");
  };

  return {
    email,
    password,
    checked,
    userDetail,
    loading,
    user,
    logOut,
    handleSubmit,
    setEmail,
    setPassword,
    setChecked,
    setUserDetail,
    setLoading,
  };
};
