 // Scroll animation
 document.addEventListener("DOMContentLoaded", function() {
    const scrollElements = document.querySelectorAll(".scroll-reveal");
  
    const elementInView = (el, offset = 100) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset
      );
    };
  
    const displayScrollElement = (element) => {
      element.classList.add('animate__animated', 'animate__fadeInUp');
    };
  
    const hideScrollElement = (element) => {
      element.classList.remove('animate__animated', 'animate__fadeInUp');
    };
  
    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
          displayScrollElement(el);
        } else {
          hideScrollElement(el);
        }
      })
    }
  
    window.addEventListener('scroll', () => { 
      handleScrollAnimation();
    });

    var testimonialCarousel = document.querySelector('#testimonialCarousel');
    if (testimonialCarousel) {
    var carousel = new bootstrap.Carousel(testimonialCarousel, {
      interval: 5000, // Auto-slide every 5 seconds
      ride: 'carousel'
    });
    }
//code for success message
//document.getElementById('form-message').textContent = "Message sent successfully!";
//contact form send code

    const contactForm = document.getElementById("contactForm");
    const feedback = document.getElementById("form-message");
    const btnText = document.getElementById("btn-text");
    const btnLoader = document.getElementById("btn-loader");

    if (contactForm) {
      contactForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        btnText.classList.add("d-none");
        btnLoader.classList.remove("d-none");

        const formData = new URLSearchParams(new FormData(contactForm));
        try{
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formData
          });
  
          const result = await response.json();
          feedback.textContent = result.message;
          feedback.classList.remove('d-none', 'alert-danger', 'alert-success');
          feedback.classList.add(response.ok ? 'alert-success' : 'alert-danger');
  
          if (response.ok) contactForm.reset();

        } catch(err){
          feedback.textContent = 'Failed to send message! please check your connection!'
          feedback.classList.remove('d-none', 'alert-success');
          feedback.classList.add('alert-danger');
        }
        btnText.classList.remove("d-none");
        btnLoader.classList.add("d-none");
         
      });
    }

    const serviceBoxes = document.querySelectorAll(".service-box-alt");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, {
      threshold: 0.1
    });
 
    //toggle button + and -
    const collapses = document.querySelectorAll('.collapse');
  collapses.forEach(collapse => {
    collapse.addEventListener('show.bs.collapse', function () {
      const icon = this.previousElementSibling.querySelector("i");
      if (icon) {
        icon.classList.remove("bi-plus-circle");
        icon.classList.add("bi-dash-circle");
      }
    });
    collapse.addEventListener('hide.bs.collapse', function () {
      const icon = this.previousElementSibling.querySelector("i");
      if (icon) {
        icon.classList.remove("bi-dash-circle");
        icon.classList.add("bi-plus-circle");
      }
    });
  });
//code to donwload services

});



