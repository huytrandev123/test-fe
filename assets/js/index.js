const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function updateSlides() {
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    updateSlides();
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    updateSlides();
});

// carousel control
const controls = document.querySelectorAll('.control');

controls.forEach((control, index) => {
  control.addEventListener('click', () => {
    // Remove active classes from all controls and slides
    controls.forEach(c => c.classList.remove('active'));
    slides.forEach(s => s.classList.remove('active'));

    // Add active class to clicked control and corresponding slide
    control.classList.add('active');
    slides[index].classList.add('active');
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  // Hiển thị mobile menu khi click vào biểu tượng menu-toggle
  menuToggle.addEventListener('click', function() {
    mobileMenu.style.display = 'flex'; // Hiển thị mobile menu
  });

  // Ẩn mobile menu khi click bên ngoài
  mobileMenu.addEventListener('click', function(event) {
    if (event.target === mobileMenu) {
      mobileMenu.style.display = 'none'; // Ẩn mobile menu
    }
  });

  // Thêm các mục menu vào mobile-menu
  const leftMenuItems = document.querySelector('.left');
  leftMenuItems.childNodes.forEach(function(node) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const cloneNode = node.cloneNode(true);
      cloneNode.classList.remove('group');
      cloneNode.classList.remove('group dropdown');
      mobileMenu.querySelector('.menu-content').appendChild(cloneNode);
    }
  });
});