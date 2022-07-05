import React from "react";

type StylesProps = {
  styles: React.CSSProperties;
};

export const Styles = ({ styles }:StylesProps) => {
  return <div style={styles}>Text goes here</div>;
};
