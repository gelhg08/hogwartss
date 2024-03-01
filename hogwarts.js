let estudianteHogwarts = {
  nombre: "",
  edad: "",
  padre: "",
  madre: "",
  linaje: "",
  casa: "",
  animalPatronus: "",
  cualidades: "",
  expectoPatronus: function () {
    if (this.animalPatronus === "") {
      console.log(
        "No puedo lanzar Expecto Patronum. !Aun no se cual es mi animal protector"
      );
      console.log("Lo absorbe el Dementor, termina en la enfermeria");
    } else {
      console.log(`Expecto Patronum¡¡ !Aparece, ${this.animalPatronus}`);
    }
  },
  enfrentarDementor: function () {
    this.animalPatronus = defensaContraLasArtesOscuras.generarAnimalPatronus();
    console.log(`Un Dementor aparece`);
    this.expectoPatronus();
  },
};

const botonEviar = document.getElementById("boton");

botonEviar.addEventListener("click", (event) => {
  event.preventDefault();
  calcular();
});

function calcular() {
  const nombre = document.getElementById("nombreEstudiante").value;
  const edad = document.getElementById("edadEstudiante").value;
  const padre = document.getElementById("padreEstudiante").value;
  const madre = document.getElementById("madreEstudiante").value;
  const linaje = document.getElementById("linaje").value;
  const cualidades = document.getElementById("cualidades").value;

  estudianteHogwarts.nombre = nombre;
  estudianteHogwarts.edad = edad;
  estudianteHogwarts.padre = padre;
  estudianteHogwarts.madre = madre;
  estudianteHogwarts.linaje = linaje;
  estudianteHogwarts.cualidades = cualidades;

  let colocar = document.getElementById("colocar");
  colocar.innerHTML = `<p class="color"> Estudiante registrado </p>
    <p class="color"> Nombre: ${nombre} </p>
    <p class="color"> Edad: ${edad}  </p>
    <p class="color"> Madre: ${madre} </p>
    <p class="color"> Padre: ${padre} </p> 
    <p class="color"> Linaje: ${linaje} </p>
    <p class="color"> Patronus: ${estudianteHogwarts.animalPatronus} </p>
    `;
}

let clases = {
  transformaciones: "Profesor Kevin Slughorn",
  herbologia: "Profesor Maria Umbridge",
  pociones: "Profesor Liliana McGonagall",
  encantamientos: "Profesora Jackie",
  defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
  animalesMagicos: "Profesor David Filch",
  historiaDeMagia: "Profesor Ronald Sprout",
};

let cena = {
  asignarCasa: function (estudiante) {
    // Determinar la casa según las cualidades y el linaje
    if (
      estudiante.cualidades.includes("Valor") ||
      estudiante.cualidades.includes("Fuerza") ||
      estudiante.cualidades.includes("Audacia") ||
      estudiante.linaje === "sangre pura" ||
      estudiante.linaje === "muggle" ||
      estudiante.linaje === "mestizo"
    ) {
      estudiante.casa = "Gryffindor";
    } else if (
      estudiante.cualidades.includes("Justicia") ||
      estudiante.cualidades.includes("Lealtad") ||
      estudiante.cualidades.includes("Paciencia") ||
      estudiante.linaje === "muggle" ||
      estudiante.linaje === "mestizo"
    ) {
      estudiante.casa = "Hufflepuff";
    } else if (
      estudiante.cualidades.includes("Creatividad") ||
      estudiante.cualidades.includes("Erudiccion") ||
      estudiante.cualidades.includes("Inteligencia") ||
      estudiante.linaje === "sangre pura" ||
      estudiante.linaje === "muggle" ||
      estudiante.linaje === "mestizo"
    ) {
      estudiante.casa = "Ravenclaw";
    } else if (
      estudiante.cualidades.includes("Ambicion") ||
      estudiante.cualidades.includes("Determinacion") ||
      estudiante.cualidades.includes("Astucia") ||
      estudiante.linaje === "sangre pura"
    ) {
      estudiante.casa = "Slytherin";
    } else {
      console.log(
        "No se puede determinar la casa. ¡El Sombrero Seleccionador está confundido!"
      );
    }
  },
};

let claseTransformaciones = {
  profesor: clases.transformaciones,
  hora: "9 AM",
  boggartTransformado: null,

  realizarTransformacionRiddikulus: function () {
    if (this.boggartTransformado === null) {
      console.log("¡un Boggart aparecion en la clase de transformaciones¡¡ ");
    } else {
      console.log(
        `!Riddikulus¡ El boggart se transforma y da risa. Es ahora un ${this.boggartTransformado.formaTransformada}`
      );
    }
  },
  enfrentarBoggart: function (boggart) {
    console.log(`!Un boggart ha aprecido en la clase de Transformaciones¡`);
    console.log(` Forma original del boggart: ${boggart.formaOriginal}`);
    this.boggartTransformado = {
      formaOriginal: boggart.formaOriginal,
      formaTransformada: "Payaso gracioso",
    };

    this.realizarTransformacionRiddikulus;
  },
};

let boggartEjemplo = {
  formaOriginal: "Puerco araña",
};

claseTransformaciones.enfrentarBoggart(boggartEjemplo);

let defensaContraLasArtesOscuras = {
  profesor: clases.defensaContraLasArtesOscuras,
  hora: "10 AM",
  animalPatronus: [
    "Ciervo",
    "Aguila",
    "Dragon",
    "Fenix",
    "Tlacuache",
    "Libelula",
  ],
  generarAnimalPatronus: function () {
    let indiceAleatorio = Math.floor(
      Math.random() * estudianteHogwarts.animalPatronus.length
    );
    return this.animalPatronus[indiceAleatorio];
  },
};
