import { Descriptor } from 'pip-services-commons-node';
import { Factory } from 'pip-services-commons-node';

import { EmailTemplatesDirectClientV1 } from '../version1/EmailTemplatesDirectClientV1';
import { EmailTemplatesHttpClientV1 } from '../version1/EmailTemplatesHttpClientV1';
import { EmailTemplatesSenecaClientV1 } from '../version1/EmailTemplatesSenecaClientV1';

export class EmailTemplatesClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('pip-services-emailtemplates', 'factory', 'default', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('pip-services-emailtemplates', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('pip-services-emailtemplates', 'client', 'http', 'default', '1.0');
	public static SenecaClientV1Descriptor = new Descriptor('pip-services-emailtemplates', 'client', 'seneca', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(EmailTemplatesClientFactory.DirectClientV1Descriptor, EmailTemplatesDirectClientV1);
		this.registerAsType(EmailTemplatesClientFactory.HttpClientV1Descriptor, EmailTemplatesHttpClientV1);
		this.registerAsType(EmailTemplatesClientFactory.SenecaClientV1Descriptor, EmailTemplatesSenecaClientV1);
	}
	
}
