Meteor.methods({
    insertDataPoint: function (plantId, value) {
        Data.insert({
            plantId: plantId,
            value: value
        });
    }
});