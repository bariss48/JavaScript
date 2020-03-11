const express = require('express')
const app = express()
const port = 3000

let db = [];
let array = [];

app.get('/', (req, res) => {
    res.json(db)
})
// request == istek
// response  ==  cevap


app.get('/add/:number', (req, res) => {
    console.log(req.params.number)
    db.push(Number(req.params.number))
    res.json(db)
})

app.get('/delete/:number', (req, res) => {
    db = db.filter(item => item !== +req.params.number)
    res.json(db)
})

app.get('/update/:target/:destination', (req, res) => {

for (var i = 0; i<=db.length; i++){
    if(db[i] === +req.params.target){
       db[i] = +req.params.destination
    }
}


 //db.pop( db.filter(item => item === +req.params.target) )
 //db.push(db.filter(item => item === +req.params.destination))
 // 5
//db.filter(item => item === +req.params.destination) //3


    // /update/5/3
    res.json(db)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
