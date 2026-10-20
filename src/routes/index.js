import Following from '~/pages/Following/Following';
import Home from '~/pages/Home/Home';
import Live from '~/pages/Live/Live';
import NotFound from '~/pages/NotFound/NotFound';
import Profile from '~/pages/Profile/Profile';

// Thêm trang mới chỉ cần thêm 1 dòng vào đây
const routes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/live', component: Live },
    { path: '/:nickname', component: Profile },
    { path: '*', component: NotFound },
];

export default routes;
