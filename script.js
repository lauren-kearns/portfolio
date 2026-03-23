  
// 1. Fetch the header and inject it
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    const container = document.getElementById('global-header');
    if (container) {
      container.innerHTML = data;
      
      // 2. ONLY start scroll logic after the header is injected
      initNavbarScroll();
    }
  })
  .catch(err => console.error('Error loading header:', err));

// Define the scroll logic function
function initNavbarScroll() {
  const header = document.querySelector('.project-header');
  // Check if we are on the homepage
  const isHomePage = document.body.classList.contains('home-page');
  let lastScrollY = window.scrollY;

  if (!header) return;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // A. Handle Homepage Background (Transparent -> Filled)
    if (isHomePage) {
      if (currentScrollY > 50) {
        header.classList.add('nav-scrolled');
      } else {
        header.classList.remove('nav-scrolled');
      }
    }

    // B. Handle Global Show/Hide
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling Down
      header.classList.add('nav-hidden');
    } else {
      // Scrolling Up
      header.classList.remove('nav-hidden');
    }

    lastScrollY = currentScrollY;
  });
}
