document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const resultDiv = document.getElementById('result');
    const resultPromiseDiv = document.getElementById('resultpromise');

    // Simulating an asynchronous operation using callbacks
    function simulateAsyncOperationWithCallback(callback) {
        setTimeout(function() {
            resultDiv.innerHTML = 'Asynchronous operation complete (Callback)';
            callback();
        }, 2000);
    }

    // Using the function with a callback
    startButton.addEventListener('click', function() {
        
        resultDiv.classList.remove('complete');
        
        startButton.style.backgroundColor="red";
        resultDiv.innerHTML = 'Starting asynchronous operation (Callback)...';
        simulateAsyncOperationWithCallback(function() {
            resultDiv.innerHTML = 'Asynchronous operation complete (Callback)';
            resultDiv.classList.add('complete');
            startButton.style.backgroundColor="green";
        });
    });

    // Simulating an asynchronous operation using Promises
    function simulateAsyncOperationWithPromise() {
        return new Promise(function(resolve) {
            setTimeout(function() {
                resultPromiseDiv.innerHTML = 'Asynchronous operation complete (Promise)';
                resultPromiseDiv.classList.add('complete');
                startButton.style.backgroundColor="green";
                resolve();
            }, 2000);
        });
    }

    // Using the function with a Promise
    startButton.addEventListener('click', function() {
        resultPromiseDiv.classList.remove('complete');
        startButton.style.backgroundColor="red";
        resultPromiseDiv.innerHTML = 'Starting asynchronous operation (Promise)...';
        simulateAsyncOperationWithPromise().then(function() {
            resultPromiseDiv.innerHTML = 'Asynchronous operation complete (Promise)';
            resultPromiseDiv.classList.add('complete');
        });
    });
});
