import {
  DiagramEngine,
  DiagramWidget} from "storm-react-diagrams";
import * as React from "react";
import "../App.css";

require("storm-react-diagrams/dist/style.min.css");

interface IDiagramProps {
  engine: DiagramEngine;
}

export default class Diagram extends React.Component<IDiagramProps> {
  // constructor(props: Readonly<IDiagramProps>) {
  //   super(props);
  // }

  render() {
    return (
        <DiagramWidget
        allowLooseLinks={false}
        deleteKeys={[46]}
        smartRouting={true}
          className="srd-demo-canvas"
          diagramEngine={this.props.engine}
        />
    );
  }
}
