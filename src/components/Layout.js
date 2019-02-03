import React from "react";
import { Link } from "gatsby";

import { rhythm, scale } from "../utils/typography";

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <div>
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `#d57500`
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
        </div>
      );
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `#b99c6b`
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      );
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(30),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer
          style={{
            fontSize: `small`,
            textAlign: `center`
          }}
        >
          © Copyright {new Date().getFullYear()},{" "}
          <a
            href="https://twitter.com/gruberchris"
            rel="noopener noreferrer"
            target="_blank"
          >
            Chris Gruber
          </a>
          .
          <p
            style={{
              marginTop: rhythm(0.25)
            }}
          >
            Built using
            {` `}
            <a
              href="https://www.gatsbyjs.org"
              rel="noopener noreferrer"
              target="_blank"
            >
              Gatsby
            </a>
            ,{` `}
            <a
              href="https://reactjs.org"
              rel="noopener noreferrer"
              target="_blank"
            >
              React
            </a>
            .{" CDN and other hosting services provided by "}
            <a
              href="https://www.netlify.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Netlify
            </a>
            .
          </p>
        </footer>
      </div>
    );
  }
}

export default Layout;
