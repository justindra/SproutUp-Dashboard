Meteor.startup(function () {
    if (Plants.find().count() < 1) {
        var plantId = Meteor.call('createPlant', {
            plantName: 'conifer',
            location: 'ma-house'
        });
        Meteor.call('insertDataPoint', plantId, 20);
    }

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
});