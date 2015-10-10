Meteor.methods({
    insertDataPoint: function (plantId, type, value, userId) {
        var userId = userId || Meteor.userId() || '';
        var plant = Plants.findOne(plantId);
        if (plant && (userId == plant.userId)) {
            if(plant.sensors.indexOf(type) >= 0) {
                Data.insert({
                    plantId: plantId,
                    sensorType: type,
                    value: value
                });
            } else  return new Meteor.Error(404, 'Can\'t find type of sensor on plant!');
        } else {
            return new Meteor.Error(401, 'You don\'t have access to this plant!');
        }
    }
});
