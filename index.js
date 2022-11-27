const axios = require("axios").default;
const express = require("express");
const app = express();

app.get("/", async (req, res) => {
    try {
      const response = await axios.get('https://api.ipify.org');
      //console.log(response);
      
      const ip = response.data;
      res.send(ip);
    } catch (error) {
      console.error(error);
      res.send("データがうまく取得できませんでした。");
    }
  });

//app.listen(process.env.PORT || 3000);
app.listen({ port: 3000 }, () => {
    console.log(`Server ready at http://localhost:3000`);
  });
  console.log('starts');

export default app;
