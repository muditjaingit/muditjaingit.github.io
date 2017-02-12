var myApp=angular.module("mwhApp",["ngRoute","ngSanitize"],["$interpolateProvider",function(o){o.startSymbol("{("),o.endSymbol(")}")}]);myApp.run(["$rootScope","$location",function(o,r){o.$on("$routeChangeStart",function(t){window.scrollTo(0,0);var e=r.path();"/"==e?o.isHome=!0:o.isHome=!1})}]),myApp.filter("renderHTML",["$sce",function(o){return function(o){var r=o,t=$("<div/>").html(r).text();return t}}]),myApp.config(["$routeProvider","$locationProvider","$httpProvider",function(o,r,t){o.when("/",{templateUrl:"views/home.html",controller:"HomeCtrl as HomeCtrl"}).when("/services",{templateUrl:"views/services.html",controller:"ServCtrl as ServCtrl"}).when("/projects",{templateUrl:"views/projects.html",controller:"ProjectsCtrl as ProjectsCtrl"}).when("/products",{templateUrl:"views/products.html",controller:"ProductsCtrl as ProductsCtrl"}).when("/blog",{templateUrl:"views/blog.html",controller:"BlogCtrl as BlogCtrl"}).otherwise({redirectTo:"/"})}]),myApp.factory("blogServices",["$http","$q",function(o,r){var t={};return t.getPosts=function(){var t=r.defer();return o({url:"/api/posts/posts.json",method:"GET"}).success(function(o){t.resolve(o)}).error(function(o){t.reject(o)}),t.promise},t}]),myApp.controller("BlogCtrl",["$scope","$rootScope","blogServices",function(o,r,t){var e=this;r.currPage="blog",console.log("BlogCtrl as BlogCtrl"),t.getPosts().then(function(o){console.log(o),e.posts=o},function(o){console.log("Error",o)})}]),myApp.controller("HomeCtrl",["$scope","$rootScope",function(o,r){r.currPage="home",console.log("HomeCtrl")}]),myApp.controller("MainCtrl",["$scope","$rootScope",function(o,r){var t=this;r.currPage="",r.baseurl="/",t.name="mudit",console.log("MainCtrl")}]),myApp.controller("ProductsCtrl",["$scope","$rootScope",function(o,r){r.currPage="products",console.log("ProductsCtrl")}]),myApp.controller("ProjectsCtrl",["$scope","$rootScope",function(o,r){r.currPage="projects",console.log("ProjectsCtrl")}]),myApp.controller("ServCtrl",["$scope","$rootScope",function(o,r){r.currPage="services",console.log("ServCtrl")}]);
//# sourceMappingURL=application.js.map
