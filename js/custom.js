// 尺寸計算
function size_format_float(num, pos) {
    var size = Math.pow(10, pos);
    return Math.round(num * size) / size;
}


// 多個 modal 的時候，overlay 分開的問題
$(document).on('show.bs.modal', '.modal', function () {
    var zIndex = 1040 + (10 * $('.modal:visible').length);
    $(this).css('z-index', zIndex);
    setTimeout(function() {
        $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
    }, 0);
});

// 多個 modal 的時候解決 body 突然可以捲動的問題
function closeModal(id, first) {
    if(!first) {
        $(id).modal('hide');
        $('body').css('overflow', 'hidden');
    } else {
        $(id).modal('hide');
        $('body').css('overflow', 'auto');
    }
}

// 回頂端
$(function () {


    $(window).scroll(function (event) {
        let scroll = $(window).scrollTop();
        // Do something
        if (scroll > 300) {
            $('#gotop').addClass('show')
        } else {
            $('#gotop').removeClass('show')
        }
    })
    $('#gotop').click(function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    })

})

//  vue-select 套件初始化
Vue.component('v-select', VueSelect.VueSelect)