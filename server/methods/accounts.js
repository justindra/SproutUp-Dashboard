Meteor.methods({
    createNewUser: function (newUser) {
        Accounts.createUser({
            username: newUser.username,
            password: newUser.password,
            profile: {
                name: newUser.name
            }
        });
    },
    deleteUser: function (userId) {
        if ((Meteor.userId() != userId) && Roles.userIsInRole(Meteor.userId(), 'admin')) {
            // Can't delete ownself and only admin can delete
            Meteor.users.remove(userId, function (error) {
                if (error) console.log(error);
            });
        }
    }
});