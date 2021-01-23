import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

export const ScrollToTop = ({ history, children }) => {
  useEffect(() => {
    const unListen = history.listen(() => {
      window.scrollTo(0, 0);
    });

    return () => {
      unListen();
    };
  }, [history]);

  return <>{children}</>;
};

export default withRouter(ScrollToTop);
