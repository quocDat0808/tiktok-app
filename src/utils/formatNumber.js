// 1250000 -> "1.3M", 15200 -> "15.2K"
function formatNumber(number) {
    if (number >= 1000000) {
        return `${+(number / 1000000).toFixed(1)}M`;
    }
    if (number >= 1000) {
        return `${+(number / 1000).toFixed(1)}K`;
    }
    return String(number);
}

export default formatNumber;
