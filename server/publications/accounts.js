Meteor.publish('userDetails', function () {
    if (Roles.userIsInRole(this.userId, 'admin')) {
        return Meteor.users.find();
    } else {
        this.ready();
    }
});