import { useState } from 'react';
import styles from './Avatar.module.scss';

// Nếu ảnh lỗi thì hiện chữ cái đầu của tên thay thế
function Avatar({ src, alt, size = 40 }) {
    const [error, setError] = useState(false);
    const style = { width: size, height: size, fontSize: size / 2.4 };

    if (error || !src) {
        return (
            <div className={styles.fallback} style={style}>
                {alt?.charAt(0).toUpperCase()}
            </div>
        );
    }

    return <img className={styles.avatar} style={style} src={src} alt={alt} onError={() => setError(true)} />;
}

export default Avatar;
