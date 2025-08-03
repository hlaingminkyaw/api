const express = require("express");

const app = express();
app.get('/', (req, res) => {
    res.json({ msg: "To do APi Index 123" });
}
);

app.get('/view/:id', (req, res) => {
    res.json({ msg: "To do APi View" });
}
);

app.listen(8800,()=>{
    console.log("APi runnig")
})
// node index.js 