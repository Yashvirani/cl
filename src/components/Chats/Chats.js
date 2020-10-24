import React from 'react';
import Chat from '../Chat/Chat';
import './Chats.css';

function Chats() {
    return (
        <div className="chats">
            <Chat 
            name="Mark"
            message="Message"
            timeStamp="40 Sec ago"
            profilePic="https://image.cnbcfm.com/api/v1/image/106330923-1578676182018gettyimages-1178141599.jpeg?v=1584633147&w=1400&h=950"/>
             <Chat 
            name="Jeff Bezos"
            message="Message"
            timeStamp="30 Sec ago"
            profilePic="https://specials-images.forbesimg.com/imageserve/5f469ea85cc82fc8d6083f05/960x0.jpg?fit=scale"/>
             <Chat 
            name="Donald Trump"
            message="Message"
            timeStamp="20 Sec ago"
            profilePic="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2020/04/09/6ec15f6a-79f0-11ea-9b24-e7152d1bf921_image_hires_101727.jpg?itok=1eQ5Nixm&v=1586398657"/>
             <Chat 
            name="Virat Kohli"
            message="Message"
            timeStamp="10 Sec ago"
            profilePic="https://upload.wikimedia.org/wikipedia/commons/1/15/Virat_Kohli_portrait.jpg"/>
            
        </div>
    )
}

export default Chats;
