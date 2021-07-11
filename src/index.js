function setCurrentLoading({
  currentValue,
  loadingLeft,
  loadingRight,
  loadingValue,
}) {
  if (currentValue + 1 <= 50) {
    loadingRight.style.transform = `rotate(${
      (currentValue + 1) * 3.6 + 180
    }deg)`;
  } else {
    loadingLeft.style.transform = `rotate(${(currentValue + 1) * 3.6}deg)`;
  }

  loadingValue.innerHTML = `${currentValue + 1}%`;
}

function simulateProcessLoading({ loadingLeft, loadingRight, loadingValue }) {
  let totalPercentage = Array.from(Array(100).keys());

  totalPercentage.reduce((previousPromise, currentValue) => {
    return previousPromise.then(
      () =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            setCurrentLoading({
              currentValue,
              loadingLeft,
              loadingRight,
              loadingValue,
            });

            resolve();
          }, 50);
        })
    );
  }, Promise.resolve());
}

window.onload = function () {
  const loadingLeft = document.querySelector(".circular-loading__left-inner");
  const loadingRight = document.querySelector(".circular-loading__right-inner");
  const loadingValue = document.querySelector(".circular-loading-value");

  simulateProcessLoading({ loadingLeft, loadingRight, loadingValue });
};
