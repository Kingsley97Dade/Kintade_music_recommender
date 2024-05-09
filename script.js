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

// Function to handle form submission for liking a song
async function handleLikeForm(event) {
  event.preventDefault();
  const songInput = document.getElementById('songInput').value.trim();
  if (songInput !== '') {
    try {
      const response = await fetch('/like', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ song: songInput })
      });
      if (response.ok) {
        console.log('Song liked successfully');
        document.getElementById('songInput').value = '';
        await updateRecommendedSongs();
      } else {
        console.error('Error liking song:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
}

// Function to update the list of recommended songs
async function updateRecommendedSongs() {
  try {
    const response = await fetch('/recommendations');
    if (response.ok) {
      const data = await response.json();
      const recommendedList = document.getElementById('recommendedList');
      recommendedList.innerHTML = ''; // Clear previous recommendations
      data.recommendations.forEach(song => {
        const listItem = document.createElement('li');
        listItem.textContent = song;
        recommendedList.appendChild(listItem);
      });
    } else {
      console.error('Error fetching recommendations:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Event listener for submitting the like form
document.getElementById('likeForm').addEventListener('submit', handleLikeForm);

// Initial function call to fetch and display recommended songs on page load
window.onload = async function() {
  await updateRecommendedSongs();
};

// Function to handle navigation to GitHub repository
function navigateToRepository() {
  window.location.href = 'https://github.com/Kingsley97Dade/Kintade_music_recommender';
}

// Event listener for GitHub Repository button click
document.getElementById('githubBtn').addEventListener('click', navigateToRepository);

// Function to handle navigation to specific feature
function navigateToFeature(featureId) {
  const element = document.getElementById(featureId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Event listeners for feature navigation buttons
document.getElementById('feature1Btn').addEventListener('click', () => navigateToFeature('feature1'));
document.getElementById('feature2Btn').addEventListener('click', () => navigateToFeature('feature2'));
document.getElementById('feature3Btn').addEventListener('click', () => navigateToFeature('feature3'));
