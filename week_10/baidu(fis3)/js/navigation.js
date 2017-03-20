/**
 * Created by tutu on 16/10/8.
 */


// $(document).ready(function () {
//         $('.nav_item').hover(function () {
//             // $(".rebate").show();
//             $(this).children(".rebate").toggle();
//             // $(".rebate").css('display','block');
//             $(this).css("border",'solid 1px #BCBCBC');
//         })
//     }
// );


$(document).ready(function () {
        $('.nav_item').hover(function () {
            // $(".rebate").show();
            $(this).children(".rebate").show();
            // $(".rebate").css('display','block');
            $(this).css('border','solid 1px #BCBCBC');
        },function () {
            $(this).children(".rebate").hide();
            $(this).css('border','0');
        })
    }
);
