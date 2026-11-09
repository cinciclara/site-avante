
document.addEventListener("DOMContentLoaded", () => {

  // ==================================================
  // 1. CARROSSEL DE AVALIAÇÕES
  // ==================================================

  const carousel = document.getElementById("review-carousel");
  const nextBtn = document.querySelector(".carousel-btn.next");
  const prevBtn = document.querySelector(".carousel-btn.prev");

  if (carousel && nextBtn && prevBtn) {

    let scrollAmount = 0;
    const slideWidth = 280;

    function updateCarousel() {
      carousel.style.transform = `translateX(-${scrollAmount}px)`;
    }

    nextBtn.addEventListener("click", () => {

      const maxScroll = Math.max(
        0,
        carousel.scrollWidth - carousel.parentElement.clientWidth
      );

      scrollAmount += slideWidth;

      if (scrollAmount > maxScroll) {
        scrollAmount = 0;
      }

      updateCarousel();

    });

    prevBtn.addEventListener("click", () => {

      scrollAmount = Math.max(0, scrollAmount - slideWidth);

      updateCarousel();

    });

  }


  // ==================================================
  // 2. CARROSSEL SWIPER
  // ==================================================

  const swiperElement = document.querySelector(".polaroid-carousel");

  if (swiperElement) {

    if (typeof window.Swiper === "function") {

      const swiperPagination = swiperElement.querySelector(".swiper-pagination");
      const swiperNext = swiperElement.querySelector(".swiper-button-next");
      const swiperPrev = swiperElement.querySelector(".swiper-button-prev");

      const swiperConfig = {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true
      };

      if (swiperPagination) {
        swiperConfig.pagination = {
          el: swiperPagination,
          clickable: true
        };
      }

      if (swiperNext && swiperPrev) {
        swiperConfig.navigation = {
          nextEl: swiperNext,
          prevEl: swiperPrev
        };
      }

      new window.Swiper(swiperElement, swiperConfig);

    } else {

      console.warn(
        "Swiper não foi carregado. Verifique a biblioteca no HTML."
      );

    }

  }


  // ==================================================
  // 3. PERGUNTAS DO QUIZ AVANTE
  // ==================================================

  const avanteQuestions = [

    {
      category: "Ultrassonografia abdominal",

      question: "O ultrassom abdominal veterinário permite avaliar principalmente:",

      options: [
        "Órgãos e estruturas da região abdominal",
        "Apenas os ossos e articulações",
        "Somente a superfície da pele",
        "Exclusivamente os dentes"
      ],

      answer: 0,

      explanation: "A ultrassonografia abdominal permite visualizar órgãos e estruturas internas, auxiliando a investigação veterinária."
    },

    {
      category: "Ultrassonografia ocular",

      question: "Em qual situação o ultrassom ocular pode ser um aliado na investigação veterinária?",

      options: [
        "Para avaliar exclusivamente a arcada dentária",
        "Para investigar estruturas internas do olho",
        "Para medir a temperatura corporal",
        "Para avaliar apenas a musculatura das patas"
      ],

      answer: 1,

      explanation: "O ultrassom ocular permite avaliar estruturas internas do olho, sendo um recurso complementar na investigação oftálmica."
    },

    {
      category: "Ultrassonografia cervical",

      question: "Quando existe um aumento de volume na região do pescoço do animal, qual exame pode auxiliar na investigação?",

      options: [
        "Ultrassonografia cervical",
        "Radiografia exclusivamente dos membros",
        "Ultrassonografia ocular",
        "Radiografia odontológica"
      ],

      answer: 0,

      explanation: "A ultrassonografia cervical permite avaliar estruturas da região do pescoço e auxiliar na investigação de alterações locais."
    },

    {
      category: "Coletas citológicas",

      question: "Qual é o principal objetivo de uma coleta citológica?",

      options: [
        "Avaliar o funcionamento cardíaco",
        "Medir a densidade óssea",
        "Obter células de uma região para avaliação microscópica",
        "Verificar a temperatura de um órgão"
      ],

      answer: 2,

      explanation: "A citologia permite analisar células obtidas de uma região ou alteração, contribuindo para a investigação diagnóstica."
    },

    {
      category: "Cistocentese",

      question: "Na coleta de urina por cistocentese, a amostra é obtida:",

      options: [
        "Diretamente da bexiga, por punção realizada pelo médico-veterinário",
        "Por meio de uma amostra de água oferecida ao animal",
        "A partir de um swab da pele",
        "Exclusivamente pela coleta de urina no ambiente"
      ],

      answer: 0,

      explanation: "A cistocentese é um método de coleta diretamente da bexiga, realizado pelo médico-veterinário com técnica adequada. A ultrassonografia pode auxiliar na orientação do procedimento."
    },

    {
      category: "Radiografia de pequenos animais",

      question: "Qual destas situações pode levar o médico-veterinário a solicitar uma radiografia?",

      options: [
        "Investigar alterações ósseas ou torácicas",
        "Avaliar exclusivamente a produção de urina",
        "Identificar células de uma amostra citológica",
        "Examinar somente a superfície ocular"
      ],

      answer: 0,

      explanation: "A radiografia é um importante recurso de diagnóstico por imagem para investigar estruturas ósseas e alterações torácicas, entre outras indicações."
    },

    {
      category: "Raio-X de Silvestres",
      question: "Por que o posicionamento adequado é tão importante durante a radiografia de animais silvestres?",
      options: [
      "Porque cada espécie apresenta particularidades que precisam ser consideradas para obter boas imagens.",
      "Porque animais silvestres não podem realizar exames radiográficos.",
      "Porque a contenção é sempre desnecessária quando o animal está tranquilo.",
      "Porque o posicionamento não interfere na qualidade das imagens."
    ],
    answer: 0,

    explanation: "Cada espécie possui particularidades anatômicas e de posicionamento. A contenção adequada pode ser necessária para garantir o posicionamento correto e a qualidade das imagens, mesmo quando o animal parece tranquilo."
    },
    
    {
      category: "Atendimento domiciliar",
      question: "Qual pode ser uma vantagem do atendimento domiciliar de diagnóstico por imagem?",
      options: [
        "Substituir todas as consultas veterinárias",
        "Permitir a realização de exames em casa, quando houver indicação e viabilidade",
        "Dispensar a avaliação do médico-veterinário",
        "Eliminar a necessidade de qualquer preparo"
      ],

      answer: 1,

      explanation: "O atendimento domiciliar pode facilitar o acesso aos exames e evitar deslocamentos, conforme as condições do paciente e a viabilidade técnica."
    },

    {
      category: "Diagnóstico por imagem",

      question: "Qual é a principal diferença entre radiografia e ultrassonografia?",

      options: [
        "Ambas utilizam exatamente a mesma tecnologia",
        "A radiografia utiliza raios X, enquanto o ultrassom utiliza ondas sonoras",
        "A ultrassonografia utiliza radiação ionizante",
        "A radiografia funciona por meio de ondas sonoras"
      ],

      answer: 1,

      explanation: "A radiografia utiliza raios X para formar imagens. Já a ultrassonografia utiliza ondas sonoras e seus ecos para visualizar estruturas internas."
    },

    {
      category: "Avante Diagnóstico Veterinário",

      question: "Quando o assunto é diagnóstico por imagem, qual é o papel da Avante?",

      options: [
        "Substituir a clínica veterinária e realizar consultas de rotina",
        "Definir tratamentos sem avaliação profissional",
        "Oferecer exames de imagem e suporte diagnóstico aos médicos-veterinários",
        "Realizar exclusivamente atendimentos de emergência"
      ],

      answer: 2,

      explanation: "A Avante atua com diagnóstico por imagem, oferecendo exames e suporte aos profissionais veterinários. O acompanhamento clínico e a definição do tratamento cabem ao médico-veterinário responsável."
    }

  ];


  // ==================================================
  // 4. ELEMENTOS DO QUIZ
  // ==================================================

  const quizIntro = document.getElementById("quizIntro");
  const quizGame = document.getElementById("quizGame");
  const quizResult = document.getElementById("quizResult");

  const startButton = document.getElementById("startQuiz");
  const nextButton = document.getElementById("nextQuestion");
  const restartButton = document.getElementById("restartQuiz");

  const questionCounter = document.getElementById("questionCounter");
  const quizScore = document.getElementById("quizScore");
  const progressFill = document.getElementById("progressFill");

  const questionCategory = document.getElementById("questionCategory");
  const questionText = document.getElementById("questionText");
  const quizOptions = document.getElementById("quizOptions");

  const quizFeedback = document.getElementById("quizFeedback");
  const feedbackIcon = document.getElementById("feedbackIcon");
  const feedbackText = document.getElementById("feedbackText");

  const finalScore = document.getElementById("finalScore");
  const resultIcon = document.getElementById("resultIcon");
  const resultTitle = document.getElementById("resultTitle");
  const resultMessage = document.getElementById("resultMessage");


  // ==================================================
  // 5. VERIFICAÇÃO DO HTML
  // ==================================================

  const quizElements = [
    quizIntro,
    quizGame,
    quizResult,
    startButton,
    nextButton,
    restartButton,
    questionCounter,
    quizScore,
    progressFill,
    questionCategory,
    questionText,
    quizOptions,
    quizFeedback,
    feedbackIcon,
    feedbackText,
    finalScore,
    resultIcon,
    resultTitle,
    resultMessage
  ];

  if (quizElements.some(element => !element)) {

    console.warn(
      "Quiz Avante: algum elemento HTML não foi encontrado. Verifique os IDs."
    );

    return;

  }


  // ==================================================
  // 6. VARIÁVEIS DO QUIZ
  // ==================================================

  let currentQuestion = 0;
  let score = 0;
  let answered = false;


  // ==================================================
  // 7. INICIAR QUIZ
  // ==================================================

  function startQuiz() {

    currentQuestion = 0;
    score = 0;
    answered = false;

    quizIntro.hidden = true;
    quizResult.hidden = true;
    quizGame.hidden = false;

    showQuestion();

  }


  // ==================================================
  // 8. EXIBIR PERGUNTA
  // ==================================================

  function showQuestion() {

    answered = false;

    const question = avanteQuestions[currentQuestion];

    questionCounter.textContent =
      `PERGUNTA ${String(currentQuestion + 1).padStart(2, "0")}/10`;

    quizScore.textContent = `⭐ ${score} pontos`;

    progressFill.style.width =
      `${(currentQuestion / avanteQuestions.length) * 100}%`;

    questionCategory.textContent = question.category;

    questionText.textContent = question.question;

    quizOptions.innerHTML = "";

    quizFeedback.hidden = true;
    nextButton.hidden = true;

    question.options.forEach((option, index) => {

      const button = document.createElement("button");

      button.className = "quiz-option";
      button.type = "button";
      button.textContent = option;

      button.addEventListener("click", () => {
        selectAnswer(index);
      });

      quizOptions.appendChild(button);

    });

  }


  // ==================================================
  // 9. SELECIONAR RESPOSTA
  // ==================================================

  function selectAnswer(selectedIndex) {

    if (answered) return;

    answered = true;

    const question = avanteQuestions[currentQuestion];

    const buttons = quizOptions.querySelectorAll(".quiz-option");

    const isCorrect = selectedIndex === question.answer;

    if (isCorrect) {
      score++;
    }

    // Bloquear alternativas e destacar respostas

    buttons.forEach((button, index) => {

      button.disabled = true;

      if (index === question.answer) {
        button.classList.add("correct");
      }

      if (index === selectedIndex && !isCorrect) {
        button.classList.add("wrong");
      }

    });


    // Atualizar feedback

    feedbackIcon.textContent = isCorrect ? "🎉" : "💡";

    feedbackText.textContent =
      (isCorrect ? "Mandou bem! " : "Vamos aprender? ") +
      question.explanation;

    quizFeedback.hidden = false;


    // Atualizar pontuação

    quizScore.textContent = `⭐ ${score} pontos`;


    // Atualizar progresso após a resposta

    progressFill.style.width =
      `${((currentQuestion + 1) / avanteQuestions.length) * 100}%`;


    // Exibir botão de próxima pergunta

    nextButton.hidden = false;

    nextButton.textContent =
      currentQuestion === avanteQuestions.length - 1
        ? "Ver meu resultado →"
        : "Próxima pergunta →";

  }


  // ==================================================
  // 10. RESULTADO FINAL
  // ==================================================

  function showResult() {

    quizGame.hidden = true;
    quizResult.hidden = false;

    progressFill.style.width = "100%";

    finalScore.textContent =
      `${score}/${avanteQuestions.length}`;


    if (score === 10) {

      resultIcon.textContent = "🏆";

      resultTitle.textContent =
        "Você é expert no assunto!";

      resultMessage.textContent =
        "Gabaritou! Você conhece muito bem o universo do diagnóstico por imagem veterinário.";

    }

    else if (score >= 7) {

      resultIcon.textContent = "🥇";

      resultTitle.textContent =
        "Você mandou muito bem!";

      resultMessage.textContent =
        "Seu conhecimento está afiado! Você já conhece bastante sobre os exames e suas possibilidades.";

    }

    else if (score >= 4) {

      resultIcon.textContent = "🐾";

      resultTitle.textContent =
        "Está no caminho certo!";

      resultMessage.textContent =
        "Você já conhece alguns recursos do diagnóstico por imagem. Que tal explorar um pouquinho mais?";

    }

    else {

      resultIcon.textContent = "💚";

      resultTitle.textContent =
        "Toda jornada começa assim!";

      resultMessage.textContent =
        "Agora você já descobriu um pouco mais sobre os exames que ajudam na investigação veterinária. Continue aprendendo!";

    }

  }


  // ==================================================
  // 11. EVENTOS DOS BOTÕES
  // ==================================================

  startButton.addEventListener("click", startQuiz);


  nextButton.addEventListener("click", () => {

    if (!answered) return;

    currentQuestion++;

    if (currentQuestion < avanteQuestions.length) {

      showQuestion();

    } else {

      showResult();

    }

  });


  restartButton.addEventListener("click", startQuiz);


  // ==================================================
  // 12. INICIALIZAÇÃO
  // ==================================================

  console.log("Quiz Avante inicializado com sucesso! 🐾");

});
