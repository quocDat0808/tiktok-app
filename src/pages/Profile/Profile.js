import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '~/components/Avatar/Avatar';
import FollowButton from '~/components/FollowButton/FollowButton';
import { CheckIcon } from '~/components/Icons/Icons';
import NotFound from '~/pages/NotFound/NotFound';
import { getUserByNickname } from '~/services/api';
import formatNumber from '~/utils/formatNumber';
import styles from './Profile.module.scss';

function Profile() {
    // URL dạng /@minhanh.cooking -> nickname = "minhanh.cooking"
    const { nickname: param } = useParams();
    const nickname = param.startsWith('@') ? param.slice(1) : null;

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!nickname) {
            return;
        }

        let ignore = false;
        setLoading(true);

        getUserByNickname(nickname).then((data) => {
            if (!ignore) {
                setUser(data);
                setLoading(false);
            }
        });

        return () => {
            ignore = true;
        };
    }, [nickname]);

    if (!nickname || (!loading && !user)) {
        return <NotFound />;
    }

    if (loading) {
        return <p className={styles.message}>Đang tải...</p>;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <Avatar src={user.avatar} alt={user.name} size={116} />

                <div>
                    <h1 className={styles.nickname}>
                        {user.nickname}
                        {user.verified && <CheckIcon size={20} />}
                    </h1>
                    <h2 className={styles.name}>{user.name}</h2>
                    <FollowButton userId={user.id} />
                </div>
            </div>

            <div className={styles.stats}>
                <span>
                    <strong>{formatNumber(user.following)}</strong> Đang follow
                </span>
                <span>
                    <strong>{formatNumber(user.followers)}</strong> Follower
                </span>
                <span>
                    <strong>{formatNumber(user.likes)}</strong> Thích
                </span>
            </div>

            <p className={styles.bio}>{user.bio}</p>

            <h3 className={styles.tab}>Video</h3>

            <div className={styles.grid}>
                {user.videos.map((video) => (
                    <div key={video.id} className={styles.gridItem}>
                        <video
                            src={video.src}
                            muted
                            loop
                            playsInline
                            onMouseEnter={(e) => e.target.play().catch(() => {})}
                            onMouseLeave={(e) => e.target.pause()}
                        />
                        <span className={styles.views}>▶ {formatNumber(video.likes * 7)}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Profile;
