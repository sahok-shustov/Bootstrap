courseListApp.controller("courseListCtrl", function($scope) {
    var model = {
        user: "User1",
        courses: [{
            name: "HTML, CSS",
            passed: "Yes"
        }, {
            name: "JavaScript Essential",
            passed: "Yes"
        }, {
            name: "JavaScript Advanced",
            passed: "Yes"
        }, {
            name: "HTML5 &amp; CSS3",
            passed: "Yes"
        }, {
            name: "AngularJS ",
            passed: "No"
        }]
    };
    
    $scope.data = model;
    console.log($scope.data);
    console.log($scope.courseName);


    $scope.addNewCourse = function () {
    	$scope.temp = $scope.courseName;
    	console.log($scope.courseName);

    	$scope.data.courses.push({
    		name: $scope.courseName,
    		passed: "No"
    		
    	});
    	//$scope.courseName = "";
    }

});