import React, { Component } from "react"
import qtranslatexExtractor from "qtranslatex-extractor"
import "./App.css"

class App extends Component {
  state = {
    content: "",
    translations: []
  }

  handleChange = ({ target: { value: content } }) => {
    const newState = { content }
    const translations = qtranslatexExtractor(content)
    newState.translations =
      translations && translations.length > 0 ? translations : []
    this.setState(newState)
  }

  render() {
    const { content, translations } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1>QTranslate X Extractor Online</h1>
        </header>
        <main>
          {/* Input */}
          <section>
            <article className="Viewer">
              <h2 className="Viewer-title">
                Paste your QTranslate Content here:
              </h2>
              <textarea
                className="Viewer-input"
                name="source"
                value={content}
                onChange={this.handleChange}
              />
            </article>
          </section>

          {/* Results */}
          <section>
            {translations.map(({ lang, text }, index) => {
              return (
                <article key={index} className="Viewer">
                  <h2 className="Viewer-title"> {lang}:</h2>
                  <textarea
                    value={text}
                    className="Viewer-input"
                    name="result"
                  />
                </article>
              )
            })}
          </section>
        </main>
        <footer>
          <a
            className="App-link"
            href="https://sejas.es"
            target="_blank"
            rel="noopener noreferrer"
          >
            Developed with ♥ by Antonio Sejas
          </a>
        </footer>
      </div>
    )
  }
}

export default App
