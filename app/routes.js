// app/routes.js

// grab the nerd model we just created
const Collections = require('./models/bridge');
const cors = require('cors');


module.exports = function(app) {

  app.use(cors());
  app.get('/api/test', function(req, res) {
    console.log("Loading.....");
    var newPerson = new Collections.Person({
       name: "Dinesh",
       age: "24",
       nationality: "India"
    },false);
    newPerson.save(function(err, Person){
       if(err)
          console.log({message: "Database error", type: "error"});
       else
          console.log({message: "New person added", type: "success", person: newPerson});

    });

    var newMessage = new Collections.Message({
       "message" : req.query.q
    },false);
    newMessage.save(function(err, Message){
       if(err)
          console.log({message: "Database error", type: "error"});
       else
          console.log({message: "New Message added", type: "success"});

       console.log(Message);
       res.json(Message);
    });


    /*bridge.find(function(err, response) {
      if (err)
        res.send(err);

      res.json(response);
    });*/
  });

  app.get('*', function(req, res) {
    res.sendFile(__dirname + '/views/index.html'); 
  });

};
