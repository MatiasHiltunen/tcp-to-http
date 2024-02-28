import {createConnection} from 'net'

const client = createConnection({port: 3000, host: '0.0.0.0'}, () => {
    console.log("Connected to server!")
})

client.on('data', (data)=>{

    console.log(data.toString())
    client.end()
})

client.on('end', ()=> {
    console.log("Disconnected from server.")
})