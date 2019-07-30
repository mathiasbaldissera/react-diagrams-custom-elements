import * as SRD from "storm-react-diagrams";
import { EditableNodeWidget } from "./EditableNodeWidget";
import { EditableNodeModel } from "./EditableNodeModel";
import * as React from "react";

export class EditableNodeFactory extends SRD.AbstractNodeFactory {
	constructor() {
		super("Editable");
	}

	generateReactWidget(diagramEngine: SRD.DiagramEngine, nodeModel: EditableNodeModel): JSX.Element {
		return <EditableNodeWidget nodeModel={nodeModel} />;
	}

	getNewInstance() {
		return new EditableNodeModel("Class");
	}
}
