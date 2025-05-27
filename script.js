
const addresses = {
    bitcoin: "your-bitcoin-address-here",
    ethereum: "your-ethereum-address-here",
    usdt: "your-usdt-address-here",
    bnb: "your-bnb-address-here",
    matic: "your-matic-address-here"
};

function copyAddress(crypto) {
    const tempInput = document.createElement("input");
    tempInput.value = addresses[crypto];
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    document.getElementById("copied").style.display = "block";
    setTimeout(() => {
        document.getElementById("copied").style.display = "none";
    }, 2000);
}
