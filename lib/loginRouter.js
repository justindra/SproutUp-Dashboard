LoginControler = RouteController.extend({
    // layoutTemplate: 'loginLayout',
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
        controller: 'LoginControler'
    }),
    this.route('dragList', {
        path: '/dragList',
        template: 'dragList',
    }),
    this.route('forgotPassword', {
        path: '/forgotPassword',
        template: 'forgotPassword',
        controller: 'LoginControler'
    }),
    this.route('resetPassword', {
        path: '/reset-password/:token',
        template: 'resetPassword',
        controller: 'LoginControler',
        data: function () {
            return this.params.token;
        }
    })
});