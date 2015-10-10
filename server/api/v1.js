var Api = new Restivus({
    useDefaultAuth: true,
    prettyJson: true,
    version: 'v1'
});

Api.addRoute('data/:plantId', {
    authRequired: true
},
{   
    post: function() {
        var syncCall = Meteor.wrapAsync(Meteor.call);
        var result = syncCall('insertDataPoint', this.urlParams.plantId, this.queryParams.type, this.queryParams.value, this.userId);
        if(result) {
            return {
                statusCode: result.error,
                body: result.message
            }
        } else return {
            statusCode: 200,
            body: 'Just added a new datapoint!!'
        }
    }
})
