// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 100
});

// Mobile Navigation
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const spans = navToggle.querySelectorAll('span');
  spans[0].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(6px, 6px)' : '';
  spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
  spans[2].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(6px, -6px)' : '';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '1';
    spans[2].style.transform = '';
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.padding = '15px 0';
    navbar.style.background = 'rgba(0, 0, 0, 0.95)';
  } else {
    navbar.style.padding = '20px 0';
    navbar.style.background = '#000';
  }
});

// Form submission
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      form.reset();
      alert('Message sent successfully!');
    } else {
      throw new Error('Something went wrong');
    }
  })
  .catch(error => {
    alert('Error sending message. Please try again.');
  });
});
window.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("launchModal");
  const closeBtn = document.getElementById("closeModal");

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Optional: auto close after 10 seconds
  // setTimeout(() => modal.classList.add("hidden"), 10000);
});
