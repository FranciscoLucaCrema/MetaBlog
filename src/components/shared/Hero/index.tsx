import SmallFrame from "../SmallFrame";
import style from "./Hero.module.scss";

function Hero() {
  return (
    <div className={style.containerHero}>
      <img
        src="../../../../public/assets/ImagePrimary.png"
        alt="ImageHero"
        className={style.imgHero}
      />
      <SmallFrame />
    </div>
  );
}

export default Hero;
