import heroIllustration from "@/assets/illustration.png"
import "./Hero.scss"

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero__col">
        <h2 className="hero__heading">Automate your Telegram newsletter!</h2>
        <p className="hero__text">Botty gives You the power to quickly create Telegram bots for any need You might have. <br /><br />With our graphic bot builder making a new bot is easier than ever!</p>
        <button className="button">Try a free plan</button>
      </div>
      <div className="hero__col">
        <img src={heroIllustration} alt="" className="hero__illustration" />
      </div>
    </section>
  )
}

export default Hero;