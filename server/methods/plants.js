Meteor.methods({
    createPlant: function (newPlant) {
        var id = Plants.insert(newPlant);
        return id;
    },
    updatePlant: function (plantId, data) {
        Plants.update(plantId, {$set: data});
    },
    deletePlant: function (plantId) {
        Plants.remove(plantId);
    }
});