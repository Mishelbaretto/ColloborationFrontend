myApp.controller("JobController", function($location, $scope, $rootScope, $http)
{
	
	$scope.Job ={id:'',title:'',description:'',qualification :'',salary :'', status :'',no_of_openings:'',posted_date :''};
	
	$scope.JobApplication = {id:'',emailID :'',jobID:'',applied_date:'', status:'',reason:''};
	$scope.joblist;
	$scope.jobapplist;
	$scope.pJob;
	$scope.jobdata;
	$scope.myjobs;
	function jobList()
	{
		console.log('jobs displaying');
		$http.get('http://localhost:8081/ColloborationRestService/list')
		.then(function(response)
				{
					$scope.joblist = response.data;
					$rootScope.jobs = $scope.joblist;
					
				});
	}
	jobList();
	$scope.view=function()
	{
		console.log("call VIEW");
		$location.path('/appliedjobs');
	};
	$scope.add=function()
	{
		console.log("call ADD");
		$location.path('/addjob');
	};
	
	$scope.addJob = function()
	{
		console.log('inside add job')
		$http.post('http://localhost:8081/ColloborationRestService/save', $scope.Job)
		           
		.then(function(response)
				{
			alert('Registered for Job Successfully')
			$location.path('/addjob');
				});
	}
	
	
	function listmyjobs()
	{
		console.log("fetching my jobs");
		
		$http.get('http://localhost:8081/ColloborationRestService/showmyjobs' )
		.then(function(response)
		{
			console.log("inside my jobs");
			$scope.jobapplist = response.data;
			$rootScope.myjobs = $scope.jobapplist;		
		});
	}
	listmyjobs();
	
	$scope.applyJob = function(id)
	{
		console.log("Apply my job");
		
		
		$http.post('http://localhost:8081/ColloborationRestService/job/get/'+id)
		.then(function(response)
				{
			$scope.pJob = response.data;
			$rootScope.jobdata = $scope.pJob;
			$location.path("/applyjob");
			console.log($rootScope.jobdata);
			
				
					
				});
	}
	$scope.deletejob = function(id)
	{
		$http.delete('http://localhost:8081/ColloborationRestService/job/delete/'+id)
		.then(function(response)
				{
					alert("job delete succesfully");
					$location.path("/showjobs");
				});				
	}
	
	$scope.apply = function()
	{
		console.log('inside apply');
		$http.post('http://localhost:8081/ColloborationRestService/apply/job',$scope.JobApplication)
		.then(function(response)
				{
					alert('Registered for Job Successfully')
					$location.path("/appliedjobs");
				});
	}
	
});