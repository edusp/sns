angular.module('sns.cart.controller', [])

.controller("CartController", function ($scope, $sce, $cookies) {
	
	$scope.cartPopover = {
		    content: 'Hello, World!',
		    templateUrl: 'app/templates/popover-template/cart-popover-template.html',
		    title: 'Title',
		    
		    placementSelected: 'bottom',
		    trigger: 'outsideClick'
		              
		  };
	

			
	
	
	$scope.addToCart = function(product) {

		$scope.cart = [];





}









});