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
    this.route('forgotPassword', {
        path: '/forgotPassword',
        template: 'forgotPassword',
        controller: 'LoginControler'
    }),
    this.route('resetPassword', {
        path: '/reset-password/:token',
        template: 'resetPassword'
    }),
    this.route('newUser', {
        path: '/newUser',
        template: 'newUser',
        controller: 'LoginControler',
        data: function () {
            return {title: 'Please Enter your Details'}
        }
    })
});