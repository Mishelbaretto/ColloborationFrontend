var myApp=angular.module("myApp",['ngRoute','ngCookies']);

myApp.config(function($routeProvider)
		{
			alert("I am route module")
			$routeProvider.when("/",{templateUrl:"/index.html"})
			.when("/login",{templateUrl:"c_user/Login.html"})
			.when("/loggedin",		{templateUrl : "pages/homepage.html"})
			.when("/register",{templateUrl:"c_user/Register.html"})
			.when("/profile",{templateUrl:"c_user/Profile.html"})
			.when("/aboutus",{templateUrl:"pages/AboutUs.html"})
			.when("/contactus",{templateUrl:"pages/ContactUs.html"})
			
			.when("/blog",{templateUrl:"c_blog/Blog.html"})
			.when("/showBlog",{templateUrl:"c_blog/ShowAllBlog.html"})
			.when("/AdminBlog",{templateUrl:"c_blog/AdminBlog.html"})
			.when("/myBlog",{templateUrl:"c_blog/MyBlog.html"})
			.when("/blogComment",{templateUrl:"c_blog/BlogComment.html"})
			
			
			.when("/showjobs",{templateUrl:"c_job/ShowJob.html"})
			.when("/appliedjobs",{templateUrl:"c_job/AppliedJob.html"})
			.when("/postjob",{templateUrl : "c_job/AdminJob.html"})
			.when("/addjob",{templateUrl:"c_job/JobApplicationForm.html"})
			.when("/applyjob",		{templateUrl : "c_job/ApplyJob.html"})
			
			.when("/AddForum",{templateUrl:"c_forum/Forum.html"})
			.when("/ShowForum",{templateUrl:"c_forum/ShowForum.html"})
			.when("/AdminForum",{templateUrl:"c_forum/AdminForum.html"})
			.when("/MyForum",{templateUrl:"c_forum/MyForum.html"})
			
			
			.when("/BlogComment",{templateUrl:"c_blog/BlogComment.html"})
			
			
			.when("/profilePicture",{templateUrl:"c_user/ProfilePicture.html"})
			
			
			
			.when("/ShowSuggestedFriendList",{templateUrl:"c_friend/ShowSuggestedFriendList.html"})
			.when("/showFriendList",{templateUrl:"c_friend/ShowFriendList.html"})
			.when("/ShowPendingFriendList",{templateUrl:"c_friend/ShowPendindFriendList.html"})
			
			
			.when("/chat",{templateUrl:"c_chat/Chat.html"})
			.when("/logout",{templateUrl:"c_user/Login.html"});

			
		});
myApp.run(function($rootScope,$cookieStore){
	console.log('iam in run function');
	console.log($rootScope.currentUser);
	if($rootScope.currentUser==undefined)
		{
		$rootScope.currentUser=$cookieStore.get('user');
		}
	
});