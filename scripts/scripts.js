const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000, // seta o tempo de espera para cada slide
         disableOnInteraction: false, // Permite a interação do usuário com os botões de navegação
       },
  });