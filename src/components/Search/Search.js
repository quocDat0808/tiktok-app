import { useEffect, useRef, useState } from 'react';
import AccountItem from '~/components/AccountItem/AccountItem';
import { CloseIcon, SearchIcon, SpinnerIcon } from '~/components/Icons/Icons';
import useDebounce from '~/hooks/useDebounce';
import { searchUsers } from '~/services/api';
import styles from './Search.module.scss';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const wrapperRef = useRef();
    const inputRef = useRef();

    // Gõ xong 500ms mới gọi API, tránh gọi liên tục mỗi lần gõ phím
    const debouncedValue = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setResults([]);
            setLoading(false);
            return;
        }

        let ignore = false;
        setLoading(true);

        searchUsers(debouncedValue).then((data) => {
            // Bỏ qua kết quả cũ nếu người dùng đã gõ từ khác
            if (!ignore) {
                setResults(data);
                setLoading(false);
            }
        });

        return () => {
            ignore = true;
        };
    }, [debouncedValue]);

    // Bấm ra ngoài ô tìm kiếm thì ẩn kết quả
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setShowResult(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleChange = (e) => {
        const value = e.target.value;
        // Không cho gõ dấu cách ở đầu
        if (!value.startsWith(' ')) {
            setSearchValue(value);
        }
    };

    const handleClear = () => {
        setSearchValue('');
        setResults([]);
        inputRef.current.focus();
    };

    const handleSelect = () => {
        setShowResult(false);
        setSearchValue('');
    };

    return (
        <div className={styles.wrapper} ref={wrapperRef}>
            <div className={styles.search}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Tìm kiếm tài khoản"
                    spellCheck={false}
                    onChange={handleChange}
                    onFocus={() => setShowResult(true)}
                />

                {searchValue && !loading && (
                    <button className={styles.clear} onClick={handleClear}>
                        <CloseIcon size={14} />
                    </button>
                )}
                {loading && (
                    <span className={styles.loading}>
                        <SpinnerIcon size={16} />
                    </span>
                )}

                <span className={styles.searchIcon}>
                    <SearchIcon size={20} />
                </span>
            </div>

            {showResult && searchValue && !loading && (
                <div className={styles.result}>
                    <h4 className={styles.label}>Tài khoản</h4>
                    {results.length > 0 ? (
                        results.map((user) => <AccountItem key={user.id} user={user} onClick={handleSelect} />)
                    ) : (
                        <p className={styles.empty}>Không tìm thấy tài khoản nào</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Search;
