/**
 * Created by tfn on 17-3-8.
 */
import Result from './Result';

export default {
    path: 'result',
    childRoutes: [
        Result,
    ].map(v => v.routeConfig || v),
};