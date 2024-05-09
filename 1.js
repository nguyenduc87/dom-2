const tableDataNode = document.querySelector('#table-data');
const loaderNode = document.querySelector('.loader');

window.addEventListener('load', () => {
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            loadItem(item);
        })
        loaderNode.classList.add('hidden');
    })
})
function loadItem(obj) {
    const divContainer = document.createElement('div');
    divContainer.classList.add('container');
    tableDataNode.appendChild(divContainer);
    // Xử lý hiển thị
    divContainer.innerHTML = `
        <p>#${obj.id}</p>
        <p class="title">${obj.title}</p>
        <p class="content">${obj.body}</p>
        <div class="comment-container">
            <p class="comment-display">Hiển thị comment</p>
        </div>
    `
}