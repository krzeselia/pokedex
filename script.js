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
        gen.style.display = "initial";
    })
}

// this shows only missing shinies
const buttonShiny = document.querySelector(".buttonshiny");
buttonShiny.addEventListener("click", resetMagic);
buttonShiny.addEventListener("click", showMissingShinies);

function showMissingShinies() {
    const missingShinies = document.querySelectorAll(".album > .missingshiny");
    missingShinies.forEach(miss => {
        miss.classList.remove('hidden');
    })
    buttonShiny.classList.add('active');
}

// this shows only missing lucky pokemon

const buttonLucky = document.querySelector(".buttonlucky");
buttonLucky.addEventListener("click", resetMagic);
buttonLucky.addEventListener("click", showMissingLuckies);

function showMissingLuckies() {
    const missingLuckies = document.querySelectorAll(".album > .missinglucky");
    missingLuckies.forEach(miss => {
        miss.classList.remove('hidden');
    })
    buttonLucky.classList.add('active');
}

//this shows only missing dex entries

const buttonMissingDex = document.querySelector(".buttonmissing");
buttonMissingDex.addEventListener("click", resetMagic);
buttonMissingDex.addEventListener("click", showMissingDex);

function showMissingDex() {
    const missingDexEntries = document.querySelectorAll(".album > .missing");
    missingDexEntries.forEach(miss => {
        miss.classList.remove('hidden');
    })
    buttonMissingDex.classList.add("active");
}

// this shows all pokemon

const buttonNoFilter = document.querySelector('.buttonnofilter');
buttonNoFilter.addEventListener('click', resetMagic);
buttonNoFilter.addEventListener('click', showAllPokemon);

function showAllPokemon() {
    allEntries.forEach(entry => {
        entry.classList.remove('hidden');
    })
    buttonNoFilter.classList.add('active');
}

// all the generation tabs

const generations = document.querySelectorAll("section");
const gen1 = document.querySelector(".gen1");
const gen2 = document.querySelector(".gen2");
const gen3 = document.querySelector(".gen3");
const gen4 = document.querySelector(".gen4");
const gen5 = document.querySelector(".gen5");
const gen6 = document.querySelector(".gen6");
const gen7 = document.querySelector(".gen7");
const gen8 = document.querySelector(".gen8");

const allGenButtons = document.querySelectorAll("nav > button");

const buttonGen1 = document.querySelector(".buttongen1");
buttonGen1.addEventListener('click', showOnlyGen1);

function showOnlyGen1() {
    generations.forEach(gen => {
        gen.style.display = "none";
    })
    gen1.style.display = "block";
    
    allGenButtons.forEach(button => {
        button.classList.remove('active');
    })
    buttonGen1.classList.add('active');
}

const buttonGen2 = document.querySelector(".buttongen2");
buttonGen2.addEventListener('click', showOnlyGen2);

function showOnlyGen2() {
    generations.forEach(gen => {
        gen.style.display = "none";
    })
    gen2.style.display = "block";

    allGenButtons.forEach(button => {
        button.classList.remove('active');
    })
    buttonGen2.classList.add('active');
}

const buttonGen3 = document.querySelector(".buttongen3");
buttonGen3.addEventListener('click', showOnlyGen3);

function showOnlyGen3() {
    generations.forEach(gen => {
        gen.style.display = "none";
    })
    gen3.style.display = "block";

    allGenButtons.forEach(button => {
        button.classList.remove('active');
    })
    buttonGen3.classList.add('active');
}

const buttonGen4 = document.querySelector(".buttongen4");
buttonGen4.addEventListener('click', showOnlyGen4);

function showOnlyGen4() {
    generations.forEach(gen => {
        gen.style.display = "none";
    })
    gen4.style.display = "block";

    allGenButtons.forEach(button => {
        button.classList.remove('active');
    })
    buttonGen4.classList.add('active');
}

const buttonGen5 = document.querySelector(".buttongen5");
buttonGen5.addEventListener('click', showOnlyGen5);

function showOnlyGen5() {
    generations.forEach(gen => {
        gen.style.display = "none";
    })
    gen5.style.display = "block";

    allGenButtons.forEach(button => {
        button.classList.remove('active');
    })
    buttonGen5.classList.add('active');
}

const buttonGen6 = document.querySelector(".buttongen6");
buttonGen6.addEventListener('click', showOnlyGen6);

function showOnlyGen6() {
    generations.forEach(gen => {
        gen.style.display = "none";
    })
    gen6.style.display = "block";

    allGenButtons.forEach(button => {
        button.classList.remove('active');
    })
    buttonGen6.classList.add('active');
}

const buttonGen7 = document.querySelector(".buttongen7");
buttonGen7.addEventListener('click', showOnlyGen7);

function showOnlyGen7() {
    generations.forEach(gen => {
        gen.style.display = "none";
    })
    gen7.style.display = "block";

    allGenButtons.forEach(button => {
        button.classList.remove('active');
    })
    buttonGen7.classList.add('active');
}

const buttonGen8 = document.querySelector(".buttongen8");
buttonGen8.addEventListener('click', showOnlyGen8);

function showOnlyGen8() {
    generations.forEach(gen => {
        gen.style.display = "none";
    })
    gen8.style.display = "block";

    allGenButtons.forEach(button => {
        button.classList.remove('active');
    })
    buttonGen8.classList.add('active');
}

const buttonAllGens = document.querySelector('.buttonallgens');
buttonAllGens.addEventListener('click', showAllGens);

function showAllGens() {
    generations.forEach (gen => {
        gen.style.display = "block";
    })

    allGenButtons.forEach(button => {
        button.classList.remove('active');
    })
    buttonAllGens.classList.add('active');
}