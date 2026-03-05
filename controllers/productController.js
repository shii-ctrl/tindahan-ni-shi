//SQL
const connection = require("../config/db");
//get all products
exports.getAllGadgets = (req, res) => {
  connection.query("SELECT * FROM pcs112-tindahan", (err, rows, fields) => {
    if (err) throw err;
    res.json(rows);
  });
};

exports.createProducts = (req, res) => {
  const {itemName, unitPrice, quantity, supplier } = req.body;
  connection.query(
    "INSERT INTO gadgets (itemName, unitPrice, quantity, supplier) VALUES (?, ?, ?, ?)",
    [itemName, unitPrice, quantity, supplier],
    (err, result) => {
      if (err) throw err;
      res.json({
        message: "User created successfully",
        id: result.insertId,
      });
    },
  );
};


