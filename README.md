# Sproutup-Dashboard
This is a dashboard web app built in meteor for the [Sprout Up](https://github.com/JaredPage/SproutUp-Comms) project.

You can view the whole project overview [here](http://sproutup.info/)

#The Dasboard
TODO: EXPLAIN DASHBOARD
![alt tag](https://raw.githubusercontent.com/JaredPage/SproutUp-Comms/master/setup.jpg)

#API

To add data into the db, you can use a REST API,

First you need to login

````bash
curl http://localhost:3000/api/v1/login -d "username=joeschmoe&password=password"
````

This will return a authtoken and a userId, use these values for the next calls

````bash
curl -X POST http://localhost:3000/api/v1/data/:plantId?type=light&value=45 -H "X-Auth-Token: authtoken"  -H "X-User-Id: userId"
````

The plantId is the given plant id specified in the dashboard, the type is the sensor type (light, moist or temp), the value is the value of the sensor.

## Latest Updates
N/A

## Planned Updates
N/A

## The Team
This was made by [Justin Rahardjo](http://justinrahardjo.info/) and [Jared Page](http://jaredpage.net).

## Acknowledgements
We would like to thank Rebecca Simpson and Jaco Du Plessis for being part of the iLab team !