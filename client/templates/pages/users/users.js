Template.userList.created = function () {
    var instance = this;

    instance.subscribe('userDetails');
    instance.subscribe('plantDetails');
};

Template.userList.helpers({
    heading: function () {
        return ['username', 'started planting', 'no. of plants']
    },
    users: function () {
        return Meteor.users.find().map(function (post) {
            var plantCount = Plants.find({userId: post._id}).count();
            post['content'] = [post.username, post.createdAt, plantCount]
            return post;
        });
    }
});

Template.userList.events({
    'click [data-action="add"]': function (evt, template) {
        $('#addNewUser').modal('show');
    },
    'submit #addUser': function (evt, template) {
        evt.preventDefault();
        Meteor.call('createNewUser', {
            username: evt.target.username.value,
            password: evt.target.password.value,
            name: evt.target.name.value
        }, function (error) {
            if(error) console.log(error);
            else {
                $('#addUser')[0].reset();
                $('#addNewUser').modal('hide');
            }
        });
    },
    'click [data-action="delete"]': function (evt, template) {
        var id = $(evt.target).closest('tr').attr('id');
        Meteor.call('deleteUser', id);
    },
    'click [data-action="details"]': function (evt, template) {
        var id = $(evt.target).closest('tr').attr('id');
        Router.go('user', {_id: id});
    }
});