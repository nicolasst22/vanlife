import styles from './Home.module.css';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    // <div className={styles.home}>
    //     <h1>You got the travel plans, we got the travel vans.</h1>
    //     <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
    //     <div className={styles.button_container}>
    //          <button className={styles.van_button}>Find your van</button>
    //     </div>
        
    // </div>
        <div className="home-container">
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link to="vans">Find your van</Link>
        </div>
  );
}   