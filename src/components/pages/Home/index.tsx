import CardList from "../../shared/CardList";
import Hero from "../../shared/Hero";
import style from "./Home.module.scss";

function Home() {
  return (
    <div className={style.containerHome}>
      <Hero />
      <CardList />
    </div>
  );
}

export default Home;
