import Header from "@/components/Header";
import InputField from "@/components/InputField";
import { SubmitHandler, useForm } from "react-hook-form"
import "./Register.scss"
import Card from "@/components/Card";
import Logo from "@/components/Logo";
import { MdAccountCircle, MdEmail, MdError, MdKey } from "react-icons/md";
import { ErrorMessage } from "@hookform/error-message";

type Inputs = {
  username: string,
  email: string,
  password: string,
};

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = data => {

  }

  return (
    <>
      <Header></Header>
      <main>
        <Card
          className="auth-form"
          heading={<Logo />}
        >
          <h5 className="auth-form__heading">Sign up</h5>
          <p className="auth-form__cta">Create your first bot today!</p>
          <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
            <InputField
              placeholder="Username"
              icon={<MdAccountCircle />}
              {...register("username", {
                required: "Username is required.",
                minLength: {
                  value: 4,
                  message: "Username must be at least 4 characters long."
                },
                maxLength: {
                  value: 16,
                  message: "Username can't be longer than 16 characters long."
                },
              })}
            />
            <InputField
              placeholder="Email"
              icon={<MdEmail />}
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  message: "Please enter a valid email address.",
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
                }
              })}
            />
            <InputField
              type="password"
              placeholder="Password"
              icon={<MdKey />}
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long."
                },
                pattern: {
                  message: "Password must contain at least 1 uppercase letter, 1 numeral, and 1 special character.",
                  value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/
                }
              })}
            />
            
            <button className="auth-form__submit button" type="submit">Sign in</button>

            <ErrorMessage
              name="username"
              errors={errors}
              render={({ message }) => <p className="auth-form__error"><MdError className="icon" />{message}</p>}
            />
            {!errors.username && 
            <ErrorMessage
              name="email"
              errors={errors}
              render={({ message }) => <p className="auth-form__error"><MdError className="icon" />{message}</p>}
            />}
            {!errors.email &&
              <ErrorMessage
                name="password"
                errors={errors}
                render={({ message }) => <p className="auth-form__error"><MdError className="icon" />{message}</p>}
              />}
          </form>
        </Card>
      </main>
    </>
  )
}

export default RegisterPage