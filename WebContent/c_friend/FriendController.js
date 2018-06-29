myApp.controller("FriendController",function($scope,$http,$rootScope,$location)
		{
		$scope.friend={friendID:0,emailID:'',friendemailID:'',status:''};
		$scope.User={emailID:'',name:'',password:'',details:'',role:'',status:'',reason:''};
		$scope.friendList;
		$scope.pendingFriendList;
		$scope.suggestedFriendList;
		
		function showFriendList()
		{
			console.log('iam in show friend list method');
			
			$http.get('http://localhost:8081/ColloborationRestService/showFriendList')
			.then(function(response)
					{
				
				$scope.friendList=response.data;
				console.log($scope.friendList)
					});
		}
		function showPendingFriendRequest(){
			console.log('iam in show pending friend request');
			
			$http.get('http://localhost:8081/ColloborationRestService/showPendingRequest')
			.then(function(response){
				
				
				$scope.pendingFriendList=response.data;
				console.log($scope.pendingFriendList)
			});
		}
		
		
		function showSuggestedFriend(){
			console.log('iam in showSuggestedfriend request');
		
			$http.get('http://localhost:8081/ColloborationRestService/showSuggestedFriend',$scope.friend)
			.then(function(response){
				
			
				$scope.suggestedFriendList=response.data;
				console.log($scope.suggestedFriendList);
			});
		}
		
		$scope.acceptFriend=function(friendID){
			console.log('iam in accepting friend request');
			$http.get('http://localhost:8081/ColloborationRestService/acceptFriendRequest/'+friendID)
			.then(function(response){
				$location.path('/showFriendList');
			});
			
		}
		
		
		$scope.sendFriendReq=function(name){
			console.log('iam in send friend request');
			
			$http.post('http://localhost:8081/ColloborationRestService/sendFriendRequest/'+name)
			.then(function(response){
				console.log('inside send friend request');
				$location.path('/showFriendList');
			});
		}
		
		
		$scope.unfriend=function(friendID){
			console.log('iam in unfriend method');
			$http.get('http://localhost:8081/ColloborationRestService/deleteFriendRequest/'+friendID)
			.then(function(response){
				console.log('deleted');
				console.log(response.data);
				$location.path('/showFriendList');
			});
				
		}
		
		showFriendList();
		showSuggestedFriend();
		showPendingFriendRequest();
		});