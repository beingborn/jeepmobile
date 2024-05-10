$(window).scroll(function () {
  var h = $(window).scrollTop();
  // console.log(h);

  // 600~1000까지 첫째카드의 opacity를 천천히 변경
  if (h > 600 && h < 1000) {
    var y = (-1 / 400) * h + 5 / 2;
    var z = (-1 / 2000) * h + 13 / 10;
    // $('.container-year').eq(0).css('opacity', y);
    //  $('.container-year').eq(0).css('transform', `scale(${z})`);
  }
  if (h > 1000 && h < 1760) {
    var x = (-1 / 760) * h + 23158 / 10000;
    var s = (-1 / 7600) * h + 43 / 38;
    console.log(x, s);
    // $('.container-year').eq(1).css('opacity', x);
    //  $('.container-year').eq(1).css('transform', `scale(${s})`);
  }
});

console.log($(".container-year").eq(1));

// $('.container-year').eq(1).css('opacity', '0.5');

// 1번 반복문 함수 제작 제이쿼리로 각 버튼이 클릭되었을 때 다른 버튼들을 모두 비활성화 하게
// 제작한다

// 1번 우선 담아야겠지? 그리고 함수 파라미터로 전달해야할듯

var mobilePopularList = $(".popular-scroll");
var mobilePopularBtn = $(".pobtn");

mobilePopularList.eq(1).css("display", "none");
mobilePopularList.eq(2).css("display", "none");
mobilePopularList.eq(3).css("display", "none");


mobilePopularBtn.click(function () {
  var btnIndex = mobilePopularBtn.index(this);

  mobilePopularList.hide(); // 모두 숨기기
  mobilePopularList.eq(btnIndex).show(); // 해당 인덱스 리스트 보이기

  $(this).css({
    // 버튼 활성화
    color: "#FFBB00",
    fontWeight: "700",
  });
  mobilePopularBtn.not(this).css({
    color: "#FFFFFF",
    fontWeight: "400",
  });
});

// 1번 선택한 해당 인덱스의 list를 제외하기

var catalogBtn = $(".cabtn");
catalogBtn.eq(0).css("color", "#FFBB00");

var catalogWrap = $(".catalogSwiper");

catalogWrap.eq(0).css("display", "block");
catalogWrap.eq(1).css("display", "none");

catalogBtn.click(function () {
  var caBtnIndex = catalogBtn.index(this);

  catalogWrap.hide(); // 모두 숨기기
  catalogWrap.eq(caBtnIndex).show(); // 해당 인덱스 리스트 보이기

  $(this).css({
    // 버튼 활성화
    color: "#FFBB00",
    fontWeight: "700",
  });
  catalogBtn.not(this).css({
    color: "#FFFFFF",
    fontWeight: "400",
  });
});

// 1번 선택한 해당 인덱스의 list를 제외하기

// toggle 버튼 두개로 gnb display 제어하기, if 참 거짓 조건을 뭐로 해야 
// 할지 모르겠음

var mobileToggle = $('.toggle-btn');
var mobileGnb = $('.list-open');
var isOpen = true;

mobileToggle.on('click',function(){

  if(isOpen){
  mobileGnb.hide();
  } else {
  mobileGnb.show();
  }

  isOpen = !isOpen;

});


var moGnbMenu = $('.mo-gnb');

var moGnbDetail = $('.mo-hide-menu');
var moGnbSub = $('.mo-hide-wrap');
moGnbSub.css("transition", "all 0.3s");

console.log(moGnbSub);


moGnbSub.hide();

// moGnbSub.eq(0).show();
// moGnbSub.eq(1).show();
// moGnbSub.eq(2).show();
// moGnbSub.eq(3).show();
// moGnbSub.eq(4).show();


var moGnbOpen = true;


// moGnbMenu.on('click',function(){
//   var moGnbIndex = moGnbMenu.index(this);
//   console.log(moGnbIndex);

//   moGnbDetail.css('padding', '0px 0px');
//   moGnbDetail.eq(moGnbIndex).css("padding", "20px 0"); 
// });



moGnbMenu.on('click',function(){
  var moGnbIndex = moGnbMenu.index(this);
  

  if (moGnbDetail.eq(moGnbIndex).css('padding') === '20px 0px') {
      moGnbDetail.eq(moGnbIndex).css('padding', '0px 0px');
      moGnbSub.eq(moGnbIndex).hide()
  } else {
    moGnbDetail.eq(moGnbIndex).css('padding', '20px 0px');
    moGnbSub.eq(moGnbIndex).show(); 
  }

  moGnbDetail.not(moGnbDetail.eq(moGnbIndex)).css('padding', '0px 0px');
  moGnbSub.not(moGnbSub.eq(moGnbIndex)).hide();  // moGnbSub.not(moGnbDetail.eq(moGnbIndex)).hide();
});










// mobilePopularBtn.click(function () {
//   var btnIndex = mobilePopularBtn.index(this);

//   mobilePopularList.hide(); 
//   mobilePopularList.eq(btnIndex).show();

//   $(this).css({
//     color: "#FFBB00",
//     fontWeight: "700",
//   });
//   mobilePopularBtn.not(this).css({
//     color: "#FFFFFF",
//     fontWeight: "400",
//   });
// });

  // if(moGnbOpen){
  // moGnbDetail.css({
  //   "padding" : "20px 0px"
  // });
  // moGnbSub.show();
  // } else {
  // moGnbDetail.css({
  //   "padding" : " 0px 0px"
  // });
  // moGnbSub.hide();

  // }

  // moGnbOpen = !moGnbOpen