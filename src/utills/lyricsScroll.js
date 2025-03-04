
// 将时间转换为秒数
function parseTime (time) {
    const min = +time.split(':')[0];
    const sec = +time.split(':')[1];
    return min * 60 + sec;
}
// 找到当前播放歌词下标
function findIndex (lyric, currentTime) {
    for (let i = 0; i < lyric.length; i++) {
        if (+currentTime < parseTime(lyric[i].time)) {
            return i - 1
        }
    }
}
export function lyricsScroll(lyric, element) {
    // 找到当前播放歌词下标
    const { Audio, Container, Wrapper, LyricLine} = element
    const currentTime = Audio.currentTime
    let index = findIndex(lyric, currentTime)
    // 设置歌词偏移
    const containerHeight = Container.clientHeight;
    const lineHeight = LyricLine[0].clientHeight;
    let offsetHeight = index * lineHeight + lineHeight / 2 - containerHeight / 2;
    Wrapper.style.transform = `translateY(-${offsetHeight}px)`;
    for (let line of LyricLine) {
        if(line) {
            line.classList.remove('active')
        }
    }
    LyricLine[index].classList.add('active');
}