const express = require('express');
const app = express();
const cors = require('cors')


app.use(cors());
app.use(express.json());
app.post('/api/users/:id/update', (req, res) => {

    setTimeout(() => {
        res.send(req.body)
    }, [2000])
})



app.listen(process.env.PORT || 5000, () => {
    console.log(`backEnd server is ruuing on ${process.env.PORT || 5000} port`)
})