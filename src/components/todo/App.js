import React, { useState } from "react";

import UpcomingTodos from "./UpcomingTodos";
import OverduedTodos from "./OverduedTodos";
import CompletedTodos from "./CompletedTodos";
import Route from "./Route";
import Header from "./Header";

const App = (params) => {
  const [link, setLink] = useState(window.location.pathname);

  const linkOnChange = (params) => {
    setLink(params);
  };

  return (
    <div className="container mt-5">
      <Header linkOnChange={linkOnChange} key={link} />

      <Route route="/">
        <UpcomingTodos />
      </Route>

      <Route route="/overdued">
        <OverduedTodos />
      </Route>

      <Route route="/completed">
        <CompletedTodos />
      </Route>
    </div>
  );
};

export default App;
