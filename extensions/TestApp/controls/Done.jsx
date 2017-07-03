var React = require('react');
var ReactDOM = require('react-dom');

const Done = ({ Projects_List }) => (
    <div>
        <Done_Header Projects_count={Projects_List !== undefined ? (Projects_List.length)  : ""} />
        <Done_Body Projects_List={Projects_List} />
    </div>
)
const Done_Header = ({Projects_count}) => (
    <div className="project_header">Done
               <span className="box_01">{Projects_count} <br/> <span className="project_t_01"> Projects </span></span>
    </div>
)

var Done_Body=React.createClass({
      render() {
        var rows = [];
        if (this.props.Projects_List !== undefined) {
            this.props.Projects_List.forEach((p) => {
              rows.push(<EachRow key={p.id} data={p} />)
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
  

module.exports = Done;