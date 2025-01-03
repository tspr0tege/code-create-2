// Update "current" class when clicking on a nav button

const navLinks = document.querySelectorAll("#nav ul li a");

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {changeCurrent(event.target)})
})

function changeCurrent(element) {
  let currentFocus = document.querySelector("#nav ul li.current");
  currentFocus.classList.remove("current");
  
  element.parentElement.classList.add("current");
}


// Update "current" class when scrolling

const sections = document.querySelectorAll('section');

const updateCurrent = debounce((id) => {        
  let navTarget = document.querySelector(`#nav ul li a[href="#${id}"]`)
  console.log("Nav Target: ", navTarget)
  if (!!navTarget) changeCurrent(navTarget)
}, 150);

function checkScrollPosition() {
  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (!!section.id && top >= 0 && top <= window.innerHeight / 3) {
      console.log(`Section in view: ${section.id}`);
      updateCurrent(section.id);
    }
  });
}

window.addEventListener('scroll', checkScrollPosition);

checkScrollPosition();