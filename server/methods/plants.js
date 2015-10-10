Meteor.methods({
    createPlant: function (newPlant) {
        var id = Plants.insert({
            userId: newPlant.userId,
            plantName: newPlant.plantName,
            location: newPlant.location || '',
            sensors: newPlant.sensors
        });
        return id;
    },
    updatePlant: function (plantId, data) {
        Plants.update(plantId, {$set: data});
    },
    deletePlant: function (plantId) {
        Plants.remove(plantId);
    }
});