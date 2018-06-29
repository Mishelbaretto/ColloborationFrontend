myApp.controller("BlogCommentController",function($scope,$http,$rootScope,$location) 
{
	$scope.blogcomment={'commentId':'','commentText':'','emailID':'','blogId':'','commentDate':''};
	$scope.blogData;
	$scope.blogCommentData;
	
	function listMyBlogComment()
	{
		console.log($rootScope.blogId);
		$http.get('http://localhost:8081/ColloborationRestService/listAllBlogComments/'+$rootScope.blogId).then(function(response)
		{
			$rootScope.blogCommentData= response.data;
			$rootScope.blogId=blogId;
			console.log("Root scope blogid value: "+$rootScope.blogId);
			$location.path("/blogComment");
		});
	}
	$scope.addBlogComment=function()
	{
		console.log("inside comment blog");
		$http.post("http://localhost:8081/ColloborationRestService/addComment",$scope.blogcomment)
		.then(function(response)
		{
			console.log('Comment added');
			console.log(response.statusText);
			$location.path("/showBlog");
		});
		
	};
	function myBlog()
	{
		$http.get('http://localhost:8081/ColloborationRestService/getABlog/'+$rootScope.blogId).then(function(response){
			$scope.blogData= response.data;
		});
	}
	
	myBlog();
	listMyBlogComment();
});