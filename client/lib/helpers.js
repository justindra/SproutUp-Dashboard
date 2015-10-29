Template.registerHelper('timeFromX', function (date) {
    return moment(date).fromNow();
});

getIconForPlant = function(type) {
    if (type == "conifer") {
        return 'glyphicon-tree-conifer';
    }else if (type == 'weed') {
        return 'glyphicon-tree-deciduous';
    } else if (type == 'oregano') {
        return 'glyphicon-leaf';
    }else if (type == 'chilli') {
        return 'vine';
    }else if (type == 'flower') {
        return 'glyphicon-grain';
    }
}

getColorForPlant = function(type) {
    if (type == "conifer") {
        return 'darkgreen';
    }else if (type == 'weed') {
        return 'lightgreen';
    } else if (type == 'oregano') {
        return 'Khaki';
    }else if (type == 'chilli') {
        return 'red';
    }else if (type == 'flower') {
        return 'yellow';
    }
}

// --          glyphicon-grain
//         glyphicon-tree-deciduous
//          glyphicon-tree-conifer
//          glyphicon-leaf
//           fa-vine
//           fa-tree
Template.registerHelper('MeteorAbsoluteUrl', function () {
    return Meteor.absoluteUrl();
});

getIconForSensor = function (type) {
    if (type == 'moisture') {
        return 'tint';
    } else if (type == 'temperature') {
        return 'fire';
    } else if (type == 'light') {
        return 'sun-o';
    }else if (type == 'fertilizer') {
        return 'leaf';
    }else if (type == 'humidity') {
        return 'umbrella';
    }
}

getColorForSensor = function (type) {
    if (type == 'moisture') {
        return 'info';
    } else if (type == 'temperature') {
        return 'red';
    } else if (type == 'light') {
        return 'yellow';
    }else if (type == 'fertilizer') {
        return 'green';
    }else if (type == 'humidity') {
        return 'primary';
    }
}