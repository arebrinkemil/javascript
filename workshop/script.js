//Set the title of your site here
const mySiteTitle = "My new blog";

// Insert data from chatGPT here
// You can copy the structure of the example article below and post it into chatgpt, ask it to add more articles and change some of its content to fit the theme of your site, then copy the data from the chatgpt output and paste it here.

const data = [
  {
    title: "Our First Article",
    subTitle: "We need to populate our site with content",
    content:
      "What if we go to ChatGPT and ask the nice AI to write some articles for us?",
    image: "image1.png", // Optional
  },
  {
    title: "Why JavaScript is Important",
    subTitle: "The Backbone of Modern Web Development",
    content:
      "JavaScript has become an indispensable part of web development. From front-end to back-end, its versatility is unmatched.",
    image: "image2.png", // Optional
  },
  {
    title: "CSS: More Than Just Styling",
    subTitle: "The Role of CSS in Web Design",
    content:
      "Cascading Style Sheets (CSS) does more than just make your website look good; it's a crucial component for web performance and accessibility.",
    image: "image3.png", // Optional
  },
  {
    title: "Introduction to PHP",
    subTitle: "A Language for Server-Side Logic",
    content:
      "PHP has been the go-to server-side language for web developers. In this article, we explore why it continues to be a mainstay in web development.",
    image: "image4.png", // Optional
  },
  {
    title: "HTML: The Markup Language",
    subTitle: "Creating the Structure of the Web",
    content:
      "HTML is the foundational markup language for creating web pages. It's simple, yet powerful, and serves as the skeleton of your web project.",
    image: "image5.png", // Optional
  },
  {
    title: "The Importance of Responsive Design",
    subTitle: "Designing for a Variety of Screen Sizes",
    content:
      "As the number of devices continues to grow, responsive design has become a fundamental skill for any web developer.",
    image: "image6.png", // Optional
  },
];
const main = document.querySelector(".content-container");

const addArticle = (article) => {
  if (!main) return; // Check if main exists

  const articleElement = document.createElement("article");
  articleElement.classList.add("article");

  const articleTitle = document.createElement("h2");
  articleTitle.innerText = article.title;

  const articleSubTitle = document.createElement("h3");
  articleSubTitle.innerText = article.subTitle;

  const articleContent = document.createElement("p");
  articleContent.innerText = article.content;

  const articleImage = document.createElement("img");
  articleImage.src = article.image || "path/to/default-image.jpg"; // Use a default image if none is provided

  articleElement.appendChild(articleTitle);
  articleElement.appendChild(articleSubTitle);
  articleElement.appendChild(articleContent);
  articleElement.appendChild(articleImage);

  main.appendChild(articleElement);
};

data.forEach((article) => addArticle(article));
const title = document.querySelector("title");
const siteTitle = document.getElementById("site-title");
title.innerText = mySiteTitle;
siteTitle.innerText = mySiteTitle;
