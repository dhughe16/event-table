// Google Cloud Platform project ID
const projectId = 'event-table';
const Datastore = require('@google-cloud/datastore');
const datastore = new Datastore({
    projectId: projectId,
});

const FB = require('fb');

exports.fbPost = function fbPost(req, res) {

    var token = "EAAQFaVNF26ABAETOhDoS1si7xzf66MnryThWKKXrNmVDIViX1EuaH1yMdEpkLQy1ZCDQLVuwOjAYl0iRbZAxfGHKZCmXfZCZCBDKR1QPNX7Ry9z2ZBoZA2QXinsBzvloUA9NTOPgOu86oT5NmiAZBYqM2RLIjZAQnv84vu5CI30oSZCJGrlKGJvIdp";
    var url = "http://www.youtube.com";
    var message = "Hello world";
    const query = datastore.createQuery('Event').limit(1).order('Date', {
        descending: true,
    });
    datastore
        .runQuery(query)
        .then(results => {

            // These fields should always stay the same.
            FB.api(
                '/263674121151608/feed',
                'POST', {
                    "fields": "id,name,permalink_url",
                    "link": url,
                    "message": message,
                    "access_token": token
                },
                function (response) {
                    // Error message here
                    console.log(response);
                }
            );

            res.status(200).send("Success");
        })
        .catch(err => {
            console.error('ERROR:', err);
            res.status(200).send("Error");
        });
};
