import styles from "../../../public/styles/signin.module.css";
export const metadata = {
    title: "signin",
  };

export default function Signin(){
    return(
        <main className={styles.main}>
            <h3 className={styles.title}>Welcome Back!</h3>
            <div className={styles.inputContainer}>
                <label>Email</label>
                <input type="email" />
            </div>
            <div className={styles.inputContainer}>
                <label>Password</label>
                <input type="password" />
            </div>
            <p>Forget your Password?</p>
            <div className={styles.checkboxContainer}>
                <input type="checkbox" />
                <p>Remember Me</p>
            </div>
            <button>Login</button>
            <p>If you don't have an account</p>
            <a href="#">Sign Up</a>
        </main>
    )
}