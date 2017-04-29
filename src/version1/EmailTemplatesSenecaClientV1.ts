let _ = require('lodash');

import { ConfigParams } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { CommandableSenecaClient } from 'pip-services-net-node';

import { EmailTemplateV1 } from './EmailTemplateV1';
import { IEmailTemplatesClientV1 } from './IEmailTemplatesClientV1';

export class EmailTemplatesSenecaClientV1 extends CommandableSenecaClient implements IEmailTemplatesClientV1 {       

    constructor(config?: any) {
        super('email_templates');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getTemplates(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<EmailTemplateV1>) => void): void {
        this.callCommand( 
            'get_templates', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getTemplateById(correlationId: string, id: string,
        callback: (err: any, template: EmailTemplateV1) => void): void {
        this.callCommand( 
            'get_template_by_id',
            correlationId,
            {
                template_id: id
            }, 
            callback
        );        
    }

    public getTemplateByIdOrName(correlationId: string, idOrName: string,
        callback: (err: any, template: EmailTemplateV1) => void): void {
        this.callCommand( 
            'get_template_by_id_or_name',
            correlationId,
            {
                id_or_name: idOrName
            }, 
            callback
        );        
    }

    public createTemplate(correlationId: string, template: EmailTemplateV1,
        callback: (err: any, template: EmailTemplateV1) => void): void {
        this.callCommand(
            'create_template',
            correlationId,
            {
                template: template
            }, 
            callback
        );
    }

    public updateTemplate(correlationId: string, template: EmailTemplateV1,
        callback: (err: any, template: EmailTemplateV1) => void): void {
        this.callCommand(
            'update_template', 
            correlationId,
            {
                template: template
            }, 
            callback
        );
    }

    public deleteTemplateById(correlationId: string, id: string,
        callback: (err: any, template: EmailTemplateV1) => void): void {
        this.callCommand(
            'delete_template_by_id', 
            correlationId,
            {
                template_id: id
            }, 
            callback
        );
    }
    
}
