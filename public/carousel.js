$( document ).ready(() => {
  // building image bullets
  let bulletID=1;
  for (let i=0; i<itemCount; i++){
    if (bulletID===1) {
      $("#carousel-bullets").append('<li class="carousel-bullet bullet-hilight" id="bullet'+bulletID+'">&#9679;</li>');
    } else {
      $("#carousel-bullets").append('<li class="carousel-bullet" id="bullet'+bulletID+'">&#9702;</li>');
    }
    bulletID++;
  }
});

// Finding number of slides in slider
const itemCount = $('.carousel li.slide').length;

//changing images
const swap = action => {
  //previous slide
  if(!(action)) {
    let leftSlide = $('.left-slide').attr('slide-id') - 1;
    leftSlide=(leftSlide<1)?leftSlide = itemCount:leftSlide;

    $('.right-slide').removeClass('right-slide').addClass('back-slide');
    $('.main-slide').removeClass('main-slide').addClass('right-slide');
    $('.left-slide').removeClass('left-slide').addClass('main-slide');
    $('.back-slide[slide-id=' + leftSlide + ']').removeClass('back-slide').addClass('left-slide');
  }
  
  //next slide
  if(action) {
    let rightSlide = Number($('.right-slide').attr('slide-id'))+1;
    rightSlide=(rightSlide>itemCount)?rightSlide=1:rightSlide;

    $('.left-slide').removeClass('left-slide').addClass('back-slide');
    $('.main-slide').removeClass('main-slide').addClass('left-slide');
    $('.right-slide').removeClass('right-slide').addClass('main-slide');
    $('.back-slide[slide-id=' + rightSlide + ']').removeClass('back-slide').addClass('right-slide');
  }

  //updating image bullets
  let slideNum = $('.main-slide').attr('slide-id');
  $('.bullet-hilight')[0].innerHTML="&#9702;";
  $('.bullet-hilight').removeClass('bullet-hilight');
  $('#bullet'+slideNum).addClass('bullet-hilight');
  $('#bullet'+slideNum)[0].innerHTML="&#9679;";
}


