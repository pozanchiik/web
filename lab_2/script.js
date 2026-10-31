localStorage.setItem('browser', navigator.userAgent);
localStorage.setItem('os', navigator.platform);

const sysInfoElement = document.getElementById('sys-info');
sysInfoElement.innerHTML = `ОС: ${localStorage.getItem('os')} <br> Браузер: ${localStorage.getItem('browser')}`;

const variantNumber = 1; 
const url = `https://jsonplaceholder.typicode.com/posts/${variantNumber}/comments`;

fetch(url)
    .then(response => response.json())
    .then(comments => {
        const commentsSection = document.getElementById('comments-section');
        comments.forEach(comment => {
            const commentBlock = document.createElement('div');
            commentBlock.className = 'comment-card';
            commentBlock.innerHTML = `
                <strong>${comment.name}</strong> <br>
                <small>${comment.email}</small>
                <p>${comment.body}</p><hr>
            `;
            commentsSection.append(commentBlock);
        });
    });

setTimeout(() => {document.getElementById('feedback-modal').style.display = 'block';}, 60000); 

document.getElementById('close-modal-btn').addEventListener('click', () => {
    document.getElementById('feedback-modal').style.display = 'none';
});

const hours = new Date().getHours();
let isDayTheme = hours >= 7 && hours < 21;

function applyTheme() {
    if (isDayTheme) {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    } else {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    }
}

applyTheme();

document.getElementById('theme-toggle-btn').addEventListener('click', () => {
    isDayTheme = !isDayTheme;
    applyTheme();
});