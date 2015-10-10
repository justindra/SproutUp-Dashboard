Template.plantList.created = function () {
    var instance = this;
    this.subscribe('plants');
};

Template.plantList.helpers({
    plants: function () {
        return Plants.find({userId: Meteor.userId()});
    }
});

Template.sensorDisplay.created = function () {
    var instance = this;
    this.subscribe('data', instance.data.plantId, instance.data.type);
};

Template.sensorDisplay.helpers({
    datapoint: function () {
        return Data.find({plantId: this.plantId, sensorType: this.type});
    }
});