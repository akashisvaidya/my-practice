function greet(language) {
  const greetings = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };
  if (greetings.hasOwnProperty(language)) {
    console.log(greetings[language]);
  } else console.log(greeting.english);
}

console.log(greet("french"));

var sing = function () {
  let lyrics = [];

  for (i = 99; i >= 3; i--) {
    lyrics.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`);

    lyrics.push(
      `Take one down and pass it around, ${i - 1} bottles of beer on the wall.`
    );
  }
  lyrics.push("2 bottles of beer on the wall, 2 bottles of beer.");
  lyrics.push(
    "Take one down and pass it around, 1 bottle of beer on the wall."
  );
  lyrics.push("1 bottle of beer on the wall, 1 bottle of beer.");
  lyrics.push(
    "Take one down and pass it around, no more bottles of beer on the wall."
  );
  lyrics.push("No more bottles of beer on the wall, no more bottles of beer.");
  lyrics.push(
    "Go to the store and buy some more, 99 bottles of beer on the wall."
  );

  return lyrics;
};

console.log(sing());
