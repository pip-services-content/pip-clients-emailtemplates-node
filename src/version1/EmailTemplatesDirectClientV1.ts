import { IReferences } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
import { FilterParams } from 'pip-services-commons-node';
import { PagingParams} from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { DirectClient } from 'pip-services-net-node';

import { IEmailTemplatesClientV1 } from './IEmailTemplatesClientV1';
//import { IEmailTemplatesController } from 'pip-services-emailtemplates-node';
import { EmailTemplateV1 } from './EmailTemplateV1';

export class EmailTemplatesDirectClientV1 extends DirectClient<any> implements IEmailTemplatesClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("pip-services-emailtemplates", "controller", "*", "*", "*"))
    }

    public getTemplates(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<EmailTemplateV1>) => void): void {
        let timing = this.instrument(correlationId, 'email_templates.get_templates');
        this._controller.getTemplates(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getTemplateById(correlationId: string, id: string, 
        callback: (err: any, template: EmailTemplateV1) => void): void {
        let timing = this.instrument(correlationId, 'email_templates.get_template_by_id');
        this._controller.getTemplateById(correlationId, id, (err, template) => {
            timing.endTiming();
            callback(err, template);
        });
    }

    public getTemplateByIdOrName(correlationId: string, idOrName: string, 
        callback: (err: any, template: EmailTemplateV1) => void): void {
        let timing = this.instrument(correlationId, 'email_templates.get_template_by_id_or_name');
        this._controller.getTemplateByIdOrName(correlationId, idOrName, (err, template) => {
            timing.endTiming();
            callback(err, template);
        });
    }

    public createTemplate(correlationId: string, template: EmailTemplateV1, 
        callback: (err: any, template: EmailTemplateV1) => void): void {
        let timing = this.instrument(correlationId, 'email_templates.create_template');
        this._controller.createTemplate(correlationId, template, (err, template) => {
            timing.endTiming();
            callback(err, template);
        });
    }

    public updateTemplate(correlationId: string, template: EmailTemplateV1, 
        callback: (err: any, template: EmailTemplateV1) => void): void {
        let timing = this.instrument(correlationId, 'email_templates.update_template');
        this._controller.updateTemplate(correlationId, template, (err, template) => {
            timing.endTiming();
            callback(err, template);
        });
    }

    public deleteTemplateById(correlationId: string, id: string,
        callback: (err: any, template: EmailTemplateV1) => void): void {
        let timing = this.instrument(correlationId, 'email_templates.delete_template_by_id');
        this._controller.deleteTemplateById(correlationId, id, (err, template) => {
            timing.endTiming();
            callback(err, template);
        });
    }
}