$( document ).ready(() => {
	class Carousel {
		constructor(images) {
			this.itemCount = $('.carousel li.slide').length;
		}

		swap(direction) {
			//previous slide
			if(direction=='prev') {
			var leftSlide = $('.left-slide').attr('slide-id') - 1;
			leftSlide=(leftSlide<1)?leftSlide = this.itemCount:leftSlide;

			$('.right-slide').removeClass('right-slide').addClass('back-slide');
			$('.main-slide').removeClass('main-slide').addClass('right-slide');
			$('.left-slide').removeClass('left-slide').addClass('main-slide');
			$('.back-slide[slide-id=' + leftSlide + ']').removeClass('back-slide').addClass('left-slide');
			}

			//next slide
			if(direction=='next') {
			var rightSlide = Number($('.right-slide').attr('slide-id'))+1;
			rightSlide=(rightSlide>this.itemCount)?rightSlide=1:rightSlide;

			$('.left-slide').removeClass('left-slide').addClass('back-slide');
			$('.main-slide').removeClass('main-slide').addClass('left-slide');
			$('.right-slide').removeClass('right-slide').addClass('main-slide');
			$('.back-slide[slide-id=' + rightSlide + ']').removeClass('back-slide').addClass('right-slide');
			}

			//updating image bullets
			var slideNum = $('.main-slide').attr('slide-id');
			$('.bullet-hilight')[0].innerHTML="&#9702;";
			$('.bullet-hilight').removeClass('bullet-hilight');
			$('#bullet'+slideNum).addClass('bullet-hilight');
			$('#bullet'+slideNum)[0].innerHTML="&#9679;";
		}
	}

	Carousel.prototype.init = function() {
		var _this = this;

		// building image bullets
		var bulletID=1;
		for (var i=0; i<this.itemCount; i++){
			if (bulletID===1) {
			$("#carousel-bullets").append('<li class="carousel-bullet bullet-hilight" id="bullet'+bulletID+'">&#9679;</li>');
			} else {
				$("#carousel-bullets").append('<li class="carousel-bullet" id="bullet'+bulletID+'">&#9702;</li>');
			}
			bulletID++;
		};

		$('#prev-slide').click(function() {_this.swap('prev')});
		$('#next-slide').click(function() {_this.swap('next')});
	};

	var simpleCarousel = new Carousel();
	simpleCarousel.init();
});


