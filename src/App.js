import './App.css'
import {Component} from 'react'
import ButtonTab from './components/ButtonTab'
import Image from './components/Image'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here

class App extends Component {
  state = {
    activeTabId: languageGreetingsList[0].id,
  }

  getFilteredImage = () => {
    const {activeTabId} = this.state
    const filteredImage = languageGreetingsList.filter(
      eachLanguageImage => eachLanguageImage.id === activeTabId,
    )

    return filteredImage
  }

  onClickButton = value => {
    this.setState({
      activeTabId: value,
    })
  }

  render() {
    const {activeTabId} = this.state
    const filteredImage = this.getFilteredImage()
    console.log(filteredImage)
    return (
      <div className="container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="tab-container">
          {languageGreetingsList.map(eachLanguage => (
            <ButtonTab
              text={eachLanguage}
              changeImage={this.onClickButton}
              key={eachLanguage.id}
              isActive={activeTabId === eachLanguage.id}
            />
          ))}
        </ul>

        {filteredImage.map(eachImage => (
          <Image key={eachImage.id} each={eachImage} />
        ))}
      </div>
    )
  }
}

export default App
