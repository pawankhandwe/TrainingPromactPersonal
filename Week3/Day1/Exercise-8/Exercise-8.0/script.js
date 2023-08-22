const startButton = document.getElementById('startButton');
const resultDiv = document.getElementById('result');
const loading = document.getElementById('load');
startButton.addEventListener('click', function() {
    startButton.style.backgroundColor="red";
    resultDiv.innerHTML = 'Starting please wait 5 second .....';
    loading.classList.add('loading'); // Add loading class

    simulateAsyncOperation(function() {
        resultDiv.innerHTML = 'Operation Complete';
        loading.classList.remove('loading'); // Remove loading class
        startButton.classList.remove('complete'); // Remove complete class
        startButton.style.backgroundColor="green";
    });
});

function simulateAsyncOperation(callback) {
    setTimeout(function() {
        callback();
    }, 5000);
}
