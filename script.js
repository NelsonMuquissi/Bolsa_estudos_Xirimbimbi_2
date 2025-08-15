(function() {
      'use strict';
      const forms = document.querySelectorAll('.needs-validation');
      Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    })();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (id.length > 1 && document.querySelector(id)) {
          e.preventDefault();
          document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Optional: highlight navbar on scroll
    const nav = document.querySelector('.navbar');
    const toggleNavBg = () => {
      if (window.scrollY > 10) nav.classList.add('shadow'); else nav.classList.remove('shadow');
    }; toggleNavBg(); window.addEventListener('scroll', toggleNavBg);