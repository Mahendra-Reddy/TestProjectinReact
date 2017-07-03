var React = require('react');
var ReactDOM = require('react-dom');

var boostrapStyle = require("./assets/css/bootstrap.css");
var boostrapThemeStyle = require("./assets/css/bootstrap-theme.css");
var mainstyle = require("./assets/css/main.css");

var Panels = require('./controls/panel');
var Actions = require('./flux/Actions/action');
var Store = require('./flux/Stores/store');


var BasicContainer = React.createClass({
    getInitialState() {
        return Store.getState();
    },
    componentDidMount: function () {
        Store.listen(this.onChange);
        this.initializeAllActions();
        boostrapStyle.use();
        boostrapThemeStyle.use();
        mainstyle.use();
    },
    initializeAllActions() {
        Actions.getData();
    },
    onChange: function (state) {
        this.setState(state);
    },
    onKeyPress(event){
                if(event.key == 'Enter') { 
                Actions.onEnter(event.target.value);
                } 
            },
    render: function () {
        if (this.state.Projects_List !== undefined && this.state.Projects_List.length !== 0) {
            var Total = this.state.Projects_List.To_do.length +
                this.state.Projects_List.In_Process.length +
                this.state.Projects_List.Done.length;
        }

        var BottomPanel = [];
        BottomPanel.push(<Panels Projects_List={this.state.Projects_List} />)
        return (
            <div className="container-fluid">
                <div className="row" style={{marginTop: '10pt'}}>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12"><span className="text_01">add Project</span> <input type="text"
                    onKeyPress={this.onKeyPress}/></div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" style={{textAlign:'right'}}><span className="text_01" style={{ padding: '2pt 15pt 2pt 5pt'}}>Total</span>    <br/>
                    <span className="box_02">{Total} <br/> <span className="project_t_01"> Projects </span></span></div>
                   </div>
                    {BottomPanel}
                
            </div>
        );
    }
});

ReactDOM.render(<BasicContainer />, document.getElementById('body'));
