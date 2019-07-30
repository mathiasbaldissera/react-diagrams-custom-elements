import * as React from "react";
import { PortWidget, BaseWidgetProps, NodeModel, BaseWidget } from "storm-react-diagrams";
import { EditableNodeModel } from "./EditableNodeModel";

export interface EditablePortProps extends BaseWidgetProps {
	name: string;
	node: EditableNodeModel;
	style?:{}
}

export interface EditablePortState {
	selected: boolean;
}

/**
 * @author Dylan Vorster
 */
export class EditablePortWidget extends BaseWidget<EditablePortProps, EditablePortState> {
	constructor(props: EditablePortProps) {
		super( "srd-port" ,props);
		this.state = {
			selected: false
		};
	}
	render() {
		return (
			<div

				{...this.getProps()}
				onMouseEnter={() => {
					this.setState({ selected: true });
				}}
				onMouseLeave={() => {
					this.setState({ selected: false });
				}}
				data-name={this.props.name}
				data-nodeid={this.props.node.getID()}
			/>
		);
	}
}