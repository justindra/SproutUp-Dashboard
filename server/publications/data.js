Meteor.publish('data', function (plantId, type, userId) {
    var userId = userId || this.userId;
    var plant = Plants.findOne(plantId);
    if (plant.userId == userId) {
        return Data.find({plantId: plantId, sensorType: type}, {sort: {date: 1}});
    } else {
        this.ready();
    }
});