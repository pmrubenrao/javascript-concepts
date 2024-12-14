const btn = document.querySelector('.btn');

function debounce(fn, delay) {
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

btn.addEventListener('click', debounce(netwrokCall, 1000));
