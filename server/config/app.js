let config = null;

module.exports = {
    get config() {
        return config;
    },
    loadConfig(location) {
        config = require(location);
        return config;
    }
}