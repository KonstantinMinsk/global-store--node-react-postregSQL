
import React, {useContext} from 'react';
import {Switch, Route} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
// import {SHOP_ROUTE} from "../utils/consts";
// import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    // const {user} = useContext(Context)
    const isAuth = false;
    // console.log(user)
    return (
        <Switch>
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
        </Switch>
    );
});

export default AppRouter;