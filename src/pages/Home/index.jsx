import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [value, setValue] = useState();
    const navigate = useNavigate();
    const handleJoinRoom = useCallback(() => {
        navigate(`/room/${value}`) // for new route in local host
        // when user press button it allow them to join the video call server
        
    },[navigate,value]) // return value
    return (
        <div>
            <input type="text" placeholder="Enter Room Code"
                value={value} 
                onChange={(e)=>setValue(e.target.value)} // when user enter name it auto change the new once
            />
            
            <buttonn onClick={handleJoinRoom}>Join</buttonn> 
            
        </div>
    );
};
export default HomePage;
