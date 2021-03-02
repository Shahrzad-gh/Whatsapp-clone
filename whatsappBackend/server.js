//import
import express from "express";
import mongoose from 'mongoose';
import Messages from './dbMessages.js';
import Pusher from 'pusher';
import cors from 'cors';

//config
const app = express();
const port = process.env.PORT || 9000; 

const pusher = new Pusher({
  appId: "1164049",
  key: "a5c99209666ac7372a3b",
  secret: "fa24477a5295f4662b45",
  cluster: "eu",
  useTLS: true
});

//middleware
app.use(express.json());
app.use(cors());

//DB config
const connection_url= "mongodb+srv://admin:123admin123@whatsappcluster.wfrkl.mongodb.net/<whatsappdb>?retryWrites=true&w=majority"
mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("DB connected");

  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on('change', (change) => {
    console.log("A change occure", change);

    if(change.operationType === 'insert'){
      const messageDetails = change.fullDocument;
      pusher.trigger('messages', 'inserted',{
        name: messageDetails.name,
        message : messageDetails.message,
        timestamp: messageDetails.timestamp,
        received : messageDetails.received,
      })
    }else{
      console.log("Error trigger Pusher");
    }
  });
});

//api route
app.get('/', (req, res)=> res.status(200).send('hello shery'))
 
app.get('/messages/sync', (req, res) => {
  Messages.find((err,data) => {
    if (err){
      res.status(500).send(err)
    }else{
      res.status(200).send(data)
    }
  })
})

app.post('/messages/new', (req, res) => {
  const dbMessage = req.body

  Messages.create(dbMessage, (err, data) => {
    if(err){
      res.status(500).send(err);
    }else{
      res.status(201).send(data)
    }
  });
});
//listener

app.listen(port, ()=> console.log(`Listening to localhost:${port}`))