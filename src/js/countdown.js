let now = new Date().getTime();
let liveShown = false;
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const minutes = times => times * minute;

export default function countdown() {
  if (now + minutes(10) < start) {
    document.queryselectorall('.countdown').style.transition = 'opacity 4s';
  } else {
    showLive();
  }
  now += 1000;

  const dist = start - now;
  const days = Math.floor(dist / day);
  const hours = Math.floor((dist % day) / hour);
  const mins = Math.floor((dist % hour) / minute);
  const secs = Math.floor((dist % minute) / second);

  document.querySelectorAll('.countdown .countdown__counter').innerHTML = `
    ${days > 0 ? `<span>${days} Days</span>` : ''}
    ${hours > 0 ? `<span>${hours} Hours</span>` : ''}
    ${mins > 0 ? `<span>${mins} Minutes</span>` : ''}
    <span>${secs} Seconds</span>`;
}

function showLive() {
  if (!liveShown) {
    $('.countdown').hide(400, () => {
      $('.livestream').show(0, () => {
        document.querySelectorAll('video').style.height = 0;
        $('video').animate(
          {
            height: $('video').width() * (9 / 16),
            display: 'block',
          },
          1000,
        );
      });
    });
    liveShown = true;
  }
}
