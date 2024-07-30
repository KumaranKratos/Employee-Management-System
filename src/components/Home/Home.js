import styles from "./home.module.css";
import homeImg from "../../assests/home.jpeg";
const Home = () => {
  return (
    <div>
      <div className={styles.welcome}>
        Welcome to Employee Management System
      </div>
      <div className={styles.home}>
        <div className={styles.textcontainer}>
          <p>
            This system allows administrators to manage employee records
            efficiently.
          </p>
          <button className={styles.button}>
            <a href="/employee-details">Employee Details</a>
          </button>
        </div>
        <div className={styles.imgcontainer}>
          <img className={styles.img} src={homeImg} />
        </div>
      </div>
    </div>
  );
};

export default Home;
