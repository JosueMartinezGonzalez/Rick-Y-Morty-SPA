import getData from '../utils/getData';

const Home = async () => {

    const characters = await getData();

    const view = `
        <div class="main-content" id="main-content">
            ${characters.results.map(character => `
                <article class="personaje-container" id="personaje-container">
                    <a href="#/${character.id}">
                        <div class="img-container">
                            <img class="personaje-img" src="${character.image}" alt="">
                        </div>
                        <div class="personaje-description">
                            <h2 class="name">${character.name}</h2>
                        </div>
                    </a>
                </article>
            `).join('')}
        </div>
    `;

    return view;
}

export default Home;