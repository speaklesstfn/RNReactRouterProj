/**
 * Created by tfn on 17-3-8.
 */

import NavBar from './NavBar';

import home from './home';
import result from './result';

export default {
    path: '/',
    component: NavBar,
    childRoutes: [
        home,
        result,
    ].map(v => v.routeConfig || v),
};