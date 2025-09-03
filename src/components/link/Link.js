import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Link as ReachLink } from "@reach/router";
// import withStyles from "@material-ui/core/styles/withStyles";
// import styles from "./style";

const Link = ({
  to = "",
  text = "",
  children = null,
  onClick = () => {},
  ...rest
}) => {
  const withText = text ? (
    <div
      onClick={() => {
        onClick && onClick();
      }}
      {...rest}
    >
      {children}
      {text}
    </div>
  ) : null;

  const onlyChildren = children ? (
    <button
      type="button"
      onClick={() => {
        onClick && onClick();
      }}
      {...rest}
    >
      {children}
    </button>
  ) : null;

  // eslint-disable-next-line no-nested-ternary
  return to?.startsWith("/") ? (
    to.match(/app\/.+/g) ? (
      <ReachLink to={to} {...rest}>
        {withText || onlyChildren}
      </ReachLink>
    ) : (
      <GatsbyLink rel="prefetch" to={to} {...rest}>
        {withText || onlyChildren}
      </GatsbyLink>
    )
  ) : !to?.startsWith("#") ? (
    <a href={to} target="_blank" rel="noopener noreferrer">
      {withText || onlyChildren}
    </a>
  ) : (
    withText || onlyChildren
  );
};

export default Link;
