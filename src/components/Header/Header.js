import { Link } from 'react-router-dom';
import Button from '~/components/Button/Button';
import { PlusIcon } from '~/components/Icons/Icons';
import Search from '~/components/Search/Search';
import styles from './Header.module.scss';

function Header() {
    return (
        <header className={styles.wrapper}>
            <div className={styles.inner}>
                <Link to="/" className={styles.logo}>
                    <span className={styles.logoMark}>♪</span>
                    TikTok
                </Link>

                <Search />

                <div className={styles.actions}>
                    <Button text leftIcon={<PlusIcon size={18} />}>
                        Tải lên
                    </Button>
                    <Button primary>Đăng nhập</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
