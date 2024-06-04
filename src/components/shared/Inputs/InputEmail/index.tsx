import style from "./InputEmail.module.scss";

function InputEmail() {
  return (
    <input type="text" placeholder="Your Email" className={style.inputEmail} />
  );
}

export default InputEmail;
