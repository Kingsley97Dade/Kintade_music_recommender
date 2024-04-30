document.getElementById('likeForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  const songInput = document.getElementById('songInput').value.trim();
  if (songInput !== '') {
    await addLikedSong(songInput);
    await getRecommendedSongs();
    document.getElementById('songInput').value = '';
  }
});

async function addLikedSong(song) {
  // Simulate sending a request to the backend to add the liked song
  console.log(`Liked Song: ${song}`);
}

async function getRecommendedSongs() {
  // Simulate sending a request to the backend to get recommended songs
  const recommendedList = document.getElementById('recommendedList');
  recommendedList.innerHTML = ''; // Clear previous recommendations
  const recommendedSongs = ['Song 1', 'Song 2', 'Song 3']; // Example recommended songs
  recommendedSongs.forEach(song => {
    const listItem = document.createElement('li');
    listItem.textContent = song;
    recommendedList.appendChild(listItem);
  });
}
