Meteor.publish('plants', function (userId) {
    if (Meteor.userId() == userId) {
        return Plants.find({userId: userId});
    }
});