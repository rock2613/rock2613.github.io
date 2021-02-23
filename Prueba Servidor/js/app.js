window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel--lista'), {
		slidesToScroll: 4,
  		slidesToShow: 5,
  		dots: '.carousel--indicadores',
  		arrows: {
   			prev: '.carousel--anterior',
    		next: '.carousel--siguiente'
  		}
	});
});

