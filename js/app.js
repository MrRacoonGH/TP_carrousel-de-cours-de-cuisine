const testimonials = [
    {
      image: "./images/image-tanya.jpg",
      text: "“La programmation m'intéressait depuis un certain temps mais je n’avais jamais sauté le pas. Ce cours a été une révélation pour moi. Il m’a permis d’obtenir le job de mes rêves.”",
      author: "Tanya Sinclar",
      position: "UX Engineer",
    },
    {
      image: "./images/image-john.jpg",
      text: "“Ce bootcamp a changé ma vie. J'ai appris tellement en quelques mois, et j'ai décroché un poste incroyable dans une entreprise tech.”",
      author: "John Doe",
      position: "Développeur Full Stack",
    }
  ];
  
  let index = 0;
  
  const imgElement = document.querySelector(".img-wrapper img");
  const textElement = document.querySelector(".testimonial-text");
  const authorElement = document.querySelector(".testimonial-author");
  const positionElement = document.querySelector(".testimonial-position");
  const prevButton = document.querySelector(".icons-wrapper img:first-child");
  const nextButton = document.querySelector(".icons-wrapper img:last-child");
  
  function updateTestimonial() {
    imgElement.src = testimonials[index].image;
    textElement.textContent = testimonials[index].text;
    authorElement.textContent = testimonials[index].author;
    positionElement.textContent = testimonials[index].position;
  }
  
  nextButton.addEventListener("click", () => {
    index = (index + 1) % testimonials.length;
    updateTestimonial();
  });
  
  prevButton.addEventListener("click", () => {
    index = (index - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
  });
  