const projects = [
    {
        title: "Data Visualization Dashboard",
        description: "A data visualization dashboard showcasing insights from various real-world datasets.",
        imagePath: "projects/project1/images/screenshot1.jpg",
        link: "projects/project1/index.html"
    },
    {
        title: "E-Commerce Website",
        description: "An interactive e-commerce website for a seamless online shopping experience.",
        imagePath: "projects/project2/images/screenshot1.jpg",
        link: "projects/project2/index.html"
    },
    {
        title: "Machine Learning Model",
        description: "Using machine learning to predict stock market trends for informed decision-making.",
        imagePath: "projects/project3/images/screenshot1.jpg",
        link: "projects/project3/index.html"
    }
];

// Populate project previews
const projectsContainer = document.getElementById('projects');

projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');

    projectElement.innerHTML = `
        <img src="${project.imagePath}" alt="${project.title} Screenshot">
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <a href="${project.link}">View Project</a>
    `;

    projectsContainer.appendChild(projectElement);
});

