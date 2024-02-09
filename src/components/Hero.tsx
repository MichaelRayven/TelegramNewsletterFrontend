import heroIllustration from "@/assets/illustration.png"
import "./Hero.scss"

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero__col">
        <h1 className="hero__heading">Automate your Telegram newsletter!</h1>
        <p>Botty gives YOU the power to quickly create Telegram bots for any need. With our graphic bot builder there's no need for code anymore. Also, check out our audience management tools, they help group people up and give your subscribers a unique experience.</p>
      </div>
      <div className="hero__col">
        <img src={heroIllustration} alt="" className="hero__illustration" />
      </div>
    </section>
  )
}

export default Hero;