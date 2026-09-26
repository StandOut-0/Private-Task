var share_ua = util.userAgent();
var KAKAO_KEY = 'df427f934850f3d7fe0a5d938f6d2c84';

function is_sdk_use() {
	var ua = share_ua;
	var sdk_use = true;

	if(ua.platform === 'pc') {
		sdk_use = true;
	}else{
		if(ua.os.android){
			sdk_use = true;
		}else{ //iOS 10.3.2부터 해당 라이브러리(kakao.min.js)가 작동하지 않네 ㅠㅠ. 할 수 없이 스키마로..
			if(parseInt(ua.os.version.major, 10) < 10){
				sdk_use = true;
			}else{
				if(parseInt(ua.os.version.major, 10) == 10){
					if(parseInt(ua.os.version.minor, 10) < 3){
						sdk_use = true;
					}else{
						if(parseInt(ua.os.version.minor, 10) == 3){
							if(parseInt(ua.os.version.patch, 10) < 2){
								sdk_use = true;
							}else{
								sdk_use = true;
							}
						}else{
							sdk_use = true;
						}
					}
				}else{
					sdk_use = true;
				}
			}
		}
	}

	return sdk_use;
}

var sdk_use = is_sdk_use();
if(sdk_use){
	Kakao.init(KAKAO_KEY); //나우앤서베이 카카오 자바스크립트키
}

function shareStory(url, title, description,img) {
	/*if(sdk_use){
		Kakao.Story.share({
		url: url,
		text: title
		});
	}else{
		shareStoryiOS(url, title, description);
	}*/

	var ua = share_ua;
	if(ua.ua.indexOf('com.nownsurvey.android') !== -1){ //2022-07-11 by nccho Android App 이라면 웹으로 브라우저 호출하고 해당 페이지에서 자동으로 앱호출
		window.open('https://www.nownsurvey.com/web/apptoweb/share.html?stype=shareStory&url='+url+'&title='+title+'&description='+description+'&img='+img,'','menubar=no,toolbar=no,resizable=yes,scrollbars=no,height=1,width=1');
		return;
	}
	var sns_title = decodeURIComponent(title);

	if(ua.platform === 'pc') {
		Kakao.Story.share({
		url: url,
		text: sns_title
		});
	}else{
		shareStoryiOS(url, sns_title, description,img);
	}

}

function shareStoryiOS(url, title, description, img) {
	var ua = share_ua;

	var arr_url = url.split('/');
	//var img_url = "http://"+arr_url[2]+"assets/www.nownsurvey.com/img/v2/issue/nownsurvey_sns_720x405_ios.png"; //링크페이지의 이미지와 같은 주소로 하면. 사이즈가 원하는 대로 적용 안됨.
	var img_url = img;

	var url_info = encodeURIComponent(JSON.stringify({imageurl:[img_url], desc:description, title:title, type:"article"}));
	var contents = encodeURIComponent(title + ' ' + url);
	
	var urlScheme = 'storylink://posting?post='+contents+'&appid=nownsurvey.com&appname='+encodeURIComponent('나우앤서베이')+'&appver=1.0&apiver=1.0&urlinfo='+url_info,
		intentURI = 'intent://posting?post='+contents+'&appid=nownsurvey.com&appname='+encodeURIComponent('나우앤서베이')+'&appver=1.0&apiver=1.0&urlinfo='+url_info+'#Intent;scheme=storylink;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.kakao.story;end',
		appStoreURL = ua.os.android ? 'market://details?id=com.kakao.story' : 'itms-apps://itunes.apple.com/app/id486244601';
	
	daumtools.web2app({
		urlScheme : urlScheme,
		intentURI : intentURI,
		storeURL : appStoreURL,
		appName : '카카오스토리'
	});
}

function shareTalk(url, title, description, img) {
	var ua = share_ua;
	if(ua.ua.indexOf('com.nownsurvey.android') !== -1){ //2022-07-11 by nccho Android App 이라면 웹으로 브라우저 호출하고 해당 페이지에서 자동으로 앱호출
		window.open('https://www.nownsurvey.com/web/apptoweb/share.html?stype=shareTalk&url='+url+'&title='+title+'&description='+description+'&img='+img,'','menubar=no,toolbar=no,resizable=yes,scrollbars=no,height=1,width=1');
		return;
	}
	if(ua.platform === 'pc') {
		//alert('스마트폰에서만 지원하는 서비스입니다.');return;
	}

	var arr_url = url.split('/');
	var sns_title = decodeURIComponent(title);
	var sns_img = decodeURIComponent(img);
	if(sns_img.indexOf('nownsurvey_sns_720x405.png') != -1){
		sns_img = 'https://'+arr_url[2]+'assets/www.nownsurvey.com/img/v2/issue/nownsurvey_sns_800x800.png';
	}

	if(sdk_use){
		//Kakao.Link.sendDefault({
		Kakao.Share.sendDefault({
		objectType: 'feed',
		content :{
			title :sns_title,
			description: description,
			//imageUrl:'http://'+arr_url[2]+'assets/www.nownsurvey.com/img/v2/issue/nownsurvey_sns_800x800.png',
			imageUrl:sns_img,
			link:{
				mobileWebUrl :url,
				webUrl :url,
			}
		},
		buttons: [
			{
			  title: '바로가기',
			  link: {
				mobileWebUrl: url,
				webUrl: url
			  }
			}
		  ],
		installTalk:true
		});
	}else{//iOS 10.3.2부터 해당 라이브러리(kakao.min.js)가 작동하지 않네 ㅠㅠ.
		shareTalkiOS(url, sns_title, description, img);
	}
	
}

function shareTalkiOS(url, title, description, img) {
	var ua = share_ua;
	var arr_url = url.split('/');

	var sns_img = img;
	if(sns_img.indexOf('nownsurvey_sns_720x405.png') != -1){
		sns_img = 'https://'+arr_url[2]+'assets/www.nownsurvey.com/img/v2/issue/nownsurvey_sns_800x800.png';
	}

	var json_data = [
			{
				objtype:'image',
				//src:'http://'+arr_url[2]+'assets/www.nownsurvey.com/img/v2/issue/nownsurvey_sns_800x800.png',
				src:sns_img,
				width:800,
				height:800
			},
			{
				objtype:'label',
				text:title+'\r\n\r\n'+description
			},
			{
				objtype:'button',
				text:'설문결과보기',
				action:{
					type:'web',
					url:url
				}
			}
		];
	var url_info = encodeURIComponent(JSON.stringify(json_data));

	var urlScheme = 'kakaolink://send?appkey=df427f934850f3d7fe0a5d938f6d2c84&appver=1.0&apiver=3.0&linkver=3.5&objs='+url_info,
		intentURI = 'intent://send?appkey=df427f934850f3d7fe0a5d938f6d2c84&appver=1.0&apiver=3.0&linkver=3.5&objs='+url_info+'#Intent;scheme=kakaolink;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.kakao.talk;end',
		appStoreURL = ua.os.android ? 'market://details?id=com.kakao.talk' : 'itms-apps://itunes.apple.com/app/id362057947';
	
	daumtools.web2app({
		urlScheme : urlScheme,
		intentURI : intentURI,
		storeURL : appStoreURL,
		appName : '카카오톡'
	});
}

function shareLine(contents) {
	var ua = share_ua;
	if(ua.ua.indexOf('com.nownsurvey.android') !== -1){ //2022-07-11 by nccho Android App 이라면 웹으로 브라우저 호출하고 해당 페이지에서 자동으로 앱호출
		window.open('https://www.nownsurvey.com/web/apptoweb/share.html?stype=shareLine&contents='+contents,'','menubar=no,toolbar=no,resizable=yes,scrollbars=no,height=1,width=1');
		return;
	}
	if(ua.platform === 'pc') {
		alert('스마트폰에서만 지원하는 서비스입니다.');return;
	}

	var urlScheme = 'line://msg/text/'+contents,
		intentURI = 'intent://msg/text/'+contents+'#Intent;scheme=line;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=jp.naver.line.android;end',
		appStoreURL = ua.os.android ? 'market://details?id=jp.naver.line.android' : 'itms-apps://itunes.apple.com/kr/app/line/id443904275';
	
	daumtools.web2app({
		urlScheme : urlScheme,
		intentURI : intentURI,
		storeURL : appStoreURL,
		appName : '라인'
	});
}

function shareBand(contents) {
	var ua = share_ua;
	if(ua.ua.indexOf('com.nownsurvey.android') !== -1){ //2022-07-11 by nccho Android App 이라면 웹으로 브라우저 호출하고 해당 페이지에서 자동으로 앱호출
		window.open('https://www.nownsurvey.com/web/apptoweb/share.html?stype=shareBand&contents='+contents,'','menubar=no,toolbar=no,resizable=yes,scrollbars=no,height=1,width=1');
		return;
	}
	if(ua.platform === 'pc') {
		window.open('http://band.us/plugin/share?body='+contents+'&route=*.nownsurvey.com','','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=795,width=860');
	}else{
		var urlScheme = 'bandapp://create/post?text='+contents+'&route=*.nownsurvey.com',
			intentURI = 'intent://create/post?text='+contents+'&route=*.nownsurvey.com#Intent;scheme=bandapp;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.nhn.android.band;end',
			appStoreURL = ua.os.android ? 'market://details?id=com.nhn.android.band' : 'itms-apps://itunes.apple.com/kr/app/id542613198';
		
		daumtools.web2app({
			urlScheme : urlScheme,
			intentURI : intentURI,
			storeURL : appStoreURL,
			appName : '밴드'
		});
	}
}

// 시스템 공유 함수
//title은 rawurlencode(title) 형식으로 전달해야 함.
//url은 rawurlencode(url) 형식으로 전달해야 함.
async function openSystemShare(title, url) {
	// 브라우저가 Web Share API를 지원하는지 확인
	if (navigator.share) {
		try {
			// 공유할 데이터 설정//문자에 따옴표, 특수문자 처리 필요.
			var sns_title = decodeURIComponent(title);
			var sns_url = decodeURIComponent(url);
			const shareData = {
				title: sns_title,
				url: sns_url
			};
			await navigator.share(shareData);
			console.log('공유 성공');
		} catch (error) {
			console.log('공유 실패 또는 취소:', error);
		}
	} else {
		// API를 지원하지 않는 PC 브라우저 등을 위한 대체 동작 (예: 주소 복사)
		alert('이 브라우저에서는 시스템 공유를 지원하지 않습니다.');
	}
}

function toclip2(id){
	var idxs = document.getElementById(id);
	if(idxs.value==''){ document.body.focus(); return; }
		idxs.select();
	var clip=idxs.createTextRange()
	clip.execCommand('copy');
	alert('주소가 클립보드에 복사되었습니다. Ctrl + V로 붙여넣기 하세요.');
}

function toclip3(id){
	var elem = document.getElementById(id);
	
	if( is_ie() ) {
		var t = document.createElement("textarea");
		t.style.width = "1px";t.style.height = "1px";t.style.opacity = "0.0";
		//document.body.appendChild(t);
		elem.parentNode.parentNode.parentNode.parentNode.appendChild(t);
		t.value = elem.value;
		t.select();
		document.execCommand('copy');
		//document.body.removeChild(t);
		elem.parentNode.parentNode.parentNode.parentNode.removeChild(t);
		alert('주소가 클립보드에 복사되었습니다. 붙여넣기 하세요.');
	}else{
		var origSelectionStart, origSelectionEnd;
		// can just use the original source element for the selection and copy
		target = elem;
		origSelectionStart = elem.selectionStart;
		origSelectionEnd = elem.selectionEnd;


		// select the content
		var currentFocus = document.activeElement;
		target.focus();
		target.setSelectionRange(0, target.value.length);
		
		// copy the selection
		var succeed;
		try {
			  succeed = document.execCommand("copy");
		} catch(e) {
			succeed = false;
		}
		// restore original focus
		if (currentFocus && typeof currentFocus.focus === "function") {
			currentFocus.focus();
		}
		
		elem.setSelectionRange(origSelectionStart, origSelectionEnd);
		
		if(succeed)
			alert('주소가 클립보드에 복사되었습니다. 붙여넣기 하세요.');
	}

}

function is_ie() {
  if(navigator.userAgent.toLowerCase().indexOf("chrome") != -1) return false;
  if(navigator.userAgent.toLowerCase().indexOf("msie") != -1) return true;
  if(navigator.userAgent.toLowerCase().indexOf("windows nt") != -1) return true;
  return false;
}