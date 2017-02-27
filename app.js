require('angular');
require('./libs/angular-animate');
var PortfolioController=require('./views/portfolio/PortfolioController');
 require('./libs/angular-route');
require('./libs/ngFlowGrid/src/ngFlowGrid');
require('./libs/ng-simple-parallax/src/ngParallax');
require('./libs/ng-parallax/angular-parallax');
require('./libs/angular-scroll/angular-scroll');
var mainApp=angular.module('animax', [require('angular-ui-router'),'ngAnimate','ngFlowGrid','ngRoute', 'ngParallax']);

mainApp
.config(function($stateProvider, $urlRouterProvider)
	{
		$urlRouterProvider.otherwise("/home");
		$stateProvider
			.state('home', {
				name: 'home',
				url: '/home',
				templateUrl: './views/home/home.html',
				controller:'HomeController'
			})
			.state('portfolio',{
				name: 'portfolio',
				url: '/portfolio',
				templateUrl: './views/portfolio/portfolio.html',
				controller:'PortfolioController'
			});
		});
mainApp.run(function($rootScope,$state, $location, $anchorScroll,$window){
 
  $rootScope.screenHeight={'min-height':$window.innerHeight+'px'};

       angular.element($window).bind('resize', function(){

       $rootScope.screenHeight={'min-height':$window.innerHeight+'px'};
 

         // manuall $digest required as resize event
         // is outside of angular
         $rootScope.$digest();
       });
	 
	


	//when the route is changed scroll to the proper element.
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    if($location.hash()) $anchorScroll();  
  });
$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
   $rootScope.preloader = true;
});

  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
       $rootScope.preloader = false;
    });

});

mainApp.controller('PortfolioController', PortfolioController);
 
mainApp.controller('HomeController',  function($rootScope,$scope){
 
	$rootScope.isPortfolio=false;
	   console.log("portfolio is set to "+ $rootScope.isPortfolio);
});
 