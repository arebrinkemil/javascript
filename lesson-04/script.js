// const data = `
// 	{
// 		"name": "Steve Carell",
// 		"character": "Michael Scott",
// 		"profile_url": "https://www.imdb.com/name/nm0136797/?ref_=tt_cl_t_1",
// 		"image_url": "https://m.media-amazon.com/images/M/MV5BMjMyOTM2OTk1Ml5BMl5BanBnXkFtZTgwMTI3MzkyNjM@._V1_QL75_UX280_CR0,2,280,414_.jpg"
// 	}
// `;

// const obj = JSON.parse(data);

// const names = obj.name;
// const imageUrl = obj.image_url;
// document.getElementById("name").textContent = obj.name;
// document.getElementById("image").src = obj.image_url;

// console.log(names);
// console.log(imageUrl);

// const img = document.createElement("img");
// img.alt = "mean girls";
// document.body.appendChild(img);

// const apiUrl = "https://yrgo.github.io/api/movies/mean-girls.json";
// const fetchData = async () => {
//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     console.log(data);
//     const title = data.title;
//     const trailer_url = data.trailer_url;
//     const year = data.year;
//     const poster = data.poster_url;

//     img.src = poster;

//     console.log(title);
//     console.log(trailer_url);
//     console.log(year);
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchData();

const actorList = document.querySelector("#actorlist");

const apiUrl = "https://yrgo.github.io/api/movies/mean-girls.json";
const fetchData = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    data.actors.forEach((actor) => {
      const actorDiv = document.createElement("div");
      actorDiv.setAttribute("id", "actor");
      actorDiv.innerHTML = `
                <a href="${actor.profile_url}">
                    <img src="${actor.image_url}"/>
                    </a>
                    <h2>${actor.name}</h2>
                    <p>${actor.character}</p>
                
            `;
      actorList.appendChild(actorDiv);
    });
  } catch (error) {
    console.log(error);
  }
};

fetchData();

// const apiUrl = 'https://api.chucknorris.io/jokes/random';

//  const fetchData = async () => {
//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         console.log(data);
//      catch (error) {
//         console.log(error);

//  };

// fetchData();

// fetch(apiUrl);
// .then((response) => {
//     console.log(response);
//     return response.json();
// }).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// }
// );

// const examplePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const rand = Math.random();
//   }, 1000);

//   if (rand > 0.5) {
//     resolve("everything went well");
//   } else {
//     reject("something went wrong");
//   }
// });

// const demo = async () => {
//   const result = await examplePromise;
//   console.log(result);
// };

// demo();

// pokebox.innerHTML = "
// <h2>${data}</h2>
