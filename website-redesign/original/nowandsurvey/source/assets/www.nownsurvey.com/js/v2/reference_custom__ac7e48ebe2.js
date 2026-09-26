function eggbfc(winw,resultoption) {
	var lasttop = winw,
	lastbottom = 0,
	smallest =9999,
	largest = 0,
	samount = 0,
	lamoung = 0,
	lastamount = 0,
	resultid = 0,
	resultidb = 0,
	responsiveEntries = [
						{ width:1400,amount:6,mmheight:0},
						{ width:1170,amount:4,mmheight:0},
						{ width:1024,amount:4,mmheight:0},
						{ width:960,amount:4,mmheight:0},
						{ width:778,amount:4,mmheight:0},
						{ width:640,amount:3,mmheight:0},
						{ width:480,amount:1,mmheight:0}
						];
	if (responsiveEntries!=undefined && responsiveEntries.length>0)
		jQuery.each(responsiveEntries, function(index,obj) {
			var curw = obj.width != undefined ? obj.width : 0,
				cura = obj.amount != undefined ? obj.amount : 0;
			if (smallest>curw) {
				smallest = curw;
				samount = cura;
				resultidb = index;
			}
			if (largest<curw) {
				largest = curw;
				lamount = cura;
			}
			if (curw>lastbottom && curw<=lasttop) {
				lastbottom = curw;
				lastamount = cura;
				resultid = index;
			}
		});
		if (smallest>winw) {
			lastamount = samount;
			resultid = resultidb;
		}
		var obj = new Object;
		obj.index = resultid;
		obj.column = lastamount;
		if (resultoption=="id")
			return obj;
		else
			return lastamount;
	}

	if ("even"=="even") {
		var coh=0,
			container = jQuery("#esg-grid-10-1");
		var	cwidth = container.width(),
			ar = "4:3",
			gbfc = eggbfc(jQuery(window).width(),"id"),
		row = 1;
	ar = ar.split(":");
	aratio=parseInt(ar[0],0) / parseInt(ar[1],0);
	coh = cwidth / aratio;
	coh = coh/gbfc.column*row;
		var ul = container.find("ul").first();
		ul.css({display:"block",height:coh+"px"});
	}

	var essapi_10;
	jQuery(document).ready(function() {
		essapi_10 = jQuery("#esg-grid-10-1").tpessential({
	        gridID:10,
	        layout:"even",
	        forceFullWidth:"off",
	        lazyLoad:"off",
	        row:1,
	        space:50,
	        pageAnimation:"fade",
	        paginationScrollToTop:"off",
	        paginationAutoplay:"off",
	        spinner:"spinner0",
	        evenGridMasonrySkinPusher:"off",
	        lightBoxMode:"single",
	        lightboxSpinner:"off",
	        lightBoxFeaturedImg:"off",
	        lightBoxPostTitle:"off",
	        lightBoxPostTitleTag:"h2",
	        animSpeed:2000,
	        delayBasic:1,
	        mainhoverdelay:1,
	        filterType:"single",
	        showDropFilter:"hover",
	        filterGroupClass:"esg-fgc-10",
	        googleFonts:['Open+Sans:300,400,600,700,800','Raleway:100,200,300,400,500,600,700,800,900','Droid+Serif:400,700'],
	        aspectratio:"4:3",
	        responsiveEntries: [
							{ width:1400,amount:6,mmheight:0},
							{ width:1170,amount:4,mmheight:0},
							{ width:1024,amount:4,mmheight:0},
							{ width:960,amount:4,mmheight:0},
							{ width:778,amount:4,mmheight:0},
							{ width:640,amount:3,mmheight:0},
							{ width:480,amount:1,mmheight:0}
							]
		});

	var interval = 5000, timer;
	function changeGrid() {
		if(!$('.container').hasClass('nav-slidebar-open')){
			jQuery('.esg-right').trigger('click');
		}
	}

	
	// Set the name of the hidden property and the change event for visibility
	var hidden, visibilityChange; 
	if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
		hidden = "hidden";
		visibilityChange = "visibilitychange";
	} else if (typeof document.msHidden !== "undefined") {
		hidden = "msHidden";
		visibilityChange = "msvisibilitychange";
	} else if (typeof document.webkitHidden !== "undefined") {
		hidden = "webkitHidden";
		visibilityChange = "webkitvisibilitychange";
	}

	function handleVisibilityChange() {
		if (document[hidden]) {
			clearInterval(timer);
		} else {
			timer = setInterval(changeGrid, interval);
		}
	}

	// Warn if the browser doesn't support addEventListener or the Page Visibility API
	if (typeof document.addEventListener === "undefined" || typeof document[hidden] === "undefined") {
		console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
	} else {
		// Handle page visibility change   
		document.addEventListener(visibilityChange, handleVisibilityChange, false);
	}

	timer = setInterval(changeGrid, interval);

	
	/*(function() {
	 
	 // change the number "5000" to however many seconds should pass before the Grid's page changes
	 var interval = 5000, timer, mouseOn;
	 
	 jQuery('.esg-grid').on('mouseenter', function() {
	 
	 mouseOn = true;
	 clearInterval(timer);
	 
	 }).on('mouseleave', mouseOut);
	 
	 function mouseOut() {
	 
	 mouseOn = false
	 timer = setInterval(changeGrid, interval); 
	 
	 }
	 
	 function changeGrid() {
	 
		 if(!$('.container').hasClass('nav-slidebar-open')){
			 jQuery('.esg-right').trigger('click');
		 }
	 
	 }
	 
	 var gridLoaded = setInterval(function() {
	 
		 if(jQuery('.esg-grid').is(':visible')) {
		 
			 clearInterval(gridLoaded);
			 if(!mouseOn) mouseOut();
		 
		 }
	 
	 }, 500);

	

	})();*/
	

	});

