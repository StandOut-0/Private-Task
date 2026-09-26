<!--
//레이어창
function _ID(obj){return document.getElementById(obj)}

function popupLayer(s,w,h)
{
	if (!w) w = 500;
	if (!h) h = 500;

	var pixelBorder = 3;
	var titleHeight = 25;
	w += pixelBorder * 2;
	h += pixelBorder * 2 + titleHeight;


	if( typeof( window.pageYOffset ) == 'number' ) {
		//Netscape compliant
		var bodyTop = window.pageYOffset;
		var bodyLeft = window.pageXOffset;
	} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
		//DOM compliant
		var bodyTop = document.body.scrollTop;
		var bodyLeft = document.body.scrollLeft;
	} else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
		//IE6 standards compliant mode
		var bodyTop = document.documentElement.scrollTop;
		var bodyLeft = document.documentElement.scrollLeft;
	}

	if(bodyTop==undefined){
		bodyTop=0;
	}

	if(bodyLeft==undefined){
		bodyLeft=0;
	}

	if(typeof(document.compatMode)=='undefined' || document.compatMode=='CSS1Compat'){
		var bodyW = document.documentElement.clientWidth;
		var bodyH = document.documentElement.clientHeight;
	}else{
		var bodyW = document.body.clientWidth;
		var bodyH = document.body.clientHeight;
	}

	var posX = (bodyW - w) / 2;
	var posY = (bodyH - h) / 2;

//	hiddenSelectBox('hidden');
	var obj = document.createElement("div");
	with (obj.style){
		position = "absolute";
		left = 0;
		top = 0;
		//width = "100%";
		/*height = "100%";*/
		height = bodyTop+"px";
		backgroundColor = "#000000";
		filter = "Alpha(Opacity=60)";
		opacity = "0.6";
		zIndex = "10000";
	}
	obj.id = "objPopupLayerBg";
	document.body.appendChild(obj);

	var obj = document.createElement("div");
	with (obj.style){
		zIndex = "10001";
		position = "absolute";
		left = posX + bodyLeft+"px";
		top = posY + bodyTop+"px";
		width = w+"px";
		height = h+"px";
		backgroundColor = "#FFFFFF";
		border = "3px solid #000000";
	}
	obj.id = "objPopupLayer";
	document.body.appendChild(obj);

	var bottom = document.createElement("div");
	with (bottom.style){
		position = "absolute";
		width = w - pixelBorder * 2 +"px";
		height = titleHeight-1 +"px";
		left = 0;
		top = h - titleHeight - pixelBorder * 3 +"px";
		padding = "2px 0 0 0";
		textAlign = "right";
		backgroundColor = "#FFFFFF";
		color = "#ffffff";
		font = "bold 11px tahoma";
	}

	bottom.innerHTML = "<a href='javascript:closeLayer()'><img src='../img/inc/close.jpg' border='0' title='Close' /></a>&nbsp;&nbsp;&nbsp;";
	obj.appendChild(bottom);



	var ifrm = document.createElement("iframe");
	with (ifrm.style){
		width = w+"px";
		height = h - pixelBorder * 2 - 3 - titleHeight-1 +"px";
		border = 0+"px";
	}
	ifrm.frameBorder = 0+"px";
	ifrm.src = s;
	obj.appendChild(ifrm);
}

function popupLayer_no(s,w,h)
{
	if (!w) w = 500;
	if (!h) h = 500;

	var pixelBorder = 3;
	var titleHeight = 25;
	w += pixelBorder * 2;
	h += pixelBorder * 2 + titleHeight;


	if( typeof( window.pageYOffset ) == 'number' ) {
		//Netscape compliant
		var bodyTop = window.pageYOffset;
		var bodyLeft = window.pageXOffset;
	} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
		//DOM compliant
		var bodyTop = document.body.scrollTop;
		var bodyLeft = document.body.scrollLeft;
	} else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
		//IE6 standards compliant mode
		var bodyTop = document.documentElement.scrollTop;
		var bodyLeft = document.documentElement.scrollLeft;
	}

	if(bodyTop==undefined){
		bodyTop=0;
	}

	if(bodyLeft==undefined){
		bodyLeft=0;
	}

	if(typeof(document.compatMode)=='undefined' || document.compatMode=='CSS1Compat'){
		var bodyW = document.documentElement.clientWidth;
		var bodyH = document.documentElement.clientHeight;
	}else{
		var bodyW = document.body.clientWidth;
		var bodyH = document.body.clientHeight;
	}

	var posX = (bodyW - w) / 2;
	var posY = (bodyH - h) / 2;

//	hiddenSelectBox('hidden');
	var obj = document.createElement("div");
	with (obj.style){
		position = "absolute";
		left = 0;
		top = 0;
		//width = "100%";
		/*height = "100%";*/
		height = bodyTop+"px";
		backgroundColor = "#000000";
		filter = "Alpha(Opacity=60)";
		opacity = "0.6";
		zIndex = "10000";
	}
	obj.id = "objPopupLayerBg";
	document.body.appendChild(obj);

	var obj = document.createElement("div");
	with (obj.style){
		zIndex = "10001";
		position = "absolute";
		left = posX + bodyLeft+"px";
		top = posY + bodyTop+"px";
		width = w+"px";
		height = h+"px";
		backgroundColor = "#FFFFFF";
		border = "3px solid #000000";
	}
	obj.id = "objPopupLayer";
	document.body.appendChild(obj);

	var bottom = document.createElement("div");
	with (bottom.style){
		position = "absolute";
		width = w - pixelBorder * 2 +"px";
		height = titleHeight-1 +"px";
		left = 0;
		top = h - titleHeight - pixelBorder * 3 +"px";
		padding = "2px 0 0 0";
		textAlign = "right";
		backgroundColor = "#FFFFFF";
		color = "#ffffff";
		font = "bold 11px tahoma";
	}

	/*
	bottom.innerHTML = "<a href='javascript:closeLayer_no()'><img src='../ISAF/img/close.gif' border='0' title='Close' /></a>&nbsp;&nbsp;&nbsp;";
	obj.appendChild(bottom);
	*/

	var ifrm = document.createElement("iframe");
	with (ifrm.style){
		width = w+"px";
		height = h - pixelBorder * 2 - 3 - titleHeight-1 +"px";
		border = 0+"px";
	}
	ifrm.frameBorder = 0+"px";
	ifrm.src = s;
	obj.appendChild(ifrm);
}

function popupLayer_pop(s,w,h)
{
	if (!w) w = 500;
	if (!h) h = 500;

	var pixelBorder = 3;
	var titleHeight = 25;
	w += pixelBorder * 2;
	h += pixelBorder * 2 + titleHeight;

	var bodyW = document.body.clientWidth;
	var bodyH = document.body.clientHeight;

	var posX = (bodyW - w) / 2;
	var posY = (bodyH - h) / 2;

	var obj = document.createElement("div");
	with (obj.style){
		position = "absolute";
		left = 0;
		top = 0;
		width = "100%";
		/*height = "100%";*/
		height = document.body.scrollHeight;
		backgroundColor = "#000000";
		filter = "Alpha(Opacity=10)";
		opacity = "0.5";
	}
	obj.id = "objPopupLayerBg";
	document.body.appendChild(obj);

	var obj = document.createElement("div");
	with (obj.style){
		position = "absolute";
		left = posX + document.body.scrollLeft;
		top = posY + document.body.scrollTop;
		width = w;
		height = h;
		backgroundColor = "#FFFFFF";
		border = "3px solid #000000";
	}
	obj.id = "objPopupLayer";
	document.body.appendChild(obj);

	var bottom = document.createElement("div");
	with (bottom.style){
		position = "absolute";
		width = w - pixelBorder * 2;
		height = titleHeight;
		left = 0;
		top = h - titleHeight - pixelBorder * 3;
		padding = "2px 0 0 0";
		textAlign = "right";
		backgroundColor = "#FFFFFF";
		color = "#ffffff";
		font = "bold 11px tahoma";
	}

	bottom.innerHTML = "<a href='javascript:closeLayer_pop()'><img src='../img/inc/close.jpg' border='0' title='Close' /></a>&nbsp;&nbsp;&nbsp;";
	obj.appendChild(bottom);



	var ifrm = document.createElement("iframe");
	with (ifrm.style){
		width = w - 6;
		height = h - pixelBorder * 2 - titleHeight - 3;
	}
	ifrm.frameBorder = 0;
	ifrm.src = s;
	obj.appendChild(ifrm);
}

function closeLayer(){
	history.go(0);
}

function closeLayer_no(){
 _ID('objPopupLayer').parentNode.removeChild( _ID('objPopupLayer') );
 _ID('objPopupLayerBg').parentNode.removeChild( _ID('objPopupLayerBg') );
}

function closeLayer_pop(){
	history.go(0);
}

//popupLayer('member_view.asp?mem_ID=<%=mem_ID%>&<%=sub_link%>',620,600)
//popupLayer('member_view.asp',620,600)

function popupLayer_div(s,w,h)
{
	if (!w) w = 500;
	if (!h) h = 500;

	var pixelBorder = 3;
	var titleHeight = 25;
	w += pixelBorder * 2;
	h += pixelBorder * 2 + titleHeight;

	var bodyW = document.body.clientWidth;
	var bodyH = document.body.clientHeight;

	var posX = (bodyW - w) / 2;
	var posY = (bodyH - h) / 2;

	var obj = document.createElement("div");
	with (obj.style){
		position = "absolute";
		left = 0;
		top = 0;
		width = "100%";
		/*height = "100%";*/
		height = document.body.scrollHeight;
		backgroundColor = "#000000";
		filter = "Alpha(Opacity=10)";
		opacity = "0.5";
	}
	obj.id = "objPopupLayerBg";
	document.body.appendChild(obj);

	var obj = document.createElement("div");
	with (obj.style){
		position = "absolute";
		left = posX + document.body.scrollLeft;
		top = posY + document.body.scrollTop;
		width = w;
		height = h;
		backgroundColor = "#FFFFFF";
		border = "3px solid #000000";
	}
	obj.id = "objPopupLayer";
	document.body.appendChild(obj);

	var bottom = document.createElement("div");
	with (bottom.style){
		position = "absolute";
		width = w - pixelBorder * 2;
		height = titleHeight;
		left = 0;
		top = h - titleHeight - pixelBorder * 3;
		padding = "2px 0 0 0";
		textAlign = "right";
		backgroundColor = "#FFFFFF";
		color = "#ffffff";
		font = "bold 11px tahoma";
	}

	obj.innerHTML = "<table border='0' align='center' width='100%' cellpadding='0' cellspacing='0'><tr><td style='padding-top:10px;padding-bottom:10px;font-size:12px;font-weight:bold;color:#FF0000;' align='center'>글읽기 권한이 없습니다.</td></tr></table>";
	bottom.innerHTML = "<a href='javascript:closeLayer_pop()'><img src='../ISAF/img/inc/close.jpg' border='0' title='Close' /></a>&nbsp;&nbsp;&nbsp;";
	obj.appendChild(bottom);
	obj.appendChild(obj);
}

//로그인
function pop_use(){
	popupLayer('../inc/use.php',424,280);
}


function hiddenSelectBox(mode)
{
 var obj = document.getElementsByTagName('select');
 for (i=0;i<obj.length;i++){
  obj[i].style.visibility = mode;
 }
}


function getScrollXY() {
	var scrOfX = 0, scrOfY = 0;
	if( typeof( window.pageYOffset ) == 'number' ) {
		//Netscape compliant
		scrOfY = window.pageYOffset;
		scrOfX = window.pageXOffset;
	} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
		//DOM compliant
		scrOfY = document.body.scrollTop;
		scrOfX = document.body.scrollLeft;
	} else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
		//IE6 standards compliant mode
		scrOfY = document.documentElement.scrollTop;
		scrOfX = document.documentElement.scrollLeft;
	}
	return [ scrOfX, scrOfY ];
}
//-->
