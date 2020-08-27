const throttle = (func, delay) => {
  let timer;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        timer = false;
        func(...arguments);
      }, delay);
    }
  };
};

export default throttle;
