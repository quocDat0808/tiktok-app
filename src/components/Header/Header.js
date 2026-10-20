import styles from './Header.module.scss';

function Header() {
    return (
        <header className={styles.wrapper}>
            <div className={styles.logo}>TikTok</div>

            <input className={styles.search} placeholder="Tìm kiếm" />

            <button className={styles.loginBtn}>Đăng nhập</button>
        </header>
    );
}

export default Header;
