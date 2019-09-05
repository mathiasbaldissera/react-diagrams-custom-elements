import React from "react";
import { ArrowHeadWidgetRA } from "./ArrowHeadWidgetRA";
import ArrowHeadModel from "./ArrowHeadModel";
// import { Props, State } from "./ArrowHeadWidgetRA";
import { GenerateWidgetEvent } from "@projectstorm/react-canvas-core";
import { css, keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import {
  DiagramEngine,
  DefaultLinkFactory
} from "@projectstorm/react-diagrams";
/**
 * @author Mathias Baldissera
 */

export class S {
  static Keyframes = keyframes`
		from {
			stroke-dashoffset: 32;
		}
		to {
			stroke-dashoffset: 0;
		}
	`;

  static selected = css`
    stroke-dasharray: 8, 8;
    stroke-linecap: square;

    animation: ${S.Keyframes} 1s linear infinite;
  `;

  static Path = styled.path<{
    selected: boolean;
  }>`
    ${p => p.selected && S.selected};
    fill: none;
    pointer-events: all;
  `;
}

export default class ArrowHeadFactory extends DefaultLinkFactory {
  constructor() {
    super("arrow");
  }

  generateReactWidget(
    event: GenerateWidgetEvent<ArrowHeadModel>
  ): JSX.Element {
    return (
      <ArrowHeadWidgetRA
        link={event.model}
        diagramEngine={this.engine}
        factory={this}
      />
    );
  }

  generateLinkSegment(
    model: ArrowHeadModel,
    selected: boolean,
    path: string
  ) {
    return (
      <S.Path
        selected={selected}
        stroke={
          selected
            ? model.getOptions().selectedColor
            : model.getOptions().color
        }
        strokeWidth={model.getOptions().width}
        d={path}
      />
    );
  }

  generateLinkSegmentWithMarker(
    model: ArrowHeadModel,
    selected: boolean,
    path: string,
    startMarkerId: string = "-",
    endMarkerId: string = "-"
  ) {
    return (
      <S.Path
        selected={selected}
        stroke={
          selected
            ? model.getOptions().selectedColor
            : model.getOptions().color
        }
        strokeWidth={model.getOptions().width}
        markerStart={
          "url(#" + startMarkerId + ")"
        }
        markerEnd={"url(#" + endMarkerId + ")"}
        d={path}
      />

      // <g>
      //   <path
      //     // className={selected ? widget.bem("--path-selected") : ""}
      //     strokeWidth={model.width}
      //     stroke={model.color}
      //     d={path}
      //     markerStart={"url(#" + startMarkerId + ")"}
      //     markerEnd={"url(#" + endMarkerId + ")"}
      //   />
      // </g>
    );
  }
}
