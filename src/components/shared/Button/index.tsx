import style from "./Button.module.scss";

interface IButton {
  text: string;
}

function Button({ text }: IButton) {
  return (
    <>
      <button className={style.button}>{text}</button>
    </>
  );
}

export default Button;
