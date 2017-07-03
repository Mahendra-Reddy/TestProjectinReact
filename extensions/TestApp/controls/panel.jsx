var React = require('react');
var ReactDOM = require('react-dom');

var To_do=require('./To_do');
var In_Progress=require('./In_Progress');
var Done=require('./Done');

const Bottom_Panel=({Projects_List })=>(
      <div className="row"> 
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12"><To_do Projects_List={Projects_List.To_do}/></div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12"><In_Progress Projects_List={Projects_List.In_Process}/></div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12"><Done Projects_List={Projects_List.Done}/></div>
        </div>
)
module.exports=Bottom_Panel;