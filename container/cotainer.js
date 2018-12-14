const container = config => ({
    get(service) {
        if (!config[service]) {
            throw new Error(`Service ${service} not found`);
        }

        const serviceDef = config[service];
        if (Array.isArray(serviceDef)) {
            const serviceFactory = serviceDef.pop();
            return serviceFactory(...serviceDef.map(this.get.bind(this)));
        }

        return serviceDef(this);
    }
});

module.exports = container;
