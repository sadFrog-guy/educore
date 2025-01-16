import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Template from "../pages/template/Template.tsx";
import Auth from "../pages/Auth.tsx";
import routes from "./routes.tsx";
// import Home from '../pages/Home';
// import Login from '../pages/Login';
// import Dashboard from '../pages/Dashboard';
// import ProtectedRoute from '../components/ProtectedRoute';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {routes.map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Router>
    );
};

export default AppRoutes;