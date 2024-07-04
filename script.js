const commodities = [
    "Soap", "Mouth wash", "Toothpaste", "Body cream", "Face cream",
    "Roll on", "Perfume", "Hair cream", "Shampoo"
];

document.addEventListener("DOMContentLoaded", () => {
    const commodityPricesDiv = document.getElementById('commodity-prices');
    
    commodities.forEach(commodity => {
        const div = document.createElement('div');
        div.className = 'commodity-price';
        div.innerHTML = `
            <label for="${commodity}">${commodity}:</label>
            <input type="number" id="${commodity}" step="0.01" placeholder="$0.00" min="0">
        `;
        commodityPricesDiv.appendChild(div);
    });
});

function generateReceipt() {
    const receiptHeader = "------------------------------\n       Receipt Generator\n------------------------------\n";
    const receiptFooter = "\n------------------------------\nThanks for your patronage.";
    let receiptBody = '';
    let totalAmount = 0;
    
    commodities.forEach(commodity => {
        const priceInput = document.getElementById(commodity);
        const price = parseFloat(priceInput.value);
        if (!isNaN(price) && price >= 0) {
            receiptBody += `${commodity.padEnd(15)}: $${price.toFixed(2)}\n`;
            totalAmount += price;
        }
    });

    const totalAmountLine = `Total Amount     : $${totalAmount.toFixed(2)}`;

    document.getElementById('receipt').innerText = receiptHeader + receiptBody + totalAmountLine + receiptFooter;
}
