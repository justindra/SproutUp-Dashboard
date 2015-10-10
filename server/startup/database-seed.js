Meteor.startup(function () {
    if(Meteor.users.find().count() < 1) {
        var joeId = Accounts.createUser({
            username: 'joeschmoe',
            password: 'password',
            email: 'joe@schmoe.com',
            profile: {
                name: 'Joe Schmoe'
            }
        });
        Accounts.createUser({
            username: 'jaredpage',
            password: 'password',
            email: 'me@jaredpage.net',
            profile: {
                name: 'Jared Page'
            }
        });
        Accounts.createUser({
            username: 'justindra',
            password: 'password',
            email: 'me@justinrahardjo.com',
            profile: {
                name: 'Justin Rahardjo'
            }
        });

        Roles.addUsersToRoles(joeId, 'admin');
    }

    if (Plants.find().count() < 1) {
        var plantId = Meteor.call('createPlant', {
            plantName: 'conifer',
            userId: Meteor.users.findOne({username:"jaredpage"})._id,
            location: 'ma-house',
            sensors: ['moist']
        });
        Meteor.call('insertDataPoint', plantId, 'moist', 15, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId, 'moist', 20, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId, 'moist', 25, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId, 'moist', 25, Meteor.users.findOne({username:"jaredpage"})._id);

        var plantId2 = Meteor.call('createPlant', {
            plantName: 'oregano',
            userId: Meteor.users.findOne({username:"jaredpage"})._id,
            location: 'ma-house',
            sensors: ['moist','temp']
        });
        Meteor.call('insertDataPoint', plantId2, 'moist', 15, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId2, 'moist', 20, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId2, 'moist', 15, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId2, 'moist', 20, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId2, 'temp', 23.2, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId2, 'temp', 23.0, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId2, 'temp', 23.0, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId2, 'temp', 23.1, Meteor.users.findOne({username:"jaredpage"})._id);

        var plantId3 = Meteor.call('createPlant', {
            plantName: 'weed',
            userId: Meteor.users.findOne({username:"jaredpage"})._id,
            location: 'not-ma-house',
            sensors: ['moist','light','temp']
        });
        Meteor.call('insertDataPoint', plantId3, 'moist', 21, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId3, 'moist', 20, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId3, 'moist', 18, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId3, 'moist', 17, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId3, 'temp', 20.0, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId3, 'temp', 21.2, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId3, 'temp', 22.9, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId3, 'temp', 23.3, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId3, 'light', 2, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId3, 'light', 3, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId3, 'light', 4, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId3, 'light', 5, Meteor.users.findOne({username:"jaredpage"})._id);

        var plantId4 = Meteor.call('createPlant', {
            plantName: 'chilli',
            userId: Meteor.users.findOne({username:"jaredpage"})._id,
            location: 'ma-house',
            sensors: ['moist']
        });
        Meteor.call('insertDataPoint', plantId4, 'moist', 20, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId4, 'moist', 21, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId4, 'moist', 21, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId4, 'moist', 21, Meteor.users.findOne({username:"jaredpage"})._id);
    }

});