import Template from "../pages/template/Template.tsx";
import Auth from "../pages/Auth.tsx";
import Students from "../pages/Students.tsx";
import Groups from "../pages/Groups.tsx";
import Lessons from "../pages/Lessons.tsx";
import Schedule from "../pages/schedule/Schedule.tsx";
import Develop from "../pages/Develop.tsx";

const routes = [
    { path: "/", name: "Home", element: <Develop /> },
    { path: "/groups", name: "groups", element: <Groups /> },
    { path: "/lessons", name: "groups", element: <Lessons /> },
    { path: "/students", name: "Home", element: <Students /> },
    { path: "/schedule", name: "Home", element: <Schedule /> },
    { path: "/login", name: "Login", element: <Auth /> },
];

export default routes