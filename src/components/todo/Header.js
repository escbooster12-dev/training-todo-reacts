import React from "react";

import Link from "./Link";

const Header = ({ linkOnChange }) => {
  return (
    <div className="ui secondary pointing menu mb-2">
      <Link href="/" linkOnChange={linkOnChange} className="btn btn-info mr-1">
        Upcoming
      </Link>
      <Link
        href="/overdued"
        linkOnChange={linkOnChange}
        className="btn btn-info mr-1"
      >
        Overdued
      </Link>
      <Link
        href="/completed"
        linkOnChange={linkOnChange}
        className="btn btn-info"
      >
        Completed
      </Link>
    </div>
  );
};

export default Header;
