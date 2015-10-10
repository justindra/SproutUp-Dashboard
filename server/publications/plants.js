Meteor.publish('plants', function (userId) {
    var userId = userId || this.userId;
    if (this.userId == userId) {
        return Plants.find({userId: userId});
    }
});