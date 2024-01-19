import Header from "@/components/Header";
import InputField from "@/components/InputField";
import { SubmitHandler, useForm } from "react-hook-form"
import { baseURL, apiVersion, loginEndpoint } from "@/config/apiConfig"
import "./Login.scss"
import axios from "axios";
import { useEffect } from "react";
import Checkbox from "@/components/Checkbox";

type Inputs = {
  username: string,
  email: string,
  password: string,
};

const errorMessages = {
  email: {
    validate: "",
    required: "Email is required"
  },
  password: {
    pattern: "Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 numeral, and 1 special character.",
    required: "Password is required"
  }
}


const LoginPage = () => {
  const { register, handleSubmit, watch, formState: {errors} } = useForm<Inputs>()
  const signInUrl = baseURL + apiVersion + loginEndpoint
  useEffect(() => {
    console.log(signInUrl)
  }, [])
  const onSubmit: SubmitHandler<Inputs> = data => {
    axios
    .post(signInUrl, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  console.log(watch("username"))

  return (
    <>
    <Header></Header>
    <section className="signin">
      <div className="container">
        <div className="signin__dialog">
          <h2>Sign in</h2>
          <form className="signin__form" onSubmit={handleSubmit(onSubmit)}>
            <InputField type="email" placeholder="Email@example.com" {...register("email", {required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/})}/>
            <InputField type="password" placeholder="Password" {...register("password", {required: true, minLength: 8, pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/})}/>
            <button className="button signin__button" type="submit">Sign in</button>
            <a className="link" href=""><p>Did you forget your password?</p></a>
            <Checkbox>Remember me</Checkbox>
            <p>{errors.password?.type}</p>
            
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default LoginPage