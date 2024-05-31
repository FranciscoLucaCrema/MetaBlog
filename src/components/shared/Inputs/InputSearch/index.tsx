import style from "./InputSearch.module.scss";

function InputSearch() {
  return (
    <>
      <input type="text" placeholder="Search" className={style.input} />
    </>
  );
}

export default InputSearch;
