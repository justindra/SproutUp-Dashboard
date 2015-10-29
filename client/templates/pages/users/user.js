Template.user.created = function () {
    var instance = this;
    instance.subscribe('user', this.data.userId);
};

Template.user.helpers({
    user: function () {
        return Meteor.users.findOne(this.userId);
    },
    qtyPlants: function () {
        return Plants.find({userId: this.userId}).count();
    },
    friends: function () {
        return 0;
    },    
    plants: function () {
        return Plants.find({userId: Meteor.userId()});
    },
    sensors: function () {
        var sensor_types = [];
        var sensors = Plants.find({userId: Meteor.userId()}).forEach(function(plant){console.log(plant.sensors);$.each(plant.sensors, function(i, sensor){sensor_types.push(sensor)});});
        var unique_sensors = $.unique(sensor_types);
        return unique_sensors.length;
    }
});
