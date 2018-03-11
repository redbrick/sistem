import { isUndefined, isNull } from 'lodash';

const period = times => (...args) => times * args[0];
const seconds = period(1000);
const minutes = period(seconds(60));
const hours = period(minutes(60));

const getTimeRemaining = (endtime, now = new Date().getTime()) => ({
  total: endtime - now,
  days: Math.floor((endtime - now) / hours(24)),
  hours: Math.floor(((endtime - now) / hours(1)) % 24),
  minutes: Math.floor(((endtime - now) / minutes(1)) % 24),
  seconds: Math.floor(((endtime - now) / seconds(1)) % 60),
});

export default function countdown(id, endtime) {
  const clock = document.getElementById(id);
  if (isUndefined(endtime) || isNull(clock)) return;
  const spans = {
    days: clock.querySelector('.days'),
    hours: clock.querySelector('.hours'),
    minutes: clock.querySelector('.minutes'),
    seconds: clock.querySelector('.seconds'),
  };

  update();
  const timeinterval = setInterval(update, seconds(1));

  function update() {
    const t = getTimeRemaining(1521882000000);

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
