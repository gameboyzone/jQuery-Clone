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
	obj.selector = selector;
	
	/***	Define functions	***/
	/*	
		Description: Following should be called (as constructor) when returning the jQuery object
		param: 	selector (string)/DOM node (object)
		return: object (if index passed),
				array (if no index passed)
		usage: 	$(selector),
				$(selector).getDOM(),
				$.getDom() ??
	*/
	obj.getDOM = function(selector) {
		//Selector is ID
		if(typeof(selector)=='string' && selector.charAt(0)=='#'){	//selector.indexOf("#")!=-1
			this.collection = [document.getElementById(selector.substring(1, selector.length))];
		}
		//Selector is className
		else if(typeof(selector)=='string' && selector.charAt(0)=='.'){
			this.collection = document.getElementsByClassName(selector.substring(1, selector.length));
		}
		//Selector is tag name
		else if(typeof(selector)=='string' &&  (selector.charAt(0)!='#' && selector.charAt(0)!='.')){
			this.collection = document.getElementsByTagName(selector);
		}
		//Selector is DOM
		else if(typeof(selector)=='object'){
			this.collection = [selector];
		}
		
		//This should not return other functions - get, each
		return this;
	};
	
	/*	
		Description: Return collection (zero-indexed) as plain JavaScript array
		param: 	null/index (number)
		return: object (if index passed),
				array (if no index passed)
		usage: 	$(".header").get(),
				$("h2").get(0)
	*/
	obj.get = function(index){
		return (!isNaN(index) && typeof(index)=="number") ? this.collection[index] : this.collection;
	};
	
	/*	
		Description: Check if the value passed is a number
		param: 	string/object/number/boolean
		return: true/false
		usage: 	$.isNumeric("-10"),
				$.isNumeric("0"),
				$.isNumeric(0xFF),
				$.isNumeric( {} )
				$.isNumeric( true )
				$.isNumeric( null )
	*/
	obj.isNumeric = function(value){
		console.log(value);
		//Return boolean
	};
	
	/*	
		Description: Iterates though object or array and executes the callback for every iteration
		param: 	key (object as an array)/key (object with properties)
		param: 	value (callback function with key)
		return: 
		usage: 	$.each(['AA','BB','CC'], function(){ }),
				$.each({'A':'Harry', 'B':'Sam', 'C':'Kyler'}, function(key, value){  })
	*/
	obj.each = function(object, callback){
		console.log(key + " | " + value);
		//Return iterator
	};
	
	//Call the object function to always return jQuery object
	//IMPORTANT: Can we call a constructor here so getDOM() and all other functions stay private?
	//IMPORTANT: Or can we use the module design pattern (return {'property1':methodName}) for public/private abstraction
	if(selector)
		return obj.getDOM(selector);
		//return new obj.getDOM(selector);
	else
		return 	{
					"isNumeric": obj.isNumeric,
					"each": obj.each
				};
});

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