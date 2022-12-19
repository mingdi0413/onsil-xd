// 메인이미지
$(document).ready(function () {
    var current = 0;
    var setIntervalId;

    $('.main_btn li').eq(0).addClass('on');
    $('.main_btn li').click(function (e) {
    e.preventDefault();
    var i = $(this).index();
    console.log(i)
    move2(i);
    });

    $('.arrow-prev').click(function (e) {
        e.preventDefault();
        var num = current - 1; 
        if (num < 0) {
            num = 3;
        }
        move(num);
    });
    
    
    $('.arrow-next').click(function (e) { 
        e.preventDefault();
        var num = current + 1; 
        if (num > 3) {
        num = 0;
        }
        move2(num);
    })
    
    
    $('.main_img').on({
        mouseover: function () {
            clearInterval(setIntervalId);
        },
        mouseout: function () {
            timer();
        }
    })
    
    timer();
    function timer() {    
        setIntervalId = setInterval(function () {
        var n = current + 1; 
        if (n == 4) {
            n = 0;
        } 
        move(n);
    }, 3500)
    
    }

    $('.main_btn2 span').on ({
        mouseover: function ( ) {
            clearInterval(setIntervalId);
        },
        mouseout : function () {
            timer();
        }
    })
   
    function move(i) {
        if (i == current) return;
        var currentEl = $('.list li').eq(current);
        var nextEl = $('.list li').eq(i);

        currentEl.css({ left: '0%' }).animate({ left: '100%' });
        nextEl.css({ left: '-100%' }).animate({ left: '0%' });
        current = i;

        $('.main_btn li').removeClass('on');
        $('.main_btn li').eq(i).addClass('on');
    }
    
    function move2(i) {
        if (i == current) return;
        var currentEl = $('.list li').eq(current);
        var nextEl = $('.list li').eq(i);

        currentEl.css({ left: '0%' }).animate({ left: '-100%' });
        nextEl.css({ left: '100%' }).animate({ left: '0%' });
        current = i;

        $('.main_btn li').removeClass('on');
        $('.main_btn li').eq(i).addClass('on');
    }
    
    });
    

// onsil archive
$(function(){
    $('.more_view').hide();
    $('.btn1').click(function(e){
        e.preventDefault();
        $('.more_view').slice(0, 1).show();
    })
})