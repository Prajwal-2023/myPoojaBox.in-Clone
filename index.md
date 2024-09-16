<!-- Method 1 not worked -->
let flag = 1;
let indexFor = '';
const svgLogos = document.querySelectorAll('.drop_down');
const dropDownLists = document.querySelectorAll('.drop_down_list');

svgLogos.forEach(svgLogo => {
    svgLogo.addEventListener('click', function () {
        if (flag === 1) {
            dropDownLists.forEach(dropDownList => {
                svgLogo.style.transform = `rotate(-90deg)`;
                dropDownList.index.style.display = 'block';
                flag = 0;
             })

        } else {
            dropDownLists.forEach(dropDownList => {
                svgLogo.style.transform = `rotate(90deg)`;
                dropDownList.index.style.display = 'none';
                flag = 1;
             })
         
        }
    });

})
<!-- Method 2 separate event for every svg and tag -->


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



