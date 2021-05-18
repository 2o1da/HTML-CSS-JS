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