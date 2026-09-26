if (typeof(COMMON_JS) == 'undefined') {
	if (typeof rt_path == 'undefined')
        alert('rt_path 변수가 선언되지 않았습니다.');

    var COMMON_JS = true;

    function win_open(url, name, option) {
        var popup = window.open(rt_path + '/' + url, name, option);
        popup.focus();
    }

    // 쪽지 창
    function win_memo(url) {
		if (!url)
			url = "member/memo/lists";
        win_open(url, "winMemo", "left=50,top=50,width=616,height=460,scrollbars=1");
    }
    
	// 자기소개 창
    function win_profile(mb_id) {
        win_open("member/profile/qry/"+mb_id, 'winProfile', 'left=50,top=50,width=400,height=500,scrollbars=1');
    }

    // 우편번호 창
    function win_zip(frm_name, frm_zip1, frm_zip2, frm_addr1, frm_addr2) {
        url = "useful/zip/qry/"+frm_name+"/"+frm_zip1+"/"+frm_zip2+"/"+frm_addr1+"/"+frm_addr2;
        win_open(url, "winZip", "left=50,top=50,width=616,height=460,scrollbars=1");
    }

	// POST 전송, 결과값 리턴
    function post_s(href, parm, del) {
		//alert(href);
        if (!del || confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) { 
			$.ajax({
				type: 'post'
				, contentType: "application/x-www-form-urlencoded; charset=UTF-8"
				, dataType: "html"
				, url : rt_path + '/' + href
				, method : "post"
				, data : {idx:parm}
				, success: function(data) {
					//console.log(data);
					if(data == "ERR01"){
						modalAlert('이 글과 관련된 답변글이 존재하므로 삭제할 수 없습니다. <br>우선 답변글부터 삭제하여 주십시오.')
					}else{
						location.href=data;
					}
				}
			  ,error: function(xhr, status, error) { 
				  modalAlert('오류가 발생하였습니다.')
				}
			});
		}
    }

	// POST 전송, 결과값 리턴
    function post_s_new(href, parm, del) {
        if (!del || confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) { 
			$.ajax({
				type: 'post'
				, contentType: "application/x-www-form-urlencoded; charset=UTF-8"
				, dataType: "html"
				, url : rt_path + '/' + href
				, method : "post"
				, data : {idx:parm}
				, success: function(data) {
					location.href=data;
				}
			  ,error: function(xhr, status, error) { 
				  modalAlert('오류가 발생하였습니다.')
				}
			});
		}
    }

    // POST 이동
    function post_goto(url, parm, target) {
        var f = document.createElement('form');
        
        var objs, value;
        for (var key in parm) {
            value = parm[key];
            objs = document.createElement('input');
            objs.setAttribute('type', 'hidden');
            objs.setAttribute('name', key);
            objs.setAttribute('value', value);
            f.appendChild(objs);
        }
        
        if (target)
            f.setAttribute('target', target);

        f.setAttribute('method', 'post');
        f.setAttribute('action', rt_path + '/' + url);
        document.body.appendChild(f);
        f.submit();
    }
    
    // POST 창
    function post_win(name, url, parm, opt) {
        var temp_win = window.open('', name, opt);
            post_goto(url, parm, name);
    }

	// 일반 삭제 검사 확인
    function del(href) {
        if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) 
            document.location.href = rt_path + '/' + href;
    }

	// 플래시에 변수 추가 fh
	function flash_movie(src, ids, width, height, wmode, fh) { 
        var wh = ""; 
        if (parseInt(width) && parseInt(height)) 
            wh = " width='"+width+"' height='"+height+"' "; 
        return "<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0' "+wh+" id="+ids+"><param name=wmode value="+wmode+"><param name=movie value="+src+"><param name=quality value=high><param name=flashvars value="+fh+"><embed src="+src+" quality=high wmode="+wmode+" flashvars="+fh+" type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/shockwave/download/index.cgi?p1_prod_version=shockwaveflash' "+wh+"></embed></object>"; 
    }

	// 동영상 파일
    function obj_movie(src, ids, width, height, autostart) {
        var wh = "";
        if (parseInt(width) && parseInt(height)) 
            wh = " width='"+width+"' height='"+height+"' ";
        if (!autostart) autostart = false;
        return "<embed src='"+src+"' "+wh+" autostart='"+autostart+"'></embed>";
    }

	// 아이프레임 높이 자동조절
	function reSize(obj) {
		try {
			var objBody = frames[obj].document.body;
			var objFrame = document.getElementById(obj);
			ifrmHeight = objBody.scrollHeight + (objBody.offsetHeight - objBody.clientHeight);
			objFrame.style.height = ifrmHeight;
		}
		catch(e) {}
	}

	function sEncode(val) {
		return encodeURIComponent(val).replace(/%/g, '.');
	}
    
    // script 에서 js 파일 로드
    function importScript(FILES) {
        var _importScript = function(filename) { 
        	if (filename) {
        		document.write('<script type="text/javascript" src="'+rt_path+'/js/'+filename+'.js"></s'+'cript>');
            }
        };
        
        for (var i=0; i<FILES.length; i++) {
        	_importScript(FILES[i]);
        }
    }
    
    // jQuery textarea
    function txresize(tx, type, size) {
        var tx = $('#'+tx);
        if (type == 1)
            tx.animate({'height':'-='+size+'px'}, 'fast');
        else if (type == 2)
            tx.animate({'height':size}, 'fast');
        else if (type == 3)
            tx.animate({'height':'+='+size+'px'}, 'fast');
    }

	// 팝업 닫기
	function popup_close(id, onday) {
		if (onday) {
			var today = new Date();
			today.setTime(today.getTime() + (60*60*1000*24));
			document.cookie = id + "=" + escape( true ) + "; path=/; expires=" + today.toGMTString() + ";";
		}

		if (window.parent.name.indexOf(id) != -1)
			window.close();
		else
			document.getElementById(id).style.display = 'none';
	}

	// 검색 리다이렉트schBtn
	var doSearch = function() {
		var stx = $( '#stx' ).attr('value').replace(/(^\s*)|(\s*$)/g,'');
		if (stx.length < 2) {
			alert('2글자 이상으로 검색하십시오.');
			$( '#stx' ).focus();
			return false;
		}

		location.href = rt_path+'/svy/mysurvey/lists/stx/' + sEncode(stx);
		return false;
	}

	//2015-11-11 added by jnc start
	var doAddrSearch = function(type) {
		var stx = $( '#stx' ).attr('value').replace(/(^\s*)|(\s*$)/g,'');
		if (stx.length < 2 && stx.length != 0) {
			alert('2글자 이상으로 검색하십시오.');
			$( '#stx' ).focus();
			return false;
		}

		location.href = rt_path+'/svy/addr/'+type+'/stx/' + sEncode(stx);
		return false;
	}

	var doAddrDetailSearch = function(type, idx) {
		var stx = $( '#stx' ).attr('value').replace(/(^\s*)|(\s*$)/g,'');
		if (stx.length < 2 && stx.length != 0) {
			alert('2글자 이상으로 검색하십시오.');
			$( '#stx' ).focus();
			return false;
		}

		location.href = rt_path+'/svy/uploads/detail/'+type+'/'+idx+'/stx/' + sEncode(stx);
		return false;
	}
	//2015-11-11 added by jnc end

	var doUserAddrDetailSearch = function(type, idx) {
		var stx = $( '#stx' ).attr('value').replace(/(^\s*)|(\s*$)/g,'');
		if (stx.length < 2 && stx.length != 0) {
			alert('2글자 이상으로 검색하십시오.');
			$( '#stx' ).focus();
			return false;
		}

		location.href = rt_path+'/svy/uploads/detail/'+type+'/'+idx+'/stx/' + sEncode(stx);
		return false;
	}
}

function add_favorite( a ) { 
	title = document.title; 
	url = document.location; 
	try { 
		// Internet Explorer 
		window.external.AddFavorite( url, title ); 
	} 
	catch (e) { 
		try { 
			// Mozilla 
			window.sidebar.addPanel( title, url, "" ); 
		} 
		catch (e) { 
			// Opera 
			if( typeof( opera ) == "object" ) { 
				a.rel = "sidebar"; 
				a.title = title; 
				a.url = url; 
				return true; 
			} else { 
				// Unknown 
				alert( 'Ctrl + D를 눌러 즐겨찾기에 추가 하세요.' ); 
			} 
		}
	} 
	return false;
}

function addComma(num) {      
	var strValue = ""+num;
	var fLen = num.length;
	var strBeforeValue = (strValue.indexOf('.') != -1)? strValue.substring(0,strValue.indexOf('.')) :strValue ;
	var strAfterValue  = (strValue.indexOf('.') != -1)? strValue.substr(strValue.indexOf('.'),fLen+1) : '' ;
   
	var intLast =  strBeforeValue.length-1;
	var arrValue = new Array;
	var strComma = '';
	for(var i=intLast,j=0; i >= 0; i--,j++)
	{               
		   if( j !=0 && j%3 == 0) 
		   {   
			   strComma = ',';
		   }
		   else
		   {
			   strComma = '';
		   }                            
		   arrValue[arrValue.length] = strBeforeValue.charAt(i) + strComma  ;
	}                                      
 return arrValue.reverse().join('') +  strAfterValue; 
}

var modalAlert = function(_msg, mov) {
	if(mov!=undefined) {
		if($( '#first_contents' ).css("display") != "none") {
			$( '#first_contents' ).hide();
		}

		var position = $( '#portlet'+mov ).offset();
		var moveTo_position = Number(position.top) - 150;
		$('html, body').animate({ scrollTop: moveTo_position }, 300);
	}

	$.alert({
		title: '<span><img src="/img/common/sub_layerpop_logo.png"/></span>',
		content: _msg,
		animation: 'scale',
		closeAnimation: 'scale',
		buttons: {
			okay: {
				text: '확인',
				btnClass: 'btn-blue'
			}
		}
	});
}

// confirmation
/*
var modalConfirm = function(_msg, mov) {
	$.confirm({
		title: '<span><img src="/img/common/sub_layerpop_logo.png"/></span>',
		content: _msg,
		animation: 'scale',
		closeAnimation: 'scale',
		opacity: 0.5,
		buttons: {
			'confirm': {
				text: '확인',
				btnClass: 'btn-blue',
				action: function () {
					if(mov) {
						location.href=mov;
					}
					return 'Y';
				}
			},
			'취소': function () { },
		}
	});
}
*/

//*********************************************
//2025-02-03 : 편집창 저장하기 추가로 해당 함수 개선
//*********************************************
var modalConfirm = function(_msg, mov) {
    return new Promise((resolve) => {
        $.confirm({
            title: '<span><img src="/img/common/sub_layerpop_logo.png" alt="로고"/></span>',
            content: _msg,
            animation: 'scale',
            closeAnimation: 'scale',
            opacity: 0.5,
            buttons: {
                confirm: {
                    text: '확인',
                    btnClass: 'btn-blue',
                    action: function () {
                        resolve(true);
                        if(mov) {
                            location.href = mov;
                        }
                    }
                },
                cancel: {
                    text: '취소',
                    action: function () {
                        resolve(false);
                    }
                }
            }
        });
    });
};