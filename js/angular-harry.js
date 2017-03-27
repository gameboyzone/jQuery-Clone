/*******************************************/
/***************** jQuery ******************/
/*******************************************/

//Module Design pattern allows copying properties and functions into $ and having an isolated module
var $ = (function(selector){
	/***	Define objects	***/
	var jQuery = 	{ 	
						"fn": {},			//fn object for all jQuery functions
						"author": "Harry Shah",
						"version": "1.0.0"
					};
	
	/***	Define functions	***/
	/*	
		Description: Return jQuery object based on selector passed
		param: 	selector (string)/DOM node (object)
		return: object
		usage: 	$(selector),
				$(selector).getDOM(),
				$.getDom() ??
	*/
	jQuery.fn.getDOM = function(selector) {
		//Handle case when no selector passed
		if(!selector){
			//return 
		}
		
		this.collection = [];					//JS collection of DOM nodes
		this.selector = selector;
		
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
		
		this.length = this.collection.length;
		
		//return this;
	};
	
	/*
		$						- Return getDom function
		$()						- Returns object from getDom() function
		$(selector).each()		- each() accessible from constructor object
		$.each()				- each() accessible from $ object
	/*
	
	/*	
		Description: Return collection (zero-indexed) as plain JavaScript array
		param: 	null/index (number)
		return: object (if index passed),
				array (if no index passed)
		usage: 	$(".header").get(),
				$("h2").get(0)
	*/
	jQuery.fn.get = function(index){
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
	jQuery.fn.isNumeric = function(value){
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
	jQuery.fn.each = function(object, callback){
		console.log(object + " | " + callback);
		//Return iterator
	};
	
	/*	
		Description: Determine if browser is KHTML compliant
		return: boolean
		usage: 	$.isKhtml()
	*/
	jQuery.fn.isKhtml = function(){
		return (navigator && navigator.userAgent && navigator.userAgent.indexOf("KHTML") !== -1);
	};
	
	/*	
		Description: Determine if browser is Internet Explorer
		return: boolean
		usage: 	$.isIE()
	*/
	jQuery.fn.isIE = function(){
		return (navigator && navigator.userAgent && navigator.userAgent.indexOf("MSIE") !== -1);
	};
	
	//Design Pattern: Prototype
	//When a property is sought and it isn't found in the object itself, then it is taken from the object's constructor's prototype.
	//The prototype mechanism is used for inheritance. It also conserves memory.
	//Another option was Module design pattern for public-private abstraction. Refer http://bit.ly/2nRGkik
	//Example: return {'find':findMethod} where $.find('each') method will take the required function as an argument
	//this.prototype.constructor.prototype = jQuery.fn;
	jQuery.fn.getDOM.prototype = jQuery.fn;
	
	//Call constructor to return jQuery object
	return new jQuery.fn.getDOM(selector);
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