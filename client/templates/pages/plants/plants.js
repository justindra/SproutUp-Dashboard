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

Template.plantPanel.onRendered(function(){
  dragula([document.querySelector('.panel')]);
});

Template.plantPanel.helpers({
    plants: function () {
        return Plants.find({userId: Meteor.userId()});
    }
});

Template.sensorLatest.created = function () {
    var instance = this;
    this.subscribe('data', instance.data.plantId, instance.data.type);
};

Template.sensorLatest.helpers({
    latestdatapoint: function () {
        return Data.findOne({plantId: this.plantId, sensorType: this.type}, {sort: [["rank", "desc"]]});
    },
    icon: function () {
        return getIconForSensor(this.type);
    },
    typeName: function () {
        if (this.type == 'moist') {
            return 'moisture';
        } else if (this.type == 'temp') {
            return 'temperature';
        } else if (this.type == 'light') {
            return 'light';
        } 
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

Template.plantPanel.helpers({
    owner: function (ownerid) {
        return Meteor.users.findOne({_id: ownerid}).profile.name;
    },
    heading: function () {
        var name = Meteor.users.findOne(this.userId).profile.name;
        return this.plantName + ' @ ' + this.location + '<div class="owner">Owner: ' + name + '</div>';
    },
    footer: function () {
        return 'Plant Type: TODO <button type="button" class="btn btn-info">See More Info</button>';
    },
    icon: function(){
        return getIconForPlant(this.plantName);
    }, 
    color: function(){
        return getColorForPlant(this.plantName);
    }
});


Template.plantPanel.events({
    'click .btn.btn-info': function (evt, template) {
        Router.go('plantDetail', {_id: template.data._id});
    }
});
