import styles from './Sidebar.module.scss';

function Sidebar() {
    return (
        <aside className={styles.wrapper}>
            <ul>
                <li>Dành cho bạn</li>
                <li>Đang follow</li>
                <li>LIVE</li>
            </ul>
        </aside>
    );
}

export default Sidebar;
