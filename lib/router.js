Router.configure({
    notFoundTemplate: 'notfound',
    loadingTemplate: 'loading'
});

Router.map(function() {
    this.route('unauthorized'),
    this.route('panel', {
        path: '/panel',
        template: 'panel',
        controller: 'ApplicationController'
    }),
    this.route('home', {
        path: '/',
        template: 'home',
        controller: 'ApplicationController',
        onBeforeAction: function () {
            Router.go('profile');
        }
    }),
    this.route('plants', {
        path: '/plants',
        template: 'plantList',
        controller: 'ApplicationController'
    }),
    this.route('plantDetail', {
        path: '/plant/:_id',
        template: 'plantDetail',
        controller: 'ApplicationController',
        data: function () {
            return {
                plantId: this.params._id
            }
        }
    }),
    this.route('profile', {
        path: '/profile',
        template: 'user',
        controller: 'ApplicationController',
        data: function () {
            return {
                userId: Meteor.userId()
            };
        }
    });

});