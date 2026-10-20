import { useEffect, useState } from 'react';
import VideoList from '~/components/VideoList/VideoList';
import { getVideos } from '~/services/api';

function Home() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getVideos({ type: 'for-you' }).then((data) => {
            setVideos(data);
            setLoading(false);
        });
    }, []);

    return <VideoList videos={videos} loading={loading} emptyText="Chưa có video nào" />;
}

export default Home;
