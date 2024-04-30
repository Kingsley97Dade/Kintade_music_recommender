from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

liked_songs = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/like', methods=['POST'])
def like_song():
    song = request.form.get('song')
    if song:
        liked_songs.append(song)
        return jsonify({'message': 'Song liked successfully'}), 200
    else:
        return jsonify({'error': 'Song not provided'}), 400

@app.route('/recommendations')
def get_recommendations():
    # Simulate generating recommendations based on liked songs
    recommended_songs = ['Recommended Song 1', 'Recommended Song 2', 'Recommended Song 3']
    return jsonify({'recommendations': recommended_songs})

if __name__ == '__main__':
    app.run(debug=True)
