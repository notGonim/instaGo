import { Redirect, Route } from 'react-router'
import * as ROUTES from '../constants/routes'
import React from 'react'



export default function ProtectedRoute({ user, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (user) {
                    return React.cloneElement(children, { user });
                }

                if (!user) {
                    return (
                        <Redirect
                            to={{
                                pathname: ROUTES.LOGIN,
                                state: { from: location }
                            }}
                        />
                    );
                }

                return null;
            }}
        />
    );
}