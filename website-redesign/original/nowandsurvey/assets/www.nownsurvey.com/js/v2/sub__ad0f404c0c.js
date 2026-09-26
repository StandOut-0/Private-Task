//subpage
$(document).ready(function(){
	//셀렉트박스
	var selectTarget = $('.table-selectbox select');
	selectTarget.change(function(){
		var select_name = $(this).children('option:selected').text();
		$(this).siblings('label').text(select_name);
	});

	//파일박스
	var filetarget = $('.table-file input[type="file"]');
	filetarget.change(function(){
		var filePath = $(this).val();
		$(this).parent().find('.fakefile input').val(filePath);
	});

	//팝업
	$('.content-result .title .area-action li > a').click(function(){
		$('.popup').not($(this).siblings('.popup')).hide();
		$(this).siblings('.popup').toggle();
		$('.bg-overlay').not($(this).parent('li').find('.bg-overlay')).hide();
		$(this).parent('li').find('.bg-overlay').fadeToggle();
	});
	$('.content-result .title .area-action li .bg-overlay').click(function(){
		$(this).parent().parent().find('.popup').toggle();
		$(this).fadeToggle();
	});
	$('.content-result .title .area-action li.share .popup-sns h1 span').click(function(){
		$(this).parent().parent().parent().find('.popup').toggle();
		$(this).parent().parent().parent().find('.bg-overlay').fadeToggle();
	});

	//설문접기
	$('.content-result .stats-view .tit-division .buttons').click(function(){
		$(this).parent().parent().find('.analysis-div').slideToggle();
		$(this).parent().parent().find('.analysis-div').toggleClass('fixo');
		
		if ($(this).parent().parent().find('.analysis-div').hasClass('fixo')) {
			$('img', this).attr('src', 'assets/www.nownsurvey.com/img/common/ico-sort.png');
		} else {
			$('img', this).attr('src', 'assets/www.nownsurvey.com/img/common/ico-sort2.png');
		}
	});

	//type5 슬라이드
	$('.analysis-div-inner.type5 .area-subtitle.open').next('.box-iframe').slideToggle();
	$('.area-subtitle').click(function(){
		if(!$(this).hasClass('open')){
			$('.area-subtitle').removeClass('open');
			$(this).addClass('open');
			$('.analysis-div-inner.type5 .box-iframe').slideUp();
			$(this).next('.box-iframe').slideDown();
		}
	})

	//댓글메뉴
	$('.my-menu').click(function(){
		$('ul', this).toggle();
	});

	//팝업로그인닫기
	$('.pop-login .bg-overlay').click(function(){
		$('.pop-login').toggle();
	});


	//패널가입 패널정보 서브메뉴 20200206 추가
	$(document).ready(pannelJoinPop);
	$(window).resize(pannelJoinPop);
	function pannelJoinPop(){
	var top = $('.tab-list li').height();
		$('.pannel-join-pop').css('top', top);
	}
	$('.pannel-join-btn, .pannel-join-pop').live('mouseenter', function(){
		$('.pannel-join-pop').css('display','block');
	}).mouseleave(function(){
		$('.pannel-join-pop').css('display','none');
		
	});



});

//상단고정 
$(document).resize(fixedTab);
$(window).scroll(fixedTab);
$(window).resize(fixedTab);
function fixedTab(){
	var hsH =$('.header .section').height(), 
		topimageH = $('.top-image, .top-image-service, .top-image-mypage').innerHeight(), //패널활동 상단 이미지 추가 20200810 INR
		// hs2H = $('.header .section2').height() + $('.header .section').height(), 
		hs2H = $('#header_gnb').height(),
		st = $(this).scrollTop();
	if($(window).width() > 1023) { // width 값 수정
		if(st > hsH+topimageH) {
			$('.tab-list .box').addClass('fixed-menu').css('top',hs2H);
		} else {
			$('.tab-list .box').removeClass('fixed-menu').css('top','');
		}
	} else {
		if(st > topimageH) {
			$('.tab-list .box').addClass('fixed-menu').css('top',hs2H);
		} else {
			$('.tab-list .box').removeClass('fixed-menu').css('top','');
		}
	}
}