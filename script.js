const catsData = [
    {
        emotionTags: ["cute"],
        image: "cute.jpg",
        alt: "A cute archie",
    },
    {
        emotionTags: ["cute", "silly"],
        image: "cute1.jpg",
        alt: "A cute tutu also silly",
    },
    {
        emotionTags: ["cute", "sajiao"],
        image: "cute2.jpg",
        alt: "A cute archie again",
    },
    {
        emotionTags: ["cute"],
        image: "cute3.jpg",
        alt: "A tutu in a caomei house",
    },
    {
        emotionTags: ["cute", "silly"],
        image: "cute4.jpg",
        alt: "An archie bei zhualian",
    },
    {
        emotionTags: ["lazy", "relaxed"],
        image: "lazy.jpg",
        alt: "An archie lying",
    },
    {
        emotionTags: ["lazy", "pretty"],
        image: "lazy1.jpg",
        alt: "A tutu lying",
    },
    {
        emotionTags: ["lazy", "sleepy"],
        image: "lazy2.jpg",
        alt: "A tutu lying sleeply",
    },
    {
        emotionTags: ["lazy"],
        image: "lazy3.jpg",
        alt: "A tutu lying again",
    },
    {
        emotionTags: ["pretty"],
        image: "pretty.jpg",
        alt: "An archie pretty",
    },
    {
        emotionTags: ["pretty", "cute"],
        image: "pretty1.jpg",
        alt: "A tutu pretty",
    },
    {
        emotionTags: ["sajiao", "relaxed"],
        image: "sajiao.jpg",
        alt: "A cat sajiao",
    },
    {
        emotionTags: ["sajiao"],
        image: "sajiao1.jpg",
        alt: "A cat sajiao again",
    },
    {
        emotionTags: ["sajiao", "lazy"],
        image: "sajiao2.jpg",
        alt: "A cat sajiao three",
    },
    {
        emotionTags: ["sajiao", "relaxed"],
        image: "sajiao3.jpg",
        alt: "A cat sajiao four",
    },
    {
        emotionTags: ["silly"],
        image: "silly.jpg",
        alt: "A silly tutu",
    },
    {
        emotionTags: ["silly"],
        image: "silly1.jpg",
        alt: "A silly tutu again",
    },
    {
        emotionTags: ["silly", "relaxed"],
        image: "silly2.jpg",
        alt: "A silly mengde",
    },
    {
        emotionTags: ["silly"],
        image: "silly3.jpg",
        alt: "A silly mengde",
    },
    {
        emotionTags: ["sleepy", "cute"],
        image: "sleepy.jpg",
        alt: "A cat looking sleepy",
    },
    {
        emotionTags: ["sleepy", "lazy"],
        isRandom: true,
        image: "sleepy1.jpg",
        alt: "A cat looking sleepy",
    },
    {
        emotionTags: ["sleepy"],
        isRandom: true,
        image: "sleepy2.jpg",
        alt: "A cat looking sleepy",
    },

]


const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const memeModalInner = document.getElementById('meme-modal-inner')
const memeModal = document.getElementById('meme-modal')
const memeModalCloseBtn = document.getElementById('meme-modal-close-btn')

emotionRadios.addEventListener('change', highlightCheckedOption)

getImageBtn.addEventListener('click', renderCat)

memeModalCloseBtn.addEventListener('click', closeModal)

function closeModal(){
    memeModal.style.display = 'none'
}

function highlightCheckedOption(e){
    const radios = document.getElementsByClassName('radio')
    for (let radio of radios){
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function getMatchingCatsArray(){     
    if(document.querySelector('input[type="radio"]:checked')){
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        
        const matchingCatsArray = catsData.filter(function(cat){

                return cat.emotionTags.includes(selectedEmotion)
           
        })
        return matchingCatsArray 
    }  
}

function getSingleCatObject(){
    const catsArray = getMatchingCatsArray()
    
    if(catsArray.length === 1){
        return catsArray[0]
    }
    else{
        const randomNumber = Math.floor(Math.random() * catsArray.length)
        return catsArray[randomNumber]
    }
}

function renderCat(){
    const catObject = getSingleCatObject()
    memeModalInner.innerHTML =  `
        <img 
        class="cat-img" 
        src="./images/${catObject.image}"
        alt="${catObject.alt}"
        >
        `
    memeModal.style.display = 'flex'
}

function getEmotionsArray(cats){
    const emotionsArray = []    
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            if (!emotionsArray.includes(emotion)){
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}

function renderEmotionsRadios(cats){
        
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
            type="radio"
            id="${emotion}"
            value="${emotion}"
            name="emotions"
            >
        </div>`
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)




