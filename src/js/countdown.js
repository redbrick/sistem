const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const minutes = times => times * minute;

const getTimeRemaining = (endtime, now = new Date().getTime()) => ({
  total: endtime - now,
  days: Math.floor((endtime - now) / day),
  hours: Math.floor(((endtime - now) / hour) % 24),
  minutes: Math.floor(((endtime - now) / 1000 / 60) % 60),
  seconds: Math.floor(((endtime - now) / second) % 60),
});

export default function countdown(id, endtime) {
  const clock = document.getElementById(id);
  const spans = {
    days: clock.querySelector('.days'),
    hours: clock.querySelector('.hours'),
    minutes: clock.querySelector('.minutes'),
    seconds: clock.querySelector('.seconds'),
  };

  update();
  const timeinterval = setInterval(update, 1000);

  function update() {
    const t = getTimeRemaining(endtime);

    spans.days.innerHTML = t.days;
    spans.hours.innerHTML = `0${t.hours}`.slice(-2);
    spans.minutes.innerHTML = `0${t.minutes}`.slice(-2);
    spans.seconds.innerHTML = `0${t.seconds}`.slice(-2);

    if (t.total <= minutes(10)) {
      [...document.getElementsByClassName('countdown')][0].classList.toggle('hidden');
      [...document.getElementsByClassName('livestream')][0].classList.toggle('hidden');
      clearInterval(timeinterval);
    }
  }
}
