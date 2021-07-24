import React from "react";

import { Route } from "react-router-dom";

import DefaultLayout from "../Layouts/Default.layout";

const DefaultHOC = ({ component, ...rest }) => {
    const Component = component;
    return(
        <>
          <Route {...rest} component={(props) => (
              <DefaultLayout>
                  <Component {...props} />
              </DefaultLayout>
          )}
           />
        </>
    );
};

export default DefaultHOC;