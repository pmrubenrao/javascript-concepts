const input = document.querySelector('#input');
let debounceTimer = 0;

function debounce(fn) {
  let debounceTimer = null;
  return function (e) {
    // console.log(`from debounce: ${e.target.value}`);
    if (debounceTimer != null) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => {
      fn(e);
      debounceTimer = null;
    }, 1000);
  };
}
const debounceCaller = debounce(networkCall);

function networkCall(e) {
  console.log(`from network: ${e.target.value}`);
}
input.addEventListener('input', debounceCaller);
