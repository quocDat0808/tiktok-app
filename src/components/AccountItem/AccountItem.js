import { Link } from 'react-router-dom';
import Avatar from '~/components/Avatar/Avatar';
import { CheckIcon } from '~/components/Icons/Icons';
import styles from './AccountItem.module.scss';

function AccountItem({ user, size = 40, onClick }) {
    return (
        <Link to={`/@${user.nickname}`} className={styles.wrapper} onClick={onClick}>
            <Avatar src={user.avatar} alt={user.name} size={size} />

            <div className={styles.info}>
                <p className={styles.nickname}>
                    <span>{user.nickname}</span>
                    {user.verified && <CheckIcon size={14} />}
                </p>
                <p className={styles.name}>{user.name}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
