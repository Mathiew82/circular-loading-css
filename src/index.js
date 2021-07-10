window.onload = function () {
  const loadingLeft = document.querySelector(".circular-loading__left-inner");
  const loadingRight = document.querySelector(".circular-loading__right-inner");
  const loadingValue = document.querySelector(".circular-loading-value");

  let percentageSimulation = Array.from(Array(100).keys());

  const percentage = percentageSimulation.reduce(
    (previousPromise, currentValue) => {
      return previousPromise.then(
        () =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              if (currentValue + 1 <= 50) {
                loadingRight.style.transform = `rotate(${
                  (currentValue + 1) * 3.6 + 180
                }deg)`;
              } else {
                loadingLeft.style.transform = `rotate(${
                  (currentValue + 1) * 3.6
                }deg)`;
              }

              loadingValue.innerHTML = `${currentValue + 1}%`;

              resolve();
            }, 50);
          })
      );
    },
    Promise.resolve()
  );

  // alert("Loading filished");
};
