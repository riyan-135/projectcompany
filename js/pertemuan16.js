$(document).ready(function(){
    $(".animasi1").click(function(){
        $(".isi1").animate({
            left : "500px"
        });
    });
    $(".animasi2").click(function(){
        $(".isi2").animate({
            left : '200px',
            top : '100px',
            fontSize : '2cm',
            padding : '40px'
       }, 5000)
    });
    $(".animasi3").click(function(){
        $('.isi3').animate({
            left : '+=20px',
            top : '+=30px'
        }, "slow");
    });
    $('#sembunyi1').click(function(){
        $('.box').slideUp(5000);
    });
    $('#tampil').click(function(){
        $('.box').slideDown(5000);
    });
    $('#sembunyi').click(function(){
        $('.box1').hide();
    });
    $('#sembunyi').click(function(){
        $('.box2').hide(5000);
    });
    $('#tampil').click(function(){
        $('.box1').show();
    });
    $('#tampil').click(function(){
        $('.box2').show(5000);
    });
    $('#toggle').click(function(){
        $('.box1').toggle();
    });
    $('#toggle').click(function(){
        $('.box2').toggle(5000);
    });
    $('#fadeout').click(function(){
        $('.box3').hide();
    });
    $('#fadeout').click(function(){
        $('.box4').hide();
    });
    $('#fadeout').click(function(){
        $('.box5').hide();
    });
    $('#fadeout').click(function(){
        $('.box6').hide(2000);
    });
    $('#fadein').click(function(){
        $('.box3').show();
    });
    $('#fadein').click(function(){
        $('.box4').show();
    });
    $('#fadein').click(function(){
        $('.box5').show(2000);
    });
    $('#fadein').click(function(){
        $('.box6').show();
    });
    $('#fadetoggle').click(function(){
        $('.box3').toggle();
    });
    $('#fadetoggle').click(function(){
        $('.box4').toggle();
    });
    $('#fadetoggle').click(function(){
        $('.box35').toggle();
    });
    $('#fadetoggle').click(function(){
        $('.box6').toggle(2000);
    });
});
