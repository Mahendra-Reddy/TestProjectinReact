var alt = require('../alt');

var MockActions = require('../Actions/action');
var DataSource = require('../Sources/source');

module.exports = alt.createStore({
    bindListeners: {
        handlegetData: MockActions.getData,
        handleonEnter: MockActions.onEnter,
    },

    state: {
        Projects_List: []
    },

    handlegetData() {
        var Projects = DataSource.getProjectsList();
        var Projects_List = this.getDataList(Projects);
        this.setState({
            Projects_List: Projects_List
        })
    },

    getDataList(data) {
        var To_do = [];
        var In_Process = [];
        var Done = [];
        data.forEach((p) => {
            if (p.category === "To_do") {
                To_do.push(p)
            } else if (p.category === "In_Process") {
                In_Process.push(p)
            } else {
                Done.push(p)
            }
        })
        return {
            To_do: To_do,
            In_Process: In_Process,
            Done: Done
        }
    },
    handleonEnter(obj) {
        var AddItem = this.state.Projects_List;
        AddItem.To_do.push({
            id: Math.random(),
            title: obj.obj,
            category: "To_do"
        })
    }

});