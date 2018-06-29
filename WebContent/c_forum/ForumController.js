myApp.controller("forumController",function($scope,$rootScope,$location,$http)
{
	$scope.forum={'forumId':0,'forumName':'','forumContent':'','createDate':'','likes':0,'emailID':'','status':''};
	
	$scope.listForumData;
	
	$scope.approvedForumList;
	
	$scope.insertForum=function()
	{
		console.log('Inserting the Forum Data');
		console.log('Forum Name:'+$scope.forum.forumName);
		console.log('Forum Content :'+$scope.forum.forumContent);
		
		$http.post("http://localhost:8081/ColloborationRestService/addForum",$scope.forum)
		.then(function(response)
				{
					alert("Status Text:"+response.statusText);
					$location.path('/AddForum');
					
				})
	}
	
	$scope.incLikes=function(forumId){
		$http.get("http://localhost:8081/ColloborationRestService/incLike/"+forumId)
		.then(function(response){
			alert("incremented");
		})
	}
	
	$scope.approveForum=function(forumId){
		console.log("in the approval")
		$http.get("http://localhost:8081/ColloborationRestService/approveForum/"+forumId)
		.then(function(response){
			console.log("approved the forum");
		})
	}
	
	$scope.rejectForum=function(forumId){
		$http.get("http://localhost:8081/ColloborationRestService/rejectForum/"+forumId)
		.then(function(response){
			alert("Rejecting the forum");
		})
	}
	
	
	
	function showForumList()
	{
		alert("inside showforum list");
		console.log('At the begining of showForumList')
		$http.get("http://localhost:8081/ColloborationRestService/listForum")
		.then(function(response)
				{
			
			console.log('inside showforumlist');
					$scope.listForumData=response.data;
					console.log($scope.listForumData);
				});
	}
	$scope.deleteForum=function(forumId)
	{
		$http.get('http://localhost:8081/ColloborationRestService/deleteForum/'+forumId)
		.then(function(response)
				{
				console.log(response.data);
				$location.path("/ShowForum");
				});
	}
	console.log("Inside ForumContorller.js - calling showForumList")
	showForumList();
	
});