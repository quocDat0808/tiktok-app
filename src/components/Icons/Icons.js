// Icon SVG tự viết, không cần cài thư viện
const Svg = ({ size = 24, children }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        {children}
    </svg>
);

export const HomeIcon = (props) => (
    <Svg {...props}>
        <path d="M12 3 2 11h3v9h5v-6h4v6h5v-9h3z" />
    </Svg>
);

export const UserGroupIcon = (props) => (
    <Svg {...props}>
        <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM1 20c0-3.3 3.6-6 8-6s8 2.7 8 6v1H1v-1Zm17.5 1v-1c0-2-.9-3.8-2.4-5 3.9.2 6.9 2.4 6.9 5v1h-4.5Z" />
    </Svg>
);

export const LiveIcon = (props) => (
    <Svg {...props}>
        <path d="M3 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2.5l4-2.5v12l-4-2.5V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Z" />
    </Svg>
);

export const SearchIcon = (props) => (
    <Svg {...props}>
        <path d="M10 3a7 7 0 1 0 4.2 12.6l5.1 5.1 1.4-1.4-5.1-5.1A7 7 0 0 0 10 3Zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" />
    </Svg>
);

export const CloseIcon = (props) => (
    <Svg {...props}>
        <path d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7l-1.4-1.4L9.2 12 2.9 5.7l1.4-1.4 6.3 6.3 6.3-6.3z" />
    </Svg>
);

export const PlusIcon = (props) => (
    <Svg {...props}>
        <path d="M11 4h2v7h7v2h-7v7h-2v-7H4v-2h7z" />
    </Svg>
);

export const HeartIcon = (props) => (
    <Svg {...props}>
        <path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.8 4.5c2.1 0 3.6 1.1 4.2 2.2h2c.6-1.1 2.1-2.2 4.2-2.2 3.8 0 5.9 3.9 4.4 7.3C19.5 16.4 12 21 12 21Z" />
    </Svg>
);

export const CommentIcon = (props) => (
    <Svg {...props}>
        <path d="M12 3C6.5 3 2 6.8 2 11.5c0 2.4 1.2 4.6 3.1 6.1L4 21l4.3-2.1c1.2.4 2.4.6 3.7.6 5.5 0 10-3.8 10-8.5S17.5 3 12 3Z" />
    </Svg>
);

export const ShareIcon = (props) => (
    <Svg {...props}>
        <path d="M13 4v4C6 9 3 14 2 20c2.5-3.5 6-5.1 11-5.1V19l9-7.5z" />
    </Svg>
);

export const MusicIcon = (props) => (
    <Svg {...props}>
        <path d="M9 18V5l12-2v13a3 3 0 1 1-2-2.8V7.3L11 8.7V18a3 3 0 1 1-2-2.8Z" />
    </Svg>
);

export const CheckIcon = (props) => (
    <Svg {...props}>
        <circle cx="12" cy="12" r="10" fill="#20d5ec" />
        <path d="m7.5 12.3 3 3 6-6" stroke="#fff" strokeWidth="2.2" fill="none" />
    </Svg>
);

export const SpinnerIcon = (props) => (
    <Svg {...props}>
        <path d="M12 2a10 10 0 1 0 10 10h-2.5A7.5 7.5 0 1 1 12 4.5z" />
    </Svg>
);
