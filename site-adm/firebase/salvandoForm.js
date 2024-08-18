import { db } from '../../firebase/firebase-config.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

// Função para salvar dados no Firestore
document.getElementById('agendamentoForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const hora = document.querySelector('input[name="hora-option"]:checked').nextElementSibling.innerText;
    const servico = document.querySelector('input[name="option"]:checked').value;

    const dadosDoFormulario = {
        nome: nome,
        data: data,
        hora: hora,
        servico: servico
    };

    try {
        // Adicionar um novo documento com um ID gerado automaticamente
        await addDoc(collection(db, "agendamentos"), dadosDoFormulario);
        alert('Horário agendado com sucesso!');
        document.getElementById('agendamentoForm').reset();
    } catch (e) {
        console.error("Erro ao adicionar documento: ", e);
        alert('Erro ao agendar horário');
    }
});
