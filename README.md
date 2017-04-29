# <img src="https://github.com/pip-services/pip-services/raw/master/design/Logo.png" alt="Pip.Services Logo" style="max-width:30%"> <br/> Email Templates Microservice Client SDK for Node.js

This is a Node.js client SDK for [pip-services-emailtemplates](https://github.com/pip-services/pip-services-emailtemplates) microservice.
It provides an easy to use abstraction over communication protocols:

* Direct client
* HTTP client
* Seneca client (see http://www.senecajs.org)
* AWS Lambda client (see https://aws.amazon.com/lambda)

<a name="links"></a> Quick Links:

* [Development Guide](doc/Development.md)
* [API Version 1](doc/NodeClientApiV1.md)

## Install

Add dependency to the client SDK into **package.json** file of your project
```javascript
{
    ...
    "dependencies": {
        ....
        "pip-clients-emailtemplates-node": "^2.0.*",
        ...
    }
}
```

Then install the dependency using **npm** tool
```bash
# Install new dependencies
npm install

# Update already installed dependencies
npm update
```

## Use

Inside your code get the reference to the client SDK
```javascript
var sdk = new require('pip-clients-emailtemplates-node');
```

Define client configuration parameters that match configuration of the microservice external API
```javascript
// Client configuration
var config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};
```

Instantiate the client and open connection to the microservice
```javascript
// Create the client instance
var client = sdk.EmailTemplatesHttpClientV1(config);

// Connect to the microservice
client.open(null, function(err) {
    if (err) {
        console.error('Connection to the microservice failed');
        console.error(err);
        return;
    }
    
    // Work with the microservice
    ...
});
```

Now the client is ready to perform operations
```javascript
// Create a new emailtemplate
var template = {
    name: 'Welcome',
    subject: { en: 'Welcome to our product' },
    text: { en: 'Welcome <%= name %>!' },
    html: { en: '<h1>Welcome <%= name %>!<h1>' },
    status: 'completed'
};

client.createTemplate(
    null,
    emailtemplate,
    function (err, emailtemplate) {
        ...
    }
);
```

```javascript
// Get welcome email template
client.getTemplateByIdOrName(
    null, 'Welcome',
    function(err, template) {
    ...    
});
```    

## Acknowledgements

This client SDK was created and currently maintained by *Sergey Seroukhov*.

