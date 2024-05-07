document.getElementById('removeChild').addEventListener('click', function() {
    let child = document.getElementById('child');
    child.parentNode.removeChild(child);
});

document.getElementById('removeLast').addEventListener('click', function() {
    let list = document.getElementById('list');
    list.removeChild(list.lastElementChild);
});

document.getElementById('element').addEventListener('click', function() {
    this.parentNode.removeChild(this);
});

let listItems = document.querySelectorAll('#list li');
listItems.forEach(function(li) {
    li.addEventListener('click', function() {
        this.parentNode.removeChild(this);
    });
});

document.getElementById('cloneInput').addEventListener('click', function() {
    let input = document.getElementById('input');
    let clone = input.cloneNode(true);
    document.body.appendChild(clone);
});