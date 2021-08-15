const nsfw = require('../src/index')



async function fileLocationExample()  {
    const results = await nsfw.scanFileLocation(__dirname + '/landscape.jpg')
    console.log(results)
    
}

fileLocationExample()