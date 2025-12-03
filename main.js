const LIST_API_URL = "https://api.coinlore.net/api/tickers/";
const INFO_API_URL = "https://api.coinlore.net/api/ticker/?id=";

const selector = document.getElementById("crypto-selector");

// Fill the dropdown with cryptocurrencies
async function fillCryptoList() {
    try {
        const repsonse = await fetch(LIST_API_URL);
        if (!repsonse.ok) {
            throw new Error(`Response status: ${repsonse.status}`);
        }
        
        const result = await repsonse.json();
        result.data.forEach(crypto => {
            let option = document.createElement("option");
            option.value = crypto.id;
            option.textContent = crypto.name;
            selector.appendChild(option);
        });
    } catch (error) {
        console.error(error);
    }
}

// Load cryptocurrency information based on selected ID
async function loadCryptoInfo(id) {
    try {
        const repsonse = await fetch(INFO_API_URL + id);
        if (!repsonse.ok) {
            throw new Error(`Response status: ${repsonse.status}`);
        }

        const result = await repsonse.json();
        return result[0];
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Update the UI with cryptocurrency information
function updateUI(crypto) {
    if (crypto) {
        document.getElementById("symbol").textContent = crypto.symbol;
        document.getElementById("price").textContent = `$${crypto.price_usd}`;
    }
}

// Event listener for dropdown selection change
selector.addEventListener("change", async (event) => {
    const crypto = await loadCryptoInfo(event.target.value);
    updateUI(crypto);
});

// Auto-refresh cryptocurrency info every 10 seconds
function autoRefresh(interval = 10000) {
    setInterval(async () => {
        const crypto = await loadCryptoInfo(selector.value);
        updateUI(crypto);
    }, interval);
}

// Initialize the dropdown on page load
(async () => {
    await fillCryptoList();

    // Load info for the first cryptocurrency by default
    const crypto = await loadCryptoInfo(selector.value);
    updateUI(crypto);

    autoRefresh(10000);
})();