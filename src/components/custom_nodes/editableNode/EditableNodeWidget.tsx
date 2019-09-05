import * as React from "react";
import { EditableNodeModel } from "./EditableNodeModel";
import "./EditableNodeWidgedStyle.css";
import EditableSingleFlield from "../../custom_components/EditableSingleField";
import { PortWidget, DiagramEngine, PortModelAlignment } from "@projectstorm/react-diagrams";
export interface EditableWidgetProps {
  nodeModel: EditableNodeModel;
  engine: DiagramEngine
}

export interface EditableWidgetState {
  content: string;
  height: number;
  width: number;
  editingSomething: boolean;
  editingKey: string;
}

interface ContextInformation {
  context: string;
  entity: string;
}
interface AtributeInformation {
  atribute: string;
}

export class EditableNodeWidget extends React.Component<
  EditableWidgetProps,
  EditableWidgetState
> {
  private divElement: HTMLDivElement;

  constructor( props: EditableWidgetProps) {
    super(props);
    this.state = {
      content: "",
      height: 0,
      width: 0,
      editingSomething: false,
      editingKey: ""
    };

    //binding the methods to this element
    this._editableObjectDoubleClick = this._editableObjectDoubleClick.bind(this);
    this._contentOnChange = this._contentOnChange.bind(this);
    this._onBlurOrEnter = this._onBlurOrEnter.bind(this);
  }


  /**
   * Pass this on onDoubleClick.
   * You change the states to make the fields know it's in edit mode, and tell who is in the edit mode
   */
  _editableObjectDoubleClick = (content: string) => {
    if (this.state.editingSomething) return;
    this.setState({
      editingSomething: true,
      editingKey: content
    });
  };

  /**
   * What you'll do when the content is changed
   * Usually, you update the model and the state
   */
  _contentOnChange = (evt: React.FormEvent<HTMLInputElement>) => {
    this.props.nodeModel.content = evt.currentTarget.value;
    this.setState({ content: evt.currentTarget.value });
  };

  /**
   * What you will do when the InputField lost focus or you press enter
   * Usually, you change the states to make the fields know it's not in edit mode
   */
  _onBlurOrEnter = () => {
    this.setState({
      editingSomething: false,
      editingKey: ""
    });
  };

  /**
   * copy atributes from nodeModel
   */
  componentWillMount() {
    const content = this.props.nodeModel.content;
    this.setState({ content });
  }

  /**
   * Change the width and height values of the element, to put the ports on right place
   */
  componentDidMount() {
    const height = this.divElement.clientHeight;
    const width = this.divElement.clientWidth;
    this.setState({ height, width });
  }
  componentDidUpdate() {
    const height = this.divElement.clientHeight;
    const width = this.divElement.clientWidth;
    if (this.state.height !== height || this.state.width !== width)
      this.setState({ height, width });
  }

  render() {
    return (
      <div
        ref={divElement => (this.divElement = divElement)}
        className={"editable-node"}
      >
        <div className="editable-border">
          <div className="editable-header">
            <div
              onDoubleClick={() => {
                this._editableObjectDoubleClick("content");
              }}
            >
              <EditableSingleFlield
                elementKey="content"
                editingKey={this.state.editingKey}
                beingEdited={this.state.editingSomething}
                content={this.props.nodeModel.content}
                onChange={this._contentOnChange}
                onBlurOrEnter={this._onBlurOrEnter}
              />
            </div>
          </div>

        </div>
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            background: "rgba(0,0,250,0.5)",
            left: -15, //old: -8
            top: this.state.height / 2 - 8
          }}
        >
        <PortWidget style={{width: 15, height:15} }port={this.props.nodeModel.getPort(PortModelAlignment.LEFT)} engine={this.props.engine}/>
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            background: "rgba(0,0,250,0.5)",
            left: this.state.width / 2 - 8,
            top: -15 //old: -8
          }}
        >
        <PortWidget style={{width: 15, height:15} } port={this.props.nodeModel.getPort(PortModelAlignment.TOP)} engine={this.props.engine}/>
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            background: "rgba(0,0,250,0.5)",
            left: this.state.width, //old: this.state.width - 8,
            top: this.state.height / 2 - 8
          }}
        >
        <PortWidget style={{width: 15, height:15} } port={this.props.nodeModel.getPort(PortModelAlignment.RIGHT)} engine={this.props.engine}/>
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            background: "rgba(0,0,250,0.5)",
            left: this.state.width / 2 - 8,
            top: this.state.height //old: this.state.height - 8
          }}
        >
        <PortWidget style={{width: 15, height:15} } port={this.props.nodeModel.getPort(PortModelAlignment.BOTTOM)} engine={this.props.engine}/>
        </div>
      </div>
    );
  }
}
