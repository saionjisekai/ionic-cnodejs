angular.module('starter.controllers', [])

	.service('CacheService', function($window){
		var append = function(key, value){
		};
		var save = function(key, value){
			$window.localStorage.setItem(key, typeof value == 'object' ? JSON.stringify(value) : value);
		};
		var get = function(key){
			return $window.localStorage.getItem(key) || null;
		};
		var empty = function(key){
			$window.localStorage.removeItem(key);
		};
		return {
			append: append,
			save: save,
			get: get,
			empty: empty
		};
	})

	.factory('TopicsFactory', function($rootScope){

		var topics = [];

		/**
		 * 更新topics
		 * @param newTopics
		 * @param append true:追加 false:替换
		 */
		var update = function(newTopics, append){
			if ( append ) {
				topics.push(newTopics);
			} else {
				topics = newTopics;
			}
			$rootScope.$broadcast('topics.update', topics);
		};

		return {
			topics: topics,
			update: update
		}
	})

	.factory('TopicFactory', function($rootScope){

		var topic = {};

		/**
		 * 更新topic
		 * @param newTopic
		 */
		var update = function(newTopic){
			$rootScope.$broadcast('topic.update', topics = newTopic);
		};

		return {
			update: update
		}
	})

	.filter('TabFilter', function(){
		var tabs = {
			ask: '提问',
			share: '分享',
			job: '招聘'
		};
		return function(tab, top){
			return top ? '置顶' : (tabs[tab] || '自由');
		}
	})

	.controller('AppCtrl', function($scope, $ionicModal, $timeout){
		// Form data for the login modal
		$scope.loginData = {};

		// Create the login modal that we will use later
		$ionicModal.fromTemplateUrl('templates/login.html', {
			scope: $scope
		}).then(function(modal){
			$scope.modal = modal;
		});

		// Triggered in the login modal to close it
		$scope.closeLogin = function(){
			$scope.modal.hide();
		};

		// Open the login modal
		$scope.login = function(){
			$scope.modal.show();
		};

		// Perform the login action when the user submits the login form
		$scope.doLogin = function(){
			console.log('Doing login', $scope.loginData);

			// Simulate a login delay. Remove this and replace with your login
			// code if using a login system
			$timeout(function(){
				$scope.closeLogin();
			}, 1000);
		};
	})

	// 主题首页
	.controller('TopicsCtrl', function($scope, $http, CacheService, TopicsFactory){

		var topics = CacheService.get('topics');

		$scope.refresh = function(){
			$http.get(API.TOPICS).success(function(response){
				CacheService.save('topics', response.data);
				TopicsFactory.update(response.data);
			});
		};

		$scope.$on('topics.update', function(event, newTopics){
			$scope.topics = newTopics;
			console.log(newTopics);
		});

		if ( topics != null ) {
			$scope.topics = JSON.parse(topics);
		} else {
			$scope.refresh();
		}

	})

	// 主题详情
	.controller('TopicCtrl', function($scope, $http, $stateParams, TopicFactory){
		$scope.id = $stateParams.id;

		$http.get(API.TOPIC_DETAIL.formatParam($scope.id)).success(function(response){
			TopicFactory.update(response.data);
		});

		$scope.$on('topic.update', function(event, newTopic){
			$scope.topic = newTopic;
		});

	});