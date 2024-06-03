import Button from "../Button";
import Card from "../Card";
import style from "./CardList.module.scss";

function CardList() {
  return (
    <>
      <h3 className={style.title}>Latest Post</h3>
      <div className={style.containerCardList}>
        <div className={style.cards}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className={style.button}>
        <Button text="View All Post" />
      </div>
    </>
  );
}

export default CardList;
