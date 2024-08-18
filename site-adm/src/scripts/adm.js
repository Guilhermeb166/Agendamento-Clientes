import { db } from "../../firebase/firebase-config.js";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "agendamentos"));
    const tableBody = document.querySelector("#agendamentosTable tbody");

    querySnapshot.forEach((docSnapshot) => {
      const data = docSnapshot.data();
      const row = document.createElement("tr");

      const nomeCell = document.createElement("td");
      nomeCell.textContent = data.nome;
      row.appendChild(nomeCell);

      const dataHorarioString = `${data.data}T${data.hora}:00`;
      const dataHorario = new Date(dataHorarioString);

      const dataCell = document.createElement("td");
      if (!isNaN(dataHorario.getTime())) {
        dataCell.textContent = dataHorario.toLocaleDateString("pt-BR");
      } else {
        dataCell.textContent = "Data inválida";
      }
      row.appendChild(dataCell);

      const horaCell = document.createElement("td");
      if (!isNaN(dataHorario.getTime())) {
        horaCell.textContent = dataHorario.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        });
      } else {
        horaCell.textContent = "Hora inválida";
      }
      row.appendChild(horaCell);

      const servicoCell = document.createElement("td");
      servicoCell.textContent = data.servico;
      row.appendChild(servicoCell);

      const finalizarCell = document.createElement("td");
      const finalizarButton = document.createElement("button");
      finalizarButton.setAttribute("class","delete")
      finalizarButton.innerHTML = "<i class='bx bxs-check-circle'></i>";
      finalizarButton.addEventListener("click", async () => {
        try {
          await deleteDoc(doc(db, "agendamentos", docSnapshot.id));
          row.remove(); // Remove a linha da tabela
          console.log("Agendamento finalizado com sucesso");
        } catch (error) {
          console.error("Erro ao finalizar agendamento: ", error);
        }
      });
      finalizarCell.appendChild(finalizarButton);
      row.appendChild(finalizarCell);

      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Erro ao obter agendamentos: ", error);
  }
});
