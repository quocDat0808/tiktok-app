import { createContext, useContext, useState } from 'react';

const FollowContext = createContext();

// Lưu danh sách người đang follow để mọi component đều dùng chung
export function FollowProvider({ children }) {
    const [followingIds, setFollowingIds] = useState([1, 3]);

    const isFollowing = (userId) => followingIds.includes(userId);

    const toggleFollow = (userId) => {
        setFollowingIds((prev) => (prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]));
    };

    return (
        <FollowContext.Provider value={{ followingIds, isFollowing, toggleFollow }}>
            {children}
        </FollowContext.Provider>
    );
}

export function useFollow() {
    return useContext(FollowContext);
}
