Template.plantDetail.created = function () {
    var instance = this;
    instance.subscribe('plant', this.data.plantId);
};

Template.plantDetail.helpers({
    plantName: function () {
        var plant = Plants.findOne(this.plantId);
        return plant && plant.plantName || '';
    },
    sensors: function () {
        var plant = Plants.findOne(this.plantId);
        return plant && plant.sensors || [];
    }
});

Template.sensorChartPanel.created = function () {
    var instance = this;

    instance.chart = new ReactiveVar(null);
    instance.subscribe('plantData', this.data.plantId, this.data.type, function () {
        instance.autorun(function () {
            var chart = instance.chart.get();
            var datapoints = Data.find({plantId: instance.data.plantId, sensorType: instance.data.type}, {sort: {date: 1}});
            if(chart && (datapoints.count() > 0)) {
                chart.update({
                    labels: _.map(_.pluck(datapoints.fetch(), 'date'), function (data) {
                        return moment(data).from(moment());
                    }),
                    series: [
                        _.pluck(datapoints.fetch(), 'value')
                    ]
                });
            }
        });
    });
};

Template.sensorChartPanel.rendered = function () {

    var instance = this;
    instance.chart.set(new Chartist.Line('#' + instance.data.plantId + instance.data.type + '.ct-chart', {labels: [0], series: [[0]]}));
};

Template.sensorChartPanel.helpers({
    heading: function () {
        if(this.type == 'moisture') {
            return 'MOISTURE READING';
        } else if(this.type == 'light') {
            return 'LIGHT READING';
        } else if(this.type == 'temperture') {
            return 'TEMPERATURE READING';
        }
    }
});

Template.sensorLastReadingPanel.helpers({
    icon: function () {
        return getIconForSensor(this.type);
    },
    color: function () {
        return getColorForSensor(this.type);
    },
    label: function () {
        var data = Data.findOne({plantId: this.plantId, sensorType: this.type}, {sort: {date: -1}});
        return data && moment(data.date).fromNow() || '';
    },
    value: function () {
        var data = Data.findOne({plantId: this.plantId, sensorType: this.type}, {sort: {date: -1}});
        return data && data.value || 'X';
    }
});
