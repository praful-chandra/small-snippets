(function () {
  const hours = document.querySelector(".hours");
  const minutes = document.querySelector(".minutes");
  const seconds = document.querySelector(".seconds");

  const startBtn = document.querySelector(".startbtn");
  const stopBtn = document.querySelector(".stopbtn");
  const resetBtn = document.querySelector(".resetbtn");

  let setTimerVar = null;
  function resetTimer() {
    clearInterval(setTimerVar);
    hours.value = "";
    minutes.value = "";
    seconds.value = "";
  }

  function tick() {
    if (!hours.value) hours.value = "00";
    if (!minutes.value) minutes.value = "00";
    if (!seconds.value) seconds.value = "00";
    if (
      parseInt(hours.value) === 0 &&
      parseInt(minutes.value) === 0 &&
      parseInt(seconds.value) === 0
    ) {
      return resetTimer();
    }
    console.log({ sec: seconds.value, min: minutes.value, hrs: hours.value });

    if (
      parseInt(seconds.value) === 0 &&
      parseInt(minutes.value) === 0 &&
      parseInt(hours.value) > 0
    ) {
      seconds.value = 59;
      minutes.value = 59;
      hours.value = hours.value <= 10 ? `0${--hours.value}` : --hours.value;
      return;
    }

    if (parseInt(seconds.value) === 0 && parseInt(minutes.value) > 0) {
      seconds.value = 59;
      minutes.value =
        minutes.value <= 10 ? `0${--minutes.value}` : --minutes.value;
      return;
    }
    if (seconds.value > 0) {
      seconds.value =
        seconds.value <= 10 ? `0${--seconds.value}` : --seconds.value;
    }

    //   return;

    // if (minutes.value > 0) {
    //   minutes.value =
    //     minutes.value <= 10 ? `0${--minutes.value}` : --minutes.value;
    //   return;
    // }
  }

  function startTimer() {
    setTimerVar = setInterval(() => {
      tick();
    }, 10);
  }

  startBtn.addEventListener("click", () => {
    startTimer();
  });

  resetBtn.addEventListener("click", () => {
    resetTimer();
  });
})();
