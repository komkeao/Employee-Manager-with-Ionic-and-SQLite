app.controller('EditController', ['$stateParams','$scope','$cordovaSQLite','$state', function($stateParams,$scope,$cordovaSQLite,$state){
	$scope.id=$stateParams.id;
	$scope.fname=$stateParams.fname;
	$scope.lname=$stateParams.lname;
	$scope.tel=$stateParams.tel;
	$scope.email=$stateParams.email;
	$scope.save=function(id,fname,lname,email,tel){
		$cordovaSQLite.execute(db, 'UPDATE Employee SET fname=?,lname=?,email=?,tel=? WHERE id=?', [fname,lname,email,tel,id])
        .then(function(result) {
           console.log('Insert Cmplete');
            $state.go('main');
        }, function(error) {
         console.log('Insert Error'+error.message);
        })


	}


}])