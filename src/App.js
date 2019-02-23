import React, { Component } from "react"
import qtranslatexExtractor from "qtranslatex-extractor"
import "./App.css"

class App extends Component {
  state = {
    content: "",
    translations: []
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ content: value })
    console.log(qtranslatexExtractor(value))
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
            {translations.map((lang, text) => {
              return (
                <article className="Viewer">
                  <h2 className="Viewer-title"> Your result:</h2>
                  <textarea
                    value={content}
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
