$(document).ready(() => {
    // $('.loading__letter:nth-of-type(1)').on('animationend webkitAnimationEnd', () => {
    //     $('.loading').addClass('off');
    //     $('body').removeClass('noScroll');
    // })

    $('.cays__type').on('click', function(e){
        e.preventDefault();
        $('.cays__type.active').removeClass('active');

        $(this).addClass('active');
    })

    $('.cays__cay').each(function(){
        $(this).hover(function(e){
            let back = $($($($(this).children()[0])[0]).children()[0]);

            back.css({
                left: e.pageX - 221 + 'px',
                top: e.pageY - ($(this).height() + 200 ) + 'px',
            })
        }, function(e){
            let back = $($($($(this).children()[0])[0]).children()[0]);

            back.css({
                left: e.pageX - ($(this).width() - 150) + 'px',
                top: e.pageY - ($(this).height() + 270 ) + 'px',
            })
        })
    })

    $('.cay__subtitle').each(function(){
        if($(this).html() == 'Дизайн'){
            $(this).css({color: '#DA2727'})
        }
    })
})