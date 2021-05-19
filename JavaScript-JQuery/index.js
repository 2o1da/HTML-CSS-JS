/*
for (let i = 0; i < 3; ++i) {
    $('.tab-button').eq(i).click(function () {
        $('.active').removeClass('active');
        $('.tab-button').eq(i).addClass('active');

        $(".show").removeClass("show");
        $(".tab-content").eq(i).addClass("show");
    })
}
*/

$('.list').click(function (e) {
    openTab(e.target.dataset.idx);
})

function openTab(i) {
    $('.active').removeClass('active');
    $('.tab-button').eq(i).addClass('active');

    $(".show").removeClass("show");
    $(".tab-content").eq(i).addClass("show");
}

let data = [{
    brand: 'BMW'
}, {
    model: 520
}]


var 출석부 = ["흥민", "영희", "철수", "재석"];

function 이름찾기(e) {
    출석부.forEach(function (i) {
        if (e === i) {
            console.log("있셈");
            return `있음`;
        }
    })
}

window.addEventListener("scroll", function () {
    let height = document.documentElement.scrollTop;
    let y = (-1 / 700) * height + 29 / 14;
    document.querySelectorAll('.card-box')[0].style.opacity = y;
})