import React, { Component } from "react";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";

interface Props {
  action: () => any;
  src: string;
  disabled?:boolean
  tooltipText: string;
  placement?: "top" | "bottom" | "left" | "right";
  variant?:
    | "link"
    | "dark"
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "outline-primary"
    | "outline-secondary"
    | "outline-success"
    | "outline-danger"
    | "outline-warning"
    | "outline-info"
    | "outline-dark"
    | "outline-light";
}
interface State {}

export default class TooltipImageButton extends Component<Props, State> {
  render() {
    return (
      <OverlayTrigger
        placement={this.props.placement ? this.props.placement : "bottom"}
        overlay={<Tooltip id={`tooltip-${"s"}`}>{this.props.tooltipText}</Tooltip>}
      >
        <Button
          {...this.props}
          onClick={this.props.action}
          className="mx-1 my-1 p-0 menu-button d-flex justify-content-center align-items-center"
          variant={this.props.variant ? this.props.variant : "dark"}
          style={{}}
        >
          <img
            width="18px"
            height="18px"
            className="p-0 m-0"
            src={this.props.src}
            alt={this.props.src}
          />
        </Button>
      </OverlayTrigger>
    );
  }
}
