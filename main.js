// ====== VERSION SYSTEM ======
const APP_VERSION = "1.0";   // 👈 Script change karo to isko 1.1 kar dena

// ====== BASIC SETTINGS ======
document.body.style.margin = "0";
document.body.style.background = "#000";
document.body.style.overflow = "hidden";

// ====== STYLE ======
const style = document.createElement("style");
style.innerHTML = `
.overlay{
  position:fixed;
  inset:0;
  background:#000;
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:99999;
  font-family:Arial;
}

.box{
  background:#111;
  padding:30px;
  border-radius:10px;
  width:280px;
  text-align:center;
}

input{
  width:100%;
  padding:10px;
  margin:15px 0;
  border:none;
  border-radius:6px;
}

button{
  width:100%;
  padding:10px;
  border:none;
  border-radius:6px;
  background:#2563eb;
  color:white;
  cursor:pointer;
}

.error{
  color:red;
  font-size:14px;
}

.main{
  display:none;
  color:white;
  padding:30px;
  text-align:center;
}
`;
document.head.appendChild(style);

// ====== MAIN CONTENT ======
const main = document.createElement("div");
main.className = "main";
main.innerHTML = `
  <h1>Welcome 🔓</h1>
  <p>Your secured content is now visible.</p>
`;
document.body.appendChild(main);

// ====== PASSWORD ======
const correctPassword = "1234";

// ====== CHECK VERSION ======
const savedVersion = localStorage.getItem("app_version");
const savedLogin = localStorage.getItem("logged_in");

// Agar version change hua ho to login reset
if(savedVersion !== APP_VERSION){
  localStorage.removeItem("logged_in");
  localStorage.setItem("app_version", APP_VERSION);
}

// ====== SHOW LOGIN IF NOT LOGGED ======
if(localStorage.getItem("logged_in") !== "true"){
  showLogin();
}else{
  unlockApp();
}

// ====== LOGIN SCREEN ======
function showLogin(){
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.id = "overlay";
  overlay.innerHTML = `
    <div class="box">
      <h2 style="color:white;">Enter Password</h2>
      <input type="password" id="pass" placeholder="Password">
      <button onclick="login()">Login</button>
      <p class="error" id="error"></p>
    </div>
  `;
  document.body.appendChild(overlay);
}

// ====== LOGIN FUNCTION ======
function login(){
  const pass = document.getElementById("pass").value;

  if(pass === correctPassword){
    localStorage.setItem("logged_in","true");
    unlockApp();
    document.getElementById("overlay").remove();
  }else{
    document.getElementById("error").innerText = "Wrong Password";
  }
}

// ====== UNLOCK ======
function unlockApp(){
  document.body.style.overflow = "auto";
  main.style.display = "block";
}
