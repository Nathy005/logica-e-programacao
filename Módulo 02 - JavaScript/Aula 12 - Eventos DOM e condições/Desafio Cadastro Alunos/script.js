// Array para armazenar os alunos
let alunos = [];

// Função para cadastrar
function cadastrar() {
  let nome = document.getElementById("nome").value;
  let nota = parseFloat(document.getElementById("nota").value);

  if (nome === "" || isNaN(nota)) {
    alert("Preencha o nome e a nota corretamente!");
    return;
  }

  // Cria um objeto aluno
  let aluno = {
    nome: nome,
    nota: nota
  };

  // Adiciona ao array
  alunos.push(aluno);

  // Limpa os campos
  document.getElementById("nome").value = "";
  document.getElementById("nota").value = "";

  // Atualiza a lista
  mostrarTodos();
}

// Função para exibir todos os alunos
function mostrarTodos() {
  exibirLista(alunos);
}

// Função para exibir apenas aprovados
function mostrarAprovados() {
  let aprovados = alunos.filter(aluno => aluno.nota >= 7);
  exibirLista(aprovados);
}

// Função genérica para atualizar a lista no DOM
function exibirLista(lista) {
  let ul = document.getElementById("listaAlunos");
  ul.innerHTML = "";

  lista.forEach(aluno => {
    let li = document.createElement("li");
    li.textContent = `${aluno.nome} - Nota: ${aluno.nota}`;

    if (aluno.nota >= 7) {
      li.classList.add("aprovado");
    } else {
      li.classList.add("reprovado");
    }

    ul.appendChild(li);
  });
}
