import { YamlConfigReader } from 'pip-services-commons-node';
import { EmailTemplatesClientFixtureV1 } from './EmailTemplatesClientFixtureV1';
import { EmailTemplatesLambdaClientV1 } from '../../src/version1/EmailTemplatesLambdaClientV1';

suite('EmailTemplatesLambdaClient', ()=> {
    let config = YamlConfigReader.readConfig(null, './config/test_connections.yaml', null);
    let lambdaConfig = config.getSection('lambda');

    // Skip if connection is not configured
    if (lambdaConfig.getAsNullableString("connection.protocol") != "aws")
        return;

    let client: EmailTemplatesLambdaClientV1;
    let fixture: EmailTemplatesClientFixtureV1;

    setup((done) => {
        client = new EmailTemplatesLambdaClientV1();
        client.configure(lambdaConfig);

        fixture = new EmailTemplatesClientFixtureV1(client);

        client.open(null, done);
    });

    teardown((done) => {
        client.close(null, done);
    });

    test('Crud Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});