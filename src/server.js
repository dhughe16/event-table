// Google Cloud Platform project ID
const projectId = 'event-table';


// Google Cloud Datastore Client
const Datastore = require('@google-cloud/datastore');
const datastore = new Datastore({
    projectId: projectId,
});


app.post('deleteEvent',(req, res, next) =>  {
        const taskKey = this.getIncompleteKey();

        // [START datastore_delete]
        datastore.delete(taskKey).then(() => {
            // Task deleted successfully.
        });
        // [END datastore_delete]

        return this.datastore
            .save({
                method: 'insert',
                key: taskKey,
                data: {},
            })
            .then(() => this.datastore.delete(taskKey));
});

app.get('listEvents', (req, res) => {
        const datastore = this.datastore;

        // [START datastore_kind_run_query]
        function runKindQuery() {
            const query = datastore
                .createQuery()
                .select('__key__')
                .limit(5);

            return datastore.runQuery(query).then(results => {
                const entities = results[0];
                const files = entities.map(entity => entity[datastore.KEY].name);
                files.forEach(event => console.log(event.eventTitle));

                return files;
            });
        }
});
