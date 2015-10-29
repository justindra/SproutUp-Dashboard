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
        allowedValues: ['light', 'temperature', 'moisture', 'humidity', 'fertilizer']
    },
    value: {
        type: Number,
        decimal: true
    },
    date: {
        type: Date,
        autoValue: function () {
            return new Date();
        }
    }
});

Data.attachSchema(DataSchema);