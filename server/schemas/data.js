DataSchema = new SimpleSchema({
    plantId: {
        type: String,
        custom: function () {
            if(this.isSet) {
                var plant = Plants.findOne(this.value);
                if(!plant) return 'notFound';
            }
        }
    },
    sensorType: {
        type: String,
        allowedValues: ['light', 'temp', 'moist']
    },
    value: {
        type: Number
    },
    date: {
        type: Date,
        autoValue: function () {
            return new Date();
        }
    }
});

Data.attachSchema(DataSchema);