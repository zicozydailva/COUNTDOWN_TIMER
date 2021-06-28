


// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// const weekdays = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];



// const giveaway = document.querySelector(".giveaway");
// const dealine = document.querySelector('.deadline');
// const items = document.querySelectorAll(".deadline-format h4")

// const futureDate = new Date(2021, 11, 25, 17, 30, 0);
// const hour = futureDate.getHours();
// const minutes = futureDate.getMinutes();
// const year = futureDate.getFullYear();

// const month = months[futureDate.getMonth()];
// const weekday = weekdays[futureDate.getDay()]
// const date = futureDate.getDate();

// giveaway.textContent = `Giveaway ends on ${weekday}, ${date} ${month} ${year}, ${hour}:${minutes}am`

// const futureTime = new Date().getTime();

// function getRemaindingTime() {
//   const today = new Date().getTime()

//   let t = futureDate - today;

//   // 1s = 1000ms
//   // 1m = 60s
//   // 1hr = 60m
//   // 1d = 24hr

//   const oneDay = 24*60*60*1000;
//   const oneHour = 60*60*1000;
//   const oneMinute = 60*1000

//   // calculate value
//   let days = Math.floor(t/oneDay);

//   let hours = Math.floor((t%oneDay)/ oneHour)

//   let minutes = Math.floor((t%oneHour)/oneMinute);

//   let seconds = Math.floor((t%oneMinute)/1000)

//   //set array values
//   const values = [days, hours, minutes, seconds]
//   function format(item) {
//     if(item < 10) {
//      return (item = `0${item}`) 
//     }
//     return item;
//   }

//   items.forEach(function(item, index) {
//     item.innerHTML = format(values[index])
//   })

//   if(t < 0) {
//     clearInterval(countdown);
//     deadline.innerHTML = `<h4 class="expired">Sorry, this give away has expired</h4>`
//   }
// }

// let countdown = setInterval(getRemaindingTime, 1000)



// //   if(t < 0) {
// //     clearInterval(countdown);
// //     deadline.innerHTML = `<h4 class="expired"> Sorry, this giveaway has expired</h4>`
// //   }

// // }
// // let countdown = setInterval(getRemaindingTime, 1000)
// // getRemaindingTime();