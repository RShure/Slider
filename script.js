const images = [
    {
    text: 'Rostov-on-Don LCD admiral',
    time: '3.5 months',
    area: '81 m2',
    url: "images/png/hero_2.png"
},
{
    text: 'Sochi Thieves',
    time: '4 months',
    area: '105 m2',
    url: 'images/png/hero_1.png'
},
{
    text: 'Rostov-on-Don Patriotic',
    time: '3 months',
    area: '93 m2',
    url: 'images/png/hero_3.png'
}
]

function initSlider(options) {
  if (!images || !images.length) return;
    
  
  let sliderImages = document.querySelector(".box__image_slider");
  let sliderArrows = document.querySelectorAll(".slider_arrow");
  let sliderDots = document.querySelector('.slider_dots')
  let sliderNavigation = document.querySelector('.box__image_name')
  const text = document.querySelector(".city");
  const time = document.querySelector(".time");
  const area = document.querySelector(".area")
  let city = document.querySelectorAll('.name_city')

  
  initImages();
  initArrows();
  initTitles();

  if (options.dots) {
    initDots();
  }
  if (options.titles) {
    initTitles();
  }
  
  
  
  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image: url(${images[index].url});" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
}

function initArrows() {
  sliderArrows.forEach(arrow => {
    arrow.addEventListener("click", function() {
      let curNumber = +sliderImages.querySelector(".active").dataset.index;
      let nextNumber;
      if (arrow.classList.contains("prev")) {
        nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
      } 
      else {
        nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
      }
      NextText(nextNumber);
      moveSlider(nextNumber);
    });
  });
}


  

function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}"  data-index="${index}"></div>`
    sliderDots.innerHTML += dot;
    });

    sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
      dot.addEventListener("click", function() {
        ind = this.dataset.index;
        NextText(ind)
        moveSlider(ind)
      })
    })
  }


  function NextText(num){
    text.innerText = images[num].text;
    time.innerText = images[num].time;
    area.innerText = images[num].area;
  }

  function initTitles(){
    city.forEach(i => {
      i.addEventListener("click", function(){
        if (i.classList.contains('num0' )){
          num = 0;
        }
        else if(i.classList.contains('num1')){
          num = 1;
        }
        else{
          num = 2;
        }
        moveSlider(num);
        NextText(num)
      })
    })
  }

  function moveSlider(num) {
    sliderNavigation.querySelector(".active").classList.remove("active");
    sliderNavigation.querySelector(".num" + num).classList.add("active");
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");


    if (options.dots) {
      sliderDots.querySelector(".active").classList.remove("active");
      sliderDots.querySelector(".n" + num).classList.add("active");

    }
  }
}

let sliderOptions = {
  dots: true,

};

document.addEventListener("DOMContentLoaded", function() {
  initSlider(sliderOptions);
});
