import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { DirectClient } from 'pip-services-net-node';
import { IEmailTemplatesClientV1 } from './IEmailTemplatesClientV1';
import { EmailTemplateV1 } from './EmailTemplateV1';
export declare class EmailTemplatesDirectClientV1 extends DirectClient<any> implements IEmailTemplatesClientV1 {
    constructor();
    getTemplates(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<EmailTemplateV1>) => void): void;
    getTemplateById(correlationId: string, id: string, callback: (err: any, template: EmailTemplateV1) => void): void;
    getTemplateByIdOrName(correlationId: string, idOrName: string, callback: (err: any, template: EmailTemplateV1) => void): void;
    createTemplate(correlationId: string, template: EmailTemplateV1, callback: (err: any, template: EmailTemplateV1) => void): void;
    updateTemplate(correlationId: string, template: EmailTemplateV1, callback: (err: any, template: EmailTemplateV1) => void): void;
    deleteTemplateById(correlationId: string, id: string, callback: (err: any, template: EmailTemplateV1) => void): void;
}
