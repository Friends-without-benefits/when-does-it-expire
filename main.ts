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
    while(true) {
        let input = await askQuestion("ST: ")
        if(input == "done") break
        const r = fetch("https://erau.teamdynamix.com/TDWebApi/api/29/assets/search", {headers: headers, method: "POST", body: JSON.stringify({
            SerialLike: input
        })})
        const r2 = fetch(`https://erau.teamdynamix.com/TDWebApi/api/29/assets/${(await (await r).json())[0].ID}`, {headers: headers, method: "GET"})
        let fullAsset = await (await r2).json()
        console.log(fullAsset.ExpectedReplacementDate)
    }
}

go().then(() => {
    rl.close()
    process.exit(0)
})