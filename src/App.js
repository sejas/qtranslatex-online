import React, { Component } from "react"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>QTranslate X Extractor Online</h1>
        </header>
        <main>
          {/* Input */}
          <section>
            <article class="Viewer">
              <h2 className="Viewer-title">
                Paste your QTranslate Content here:
              </h2>
              <textarea className="Viewer-input" name="source" />
            </article>
          </section>

          {/* Results */}
          <section>
            <article class="Viewer">
              <h2 className="Viewer-title"> Your result:</h2>
              <textarea className="Viewer-input" name="result" />
            </article>
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
