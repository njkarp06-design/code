class AnagramChecker:

    def __init__(self):
        with open("words.txt", "r") as f:
            self.words = set(word.strip().lower() for word in f if word.strip())

    def is_valid_word(self, word):
        return word.lower() in self.words

    def is_anagram(self, word1, word2):
        return sorted(word1.lower()) == sorted(word2.lower())

    def get_anagrams(self, word):
        anagrams = []
        for w in self.words:
            if self.is_anagram(word, w) and w.lower() != word.lower():
                anagrams.append(w)
        return anagrams
