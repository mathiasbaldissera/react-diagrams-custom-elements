import * as React from "react";
import "react-bootstrap";
import {
  Navbar,
  ButtonToolbar,
  Button,
  NavItem,
  Nav,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
import "../App.css";
import VerticalDivider from "./stateless_components/VerticalDivider";
import TooltipImageButton from "./custom_components/TooltipImageButton";

const EXAMPLE_ICON: string = require("../imgs/icons/square.png");
export interface IToolbarProps {
  createDefaultClass: () => any;
  createAbstractClass: () => any;
  createEnumClass: () => any;
}

export interface IToolbarState {}

export default class Toolbar extends React.Component<
  IToolbarProps,
  IToolbarState
> {
  constructor(props: IToolbarProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div>
        <Navbar className="py-0" bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">
            Editable React Diagram Component
          </Navbar.Brand>
        </Navbar>
        <Navbar className="py-0" bg="dark" variant="dark" expand="lg">
          <Nav className="">
            <Nav.Item>
              <TooltipImageButton
                action={this.props.createDefaultClass}
                src={EXAMPLE_ICON}
                tooltipText="Default Node"
              />
            </Nav.Item>
          </Nav>
          <VerticalDivider />
          <Nav className="">
            <Nav.Item>
              <TooltipImageButton
              disabled
                action={this.props.createDefaultClass}
                src={EXAMPLE_ICON}
                tooltipText="Default Node"
              />
            </Nav.Item>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
