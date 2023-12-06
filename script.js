function clock() {
  let hour = document.querySelector(".hour");
  let minute = document.querySelector(".minute");
  let second = document.querySelector(".second");
  let am_pm = document.querySelector(".am_pm");

  let hr = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();

  if (hr > 12) {
    hr = hr - 12;
    am_pm.innerHTML = "PM";
  }
  
  hr = hr < 10 ? "0" + hr : hr;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  hour.innerHTML = hr;
  minute.innerHTML = min;
  second.innerHTML = sec;
}
clock();
setInterval(clock, 1000);

