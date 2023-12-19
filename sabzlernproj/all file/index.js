const $ = document;
const landingtitle = $.querySelector('.landing__title');
const landingcoursecount = $.querySelector('#courses-count');
const landingminutecount = $.querySelector('#minutes-counter');
const landingusercount = $.querySelector('#user-count');
window.addEventListener('load', () => {
    let landingtext = 'ما به هر قیمتی دوره آموزشی تولید نمیکنیم !!!';
    let typeindex = 0;
    typewriter(landingtext, typeindex);
    makecounter(40, landingcoursecount);
    makecounter(31, 071, landingusercount);
    makecounter(31, 320, landingminutecount);

});

function typewriter(text, index) {
    if (index < text.length) {
        landingtitle.innerHTML += text[index]
        index++;
    }

    setTimeout(() => {
        typewriter(text, index);
    }, 100)
}


function makecounter(max, elem) {
    let counter = 0
    const interval = setInterval(() => {

        if (counter === max) {
            clearInterval(interval)
        }
        elem.innerHTML = counter;
        counter++
    }, 10)
}