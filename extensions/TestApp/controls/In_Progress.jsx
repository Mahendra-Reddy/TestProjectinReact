var React = require('react');
var ReactDOM = require('react-dom');

const In_Progress = ({ Projects_List }) => (
    <div>
        <In_Progress_Header Projects_count={Projects_List !== undefined ? (Projects_List.length): ""} />
        <In_Progress_Body Projects_List={Projects_List} />
    </div>
)

const In_Progress_Header = ({Projects_count}) => (
    <div className="project_header">In Progress
              <span className="box_01">{Projects_count} <br/> <span className="project_t_01"> Projects </span></span>
    </div>
)
var In_Progress_Body = React.createClass({
    render() {
        var rows = [];
        if (this.props.Projects_List !== undefined) {
            this.props.Projects_List.forEach((p) => {
                if (p.category === "In_Process") {
                    rows.push(<EachRow key={p.id} data={p} />)
                }
            })
        }
        return (
            <div>{rows}</div>
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

module.exports = In_Progress;