document.getElementById('addInput').addEventListener('click', function() {
    let newInput = document.createElement('input');
    newInput.type = 'text';
    document.getElementById('container').appendChild(newInput);
});

document.getElementById('removeInput').addEventListener('click', function() {
    let container = document.getElementById('container');
    if (container.childNodes.length > 0) {
        container.removeChild(container.lastChild);
    }
});