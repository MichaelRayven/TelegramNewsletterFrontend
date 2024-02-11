import { SubmitHandler, useForm } from "react-hook-form";
import "./Footer.scss"
import Logo from "./Logo";
import InputField from "./InputField";
import { MdEmail } from "react-icons/md";

interface Inputs {
  email: string
}

const Footer = () => {
  const { register, handleSubmit, formState: {errors} } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {

  }

  return <footer className="footer">
    <div className="container">
      <div className="footer__inner">
        <div className="footer__col">
          <Logo></Logo>
          <p className="footer__copyright">
          © Botty Inc. All right reserved
          </p>
        </div>
        <div className="footer__col">
          <ul className="footer__list">
            <li className="footer__item">
              <h4 className="footer__subheading">Socials:</h4>
            </li>
            <li className="footer__item"><a href="#" className="link link_underlined">Twitter</a></li>
            <li className="footer__item"><a href="#" className="link link_underlined">Facebook</a></li>
            <li className="footer__item"><a href="#" className="link link_underlined">Instagram</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <ul className="footer__list">
            <li className="footer__item">
              <h4 className="footer__subheading">Company:</h4>
            </li>
            <li className="footer__item"><a href="#" className="link link_underlined">About</a></li>
            <li className="footer__item"><a href="#" className="link link_underlined">Pricing</a></li>
            <li className="footer__item"><a href="#" className="link link_underlined">Legal</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <ul className="footer__list">
            <li className="footer__item">
              <h4 className="footer__subheading">Developers:</h4>
            </li>
            <li className="footer__item"><a href="#" className="link link_underlined">Documentation</a></li>
            <li className="footer__item"><a href="#" className="link link_underlined">Tutorials</a></li>
            <li className="footer__item"><a href="#" className="link link_underlined">Bot API</a></li>
            <li className="footer__item"><a href="#" className="link link_underlined">What’s new?</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4 className="footer__subheading">Join our newsletter!</h4>
          <p>Get notified about new features of our product. <br />Receive tips and tricks for your bots.</p>
          <form className="newsletter-form" onSubmit={handleSubmit(onSubmit)}>
            <InputField
              placeholder="Email"
              icon={<MdEmail/>}
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  message: "Please include '@' in the email address.",
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
                }
              })}
            />
            <button className="newsletter-form__submit button" type="submit">Subscribe!</button>
          </form>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer;