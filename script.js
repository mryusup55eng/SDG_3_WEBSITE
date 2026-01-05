

const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel-img");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let currentIndex = 0;
let slideInterval = null;

function showImage(index) {
  images.forEach(img => img.classList.remove("active"));
  if (images[index]) {
    images[index].classList.add("active");}}

function startSlideshow() {
  if (!images.length || slideInterval) return;
  slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, 3000); }

function stopSlideshow() {
  if (slideInterval) {
    clearInterval(slideInterval);
    slideInterval = null; } }

if (carousel && images.length) {
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex); }); }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex); });}

  carousel.addEventListener("mouseenter", stopSlideshow);
  carousel.addEventListener("mouseleave", startSlideshow);

  startSlideshow();}






  
$(document).ready(function () {
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    const target = $(this.getAttribute("href"));
    if (target.length) {
      $("html, body").animate(
        { scrollTop: target.offset().top },
        800 );  }});});

