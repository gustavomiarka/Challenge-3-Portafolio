window.addEventListener('scroll', function()  {
    let element = document.querySelector('.contacto');
    let screenSize = window.innerHeight;
    
      if(element.getBoundingClientRect().top < screenSize) {
        element.classList.add('contacto-init');
      } 
  });

