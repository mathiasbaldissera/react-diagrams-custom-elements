import { NodeModel, DiagramEngine } from "storm-react-diagrams";
import { EditablePortModel } from "./EditablePortModel";
import _ from "lodash";

export class EditableNodeModel extends NodeModel {
  content: string;
  constructor(
    content: string = "content"
  ) {
    super("Editable");
    this.content = content;
    this.addPort(new EditablePortModel("topa"));
    this.addPort(new EditablePortModel("left"));
    this.addPort(new EditablePortModel("bottom"));
    this.addPort(new EditablePortModel("right"));
  }

  deSerialize(object: any, engine: DiagramEngine) {
    super.deSerialize(object, engine);
    this.content = object.content;
  }

  serialize() {
    return _.merge(super.serialize(), {
      content: this.content
    });
  }
}
