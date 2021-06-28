const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway")
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2021, 7, 11, 12, 30, 30);

const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minutes = futureDate.getMinutes();
const month = months[futureDate.getMonth()];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();

// console.log(year, hour, minutes, month, weekday, date);

giveaway.innerHTML = `Giveaway ends on ${weekday} ${date} ${month} ${year}, ${hour}:${minutes}am`


const futureTime = futureDate.getTime();

function getRemaindingTime() {
  const today = new Date().getTime();
  const t = futureDate - today;

  // TIMING IN SECONDS
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hrs

  // VALUES IN MILLISEC
  let oneDay = 24 * 60 * 60 * 1000;
  let oneHour = 60 * 60 * 1000;
  let oneMinute = 60 * 1000;

  // CALC FOR VALUES
  let days = Math.floor(t / oneDay)
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute)
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds]

  function format(item) {
    if (item < 0) {
      return (item = `0${item}`)
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index])
  })

  if (t < 0) {
    clearInterval(countdown)
    deadline.innerHTML = `<h4>Deadline has expired!!!</h4>`
  }
}
let countdown = setInterval(getRemaindingTime, 1000)
getRemaindingTime()