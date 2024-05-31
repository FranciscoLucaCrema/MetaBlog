import style from "./InputShared.module.scss";

function InputShared() {
  return (
    <>
      <input type="text" placeholder="search" className={style.input} />
    </>
  );
}

export default InputShared;
