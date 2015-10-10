Meteor.startup(function () {
    if (Plants.find().count() < 1) {
        var plantId = Meteor.call('createPlant', {
            plantName: 'conifer',
            location: 'ma-house'
        });
        Meteor.call('insertDataPoint', plantId, 20);
    }
});