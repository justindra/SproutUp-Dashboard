Meteor.publish('plants', function (userId) {
    var userId = userId || this.userId;
    if (this.userId == userId) {
        return Plants.find({userId: userId});
    }
});

Meteor.publish('plantDetails', function() {
    if (Roles.userIsInRole(this.userId, 'admin')) {
        return Plants.find({}, {fields: {_id: 1, userId: 1}});
    }
})