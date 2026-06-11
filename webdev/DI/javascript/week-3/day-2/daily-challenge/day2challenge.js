class Video {
    constructor(title, uploader, time) {
        this.title = title
        this.uploader = uploader
        this.time = time
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`)
    }
}

const video1 = new Video("funny cats", "john", 120)
video1.watch()

const video2 = new Video("cooking pasta", "sarah", 600)
video2.watch()

const videoData = [
    { title: "learn javascript", uploader: "mike", time: 3600 },
    { title: "guitar tutorial", uploader: "amy", time: 900 },
    { title: "morning workout", uploader: "tyson", time: 1800 },
    { title: "travel vlog", uploader: "becky", time: 720 },
    { title: "book review", uploader: "susy", time: 480 }
]

for (let i = 0; i < videoData.length; i++) {
    let v = new Video(videoData[i].title, videoData[i].uploader, videoData[i].time)
    v.watch()
}
