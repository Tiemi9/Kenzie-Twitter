const textArea = document.querySelector('textarea');
const tweetar = document.querySelector('button');
const feed = document.querySelector('.feed__tweetList');

function getTweet(event){
    event.preventDefault();
    
    const tweetTextarea = textArea.value;
    creatingTweet(tweetTextarea);    
}

tweetar.addEventListener('click', getTweet);

function creatingTweet(tweetText){

    let data = new Date();
    let hour = data.getHours();
    let minute = data.getMinutes();

    const tweet = {
        nome: "Cris",
        foto: "../assets/img/perfilPic2.png",
        usuario: "@estudantedakenzie",
        texto: tweetText,
        tempo: `${hour}:${minute}`
    }

    tweetTamplate(tweet);
}

function tweetTamplate(tweet){

    const {nome, foto, usuario, texto, tempo} = tweet;

    let li = document.createElement('li');
    li.classList.add("feed__tweet");

    let img = document.createElement('img');
    img.src = foto;
    img.classList.add("feed__perfilPicture");

    let div = document.createElement('div');
    div.classList.add("feed__content")

    let h3 = document.createElement('h3');
    h3.innerText = nome;
    
    let span = document.createElement('span');
    span.innerText = `. ${usuario} • ${tempo}`

    let p = document.createElement('p');
    p.innerText = texto;

    div.appendChild(h3)
    div.appendChild(span)
    div.appendChild(p)

    li.appendChild(img)
    li.appendChild(div)
    feed.appendChild(li)
}