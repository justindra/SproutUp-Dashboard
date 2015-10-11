Meteor.methods({
    createPlant: function (newPlant) {
        if ((newPlant.userId == Meteor.userId()) || Roles.userIsInRole(Meteor.userId(), 'admin')) {
            var id = Plants.insert({
                userId: newPlant.userId,
                plantName: newPlant.plantName,
                location: newPlant.location || '',
                sensors: newPlant.sensors
            });
            return id;
        } else return new Meteor.Error(401, 'You don\'t have permission to make the plant');
    },
    updatePlant: function (plantId, data) {
        Plants.update(plantId, {$set: data});
    },
    deletePlant: function (plantId) {
        var plant = Plants.findOne(plantId);
        if((Meteor.userId() == plant.userId) || Roles.userIsInRole(Meteor.userId(), 'admin')) {
            Plants.remove(plantId);
        } else return new Meteor.Error(401, 'You don\'t have permission to delete this plant');
    }
});