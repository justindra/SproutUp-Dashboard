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
        controller: 'ApplicationController'
    }),
    this.route('plants', {
        path: '/plants',
        template: 'plantList',
        controller: 'ApplicationController'
    }),
    this.route('plantDetail', {
        path: '/plantDetail',
        template: 'plantDetail',
        controller: 'ApplicationController'
    })
});