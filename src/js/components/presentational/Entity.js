// Google Cloud Platform project ID
const projectId = 'event-table';

// Google Cloud Datastore Client
const Datastore = require('@google-cloud/datastore');

class Entity {
    constructor(projectId) {
        const options = {
            projectId: projectId
        };
        this.datastore = new Datastore(options);
        // To create the keys, we have to use this instance of Datastore.
        datastore.key = this.datastore.key;

        this.incompleteKey = this.getIncompleteKey();
        this.namedKey = this.getNamedKey();
    }

    delete() {
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
    };

    lookup() {
        const taskKey = this.getIncompleteKey();

        // [START datastore_lookup]
        datastore.get(taskKey).then(results => {
            // Task found.
            const entity = results[0];
            console.log(entity);
        });

        return this.datastore
            .save({
                method: 'insert',
                key: taskKey,
                data: {},
            })
            .then(() => this.datastore.get(taskKey));
    }

    getAll() {
        const datastore = this.datastore;

        // [START datastore_kind_run_query]
        function runKindQuery() {
            const query = datastore
                .createQuery()
                .select('__key__')
                .limit(1);

            return datastore.runQuery(query).then(results => {
                const entities = results[0];
                const kinds = entities.map(entity => entity[datastore.KEY].name);

                console.log('Kinds:');
                kinds.forEach(kind => console.log(kind));

                return kinds;
            });
        }
        // [END datastore_kind_run_query]

        return runKindQuery().then(kinds => {
            t.true(kinds.includes('Account'));
        });
    }
}

module.exports = {
    Entity: Entity
};