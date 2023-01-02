const alphabet = "abcdefghijklmnopqrstuvxyz";
const passKeyword = ['pass', 'pasapalabra', 'paso'];
const finishKeyword = ['end', 'esc', 'bye'];
const gameTime = 600;


const gameMusicIntro = new Audio('./media/game_intro_music.mp3');
    gameMusicIntro.loop = true;
    gameMusicIntro.volume = 0.2;
    gameMusicIntro.currentTime = 10.25;

const gameMusic = new Audio('./media/game_guessing_music.mp3');
    gameMusic.loop = true;
    gameMusic.volume = 0.25; 
    gameMusic.currentTime = 0.5;

const TerminalConnectionSound = new Audio('./media/terminal_connection.mp3');
    TerminalConnectionSound.volume = 0.8;

const heartBeatSound = new Audio('./media/heartbeat.mp3');
    heartBeatSound.loop = true;
    heartBeatSound.volume = 0;

const buttonConfirmSound = new Audio('./media/button_click_confirm.mp3');
    buttonConfirmSound.volume = 0.5; 

const buttonCancelSound = new Audio('./media/button_click_cancel.mp3');
    buttonCancelSound.volume = 0.5; 

const buttonCloseGameSound = new Audio('./media/button_click_end.mp3');
    buttonCloseGameSound.volume = 0.5; 

const gameQuestionSound = new Audio('./media/question_sound.mp3');
    gameQuestionSound.volume = 0.6;

const playerDeathSound = new Audio('./media/player_death.mp3');
    playerDeathSound.volume = 0.3; 

const playerGuessedSound = new Audio('./media/guessed_answer.mp3');
    playerGuessedSound.volume = 0.8; 

const playerFailedSound = new Audio('./media/failed_answer.mp3');
    playerFailedSound.volume = 0.8; 

const playerPassedSound = new Audio('./media/passed_answer.mp3');
    playerPassedSound.volume = 0.6; 

const playerLegendEvent = new Audio('./media/player_legend_event.mp3');
    playerLegendEvent.volume = 0.6; 
    playerLegendEvent.currentTime = 127;
    playerLegendEvent.loop = true;

const playerDisconnectedEvent = new Audio('./media/player_disconnected_event.mp3');
    playerDisconnectedEvent.volume = 0.5; 
    playerDisconnectedEvent.loop = true;

const playerDeathEvent = new Audio('./media/player_death_event.mp3');
    playerDeathEvent.volume = 0.5; 
    playerDeathEvent.loop = true;


const questionPacks = [
    {
      letter: "a",
      answer: ["abducir", "arrancar", "alcalino"],
      status: 0,
      question:
        ["CON LA A. Acción de secuestrar alguien mediante una nave extraterrestre",
         "CON LA A. Acción de quitar algo con fuerza y violencia",
         "CON LA A. En química. Medio con un pH superior a 7"],
    },
    {
      letter: "b",
      answer: ["bingo", "bacalao", "biblioteca"],
      status: 0,
      question:
        ["CON LA B. Juego que ha sacado de quicio a todos los 'Coders' en las sesiones de precurso",
         "CON LA B. Pescado blanco de mar que necesita desalarse para ser consumido",
         "CON LA B. Edificio donde se conservan conjuntos de libros ordenados y clasificados"],
    },
    {
      letter: "c",
      answer: ["churumbel", "caracol", "cometa"],
      status: 0,
      question: 
        ["CON LA C. Vulgarismo. Niño, crío, bebé",
         "CON LA C. Molusco provisto de caparazón y pie carnoso mediante el que se arrastra",
         "CON LA C. Cuerpo celeste que deja tras de sí una cola luminosa"],
    },
    {
      letter: "d",
      answer: ["diarrea", "diente", "delantal"],
      status: 0,
      question:
        ["CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y consistencia líquida",
         "CON LA D. Pieza osea dura y blanca que crece en la boca", 
         "CON LA D. Prenda de vestir usada para cocinar"],
    },
    {
      letter: "e",
      answer: ["ectoplasma", "estadio", "enfermedad"],
      status: 0,
      question:
        ["CON LA E. Región periférica de la célula, la cual carece de orgánulos y es de menor densidad que el endoplasma",
         "CON LA E. Instalación deportiva de grandes dimensiones", 
         "CON LA E. alteración leve o grave del funcionamiento normal de un organismo"],
    },
    {
      letter: "f",
      answer: ["facil", "forastero", "frase"],
      status: 0,
      question: 
        ["CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad", 
         "CON LA F. Persona que es o ha venido de otro lugar", 
         "CON LA F. Unidad lingüística que consta de sujeto y predicado"],
    },
    {
      letter: "g",
      answer: ["galaxia", "gato", "general"],
      status: 0,
      question:
       ["CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas", 
        "CON LA G. Mamífero felino de tamaño pequeño", 
        "CON LA G. Máximo rango del ejército"],
    },
    {
      letter: "h",
      answer: ["harakiri", "helado", "hierro"],
      status: 0,
      question: 
      ["CON LA H. Suicidio ritual japonés por desentrañamiento", 
       "CON LA H. Crema láctea que se sirve congelada", 
       "CON LA H. Elemento 26 de la tabla periódica"],
    },
    {
      letter: "i",
      answer: ["iglesia", "irlanda", "iman"],
      status: 0,
      question: 
      ["CON LA I. Templo o comunidad propia del cristianismo",
      "CON LA I. País europeo cuyo patrón es san Patricio", 
      "CON LA I. Mineral capaz de atraer el hierro"],
    },
    {
      letter: "j",
      answer: ["jabalina", "jota", "jabon"],
      status: 0,
      question:
       ["CON LA J. Lanza diseñada para ser arrojada",
        "CON LA J. Canto y danza tradicional de Aragón", 
        "CON LA J. Sustancia que, mezclada con agua, sirve para lavarse o fregar"],  
    },
    {
      letter: "k",
      answer: ["kamikaze", "kimono", "karaoke"],
      status: 0,
      question:
       ["CON LA K. Piloto suicida japonés que tripulaba un avión con explosivos",
        "CON LA K. Prenda típica de Japón", 
        "CON LA K. Aparato audiovisual para cantar"],
    },
    {
      letter: "l",
      answer: ["licantropo", "loteria", "laconico"],
      status: 0,
      question: 
       ["CON LA L. Hombre lobo",
        "CON LA L. Juego de azar ", 
        "CON LA L. Cultismo. Algo que es breve o conciso"],
    },
    {
      letter: "m",
      answer: ["misantropo", "moraleja", "montaraz"],
      status: 0,
      question:
       ["CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
        "CON LA M. Enseñanza que se deduce de una fábula", 
        "CON LA M. Dícese de Aragorn y de quien es criado en la montaña"],
    },
    {
      letter: "n",
      answer: ["necedad", "natacion", "nomada"],
      status: 0,
      question: 
       ["CON LA N. Demostración de poca inteligencia",
        "CON LA N. Deporte acuático", 
        "CON LA N. Persona que va de un lugar a otro sin establecerse permanentemente"],
    },
    {
      letter: "o",
      answer: ["ogro", "oliva", "olimpiadas"],
      status: 0,
      question:
       ["CON LA O. Ser fantástico y gigantesco parecido al hombre que se alimenta de carne humana.",
        "CON LA O. Fruto comestible del que se extrae aceite", 
        "CON LA O. Fiesta deportiva iniciada en la antigua Grecia"],
    },
    {
      letter: "p",
      answer: ["protesis", "puerto", "policia"],
      status: 0,
      question:
       ["CON LA P. Pieza o aparato empleados para sustituir un órgano o un miembro del cuerpo",
        "CON LA P. Lugar donde las embarcaciones pueden detenerse", 
        "CON LA P. Cuerpo de autoridad que mantiene el orden público"],
    },
    {
      letter: "q",
      answer: ["queso", "quirofano", "quemadura"],
      status: 0,
      question:
       ["CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
        "CON LA Q. sala hospitalaria para realizar operaciones", 
        "CON LA Q. Lesión en la piel causada por fuego"],
    },
    { letter: "r", 
      answer: ["raton", "rey", "roble"],
      status: 0, 
      question: 
       ["CON LA R. Mamífero pequeño del género mus",
        "CON LA R. Soberano de una monarquía", 
        "CON LA R. Árbol de corteza parduzca, copa ancha y hoja caduca"],
    },
    {
      letter: "s",
      answer: ["sabana", "santo", "sobrio"],
      status: 0,
      question: 
       ["CON LA S. Bioma caracterizado por un estrato arbóreo-arbustivo de escasa cobertura",
        "CON LA S. Quien ya goza de la Gloria del Cielo", 
        "CON LA S. Que es moderado y discreto"],
    },
    {
      letter: "t",
      answer: ["terminator", "tangible", "tiburon"],
      status: 0,
      question:
       ["CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
        "CON LA T. Que puede ser tocado", 
        "CON LA T. Pez marino carnívoro"],
    },
    {
      letter: "u",
      answer: ["unamuno", "uretra", "umami"],
      status: 0,
      question:
       ["CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
        "CON LA U. Conducto por el que se expulsa la orina", 
        "CON LA U. Sabor suave y prolongado"],
    },
    {
      letter: "v",
      answer: ["vikingos", "vino", "vastago"],
      status: 0,
      question:
       ["CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
        "CON LA V. Bebida acohólica que se extrae de la uva", 
        "CON LA V. Tallo nuevo. Persona descendiente de otra"],
    },
    {
      letter: "x",
      answer: ["botox", "xenofobia", "xilofono"],
      status: 0,
      question: 
       ["CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
        "CON LA X. Rechazo a los extranjeros", 
        "CON LA X. Instrumento musical de percusión formado por láminas de madera"],
    },
    {
      letter: "y",
      answer: ["peyote", "yema", "yegua"],
      status: 0,
      question:
       ["CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
       "CON LA Y. Núcleo de los huevos", 
       "CON LA Y. Hembra del caballo"],
    },
    {
      letter: "z",
      answer: ["zigzag", "zarzamora", "zapatero"],
      status: 0,
      question:
       ["CON LA Z. Línea formada por angulos alternativos entrantes y salientes",
        "CON LA Z. Fruto comestible de la zarza", 
        "CON LA Z. Persona que se dedica a fabricar, reparar o vender zapatos"],
    },
];


const questionPackSelector = () => {
    return Math.round(Math.random() * 2);
};


const commentsToGuessedAnswers = (random) => {

    const answers = [`¡Si Señor! Sigue así, ${playerData.name}, ¡a por la siguiente! ;)`, "Joder, esa no me la sabía, te fue bien la cogorza :D",
        `¡bién, Más eddies pa'la saca!. Tira pa'alante, ${playerData.name}`, "Es que si fallas, te dejo de hablar ^_^. ¡Venga! a por otra",
        `Ahí picando hielo! ${playerData.name}, #TheIceBreaker!.`, "¡Hasta luego, Mari Carmen! Menos mal, yo la daba por perdida xD",
    ];
    return answers[random];
};


const commentsToWrongAnswers = (random) => {

    const answers = [`¿Que coño te pasa, ${playerData.name}?, no me falles la siguiente! :(`, "¿En serio no sabías eso? ¡Espabila, que quiero salir de pobre!",
        "Te emborrachas, pierdes el pincho y ahora me la lias con algo tan básico... u_u", `¿Que sabías romper el hielo de Arasaka, decías?... Venga ${playerData.name}, véndele la moto a otro ¬_¬`,
        `${playerData.name}, piensa antes de escribir. ¡Hazlo por mi corazón, que me va a dar algo! :s`, "Si no fuera porque estás en peligro de muerte, diría que te la suda fallar"
    ];
    return answers[random];
};


const commentsToPassedAnswers = (random, id) => {

    const answers = [`Uff, ${playerData.name}, espero que te la sepas`, "¿por qué has pasado? No era tan difícil... No, no te la chivo xD",
        "¡De verdad, que ganas de postergar lo inevitable!", `${playerData.name}, ¿te gusta guardar lo más fácil para el final?`,
        `¡${questionPacks[id].answer[playerData.questionsIdForGame]}, ${questionPacks[id].answer[playerData.questionsIdForGame]}! Recuérdalo pa' la vuelta ;)`, "Bueno, va... al menos tendrás tiempo pa' pensarla"
    ];
    return answers[random];
};


const commentSelector = () => {
    return Math.round(Math.random() * 5);
};


const playerData = {};
      playerData.questionsIdForGame = questionPackSelector();
      playerData.points = 0;
      playerData.MaximumHealth = 100;
      playerData.health = playerData.MaximumHealth;
      playerData.money = 0;


const moneyChanceForGuessed = () => {
    return Math.round(Math.random() * (500000 / gameTime));
}


let guessedCheck = [];
let passedCheck = [];
let cancelCheck = [];

let questionIdCounter = 0;
let roundNumberCounter = 0;

let passedPositionIndexer = [];
let passedPositionIndex = 0;


const pointsRanking = [
    {player: 'Jackie Welles',   guessed: 14,  moneyEarned: 5048},
    {player: 'Adam Smasher',    guessed: 5,   moneyEarned: 2063},
    {player: 'Meredith Stout',  guessed: 18,  moneyEarned: 6777},
    {player: 'Rogue',           guessed: 20,  moneyEarned: 10137},
    {player: 'Takemura',        guessed: 15,  moneyEarned: 9485},
    {player: 'Dum Dum',         guessed: 12,  moneyEarned: 3993},
    {player: 'Lizzy Wizzy',     guessed: 9,   moneyEarned: 2499},
    {player: 'T-Bug',           guessed: 25,  moneyEarned: 12260},
    {player: 'Evelyn Parker',   guessed: 24,  moneyEarned: 14626},
];


const ranking = () => {

    const playerStatusHub = document.getElementById("player-status");
    playerStatusHub.innerHTML = "";

    pointsRanking.push({player: playerData.name, guessed: playerData.points, moneyEarned: playerData.money}),
    pointsRanking.sort((a, b) => (b['moneyEarned'] - a['moneyEarned']));

    const ranking = document.getElementById("game-ranking");
    ranking.innerHTML += '<ol id="ranking" class="ranking">'
    + '<img class="ranking-afterlife" src="./media/afterlife-ranking.png">'
    + '</ol>'

    const rankingGenerator = document.getElementById("ranking");
    for (let i = 0; i < 10; i++) {
        rankingGenerator.innerHTML += '<li> ♟ ' + pointsRanking[i].player + ', con E$' +  pointsRanking[i].moneyEarned + '</li>'
    };
};


const playerHealthPointsLeft = () => {

    const maximumPlayerTime = gameTime;
    const healthPointPerSecond = maximumPlayerTime / playerData.MaximumHealth;

    const healthLeft = document.getElementById("health");
    healthLeft.innerHTML = "";
    healthLeft.innerHTML += playerData.health;

    heartBeatSound.play();
    
    if (playerData.health === 0) {

        playerDeathSound.play();
        setTimeout( () => {   
            playerDeath();
        }, 300);

    } else {

        playerData.health -= 1;
        setTimeout("playerHealthPointsLeft()", healthPointPerSecond * 1000);
        if (heartBeatSound.volume < 1) {
            heartBeatSound.volume += 0.01;
            heartBeatSound.playbackRate += 0.005;
            gameMusic.volume -= 0.002;
        };
    };
};


const playerEarnedMoneyAndPoints = () => {

    playerData.points++;
    playerData.money += moneyChanceForGuessed();

    const playerMoney = document.getElementById("eddies");
    playerMoney.innerHTML = "";
    playerMoney.innerHTML += playerData.money
};


const donutMaker = () => {
    const letterDonut = alphabet.toUpperCase().split('');
    const letterAngle = index => index * (360 / letterDonut.length);

    const gameScenario = document.getElementById("game-scenario");
    const scenarioWidth = window.getComputedStyle(gameScenario);
    const scenarioWidthValue = scenarioWidth.getPropertyValue('width');

    const donutRadius = scenarioWidthValue.slice(0, scenarioWidthValue.length -2) / 2;

    // X = Sin(angle)R
    const xAxisPosition = angle => (Math.sin(letterAngle(angle) * (Math.PI / 180)) * donutRadius);
    // Y = √ R² - X² (de despejar la Y en la ecuación canónica de la circumferencia -> X² + Y² = R²)
    const yAxisPosition = (angle) => {
    //equivalente a <90 *-1, <180 y <270 *1 y <360*-1, para distribuir las letras en los cuatro cuadrantes del plano cartesiano.
        if (letterAngle(angle) < 90 || letterAngle(angle) > 270) { 
            return  Math.sqrt(Math.pow(donutRadius, 2) - Math.pow(xAxisPosition(angle), 2)) * -1;
        } else {
            return  Math.sqrt(Math.pow(donutRadius, 2) - Math.pow(xAxisPosition(angle), 2));
        };
    };

    const donutPlace = document.getElementById("letter-donut");
    for(let i = 0; i < letterDonut.length; i++) {
        donutPlace.innerHTML += '<span id="letter' + letterDonut[i] + '" style="margin-left:' + xAxisPosition(i).toFixed(0) 
        + 'px; margin-top: ' + yAxisPosition(i).toFixed(0) + 'px;">' + letterDonut[i] + '</span>';
    };
};


const screenWidthAdapter = () => {

    switch (screen.width) {
        case 1739 : document.body.style.zoom = "100%";
            break;
        case 1740 : document.body.style.zoom = "100%";
            break;
        case 1450 : document.body.style.zoom = "82%";
            break;
        case 1238 : document.body.style.zoom = "70%";
            break;
        default : alert(`Su ventana mide ${screen.width} x ${screen.height}. Este juego está pensado para monitores Full HD. Por favor, ajuste manualemente el zoom para asegurarse de ver cómodamente todo el contenido de la pantalla de juego. ¡Gracias!`) 
            break;
    };
}

const runGameAfterExplanation = () => {

    const playerName = document.getElementById("player-name");

    screenWidthAdapter();

    playerName.addEventListener("click", (event) => {
        event.preventDefault();

        gameMusicIntro.play();

        const pukkaName = document.getElementById("pukka-name");
        pukkaName.className = "";
        pukkaName.innerHTML = "";
    });

    const runGame = document.getElementById("game-start");

    runGame.addEventListener("click", (event) => {
        event.preventDefault();

        buttonConfirmSound.play();

        if(!isNaN(playerName.value) || !playerName.value) {

            const pukkaName = document.getElementById("pukka-name");

            pukkaName.className = "";
            pukkaName.innerHTML = "";
            
            pukkaName.className = "pukka-name";
            pukkaName.innerHTML += playerName.value === 0 || (playerName.value * 1) + 1 > 1 ? 
                '<p> No pienso llamarte con un número. ¡Esto no es un puto equipo de fútbol! Déjate V o <b> ponte un apodo de verdad</b>...</p>':
                '<p> ¿Te llamo silbando? entonces ¡¿qué es esa mierda de dejar el nombre vacío?! Déjate V o <b>ponte un nombre como Dios manda</b>...</p>';
            playerName.className = "pukka-player-name";

        } else {

            playerData.name = playerName.value;
            runGame.disabled = true;

            TerminalConnectionSound.play();

            setTimeout( () => {  
                const gameExplanation = document.getElementById("explanation");
                gameExplanation.parentNode.removeChild(gameExplanation);
                const terminalLockedOut = document.getElementById("terminal-locked");
                terminalLockedOut.innerHTML = "";

                startGameMenu();
            }, 1500);
        };
    });
};


const startGameMenu = () => {

    const gameScenario = document.getElementById("game-scenario");

        gameScenario.innerHTML += '<div id="invade-terminal" class="invade-terminal">'
        + '<p class="daemon-terminal">../device.root:/daemon=happyHour+breach=true</p>'
        + '<p>¡Ya estamos conectados al terminal! ' + playerData.name + ', da la señal y empezamos a invadir.</p>'
        + '<p>Recuerda que, nada más empezar, tu salud se verá afectada progresivamente...</p>'
        + '<p>Mejor desconectar antes de tiempo y vivir, que morir para nada... ' 
        + 'Pero, ya que te la vas jugar, al menos apunta alto y llega tan lejos como puedas</p>'
        + '<p> ¡A romper el hielo! </p>'
        + '<button class="invade-input" id="invade-input">Invadir</button>'
        + '</div>';
        
        startGame(questionIdCounter);

        setTimeout( () => {  
            playerStatus();
        }, 40);
};


const startGame = (counterId) => {

    const gameStarter = document.getElementById("invade-input");

    gameStarter.addEventListener("click", (event) => {
        event.preventDefault();
        
        gameMusic.play()
        buttonConfirmSound.play();

        gameStarter.disabled = true;

        setTimeout( () => {  
            const gameStartMenu = document.getElementById("invade-terminal");
            gameStartMenu.parentNode.removeChild(gameStartMenu);

            if (!roundNumberCounter) {
            donutMaker();
            }
            questionZone(counterId);
            playerInputs(counterId);

            playerHealthPointsLeft()

            gameMusic.play()
            gameMusicIntro.pause();
        }, 500);
    });
};


const playerStatus = () => {

    const playerStatusHub = document.getElementById("player-status");

    playerStatusHub.innerHTML += '<p class="player-hub-top">'
    + '<span id="player-name-hub">' + playerData.name + '</span>'
    + '</p>'
    + '<img class="v-thumbnail" id="v-thumbnail" src="./media/v_thumbnail.gif">'
    + '<p class="player-hub-bottom">'
    + '<span class="player-hub-icon">✚</span> <span id="health">100</span>% &nbsp|&nbsp '
    + '<span class="player-hub-icon"><b>E$</b></span> <span id="eddies">0</span>'
    + '</p>'
};


const questionZone = (id) => {

    const currentQuestion = document.getElementById("questions");

    currentQuestion.innerHTML = '<span class="questions-zone">'
    + '<p class="daemon-terminal">../device.root:/daemon=happyHour&breakingIce</p>'
    + '<p id="current-question">' 
    + questionPacks[id]['question'][playerData.questionsIdForGame]
    + '</p>'
    + '</div>'
};


const playerInputs = (id) => {

    const inputs = document.getElementById("inputs");

    inputs.innerHTML = '<form class="player-feedback">'
    + '<input class="answer-input" id="answer-input" type="text" value="(ツ)_/¯ lúcete aquí...">'
    + '<div>'
    + '<button class="send-input" id="send-input">⛏ Romper Hielo</button>'
    + '<button class="pass-question" id="pass-question">➥ Pasar</button>'
    + '<button class="cancel-game" id="cancel-game">✄ Desconectar</button>'
    + '</div>'
    + '</form>'

    answerInputEvaluator(id);
};


const answerInputEvaluator = (id) => {

        const playerAnswer = document.getElementById("answer-input");

    playerAnswer.addEventListener("click", (event) => {
        event.preventDefault();

        buttonConfirmSound.play(); 

        playerAnswer.value = "";
    });

    const playerCancel = document.getElementById("cancel-game");

    playerCancel.addEventListener("click", (event) => {
        event.preventDefault();

        buttonCancelSound.play();

        playerCancel.disabled = true;

        playerDisconnected();
    });

    const playerPass = document.getElementById("pass-question");

    playerPass.addEventListener("click", (event) => {
        event.preventDefault();

        playerPass.disabled = true;

        buttonConfirmSound.play(); 

        questionPacks[id].status = '🔵';
        document.getElementById(`letter${questionPacks[id].letter.toUpperCase()}`).className = "letter-donut-avoided";

        const currentQuestionDisplayReset = document.getElementById("current-question");

        setTimeout( () => {
            currentQuestionDisplayReset.innerHTML = commentsToPassedAnswers(commentSelector(), id);
            playerPassedSound.play();
        }, 100);

        setTimeout( () => {
            if (questionIdCounter === alphabet.length -1 || passedPositionIndex === passedPositionIndexer.length -1) {
                currentQuestionDisplayReset.innerHTML = "Ostras, nos van▒a d€sc█neT@r!▒"; 
            } else {
                currentQuestionDisplayReset.innerHTML = "¡Ojo, viene más hielo!";
                gameQuestionSound.play();
            };
        }, 3500);
        answerInputResetAndWinnerChecker(5500);
    });
    
    
    const playerInput = document.getElementById("send-input");

    playerInput.addEventListener("click", (event) => { 
        event.preventDefault();

        buttonConfirmSound.play();

        playerInput.disabled = true;

        questionPacks[id].status = playerAnswer.value.toLowerCase();

        if (questionPacks[id].status === finishKeyword[0] || questionPacks[id].status === finishKeyword[1] || questionPacks[id].status === finishKeyword[2]) { 
            
            playerDisconnected();

        } else if (questionPacks[id].status === questionPacks[id].answer[playerData.questionsIdForGame]) {

            questionPacks[id].status = '🟢';
            document.getElementById(`letter${questionPacks[id].letter.toUpperCase()}`).className = "letter-donut-hit";

            const currentQuestionDisplayReset = document.getElementById("current-question");

            setTimeout( () => {
                currentQuestionDisplayReset.innerHTML = `¡Sí, ${questionPacks[id].answer[playerData.questionsIdForGame]}!`;
                playerGuessedSound.play();
            }, 100);

            setTimeout( () => {
                currentQuestionDisplayReset.innerHTML = commentsToGuessedAnswers(commentSelector());
                playerEarnedMoneyAndPoints()
            }, 2500);

            setTimeout( () => {
                if (questionIdCounter === alphabet.length -1 || passedPositionIndex === passedPositionIndexer.length -1) {
                    currentQuestionDisplayReset.innerHTML = "Un momento, evito ▒a d€sc█nexió▒"; 
                } else {
                    currentQuestionDisplayReset.innerHTML = "¡Ojo, viene más hielo!";
                    gameQuestionSound.play();
                };
            }, 5500);
            answerInputResetAndWinnerChecker(7500);

        } else if (questionPacks[id].status === passKeyword[0] || questionPacks[id].status === passKeyword[1] || questionPacks[id].status === passKeyword[2]) {

            questionPacks[id].status = '🔵';
            document.getElementById(`letter${questionPacks[id].letter.toUpperCase()}`).className = "letter-donut-avoided";

            const currentQuestionDisplayReset = document.getElementById("current-question");

            setTimeout( () => {
                currentQuestionDisplayReset.innerHTML = commentsToPassedAnswers(commentSelector(), id);
                playerPassedSound.play();
            }, 100);

            setTimeout( () => {
                if (questionIdCounter === alphabet.length -1 || passedPositionIndex === passedPositionIndexer.length -1) {
                    currentQuestionDisplayReset.innerHTML = "Ostras, nos van▒a d€sc█neT@r!▒"; 
                } else {
                    currentQuestionDisplayReset.innerHTML = "¡Ojo, viene más hielo!";
                    gameQuestionSound.play();
                };
            }, 3500);
            answerInputResetAndWinnerChecker(5500);

        } else {

            questionPacks[id].status = '🔴';
            document.getElementById(`letter${questionPacks[id].letter.toUpperCase()}`).className = "letter-donut-failed";

            const currentQuestionDisplayReset = document.getElementById("current-question");

            if (playerAnswer.value.toLowerCase() === "(ツ)_/¯ lúcete aquí..." || playerAnswer.value.toLowerCase() === "") {
                setTimeout( () => {
                    playerFailedSound.play();
                    currentQuestionDisplayReset.innerHTML = `¡¿Por qué le das sin escribir?!. Era ${questionPacks[id].answer[playerData.questionsIdForGame]}`;
                }, 100); 

            } else {
                setTimeout( () => {
                    playerFailedSound.play();
                    currentQuestionDisplayReset.innerHTML = `¡No, era ${questionPacks[id].answer[playerData.questionsIdForGame]}!`;
                }, 100); 
            };

            setTimeout( () => {
                currentQuestionDisplayReset.innerHTML = commentsToWrongAnswers(commentSelector());
            }, 2900);

            setTimeout( () => {
                if (questionIdCounter === alphabet.length -1 || passedPositionIndex === passedPositionIndexer.length -1) {
                    currentQuestionDisplayReset.innerHTML = "Ostras, nos van▒a d€sc█neT@r!▒"; 
                } else {
                    currentQuestionDisplayReset.innerHTML = "¡Ojo, viene más hielo!";
                    gameQuestionSound.play();
                };
            }, 6400);
            answerInputResetAndWinnerChecker(8400);
        };
    });
};


const questionZoneReset = (counterId) => {

    const inputs = document.getElementById("inputs")
    inputs.innerHTML = "";

    const currentQuestion = document.getElementById("questions");
    currentQuestion.innerHTML = "";

    if (playerData.health !== 0 || playerData.cancel){
        questionZone(counterId);
        playerInputs(counterId);
    };
};


const winnerChecker = () => {

    roundNumberCounter++;

    const checkerLoop = (lookFor, describeAs, discartAs, putIn) => {
        for (let i = 0; i < questionPacks.length; i++) {
            questionPacks[i].status === lookFor ? putIn.push(describeAs) : putIn.push(discartAs);
        };
    };

    passedCheck = [];
        checkerLoop('🔵', 'passed', 'not passed', passedCheck);
        const nonePassed = (passedStatus) => passedStatus === 'not passed';

    guessedCheck = [];
        checkerLoop('🟢', 'guessed', 'not guessed', guessedCheck);
         const allGuessed = (guessedStatus) => guessedStatus === 'guessed';

    if (playerData.health === 0) {
        playerDeath();
    } else if (guessedCheck.every(allGuessed)) {
        playerAfterlifeLegend();    
    } else if (passedCheck.every(nonePassed)) {  
        playerCompletedTheGame();
    } else {
        otherRoundMenu();
    };
};


const otherRoundMenu = () => {

    const inputs = document.getElementById("inputs")
    inputs.innerHTML = "";

    const currentQuestion = document.getElementById("questions");
    currentQuestion.innerHTML = "";

    const gameScenario = document.getElementById("game-scenario");

    gameScenario.innerHTML += '<div id="invade-terminal" class="invade-terminal">'
    + '<p class="daemon-terminal">../device.root:/daemon=otherRound+breach=true</p>'
    + '<p>¡Uff! He conseguido mantener la conexión estable, pero aún queda hielo por romper.</p>'
    + '<p>' + playerData.name + ', de momento llevas ' + playerData.points + (playerData.points === 1 ? ' resuelta.</p>' : ' resueltas.</p>')
    + '<p>No te duermas en los laures, ¡sigue currando como si no hubiera un mañana!...</p>' 
    + '<p>Para lo que te queda, hay que ir a muerte... literalmente ಠ‿ಠ</p>'
    + '<p> ¡Venga, a romper más hielo! </p>'
    + '<button class="invade-input" id="invade-input">Volver a la invasión</button>'
    + '</div>';

    const passedQuestionFinder = () => {

        passedPositionIndexer = [];
        passedPositionIndex = 0;

        questionPacks.forEach(letter => {
            if (letter.status === '🔵') {
                passedPositionIndexer.push(questionPacks.indexOf(letter))
            };
        });
    };
    passedQuestionFinder();
    startGame(passedPositionIndexer[passedPositionIndex]);
};


const playerDeath = () => {

    document.getElementById("letter-donut").innerHTML = "";
    document.getElementById("questions").innerHTML = "";
    document.getElementById("inputs").innerHTML = "";
    document.getElementById("v-thumbnail").src = "./media/dead_thumbnail.gif";

    heartBeatSound.pause();
    gameMusic.pause();

    const deathEvent = document.getElementById("game-events");

    deathEvent.innerHTML += '<div class="end-note">'
        + '<img src="./media/dead-icon.png" alt="has muerto" class="end-icon">'
        + '<h3><b>¡LA HAS PALMADO!</b></h3>'
        + '<p>Se te ha freido el cerebro. Mira que te lo advertí...  <br>'
        + 'Bueno, me quedaré con lo que no se haya fundido de tu cromo. <br><br>'
        + '<button class="restart-input" id="game-restart"> ✓ ¡Volver a jugar!</button>'
        + '<button class="restart-input" id="game-close"> ✗ ¡Que le den!</button></p>'
        + '</div>'

    playerDeathEvent.play();
    RestartCleaner();
    closeGameTab();
};


const playerDisconnected = () => {

    document.getElementById("letter-donut").innerHTML= "";
    document.getElementById("questions").innerHTML = "";
    document.getElementById("inputs").innerHTML = "";
    playerData.cancel = true;

    heartBeatSound.pause();
    gameMusic.pause();
    playerDisconnectedEvent.play();

    const disconectEvent = document.getElementById("game-events");

    disconectEvent.innerHTML += '<div class="end-note">'
        + '<img src="./media/stop-icon.png" alt="has desconectado" class="end-icon">'
        + '<h3><b>¡TE HAS DESCONECTADO!</b></h3>'
        + '<p>Parece que no tenías lo que hay que tener... <br>'
        + 'Pero, por lo menos, verás otro amanecer y has sacado algunos eddies.<br><br>'
        + '<button class="restart-input" id="game-restart"> ✓ ¡Volver a jugar!</button>'
        + '<button class="restart-input" id="game-close"> ✗ ¡Que le den!</button></p>'
        + '</div>'

    RestartCleaner();
    closeGameTab();

    setTimeout( () => {
        ranking();
    }, 100);
};


const playerCompletedTheGame = () => { 

    document.getElementById("letter-donut").innerHTML= "";
    document.getElementById("questions").innerHTML = "";
    document.getElementById("inputs").innerHTML = "";
    playerData.cancel = true;

    heartBeatSound.pause();
    gameMusic.pause();
    playerDisconnectedEvent.play();

    const gameCompletedEvent = document.getElementById("game-events");

    gameCompletedEvent.innerHTML += '<div class="end-note">'
        + '<img src="./media/completed_icon.gif" alt="has muerto" class="completed-icon">'
        + '<h3><b>¡HAS HACKEADO EL TERMINAL SIN MORIR!</b><br></h3>'
        + '<p>¡Joder, ' + playerData.points + ' palabras de seguridad rotas! nada mal, ' + playerData.name + '... <br>'
        + 'Has cumplido con el fixer y te llevas unos eddies. En el Afterlife hablarán de ti, seguro. <br><br>'
        + '<button class="restart-input" id="game-restart"> ✓ ¡Volver a jugar!</button>'
        + '<button class="restart-input" id="game-close"> ✗ ¡Que le den!</button></p>'
        + '</div>'

    RestartCleaner();
    closeGameTab();

    setTimeout( () => {
        ranking();
    }, 100);
};


const playerAfterlifeLegend = () => { 

    document.getElementById("letter-donut").innerHTML= "";
    document.getElementById("questions").innerHTML = "";
    document.getElementById("inputs").innerHTML = "";
    playerData.cancel = true;

    heartBeatSound.pause();
    gameMusic.pause();
    playerLegendEvent.play();

    const FixerBonusForTheLegend = ~~(playerData.money * 0.2).toFixed(0);
    const afterlifeLegendEvent = document.getElementById("game-events");

    afterlifeLegendEvent.innerHTML += '<div class="end-note">'
        + '<img src="./media/afterlife-samurai-legend.gif" alt="Eres una leyenda" class="legend-icon">'
        + '<h3><b>¡HAS ROTO EL HIELO SIN FALLAR!</b></h3>'
        + '<p>' + playerData.name + ', ¡has roto los ' + playerData.points + ' nodos de seguridad!'
        + ' Joder, no mentías. Eres una puta leyenda. '
        + 'El fixer te ha dado un plus del 20%, ' + FixerBonusForTheLegend 
        + ' eddies ¡Eso te dará un empujón para petarlo en el ranking del Afterlife! <br><br>'
        + '<button class="restart-input" id="game-restart"> ✓ ¡Volver a jugar!</button>'
        + '<button class="restart-input" id="game-close"> ✗ ¡Que le den!</button></p>'
        + '</div>'

    RestartCleaner();
    closeGameTab();

    setTimeout( () => {
        
    playerData.money += FixerBonusForTheLegend;
    }, 3000);

    setTimeout( () => {
        ranking();   
    }, 3100);
};


const RestartCleaner = () => {

    const gameRestarter = document.getElementById("game-restart");

    gameRestarter.addEventListener("click", (event) => {
        event.preventDefault();

        buttonConfirmSound.play();
        playerLegendEvent.pause();
        playerDisconnectedEvent.pause();
        playerDeathEvent.pause();

        const clearDisconectEvent = document.getElementById("game-events");
            clearDisconectEvent.innerHTML = ""; 

        const clearRanking = document.getElementById("game-ranking");
            clearRanking.innerHTML = "";

        const playerStatusHub = document.getElementById("player-status");
            playerStatusHub.innerHTML = "";

        gameRestarter.disabled = true;

        playerData.questionsIdForGame = questionPackSelector();
        playerData.points = 0;
        playerData.money = 0;
        playerData.health = playerData.MaximumHealth;
        playerData.cancel = false;

        guessedCheck = [];
        passedCheck = [];
        cancelCheck = [];

        questionIdCounter = 0;
        roundNumberCounter = 0;
        passedPositionIndexer = [];
        passedPositionIndex = 0;

        questionPacks.forEach(letter => { letter.status = 0})

        const terminalLocked = document.getElementById("terminal-locked");
        terminalLocked.innerHTML += 'TERMINAL LOCKED';
        
        gameMusic.volume = 0.25; 
        heartBeatSound.volume = 0;
        TerminalConnectionSound.play();

        setTimeout( () => {  
            startGameMenu();
            const terminalLockedOut = document.getElementById("terminal-locked");
            terminalLockedOut.innerHTML = "";
        }, 1500);
    });
};


const closeGameTab = () => {
    
    const gameCloser = document.getElementById("game-close");

    gameCloser.addEventListener("click", (event) => {
        event.preventDefault();

        buttonCloseGameSound.play();
        setTimeout( () => {
           close()
        }, 150);
    });
};


const answerInputResetAndWinnerChecker = (delay) => {

    setTimeout( () => {
        questionIdCounter++;
        passedPositionIndex++;

        if (!roundNumberCounter) {
            if (questionIdCounter === alphabet.length) {
                winnerChecker();
            } else {
                questionZoneReset(questionIdCounter);
            };
        } else {
            if (passedPositionIndex === passedPositionIndexer.length) {
                winnerChecker();
            } else {
                questionZoneReset(passedPositionIndexer[passedPositionIndex])
            };
        };
    }, delay);
};

runGameAfterExplanation();
