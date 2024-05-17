import styles from "../../../public/styles/signup.module.css";
export const metadata = {
    title: "signup",
  };

export default function Signin(){
    return(
        <main className={styles.main}>
            <h3>Welcome Back!</h3>
            <input type="email" />
            <div>
                <input type="password" />
            </div>
            <p>Forget your Password?</p>
            <div>
                <input type="checkbox" />
                <p>Remember Me</p>
            </div>
            <button>Login</button>
            <p>If you don't have an account</p>
            <a href="#">Sign Up</a>
        </main>
    )
}