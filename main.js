// ====== CSS via JavaScript ======
const style = document.createElement("style");
style.innerHTML = `
body{
  margin:0;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  background:linear-gradient(135deg,#0f172a,#1e293b);
  font-family:Arial;
}

.card{
  background:white;
  padding:30px;
  border-radius:15px;
  width:300px;
  text-align:center;
  box-shadow:0 10px 25px rgba(0,0,0,0.3);
  animation:fadeIn 0.5s ease;
}

input{
  width:100%;
  padding:10px;
  margin:10px 0;
  border-radius:8px;
  border:1px solid #ccc;
}

button{
  width:100%;
  padding:10px;
  border:none;
  border-radius:8px;
  background:#2563eb;
  color:white;
  cursor:pointer;
  font-weight:bold;
}

button:hover{
  background:#1d4ed8;
}

.error{
  color:red;
  font-size:14px;
}

@keyframes fadeIn{
  from{opacity:0; transform:scale(0.9);}
  to{opacity:1; transform:scale(1);}
}
`;
document.head.appendChild(style);

// ====== Hardcoded Credentials ======
const correctUser = "admin";
const correctPass = "1234";

// ====== App Container ======
const app = document.createElement("div");
document.body.appendChild(app);

// ====== Render Login ======
function renderLogin(){
  app.innerHTML = `
    <div class="card">
      <h2>Login</h2>
      <input type="text" id="username" placeholder="Username">
      <input type="password" id="password" placeholder="Password">
      <button onclick="login()">Login</button>
      <p class="error" id="error"></p>
    </div>
  `;
}

// ====== Render Dashboard ======
function renderDashboard(){
  app.innerHTML = `
    <div class="card">
      <h2>Welcome 🎉</h2>
      <p>You are logged in successfully.</p>
      <button onclick="logout()">Logout</button>
    </div>
  `;
}

// ====== Login Function ======
function login(){
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if(user === correctUser && pass === correctPass){
    sessionStorage.setItem("loggedIn","true");
    renderDashboard();
  }else{
    document.getElementById("error").innerText = "Invalid Username or Password";
  }
}

// ====== Logout ======
function logout(){
  sessionStorage.removeItem("loggedIn");
  renderLogin();
}

// ====== Auto Check Login ======
if(sessionStorage.getItem("loggedIn") === "true"){
  renderDashboard();
}else{
  renderLogin();
}
