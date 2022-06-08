const btn_getJokes = document.getElementById('btn_getJokes');
const list_jokes = document.getElementById('list_jokes');
const btn_clear = document.getElementById('btn_clear');

const jokes = async () => {
    try {
        const res = await fetch('https://api.chucknorris.io/jokes/random')
        const jokesChuck = await res.json();
        return render(jokesChuck);
    } catch (err) {console.log(err)}
}

const render = (chuck) => {
    const div = document.createElement('div');
    div.classList.add('list');
    div.append(chuck.value);

    const img = document.createElement('img');
    img.src = chuck.icon_url;
    list_jokes.append(div, img);
}

function clear () {
    list_jokes.innerHTML = '';
}

btn_getJokes.addEventListener('click', () => {
    jokes();
})

btn_clear.addEventListener('click', () => {
    clear();
})