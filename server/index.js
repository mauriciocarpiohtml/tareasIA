const express = require('express')
const cors = require('cors')
const {Configuration, OpenAIApi} = require('openai')

const configuration = new Configuration({
    apiKey: 'tu clave'
})

const openai = new OpenAIApi(configuration)

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', async (req, res) =>{
    res.status(200).send({
        message:'Hello from Codex'
    })
})

app.post('/', async(req, res) => {
    try {
        const prompt = req.body.prompt
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${prompt}`,
            temperature: 0,
            max_tokens: 2000,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
        })
        res.status(200).send({
            bot:response.data.choices[0].text
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({error})
    }
})


app.listen(5005, () => console.log('Server is running in the port http://localhost:5005'))