import { Route, Redirect } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const PrivateRoute = ({ component: Component, ...rest }) => {

    const token = localStorage.getItem("token");

    return (
        <Route
            {...rest}
            render={(props) =>
                token ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
};

export default PrivateRoute;