const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const Parser = require("rss-parser")

const parser = new Parser()
const FEED_URL = "https://thefactfile.org/feed/"

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.set("view engine", "ejs")
app.set("views", "public/pages")

// home page - all the facts
app.get("/", async (req, res) => {
    let feed = await parser.parseURL(FEED_URL)
    res.render("index", { posts: feed.items, categories: getCategories(feed.items) })
})

// search page - no posts at first
app.get("/search", async (req, res) => {
    let feed = await parser.parseURL(FEED_URL)
    res.render("search", { posts: [], categories: getCategories(feed.items) })
})

// search by title
app.post("/search/title", async (req, res) => {
    let feed = await parser.parseURL(FEED_URL)
    let title = req.body.title.toLowerCase()
    let posts = feed.items.filter(item => item.title.toLowerCase().includes(title))
    res.render("search", { posts: posts, categories: getCategories(feed.items) })
})

// search by category
app.post("/search/category", async (req, res) => {
    let feed = await parser.parseURL(FEED_URL)
    let category = req.body.category
    let posts = feed.items.filter(item => item.categories && item.categories.includes(category))
    res.render("search", { posts: posts, categories: getCategories(feed.items) })
})

function getCategories(items) {
    let all = []
    items.forEach(item => {
        if (item.categories) {
            item.categories.forEach(c => {
                if (!all.includes(c)) all.push(c)
            })
        }
    })
    return all
}

app.listen(3000, () => {
    console.log("RSS fact reader running on http://localhost:3000")
})
