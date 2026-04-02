const mongoose = require("mongoose");
const Product = require("./models/Product");

// ✅ NEW (Docker use)
// ✅ NEW
mongoose.connect("mongodb://mongo:27017/shoesDB")
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

const products = [
  {
    name: "Nike Air Max",
    price: 5000,
    image: "https://via.placeholder.com/150",
    category: "Running",
    description: "Comfortable shoes"
  },
  {
    name: "Adidas Run",
    price: 4000,
    image: "https://via.placeholder.com/150",
    category: "Sports",
    description: "Light shoes"
  }
];

const seedDB = async () => {
  await Product.deleteMany();        // purana data delete
  await Product.insertMany(products); // new data insert
  console.log("Data Inserted");
  mongoose.connection.close();
};

seedDB();