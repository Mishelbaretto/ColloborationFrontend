myApp.controller("BlogController",function($scope,$rootScope,$http,$location)
{
	$scope.blog={'blogId':0,'blogName':'','blogContent':'','createDate':'','likes':0,'emailID':'','status':''};
	
	$scope.blogData;
	$scope.allBlogData;
	$scope.myBlogs;
	
	$scope.insertBlog=function()
	{
		console.log('Adding Blog Information');
		alert("inside blog");
		$http.post('http://localhost:8081/ColloborationRestService/addBlog',$scope.blog)
		.then(function(response)
		{
			$location.path('/blog');
		});
	}
	$scope.addBlogComment=function()
	{
		console.log("inside comment blog");
		$http.post("http://localhost:8081/ColloborationRestService/addComment",$scope.blogcomment)
		.then(function(response)
		{
			console.log('Comment added');
		});
		
	}
	$scope.blogComment=function(blogId)
	{
		$rootScope.blogId=blogId;
		$location.path("/blogComment");
	}
	
	$scope.incLikes=function(blogId)
	{
		console.log('Incrment Likes');
		$http.get('http://localhost:8081/ColloborationRestService/incrementLike/'+blogId)
		.then(function(response)
				{
				$location.path('/blog');
				});
	}
	
	$scope.approve=function(blogId)
	{
		console.log('Approve the Blog');
		$http.get('http://localhost:8081/ColloborationRestService/approveBlog/'+blogId)
	}
		
	$scope.reject=function(blogId)
	{
		console.log('Reject the Blog');
		$http.get('http://localhost:8081/ColloborationRestService/rejectBlog/'+blogId)
	}
	
	function listAllBlogs()
	{
		console.log('List All Blog');
		$http.get('http://localhost:8081/ColloborationRestService/showAllApprovedBlogs')
		.then(function(response)
				{
					console.log(response.data);
					$scope.allBlogData=response.data;
				});
	}
	
	function myBlogs()
	{
		console.log('List of My Blog');
		$http.get('http://localhost:8081/ColloborationRestService/showAllBlogs')
		.then(function(response)
				{
				console.log(response.data);
				$scope.myBlogs=response.data;
				});
	}
	
	$scope.deleteBlog=function(blogId)
	{
		$http.get('http://localhost:8081/ColloborationRestService/deleteBlog/'+blogId)
		.then(function(response)
				{
				console.log(response.data);
				});
	}

	listAllBlogs();
	myBlogs();
});
		