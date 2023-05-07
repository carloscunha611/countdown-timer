const yearElement = document.querySelector('#year')
const monthElement = document.querySelector('#month')
const dayElement = document.querySelector('#day')
const hourElement = document.querySelector('#hour')
const minuteElement = document.querySelector('#minute')
const secondElement = document.querySelector('#second')

const halleyComing = new Date('1 jan 2061')

function countdown() {
  const { years, months, days, hours, minutes, seconds } = getTimeDifference()

  yearElement.textContent = years.toString().padStart(2, '0')
  monthElement.textContent = months.toString().padStart(2, '0')
  dayElement.textContent = days.toString().padStart(2, '0')
  hourElement.textContent = hours.toString().padStart(2, '0')
  minuteElement.textContent = minutes.toString().padStart(2, '0')
  secondElement.textContent = seconds.toString().padStart(2, '0')
}

function getTimeDifference() {
  const currentDate = new Date()
  const totalSeconds = (halleyComing - currentDate) / 1000
  const years = Math.floor(totalSeconds / 31536000)
  const months = Math.floor(totalSeconds / 2592000) % 12
  const days = Math.floor(totalSeconds / 86400) % 30
  const hours = Math.floor(totalSeconds / 3600) % 24
  const minutes = Math.floor(totalSeconds / 60) % 60
  const seconds = Math.floor(totalSeconds) % 60

  return { years, months, days, hours, minutes, seconds }
}

countdown()
setInterval(countdown, 1000)
