//1
const info = `ОС: ${navigator.platform}, Браузер: ${navigator.userAgent}`;
localStorage.setItem('userSystem', info);

document.getElementById('system-info').innerText = localStorage.getItem('userSystem');

//2
fetch('https://jsonplaceholder.typicode.com/posts/15/comments')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('comments-container');
        data.forEach(comment => {
            container.innerHTML += `<p><strong>${comment.email}:</strong> ${comment.body}</p>`;
        });
    });

//3
setTimeout(() => {
    document.getElementById('contact-modal').style.display = 'block';
}, 60000);

document.getElementById('close-modal').onclick = () => {
    document.getElementById('contact-modal').style.display = 'none';
};
// fetch('/api/contact', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: "Єва",
//         email: "yeva@example.com",
//         subject: "Тест",
//         message: "лаб 6"
//     })
// })
//4
const hours = new Date().getHours();
const body = document.body;

if (hours < 7 || hours >= 21) {
    body.classList.add('dark-mode');
} else {
    body.classList.remove('dark-mode');
}
const contactForm = document.getElementById('contact-modal');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    });

    // const result = await response.json();
    // if (result.success) {
    //     alert('Ура! Твій сервер відправив листа через Mailjet!');
    // } else {
    //     alert('Щось пішло не так...');
    // }
});