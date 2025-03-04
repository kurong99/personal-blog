import express from "express";
import cors from "cors";
import mysql from "mysql2";
import fs from "fs";

const app = new express()

// 跨域
app.use(cors({
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'audio'
})

connection.connect();

let queryres = [];
const sql = 'select * from audio_info'
connection.query(sql, (err, results) => {
    if (err) {
        console.log(err.sqlMessage)
    }
    queryres = results
})
app.get('/getAudioList', (req, res) => {
    try {
        res.send({
            code: 200,
            data: queryres
        })
    } catch (err) {
        res.send({
            code: 500,
            message: err
        })
        console.log(err)
    }
})

// 将获取歌词转换为对象数组
function parseLrc (lyric) {
    let lines = lyric.split('\n')
    let results = []
    lines.forEach(item => {
        let time = item.split(']')[0].substring(1, 8)
        let words = item.split(']')[1]
        let obj = {
            time,
            words 
        }
        results.push(obj)
    })
    return results
}

let lyricPath = [];
const lyricSql = 'select * from audio_lyric'
connection.query(lyricSql, (err, results) => {
    if (err) {
        console.log(err.sqlMessage)
    }
    lyricPath = results
})

app.get('/getAudiolyrics', async (req, res) => {
    try {
        const lyrics = await lyricPath.map(item => {
            const path = item.audio_lyric
            const data = fs.readFileSync(path, 'utf-8')
            // 将获取歌词转换为对象数组
            return {
                id: item.id,
                audio_name: item.audio_name,
                audio_lyrics: parseLrc(data)
            }
        })
        res.send({
            code: 200,
            data: lyrics
        })
    } catch (err) {
        res.send({
            code: 500,
            message: err
        })
        console.log(err)
    }
})
app.listen(8081, () => {
    console.log(`接口创建成功，访问地址为http://localhost:8081`);
});