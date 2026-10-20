import Button from '~/components/Button/Button';
import styles from './NotFound.module.scss';

function NotFound() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.text}>Không tìm thấy trang hoặc tài khoản này</p>
            <Button primary to="/">
                Về trang chủ
            </Button>
        </div>
    );
}

export default NotFound;
