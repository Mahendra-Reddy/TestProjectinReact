var React = require('react');
var ReactDOM = require('react-dom');


const To_do = ({ Projects_List }) => (
    <div>
        <To_do_Header Projects_count={Projects_List !== undefined ? (Projects_List.length) : ""} />
        <To_do_Body Projects_List={Projects_List} />
    </div>
)
const To_do_Header = ({Projects_count}) => (
    <div className="project_header">
        To do
             <span className="box_01">{Projects_count} <br/> <span className="project_t_01"> Projects </span></span>
    </div>
)

var To_do_Body = React.createClass({
    render() {
        var rows = [];
        if (this.props.Projects_List !== undefined) {
            this.props.Projects_List.forEach((p) => {
                rows.push(<EachRow key={p.id} data={p} />)
            })
        }
        return (
            <div>
                {rows}
            </div>
        )
    }
});

var EachRow = React.createClass({
    render() {
        return (
            <div className="project_list_01">
                {this.props.data.title}
            </div>
        )
    }
});
module.exports = To_do;