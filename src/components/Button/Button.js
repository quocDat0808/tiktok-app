import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

// Một nút dùng cho cả web: <Button primary>, <Button outline small>, <Button to="/">
function Button({ to, primary, outline, text, small, leftIcon, className, children, onClick, ...props }) {
    let Comp = 'button';
    if (to) {
        Comp = Link;
    }

    return (
        <Comp
            to={to}
            className={cx('wrapper', { primary, outline, text, small }, className)}
            onClick={onClick}
            {...props}
        >
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
