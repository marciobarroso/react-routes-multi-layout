import React from 'react'
import { Route } from 'react-router-dom'

const RouteLayout = ({render: Render, component: Component, layout: Layout, ...rest}) => {
    const ToRender = Render ? Render : Component ? Component : null
    return (
        <Route {...rest}
               render={props => (
                   <Layout>
                       <ToRender {...props} />
                   </Layout>
               )}
        />
    )
}

export default RouteLayout