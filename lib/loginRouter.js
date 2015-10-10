LoginControler = RouteController.extend({
    layoutTemplate: 'loginLayout',
    onBeforeAction: function () {
        if(Meteor.userId()) {
            Router.go('home');
        } else {
            this.next();
        }
    }
});

// All routes to do with logins
Router.map(function() {
    this.route('login', {
        path: '/login',
        template: 'login',
        controller: 'LoginControler',
        data: function () {
            return {title: 'Please Sign In'}
        }
    }),
<<<<<<< HEAD
    this.route('forgotPassword', {
        path: '/forgotPassword',
        template: 'forgotPassword',
        controller: 'LoginControler'
    }),
    this.route('resetPassword', {
        path: '/reset-password/:token',
        template: 'resetPassword',
=======
    this.route('dragList', {
        path: '/dragList',
        template: 'dragList',
    }),
    this.route('newUser', {
        path: '/newUser',
        template: 'newUser',
>>>>>>> origin/master
        controller: 'LoginControler',
        data: function () {
            return {title: 'Please Enter your Details'}
        }
    })
});