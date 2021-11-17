//Layout
import LayoutAdmin from '../Layouts/LayoutAdmin';
import LayoutUser from '../Layouts/LayoutUser';

//Admin pages
import AdminHome from '../Pages/Admin';
import AdminSignIn from '../Pages/Admin/SignIn';
import AdminSignUp from '../Pages/Admin/SignUp';

//User Pages
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import Pricing from '../Pages/Pricing';
import Solutions from '../Pages/Solutions';
import Try from '../Pages/Try';

//Other
import Error404 from '../Pages/Error404';


const routes = [
    {
        path: '/admin',
        component: LayoutAdmin,
        exact: false,
        routes: [
            {
                path: '/admin',
                component: AdminHome,
                exact: true
            },
            {
                path: "/admin/login",
                component: AdminSignIn,
                exact: true
            },
            {
                path: "/admin/signup",
                component: AdminSignUp,
                exact: true
            },
            {
                component: Error404,
            }
        ]
    },
    {
        path: '/',
        component: LayoutUser,
        exact: false,
        routes: [
            {
                path: '/',
                component: Home,
                exact: true
            },
            {
                path: "/contact",
                component: Contact,
                exact: true
            },
            {
                path: "/pricing",
                component: Pricing,
                exact: true
            },
            {
                path: "/solutions",
                component: Solutions,
                exact: true
            },
            {
                path: "/try",
                component: Try,
                exact: true
            },
            {
                component: Error404,
            }
        ]
    }
];

export default routes;