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

    // Using async/await
    startButton.addEventListener('click', async function() {
        resultDiv.classList.remove('complete');
        
        startButton.style.backgroundColor="red";
        resultDiv.innerHTML = 'Starting asynchronous operation (Callback)...';

        try {
            await simulateAsyncOperationWithCallback(() => {
                resultDiv.innerHTML = 'Asynchronous operation complete (Callback)';
                resultDiv.classList.add('complete');
            
                startButton.style.backgroundColor="green";
            });

            startButton.style.backgroundColor="red";
            resultPromiseDiv.classList.remove('complete');
            
            resultPromiseDiv.innerHTML = 'Starting asynchronous operation (Promise)...';
            
            await simulateAsyncOperationWithPromise();
            
            resultPromiseDiv.innerHTML = 'Asynchronous operation complete (Promise)';
            resultPromiseDiv.classList.add('complete');
            startButton.style.backgroundColor="green";
            
        } catch (error) {
            console.error('An error occurred:', error);
        }
    });
});
