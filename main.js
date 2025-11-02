
// Smooth scroll for navbar
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({behavior: 'smooth'});
  });
});

// Full-screen modal logic for project images
function openModal(src, alt) {
  document.getElementById("imageModal").classList.add("open");
  document.getElementById("modalImg").src = src;
  document.getElementById("caption").innerText = alt;
}
function closeModal() {
  document.getElementById("imageModal").classList.remove("open");
}
window.onclick = function(event) {
  const modal = document.getElementById("imageModal");
  if (event.target == modal) closeModal();
}
document.onkeydown = function(e) {
  if (e.key === "Escape") closeModal();
};

// Smooth scroll for navbar
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({behavior: 'smooth'});
  });
});

// Animate project cards on scroll
const cards = document.querySelectorAll('.project-card');
const reveal = () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50) card.classList.add('revealed');
  });
};
window.addEventListener('scroll', reveal);
reveal();

// Keyboard accessibility for project cards
cards.forEach(card => {
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter') card.click();
  });
});
// Full-screen modal logic
function openModal(src, alt) {
  document.getElementById("imageModal").classList.add("open");
  document.getElementById("modalImg").src = src;
  document.getElementById("caption").innerText = alt;
}
function closeModal() {
  document.getElementById("imageModal").classList.remove("open");
}
window.onclick = function(event) {
  const modal = document.getElementById("imageModal");
  if (event.target == modal) closeModal();
}
document.onkeydown = function(e) {
  if (e.key === "Escape") closeModal();
};

