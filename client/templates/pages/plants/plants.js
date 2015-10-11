Template.plantList.created = function () {
    var instance = this;
    this.subscribe('plants');
};

Template.plantList.helpers({
    plants: function () {
        return Plants.find({userId: Meteor.userId()});
    },
    checkboxes: function () {
        return [
        {
            value: 'moist',
            label: 'Moisture'
        },
        {
            value: 'light',
            label: 'Light'
        },
        {
            value: 'temp',
            label: 'Temperature'
        }
        ]
    }
});

Template.plantList.events({
    'click [data-action="addnew"]': function (evt, template) {
        $('#addNewPlant').modal('show');
    },
    'submit #addPlant': function (evt, template) {
        evt.preventDefault();
        var sensors = [];
        _.each(evt.target.sensors, function (sensor) {
            if(sensor.checked) {
                sensors.push(sensor.value);
            }
        });
        Meteor.call('createPlant', {
            plantName: evt.target.plantName.value,
            location: evt.target.location.value,
            userId: Meteor.userId(),
            sensors: sensors
        }, function (error) {
            if (error) console.log(error);
            else {
                evt.target.reset();
                $('#addNewPlant').modal('hide');
            }
        })
    },
    'click [data-action="delete"]': function (evt, template) {
        var id = $(evt.target).closest('div.panel').attr('id');
        Meteor.call('deletePlant', id);
    }
});

Template.sensorDisplay.created = function () {
    var instance = this;
    this.subscribe('data', instance.data.plantId, instance.data.type);
};

Template.sensorDisplay.helpers({
    datapoint: function () {
        return Data.find({plantId: this.plantId, sensorType: this.type});
    }
});