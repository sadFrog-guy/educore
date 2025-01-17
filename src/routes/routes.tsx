import Template from "../pages/template/Template.tsx";
import Auth from "../pages/Auth.tsx";
import Students from "../pages/Students.tsx";
import Groups from "../pages/Groups.tsx";
import Lessons from "../pages/Lessons.tsx";
import Schedule from "../pages/schedule/Schedule.tsx";
import Develop from "../pages/Develop.tsx";
import GroupsDetail from "../pages/GroupsDetail.tsx";

const routes = [
    { path: "/", name: "home", element: <Develop /> },
    { path: "/groups", name: "groups", element: <Groups /> },
    { path: "/groups/:id", name: "groupsDetail", element: <GroupsDetail /> },
    { path: "/lessons", name: "groups", element: <Lessons /> },
    { path: "/students", name: "home", element: <Students /> },
    { path: "/schedule", name: "home", element: <Schedule /> },
    { path: "/login", name: "login", element: <Auth /> },
];

export default routes