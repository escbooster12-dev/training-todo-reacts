import React, { useState } from "react";

const Link = ({ className, href, children, linkOnChange }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);

    linkOnChange(window.location.pathname);
  };

  return (
    <a
      onClick={onClick}
      className={`${className} ${
        href === window.location.pathname ? "disabled" : ""
      }`}
      href={href}
    >
      {children}
    </a>
  );
};

export default Link;
