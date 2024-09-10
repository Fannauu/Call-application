import React from "react";
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'; // use for create video call 

const RoomPage = () => {
    const { roomId } = useParams();
    const myMeeting = async (element) => {
        const appID = 2025327137;
        const serverSecret = "8bc542755e113aeea120f17632f65144";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,    // specail id get it from Zegocloud
            serverSecret,      // secret id get from zegocloud
            roomId, // show room id
            Date.now().toString(), // convert username to string
            "Fanau",); // default name in placeholder
        const zc = ZegoUIKitPrebuilt.create(kitToken); // crate kitToken for server 
        zc.joinRoom({
            container: element, // parameter that use in anync function
            sharedLinks: [{
                name: 'Copy Link', // link copy for join
                url: `http://localhost:3000/room/${roomId}` // show room id
            }],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall, // specail key get from Zegocloud Console

            },
            showScreenSharingButton: true, // when user join screen will alert it 
        })

    }
    // use ref for accessing Dom elements directly
    return <div>
        <div ref={myMeeting} /> 
    </div>
};

export default RoomPage;