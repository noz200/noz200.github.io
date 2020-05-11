$(function(){
  $('.colos').fadeIn(1000);
  $('#1').find('h2').click(function(){
    $('.main').css('background-color','pink');
  });
  $('#2').find('h2').click(function(){
    $('.main').css('background-color','purple');
  });
  $('#3').find('h2').click(function(){
    $('#3').find('p').html('<p>殺人鬼だ　正体を見てしまった<br>能力 人間じゃあない能力</p>');
    $('.main').css('background-color','rgba(0,255,255,0.6)')
  });
});
