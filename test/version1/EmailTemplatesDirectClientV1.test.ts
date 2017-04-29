let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-commons-node';

import { EmailTemplatesMemoryPersistence } from 'pip-services-EmailTemplates-node';
import { EmailTemplatesController } from 'pip-services-EmailTemplates-node';
import { IEmailTemplatesClientV1 } from '../../src/version1/IEmailTemplatesClientV1';
import { EmailTemplatesDirectClientV1 } from '../../src/version1/EmailTemplatesDirectClientV1';
import { EmailTemplatesClientFixtureV1 } from './EmailTemplatesClientFixtureV1';

suite('EmailTemplatesDirectClientV1', ()=> {
    let client: EmailTemplatesDirectClientV1;
    let fixture: EmailTemplatesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new EmailTemplatesMemoryPersistence();
        let controller = new EmailTemplatesController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services-commons', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-emailtemplates', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-emailtemplates', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new EmailTemplatesDirectClientV1();
        client.setReferences(references);

        fixture = new EmailTemplatesClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
