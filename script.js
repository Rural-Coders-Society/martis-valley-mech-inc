const floatingCall = document.querySelector('.floating-call');
let lastScrollY = window.scrollY;

function handleFloatingCallVisibility() {
  if (!floatingCall) {
    return;
  }

  const currentScrollY = window.scrollY;
  const nearTop = currentScrollY < 120;
  const scrollingDown = currentScrollY > lastScrollY;

  floatingCall.classList.toggle('hidden', scrollingDown && !nearTop);
  lastScrollY = currentScrollY;
}

window.addEventListener('scroll', handleFloatingCallVisibility, { passive: true });
