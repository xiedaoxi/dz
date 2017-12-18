app.controller("header",function($scope){
				$scope.title = "这是header";
				$scope.btnClick = function(){
					$scope.title = "这是header2";
				}
			})