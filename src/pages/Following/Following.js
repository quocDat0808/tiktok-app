import { useEffect, useState } from 'react';
import VideoList from '~/components/VideoList/VideoList';
import { useFollow } from '~/context/FollowContext';
import { getVideos } from '~/services/api';

function Following() {
    const { followingIds } = useFollow();
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    // Chạy lại mỗi khi follow / bỏ follow ai đó
    useEffect(() => {
        let ignore = false;
        setLoading(true);

        getVideos({ type: 'following', followingIds }).then((data) => {
            if (!ignore) {
                setVideos(data);
                setLoading(false);
            }
        });

        return () => {
            ignore = true;
        };
    }, [followingIds]);

    return (
        <VideoList
            videos={videos}
            loading={loading}
            emptyText="Bạn chưa follow ai. Hãy follow vài tài khoản để xem video của họ ở đây nhé!"
        />
    );
}

export default Following;
