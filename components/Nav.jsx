import Link from "next/link";
import { withRouter } from "next/router";
import React from "react";

function Nav({ router }) {
  const { pathname } = router;
  const isActiveRoute = (path) => (path === pathname ? "active" : null);

  return (
    <div className="component-nav">
      <ul>
        <li className={isActiveRoute("/")}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={isActiveRoute("/done")}>
          <Link href="/done">
            <a>Done</a>
          </Link>
        </li>
        <li className={isActiveRoute("/add")}>
          <Link href="/add">
            <a>Add</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default withRouter(Nav);
