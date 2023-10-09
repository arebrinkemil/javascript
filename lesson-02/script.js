// let fullName = "Britney Jean Spears";
// const names = fullName.split(" ");
// console.log(`first name: ${names[0]}`);
// console.log(`last name: ${names[2]}`);
// console.log(`middle name: ${names[1]}`);

// let stageName = names[0].concat(" ", names[2]);
// console.log(stageName);

// const songs = [
//   "Toxic",
//   "...Baby one more time",
//   "Everytime",
//   "Circus",
//   "Oops! I did it again",
//   "Lucky",
//   "I'm not a girl, not yet a woman",
// ];

// songs.push("new song");

// console.log(songs.indexOf("Circus"));

// songs.splice(3, 1);

// songs.forEach(function callback(song, index) {
//   console.log(`${index}. ${song}`);
// });

// for (let i = 0; i < songs.length; i++) {
//   const songName = songs[i];
//   console.log(songName.split("").reverse().join(""));
// }

// let i = 0;

// while (i < songs.length) {
//   if (songs[i] == "Lucky") {
//     console.log(`Stop! Here's ${songs[i]}`);
//     break;
//   }
//   console.log(songs[i]);
//   i++;
// }

// const mapLoop = songs.map((x) => x.toUpperCase());
// console.log(mapLoop);

// const person = {
//   name: "Britney Jean Spears",
//   birthdate: "2 December, 1981",
//   from: "McComb, Mississippi, USA",
//   length: 163,
//   children: ["Sean Federline", "Jayden James Federline"],
//   description:
//     "Britney Spears has been one of the most successful — and sometimes controversial — solo acts in popular music. Six of her first seven albums reached No. 1 on the Billboard 200.",
// };

// console.log(`Her name is ${person.name} and she was born ${person.birthdate}.`);

// person.children.forEach((child) => {
//   console.log(child);
// });

const albums = [
  { title: "...Baby One More Time", year: 1999, label: "Jive" },
  { title: "Oops!... I Did It Again", year: 2000, label: "Jive" },
  { title: "Britney", year: 2001, label: "Jive" },
  { title: "In the zone", year: 2003, label: "Jive, Zomba" },
  { title: "Blackout", year: 2007, label: "Jive, Zomba" },
  { title: "Circus", year: 2008, label: "Jive, Zomba" },
  { title: "Femme Fatale", year: 2011, label: "Jive" },
  { title: "Britney Jean", year: 2013, label: "RCA" },
  { title: "Glory", year: 2016, label: "RCA" },
];

// albums.forEach((album, index) => {
//   console.log(`${album["title"]}, ${album["year"]} `);
// });

// function getAlbumFrom(arr, year) {
//   return arr.filter((album) => album.year >= year);
// }

// console.log(getAlbumFrom(albums, 2007));

// ['a', 'b', 'c'].reduce((a, v) => ({ ...a, [v]: v}), {})
// // { a: "a", b: "b", c: "c" }

const labelCounts = albums.reduce((acc, album) => {
  const labels = album.label.split(",").map((label) => label.trim());

  for (const label of labels) {
    if (acc[label]) {
      acc[label] = acc[label] + 1;
    } else {
      acc[label] = 1;
    }
  }
  return acc;
}, {});

console.log(labelCounts);
