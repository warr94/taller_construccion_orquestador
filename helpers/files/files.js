const fs = require('fs');

exports.writeFile = (objectToSave) => {

    return new Promise((resolve, reject) => {
        fs.writeFile('src/models/archivo.json', JSON.stringify(objectToSave), 'utf8', (err) => {
            
            if (err){
                reject(err)
            }

            console.log('The file has been saved!');
            resolve(true)
        });
    })
}
