"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const EmailTemplatesDirectClientV1_1 = require("../version1/EmailTemplatesDirectClientV1");
const EmailTemplatesHttpClientV1_1 = require("../version1/EmailTemplatesHttpClientV1");
const EmailTemplatesSenecaClientV1_1 = require("../version1/EmailTemplatesSenecaClientV1");
class EmailTemplatesClientFactory extends pip_services_commons_node_2.Factory {
    constructor() {
        super();
        this.registerAsType(EmailTemplatesClientFactory.DirectClientV1Descriptor, EmailTemplatesDirectClientV1_1.EmailTemplatesDirectClientV1);
        this.registerAsType(EmailTemplatesClientFactory.HttpClientV1Descriptor, EmailTemplatesHttpClientV1_1.EmailTemplatesHttpClientV1);
        this.registerAsType(EmailTemplatesClientFactory.SenecaClientV1Descriptor, EmailTemplatesSenecaClientV1_1.EmailTemplatesSenecaClientV1);
    }
}
EmailTemplatesClientFactory.Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-emailtemplates', 'factory', 'default', 'default', '1.0');
EmailTemplatesClientFactory.DirectClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-emailtemplates', 'client', 'direct', 'default', '1.0');
EmailTemplatesClientFactory.HttpClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-emailtemplates', 'client', 'http', 'default', '1.0');
EmailTemplatesClientFactory.SenecaClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-emailtemplates', 'client', 'seneca', 'default', '1.0');
exports.EmailTemplatesClientFactory = EmailTemplatesClientFactory;
//# sourceMappingURL=EmailTemplatesClientFactory.js.map