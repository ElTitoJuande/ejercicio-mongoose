import Store from "../models/storeModel.js";

const getAllStores = async (_req, res, next) => {
    try {
        const stores = await Store.find({});
        res.json(stores);
    } catch (error) {
        next(error);
    }
};

const getOneStore = async (req, res, next) => {
    try {
        const { id } = req.params;
        const store = await Store.find.findById(id);
        if (!store) {
            res.status(404);
            throw new Error("Tienda no encontrado");
        }
        res.json(store);
    } catch (error) {
        next(error);
    }
};

const createStore = async (req, res, next) => {
    try {
        const { name, direction } = req.body;
        const newStore = new Store({ name, direction });
        const savedStore = await newStore.save();
        res.status(201).json(savedStore);
    } catch (error) {
        next(error);
    }
};

const updateStore = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, price } = req.body;
        const updatedStore = await Store.findByIdAndUpdate(
            id,
            { name, price },
            { new: true, runValidators: true }
        );
        if (!updatedStore) {
            res.status(404);
            throw new Error("Tienda no encontrada");
        }
        res.json(updatedStore);
    } catch (error) {
        next(error);
    }
};

const deleteStore = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedStore = await Store.findByIdAndDelete(id);
        if (!deletedStore) {
            res.status(404);
            throw new Error("Tienda no encontrada");
        }
        res.json({ message: "Tienda eliminado correctamente" });
    } catch (error) {
        next(error);
    }
};

export {
    getAllStores,
    getOneStore,
    createStore,
    deleteStore,
    updateStore
};