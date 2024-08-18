//Função para o calendário só mostrar os próximos 7 dias
document.addEventListener("DOMContentLoaded", function () {
  const dataInput = document.getElementById("data");
  const dataAtual = new Date(); //Cria um objeto Date representando a data atual.
  const maxDate = new Date(); //Cria outro objeto Date representando a data atual, que será ajustado para ser 7 dias a partir de hoje.
  maxDate.setDate(dataAtual.getDate() + 7); // Ajusta maxDate para ser 7 dias após a data atual.

  const formatDate = (date) => {
    const d = new Date(date);
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) month = "0" + month; //Adiciona um zero à esquerda se o mês tiver um dígito.
    if (day.length < 2) day = "0" + day; //Adiciona um zero à esquerda se o dia tiver um dígito.

    return [year, month, day].join("-"); // Junta o ano, mês e dia com hífens.
  };

  dataInput.setAttribute("min", formatDate(dataAtual)); //Define a data mínima permitida para hoje.

  dataInput.setAttribute("max", formatDate(maxDate)); //Define a data máxima permitida para 7 dias a partir de hoje.

  // Previne a entrada manual no campo
  dataInput.addEventListener("keydown", function (e) {
    e.preventDefault();
    /*Bloqueia a entrada manual no campo de data. */
  });

  dataInput.addEventListener("focus", function (e) {
    dataInput.showPicker();
    // Abre o seletor de data ao clicar no campo de entrada de data.
  });

  // Verifica a data selecionada e impede a seleção de domingos
  dataInput.addEventListener("input", function () {
    const inputDate = new Date(dataInput.value);
    if (inputDate.getDay() === 6) {
      alert("Nos Domingos não abrimos.");
      dataInput.value = "";
    }
  });
});

//Função para mostrar as horas disponíveis
function abrirHorarios() {
  const dataInput = document.getElementById("data");
  if (!dataInput.value) {
    alert("Por favor, escolha o dia para ver os horários dísponiveis.");
    return;
  }
  let horas = document.getElementById("horarios");
  horas.style.display = "grid";
  document.querySelector(".form p").style.display = "none";
}

//Função para fechar as horas disponiveís
function fechaHorarios() {
  let horas = document.getElementById("horarios");
  horas.style.display = "none";
  document.querySelector(".form p").style.display = "block";
}

//Mudar os horários quando for sábado
document.addEventListener("DOMContentLoaded", function () {
  const dia = document.getElementById("data");

  dia.addEventListener("input", function () {
    const inputDate = new Date(dia.value);

    if (inputDate.getDay() === 5) {
      //Mostra os horários dísponiveis no sábado
      document.getElementById("horarios").innerHTML = `
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>09:00</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>09:30</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>09:45</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>10:00</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>10:30</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>10:45</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>11:00</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>11:30</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>11:45</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>12:00</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>12:30</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>14:00</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>14:30</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>14:45</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>15:00</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>15:30</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>15:45</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>16:00</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>16:30</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>16:45</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>17:00</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>17:30</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>17:45</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>18:00</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>18:30</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>18:45</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>19:00</span></label>
            
            <i class='bx bx-x' onclick="fechaHorarios()"></i>
            `;
      //Mostra os horários dísponiveis na semana
    } else {
      document.getElementById("horarios").innerHTML = `
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>09:00</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>09:30</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>09:45</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>10:00</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>10:30</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>10:45</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>11:00</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>11:30</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>11:45</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>14:30</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>14:45</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>15:00</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>15:30</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>15:45</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>16:00</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>16:30</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>16:45</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>17:00</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>17:30</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>17:45</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>18:00</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>18:30</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>18:45</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>19:00</span></label>
            <label><input type="radio" name="hora-option" onclick="hora(event)"> <span>19:30</span></label>
            <i class='bx bx-x' onclick="fechaHorarios()"></i>
            `;
    }
  });
});

/*Função para adicionar cor de fundo ao selecionar a hora desejada */
function hora(event) {
  let opcao = event.currentTarget.parentNode; // Captura o elemento pai do input (ou seja, o label)

  // Verifica se o elemento clicado já possui a classe 'background-add'
  if (opcao.classList.contains("background-add")) {
    opcao.classList.remove("background-add"); // Remove a classe se já estiver presente
  } else {
    let labels = document.querySelectorAll("#horarios label");

    // Remove a classe 'background-add' de todos os labels
    labels.forEach((label) => {
      if (label.classList.contains("background-add")) {
        label.classList.remove("background-add");
      }
    });

    // Adiciona a classe 'background-add' ao elemento clicado
    opcao.classList.add("background-add");
  }
}

/*Função para adicionar borda ao selecionar o tipo de serviço */
function borda(event) {
  let labelClicado = event.currentTarget.parentNode;

  // Verifica se o label clicado já possui a classe 'borda-adicionada'
  if (labelClicado.classList.contains("borda-adicionada")) {
    labelClicado.classList.remove("borda-adicionada");
  } else {
    // Remove a classe 'borda-adicionada' de todos os labels dentro de #service-option
    let labels = document.querySelectorAll("#service-option label");
    labels.forEach((label) => {
      label.classList.remove("borda-adicionada");
    });

    // Adiciona a classe 'borda-adicionada' ao label clicado
    labelClicado.classList.add("borda-adicionada");
  }
}
