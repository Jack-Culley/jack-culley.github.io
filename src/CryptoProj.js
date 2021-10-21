import React from 'react';
import './index.css';

function CryptoProj() {
  return (
    <div className="Proj">
        <h2>Cryptocurrency Tracker - in progress</h2>
        <a href="https://github.com/Jack-Culley/cryptodatacollection" target="_blank">
            <img className='picproj' src='Files/crypto.jpg' width="40%" height="40%"/>
        </a>
        <h3 className='text-box proj'>
          I believe cryptocurrency has a lot of potential so I like to track prices of my favorite coins.
          Usually I use an app such as Coinmarketcap but I saw this interest as an opportunity to learn 
          more about fullstack development. So I built this project using ReactJS and a cryptocurrency API from <a className="link" href="https://www.coingecko.com/en/api/documentation" target='_blank'>CoinGecko</a>. 
          The goal was to learn how to gather data from an API and display it. Check out some of my 
          favorite cryptocurrencies and let me know how I did!
        </h3>
    </div>
  );
}

export default CryptoProj;