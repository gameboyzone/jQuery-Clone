/*******************************************/
/***************** jQuery ******************/
/*******************************************/

//Design pattern allows more abstraction
var $ = (function(selector){
	var obj = {};
	
	/***	Define properties	***/
	obj.collection = [];		//jQuery collection
	obj.isKhtml = (navigator && navigator.userAgent && navigator.userAgent.indexOf("KHTML") !== -1);
    obj.isIE = (navigator && navigator.userAgent && navigator.userAgent.indexOf("MSIE") !== -1);
	
	/***	Define functions	***/
	//Following should be called as a constructor
	obj.getDOM = function(selector) {
		if(typeof(selector)=='string' && selector.charAt(0)=='#'){	//selector.indexOf("#")!=-1
			this.collection = document.getElementById(selector.substring(1, selector.length));
		}
		else if(typeof(selector)=='string' && selector.charAt(0)=='.'){
			this.collection = document.getElementsByClassName(selector.substring(1, selector.length));
		}
		else if(typeof(selector)=='string' &&  (selector.charAt(0)!='#' && selector.charAt(0)!='.')){
			this.collection = document.getElementsByTagName(selector);
		}
		else if(typeof(selector)=='object'){
			this.collection = selector;
		}
		
		return this;
	};
	
	obj.each = function(key, value){
		console.log(key + " | " + value);
	};
	
	//Always return jQuery object
	return obj;
})("$");

/*******************************************/
/**************** Angular ******************/
/*******************************************/

(function(){
	//Null check
    if (typeof angular === 'undefined') {
		//Create angular object if not exists
		var angular = {};
	}
    
	/***	Define properties	***/
	angular.isKhtml = (navigator && navigator.userAgent && navigator.userAgent.indexOf("KHTML") !== -1);
    angular.isIE = (navigator && navigator.userAgent && navigator.userAgent.indexOf("MSIE") !== -1);
	
	/***	Define functions	***/
	//jQuery mini functionality
	angular.element = $;

    angular.mo2 = function (target, ev){
        ev = ev || window.event;
		
		return {};
	};
	
})();