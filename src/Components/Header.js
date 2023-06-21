import React from "react";

function Header() {
  return (
    <div>
      <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>Asser Badauie</h1>
      <p>
        Pre-bundle them to improve page loading speed and convert CommonJS / UMD
        modules to ESM. The pre-bundling step is performed with esbuild and
        makes Vite's cold start time significantly faster than any
        JavaScript-based bundler.
      </p>
    </div>
  );
}

export default Header;
