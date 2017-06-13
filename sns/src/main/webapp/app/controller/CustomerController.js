angular.module('sns', [])

.controller("RegisterController", function($scope){
	
	$scope.getAddres = function(){
		
	    console.log("Aqui");
		
		$.ajax({

            url: "http://www.addressify.com.au/scripts/addressAutoComplete2.php?term=11/67-69%20HARRIS%20ST,%20FAIRFIELD%20NSW%202165",
            async: true

        }).done(function (data) {
            console.log(data);
        }).error(function (data) {
            alert("Endereço não encontrado. Digite manualmente");
        });
		
	}

});