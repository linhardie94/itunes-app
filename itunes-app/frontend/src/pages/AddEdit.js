//this is my add fave page
import React, {useState, useEffect} from 'react';
import {useNavigate, useLocation, useParams} from 'react-router-dom';
import axios from 'axios';
import "./AddEdit.css";
import { toast } from 'react-toastify';

//assigning initial states to my form
const initialState = {
    title: "",
    type: "",
    rating: "",
};


const AddEdit = () => {
    const [state, setState] = useState(initialState);

    //destructuring so it's easier for me to just write title
    const {title, type, rating} = initialState;

    const navigate = useNavigate();

    const {id} = useParams();

    //if there's an id in the params it will get the info for that single list item
    useEffect(() => {
        if(id) {
            getSingleFavourite(id);
        }
    }, [id])

    const getSingleFavourite = async (id) => {
        const response = await axios.get(`http://localhost:5000/favourite/${id}`);
            if(response.status === 200) {
                setState({...response.data[0]});
            }
        
    }

    //function to add a favoutite to the list and post a success message using toast
    const addFavourite = async (data) => {
        const response = await axios.post("http://localhost:5000/favourite", data);
        if (response.status === 200) {
            toast.success(response.data);
        }
    }

    //updating a favourite
    const updateFavourite = async (data, id) => {
        const response = await axios.put(`http://localhost:5000/favourite/${id}`, data);
        if (response.status === 200) {
            toast.success(response.data);
        }
    }

    //creating an if statement based on what you want to do when you hit submit
    const handleSubmit = (e) => {
        e.preventDefault();
        /*if(!name || !email || !contact) {
            toast.error("Please complete the form")
        } else */ 
        //taking out this if statement above because it causes an error when adding a user, not sure why yet. 
        //I want to come back to it so I'm going to leave it in my code for now.
        {
        if(!id) {
            addFavourite(state);
        } else {
            updateFavourite(state, id);
        }
            setTimeout(() => navigate("/"), 500);
        }
        
    }

    //on change of input field it will populate the form
    const handleInputChange = (e) => {
        let {name, value } = e.target;
        setState({ ...state, [name]: value, });
    };

    //creating the form
  return (
    <div style={{marginTop: "100px"}}>
        <form 
            style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
            }}
            onSubmit={handleSubmit}
        >
            <label htmlFor='title'>Title</label>
            <input
                type="text"
                id='title'
                name='title'
                placeholder='Enter title...'
                onChange={handleInputChange}
                defaultValue={title}
            />
            <label htmlFor='type'>Type</label>
            <input
                type="text"
                id='type'
                name='type'
                placeholder='Enter media type...'
                onChange={handleInputChange}
                defaultValue={type}
            /><label htmlFor='rating'>Rating</label>
            <input
                type="number"
                id='rating'
                name='rating'
                placeholder='Enter rating out of 10...'
                onChange={handleInputChange}
                defaultValue={rating}
            />
            <input type="submit" value={id ? "Update " : "Add"} />
        </form>
    </div>
  )
}

export default AddEdit