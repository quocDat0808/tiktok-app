import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Avatar from '~/components/Avatar/Avatar';
import FollowButton from '~/components/FollowButton/FollowButton';
import { CheckIcon, CommentIcon, HeartIcon, MusicIcon, ShareIcon } from '~/components/Icons/Icons';
import formatNumber from '~/utils/formatNumber';
import styles from './VideoItem.module.scss';

const cx = classNames.bind(styles);

function VideoItem({ video }) {
    const { user } = video;
    const [liked, setLiked] = useState(false);
    const videoRef = useRef();

    // Video hiện ra hơn 60% màn hình thì tự phát, cuộn qua thì dừng
    useEffect(() => {
        const element = videoRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.play().catch(() => {});
                } else {
                    element.pause();
                }
            },
            { threshold: 0.6 },
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    const likeCount = video.likes + (liked ? 1 : 0);

    return (
        <article className={cx('wrapper')}>
            <Link to={`/@${user.nickname}`}>
                <Avatar src={user.avatar} alt={user.name} size={56} />
            </Link>

            <div className={cx('body')}>
                <div className={cx('header')}>
                    <div>
                        <Link to={`/@${user.nickname}`} className={cx('author')}>
                            <strong>{user.nickname}</strong>
                            {user.verified && <CheckIcon size={14} />}
                            <span className={cx('name')}>{user.name}</span>
                        </Link>
                        <p className={cx('description')}>{video.description}</p>
                        <p className={cx('music')}>
                            <MusicIcon size={14} />
                            {video.music}
                        </p>
                    </div>

                    <FollowButton userId={user.id} small />
                </div>

                <div className={cx('content')}>
                    <video ref={videoRef} className={cx('video')} src={video.src} loop muted playsInline controls />

                    <div className={cx('actions')}>
                        <button className={cx('action', { liked })} onClick={() => setLiked(!liked)}>
                            <span className={cx('actionIcon')}>
                                <HeartIcon />
                            </span>
                            <strong>{formatNumber(likeCount)}</strong>
                        </button>
                        <button className={cx('action')}>
                            <span className={cx('actionIcon')}>
                                <CommentIcon />
                            </span>
                            <strong>{formatNumber(video.comments)}</strong>
                        </button>
                        <button className={cx('action')}>
                            <span className={cx('actionIcon')}>
                                <ShareIcon />
                            </span>
                            <strong>{formatNumber(video.shares)}</strong>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default VideoItem;
