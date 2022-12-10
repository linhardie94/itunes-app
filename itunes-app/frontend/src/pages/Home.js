//importing react and files needed for home page
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import axios from "axios";
import { toast } from 'react-toastify';


const Home = () => {
    const [data, setData] = useState([]);

    //get api to get all users already listed and display them on localhost 5000 users list
    useEffect(() => {
        getFavourites();
    }, []);

    const getFavourites = async () => {
        const response = await axios.get("http://localhost:5000/favourites")
        if(response.status === 200) {
            setData(response.data);
        };
    };

    //deleting a specific user by their ID when you click the delete user button on the home page
    const onDeleteFavourite= async (id) => {
        if(window.confirm ("Are you sure you want to delete this user?")) {
            const response = await axios.delete(`http://localhost:5000/favourite/${id}`);
            if(response.status === 200) {
                toast.success(response.data);
                getFavourites();
            };
        };
    };

    console.log("data=>", data);

    //showing your list of favourites
  return (
    <div style={{marginTop: "150px"}}>
        <table className='StyledTable'>
            <thead>
                <tr>
                    <th style={{textAlign: "center"}}>No.</th>
                    <th style={{textAlign: "center"}}>Title</th>
                    <th style={{textAlign: "center"}}>Type</th>
                    <th style={{textAlign: "center"}}>Rating</th>
                    <th style={{textAlign: "center"}}>Action</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((item, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.title}</td>
                            <td>{item.type}</td>
                            <td>{item.rating}</td>
                            <td>
                                <Link to={`/update/${item.id}`}>
                                    <button className='Btn BtnEdit'>Edit</button>
                                </Link>
                                <button className='Btn BtnDelete' onClick={() => onDeleteFavourite(item.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
         </table>
    </div>
  )
}

export default Home