angular.module('sns.products.controller', [])

.controller("MainProductsController", function($scope, $stateParams, $cookies){

	$scope.products = [
	                   {	"idProduct":"0",
	                	   "nomeProduto":"First Product",
	                	   "preco":"24.99",
	                	   "descricao":"Descrição produto 1",
	                	   "quantidade":0
	                   },
	                   {	"idProduct":"1",
	                	   "nomeProduto":"Second Product",
	                	   "preco":"64.99",
	                	   "descricao":"Descrição produto 2",
	                	   "quantidade":0
	                   },
	                   {	"idProduct":"2",
	                	   "nomeProduto":"Third Product",
	                	   "preco":"74.99",
	                	   "descricao":"Descrição produto 3",
	                	   "quantidade":0
	                   },
	                   {	"idProduct":"3",
	                	   "nomeProduto":"Fourth Product",
	                	   "preco":"84.99",
	                	   "descricao":"Descrição produto 4",
	                	   "quantidade":0
	                   },
	                   {	"idProduct":"4",
	                	   "nomeProduto":"Fifth Product",
	                	   "preco":"94.99",
	                	   "descricao":"Descrição produto 5",
	                	   "quantidade":0
	                   }

	                   ];
	
	
	
	$scope.getImcompleteOrder = function(){
		return $cookies.getObject('myCart');
	}
	
	
	
	$scope.addToCart = function(product) {

		if ( $cookies.getObject('myCart') == undefined ) {
			
			if ($scope.fullCart == undefined) {
				$scope.fullCart = new Array();
			}
		}else{
			$scope.fullCart = $cookies.getObject('myCart');
		}
		
		
		
		var keyCookie = Math.random();
		

		var updated = updateCart($scope.fullCart, product);
		
		$cookies.putObject('myCart', updated);
		
	}
	
	
	function updateCart(cart, productAdded){

		var updatedCart = new Array();
		
		if ( !contains(cart, productAdded) ) {
			
			productAdded.quantidade = productAdded.quantidade+1;
			
			cart.push(productAdded);
				
			updatedCart = cart;

		}else{
			
			angular.forEach(cart, function(item, index) {

				if (item == productAdded) {

					productAdded.quantidade = productAdded.quantidade+1;

					cart.splice(index, 1, productAdded);
					
					updatedCart = cart;
					
				}
				
			});
			
		}

		return updatedCart;

	}
	
	function contains(array, itemAdded) {
		
		var hasSameProduct = false;
		
		angular.forEach(array, function(item, index) {
			
			if (array[index].$$hashKey == itemAdded.$$hashKey) {

				hasSameProduct = true;
				
			}

		});
		
		return hasSameProduct;
		
	}
	
	

});