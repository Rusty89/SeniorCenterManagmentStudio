/**
 * BASIC Authentication
 *
 * Simple authentication script intended to be run by Amazon Lambda to
 * provide Basic HTTP Authentication for a static website hosted in an
 * Amazon S3 bucket through Couldfront.
 *
 * URL: https://d32v9t9jekje0e.cloudfront.net/
 * S3-Bucket: s3-testing-login
 */
 
'use strict';
 
exports.handler = (event, context, callback) => {
 
    // Get request and request headers
    const request = event.Records[0].cf.request;
    const headers = request.headers;
 
    // Configure authentication
    const authUser = '*****';
    const authPass = '*********';
 
    // Construct the Basic Auth string
    const authString = 'Basic ' + new Buffer(authUser + ':' + authPass).toString('base64');
 
    // Require Basic authentication
    if (typeof headers.authorization == 'undefined' || headers.authorization[0].value != authString) {
        const body = 'Unauthorized';
        const response = {
            status: '401',
            statusDescription: 'Unauthorized',
            body: body,
            headers: {
                'www-authenticate': [{key: 'WWW-Authenticate', value:'Basic'}]
            },
        };
        callback(null, response);
    }
 
    // Continue request processing if authentication passed
    callback(null, request);
};