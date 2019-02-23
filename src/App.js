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
            <article className="Viewer Viewer--source">
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
          <section className="Translations">
            {translations.map(({ lang, text }, index) => {
              return (
                <article key={index} className="Viewer Viewer--result">
                  <h2 className="Viewer-title"> {lang.toUpperCase()}</h2>
                  <textarea
                    value={text}
                    className="Viewer-input"
                    name="result"
                    readOnly
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
          <br />
          <a
            className="App-link"
            href="https://www.npmjs.com/package/qtranslatex-extractor"
            target="_blank"
            rel="noopener noreferrer"
          >
            (Using QTranslate Extractor NPM JS Package)
          </a>
        </footer>
      </div>
    )
  }
}

export default App
