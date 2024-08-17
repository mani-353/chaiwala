// document.addEventListener('DOMContentLoaded', function () {
//     // Testimonial slider auto-scroll
//     const slider = document.querySelector('.testimonial-slider');
//     let currentIndex = 0;
//     const testimonials = slider.querySelectorAll('.testimonial');
//     console.log(testimonials);
//     const totalTestimonials = testimonials.length;
//     console.log(totalTestimonials);

//     setInterval(() => {
//         currentIndex = (currentIndex + 1) % totalTestimonials;
//         console.log(currentIndex);
//         slider.style.transform = `translateX(-${currentIndex * 100}%)`;
//     }, 10000);

//     // Responsive nav toggle
//     const nav = document.querySelector('header nav ul');
//     const navToggle = document.querySelector('.nav-toggle');
//     navToggle.addEventListener('click', () => {
//         nav.classList.toggle('active');
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const sliderWrapper = document.querySelector('.testimonial-wrapper');
    const testimonials = sliderWrapper.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    const totalTestimonials = testimonials.length;

    // Function to update slider position
    function updateSlider(index) {
        sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
    }

    // Auto-slide every 10 seconds
    let autoSlide = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalTestimonials;
        updateSlider(currentIndex);
    }, 10000);

    // Manual slide with buttons
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
        updateSlider(currentIndex);
        resetAutoSlide();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalTestimonials;
        updateSlider(currentIndex);
        resetAutoSlide();
    });

    // Reset auto-slide interval
    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalTestimonials;
            updateSlider(currentIndex);
        }, 10000);
    }

    // Responsive nav toggle
    const nav = document.querySelector('header nav ul');
    const navToggle = document.querySelector('.nav-toggle');
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});


