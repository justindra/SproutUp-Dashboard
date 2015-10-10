Template.login.events({
    'submit #login': function (evt, template) {
        evt.preventDefault();
        Session.set('alert', null);
        if(evt.target.username.value.length > 0 && evt.target.password.value.length > 0 ) {
            Meteor.loginWithPassword(evt.target.username.value, evt.target.password.value, 
            function (error) {
                if(error) {
                    Session.set('alert', {
                        content: '<strong>Oops!!</strong> Please check your username and password.',
                        style: 'danger'
                    });
                } else {
                    Router.go('home');
                }
            });
        } else {
            Session.set('alert', {
                content: '<strong>Oops!!</strong> Your username and password can\'t be empty.',
                style: 'danger'
            });
        }
    }
});

Template.newUser.events({
    'submit #newUser': function (evt, template) {
        evt.preventDefault();
        Accounts.createUser({
            password: evt.target.password.value,
            email: evt.target.email.value,
            profile: {
                name: evt.target.name.value || ''
            }
        });
    }
});