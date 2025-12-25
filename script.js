let startTime = 0
let elapsed = 0
let timer = null

const display = document.getElementById("display")
const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const resetBtn = document.getElementById("reset")

function update() {
  const hours = Math.floor(elapsed / 3600000)
  const minutes = Math.floor((elapsed % 3600000) / 60000)
  const seconds = Math.floor((elapsed % 60000) / 1000)
  const milliseconds = Math.floor((elapsed % 1000) / 10)

  display.textContent =
    String(hours).padStart(2, "0") + ":" +
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0") + ":" +
    String(milliseconds).padStart(2, "0")
}

startBtn.onclick = () => {
  startTime = Date.now() - elapsed
  timer = setInterval(() => {
    elapsed = Date.now() - startTime
    update()
  }, 10)

  startBtn.disabled = true
  stopBtn.disabled = false
  resetBtn.disabled = false
}

stopBtn.onclick = () => {
  clearInterval(timer)
  timer = null

  startBtn.disabled = false
  stopBtn.disabled = true
}

resetBtn.onclick = () => {
  clearInterval(timer)
  timer = null
  elapsed = 0
  update()

  startBtn.disabled = false
  stopBtn.disabled = true
  resetBtn.disabled = true
}
