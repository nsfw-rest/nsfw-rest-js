const fs = require('fs');
const nsfw = require('../src/index')
const path = require('path')

const streamToBeUploaded = fs.createReadStream(path.join(__dirname, 'landscape.jpg'));


async function streamExample()  {
    const results = await nsfw.scanStream(streamToBeUploaded)
    console.log(results)
    
}

streamExample()