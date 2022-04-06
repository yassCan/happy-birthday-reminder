const puppeteer = require("puppeteer-core")
const http = require('http')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
})

const date = new Date()


rl.question("name, month, day: ", answer => setInterval(() => {

    console.log(answer.split(", "));

    const month = date.getMonth()
    const day = date.getDay()

    if(month == answer.split(", ")[1] && day == answer.split(", ")[2]) run(a)

}, 3600000))




async function run(a) {
    const browser = await puppeteer.launch({ headless: false ,executablePath: 'chrome .exe file path' })
    const page = await browser.newPage()
    const server = http.createServer((req, res) => {

        res.write(`

            <!DOCTYPE html>
            <html>

                <body>

                    <p>SAY HAPPY BD to ${a.split(", ")[0]} :D</p>

                </body>

                <style>

                    p {
                        font-family: Arial;
                        font-size: 2rem;
                        text-align: center;
                    }


                </style>


            </html>
        

        `)

        res.end()

    }).listen(3000)

    page.goto("http://localhost:3000")
}
