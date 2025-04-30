//Run the sandbox with yarn start
const apiKey = ""

const headers = {Authorization: "Bearer " + apiKey, "Content-Type": "application/json"}

import ReadLine from "node:readline"
const rl = ReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

async function askQuestion(question: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(`${question}\n`, (answer) => {
            resolve(answer)
        })
    })
}

async function ding(): Promise<void> {
    return new Promise((resolve) => {
        process.stdout.write("\u0007")
        setTimeout(() => resolve(), 1000)
    })
}


async function go() {





}

go().then(() => {
    rl.close()
    process.exit(0)
})