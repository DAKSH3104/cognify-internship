<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        /* Basic styling for the button */
        button {
            padding: 10px 20px;
            background-color: #0074D9;
            color: #fff;
            border: none;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <button id="colorButton">Click me!</button>

    <script>
        const button = document.getElementById('colorButton');
        let isColorChanged = false;

        button.addEventListener('click', () => {
            if (isColorChanged) {
                button.style.backgroundColor = '#0074D9'; // Original color
            } else {
                button.style.backgroundColor = 'green'; // New color
            }
            isColorChanged = !isColorChanged;
        });
    </script>
</body>
</html>
