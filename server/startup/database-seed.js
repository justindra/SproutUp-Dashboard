Meteor.startup(function () {
    if(Meteor.users.find().count() < 1) {
        Accounts.createUser({
            username: 'joeschmoe',
            password: 'password',
            email: 'joe@schmoe.com',
            profile: {
                name: 'Joe Schmoe'
            }
        });
    }

    if (Plants.find().count() < 1) {
        var plantId = Meteor.call('createPlant', {
            plantName: 'conifer',
            userId: Meteor.users.findOne()._id,
            location: 'ma-house',
            sensors: ['moist']
        });
        Meteor.call('insertDataPoint', plantId, 'moist', 20, Meteor.users.findOne()._id);
    }

});