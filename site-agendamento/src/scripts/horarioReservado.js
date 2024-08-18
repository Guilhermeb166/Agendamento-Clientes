import { db } from '../../firebase/firebase-config.js';
import { collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

async function buscarHorariosAgendados(data) {
    const agendamentosRef = collection(db, "agendamentos");
    const q = query(agendamentosRef, where("data", "==", data));
    const querySnapshot = await getDocs(q);
    let horariosAgendados = [];
    let servicosAgendados = [];
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        horariosAgendados.push(data.hora);
        servicosAgendados.push({hora: data.hora, servico: data.servico});
    });
    return {horariosAgendados, servicosAgendados};
}

function desativarHorarios(horarios, servicos) {
    const labels = document.querySelectorAll("#horarios label");
    for (let i = 0; i < labels.length; i++) {
        const hora = labels[i].querySelector("span").innerText;
        if (horarios.includes(hora)) {
            labels[i].querySelector("input").disabled = true;
            labels[i].style.textDecoration = "line-through";
            labels[i].style.color = "red";

            // Verifica se o serviço "Barba e cabelo" está agendado para este horário
            const servicoAgendado = servicos.find(s => s.hora === hora && s.servico === 'Barba e cabelo');
            if (servicoAgendado) {
                if (i + 1< labels.length) {
                    // Dia de Semana se for 11:30 nao bloquear 14:30
                    const nextHora = labels[i + 1].querySelector("span").innerText;
    
                    if (hora === "11:45"  && nextHora === "14:30") {
                        continue;
                    }

                    // Se for Sabado as 12:30 nao bloquear 14:00
                    const selectedDate = new Date(document.getElementById("data").value);
                    const isSaturday = selectedDate.getDay() === 5; // Verifica se é sábado
                    if (isSaturday && hora === '12:30' && nextHora === '14:00') {
                        continue;
                    }
                    //Se o servi
                    labels[i + 1].querySelector("input").disabled = true;
                    labels[i + 1].style.textDecoration = "line-through";
                    labels[i + 1].style.color = "red";
                }
            }

            // Verifica se o serviço é "Barba" ou "Cabelo" e as últimas duas strings do horário são "30" ou "45"
            const servicoAgendadoBarbaCabelo = servicos.find(s => s.hora === hora && (s.servico === 'Barba' || s.servico === 'Cabelo'));
            if (servicoAgendadoBarbaCabelo) {
                const minutos = hora.slice(-2);
                if ((minutos === "30" || minutos === "45") && i + 1 < labels.length) {
                    labels[i + 1].querySelector("input").disabled = true;
                    labels[i + 1].style.textDecoration = "line-through";
                    labels[i + 1].style.color = "red";
                }
            }

            if(servicoAgendado){
                const minutos = hora.slice(-2);
                if(minutos==='45' || minutos==='00' || minutos==='30' && i + 2 < labels.length){
                    labels[i + 2].querySelector("input").disabled = true;
                    labels[i + 2].style.textDecoration = "line-through";
                    labels[i + 2].style.color = "red";
                    
                }
            }
        }
    }
}

document.getElementById("data").addEventListener("input", async function() {
    const data = this.value;
    const { horariosAgendados, servicosAgendados } = await buscarHorariosAgendados(data);
    desativarHorarios(horariosAgendados, servicosAgendados);
});
export {buscarHorariosAgendados}