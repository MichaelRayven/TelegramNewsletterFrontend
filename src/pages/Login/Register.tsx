import { SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
  username: string,
  email: string,
  password: string,
};


const RegisterPage = () => {
  const { register, handleSubmit, watch, formState: {errors} } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  
  console.log(watch("username"))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Username" {...register("username", {minLength: 6, maxLength: 12, required: true, pattern: /\w*/})}/>
      <input type="email" placeholder="email@example.com" {...register("email", {required: true})}/>
      <input type="password" placeholder="Password" {...register("password", {required: true, pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/})}/>
      <input type="submit" />
    </form>
  )
}

export default LoginPage