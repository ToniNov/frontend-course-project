import React from 'react';
import {Navigate, useRoutes} from "react-router-dom";

import {AppRouterPath} from "./appRouterPath";

import {NotFoundPage} from "../pages/NotFoundPage/NotFoundPage";
import {Main} from "../pages/Main";
import {Layout} from "../common/components/Layout/Layout";
import {Item} from '../pages/Item';
import {Tag} from '../pages/Tag';
import {Collection} from '../pages/Collection';
import {User} from '../pages/User';
import {Admin} from '../pages/Admin';
import {AuthCheck} from "./AuthCheck";

export const AppRouter = () => {
    return useRoutes([
        {
            index: true,
            element: <Navigate to={AppRouterPath.Main}/>,
        },
        {
            path: AppRouterPath.Other,
            element: <Navigate to={AppRouterPath.NotFound}/>,
        },
        {
            path: AppRouterPath.NotFound,
            element: <NotFoundPage/>,
        },
        {
            path: AppRouterPath.Main,
            element: <Layout/>,
            children: [
                {
                    index: true,
                    element: <Main/>,
                },
            ],
        },
        {
            path: AppRouterPath.User,
            element: <Layout/>,
            children: [
                {
                    path: AppRouterPath.Id,
                    element: <User/>,
                },
            ],
        },
        {
            path: AppRouterPath.Collection,
            element: <Layout/>,
            children: [
                {
                    path: AppRouterPath.Id,
                    element: <Collection/>,
                },
            ],
        },
        {
            path: AppRouterPath.Item,
            element: <Layout/>,
            children: [
                {
                    path: AppRouterPath.Id,
                    element: <Item/>,
                },
            ],
        },
        {
            path: AppRouterPath.Tag,
            element: <Layout/>,
            children: [
                {
                    path: AppRouterPath.TagTitle,
                    element: <Tag/>,
                },
            ],
        },
        {
            path: AppRouterPath.Admin,
            element: (
                <AuthCheck>
                    <Layout/>
                </AuthCheck>
            ),
            children: [
                {
                    index: true,
                    element: <Admin/>,
                },
            ],
        },
    ])
};
