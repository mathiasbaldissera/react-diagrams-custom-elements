import { EditablePortModel } from "./EditablePortModel";
import _ from "lodash";
import {NodeModel, PortModelAlignment} from '@projectstorm/react-diagrams'
export class EditableNodeModel extends NodeModel {
  content: string;
  constructor(
    content: string = "content"
  ) {
    super({type: "Editable"});
    this.content = content;
    this.addPort(new EditablePortModel(PortModelAlignment.TOP));
    this.addPort(new EditablePortModel(PortModelAlignment.LEFT));
    this.addPort(new EditablePortModel(PortModelAlignment.BOTTOM));
    this.addPort(new EditablePortModel(PortModelAlignment.RIGHT));
  }

  serialize() {
    return _.merge(super.serialize(), {
      content: this.content
    });
  }
}
