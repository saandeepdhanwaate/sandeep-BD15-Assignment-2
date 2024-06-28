const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

//calculate-returns
app.get("/calculate-returns", (req, res) => {
  const boughtAt = parseFloat(req.query.boughtAt);
  const marketPrice = parseFloat(req.query.marketPrice);
  const quantity = parseFloat(req.query.quantity);
  const totalReturn = (marketPrice - boughtAt) * quantity;
  res.send(totalReturn.toString());
});

// total-returns

app.get("/total-returns", (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let returnValue = stock1 + stock2 + stock3 + stock4;
  res.send(returnValue.toString());
});

// calculate-return-percentage

app.get("/calculate-return-percentage", (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);
  let result = (returns / boughtAt) * 100;
  res.send(result.toString());
});

// total-return-percentage

app.get("/total-return-percentage", (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let returnValue = stock1 + stock2 + stock3 + stock4;
  res.send(returnValue.toString());
});

//status
app.get("/status", (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);

  if (returnPercentage > 0) {
    res.send("Profit");
  } else {
    res.send("Loss");
  }

  res.send(returnPercentage());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
