<template>
  <article>
    <div class="music-player">
      <div class="music-info">
        <img class="cover" src="../assets/imgs/default-cover.jpg" alt="封面" />
        <div class="info">
          <h3 class="song-name">{{ currentPlay.audio_name }}</h3>
          <p class="artist">{{ currentPlay.audio_singer }}</p>
        </div>
      </div>

      <!-- 歌词区域 -->
      <div class="lyrics-container" ref="lyricsContainer">
        <div class="lyrics-wrapper" ref="lyricsWrapper">
          <p
            class="lyric-item"
            v-for="(line, index) in currentLyic.audio_lyrics"
            :key="index"
            :class="{ active: 0 === index }"
            ref="lyricLine"
          >
            {{ line.words }}
          </p>
        </div>
      </div>

      <div class="progress-bar">
        <span class="current-time">{{ currentTime }}</span>
        <div class="progress">
          <div
            class="progress-current"
            :style="{ width: `${progress}%` }"
          ></div>
        </div>
        <span class="total-time">{{ duration }}</span>
      </div>
      <!-- 歌曲列表 -->
      <div class="music_list" :class="{ close_list: isShow }" @blur="blurClose">
        <ul class="all_li">
          <li v-for="(m, index) in musicList" :key="m.id" class="music_item" @click="selectPlay(index)">
            <span class="audio_name">
              {{ m.audio_name }}
            </span>
            <span class="audio_singer">{{ m.audio_singer }}</span>
            <span class="audio_duration">{{
              m.audio_duration.toString().padEnd(4, "0")
            }}</span>
          </li>
        </ul>
      </div>
      <div class="controls">
        <!-- 列表显隐 -->
        <button class="list" @blur="blurClose">
          <i class="iconfont icon-pajian_gequliebiao_" @click="show"></i>
        </button>
        <div>
          <!-- 上一首 -->
          <button class="prev" @click="prevAudio">
            <i class="iconfont icon-shangyishou"></i>
          </button>
          <!-- 播放&&暂停 -->
          <!-- 默认显示第一首 -->
          <audio
            ref="audio"
            :autoplay="autoPlay"
            :src="currentPlay.audio_path"
            @timeupdate="updateProgress"
            @canplay="initTime"
          ></audio>
          <button class="play-pause" @click="play">
            <i class="iconfont icon-zanting" v-if="isPlay"></i>
            <i class="iconfont icon-bofang" v-else></i>
          </button>
          <!-- 下一首 -->
          <button class="next" @click="nextAudio">
            <i class="iconfont icon-xiayishou"></i>
          </button>
        </div>
        <!-- 音量 -->
        <div class="volume">
          <i class="iconfont icon-danquxunhuan" v-if="!isLoop" @click="cyclePlaying"></i>
          <i class="iconfont icon-shunxubofang" v-else @click="cyclePlaying"></i>
          <i
            class="iconfont icon-shengyin_shiti"
            @click="mute"
            v-if="!isMuted"
          ></i>
          <i class="iconfont icon-jingyin" @click="mute" v-else></i>
          <input
            type="range"
            class="volume-bar"
            v-model="volume"
            @click="changeVolume"
          />
        </div>
      </div>
    </div>
  </article>
</template>
  
<script>
import axios from "axios";
import { lyricsScroll } from "@/utills/lyricsScroll";

export default {
  name: "MusicComponent",
  // 获取歌曲
  async created() {
    await axios
      .get("http://localhost:8081/getAudioList")
      .then((response) => {
        this.musicList = response.data.data;
        // 默认播放第一首
        this.currentPlay = response.data.data[this.currentLyricIndex];
      })
      .catch((err) => {
        console.log(err);
      });
  // 获取歌词
  await axios
      .get("http://localhost:8081/getAudiolyrics")
      .then((response) => {
        this.lyrics = response.data.data
        // 默认展示第一首歌歌词
        this.currentLyic = this.lyrics[this.currentLyricIndex]
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data() {
    return {
      // 歌曲列表
      musicList: [],
      // 歌词
      lyrics: [
        { time: 0, text: "歌词加载中..." },
        { time: 1, text: "这是第一句歌词" },
      ],
      // 当前播放
      currentPlay: {},
      // 当前播放歌词
      currentLyic: {},
      // 当前播放进度
      progress: 0,
      // 当前播放时间
      currentTime: 0,
      // 歌曲时长
      duration: 0,
      // 当前播放index
      currentLyricIndex: 0,
      // 播放状态
      isPlay: false,
      // 自动播放
      autoPlay: false,
      // 歌曲列表显隐状态
      isShow: false,
      // 音量
      volume: 50,
      // 静音状态
      isMuted: false,
      // 是否循环播放
      isLoop: false
    };
  },
  methods: {
    formatTime(time) {
      const min = Math.floor(time / 60);
      const sec = Math.floor(time % 60);
      return `${min}:${sec.toString().padStart(2, "0")}`;
    },
    play() {
      // 切换播放状态
      this.isPlay = !this.isPlay;
      // 播放暂停
      if (!this.isPlay) {
        this.$refs.audio.pause();
      } else {
        this.$refs.audio.play();
      }
    },
    // 切换后自动播放 更新状态
    newPlaying() {
      this.isPlay = true;
      this.autoPlay = true;
    },
    // 歌曲列表显隐切换
    show() {
      this.isShow = !this.isShow;
    },
    blurClose() {
      this.isShow = false;
    },
    // 循环播放
    cyclePlaying () {
      const audio = this.$refs.audio;
      this.isLoop = !this.isLoop
      audio.loop = this.isLoop
    },
    // 歌曲列表选择播放
    selectPlay (index) {
      this.currentPlay = this.musicList[index];
      this.currentLyic = this.lyrics.filter(item => item.id === this.currentPlay.id)[0];
      this.currentLyricIndex = index
      this.newPlaying();
      this.remveOffset();
    },
    // 上一首
    prevAudio() {
      if (!this.currentLyricIndex > 0) return;
      this.currentLyricIndex--;
      this.currentPlay = this.musicList[this.currentLyricIndex];
      this.currentLyic = this.lyrics.filter(item => item.id === this.currentPlay.id)[0];
      this.newPlaying();
      this.remveOffset();
    },
    // 下一首
    nextAudio() {
      if (!this.currentLyricIndex > this.musicList.length) return;
      this.currentLyricIndex++;
      this.currentPlay = this.musicList[this.currentLyricIndex];
      this.currentLyic = this.lyrics.filter(item => item.id === this.currentPlay.id)[0];
      this.newPlaying();
      this.remveOffset();
    },
    updateProgress() {
      // 播放时间
      const lyricsContainer = this.$refs.lyricsContainer;
      const audio = this.$refs.audio;
      const lyricsWrapper = this.$refs.lyricsWrapper
      const lyricLine = Array.from(this.$refs.lyricLine)
      const element = {
        "Container": lyricsContainer,
        "Wrapper": lyricsWrapper,
        "Audio": audio,
        "LyricLine": lyricLine
      }
      this.currentTime = this.formatTime(audio.currentTime);
      // 进度条
      this.progress = (audio.currentTime / audio.duration) * 100;
      // 当前播放完成后自动切换下一首
      if (this.progress === 100) {
        this.nextAudio();
        this.newPlaying();
      }
      //歌词滚动效果
      lyricsScroll(this.currentLyic.audio_lyrics, element)
    },
    initTime() {
      const audio = this.$refs.audio;
      this.duration = this.formatTime(audio.duration);
      this.currentTime = this.formatTime(0);
    },
    // 音量
    changeVolume() {
      const audio = this.$refs.audio;
      audio.muted = +this.volume === 0;
      this.isMuted = audio.muted;
      let key = "";
      const volumeMap = new Map([
        ["LOW", 0.5],
        ["MID", 0.7],
        ["HIGHT", 1],
      ]);
      if (this.volume <= 30) {
        key = "LOW";
      } else if (this.volume >= 30 && this.volume <= 50) {
        key = "MID";
      } else {
        key = "HIGHT";
      }
      if (
        typeof volumeMap.get(key) === "number" &&
        !isNaN(volumeMap.get(key))
      ) {
        audio.volume = Math.min(Math.max(parseFloat(volumeMap.get(key)), 0), 1);
      } else {
        console.error("无效的音量值:", volumeMap.get(key));
      }
    },
    // 静音
    mute() {
      const audio = this.$refs.audio;
      audio.muted = !audio.muted;
      this.isMuted = !this.isMuted;
      this.isMuted ? this.volume = 0 : this.volume = 50
    },
    // 切换音乐后取消偏移
    remveOffset () {
      const lyricsWrapper = this.$refs.lyricsWrapper
      lyricsWrapper.style.transform = `translateY(0px)`;
    }
  }
};
</script>
  
<style scoped>
* {
  box-sizing: border-box;
  list-style: none;
}

ul {
  padding-left: 0px;
}

.all_li li:nth-child(2n + 1) {
  background-color: #dddddd;
}

article {
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  flex: 2;
  padding: 20px;
  z-index: 999;
}

.music-player {
  position: relative;
  background: var(--A);
  border-radius: 15px;
  padding: 40px; /* 增加内边距 */
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  color: var(--textColor);
  width: 100%; /* 占满容器宽度 */
  height: 90%; /* 设置高度占比 */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 内容均匀分布 */
  overflow: hidden;
}

.music-info {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
}

.cover {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
}

.info {
  text-align: left;
}

.song-name {
  margin: 0;
  font-size: 1.2em;
}

.artist {
  margin: 5px 0;
  font-size: 0.9em;
  opacity: 0.8;
}

/* 歌词区域样式 */
.lyrics-container {
  height: 300px;
  margin: 20px 0;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
}

.lyrics-wrapper {
  position: absolute;
  width: 100%;
  transition: transform 0.3s ease-out;
  text-align: center;
  padding: 20px 0;
}

.lyrics-wrapper p {
  margin: 0;
}

.lyric-item {
  padding: 8px 0;
  font-size: 14px;
  color: var(--textColor);
  opacity: 0.6;
  transition: all 0.5s;
}

.lyric-item.active {
  font-size: 16px;
  opacity: 0.9;
  font-weight: bold;
  color: var(--btn);
  transform: scale(1.1);
}

.progress-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
}

.progress {
  flex: 1;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  cursor: pointer;
}

.progress-current {
  height: 100%;
  background: var(--btn);
  border-radius: 2px;
}

.controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.music_list {
  position: absolute;
  width: 350px;
  height: 500px;
  top: 20px;
  left: -350px;
  background-color: var(--musiclist);
  border-radius: 0px 10px 10px 0px;
  text-align: left;
  overflow: scroll;
  z-index: 999;
  font-family: "Courier New", Courier, monospace;
  transition: all 0.5s;
  background-color: var(--A);
}

/* 收起列表 */
.close_list {
  transform: translateX(350px);
}

.list {
  width: 50px;
  height: 50px;
  flex-basis: 20%;
}

.music_item {
  display: flex;
  justify-content: space-between;
  margin: 5px;
  cursor: pointer;
}

.audio_name .audio_duration .audio_singer {
  padding: 3px;
}

.audio_name {
  flex-basis: 40%;
}

.audio_duration {
  flex-basis: 12%;
  opacity: 0.5;
}

button {
  background: none;
  border: none;
  color: var(--textColor);
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  transition: all 0.3s;
}

button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.play-pause {
  width: 50px;
  height: 50px;
  margin: 0 auto;
}

.volume {
  display: flex;
  align-items: center;
  flex-basis: 20%;
  gap: 10px;
  cursor: pointer;
}

.volume-bar {
  width: 80px;
  height: 4px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 2px;
  cursor: pointer;
}

.volume-current {
  width: 50%;
  height: 100%;
  background: var(--btn);
  border-radius: 2px;
  cursor: pointer;
}

@media screen and (max-width: 480px) {
  .music-player {
    font-size: 1rem;
    padding: 5px;
  }

  .controls {
    font-size: 1rem;
    gap: 5px;
  }

  .music_list {
    max-width: 300px;
    max-height: 300px;
  }

  .volume-bar {
    width: 50px;
  }

  button {
    padding: 0px;
  }
}
</style>