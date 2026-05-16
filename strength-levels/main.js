// @author: luisOrteg
const readline = require("readline");

const MAX_POWER = 100000;
const BAR_WIDTH = 30;
const heroes = [];

const ANSI = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  green: "\x1b[32m",
  greenBright: "\x1b[92m",
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(paint(question, ANSI.greenBright), (answer) => {
      resolve(answer.trim());
    });
  });
}

function paint(text, ...styles) {
  return `${styles.join("")}${text}${ANSI.reset}`;
}

function clampPower(value) {
  if (Number.isNaN(value) || !Number.isFinite(value)) {
    return null;
  }

  if (value < 0) {
    return 0;
  }

  if (value > MAX_POWER) {
    return MAX_POWER;
  }

  return Math.floor(value);
}

function formatPower(power) {
  return power.toLocaleString("en-US");
}

function buildPowerBar(power) {
  const filled = Math.round((power / MAX_POWER) * BAR_WIDTH);
  const empty = BAR_WIDTH - filled;
  return `[${"█".repeat(filled)}${"░".repeat(empty)}]`;
}

function buildRow(columns, widths) {
  return columns
    .map((value, index) => String(value).padEnd(widths[index], " "))
    .join(" | ");
}

function buildSeparator(widths) {
  return widths.map((width) => "-".repeat(width)).join("-+-");
}

function getAveragePower() {
  if (heroes.length === 0) {
    return 0;
  }

  const total = heroes.reduce((sum, hero) => sum + hero.power, 0);
  return total / heroes.length;
}

function renderHeader() {
  console.log(paint("▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱", ANSI.bright, ANSI.green));
  console.log(paint("        > P o w e r   L e v e l s                    ", ANSI.bright, ANSI.greenBright));
  console.log(paint("▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱", ANSI.bright, ANSI.green));
  console.log(paint(`Rango de poder: 0 a ${formatPower(MAX_POWER)} pts`, ANSI.green));
  console.log(paint("Escribe 'exit' para salir.", ANSI.greenBright));
  console.log("");
}

function renderHeroes() {
  if (heroes.length === 0) {
    console.log(paint("Aun no hay superheroes creados.", ANSI.greenBright));
    return;
  }

  console.log(paint("Superheroes creados:", ANSI.bright, ANSI.green));
  console.log("");

  heroes.forEach((hero, index) => {
    const percent = ((hero.power / MAX_POWER) * 100).toFixed(2);
    const line =
      `${String(index + 1).padStart(2, "0")}. ` +
      `${hero.name.padEnd(18, " ")} ` +
      `${formatPower(hero.power).padStart(7, " ")} pts ` +
      `${buildPowerBar(hero.power)} ${percent.padStart(6, " ")}%`;

    console.log(paint(line, ANSI.greenBright));
  });
}

function renderScreen() {
  console.clear();
  renderHeader();
  renderHeroes();
  console.log("");
}

function renderFinalStats() {
  if (heroes.length === 0) {
    console.log(paint("No se registraron superheroes.", ANSI.greenBright));
    return;
  }

  const sortedHeroes = [...heroes].sort((a, b) => b.power - a.power);
  const totalPower = sortedHeroes.reduce((sum, hero) => sum + hero.power, 0);
  const strongest = sortedHeroes[0];
  const weakest = sortedHeroes[sortedHeroes.length - 1];
  const averagePower = Math.round(getAveragePower());

  const headers = [
    "#",
    "Superheroe",
    "Poder",
    "% del max",
    "% del total",
    "Diferencia vs top",
  ];

  const rows = sortedHeroes.map((hero, index) => {
    const percentOfMax = ((hero.power / MAX_POWER) * 100).toFixed(2) + "%";
    const percentOfTotal =
      totalPower === 0 ? "0.00%" : ((hero.power / totalPower) * 100).toFixed(2) + "%";
    const differenceVsTop =
      strongest.power === 0
        ? "0.00%"
        : (((strongest.power - hero.power) / strongest.power) * 100).toFixed(2) + "%";

    return [
      index + 1,
      hero.name,
      `${formatPower(hero.power)} pts`,
      percentOfMax,
      percentOfTotal,
      differenceVsTop,
    ];
  });

  const widths = headers.map((header, index) =>
    Math.max(header.length, ...rows.map((row) => String(row[index]).length))
  );

  console.log(paint("TABLA FINAL DE ESTADISTICAS", ANSI.bright, ANSI.greenBright));
  console.log("");
  console.log(paint(buildRow(headers, widths), ANSI.bright, ANSI.green));
  console.log(paint(buildSeparator(widths), ANSI.dim, ANSI.green));

  rows.forEach((row) => {
    console.log(paint(buildRow(row, widths), ANSI.greenBright));
  });

  console.log("");
  console.log(
    paint(
      `Total: ${heroes.length} heroes | Poder acumulado: ${formatPower(totalPower)} pts | Promedio: ${formatPower(averagePower)} pts`,
      ANSI.bright,
      ANSI.green
    )
  );
  console.log(
    paint(
      `Mas poderoso: ${strongest.name} (${formatPower(strongest.power)} pts) | Menor poder: ${weakest.name} (${formatPower(weakest.power)} pts)`,
      ANSI.greenBright
    )
  );
}

async function main() {
  while (true) {
    renderScreen();

    const name = await ask("Nombre del superheroe: ");
    if (name.toLowerCase() === "exit") {
      break;
    }

    if (!name) {
      console.log(paint("El nombre no puede estar vacio.", ANSI.greenBright));
      await ask("Presiona ENTER para continuar...");
      continue;
    }

    const powerInput = await ask("Nivel de poder (0 - 100000): ");
    if (powerInput.toLowerCase() === "exit") {
      break;
    }

    const parsedPower = clampPower(Number(powerInput));

    if (parsedPower === null) {
      console.log(paint("Debes escribir un numero valido.", ANSI.greenBright));
      await ask("Presiona ENTER para continuar...");
      continue;
    }

    heroes.push({
      name,
      power: parsedPower,
    });
  }

  console.clear();
  renderHeader();
  console.log(paint("Juego finalizado.", ANSI.bright, ANSI.greenBright));
  console.log("");
  renderFinalStats();
  console.log("");
  rl.close();
}

main().catch((error) => {
  console.error(paint(`Ocurrio un error inesperado: ${error.message}`, ANSI.greenBright));
  rl.close();
});
