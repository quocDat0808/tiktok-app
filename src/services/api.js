import users from '~/data/users';
import videos from '~/data/videos';

// Giả lập độ trễ mạng như khi gọi API thật
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Bỏ dấu tiếng Việt để tìm "minh anh" vẫn ra "Minh Anh"
const normalize = (text) =>
    text
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D')
        .toLowerCase();

const withUser = (video) => ({
    ...video,
    user: users.find((user) => user.id === video.userId),
});

export async function getVideos({ type = 'for-you', followingIds = [] } = {}) {
    await delay(500);

    let list = videos;
    if (type === 'following') {
        list = videos.filter((video) => followingIds.includes(video.userId));
    }

    return list.map(withUser);
}

export async function searchUsers(keyword) {
    await delay(300);

    const q = normalize(keyword.trim());
    return users.filter((user) => normalize(user.nickname).includes(q) || normalize(user.name).includes(q));
}

export async function getSuggestedUsers() {
    await delay(300);
    return users.slice(0, 5);
}

export async function getUserByNickname(nickname) {
    await delay(400);

    const user = users.find((item) => item.nickname === nickname);
    if (!user) {
        return null;
    }

    return {
        ...user,
        videos: videos.filter((video) => video.userId === user.id),
    };
}
