// ===== Make Background Full Black =====
document.body.style.margin = "0";
document.body.style.background = "#000";
document.body.style.overflow = "hidden";

// ===== Add CSS =====
const style = document.createElement("style");
style.innerHTML = `
.lockOverlay{
  position:fixed;
  inset:0;
  background:#000;
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:99999;
  font-family:Arial;
}

.loginBox{
  background:#111;
  padding:30px;
  border-radius:12px;
  width:280px;
  text-align:center;
  box-shadow:0 0 20px rgba(255,255,255,0.1);
}

.loginBox h2{
  color:white;
}

input{
  width:100%;
  padding:10px;
  margin:15px 0;
  border-radius:8px;
  border:none;
  outline:none;
}

button{
  width:100%;
  padding:10px;
  border:none;
  border-radius:8px;
  background:#2563eb;
  color:white;
  font-weight:bold;
  cursor:pointer;
}

button:hover{
  background:#1d4ed8;
}

.error{
  color:red;
  font-size:14px;
}

.mainContent{
  display:none;
  color:white;
  padding:20px;
  text-align:center;
}
`;
document.head.appendChild(style);

// ===== Hidden Main Content =====
const main = document.createElement("div");
main.className = "mainContent";
main.innerHTML = `
  <h1>Welcome 🔓</h1>
  <p>Now full site is accessible.</p>
`;
document.body.appendChild(main);

// ===== Lock Overlay =====
const overlay = document.createElement("div");
overlay.className = "lockOverlay";
overlay.innerHTML = `
  <div class="loginBox">
    <h2>Enter Password</h2>
    <input type="password" id="password" placeholder="Password">
    <button onclick="unlock()">Login</button>
    <p class="error" id="error"></p>
  </div>
`;
document.body.appendChild(overlay);

// ===== Password =====
const correctPassword = "1234";

// ===== Unlock Function =====
function unlock(){
  const pass = document.getElementById("password").value;

  if(pass === correctPassword){
    overlay.remove(); // Completely remove overlay
    document.body.style.overflow = "auto";
    main.style.display = "block";
  }else{
    document.getElementById("error").innerText = "Wrong Password";
  }
}

// ===== Disable Right Click & Inspect =====
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("keydown", function(e){
  if(e.key === "F12" || 
     (e.ctrlKey && e.shiftKey && e.key === "I") ||
     (e.ctrlKey && e.key === "U")){
    e.preventDefault();
  }
});
