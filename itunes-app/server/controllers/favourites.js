import {v4 as uuid} from "uuid";

let favourites = [];

//api request for list of favourites
export const getFavourites = (req, res) => {
    res.send(favourites);
};

//api request to add a favourite to the list
export const createFavourite = (req, res) => {
    const favourite = req.body;

    favourites.push({...favourite, id: uuid()});
    res.send("User added successfully");
}

//api request to find a single favourite by searching a specific id
export const getFavourite = (req, res) => {
    const singleFavourite = favourites.filter((favourite) => favourite.id === req.params.id);
    res.send(singleFavourite);
}

//api request to delete a single favourite by id
export const deleteFavourite = (req, res) => {
    favourites = favourites.filter((favourite) => favourite.id !== req.params.id);
    res.send("User deleted successfully")
}

//api request to update a single user by id
export const updateFavourite = (req, res) => {
    const favourite = favourites.find((favourite) => favourite.id === req.params.id);

    favourite.name = req.body.name;
    favourite.type = req.body.type;
    favourite.rating = req.body.rating;

    res.send("Favourite updated successfully");
} 