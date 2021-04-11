$(document).ready(function () {
    'use strict';
     var winH = $(window).height(),
        navH = $('.navbar').innerHeight();
    
      $('.slider , .carousel-item').height(winH + navH);
      $('.slider , .carousel-item').css("marginTop", -navH)
      $('.slider').css("marginBottom", -navH)
    
    //.......................
    
    $(".chart").easyPieChart({
        size:170,
        barColor:"#3ec1d5",
        scaleColor:false,
        lineWidth:17,
        lineCap:"circle",
        animate:2000,
    });


// ...........................

     $(window).scroll(function(){
         $('.navbar').toggleClass('scroll-top',$(this).scrollTop() > 150);
     });
    
    $('.navbar .nav-item').click(function(){ 
        $('.navbar .nav-item').removeClass('active');
        $(this).addClass('active');});
    
     $(window).scroll(function(){
           var scrollLocation = $(this).scrollTop();
            var scrollLink =$('.navbar .nav-link');
        scrollLink.each(function(){
            var number=70;
            var section = $(this.hash).offset().top - number ;
            if (section <= scrollLocation){
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }   
            });
        });
    
        var slider =$('.slider .carousel-inner .caption .learn , .slider .carousel-inner .caption .serv');
        var num=60;
        slider.click(function(){
           $('html , body').animate({
               scrollTop:$(this.hash).offset().top - num
           },1000);
        });
    
        var s =$('.navbar .nav-link');
        var n=60;
        s.click(function(){
           $('html , body').animate({
               scrollTop:$(this.hash).offset().top - n
           },1000);
        });
    
    
    
// ........................
    
    var $p=  $('.projects .row');
    
   $p.isotope({
       itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });
    
    $('.protfolio ul li').click(function(){
        
         var s =$(this).attr('data-filter');
        
        $('.protfolio ul li').removeClass('active');
        $(this).addClass('active');
        
       
        $p.isotope({filter: s});
        
    });
    
    // button scroll top
    $(window).scroll(function(){
        if($(this).scrollTop() > 600){
           $('.topbtn').fadeIn(); 
        }else{
            $('.topbtn').fadeOut(); 
        } 
        
    });
    
    $('.topbtn').click(function(){
        $('html , body').animate({scrollTop:0},800);
    });
    
      new WOW().init();
});























