let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-commons-node';

import { EmailTemplatesMemoryPersistence } from 'pip-services-EmailTemplates-node';
import { EmailTemplatesController } from 'pip-services-EmailTemplates-node';
import { EmailTemplatesHttpServiceV1 } from 'pip-services-EmailTemplates-node';
import { IEmailTemplatesClientV1 } from '../../src/version1/IEmailTemplatesClientV1';
import { EmailTemplatesHttpClientV1 } from '../../src/version1/EmailTemplatesHttpClientV1';
import { EmailTemplatesClientFixtureV1 } from './EmailTemplatesClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('EmailTemplatesRestClientV1', ()=> {
    let service: EmailTemplatesHttpServiceV1;
    let client: EmailTemplatesHttpClientV1;
    let fixture: EmailTemplatesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new EmailTemplatesMemoryPersistence();
        let controller = new EmailTemplatesController();

        service = new EmailTemplatesHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services-commons', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-emailtemplates', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-emailtemplates', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-emailtemplates', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new EmailTemplatesHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new EmailTemplatesClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
