/* gnb */

$(function(){
	$("ul.sub").hide();
	$("ul.tmenu li").hover(function(){
		$(this).addClass("selected");
		$("ul:not(:animated)",this).slideDown("fast");
	},
	function(){
		$(this).removeClass("selected");
		$("ul",this).slideUp("fast");
	});
});


/* top : function-link: info */

$(function(){
	$(".user-info").hide();
	$(".sitemap").hide();
	$(".login-box").hide();

	$(".user-name").click(function(){
		$(".sitemap").hide();
		$(".login-box").hide();
		$(".user-info").toggle();
	});

	$(".toggle-sitemap").click(function(){
		$(".user-info").hide();
		$(".login-box").hide();
		$(".sitemap").toggle();
	});

	$(".login").click(function(){
		$(".user-info").hide();
		$(".sitemap").hide();
		$(".login-box").toggle();
	});
});


/* 하단 버튼스타일 네비게이션 */


$(function(){
	$("nav.pop-menu").hide();
	$("ul.button-menu li").hover(function(){
		$(">button",this).addClass("selected");
		$(".pop-menu:not(:animated)",this).slideDown("fast");
	},
	function(){
		$(">button",this).removeClass("selected");
		$(".pop-menu",this).slideUp("fast");
	});
});


/* 이미지 레이어 */


$(function(){
		
	$(".show-hide").hide();
	$(".button-show-hide").click(function(){		
		//$(".show-hide").hide();
		$("+.show-hide",this).toggle();
	});

	$(".layer-close").click(function(){
		$(this).closest(".show-hide").css("display","none");
	});

});

$(function(){
		
	$(".show-hide-right").hide();
	$(".button-show-hide-right").click(function(){		
		$("+.show-hide-right",this).toggle();
	});
	
	$(".layer-close").click(function(){
		$(this).closest(".show-hide-right").css("display","none");
	});

	$(".sec-close-btn").click(function(){
		$(this).closest(".show-hide-right").css("display","none");
	});

	$(".close").click(function(){
		$(this).closest(".show-hide-right").css("display","none");
	});

	
});

/* 이미지 레이어 : td 안에 위치해야할 경우*/

$(function(){
	$("td").has(".show-hide-wrap").css("overflow","visible");
	$(".ing-survey-list li:last-child").css("borderBottom","none");/* 메인페이지 설문리스트 마지막 라인 없앰 */
	$(".info1 span a:last-child").css("borderRight","none");
});



//Left Menu 서브메뉴 수정삭제 show/hide

$(function(){
	$(".button-set").hide();
	$(".left-menu-section .lmenu li").hover(function(){
			//$(".button-set").show();
			$(this).find(".button-set").show();
		},function(){
			$(this).find(".button-set").hide();
		});	
});


//설문새로만들기 버튼 show-hide

/*$(function(){
	$(".input-division .buttons").hide();
	$(".input-division article").hover(function(){
			$(this).find(".buttons").show();			
		},function(){
			$(this).find(".buttons").hide();
		});
	
});*/

//이미지 삽입 버튼 show-hide

$(function(){
	$(".tit-division .input-division").hide();
	$(".input-division-in").hide();
	$(".tit-division .button-input-division").click(function(){
		$(this).parents().find(">.input-division").toggle();
	 });

	$(".button-input-division-in").click(function(){
		//$(".input-division-in").toggle();
		$(this).parents().find(">.input-division-in").toggle();
   	});
	
});

/* odd gray box */
$(function(){
	$(".select-how>li:odd").addClass("bg-gray");     	
	$("table.survey-exam tbody  tr:nth-child(even)").addClass("bg-gray");	
});

/* Tab */

$(function(){
	$("ul.tab-con>li:not("+$("ul.tab>li a.on").attr("href")+")").hide();
	$("ul.tab>li a").click(function(){
		$("ul.tab>li a").removeClass("on");
		$(this).addClass("on");
		$("ul.tab-con>li").hide();
		$($(this).attr("href")).show();
		return false;
	});
});


$(function(){
	$("ul.tab-con2>li:not("+$("ul.tab2>li a.on").attr("href")+")").hide();
	$("ul.tab2>li a").click(function(){
		$("ul.tab2>li a").removeClass("on");
		$(this).addClass("on");
		$("ul.tab-con2>li").hide();
		$($(this).attr("href")).show();
		return false;
	});
});

/* My 설문함 : Sliding */

$(function(){
	$(".slide-show-hide dd:not(:first)").css("display","none");
	$(".slide-show-hide dt:first").addClass("show");
	$(".slide-show-hide dt").click(function(){
		if($("+dd",this).css("display")=="none"){
			//$("dd").slideUp("fast");
			$(this).parents('.analysis-div').find('.slide-show-hide dd').slideUp("fast");
			$("+dd",this).slideDown("fast");
			$(".slide-show-hide dt").removeClass("show");
			$(this).addClass("show");
		}
		else {
		$(".slide-show-hide dt").
		$(this).removeClass("show");
		}
	});
});

/* 설정 */

$(function(){
	$(".a-setting dt:first").css("marginTop","0");	

	$(".thumb-list li:nth-child(6n)").css("marginRight","0");
	
	$(".thumb-list li a").hover(function(){
		$(this).append("<div class='mask'>"+$(this).children("img").attr("alt")+"</div>");
		
	},function(){
		$(this).find("div.mask").remove();
	});
});

/* 디자인설정 슬라이딩 이미지 리스트 */



$(function(){
	$(".slide-wrap li a").click(function(){
		$(".slide-wrap li").removeClass("selected");
		$(this).parent().addClass("selected");
		$(".choose-img.slide .preview-div img").attr("src",$(this).attr("href"));
		return false;
	})
	$(".next-page").click(function(){
		$(this).parents(".thumb-list-slide").animate({
			marginLeft : parseInt($(this).parents(".thumb-list-slide").css("margin-left"))-609+"px"
		},"fast");
	});
	$(".pre-page").click(function(){
		$(this).parents(".thumb-list-slide").animate({
			marginLeft : parseInt($(this).parents(".thumb-list-slide").css("margin-left"))+609+"px"
		},"fast");
	});
});


/* Main Notice, FAQ */
$(function(){
	$("ul.panel>li:not("+$("ul.tab li a.selected").attr("href")+")").hide()
	$("ul.tab>li> a").click(function(){
		$("ul.tab li a").removeClass("selected");
		$(this).addClass("selected");
		$("ul.panel>li").hide();
		$($(this).attr("href")).show();
		return false;
	});
});
