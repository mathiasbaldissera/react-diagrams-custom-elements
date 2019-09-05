import { LinkModelGenerics, LinkModel, LabelModel } from "@projectstorm/react-diagrams-core";
import _ from "lodash";
import { DefaultLinkModelOptions, DefaultLinkModel } from "@projectstorm/react-diagrams";
import { BaseModelOptions } from "@projectstorm/react-canvas-core";

/**
 * @author Mathias Baldissera
 */

// export interface DefaultLinkModelListener extends LinkModelListener {
//   colorChanged?(
//     event: BaseEvent<ArrowHeadModel> & { color: null | string }
//   ): void;

//   widthChanged?(event: BaseEvent<ArrowHeadModel> & { width: 0 | number }): void;
// }

export interface ArrowHeadModelOptions extends BaseModelOptions{
  selectedColor: string
  color: string
  width: number
  type: string
}
export interface ArrowHeadModelGenerics extends LinkModelGenerics{
  OPTIONS: ArrowHeadModelOptions

}
export default  class ArrowHeadModel extends DefaultLinkModel {
  markers: any;

  constructor() {
    super({
      color: "#000",
      selectedColor: "#61dafb",
      width: 3,
      type: "arrow"
    });
    this.setup(true,true)
  }
  setup(
    startMarker: boolean,
    endMarker: boolean,
  ) {
    // this.color = "rgba(0,0,0,1)";
    this.markers = { startMarker, endMarker };
  }

	performanceTune() {
		return false;
  }
  getOptions(){
    return (this.options as ArrowHeadModelOptions)
  }

  serialize() {
    return _.merge(super.serialize(), {
      width: this.getOptions().width,
      // color: this.color,
    });
  }

  deserialize(ob: any) {
    super.deserialize(ob);
    // this.getOptions().color = ob.color;
    this.getOptions().width = ob.width;
  }

  addLabel(label: LabelModel | string) {
    // if (label instanceof LabelModel) {
    //   return super.addLabel(label);
    // }
    // let labelOb = new DefaultLabelModel();
    // labelOb.setLabel(label);
    // return super.addLabel(labelOb);
    throw new Error(
      "addLabel (ob, engine) isn't usable here. "
    );
  }

  setMarkers(
    startMarker: boolean,
    endMarker: boolean
  ) {
    this.markers = {
      startMarker: startMarker,
      endMarker: endMarker
    };
  }
}
