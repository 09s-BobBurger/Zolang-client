const formatter = (timestamp) => {
    // example "2024-05-26 12:26:01"
    const providedDate = new Date(timestamp);
    const currentTime = new Date();
    const timeDifferenceInMilliseconds = currentTime - providedDate;
    const minutes = Math.floor(timeDifferenceInMilliseconds / (1000 * 60));

    // 분 기준으로 들어온 데이터 처리
    const min = minutes % 60;
    const hour = Math.floor(minutes / 60);
    const day = Math.floor(hour / 24);

    if (day > 0) {
        return `${day} day`
    } else if (hour > 0) {
        return `${hour}h ${min}m`;
    } else {
        return `${min}m`;
    }
}

export default formatter;