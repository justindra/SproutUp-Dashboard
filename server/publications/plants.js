Meteor.publish('plants', function (userId) {
    var userId = userId || this.userId;
    if (this.userId == userId) {
        return Plants.find({userId: userId});
    }
});

Meteor.publish('plantDetails', function() {
    if (Roles.userIsInRole(this.userId, 'admin')) {
        return Plants.find({}, {fields: {_id: 1, userId: 1}});
    }
});

Meteor.publish('plant', function (plantId) {
    var plant = Plants.findOne(plantId);
    if((this.userId == plant.userId) || Roles.userIsInRole(this.userId, 'admin')) {
        return Plants.find(plantId);
    }
});

Meteor.publish('plantData', function (plantId) {
    var plant = Plants.findOne(plantId);
    if((this.userId == plant.userId) || Roles.userIsInRole(this.userId, 'admin')) {
        return [
            Plants.find(plantId),
            Data.find({plantId: plantId}, {sort: {date: 1}, limit: 20})
        ]
    }
});