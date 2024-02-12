import Header from "@/components/Header";
import InputField from "@/components/InputField";
import { SubmitHandler, useForm } from "react-hook-form"
import "./Login.scss"
import Checkbox from "@/components/Checkbox";
import Card from "@/components/Card";
import Logo from "@/components/Logo";
import { MdEmail, MdError, MdKey } from "react-icons/md";
import { ErrorMessage } from "@hookform/error-message";
import { login } from "@/mock/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/config/redux/hooks";
import { updateUser } from "@/config/redux/slices/accountSlice";
import Footer from "@/components/Footer";

type Inputs = {
  email: string,
  password: string,
};

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
  const [rememberSession, setRememberSession] = useState(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<Inputs> = data => {
    // axios
    //   .post(signInUrl, data)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    login(data.email, data.password, false).then(user => {
      dispatch(updateUser(user))
      navigate("/profile")
    })
  }

  return (
    <>
      <Header></Header>
      <main>
        <Card
          className="auth-form"
          heading={<Logo />}
        >
          <h5 className="auth-form__heading">Sign in</h5>
          <p className="auth-form__cta">Jump back to action with Botty!</p>
          <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
            <InputField
              placeholder="Email"
              icon={<MdEmail />}
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  message: "Please include '@' in the email address.",
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
            <div className="auth-form__options">
              <Checkbox onChange={(checked) => setRememberSession(checked)} value={rememberSession}>Remember me</Checkbox>
              <a className="link" href="">Forgot your password?</a>
            </div>
            <button className="auth-form__submit button" type="submit">Sign in</button>
            <ErrorMessage
              name="email"
              errors={errors}
              render={({ message }) => <p className="auth-form__error"><MdError className="icon" />{message}</p>}
            />
            {!errors.email &&
              <ErrorMessage
                name="password"
                errors={errors}
                render={({ message }) => <p className="auth-form__error"><MdError className="icon" />{message}</p>}
              />}
          </form>
        </Card>
      </main>
      <Footer></Footer>
    </>
  )
}

export default LoginPage