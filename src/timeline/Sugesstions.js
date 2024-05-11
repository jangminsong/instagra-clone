import React from 'react';
import "./Sugesstions.css";
import { Avatar } from '@mui/material';

function Sugesstions() {
  return (  <div className='sugesstions'>
      <div className='sugesstions__title'>Sugesstions for you</div>
      <div className="sugestions_usernames">

        <div className="sugesstion__username">
          <div className="username__left">
            <span className="Avatar">
              <Avatar className='avatar'>R</Avatar>
            </span>
            <div className="username__info">
              <span className='username'>Albs1010</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="sugesstion__username">
          <div className="username__left">
            <span className="Avatar">
              <Avatar className='avatar'>R</Avatar>
            </span>
            <div className="username__info">
              <span className='username'>Albs1010</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="sugesstion__username">
          <div className="username__left">
            <span className="Avatar">
              <Avatar className='avatar'>R</Avatar>
            </span>
            <div className="username__info">
              <span className='username'>Albs1010</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

      </div>
    </div>
  )
}

export default Sugesstions