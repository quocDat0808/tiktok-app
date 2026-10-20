import Button from '~/components/Button/Button';
import { useFollow } from '~/context/FollowContext';

function FollowButton({ userId, small }) {
    const { isFollowing, toggleFollow } = useFollow();
    const following = isFollowing(userId);

    return (
        <Button
            outline={!following}
            text={following}
            small={small}
            onClick={(e) => {
                e.preventDefault();
                toggleFollow(userId);
            }}
        >
            {following ? 'Đang follow' : 'Follow'}
        </Button>
    );
}

export default FollowButton;
