let logDiv = document.getElementById('log')
let stateDiv = document.getElementById('state')
let startBtn = document.getElementById('start-btn')
let stopBtn = document.getElementById('stop-btn')

startBtn.addEventListener('click',()=>{
  document.addEventListener('keydown',handleDown)
  document.addEventListener('keyup',handleUp)
  startBtn.disabled = true;
  stopBtn.disabled = false;
})

stopBtn.addEventListener('click',()=>{
  document.removeEventListener('keydown',handleDown)
  document.removeEventListener('keyup',handleUp)
  logDiv.textContent = "";
  stateDiv.textContent = " ";
  stopBtn.disabled = true;
  startBtn.disabled = false;
})

function handleDown(e) {
  logDiv.textContent= `key ${e.key} pressed down`;
  stateDiv.textContent = "key is down"
}

function handleUp(e) {
  logDiv.textContent = `key ${e.key} pressed Up`;
  stateDiv.textContent = "key is Up"
}