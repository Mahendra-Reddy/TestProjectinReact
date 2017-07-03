var alt = require('../alt');

class actions {

    constructor() {
        // for single action without param
        this.generateActions('getData');
    }
    onEnter(obj) {
        return {obj}
    }
}

module.exports = alt.createActions(actions);