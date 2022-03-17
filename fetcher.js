const request = require('request')
const fs = require('fs')
const args = process.argv.slice(2)

const fetch = function(url, localPath) {
  // Request given url
  request(url, (error, response, body) => {
    // Write file 
    fs.writeFile(localPath, body, error => {
      // If error, display in console
      if (error) {
        console.error(error)
        return
      }
      // Otherwise, display success message
      console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`)
    }) 
  })
}

fetch(args[0], args[1])