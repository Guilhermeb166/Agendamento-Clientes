import { db } from './firebase-config.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { buscarHorariosAgendados } from '../src/scripts/horarioReservado.js';

// Função para salvar dados no Firestore
document.getElementById('agendamentoForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const horaInput = document.querySelector('input[name="hora-option"]:checked');
    const servicoInput = document.querySelector('input[name="option"]:checked');

    if (!horaInput) {
        alert('Por favor, escolha um horário.');
        return;
    }

    if (!servicoInput) {
        alert('Por favor, escolha um serviço.');
        return;
    }

    const hora = horaInput.nextElementSibling.innerText;
    const servico = servicoInput.value;

    // Converte a data e a hora selecionadas para um objeto Date
    const dataHoraSelecionada = new Date(`${data}T${hora}:00`);
    const agora = new Date();

    // Verifica se a data e hora selecionadas são anteriores ao momento atual
    if (dataHoraSelecionada < agora) {
        alert('Não é possível agendar um horário que já passou.');
        return;
    }

    const dadosDoFormulario = {
        nome: nome,
        data: data,
        hora: hora,
        servico: servico
    };

    try {
        const { horariosAgendados, servicosAgendados } = await buscarHorariosAgendados(data);

        // Verifica se o próximo horário está desativado e o serviço escolhido é "Barba e cabelo"
        const labels = document.querySelectorAll("#horarios label");
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].querySelector("span").innerText === hora) {
                if (servico === 'Barba e cabelo' && i + 1 < labels.length && labels[i + 1].querySelector("input").disabled) {
                    alert('Não foi possível agendar o horário com o serviço barba e cabelo, pois ele dura 1 hora, e o próximo horário já está agendado por outra pessoa.');
                    return;
                }
                break;
            }
        }

        // Se chegou aqui, o horário pode ser agendado
        await addDoc(collection(db, "agendamentos"), dadosDoFormulario);
         document.getElementById('confirmar').style.display = 'block';
         document.querySelector('.form').style.display = 'none';

        document.getElementById('agendamentoForm').reset();
    } catch (e) {
        console.error("Erro ao adicionar documento: ", e);
        alert('Erro ao agendar horário');
    }
});
