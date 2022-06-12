import React from 'react'
import '../Styles/Meme.css'
// import memesData from '../memesData';

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  })

  const [allMemeImage, setAllMemeImage] = React.useState([])

  // React.useState(() => {
  //   fetch("https://api.imgflip.com/get_memes")
  //     .then(res => res.json())
  //     .then(data => setAllMemeImage(data.data.memes))
  // }, [])
  React.useEffect(() => {
    async function getMemes() {
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setAllMemeImage(data.data.memes)
    }
    getMemes()
}, [])

  function getMemeImage() {
    // const memesArray = allMemeImage.data.memes;
    const randomNum = Math.floor(Math.random() * allMemeImage.length)
    const url = allMemeImage[randomNum].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
    

    // const url = memesArray[randomNum].url;
    // console.log(url);  
  }
  function handleChange(event) {
    const { name, value } = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main>
      <div className='form'>
        <input
          type="text"
          className="form-ip"
          placeholder="Top-Text"
          name='topText'
          value={meme.topText}
          onChange={handleChange}
        />

        <input
          type="text"
          className="form-ip"
          placeholder="Bottom-Text"
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange}
        />

        <button
          className='form-btn'
          onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>

      <div className='meme'>
        <img src={meme.randomImage} className="meme-img" />
        <h2 className='meme-text top'>{meme.topText}</h2>
        <h2 className='meme-text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  )
}

export default Meme