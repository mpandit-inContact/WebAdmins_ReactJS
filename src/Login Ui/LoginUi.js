import './LoginUi.css';
import profile from "./../image/a.png";
import email from "./../image/email.jpg";
import pass from "./../image/pass.png";
import logo from "./../image/NICE_Logo.PNG";

function LoginUi() {
  
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={logo} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1 className="header">Web Administration Login</h1>
           <div>
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="user name" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="password" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          
          </div>
           
            <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="#"> Sign Up</a>
            </p>
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default LoginUi;