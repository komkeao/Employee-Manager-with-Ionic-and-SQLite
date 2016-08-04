app.controller('AddController', ['$scope','$cordovaSQLite','$state', function($scope,$cordovaSQLite,$state){
	$scope.save=function(fname,lname,email,tel){
		$cordovaSQLite.execute(db, 'INSERT INTO Employee (fname,lname,email,tel,date) VALUES (?,?,?,?,?)', [fname,lname,email,tel,new Date().toISOString()])
        .then(function(result) {
           console.log('Insert Cmplete');
            $state.go('main');
        }, function(error) {
         console.log('Insert Error'+error.message);
        })
	}
}])