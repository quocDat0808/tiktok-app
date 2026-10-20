import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import AccountItem from '~/components/AccountItem/AccountItem';
import { HomeIcon, LiveIcon, UserGroupIcon } from '~/components/Icons/Icons';
import { useFollow } from '~/context/FollowContext';
import users from '~/data/users';
import { getSuggestedUsers } from '~/services/api';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

const menu = [
    { title: 'Dành cho bạn', to: '/', icon: <HomeIcon /> },
    { title: 'Đang follow', to: '/following', icon: <UserGroupIcon /> },
    { title: 'LIVE', to: '/live', icon: <LiveIcon /> },
];

function Sidebar() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const { followingIds } = useFollow();

    useEffect(() => {
        getSuggestedUsers().then(setSuggestedUsers);
    }, []);

    const followingUsers = users.filter((user) => followingIds.includes(user.id));

    return (
        <aside className={cx('wrapper')}>
            <nav className={cx('menu')}>
                {menu.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        end
                        className={({ isActive }) => cx('menuItem', { active: isActive })}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </NavLink>
                ))}
            </nav>

            <section className={cx('section')}>
                <h4 className={cx('label')}>Tài khoản được đề xuất</h4>
                {suggestedUsers.map((user) => (
                    <AccountItem key={user.id} user={user} size={32} />
                ))}
            </section>

            <section className={cx('section')}>
                <h4 className={cx('label')}>Các tài khoản đang follow</h4>
                {followingUsers.length > 0 ? (
                    followingUsers.map((user) => <AccountItem key={user.id} user={user} size={32} />)
                ) : (
                    <p className={cx('empty')}>Bạn chưa follow ai</p>
                )}
            </section>

            <p className={cx('footer')}>© 2026 TikTok clone — dự án học ReactJS</p>
        </aside>
    );
}

export default Sidebar;
