# Crypto Tracker

A simple JavaScript project that fetches live cryptocurrency data using the **CoinLore API**.  
Users can select a cryptocurrency from a dropdown list and instantly see its symbol and current USD price.  
The displayed data automatically refreshes every 10 seconds.

## Features
- Fetches a list of cryptocurrencies from the CoinLore API  
- Displays detailed info for the selected coin  
- Auto-refreshes price data  
- Lightweight and easy to use — just vanilla JavaScript

## How It Works
The app:
1. Loads a list of cryptocurrencies into a dropdown.
2. Fetches info for the selected coin.
3. Updates the UI with live price data.
4. Automatically refreshes the data every 10 seconds.

## API Endpoints Used
- **List of coins:** `https://api.coinlore.net/api/tickers/`  
- **Coin info:** `https://api.coinlore.net/api/ticker/?id=YOUR_ID`

## Usage
Just open the HTML file in a browser.  
No build tools, no dependencies — everything runs client-side.

## License
MIT
