myApp.controller("UserController",function($scope,$http,$rootScope,$location,$cookieStore)
		{
	
		$scope.User={emailID:'',name:'',password:'',details:'',role:'',status:'',reason:''};
		
		$scope.register=function()
		{	
			$scope.User.role='N';
			
			$http.post('http://localhost:8081/ColloborationRestService/user/create',$scope.User)
			.then(function(response)
					 {
					 console.log('The user registered successfully');
					 alert('User Registered Successfully');
					 console.log(response.statusText);
					 
					 });
			
		}
		
		$scope.update = function() {
			$scope.User.role='N';
			$scope.User.status='N';
			console.log('Entered into the Update  User method ');
			$http.put("http://localhost:8081/ColloborationRestService/user/update",$scope.User)
			.then(function(response) {
				console.log('Status text:' + response.statusText);
				alert('updated details successfully..!!');
				$location.path("/profile");
			});

	}
		
		
		$scope.checklogin=function()
		{
			alert("Checking Login Process");
			
			$http.post('http://localhost:8081/ColloborationRestService/user/validate',$scope.User)
			.then(function(response)
					{
				alert("inside Login Process");
						$scope.User=response.data;
						$rootScope.currentUser=$scope.User;
						console.log($rootScope.currentUser);
						$cookieStore.put('user',response.data);
						console.log('data written into cookiestore');
						$location.path("/loggedin");
					});
		}
		$scope.logout=function()
		{
			console.log("entering into logout function");
			delete $rootScope.currentUser;
			$cookieStore.remove('user');
			$location.path("/logout");
		}
		
	
		});