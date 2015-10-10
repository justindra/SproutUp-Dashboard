Template.plantList.created = function () {
    var instance = this;
    this.subscribe('plants');
};

Template.plantList.helpers({
    plants: function () {
        return Plants.find({userId: Meteor.userId()});
    }
});