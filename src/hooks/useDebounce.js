import { useEffect, useState } from 'react';

// Chỉ trả về giá trị mới sau khi người dùng ngừng gõ `delay` ms
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timerId = setTimeout(() => setDebouncedValue(value), delay);

        return () => clearTimeout(timerId);
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounce;
