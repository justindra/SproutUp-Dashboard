Meteor.publish('userDetails', function () {
    if (Roles.userIsInRole(this.userId, 'admin')) {
        return Meteor.users.find();
    } else {
        this.ready();
    }
});

Meteor.publish('user', function (userId) {
    if (Roles.userIsInRole(this.userId, 'admin') || (this.userId == userId)) {
        return [
            Meteor.users.find(userId),
            Plants.find({userId: userId})
        ];
    } else {
        this.ready();
    }
});