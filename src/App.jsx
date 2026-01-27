import bgm from "./assets/bgm.jpg"
import "./App.css"
export default function App(){
  return(
    <div className="page" style={{ backgroundImage: `url(${bgm})`}}>
      <div className="signuppage-card" >
        <fieldset form="#">
          
          <h1 style={{textAlign:"center"}}>SIGN UP</h1>
          <form action="">
            <label htmlFor="username">
              Username <br /><input type="text" placeholder="enter username" required />
            </label><br /><br />

            <label htmlFor="password">
              Password <br /><input type="password" placeholder="enter password" required  />
            </label><br /><br /><br />

            <input id="submit" type="submit" value={"signup"} />
            <br />

            <p>forgot password? <a href="#"> reset password</a></p>

            <h3>Signup with social media accounts</h3>
            <div className="links">
              <a href="#"><i className="fa-brands fa-facebook"></i></a> 
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-twitter"></i></a> 
            </div>
          </form>
          


        </fieldset>
      </div>
    </div>
  );
}