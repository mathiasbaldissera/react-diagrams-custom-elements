import React from "react";
import "./App.css";
import Diagram from "./components/Diagram";
import Toolbar from "./components/Toolbar";
import { Row, Col, Button, ButtonToolbar } from "react-bootstrap";

import { EditablePortModel } from "./components/custom_nodes/editableNode/EditablePortModel";
import { EditableNodeFactory } from "./components/custom_nodes/editableNode/EditableNodeFactory";
import { EditableNodeModel } from "./components/custom_nodes/editableNode/EditableNodeModel";
import { SimplePortFactory } from "./components/custom_nodes/editableNode/SimplePortFactory";
import createEngine,{ DiagramModel, DiagramEngine, NodeLayerFactory, LinkLayerFactory, DefaultLinkModel, PortModelAlignment } from "@projectstorm/react-diagrams";
import { BaseModel, LayerModel } from "@projectstorm/react-canvas-core";
import ArrowHeadFactory from "./components/custom_links/ArrowHeadFactory";
import ArrowHeadModel from "./components/custom_links/ArrowHeadModel";

interface AppProps {}
interface AppState {
  itens: BaseModel[];
  model: DiagramModel;
  serialization: string;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: Readonly<AppProps>) {
    super(props);
    this.state = {
      itens: [],
      model: null,
      serialization: ""
    };
    this._createNewClass = this._createNewClass.bind(this);
    this._setupInitialState = this._setupInitialState.bind(this);
    this._serializeDiagram = this._serializeDiagram.bind(this)
  }

  componentWillMount() {
    this._setupInitialState();
  }

  _setupInitialState() {
    this.setState({ model: new DiagramModel() });
    let node1 = new EditableNodeModel("Node1");
    let node2 = new EditableNodeModel("Node2");
    let node3 = new EditableNodeModel("Node3");

    node1.setPosition(100, 200);
    node2.setPosition(500, 200);
    node3.setPosition(300, 25);
    let link = new ArrowHeadModel;
    link.setSourcePort(node1.getPort(PortModelAlignment.RIGHT))
    link.setTargetPort(node2.getPort(PortModelAlignment.LEFT))

    this.setState({ itens: [node1, node2, node3, link] });
  }

  _serializeDiagram(){
    let serialization = JSON.stringify(
      this.state.model.serialize());
      this.setState({serialization})    
  }
  setupFactories(engine: DiagramEngine) {
    engine.getPortFactories().registerFactory(
      new SimplePortFactory("Editable", () => new EditablePortModel())
    );
    engine.getNodeFactories().registerFactory(new EditableNodeFactory());
    engine.getLinkFactories().registerFactory(new ArrowHeadFactory())
  }

  engine = createEngine()
  render() {

    this.setupFactories(this.engine);
    let model = new DiagramModel()
    model.addAll(...this.state.itens )
    this.engine.setModel(model)
    // this.setState({model: new DiagramModel()})
    // this.state.model.addAll(...this.state.itens);
    // engine.setModel(this.state.model);

    return (
      <div className="App">
        <Toolbar
          createDefaultClass={() => this._createNewClass("default")}
          createAbstractClass={() => this._createNewClass("abstract")}
          createEnumClass={() => this._createNewClass("enumerator")}
        />
        <Row className="m-0 p-0">
          <Col className="flex-column bg-secondary">
            <Button
              // onClick={() => {
              //   this.state.model
              //     .getSelectedItems()
              //     .forEach((value, key) => {
              //       // this.state.model.removeNode()
              //       if (value instanceof NodeModel) {
              //         this.state.model.removeNode(value);
              //       } else if (value.getParent() instanceof LinkModel)
              //         // console.log(value )
              //         this.state.model.removeLink(
              //           value.getParent() as LinkModel
              //         );
              //       this.state.itens.indexOf(value);
              //     });
              //   // this.state.model.removeNode(this.))
              // }}
              className="mx-3 my-1"
              variant="warning"
            >
              Delete Element
            </Button>
            <Button
              onClick={this._setupInitialState}
              className="mx-3 my-1"
              variant="danger"
            >
              Reset Diagram
            </Button>
            <Button
              onClick={this._serializeDiagram}
              className="mx-3 mt-1 mb-3"
              variant="light"
            >
              Serialize Diagram
            </Button>
            <p className="text-light mb-0 mx-3">Serialize Result:</p>
            <textarea
            value={this.state.serialization}
              className="mx-3 form-control"
              style={{
                width: "85%",
                height: 300,
                padding: 4
              }}
            />
          </Col>
          <Col xs={10} className="m-0 p-0">
            <Diagram engine={this.engine} />
          </Col>
        </Row>
      </div>
    );
  }

  _createNewClass = (type: string) => {
    switch (type) {
      case "default":
        let noded = new EditableNodeModel("NodeX");
        noded.setPosition(30, 30);
        this.setState({
          itens: this.state.itens.concat(noded)
        });
        break;
      default:
        let nodedf = new EditableNodeModel("NodeX");
        nodedf.setPosition(30, 30);
        this.setState({
          itens: this.state.itens.concat(nodedf)
        });
        break;
    }
  };
}

export default App;
