import { auth } from "./firebase-config.js"
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
    if (!user) {
        // Usuário não está autenticado, redireciona para a página de login
        window.location.href = 'index.html';
    }
});

document.getElementById('logout-btn').addEventListener('click', function() {
    signOut(auth).then(() => {
        // Logout bem-sucedido
        alert("Logout bem-sucedido!");
        window.location.href = 'index.html'; // Redireciona para a tela de login
    }).catch((error) => {
        // An error happened.
        alert(`Erro: ${error.message}`);
    });
});