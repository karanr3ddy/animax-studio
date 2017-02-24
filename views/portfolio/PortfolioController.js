module.exports =  function($scope,fgDelegate,$rootScope){
	var url="/assets/img/portfolio/";
	var pics=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
	 $scope.photos=[];
	$.each(pics,function(i, val) {
		 
		var photo={
			id: 'p'+i,
			'title': 'A nice day!', 
			src: url+val+'.jpg'
			};
			$scope.photos.push(photo);
	});
 	  $scope.updateGrid = function(){
 	   var portfolioGrid = fgDelegate.getFlow('portfolioGrid');

        // then you can:
        portfolioGrid.minItemWidth += 20;
        portfolioGrid.refill(true);
  
    } 
    $rootScope.isPortfolio=true;
    
}