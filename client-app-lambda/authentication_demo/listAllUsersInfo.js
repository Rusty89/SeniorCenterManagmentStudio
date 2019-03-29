var AWS = require('aws-sdk'),
    documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
  var params = {
    TableName : 'member_authentication'
  };
  documentClient.scan(params, function(err, data){
    if(err){
     callback(err, null);
    }else{
      callback(null, data.Items);
    }
  });
};