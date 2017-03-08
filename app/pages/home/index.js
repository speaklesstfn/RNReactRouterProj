/**
 * Created by tfn on 17-3-8.
 */
import Home from './Home';

export default {
    path: 'home',
    childRoutes: [
        Home,
    ].map(v => v.routeConfig || v),
};