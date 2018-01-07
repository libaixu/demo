;(function($, win, doc, undefined){
	$.fn.extend({
		fnName:function( _option ){
			var _defalut = {
				a:111,
				b:2221
			}
			var _config = $.extend( {}, _defalut, _option );
			
			// console.log( _config );
			this.html( _config.b );

			var tempArr = [];

			this.set = function(n){
				tempArr.push(n);
				console.log( tempArr );
			}
			this.get = function(){
				console.log(tempArr);
			}
			console.log( tempArr );
			
			return this;


		}
	});
})(jQuery, window, document);