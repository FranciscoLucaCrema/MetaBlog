import style from "./Card.module.scss";

function Card() {
  return (
    <div className={style.containerCard}>
      <img
        src="../../../../public/assets/slidesImage/beachImg.png"
        alt="Image"
        className={style.imgCard}
      />
      <div className={style.cardInfo}>
        <header className={style.header}>
          <p className={style.cardCategory}>Technology</p>
          <h3 className={style.cardTitle}>
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h3>
        </header>
        <div className={style.user}>
          <div className={style.userInfo}>
            <img
              src="../../../../public/assets/profilePictures/photoWilson.png"
              alt="Image"
              className={style.iconUser}
            />
            <p className={style.userName}>Tracey Wilson</p>
          </div>
          <p className={style.userPublication}>August 20, 2022</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
