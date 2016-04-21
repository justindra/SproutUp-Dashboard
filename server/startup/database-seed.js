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

        Roles.addUsersToRoles(joeId, 'admin');
        
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

    }

    if (Plants.find().count() < 1) {
        var plantId = Meteor.call('createPlant', {
            plantName: 'conifer',
            userId: Meteor.users.findOne({username:"jaredpage"})._id,
            location: 'ma-house',
            sensors: ['moisture','fertilizer']
        });
        Meteor.call('insertDataPoint', plantId, 'moisture', 15, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId, 'moisture', 20, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId, 'moisture', 25, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId, 'moisture', 25, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId, 'fertilizer', 15, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId, 'fertilizer', 20, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId, 'fertilizer', 25, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId, 'fertilizer', 25, Meteor.users.findOne({username:"jaredpage"})._id);

        var plantId2 = Meteor.call('createPlant', {
            plantName: 'oregano',
            userId: Meteor.users.findOne({username:"jaredpage"})._id,
            location: 'ma-house',
            sensors: ['moisture','temperature','fertilizer']
        });
        Meteor.call('insertDataPoint', plantId2, 'moisture', 15, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId2, 'moisture', 20, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId2, 'moisture', 15, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId2, 'moisture', 20, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId2, 'temperature', 23.2, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId2, 'temperature', 23.0, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId2, 'temperature', 23.0, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId2, 'temperature', 23.1, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId2, 'fertilizer', 15, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId2, 'fertilizer', 20, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId2, 'fertilizer', 25, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId2, 'fertilizer', 25, Meteor.users.findOne({username:"jaredpage"})._id);

        var plantId3 = Meteor.call('createPlant', {
            plantName: 'weed',
            userId: Meteor.users.findOne({username:"jaredpage"})._id,
            location: 'not-ma-house',
            sensors: ['moisture','light','temperature','fertilizer','humidity']
        });
        Meteor.call('insertDataPoint', plantId3, 'moisture', 21, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId3, 'moisture', 20, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId3, 'moisture', 18, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId3, 'moisture', 17, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId3, 'temperature', 20.0, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId3, 'temperature', 21.2, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId3, 'temperature', 22.9, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId3, 'temperature', 23.3, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId3, 'light', 2, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId3, 'light', 3, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId3, 'light', 4, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId3, 'light', 5, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId3, 'fertilizer', 15, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId3, 'fertilizer', 20, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId3, 'fertilizer', 25, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId3, 'fertilizer', 25, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId3, 'humidity', 15, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId3, 'humidity', 20, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId3, 'humidity', 25, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId3, 'humidity', 25, Meteor.users.findOne({username:"jaredpage"})._id);

        var plantId4 = Meteor.call('createPlant', {
            plantName: 'chilli',
            userId: Meteor.users.findOne({username:"jaredpage"})._id,
            location: 'ma-house',
            sensors: ['moisture','fertilizer']
        });
        Meteor.call('insertDataPoint', plantId4, 'moisture', 20, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId4, 'moisture', 21, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId4, 'moisture', 21, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId4, 'moisture', 21, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId4, 'fertilizer', 15, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId4, 'fertilizer', 20, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId4, 'fertilizer', 25, Meteor.users.findOne({username:"jaredpage"})._id);
        Meteor.call('insertDataPoint', plantId4, 'fertilizer', 25, Meteor.users.findOne({username:"jaredpage"})._id);
    }

});