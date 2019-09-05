import * as _ from "lodash";
import { PortModel, PortModelAlignment, LinkModel, DefaultLinkModel } from "@projectstorm/react-diagrams";
import { DeserializeEvent } from "@projectstorm/react-canvas-core";
import ArrowHeadModel from "../../custom_links/arrowhead/ArrowHeadModel";

export class EditablePortModel extends PortModel {

	constructor(pos: PortModelAlignment=PortModelAlignment.TOP) {
		super({alignment: pos,name: pos});
	}

	serialize() {
		return _.merge(super.serialize(), {
			position: this.options.alignment
		});
	}



	createLinkModel(): LinkModel {
		return new ArrowHeadModel();
	}
}
