import VideoItem from '~/components/VideoItem/VideoItem';
import styles from './VideoList.module.scss';

function VideoList({ videos, loading, emptyText }) {
    if (loading) {
        return <p className={styles.message}>Đang tải video...</p>;
    }

    if (videos.length === 0) {
        return <p className={styles.message}>{emptyText}</p>;
    }

    return (
        <div>
            {videos.map((video) => (
                <VideoItem key={video.id} video={video} />
            ))}
        </div>
    );
}

export default VideoList;
