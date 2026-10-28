const questions = [
  {
    topic:"Encapsulamento",
    question:"Em uma classe LivroModel, o atributo private int _paginas é acessado de fora da classe. Qual é a forma adequada se existir uma propriedade pública Paginas?",
    options:[
      "Console.WriteLine(livro._paginas);",
      "Console.WriteLine(livro.Paginas);",
      "Console.WriteLine(LivroModel._paginas);",
      "Tornar todos os atributos públicos é obrigatório."
    ],
    answer:1,
    explanation:"O atributo é privado e não pode ser acessado diretamente de fora da classe. A propriedade pública funciona como acesso controlado ao dado."
  },
  {
    topic:"Construtores",
    question:"Uma classe AutorModel tem um construtor vazio que define _nome como \"\" e _ativo como false. O que acontece ao executar new AutorModel()?",
    options:[
      "O programa exige os valores no teclado.",
      "O objeto é criado com nome vazio e ativo falso.",
      "O objeto recebe automaticamente o primeiro autor da lista.",
      "Ocorre erro porque todo construtor precisa de parâmetros."
    ],
    answer:1,
    explanation:"O construtor sem parâmetros executa as inicializações que foram programadas nele; neste caso, string vazia e false."
  },
  {
    topic:"Listas e CRUD",
    question:"Uma lista List<LivroModel> possui 4 elementos. Qual índice representa o último elemento?",
    options:["4","3","1","0"],
    answer:1,
    explanation:"Listas em C# usam índices começando em zero. Com 4 elementos, os índices são 0, 1, 2 e 3."
  },
  {
    topic:"Referências",
    question:"Considere: LivroModel x = new LivroModel(); LivroModel y = x; y.Titulo = \"Banco de Dados\";. Se a propriedade Titulo puder ser lida, o que x.Titulo retorna?",
    options:[
      "Uma string vazia em qualquer situação.",
      "null, porque y substituiu x.",
      "\"Banco de Dados\", pois x e y referenciam o mesmo objeto.",
      "O código não compila porque referências não podem ser copiadas."
    ],
    answer:2,
    explanation:"A atribuição y = x copia a referência, não cria automaticamente outro objeto. As duas variáveis apontam para o mesmo objeto."
  },
  {
    topic:"Propriedades",
    question:"Qual é a finalidade principal de uma propriedade pública com get e set que acessa um atributo privado?",
    options:[
      "Permitir acesso controlado para ler e alterar o valor.",
      "Transformar automaticamente o atributo em static.",
      "Criar uma nova lista de objetos a cada leitura.",
      "Impedir qualquer alteração do valor."
    ],
    answer:0,
    explanation:"A propriedade oferece uma interface pública para acessar o dado privado e permite adicionar validações, se necessário."
  },
  {
    topic:"Construtores",
    question:"Uma classe Tela possui somente Tela(ConsoleColor texto, ConsoleColor fundo). Qual chamada corresponde à assinatura declarada?",
    options:[
      "new Tela()",
      "new Tela(ConsoleColor.Green)",
      "new Tela(ConsoleColor.Green, ConsoleColor.Black)",
      "new Tela(\"Green\", \"Black\")"
    ],
    answer:2,
    explanation:"O construtor declarado recebe dois argumentos do tipo ConsoleColor. As outras chamadas não correspondem à assinatura apresentada."
  },
  {
    topic:"Listas e CRUD",
    question:"Em um método de exclusão, a variável posicao contém o índice do livro que será removido. Qual chamada remove esse elemento de uma List<LivroModel> chamada livros?",
    options:[
      "livros.RemoveAt(posicao);",
      "livros.Delete(posicao);",
      "livros.Clear(posicao);",
      "livros.RemoveIndex(posicao);"
    ],
    answer:0,
    explanation:"RemoveAt recebe o índice do elemento a remover. Remove remove um objeto específico, enquanto Clear limpa a lista inteira."
  },
  {
    topic:"Controle de fluxo",
    question:"Qual estrutura é mais apropriada para percorrer todos os livros de uma coleção quando não é necessário alterar os índices?",
    options:["if","foreach","switch","try-catch"],
    answer:1,
    explanation:"foreach percorre os elementos de uma coleção um por vez, sem exigir que você controle manualmente o índice."
  },
  {
    topic:"Encapsulamento",
    question:"Qual declaração indica que o atributo _isbn só pode ser acessado diretamente dentro da própria classe?",
    options:[
      "public string _isbn;",
      "protected public string _isbn;",
      "private string _isbn;",
      "static string _isbn;"
    ],
    answer:2,
    explanation:"private restringe o acesso direto ao membro à própria classe. Outras classes podem usar propriedades ou métodos públicos disponibilizados."
  },
  {
    topic:"Propriedades",
    question:"O que significa a expressão value dentro do set de uma propriedade C#?",
    options:[
      "O nome do objeto que chamou a propriedade.",
      "O valor que está sendo atribuído à propriedade.",
      "O índice atual da lista.",
      "O retorno automático do construtor."
    ],
    answer:1,
    explanation:"Dentro do acessor set, value representa o valor recebido na atribuição, por exemplo livro.Titulo = \"Algoritmos\"."
  },
  {
    topic:"Listas e CRUD",
    question:"Um método Buscar percorre a coleção e não encontra o ISBN solicitado. O método precisa indicar que não encontrou o registro. Qual convenção é comum quando a posição é armazenada em um int?",
    options:[
      "Retornar -1, desde que o restante do código trate esse caso.",
      "Retornar sempre 0, pois toda lista começa no zero.",
      "Retornar a quantidade de letras do ISBN.",
      "Apagar automaticamente a coleção."
    ],
    answer:0,
    explanation:"-1 é uma convenção comum para indicar que nenhum índice válido foi encontrado. É importante verificar esse resultado antes de acessar a lista."
  },
  {
    topic:"Controle de fluxo",
    question:"Qual afirmação sobre um for aninhado usado para percorrer uma matriz está correta?",
    options:[
      "O laço interno costuma percorrer uma dimensão para cada execução do laço externo.",
      "O segundo for nunca é executado.",
      "Os dois for sempre percorrem exatamente a mesma variável de controle.",
      "Uma matriz não pode ser percorrida com for."
    ],
    answer:0,
    explanation:"Em uma matriz, é comum usar o laço externo para linhas e o interno para colunas, embora isso dependa de como as variáveis foram programadas."
  }
];

const quiz = document.getElementById("quiz");
const topicFilter = document.getElementById("topicFilter");
const resultBanner = document.getElementById("resultBanner");
let checked = false;

function renderQuestions(){
  const filter = topicFilter.value;
  const visible = questions.map((q,i)=>({...q,index:i})).filter(q=>filter==="todos" || q.topic===filter);
  quiz.innerHTML = "";
  visible.forEach(q=>{
    const card = document.createElement("article");
    card.className = "question-card" + (checked ? " checked" : "");
    card.dataset.index = q.index;
    const options = q.options.map((opt,j)=>`
      <label class="option ${checked && j===q.answer ? "correct" : ""}">
        <input type="radio" name="q${q.index}" value="${j}" ${getSelected(q.index)===j ? "checked" : ""} ${checked ? "disabled" : ""}>
        <span><strong>${String.fromCharCode(65+j)})</strong> ${opt}</span>
      </label>`).join("");
    card.innerHTML = `
      <div class="question-top"><span class="q-number">Questão ${q.index+1}</span><span class="topic">${q.topic}</span></div>
      <h2>${q.question}</h2>
      <div class="options">${options}</div>
      <div class="explanation"><strong>Resposta: ${String.fromCharCode(65+q.answer)}.</strong> ${q.explanation}</div>`;
    quiz.appendChild(card);
    if(checked){
      const selected = getSelected(q.index);
      card.classList.add("checked");
      if(selected !== null && selected !== q.answer){
        const selectedLabel = card.querySelector(`input[value="${selected}"]`)?.closest(".option");
        if(selectedLabel) selectedLabel.classList.add("incorrect");
      }
    }
  });
  updateStats();
}
function getSelected(i){
  const selected = document.querySelector(`input[name="q${i}"]:checked`);
  return selected ? Number(selected.value) : null;
}
function updateStats(){
  const answered = questions.filter((_,i)=>getSelected(i)!==null).length;
  document.getElementById("answeredCount").textContent = answered;
  document.getElementById("scoreCount").textContent = checked ? `${questions.filter((q,i)=>getSelected(i)===q.answer).length}/${questions.length}` : "—";
}
document.getElementById("checkBtn").addEventListener("click",()=>{
  checked = true;
  const answered = questions.filter((_,i)=>getSelected(i)!==null).length;
  const score = questions.filter((q,i)=>getSelected(i)===q.answer).length;
  resultBanner.classList.remove("hidden");
  resultBanner.textContent = `Resultado: ${score} de ${questions.length} acertos. Você respondeu ${answered} de ${questions.length} questões. Leia as justificativas abaixo e revise os assuntos em que errou.`;
  renderQuestions();
  window.scrollTo({top:resultBanner.getBoundingClientRect().top + window.scrollY - 20,behavior:"smooth"});
});
document.getElementById("resetBtn").addEventListener("click",()=>{
  checked = false;
  resultBanner.classList.add("hidden");
  questions.forEach((_,i)=>document.querySelectorAll(`input[name="q${i}"]`).forEach(el=>el.checked=false));
  renderQuestions();
});
topicFilter.addEventListener("change",renderQuestions);
quiz.addEventListener("change",()=>{if(!checked)updateStats();});
renderQuestions();
