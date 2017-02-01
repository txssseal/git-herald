'use strict';

module.exports.gitHerald = (event, context, callback) => {
  const response = {
    console.log(event.Records[0].Sns.Message); // show github event in cloudwatch
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
