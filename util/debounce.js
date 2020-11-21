/**
 * 防抖
 * @fn 方法
 * @wait 等待时间
 */
export const debounce = (fn, wait) => {
  let timer,
    startTimeStamp = 0;
  let context, args;
  let run = timerInterval => {
    timer = setTimeout(() => {
      let now = new Date().getTime();
      let interval = now - startTimeStamp;
      if (interval < timerInterval) {
        startTimeStamp = now;
        run(wait - interval); // reset timer for left time
      } else {
        fn.apply(context, args);
        clearTimeout(timer);
        timer = null;
      }
    }, timerInterval);
  };
  return function() {
    context = this;
    args = arguments;
    let now = new Date().getTime();
    startTimeStamp = now;

    if (!timer) {
      run(wait);
    }
  };
};
