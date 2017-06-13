'use strict';

/**
 * @ngdoc overview
 * @name templateApp
 * @description
 * # templateApp
 *
 * Main module of the application.
 */
angular
    .module('sns', [
        'ngCookies',
        'ngResource',
        'ui.router',
        'ui.bootstrap',

        'sns.cart.controller',
        'sns.products.controller'
        
        
    ])

    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

    	$urlRouterProvider.otherwise("/home");
    	$stateProvider

    	/** DASHBOARD */
    	.state('home', {
    		url: '/home',
    		templateUrl: 'home.html'
    	})

    	.state('about', {
    		url: '/about',
    		templateUrl: 'app/view/about/about.html'
    	})
    	
    	.state('gallery', {
    		url: '/gallery',
    		templateUrl: 'app/view/gallery/portifolio.html'
    	})
    	
    	.state('detail', {
    		url: '/detail/:itemId',
    		templateUrl: 'app/view/gallery/product.detail.html',
    		controller: function($scope, $stateParams){
    			
    			$scope.products = [
    	    	                   {	"idProduct":"0",
    	    	                	   "nomeProduto":"First Product",
    	    	                	   "preco":"24,99",
    	    	                	   "descricao":"Descrição produto 1",
    	    	                	   "quantidade":1
    	    	                   },
    	    	                   {	"idProduct":"1",
    	    	                	   "nomeProduto":"Second Product",
    	    	                	   "preco":"64,99",
    	    	                	   "descricao":"Descrição produto 2",
    	    	                	   "quantidade":1
    	    	                   },
    	    	                   {	"idProduct":"2",
    	    	                	   "nomeProduto":"Third Product",
    	    	                	   "preco":"74,99",
    	    	                	   "descricao":"Descrição produto 3",
    	    	                	   "quantidade":1
    	    	                   },
    	    	                   {	"idProduct":"3",
    	    	                	   "nomeProduto":"Fourth Product",
    	    	                	   "preco":"84,99",
    	    	                	   "descricao":"Descrição produto 4",
    	    	                	   "quantidade":1
    	    	                   },
    	    	                   {	"idProduct":"4",
    	    	                	   "nomeProduto":"Fifth Product",
    	    	                	   "preco":"94,99",
    	    	                	   "descricao":"Descrição produto 5",
    	    	                	   "quantidade":1
    	    	                   }

    	    	                   ]
    			
    			$scope.pruductItem = $scope.products[$stateParams.itemId];
    			
    		}
    	})


    }])
    
    .controller("MainController", function($scope, $cookies){
    	
    	$scope.loadCart = function() {
    		
    		$scope.items = $cookies.getObject('myCart');
    		
		}
    	
    })
    
    .controller("LoginController", function($scope, $cookies){
    	
    	$scope.username = "Log in";
    	$scope.isLogged = false;
    	
    })
    
    .run(['$cookies', '$rootScope', function($cookies, $rootScope){
    	
    	//$cookies.getObject("myCart");
    	//console.log($cookies.getObject("myCart"));
    	
    	
    }]);
    
