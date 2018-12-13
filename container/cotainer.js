const container = config => ({
    get(service) {
        if (!config[service]) {
            throw new Error(`Service ${service} not found`);
        }

        const serviceFactory = config[service];
        return serviceFactory(this);
    }
});

module.exports = container;
