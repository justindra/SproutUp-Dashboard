Router.map(function() {
    this.route('users', {
        path: '/users',
        template: 'userList',
        controller: 'AdminController'
    }),
    this.route('user', {
        path: '/user/:_id',
        template: 'user',
        controller: 'AdminController',
        data: function () {
            return this.params._id;
        }
    })
});