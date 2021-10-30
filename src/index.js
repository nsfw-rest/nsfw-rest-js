const request = require('request-promise');
const fs = require('fs')

exports.scanStream = async function(stream) {
    return await uploadFile(stream)
}

exports.scanFileLocation = async function(fileLocation) {
    if(!fileLocation) throw new Error('scanFileLocation expects a file location')

    const stats = fs.statSync(fileLocation);
    const fileSizeInBytes = stats.size;

    let readStream = fs.createReadStream(fileLocation);

    return await uploadFile(readStream)

    
}

async function uploadFile(content) {
    const res = await request.post({
        url: 'https://api.unscan.co/nsfw',
        formData: {
            file: content,
        },
    })

    const json = JSON.parse(res)

    if(!json.success) {
        throw new Error(json.message)
    }

    return json
}