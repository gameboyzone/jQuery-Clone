/*******************************************/
/***************** jQuery ******************/
/*******************************************/

//Module Design pattern allows copying properties and functions into $ and having an isolated module
var $ = (function(selector){
	var obj = {};
	
	/***	Define properties	***/
	obj.collection = [];		//jQuery collection
	obj.isKhtml = (navigator && navigator.userAgent && navigator.userAgent.indexOf("KHTML") !== -1);
    obj.isIE = (navigator && navigator.userAgent && navigator.userAgent.indexOf("MSIE") !== -1);
	obj.author = "Harry Shah";
	obj.version = "1.0.0";
	
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
	
	obj.get = function(index){
		return (!isNaN(index) && typeof(index)=="number") ? this.collection[index] : this.collection;
	};
	
	obj.each = function(key, value){
		console.log(key + " | " + value);
		//Return iterator
	};
	
	//Always return jQuery object
	return obj;
})("$");

/*******************************************/
/**************** Angular ******************/
/*******************************************/

//Object initialization
if (typeof angular === 'undefined') {
	//Create angular object if not exists
	var angular = {};
}

//Design pattern allows explicitly copying properties and functions into angular
(function(){
	//Null check
    
	/***	Define properties	***/
	angular.isKhtml = (navigator && navigator.userAgent && navigator.userAgent.indexOf("KHTML") !== -1);
    angular.isIE = (navigator && navigator.userAgent && navigator.userAgent.indexOf("MSIE") !== -1);
	angular.author = "Harry Shah";
	angular.version = "1.0.0";
	
	/***	Define functions	***/
	//jQuery mini functionality
	angular.element = $.getDOM;

    angular.mo2 = function (target, ev){
        ev = ev || window.event;
		
		return {};
	};
})();