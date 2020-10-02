const express = require('express')
const app = express()
const multrer = require('multer')
require('./mongodb')
const excelToJson = require('convert-excel-to-json')


const upload = multrer({
    dest: 'files',
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(xlsx|xlsm|xltx|xltm)$/)){
            return cb ( new Error('enter xlsx file only!'))
        } 
        

        return cb(undefined, true)
        
    }

})
 


app.post('/upload', upload.array('files'), async (req, res) => {
    
        const result = excelToJson ({ 
            sourceFile: 'files/DB2-.xlsx',
            columnToKey: {
                B: 'id',
                C: 'name'
            }
        })

   
    try {
        const file = new dataFile(result)
        await file.save()
        await res.status(200).send()
        
    } catch (err) {
        res.send(err)
    }

})


app.listen(3000, ()=>{
    console.log('server run on port 3000')
})

