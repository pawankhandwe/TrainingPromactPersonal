
document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('textInput');
    const colorSelect = document.getElementById('colorSelect');
    const addButton = document.getElementById('addButton');
    const paragraphContainer = document.getElementById('paragraphContainer');

    addButton.addEventListener('click', function() {
        const text = textInput.value.trim();
        const selectedColor = colorSelect.value;

        if (text !== '') {
            const paragraph = document.createElement('p');
            paragraph.textContent = text;
            paragraph.style.color = selectedColor; // Set the selected color
            paragraphContainer.appendChild(paragraph);

            // Clear the input
            textInput.value = '';
        }
    });
});
