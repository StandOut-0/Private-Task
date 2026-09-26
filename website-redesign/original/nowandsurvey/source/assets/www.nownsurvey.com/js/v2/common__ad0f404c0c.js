//common
$(document).ready(function(){
	
	// Version Display for Specific Users Only - Global Injection
	function showVersionPopup() {
		// Check if user-specific version popup should be shown
		// This is now handled by PHP templates with user session checking
		// JavaScript fallback is disabled to prevent conflicts
		
		// Only show CSS-based popup if PHP hasn't already handled it
		if ($('.version_popup').length === 0) {
			// No PHP version popup found, but we don't show JS version anymore
			// All version control is now handled server-side for security
		}
	}
	
	// Initialize version popup
	showVersionPopup();
	
	// 메인 _ 인풋 내비게이션 모바일/pc 구분 _ 1810 renewal
	var resizeboxes  = function() {
    if ($(".container").width() < 768)
    {
        $(".main-page .dropdown-pc").addClass("dpnone");
		$(".main-page .dropdown-mobile").removeClass("dpnone");
    }
    else
    {
        $(".main-page .dropdown-pc").removeClass("dpnone");
		$(".main-page .dropdown-mobile").addClass("dpnone");
    }
	};

	resizeboxes();

	$(window).resize(function(){
		resizeboxes();   
	});

	// 서브 _ 인풋 내비게이션 모바일/pc 구분 _ 181029
	
	var resizeboxes  = function() {
    if ($(".container").width() < 768)
    {
        $(".sub-page .dropdown-pc").addClass("dpnone");
		$(".sub-page .dropdown-mobile").removeClass("dpnone");
    }
    else
    {
        $(".sub-page .dropdown-pc").removeClass("dpnone");
		$(".sub-page .dropdown-mobile").addClass("dpnone");
    }
	};

	resizeboxes();

	$(window).resize(function(){
		resizeboxes();   
	});


/* container padding 값 조정 _ 180917 추가
	var hdH = $('.header').height();
	$('.container').css('padding-top',hdH+'px'); */
	
	// 메인_ 탑배너_닫기버튼 누를 시 안보이게 _ 180917 추가
	
	/*메인페이지 리뉴얼 by nccho 불필요해서 제거
	$('.top_bn_area .btnClose').on('click', function(){
//		$('.top_bn_area').hide(600);
		var hdH = $('.header').height();
		var tbH = $('.top_bn_area').height();
		$('.container-main').css({'padding-top': hdH - tbH + 'px'});
		$('.top_bn_area').css({'display':'none'});
	});*/

	// 메인_ 공유 아이콘 이미지 hover 시 색상 변경 _ 1809 rev
	
	$('.main-page .section2 .list .share > img,.main-page .section2 .list .share > a >img').mouseover(function(){
		$(this).attr('src','/img/v2/common/icon-share-hover.png?v=20220722');
	});
	$('.main-page .section2 .list .share > img,.main-page .section2 .list .share > a >img').mouseleave(function(){
		$(this).attr('src','/img/v2/common/icon-share.png?v=20220722');
	});

	
	// 서브_ 공유 아이콘 이미지 hover 시 색상 변경 _ 181015 add
	
	$('.sub-page.survey .list .share > img,.sub-page.survey .list .share > a > img').mouseover(function(){
		$(this).attr('src','/img/v2/common/icon-share-hover.png?v=20220722');
	});
	$('.sub-page.survey .list .share > img,.sub-page.survey .list .share > a > img').mouseleave(function(){
		$(this).attr('src','/img/v2/common/icon-share.png?v=20220722');
	});
	
	// 굿모임 _ 공유 아이콘 이미지 hover 시 색상 변경 _ 181015 add
	
	$('.sub-page.survey2 .share > img,.sub-page.survey2 .share > a > img').mouseover(function(){
		$(this).attr('src','/img/v2/common/icon-share2-hover.png');
	});
	$('.sub-page.survey2 .share > img,.sub-page.survey2 .share > a > img').mouseleave(function(){
		$(this).attr('src','/img/v2/common/icon-share2.png');
	});
	

	// 메인&서브_ 인풋창 클릭시 하단 내비게이션 발생 _ 180917 추가
	//  설문광장
	$('.svy-area .search_box #svy_stx').on('click', function(){
		if(!$('.svy-area .search_box').hasClass('dropped')){
			$('.svy-area .search_box').addClass('dropped');
		}

		//$('.svy-area .search_box').toggleClass('dropped');
	});


	$( '.container-main, .gmi-cotainer').live('click', function(e) {
		if(!$(e.target).is('.esg-right')){
			if($('.svy-area .search_box').hasClass('dropped')){
				if(!$('.svy-area .search_box').has(e.target).length){
					$('.svy-area .search_box').removeClass('dropped');
				}
			}

			if($('.gmi-area .search_box').hasClass('dropped')){
				if(!$('.gmi-area .search_box').has(e.target).length){
					$('.gmi-area .search_box').removeClass('dropped');
				}
			}
		}
	
	});

	// 굿모임
	$('.gmi-area .search_box #gmi_stx').on('click', function(){
		if(!$('.gmi-area .search_box').hasClass('dropped')){
			$('.gmi-area .search_box').addClass('dropped');
		}

	});
	
	// 서브페이지 
	$('.sub-page .search_box #svy_stx').on('click', function(){
		if(!$('.sub-page .search_box').hasClass('dropped')){
			$('.sub-page .search_box').addClass('dropped');
			
			if($('#svy_ptype').val() != 'all'){
				$('#svy_stx').val('');
				$('#btn_close').hide();
				$('#btn_search').show();
			}else if($('#search_str').val() != ''){
				$('#svy_stx').val('');
				$('#btn_close').hide();
				$('#btn_search').show();
			}
		}

	});

	// 서브페이지 
	$('.sub-page .search_box #gmi_stx').on('click', function(){
		if(!$('.sub-page .search_box').hasClass('dropped')){
			$('.sub-page .search_box').addClass('dropped');

			if($('#gmi_ptype').val() != 'all'){
				$('#gmi_stx').val('');
				$('#btn_close').hide();
				$('#btn_search').show();
			}else if($('#search_str').val() != ''){
				$('#gmi_stx').val('');
				$('#btn_close').hide();
				$('#btn_search').show();
			}
		}

	});
	

	$('.container-sub').click(function(e){
		if($('.sub-page .search_box').hasClass('dropped')){
			if(!$('.sub-page .search_box').has(e.target).length){
				$('.sub-page .search_box').removeClass('dropped');
				
				if($('.sub-page .inner').hasClass('gmi-cnt')){
					if($('#gmi_ptype').val() != 'all'){
						$('#gmi_stx').val($('#search_str').val());
						$('#btn_search').hide();
						$('#btn_close').show();
					}else if($('#search_str').val() != ''){
						$('#gmi_stx').val($('#search_str').val());
						$('#btn_search').hide();
						$('#btn_close').show();
					}
				}else{
					if($('#svy_ptype').val() != 'all'){
						$('#svy_stx').val($('#search_str').val());
						$('#btn_search').hide();
						$('#btn_close').show();
					}else if($('#search_str').val() != ''){
						$('#svy_stx').val($('#search_str').val());
						$('#btn_search').hide();
						$('#btn_close').show();
					}
				}

			}
		}
	});
	

	
	//패밀리사이트
	$('.family-site h2').on('click', function(){
		$(this).parent('.family-site').find('ul').toggle();
	});

	//gnb submenu
	$('.header .section2 .gnb .menus > ul > li').mouseenter(function(){
		$('.gnb-submenu', this).css('display','block').stop().animate({'top':'22px', 'opacity':'1'}, 200);
	}).mouseleave(function(){
		$('.gnb-submenu', this).animate({'top':'0', 'opacity':'0'}, 200, function(){
			$(this).css('display','none');
		});
	});

	//mobile gnb
	var delta = 100, 
		delta2 = 1000, 
		timer = null;
	$('.header .section2 .mobile-menu a').click(function(){
		if($('.container').hasClass('nav-slidebar-open')){
			$('.container').removeClass('nav-slidebar-open');
			$('.header .section2 .gnb').removeClass('nav-slidebar-open');

			clearTimeout(timer);
			timer = setTimeout(preload, delta2);

			function preload() {
				$('.header .section2 .gnb').css('display','none').removeClass('transition');
			}
		} else {
			$('.header .section2 .gnb').css('display','block').addClass('transition');

			clearTimeout(timer);
			timer = setTimeout(preload, delta);

			function preload() {
				$('.container').addClass('nav-slidebar-open');
				$('.header .section2 .gnb').addClass('nav-slidebar-open');
			}
		}
	});
	$('.container, .header .section2 .gnb h2 span').click(function(){
		$('.container').removeClass('nav-slidebar-open');
		$('.header .section2 .gnb').removeClass('nav-slidebar-open');
		
		clearTimeout(timer);
		timer = setTimeout(preload, delta2);
		function preload() {
			$('.header .section2 .gnb').removeClass('transition');
		}
	});
	$(document).ready(convert);
	$(window).resize(convert);
	//2023 NEW GNB 적용
	function convert(){
		var headerH = $('#header_gnb').height(),
			windowH = $(window).height();
		var notice_height = 60;//메인페이지 리뉴얼 탑공지 관련
		if(window.innerWidth > 1024) { // 800 -> 1023 rev 180927
			$('#header_gnb').css({'top':'', 'height':'', 'display': 'block'});
			
			//메인페이지 리뉴얼 탑공지 관련 시작
			if($('.container').hasClass('container-main') === true) {
				if ( $('.top_bn_area').css('display') == 'none'){
					$('.container-main').css('padding-top', '90px');
				}else{
					$('.container-main').css('padding-top', '150px');
				}
			}else{
				$('.container-main').css('padding-top', '90px');
			}
			$('#header_gnb').css({'top':'0px'});
			//메인페이지 리뉴얼 탑공지 관련 끝
		} else {		
			//메인페이지 리뉴얼 탑공지 관련 시작
			if($('.container').hasClass('container-main') === true) {
				if ( $('.top_bn_area').css('display') == 'none'){
					notice_height = 0;
				}else{
					notice_height = 60;
				}
				$('.container-main').css('padding-top', headerH+notice_height);
			}else{
				notice_height = 0;
			}
			//$('.header .section2 .inner').css({'top':notice_height+'px'});
			$('#header_gnb').css({'top':notice_height+'px'});
			//메인페이지 리뉴얼 탑공지 관련 끝


			//max800 first load(android reset)
			clearTimeout(timer);
			timer = setTimeout(preload, delta2);
			function preload() {
				//$('.header .section2 .gnb').css('display','block');
			}
			if($('.container').hasClass('nav-slidebar-open')){
				//$('.header .section2 .gnb').addClass('transition');
			} else {
				//$('.header .section2 .gnb').removeClass('transition');
			}
		};
	};
	//2023 NEW GNB 적용 끝



	//상단 GNB 풀드롭 메뉴 20200206 추가
	/*'.gnb-menu').mouseenter(function(){
		$('.snb').stop().slideDown("fast");
    });
	$('.gnb-menu').mouseleave(function(){
		$('.snb').stop().slideUp("fast");
	});
    $('.snb').mouseenter(function(){
		$(this).stop().slideDown("fast");
   });
	$('.snb').mouseleave(function(){
      $(this).css("display", "none");
   });*/

   $('.gnb').mouseenter(function(){
		if($(window).width() >1023) {
			//$('.snb').stop().slideDown("fast");
			$('.snb').slideDown("fast");
		}
	});
	$('.gnb').mouseleave(function(){
		if($(window).width() >1023) {
			$('.snb').stop().slideUp("fast");
			//$('.snb').slideUp("fast");
		}
	})
});

$(window).resize(function() { if($(window).width() <1024) { $('.snb').css("display", "none");} });

//상단 GNB 풀드롭 메뉴 20200206 추가 끝 


//상단고정
/*메인페이지 리뉴얼 불필요해서 제거
$(document).resize(fixedMenu);
$(window).scroll(fixedMenu);
$(window).resize(fixedMenu);
function fixedMenu(){
	var hsH = $('.header .section').height(), 
		st = $(this).scrollTop();
	if($(window).width() > 1023) { // 800 -> 1023 rev 180927 
		if(st > hsH) {
			$('.header .section2 .inner').addClass('fixed-menu');
		} else {
			$('.header .section2 .inner').removeClass('fixed-menu');
		}
	}
}
*/

function setSvyEtype(etype, where){
	$('#svy_etype').val(etype);

	if(where == 'mobile'){
		var idx = 0;
	}else{
		var idx = 1;
	}

	if(etype == 'ing'){
		$('.svy-area').find('.main-dropdown-menu').eq(idx).find('li').eq(1).removeClass('focus');
		$('.svy-area').find('.main-dropdown-menu').eq(idx).find('li').eq(0).addClass('focus');
		$('#svy_stx').attr('placeholder','진행중인 설문');
	}else{
		$('.svy-area').find('.main-dropdown-menu').eq(idx).find('li').eq(0).removeClass('focus');
		$('.svy-area').find('.main-dropdown-menu').eq(idx).find('li').eq(1).addClass('focus');
		$('#svy_stx').attr('placeholder','종료된 설문');
	}

	$('#svy_stx').focus();
}

function searchSvy(ptype){
	if(ptype == 'search'){ //검색어 검색
		$('#svy_ptype').val('all');
	}else{//카테고리 필터
		$('#svy_ptype').val(ptype);
		$('#svy_stx').val('');
	}

	var etype = $('#svy_etype').val();
	var ptype = $('#svy_ptype').val();
	var stx = $('#svy_stx').val();

	window.location.href = '/issue/svy/lists/etype/'+etype+'/ptype/'+ptype+'/stx/'+stx;
	
	return false;
}

//메인페이지 리뉴얼2019-08-22 by ncchot start
function searchHot(ptype){
	if(ptype == 'search'){ //검색어 검색
		$('#svy_ptype').val('all');
	}else{//카테고리 필터
		$('#svy_ptype').val(ptype);
		$('#svy_stx').val('');
	}

	var ptype = $('#svy_ptype').val();
	var stx = $('#svy_stx').val();

	window.location.href = '/issue/hot/lists/ptype/'+ptype+'/stx/'+stx;
	
	return false;
}

function searchHot2(ptype){
	if(ptype == 'search'){ //검색어 검색
		$('#gmi_ptype').val('all');
	}else{//카테고리 필터
		$('#gmi_ptype').val(ptype);
		$('#gmi_stx').val('');
	}

	var ptype = $('#gmi_ptype').val();
	var stx = $('#gmi_stx').val();

	window.location.href = '/issue/hot/lists/ptype/'+ptype+'/stx/'+stx;
	
	return false;
}
//2019-08-22 by ncchot end

function svySearchFormSubmit(){
	$("#svySearchForm").submit();
}


function setGmiEtype(etype, where){
	$('#gmi_etype').val(etype);

	if(where == 'mobile'){
		var idx = 0;
	}else{
		var idx = 1;
	}

	if(etype == 'ing'){
		$('.gmi-area').find('.main-dropdown-menu').eq(idx).find('li').eq(1).removeClass('focus');
		$('.gmi-area').find('.main-dropdown-menu').eq(idx).find('li').eq(0).addClass('focus');
		$('#gmi_stx').attr('placeholder','모집중인 모임');
	}else{
		$('.gmi-area').find('.main-dropdown-menu').eq(idx).find('li').eq(0).removeClass('focus');
		$('.gmi-area').find('.main-dropdown-menu').eq(idx).find('li').eq(1).addClass('focus');
		$('#gmi_stx').attr('placeholder','마감된 모임');
	}

	$('#gmi_stx').focus();
}


function searchGmi(ptype){
	if(ptype == 'search'){ //검색어 검색
		$('#gmi_ptype').val('all');
	}else{//카테고리 필터
		$('#gmi_ptype').val(ptype);
		$('#gmi_stx').val('');
	}

	var etype = $('#gmi_etype').val();
	var ptype = $('#gmi_ptype').val();
	var stx = $('#gmi_stx').val();

	window.location.href = 'https://www.goodmoim.com/seminar/svy/lists/etype/'+etype+'/ptype/'+ptype+'/stx/'+stx;
	
	return false;
}

function gmiSearchFormSubmit(){
	$("#gmiSearchForm").submit();
}

function searchGmi2(ptype){
	if(ptype == 'search'){ //검색어 검색
		$('#gmi_ptype').val('all');
	}else{//카테고리 필터
		$('#gmi_ptype').val(ptype);
		$('#gmi_stx').val('');
	}

	var etype = $('#gmi_etype').val();
	var ptype = $('#gmi_ptype').val();
	var stx = $('#gmi_stx').val();

	//window.location.href = '/seminar/svy/lists/etype/'+etype+'/ptype/'+ptype+'/stx/'+stx;
	//window.open('https://www.goodmoim.com/seminar/svy/lists/etype/'+etype+'/ptype/'+ptype+'/stx/'+stx, '_blank');

	if($('.gmi-area .search_box').hasClass('dropped')){
		$('.gmi-area .search_box').removeClass('dropped');
	}

	$("#gmiSearchForm").prop("target", '_blank');
	$("#gmiSearchForm").prop('action', 'https://www.goodmoim.com/seminar/svy/lists/etype/'+etype+'/ptype/'+ptype+'/stx/'+stx);
	
	$("#gmiSearchForm").submit();
}

function gmiSearchFormSubmit2(){
	searchGmi2('search');
}

var open_free_modal = function(_obj) {
	if(_obj == 'estimate') {
		$('#free_request').hide();
		$('#free_estimate').show();
	} else {
		$('#free_request').show();
		$('#free_estimate').hide();
	}
}

var close_free_modal = function() {
	$('.modal').hide();
}

var set_free_request = function() {
	if($.trim($('#rname').attr('value')) == '') {
		modalAlert('이름을 입력하세요.');
		return false;
	}
	if($.trim($('#rcompany').attr('value')) == '') {
		modalAlert('회사명/학교명을 입력하세요.');
		return false;
	}
	if($.trim($('#rphone').attr('value')) == '') {
		modalAlert('전화번호/핸드폰번호를 입력하세요.');
		return false;
	}
	var regPhone = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
	var trans_num = $('#rphone').attr('value').replace(/-/gi,'');
	if(!regPhone.test(trans_num)) {
		modalAlert('전화번호/핸드폰번호를 정확히 입력하세요.');
		return false;
	}
	if($('#remail').attr('value') == '') {
		modalAlert('이메일주소를 입력하세요.');
		return false;
	}
	var regEmail = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	if(!regEmail.test($('#remail').attr('value'))) {
		modalAlert('이메일주소를 정확히 입력하세요.');
		return false;
	}
	if($.trim($('#rbrief').attr('value')) == '') {
		modalAlert('문의사항을 입력하세요.');
		return false;
	}
	/*
	if($('input:checkbox[id="rprivacy01"]').is(":checked") != true) {
		modalAlert('개인 정보 취급 방침에 동의 해주세요.');
		return false;
	}

	if($('input:checkbox[id="rprivacy02"]').is(":checked") != true) {
		modalAlert('서비스 이용약관에 동의 해주세요.');
		return false;
	}
	*/
	/*
	if($('input:radio[id="eprivacy01"]').is(":checked") != true) {
		modalAlert('개인정보수집 및 이용에 동의해주세요.');
		return false;
	}
	if($('input:radio[id="eprivacy01"]:checked').val() == 'n') {
		modalAlert('개인정보수집 및 이용에 동의해주세요.');
		return false;
	}
	*/
	if($('input:radio[name="eprivacy01"]').is(":checked") != true) {
		modalAlert('개인정보수집 및 이용에 동의해주세요.');
		return false;
	}
	if($('input:radio[name="eprivacy01"]:checked').val() == 'n') {
		modalAlert('개인정보수집 및 이용에 동의해주세요.');
		return false;
	}

	var strFormData = $('#free_request_form').serialize();
	
	grecaptcha.ready(function() {
		grecaptcha.execute('6Lf77yEgAAAAAAUAublStTxTpwXKeQLOiN-8F0Ds', {action: 'submit'}).then(function(token){
			// add token to serialzed form
			strFormData += '&token='+token;
			$.ajax({
				type: 'post'
				, contentType: "application/x-www-form-urlencoded; charset=UTF-8"
				, dataType: "html"
				, url : '/main/set_free_request'
				, method : "post"
				, data : strFormData
				, success: function(data) {
					if(data != 'error') {
						$('#free_request').hide();
						$("#free_request_form")[0].reset();
						modalAlert('정상적으로 등록되었습니다.');
					}
				}
				,error: function(xhr, status, error) {alert(error);}
			});
		});
	});
}

var set_free_estimate = function() {
	// 응답자 수 검증
	if($.trim($('#respondent_count').val()) == '') {
		modalAlert('응답자 수를 입력하세요.');
		return false;
	}
	
	// 응답자 수 숫자 검증
	var respondentCount = parseInt($('#respondent_count').val());
	if(isNaN(respondentCount) || respondentCount <= 0) {
		modalAlert('응답자 수는 1명 이상의 숫자로 입력해주세요.');
		return false;
	}
	
	// 응답자 수 최소 100명 검증
	if(respondentCount < 100) {
		modalAlert('응답자수를 100명 이상으로 입력해주세요.');
		return false;
	}
	
	// 성별 조건 검증
	var genderChecked = false;
	$('.gender-grid input[type="checkbox"]:checked').each(function() {
		if($(this).parent().text().trim() !== '직접 입력') {
			genderChecked = true;
		}
	});
	if(!genderChecked) {
		modalAlert('성별 조건을 선택해주세요.');
		return false;
	}
	
	// 연령 조건 검증
	var ageChecked = false;
	var hasDirectInput = false;
	
	// .age-grid 내 체크박스 확인
	$('.age-grid input[type="checkbox"]:checked').each(function() {
		var labelText = $(this).closest('label').text().trim();
		if(labelText !== '직접 입력') {
			ageChecked = true;
		}
	});
	
	// 직접 입력 체크박스 확인 (age 섹션)
	var ageDirectInputCheckbox = $('#age-direct-input-checkbox');
	if(ageDirectInputCheckbox && ageDirectInputCheckbox.length > 0 && ageDirectInputCheckbox.is(':checked')) {
		hasDirectInput = true;
	}
	
	if(!ageChecked && !hasDirectInput) {
		modalAlert('연령 조건을 선택해주세요.');
		return false;
	}
	
	// 지역 조건 검증
	var regionChecked = false;
	var hasDirectInput = false;
	
	// .grid-3 내 체크박스 확인
	$('.grid-3 input[type="checkbox"]:checked').each(function() {
		var labelText = $(this).closest('label').text().trim();
		if(labelText !== '직접 입력') {
			regionChecked = true;
		}
	});
	
	// 직접 입력 체크박스 확인 (region 섹션)
	var regionDirectInputCheckbox = $('#region-direct-input-checkbox');
	if(regionDirectInputCheckbox && regionDirectInputCheckbox.length > 0 && regionDirectInputCheckbox.is(':checked')) {
		hasDirectInput = true;
	}
	
	if(!regionChecked && !hasDirectInput) {
		modalAlert('지역 조건을 선택해주세요.');
		return false;
	}
	
	// 직업 조건 검증
	var jobChecked = false;
	var hasDirectInput = false;
	
	// .job-grid 내 체크박스 확인
	$('.job-grid input[type="checkbox"]:checked').each(function() {
		var labelText = $(this).closest('label').text().trim();
		if(labelText !== '직접 입력') {
			jobChecked = true;
		}
	});
	
	// 직접 입력 체크박스 확인 (job 섹션)
	var jobDirectInputCheckbox = $('#job-direct-input-checkbox');
	if(jobDirectInputCheckbox && jobDirectInputCheckbox.length > 0 && jobDirectInputCheckbox.is(':checked')) {
		hasDirectInput = true;
	}
	
	if(!jobChecked && !hasDirectInput) {
		modalAlert('직업 조건을 선택해주세요.');
		return false;
	}
	
	// 설문 목적 검증
	if($.trim($('#survey_purpose').val()) == '') {
		modalAlert('설문 목적을 입력하세요.');
		return false;
	}
	
	// 총 문항 수 검증
	if($.trim($('#total_questions').val()) == '') {
		modalAlert('총 문항 수를 입력하세요.');
		return false;
	}
	
	var totalQuestions = parseInt($('#total_questions').val());
	if(isNaN(totalQuestions) || totalQuestions <= 0) {
		modalAlert('총 문항 수는 1개 이상의 숫자로 입력해주세요.');
		return false;
	}
	
	// 주관식 문항 포함 여부 검증
	if($('input:radio[name="includeScreenQ"]').is(':checked') == false) {
		modalAlert('주관식 문항 포함 여부를 선택해주세요.');
		return false;
	}
	
	// 주관식 문항이 포함된 경우 개수 검증
	if($('input:radio[name="includeScreenQ"]:checked').val() == 'yes') {
		if($.trim($('#subjective_count').val()) == '') {
			modalAlert('주관식 문항 개수를 입력하세요.');
			return false;
		}
		var subjectiveCount = parseInt($('#subjective_count').val());
		if(isNaN(subjectiveCount) || subjectiveCount < 0) {
			modalAlert('주관식 문항 개수는 0개 이상의 숫자로 입력해주세요.');
			return false;
		}
	}
	
	// 신청자 정보 검증
	if($.trim($('#applicant_name').val()) == '') {
		modalAlert('신청자 이름을 입력하세요.');
		return false;
	}
	if($.trim($('#applicant_company').val()) == '') {
		modalAlert('회사명/학교명을 입력하세요.');
		return false;
	}
	if($.trim($('#applicant_phone').val()) == '') {
		modalAlert('전화번호를 입력하세요.');
		return false;
	}
	
	// 전화번호 형식 검증
	var regPhone = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
	var trans_num = $('#applicant_phone').val().replace(/-/gi,'');
	if(!regPhone.test(trans_num)) {
		modalAlert('전화번호를 정확히 입력하세요.');
		return false;
	}
	
	if($('#applicant_email').val() == '') {
		modalAlert('이메일주소를 입력하세요.');
		return false;
	}
	
	// 이메일 형식 검증
	var regEmail = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	if(!regEmail.test($('#applicant_email').val())) {
		modalAlert('이메일을 정확히 입력하세요.');
		return false;
	}
	
	// 개인정보 수집 이용 동의 검증
	if($('input:radio[name="eprivacy01"]').is(":checked") != true) {
		modalAlert('개인정보수집 및 이용에 동의해주세요.');
		return false;
	}
	if($('input:radio[name="eprivacy01"]:checked').val() == 'n') {
		modalAlert('개인정보수집 및 이용에 동의해주세요.');
		return false;
	}
	
	// 인원할당 데이터를 폼에 추가
	addAllocationDataToForm();

	grecaptcha.ready(function() {
		grecaptcha.execute('6Lf77yEgAAAAAAUAublStTxTpwXKeQLOiN-8F0Ds', {action: 'submit'}).then(function(token){
			// 파일이 있는 경우 FormData 사용, 없는 경우 일반 폼 데이터 사용
			var formData;
			var contentType;
			
			if($('#eupload').val() != '') {
				// 파일이 있는 경우 FormData 사용
				formData = new FormData($('#free_estimate_form')[0]);
				formData.append('token', token);
				contentType = false; // FormData 사용 시 false로 설정
				processData = false; // FormData 사용 시 false로 설정
				
				console.log('파일 업로드 - FormData 사용');
			} else {
				// 파일이 없는 경우 일반 폼 데이터 사용
				var strFormData = $('#free_estimate_form').serialize();
				strFormData += '&token='+token;
				formData = strFormData;
				contentType = "application/x-www-form-urlencoded; charset=UTF-8";
				processData = true;
				
				console.log('전송할 폼 데이터:', formData);
			}
			
			$.ajax({
				type: 'post'
				, contentType: contentType
				, processData: processData
				, dataType: "html"
				, url : '/main/set_free_request'
				, method : "post"
				, data : formData
				, success: function(data) {
					console.log('서버 응답:', data);
					console.log('응답 타입:', typeof data);
					console.log('응답 길이:', data.length);
					
					if(data && data.trim() !== 'error' && data.trim() !== '') {
						$('#free_estimate').hide();
						$("#free_estimate_form")[0].reset();
						modalAlert('견적요청이 정상적으로 등록되었습니다.');
					} else {
						console.error('서버에서 오류 응답:', data);
						modalAlert('오류가 발생하였습니다. 관리자에 문의해주세요.');
					}
				}
				,error: function(xhr, status, error) {
					console.error('AJAX 오류:', error);
					console.error('상태:', status);
					console.error('응답 텍스트:', xhr.responseText);
					modalAlert('오류가 발생하였습니다. 관리자에 문의해주세요.');
				}
			});
		});
	});
}

var chg_panel = function(_val) {
	if(_val == 'y') {
		$('.request_hide').show();
	} else {
		$('.request_hide').hide();
	}
}