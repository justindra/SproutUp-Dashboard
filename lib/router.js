ApplicationController = RouteController.extend({
    // layoutTemplate: 'appBody',
    // onBeforeAction: function() {
    //     if(!(Meteor.loggingIn() || Meteor.userId())) {
    //         Router.go('login');
    //     } else {
    //         this.next();
    //     };
    // }
});

Router.configure({
    notFoundTemplate: 'notfound',
    loadingTemplate: 'loading'
});

Router.map(function() {
    this.route('unauthorized'),
    this.route('panel', {
        path: '/panel',
        template: 'panel',
    }),
    this.route('home', {
        path: '/',
        template: 'home',
        controller: 'ApplicationController'
    })
});