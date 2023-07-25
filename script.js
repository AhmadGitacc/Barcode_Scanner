const barcodeDatabase = {
    "9780201379624": {
        brand: "Golden Penny",
        productName: "Noodles",
        price: 3500,
    },
    "9846671514": {
        brand: "Dangote",
        productName: "sugar",
        price: 155,
    },
    "8390926481": {
        brand: "Nexus",
        productName: "smart tv",
        price: 250000,
    },
    "8765671514": {
        brand: "Dangote",
        productName: "salt",
        price: 100,
    },
    "9846671514": {
        brand: "Dangote",
        productName: "sugar",
        price: 155,
      },
};

function onScanSuccess(decodedText, decodedResult) {
    let result = document.getElementById('resultp');
    let scannedResult = document.getElementById('scannedResult')

    if (decodedResult) {
        const productInfo = barcodeDatabase[decodedResult];
        if (productInfo) { 
            scannedResult.textContent = `Brand: ${productInfo.brand} | Product: ${productInfo.productName} | Price: N${productInfo.price.toFixed(2)}`;
        } else {
            scannedResult.textContent = `Product not found for barcode: ${detectedBarcode}`;
        }
    } else {
        scannedResult.textContent = "No barcode detected.";
    }
    result.textContent = `Code scanned = ${decodedText}`, decodedResult;
}
var html5QrcodeScanner = new Html5QrcodeScanner(
	"qr-reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);