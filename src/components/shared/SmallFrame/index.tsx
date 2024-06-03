import style from "./SmallFrame.module.scss";

function SmallFrame() {
  return (
    <div className={style.containerFrame}>
      <header className={style.frameInfo}>
        <p className={style.frameCategory}>Technology</p>
        <h3 className={style.frameTitle}>
          The Impact of Technology on the Workplace: How Technology is Changing
        </h3>
      </header>

      <div className={style.user}>
        <div className={style.userInfo}>
          <img
            src="../../../../public/assets/profilePictures/photoFrancisco.png"
            alt="Icon User"
            className={style.iconUser}
          />
          <p className={style.userName}>Jason Francisco</p>
        </div>
        <p className={style.userPublication}>August 20, 2022</p>
      </div>
    </div>
  );
}

export default SmallFrame;
