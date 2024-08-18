import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.querySelector('.emailCad').value;
    const password = document.querySelector('.Cadsenha').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Cadastro bem-sucedido
            alert('Usuário cadastrado com sucesso!');
            document.getElementById('cadastroForm').reset();
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(`Erro: ${errorMessage}`);
        });
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.querySelector('.emailLog').value;
    const password = document.querySelector('.Logsenha').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Login bem-sucedido
            alert("Login bem-sucedido!");
            window.location.href = 'admin.html'; // Redireciona para a página de admin
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(`Erro: ${errorMessage}`);
        });
});
