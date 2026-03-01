// ===== Hide Everything Initially =====
document.body.style.margin = "0";
document.body.style.background = "#0f172a";

// ===== Add CSS via JS =====
const style = document.createElement("style");
style.innerHTML = `
.lockScreen{
  position:fixed;
  inset:0;
  background:linear-gradient(135deg,#0f172a,#1e293b);
  display:flex;
  justify-content:center;
  align-items:center;
  font-family:Arial;
}

.card{
  background:white;
  padding:30px;
  border-radius:15px;
  width:280px;
  text-align:center;
  box-shadow:0 10px 30px rgba(0,0,0,0.4);
}

input{
  width:100%;
  padding:10px;
  margin:15px 0;
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

.mainContent{
  display:none;
  color:white;
  padding:20px;
  font-family:Arial;
  text-align:center;
}
`;
document.head.appendChild(style);

// ===== Create Main Content (Hidden) =====
const main = document.createElement("div");
main.className = "mainContent";
main.innerHTML = `
  <h1>Welcome To My Secret Site 🔐</h1>
  <p>Now everything is visible.</p>
`;
document.body.appendChild(main);

// ===== Create Lock Screen =====
const lock = document.createElement("div");
lock.className = "lockScreen";
lock.innerHTML = `
  <div class="card">
    <h2>Unlock</h2>
    <input type="password" id="pass" placeholder="Enter Password">
    <button onclick="unlock()">Unlock</button>
    <p class="error" id="error"></p>
  </div>
`;
document.body.appendChild(lock);

// ===== Password =====
const correctPassword = "1234";

// ===== Unlock Function =====
function unlock(){
  const entered = document.getElementById("pass").value;

  if(entered === correctPassword){
    lock.style.display = "none";
    main.style.display = "block";
  }else{
    document.getElementById("error").innerText = "Wrong Password";
  }
}
