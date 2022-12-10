import express from "express";

import {getFavourites, createFavourite, getFavourite, deleteFavourite, updateFavourite} from "../controllers/favourites.js";

const router = express.Router();

router.get("/favourites", getFavourites); //returns all favourites in the list
router.post("/favourite", createFavourite);
router.get("/favourite/:id", getFavourite); //returns a specific favourite by id
router.delete("/favourite/:id", deleteFavourite); //deletes a specific favourite by id
router.put("/favourite/:id", updateFavourite); //updates a specific favourite by id

export default router;