//links routes to data

var providers = require("../data/poolpeeps");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  //api get requests

  app.get("/api/providers", function(req, res) {
    res.json(providers);
  });

//api post requests

  app.post("/api/providers", function(req, res) {
    
    //adds friend to array

      providers.push(req.body);
      res.json(true);
   
  });

//clear array option

  app.post("/api/clear", function() {

    // Empty out the arrays of data

    poolPeepsArr = [];

    console.log(poolPeepsArr);
  });
};