Template.sensors.created = function () {
    var instance = this;
    this.subscribe('plants');
};

Template.sensors.helpers({
    plants: function () {
        return Plants.find({userId: Meteor.userId()});
    },    
    plantName: function () {
        var plant = Plants.findOne(this.plantId);
        return plant && plant.plantName || '';
    },
    sensors: function () {
    	var sensor_types = [];
		var sensors = Plants.find({userId: Meteor.userId()}).forEach(function(plant){console.log(plant.sensors);$.each(plant.sensors, function(i, sensor){sensor_types.push(sensor)});});
		var unique_sensors = $.unique(sensor_types);
		return unique_sensors;
    }
});

 Template.registerHelper('equals', function (a, b) {
      return a === b;
    });