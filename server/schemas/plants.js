PlantSchema = new SimpleSchema({
    plantName: {
        type: String
    },
    userId: {
        type: String,
        custom: function () {
            if(this.isSet) {
                var user = Meteor.users.findOne(this.value);
                if(!user) return 'notFound';
            }
        }
    },
    sensors: {
        type: Array,
        optional: true
    },
    'sensors.$':{
        type: String,
        allowedValues: ['light', 'temperature', 'moisture', 'humidity', 'fertilizer'],
        optional: true
    },
    location:  {
        type: String,
        optional: true
    }
});

Plants.attachSchema(PlantSchema);