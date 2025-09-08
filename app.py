from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    """Renders the home page."""
    return render_template('index.html')

@app.route('/about')
def about():
    """Renders the about me page."""
    return render_template('about.html')

@app.route('/services')
def services():
    """Renders the services page."""
    return render_template('services.html')

if __name__ == '__main__':
    app.run(debug=True)