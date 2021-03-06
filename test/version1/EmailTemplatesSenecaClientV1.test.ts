let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-commons-node';
import { SenecaInstance } from 'pip-services-net-node';

import { EmailTemplatesMemoryPersistence } from 'pip-services-EmailTemplates-node';
import { EmailTemplatesController } from 'pip-services-EmailTemplates-node';
import { EmailTemplatesSenecaServiceV1 } from 'pip-services-EmailTemplates-node';
import { IEmailTemplatesClientV1 } from '../../src/version1/IEmailTemplatesClientV1';
import { EmailTemplatesSenecaClientV1 } from '../../src/version1/EmailTemplatesSenecaClientV1';
import { EmailTemplatesClientFixtureV1 } from './EmailTemplatesClientFixtureV1';

let senecaConfig = ConfigParams.fromTuples(
    "connection.protocol", "none"
);

suite('EmailTemplatesSenecaClient', () => {
    let service: EmailTemplatesSenecaServiceV1;
    let client: EmailTemplatesSenecaClientV1;
    let fixture: EmailTemplatesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new EmailTemplatesMemoryPersistence();
        let controller = new EmailTemplatesController();

        service = new EmailTemplatesSenecaServiceV1();
        service.configure(senecaConfig);
        let seneca = new SenecaInstance();

        let references: References = References.fromTuples(
            new Descriptor('pip-services-commons', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-net', 'seneca', 'instance', 'default', '1.0'), seneca,
            new Descriptor('pip-services-emailtemplates', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-emailtemplates', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-emailtemplates', 'service', 'seneca', 'default', '1.0'), service
        );
        seneca.setReferences(references);
        controller.setReferences(references);
        service.setReferences(references);

        client = new EmailTemplatesSenecaClientV1();
        client.configure(senecaConfig);
        client.setReferences(references);

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
