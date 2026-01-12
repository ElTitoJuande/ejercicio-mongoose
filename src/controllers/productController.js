import Product from "../models/productModel.js";

const getAllProducts = async (_req, res, next) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    next(error);
  }
};

const getOneProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.find.findById(id);
    if (!product) {
      res.status(404);
      throw new Error("Producto no encontrado");
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const { name, price, inStock } = req.body;
    const newProduct = new Product({ name, price, inStock });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price },
      { new: true, runValidators: true }
    );
    if (!updatedProduct) {
      res.status(404);
      throw new Error("Producto no encontrado");
    }
    res.json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

const changeProductStock = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { inStock } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { inStock },
      { new: true, runValidators: true }
    );
    if (!updatedProduct) {
      res.status(404);
      throw new Error("Producto no encontrado");
    }
    res.json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      res.status(404);
      throw new Error("Producto no encontrado");
    }
    res.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    next(error);
  }
};

export {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  changeProductStock,
  deleteProduct,
};
