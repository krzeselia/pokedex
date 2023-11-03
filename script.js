const allMagicButtons = document.querySelectorAll(".magic > button");
const allEntries = document.querySelectorAll(".album > div");

// this hides all entries and removes active class from magic buttons
function resetMagic() {
    allEntries.forEach(entry => {
        entry.classList.add("hidden");
    })
    allMagicButtons.forEach(button => {
        button.classList.remove("active");
    })
    generations.forEach(gen => {
        gen.classList.remove("hidden");
    })
    allGenButtons.forEach(button => {
        button.classList.remove('active');
    })
    buttonAllGens.classList.add('active');
}

// this hides generations with no visible entries

function hideEmptyGens() {
    generations.forEach(gen => {
        if (gen.querySelectorAll(".album > div:not(.hidden)").length == 0) {
            gen.classList.add("hidden");
        }
    })
}

// this shows only missing shinies
const buttonShiny = document.querySelector(".buttonshiny");
buttonShiny.addEventListener("click", showMissingShinies);

function showMissingShinies() {
    resetMagic();

    const missingShinies = document.querySelectorAll(".album > .missingshiny");
    missingShinies.forEach(miss => {
        miss.classList.remove('hidden');
    })
    buttonShiny.classList.add('active');

    hideEmptyGens();
}

// this shows only missing lucky pokemon

const buttonLucky = document.querySelector(".buttonlucky");
buttonLucky.addEventListener("click", showMissingLuckies);

function showMissingLuckies() {
    resetMagic();

    const missingLuckies = document.querySelectorAll(".album > .missinglucky");
    missingLuckies.forEach(miss => {
        miss.classList.remove('hidden');
    })
    buttonLucky.classList.add('active');

    hideEmptyGens();
}

//this shows only missing dex entries

const buttonMissingDex = document.querySelector(".buttonmissing");
buttonMissingDex.addEventListener("click", showMissingDex);

function showMissingDex() {
    resetMagic();

    const missingDexEntries = document.querySelectorAll(".album > .missing");
    missingDexEntries.forEach(miss => {
        miss.classList.remove('hidden');
    })
    buttonMissingDex.classList.add("active");

    hideEmptyGens();
}

// this shows all pokemon

const buttonNoFilter = document.querySelector('.buttonnofilter');
buttonNoFilter.addEventListener('click', showAllPokemon);

function showAllPokemon() {
    resetMagic();

    allEntries.forEach(entry => {
        entry.classList.remove('hidden');
    })
    buttonNoFilter.classList.add('active');
}

// this shows only specific generation

const generations = document.querySelectorAll("section");
const allGenButtons = document.querySelectorAll("nav > button");

function hideOtherGens(generation, genButton) {
    generations.forEach(gen => {
        if (gen.classList.contains("hidden")) {
            return
        } else { gen.classList.add("hidden"); }
    })
    generation.classList.remove("hidden");

    allGenButtons.forEach(button => {
        button.classList.remove('active');
    })
    genButton.classList.add('active');

}

for (let i = 0; i < generations.length; i++) {
    allGenButtons[i].addEventListener('click', hideOtherGens.bind(null, generations[i], allGenButtons[i]));
    console.log(generations[i])
}

const buttonAllGens = document.querySelector('.buttonallgens');
buttonAllGens.addEventListener('click', showAllGens);

function showAllGens() {
    generations.forEach(gen => {
        gen.classList.remove("hidden");
    })

    allGenButtons.forEach(button => {
        button.classList.remove('active');
    })
    buttonAllGens.classList.add('active');
}