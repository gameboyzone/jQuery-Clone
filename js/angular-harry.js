/*******************************************/
/***************** jQuery ******************/
/*******************************************/

/*
	Description: jQuery function definition on selector passed
	param: 	selector (string)/DOM node (object)
	return: jQuery anonymous function
	Design pattern: Module pattern allows abstraction by copying properties and functions into $. 
					This means the properties and functions are scoped to this object and does not pollute the global scope.
					Note: 	Module pattern can also be implemented by enclosing only the return statement in the anonymous function.
							This allows the freedom to modify the $ and jQuery.fn objects outside the scope of the module.
	usage:	$					- Return the anonymous function
			$()					- Returns object from getDom() function i.e. constructor
			$(selector).each()	- each() accessible from constructor object
			$.each()			- each() accessible from $ object
*/
var $ = function(selector){
	/***	Define objects	***/
	var jQuery = 	{	
						"fn": {},			//fn property will contain all jQuery functions
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
				$.getDom()
	*/
	jQuery.fn.getDOM = function(selector) {
		//Handle case when no selector passed
		if(!selector){
			//Do nothing
		}
		
		this.collection = [];		//JS collection of DOM nodes
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
		
		//Why return this? Since every call to this constructor will be a new object, hence 'this' refers to the current object
		return this;
	};
	
	/*	
		Description: Converts property-based object to plain JavaScript array
		param: 	object
		return: array
		usage: 	$.toArray({"A":"aaa", "B":"bbb", "C":"ccc"})
	*/
	jQuery.fn.toArray = function(object){
		//Check invalid cases
		if(!object || typeof object !=='object')
			return null;
		
		var arr = [];
		
		for(var key in object){
			arr.push(object[key]);
		}
		
		return arr;
	};
	
	/*	
		Description: Copies properties from property-based object to target object
		param: 	source (object)
		param: 	target (object: not mandatory)
		return: target (object)
		usage: 	$("div").extend({"A":"aaa", "B":"bbb"})
				$("h1").extend({"A":"aaa", "B":"bbb"}, obj)
				$.extend({"A":"aaa", "B":"bbb"})
				$.extend({"A":"aaa", "B":"bbb"}, obj)
	*/
	jQuery.fn.extend = function(source, target){
		//Check invalid cases
		if(source===undefined || ['object', 'function'].indexOf(typeof source)==-1)
			return null;
		
		//If target not provided, consider default target as current instance
		if(!target || ['object', 'function'].indexOf(typeof target)==-1)
			target = this;
		
		for(var key in source){
			if(source[key]!==undefined)		//Existing properties in target will be replaced
				target[key] = source[key];
		}
		
		return target;
	};
	
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
	
	/*
		Design Pattern: Prototype
		1.	When a property is sought and it isn't found in the object itself, then it is taken from the object's constructor's prototype.
			This prototype mechanism will allow all jQuery instance objects (i.e. $()) access to jQuery.fn objects via inheritance. It also conserves memory.
			Refer: http://bit.ly/2nEYsjs
		2. 	Another option was Module design pattern for public-private abstraction. Refer http://bit.ly/2nRGkik
			Example: return {'find':findMethod} where $.find('each') method will take the required function as an argument
		3. 	There is no generic __lookupGetter for prototype. There is a Proxy class as a new feature in ES6 but does not work in IE.
			Refer: https://mzl.la/2nMY277 and https://mzl.la/1ZCMa84
	*/
	this.constructor = jQuery.fn.getDOM;
	this.constructor.prototype = jQuery.fn;
	
	//Using 'new' allows defining constructor for the returned jQuery object. Using $() will fire this constructor
	return new this.constructor(selector);
};

/*
	Description:Create instance of jQuery. This instance will have access to all jQuery methods which can be found in the prototype of the constructor.
				Call extend() method to copy all jQuery methods from constructor's prototype to root
				Refer: http://bit.ly/2nF3OLu for jQuery.fn.extend implementation
*/
var jQueryInstance = new $();
jQueryInstance.extend(jQueryInstance.getDOM.prototype, $);

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
	angular.element = $;

    angular.doSomething = function (target, ev){
        var ev = ev || window.event;
		
		return {};
	};
})();