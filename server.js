import { createServer } from 'net'
import { readFileSync } from 'fs'

const server = createServer((event)=>{
    
    event.on('data', (data)=> {
        
        
        console.log("client connected from address: ", event.remoteAddress, event.remoteFamily)

        const request = data.toString()

        const splitted = request.split("\n\n")

        const headerAsText = splitted.at(0)

        const headers = headerAsText.split('\n')

        const [httpHead] = headers  

        const [method, path] = httpHead.split(' ')
        console.log(path)

        if(path === '/' || path.endsWith('.html')){
            // Korjattu vielä luennon jälkeen "bugi" mikä esti index URL:n ("/") käyttämisen selaimen kautta
            const resourceLocation = path === "/" ? "index.html" : path.slice(1)
          
            const html = readFileSync(resourceLocation, 'utf-8')
            event.write('HTTP/1.1 200 OK\nContent-Type: text/html\n\n' + html)
            event.end()
            return
        }

        event.write('HTTP/1.1 404 Not Found\nContent-Type: text/html\n\n<html><body>404 resource not found</body></html>')
        event.end()
    })
})
// Local loopback 127.0.0.1
// Open port to local network 0.0.0.0
server.listen(3000, 'localhost', ()=>{
    console.log("TCP server is listening on: http://localhost:3000")
})
