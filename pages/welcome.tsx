import styles from "../styles/welcome.module.scss";
export default function () {
  return (
    <>
      <p className={styles.title}>欢迎来到生鲜！</p>
      <div className={styles.description}>
        无论您身在何处，我们都会为您提供您喜爱的食物，以满足您的食物需求，这里是一些文字描述
      </div>
      <button className={styles.getStarted}>现在开始</button>
      <img src="/切图 1@2x.png" alt="" className={styles.img} />
    </>
  );
}
