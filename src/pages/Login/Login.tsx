import Header from "@/components/Header";
import InputField from "@/components/InputField";
import { SubmitHandler, useForm } from "react-hook-form"
import "./Login.scss"

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
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  
  console.log(watch("username"))

  return (
    <>
    <Header></Header>
    <div className="container">
      <div className="signin">
        <h2>Sign in</h2>
        <form className="signin__form" onSubmit={handleSubmit(onSubmit)}>
          <InputField type="text" placeholder="Username" {...register("username", {minLength: 6, maxLength: 12, required: true, pattern: /\w*/})} />
          <InputField type="email" placeholder="email@example.com" {...register("email", {required: true})}/>
          <InputField type="password" placeholder="Password" {...register("password", {required: true, pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/})}/>
          <input type="submit" />

          {/* {errorMessages[errors.email]} */}
        </form>
      </div>
    </div>
    </>
  )
}

export default LoginPage