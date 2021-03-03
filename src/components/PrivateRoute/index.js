import { Route, Redirect } from 'react-router-dom'
import { NotificationManager } from 'react-notifications'

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (localStorage.getItem('idToken')) {
                    return <Component {...props} />
                } else {
                    NotificationManager.error("You aren't loged in yet", 'Oops...')
                    return <Redirect to='/' />
                }
            }}
        />
    )
}

export default PrivateRoute
