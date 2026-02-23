import './App.css';

function App() {
    return (
        <div className="app">
            <header className="hero">
                <h1>Minions Content-assets</h1>
                <p className="tagline">Text posts, image briefs, video briefs, and generated asset references</p>
                <div className="cta-buttons">
                    <a href="https://content-assets.minions.help" className="btn btn-primary">
                        Documentation
                    </a>
                    <a href="https://github.com/mxn2020/minions-content-assets" className="btn btn-secondary">
                        GitHub
                    </a>
                </div>
            </header>

            <main className="content">
                <section className="features">
                    <div className="feature-card">
                        <h3>TypeScript SDK</h3>
                        <code>npm install @minions-content-assets/sdk</code>
                    </div>
                    <div className="feature-card">
                        <h3>Python SDK</h3>
                        <code>pip install minions-content-assets</code>
                    </div>
                    <div className="feature-card">
                        <h3>CLI Tool</h3>
                        <code>npm install -g @minions-content-assets/cli</code>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>
                    Built on the{' '}
                    <a href="https://github.com/mxn2020/minions">Minions SDK</a>
                </p>
            </footer>
        </div>
    );
}

export default App;
