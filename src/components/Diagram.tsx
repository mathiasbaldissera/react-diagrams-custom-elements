
import * as React from "react";
import "../App.css";
import { DiagramEngine } from "@projectstorm/react-diagrams";
import { CanvasWidget } from "@projectstorm/react-canvas-core";


interface IDiagramProps {
  engine: DiagramEngine;
}

export default class Diagram extends React.Component<IDiagramProps> {
  // constructor(props: Readonly<IDiagramProps>) {
  //   super(props);
  // }

  render() {
    return (
      <CanvasWidget
      // allowLooseLinks={false}
      // deleteKeys={[46]}
      // smartRouting={true}
        className="srd-demo-canvas"
        engine={this.props.engine}
      />
    );
  }
}
