const allStarsInd = document.querySelector('.stars');
const allStars = document.querySelectorAll('.star');
const rating = document.querySelector('#rating');

allStarsInd.addEventListener('click', (e) => {
  console.log(e.target, e.currentTarget);
  if (e.target.classList.contains('star')) {
    const value = parseInt(e.target.getAttribute('data-value'));
    console.log('do something', value);
    for (let i = 0; i < allStars.length; i++) {
      allStars[i].classList.remove('filled');
      if (i < value) {
        allStars[i].classList.add('filled');
      }
    }
    rating.innerText = value;
  }
});
