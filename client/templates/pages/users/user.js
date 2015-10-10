Template.user.created = function () {
    var instance = this;
    instance.subscribe('user', this.data.userId);
};

Template.user.helpers({
    user: function () {
        return Meteor.users.findOne(this.userId);
    },
    qtyPlants: function () {
        return Plants.find({userId: this.userId}).count();
    },
    friends: function () {
        return 0;
    }
});