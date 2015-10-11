Template.panel.onRendered(function(){
  dragula([document.querySelector('.plants-drag')]);
});

Template.panel.created = function () {
    var instance = this;
    this.subscribe('plants');
};

Template.panel.helpers({
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
    }
});


Template.plantPanel.events({
	'click .btn.btn-info': function (evt, template) {
		Router.go('plantDetail', {_id: template.data._id});
	}
});
