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
dots.textContent = `......`;
let textFlag = 1

readMoreBtn.addEventListener('click', function () {
    if (textFlag === 1) {
        readMoreText.style.display = 'block';
        readMoreText1.style.display = 'block';
        readMoreBtn.textContent = 'Read Less';
        dots.textContent = ` `;
        textFlag = 0;
    }
    else {
        textFlag = 1;
        dots.textContent = `......`;
        readMoreText.style.display = 'none';
        readMoreText1.style.display = 'none';
        readMoreBtn.textContent = 'Read More';

    }
})

// Drop down for footer


const svgLogos = document.getElementsByClassName('drop_down');
const dropDownLists = document.getElementsByClassName('drop_down_list');

for (let i = 0; i < svgLogos.length; i++) {
    const svgLogo = svgLogos[i];
    const dropDownList = dropDownLists[i];

    svgLogo.dataset.flag = 1;

    svgLogo.addEventListener('click', function () {
        if (svgLogo.dataset.flag == 1) {
            svgLogo.style.transform = `rotate(-90deg)`;
            dropDownList.style.display = 'block';
            svgLogo.dataset.flag = 0;
        } else {
            svgLogo.style.transform = `rotate(90deg)`;
            dropDownList.style.display = 'none';
            svgLogo.dataset.flag = 1;
        }
    });
}




// Burger toggle
const burger = document.querySelector('.burger');
const coverScreen = document.querySelector('.cover_screen');
const closeScreen = document.querySelector('#close_cs');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    coverScreen.style.display = `flex`;

});
closeScreen.addEventListener('click', () => {
    coverScreen.style.display = `none`;

})



