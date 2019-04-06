var AWS = require('aws-sdk'),
    documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {

    var tableName = "activity_data";
    var update_attr = "set ad_class_name = :class_name, ad_time = :time, ad_days = :days, ad_location = :location, ad_phone = :phone";

    var params = {
        TableName: tableName,
        Key: {
            "id": event.id
        },
        UpdateExpression: update_attr,
        ExpressionAttributeValues:
        {
            ":class_name": event.className,
            ":time": event.time,
            ":days": event.days,
            ":location": event.location,
            ":phone": event.phone
        }
    };

    documentClient.update(params, function (err, data) {
        callback(err, {
            "message": "activity data updated successfully."
        });
    });
};


// Test
/*
{
    "className": "UPDATE-1",
    "time": "UPDATE",
    "days": "UPDATE",
    "location": "UPDATE",
    "phone": "UPDATE",
    "id": "bed4a370-57e3-11e9-af96-b982fe5d40e4"
}
*/




// EXAMPLE 1
// --------------------------------------------------------------------- //
/*
var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient()

var table = "Movies";

var year = 2015;
var title = "The Big New Movie";

// Update the item, unconditionally,

var params = {
    TableName:table,
    Key:{
        "year": year,
        "title": title
    },
    UpdateExpression: "set info.rating = :r, info.plot=:p, info.actors=:a",
    ExpressionAttributeValues:{
        ":r":5.5,
        ":p":"Everything happens all at once.",
        ":a":["Larry", "Moe", "Curly"]
    },
    ReturnValues:"UPDATED_NEW"
};

console.log("Updating the item...");
docClient.update(params, function(err, data) {
    if (err) {
        console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
    }
});
*/

// EXAMPLE 2
// --------------------------------------------------------------------- //
/*
var updateConditionally = function(email,fullName,prefix,callback)
{
    var docClient = new AWS.DynamoDB.DocumentClient();

    var params = {
        TableName:"Users",
        Key: {
            email : email
        },
        UpdateExpression: "set fullname = :fullname",
        ConditionExpression: "begins_with(fullname,:prefix)",
        ExpressionAttributeValues:{
            ":fullname":fullName,
            ":prefix":prefix
        },
        ReturnValues:"UPDATED_NEW"
    };


    docClient.update(params,callback);

}
*/
// --------------------------------------------------------------------- //