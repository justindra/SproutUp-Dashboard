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
        return Data.find({plantId: this.plantId, sensorType: this.type}, {sort: [["rank", "desc"]], limit:1});
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
    }
});


Template.plantPanel.events({
	'click .btn.btn-info': function (evt, template) {
		Router.go('plantDetail');
	}
});
