import "./LoginComponent.css"
function LoginComponent( ){
  function onSignUp(e){
    e.preventDefault()
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("Password");
    const email =emailInput.value;
    const password=passwordInput.value;
  console.log(email,password);
  if(email=="abc@gmail.com"&& password=="12345"){
    //login
    localStorage.setItem("loggedIn",true);
    window.location.href="/";
  }
  else{
    alert("email or password invalid");
  }
  }
  

    return(
<div className="login">
<form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="email" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="Password" placeholder="Password"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={onSignUp}>Submit</button>
</form>
</div>
    );
}
export default LoginComponent;