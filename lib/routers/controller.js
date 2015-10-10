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

ApplicationController = RouteController.extend({
    layoutTemplate: 'appBody',
    onBeforeAction: function() {
        if(!(Meteor.loggingIn() || Meteor.userId())) {
            Router.go('login');
        } else {
            this.next();
        };
    }
});

AdminController = ApplicationController.extend({
    onBeforeAction: function() {
        if(!(Meteor.loggingIn() || Meteor.userId())) {
            Router.go('login');
        } else {
            if(Roles.userIsInRole(Meteor.userId(), ['admin'])) {
                this.next();
            } else {
                Router.go('unauthorized');
            }
        };
    },
    waitOn: function() {
        return Meteor.subscribe('roles');
    }
});

