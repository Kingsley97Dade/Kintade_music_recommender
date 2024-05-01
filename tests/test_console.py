import unittest
from recommendation import get_recommendations

class TestRecommendation(unittest.TestCase):
    def test_recommendation(self):
        song_id = 1
        recommendations = get_recommendations(song_id)
        self.assertTrue(len(recommendations) > 0)

if __name__ == '__main__':
    unittest.main()
