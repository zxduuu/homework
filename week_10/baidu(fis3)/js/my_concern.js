/**
 * Created by tutu on 16/10/12.
 */


$(document).ready(function () {
    $('.my_nav').hover(function () {
        $(this).find('.setbar').show();
    },function () {
        $(this).find('.setbar').hide();
    })
});

// $(document).ready(function () {
//     $('.my_nav_block').hover(function () {
//         $(this).find('.setbar').toggle();
//     })
// });