// darkmode
const themeToggle = document.getElementById("switch");

function switchTheme(e){
    if(e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
}

themeToggle.addEventListener("change", switchTheme, false);

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if(currentTheme === "dark") {
        themeToggle.checked = true;
    }
}

// modal
function openModal(img) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-image");
    modal.style.display = "block";
    modalImg.src = img.src;
}
  
  function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

// splidejs
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide('#splide', {
      type: 'loop',
      perPage: 3,
      focus: 'center',
      autoplay: true,
      interval: 8000,
      flickMaxPages: 3,
      updateOnMove: true,
      pagination: false,
      padding: '10%',
      throttle: 300,
      breakpoints: {
        1440: {
          perPage: 1,
          padding: '30%'
        }
      }
    }).mount();
});