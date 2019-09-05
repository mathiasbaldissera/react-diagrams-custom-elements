import { PortModel, DiagramEngine } from "@projectstorm/react-diagrams";
import { AbstractModelFactory } from "@projectstorm/react-canvas-core";

export class SimplePortFactory extends AbstractModelFactory<PortModel, DiagramEngine> {
	generateModel(event: import("@projectstorm/react-canvas-core").GenerateModelEvent): PortModel<import("@projectstorm/react-diagrams").PortModelGenerics> {
		return this.cb(event.initialConfig);
	}
	cb: (initialConfig?: any) => PortModel;

	constructor(type: string, cb: (initialConfig?: any) => PortModel) {
		super(type);
		this.cb = cb;
	}

	getNewInstance(initialConfig?: any): PortModel {
		return this.cb(initialConfig);
	}
}
