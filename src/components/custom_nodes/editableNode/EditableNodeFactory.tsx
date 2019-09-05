import { EditableNodeWidget } from "./EditableNodeWidget";
import { EditableNodeModel } from "./EditableNodeModel";
import * as React from "react";
import {AbstractReactFactory} from '@projectstorm/react-canvas-core'
import { NodeModel, DiagramEngine } from "@projectstorm/react-diagrams";

export class EditableNodeFactory extends AbstractReactFactory<EditableNodeModel, DiagramEngine> {
	generateModel(event: import("@projectstorm/react-canvas-core").GenerateModelEvent):EditableNodeModel{
		return new EditableNodeModel("Class");	
	}
	constructor() {
		super("Editable");
	}

	generateReactWidget(event : {model: EditableNodeModel}): JSX.Element {
		return <EditableNodeWidget nodeModel={event.model} engine={this.engine}/>;
	}
}
