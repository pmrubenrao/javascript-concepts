const btn = document.querySelector('.btn');

function throttle(fn, delay) {
  let intervalInProgress = false;
  return function () {
    if (intervalInProgress) {
      return;
    }
    fn();
    intervalInProgress = true;

    setTimeout((e) => {
      intervalInProgress = false;
    }, delay);
  };
}
function netwrokCall(e) {
  console.log('Network call made');
}

btn.addEventListener('click', throttle(netwrokCall, 1000));
