const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

const setTimerTime = (value) => {
  let timeLeft = new Date("January 1, 2000 00:00:00");
  timeLeft.setSeconds(timeLeft.getSeconds() + value);
  return timeLeft;
};

const updateTime = (timeLeft) => {
  timeLeft.setSeconds(timeLeft.getSeconds() - 1);
  timerEl.textContent = timeLeft.toLocaleTimeString();
};

const createTimerAnimator = () => {
  return (seconds) => {
    if (seconds > 86400) return;
    const timeLeft = setTimerTime(seconds);
    const timer = setInterval(() => updateTime(timeLeft), 1000);

    setTimeout(() => {
      clearInterval(timer);
    }, seconds * 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", (e) => {
  if (!/^\d+$/.test(e.target.value)) e.target.value = "";
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
