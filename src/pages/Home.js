import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');

    const joinRoom = () => {
        if(!roomId || !username) {
            toast.error('ROOM ID & USERNAME is required')
            return;
        }

        //Redirect
        navigate(`/editor/${roomId}`, {
            state : {
                username,
            },
        })
    }

    const handleInputEnter = (e) => {
        if(e.code === 'Enter') {
            joinRoom();
        }
    }

    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success("Created a new room")
    }

  return (
    <div className='homePageContainer' >
        <div className="formContainer">
            <img className="homeLogoImage" src="/code-sync 1.png" alt="code-sync-logo " />
            <h4 className='mainLable' >Paste invitation ROOM ID</h4>
            <div className="inputGroup">
                <input onKeyUp={handleInputEnter} value={roomId} onChange={(e) => setRoomId(e.target.value)} type="text" className="inputBox" placeholder='ROOM ID' />
                <input onKeyUp={handleInputEnter} value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="inputBox" placeholder='Username' />
                <button onClick={joinRoom} className='btn joinBtn' >Join</button>
                <span className='createInfo' >
                    If you don't have invite then create &nbsp;
                    <a onClick={createNewRoom} className='createNewBtn' href=""> new room </a>
                </span>
            </div>
        </div>
        <footer>
            <h4>Made with 💛 by &nbsp;
                <a href="">Jenish</a>
            </h4>
        </footer>
    </div>
  )
}

export default Home