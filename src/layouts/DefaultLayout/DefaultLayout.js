import Header from '~/components/Header/Header';
import Sidebar from '~/components/Sidebar/Sidebar';
import styles from './DefaultLayout.module.scss';

// Khung chung của mọi trang: Header ở trên, Sidebar bên trái, nội dung trang bên phải
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />

            <div className={styles.container}>
                <Sidebar />
                <main className={styles.content}>{children}</main>
            </div>
        </div>
    );
}

export default DefaultLayout;
