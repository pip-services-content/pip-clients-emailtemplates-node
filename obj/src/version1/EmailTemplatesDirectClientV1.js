"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_net_node_1 = require("pip-services-net-node");
class EmailTemplatesDirectClientV1 extends pip_services_net_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services_commons_node_1.Descriptor("pip-services-emailtemplates", "controller", "*", "*", "*"));
    }
    getTemplates(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'email_templates.get_templates');
        this._controller.getTemplates(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getTemplateById(correlationId, id, callback) {
        let timing = this.instrument(correlationId, 'email_templates.get_template_by_id');
        this._controller.getTemplateById(correlationId, id, (err, template) => {
            timing.endTiming();
            callback(err, template);
        });
    }
    getTemplateByIdOrName(correlationId, idOrName, callback) {
        let timing = this.instrument(correlationId, 'email_templates.get_template_by_id_or_name');
        this._controller.getTemplateByIdOrName(correlationId, idOrName, (err, template) => {
            timing.endTiming();
            callback(err, template);
        });
    }
    createTemplate(correlationId, template, callback) {
        let timing = this.instrument(correlationId, 'email_templates.create_template');
        this._controller.createTemplate(correlationId, template, (err, template) => {
            timing.endTiming();
            callback(err, template);
        });
    }
    updateTemplate(correlationId, template, callback) {
        let timing = this.instrument(correlationId, 'email_templates.update_template');
        this._controller.updateTemplate(correlationId, template, (err, template) => {
            timing.endTiming();
            callback(err, template);
        });
    }
    deleteTemplateById(correlationId, id, callback) {
        let timing = this.instrument(correlationId, 'email_templates.delete_template_by_id');
        this._controller.deleteTemplateById(correlationId, id, (err, template) => {
            timing.endTiming();
            callback(err, template);
        });
    }
}
exports.EmailTemplatesDirectClientV1 = EmailTemplatesDirectClientV1;
//# sourceMappingURL=EmailTemplatesDirectClientV1.js.map