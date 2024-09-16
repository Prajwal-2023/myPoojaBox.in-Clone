// FOR VIDEO MUTE UNMUTE
const video = document.getElementById('video_original');
const muteBtn = document.getElementById('sound');

muteBtn.addEventListener('click', function () {
    if (video.hasAttribute('muted')) {
        video.removeAttribute('muted');
        video.muted = false;
    } else {
        video.removeAttribute('muted', '');
        video.muted = true;
    }
});


// FOR SLIDER ROUND
const scrollContainer = document.querySelector('.round_corausol');
const scrollLeft = document.querySelector('.slider_l');
const scrollRight = document.querySelector('.slider_r');

scrollLeft.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -200,
        behavior: 'smooth'
    });
});

scrollRight.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: 200,
        behavior: 'smooth'
    });
});


// for card hover
const images = document.querySelectorAll('.imagediv');
images.forEach(image => {
    const originalSrc = image.src;

    // mouse enter
    image.addEventListener('mouseenter', function () {
        image.src = image.getAttribute('data-hover');
    });
    // mouse leave
    image.addEventListener('mouseleave', function () {
        image.src = originalSrc;
    });

});



// REVIEW

const flexForCard = document.querySelector('.flex_for_card');

const leftBtn = document.querySelector('.left_swipe');
const righttBtn = document.querySelector('.right_swipe');

leftBtn.addEventListener('click', function () {
    flexForCard.scrollBy({
        left: 200,
        behavior: 'smooth'
    })
})

righttBtn.addEventListener('click', function () {
    flexForCard.scrollBy({
        left: -200,
        behavior: 'smooth'
    })
})



//  Read text


const readMoreText = document.querySelector('#read_more_text');
const readMoreText1 = document.querySelector('#read_more_text1')
const dots = document.querySelector('#dots_elips');
const readMoreBtn = document.querySelector('.read_btn');
dots.textContent= `......`;
let textFlag =1

readMoreBtn.addEventListener('click', function(){
    if(textFlag === 1){
        readMoreText.style.display = 'block';
        readMoreText1.style.display = 'block';
        readMoreBtn.textContent = 'Read Less';
        dots.textContent= ` `;
        textFlag = 0;
    }
    else{
        textFlag = 1;
        dots.textContent= `......`;
        readMoreText.style.display = 'none';
        readMoreText1.style.display = 'none';
        readMoreBtn.textContent = 'Read More';

    }
})
























// 




















// Drop down for footer
// rotate function

// 
let flag = 1;
const svgLogo = document.getElementsByClassName('drop_down')[0];
const dropDownList = document.getElementsByClassName('drop_down_list')[0];

svgLogo.addEventListener('click', function () {
    if (flag === 1) {
        svgLogo.style.transform = `rotate(-90deg)`;  
        dropDownList.style.display = 'block';
        flag = 0;
    } else {
        svgLogo.style.transform = `rotate(90deg)`; 
        dropDownList.style.display = 'none'; 
        flag = 1;
    }       
});


// Drop down for footer
const svgLogo1 = document.getElementsByClassName('drop_down')[1];
const dropDownList1 = document.getElementsByClassName('drop_down_list')[1];

svgLogo1.addEventListener('click', function () {
    if (flag === 1) {
        svgLogo1.style.transform = `rotate(-90deg)`;  
        dropDownList1.style.display = 'block';
        flag = 0;
    } else {
        svgLogo1.style.transform = `rotate(90deg)`; 
        dropDownList1.style.display = 'none'; 
        flag = 1;
    }       
});



// Drop down for footer
const svgLogo2 = document.getElementsByClassName('drop_down')[2];
const dropDownList2 = document.getElementsByClassName('drop_down_list')[2];

svgLogo2.addEventListener('click', function () {
    if (flag === 1) {
        svgLogo2.style.transform = `rotate(-90deg)`;  
        dropDownList2.style.display = 'block';
        flag = 0;
    } else {
        svgLogo2.style.transform = `rotate(90deg)`; 
        dropDownList2.style.display = 'none'; 
        flag = 1;
    }       
});

// -----
const svgLogo3 = document.getElementsByClassName('drop_down')[3];
const dropDownList3 = document.getElementsByClassName('drop_down_list')[3];

svgLogo3.addEventListener('click', function () {
    if (flag === 1) {
        svgLogo3.style.transform = `rotate(-90deg)`;  
        dropDownList3.style.display = 'block';
        flag = 0;
    } else {
        svgLogo3.style.transform = `rotate(90deg)`; 
        dropDownList3.style.display = 'none'; 
        flag = 1;
    }       
});

// ------
const svgLogo4 = document.getElementsByClassName('drop_down')[4];
const dropDownList4 = document.getElementsByClassName('drop_down_list')[4];

svgLogo4.addEventListener('click', function () {
    if (flag === 1) {
        svgLogo4.style.transform = `rotate(-90deg)`;  
        dropDownList4.style.display = 'block';
        flag = 0;
    } else {
        svgLogo4.style.transform = `rotate(90deg)`; 
        dropDownList4.style.display = 'none'; 
        flag = 1;
    }       
});

// -----
const svgLogo5 = document.getElementsByClassName('drop_down')[5];
const dropDownList5 = document.getElementsByClassName('drop_down_list')[5];

svgLogo5.addEventListener('click', function () {
    if (flag === 1) {
        svgLogo5.style.transform = `rotate(-90deg)`;  
        dropDownList5.style.display = 'block';
        flag = 0;
    } else {
        svgLogo5.style.transform = `rotate(90deg)`; 
        dropDownList5.style.display = 'none'; 
        flag = 1;
    }       
});


// Burger toggle
const burger = document.querySelector('.burger');
const coverScreen = document.querySelector('.cover_screen'); 
const closeScreen = document.querySelector('#close_cs');
const body  = document.querySelector('body');

burger.addEventListener('click' , () =>{
    coverScreen.style.display = `flex`;
    
});
closeScreen.addEventListener('click' , () =>{
    coverScreen.style.display = `none`;

})



