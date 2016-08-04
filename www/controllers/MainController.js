app.controller('MainController', ['$scope','$cordovaSQLite','$state',function($scope,$cordovaSQLite,$state){
	// Execute SELECT statement to load message from database.
        $cordovaSQLite.execute(db, 'SELECT * FROM Employee ORDER BY id DESC')
            .then(
                function(result) {
                    if (result.rows.length > 0) {
                    	 console.log("SELECT Complete")
                    	 var itemsColl = [];
						for (var i = 0; i < result.rows.length; i++) {
							itemsColl[i] = result.rows.item(i);
      				 	};
        				$scope.emp = itemsColl;  
    				}
                },
                function(error) {
                    console.log("Error on loading: " + error.message)
                }
            );
         $scope.del=function(id){
         	 $cordovaSQLite.execute(db, 'DELETE FROM Employee WHERE id=?',[id])
            .then(
                function(result) {
                    refresh();
                    console.log("DELETE Complete");
                },
                function(error) {
                    refresh();
                    console.log("Error DELETE: " + error.message)
                }
            );
         }
    function refresh(){
                    $cordovaSQLite.execute(db, 'SELECT * FROM Employee ORDER BY id DESC')
            .then(
                function(result) {
                    if (result.rows.length > 0) {
                         console.log("refresh Complete")
                         var itemsColl = [];
                        for (var i = 0; i < result.rows.length; i++) {
                            itemsColl[i] = result.rows.item(i);
                        };
                         $scope.emp = itemsColl;  
                    }else{
                        var itemsColl = [];
                        $scope.emp = itemsColl;  
                    }
                },
                function(error) {
                     var itemsColl = [];
                        $scope.emp = itemsColl;  
                    console.log("Error on loading: " + error.message)
                }
            );
         }
    $scope.edit = function(empItem){
        $state.go('edit',{id:empItem.id,fname:empItem.fname,
            lname:empItem.lname,
            tel:empItem.tel,
            email:empItem.email});


    }

}])