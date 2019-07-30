import React, { ReactPropTypes } from "react";
interface VerticalDividerProps {
  opacity?:
    | 0.1
    | 0.2
    | 0.25
    | 0.3
    | 0.4
    | 0.5
    | 0.6
    | 0.7
    | 0.75
    | 0.8
    | 0.9
    | 1;
  color?: "black" | "white";
  height?: string | number;
}
export default (props: VerticalDividerProps) => {
  let defColor;
  if (props.color == null) defColor = "white";
  else defColor = props.color;

  let color = defColor == "black" ? "rgba(0,0,0," : "rgba(255,255,255,";

  let defOpacify
  if (props.opacity == null) defOpacify = 0.2;
  else defOpacify = props.opacity


  let background = color + defOpacify + ")";
  return (
    <div
      className="mx-1"
      style={{
          borderRadius: 100,
        background,
        width: 3,
        minHeight: 15,
        height: props.height ? props.height : "80%"
      }}
    />
  );
};
