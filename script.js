document.getElementById('generate-btn').addEventListener('click', function() {
    var inputValue = document.getElementById('qr-input').value.trim();
    if(inputValue.startsWith('http://') || inputValue.startsWith('https://')) {
        generateQRCode(inputValue);
    } else {
        alert('Please enter a valid link (starts with http:// or https://)');
    }
});

function generateQRCode(inputValue) {
    var qrCodeDiv = document.getElementById('qr-code');
    qrCodeDiv.innerHTML = '';

    var qrCodeUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(inputValue);
    var qrCodeImg = document.createElement('img');
    qrCodeImg.src = qrCodeUrl;
    qrCodeDiv.appendChild(qrCodeImg);

    var qrCodeContainer = document.getElementById('qr-code-container');
    qrCodeContainer.style.borderColor = '#007bff';
}
