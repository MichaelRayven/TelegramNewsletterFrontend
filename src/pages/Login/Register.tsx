import Header from "@/components/Header";
import InputField from "@/components/InputField";
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
    <>
    <Header></Header>
    <section className="signin">
      <div className="container">
        <div className="signin__dialog">
          <h2>Sign in</h2>
          <form className="signin__form" onSubmit={handleSubmit(onSubmit)}>
            <InputField type="text" placeholder="Username" {...register("username", {minLength: 6, maxLength: 12, required: true, pattern: /\w*/})} />
            <InputField type="email" placeholder="email@example.com" {...register("email", {required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/})}/>
            <InputField type="password" placeholder="Password" {...register("password", {required: true, minLength: 8, pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/})}/>
            <button className="button signin__button" type="submit">Sign in</button>

            <p>{errors.password?.type}</p>
            
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default RegisterPage