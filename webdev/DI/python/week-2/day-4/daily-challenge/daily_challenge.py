import string
import re


class Text:
    def __init__(self, text):
        self.text = text

    def word_frequency(self, word):
        words = self.text.split()
        count = words.count(word)
        return count

    def most_common_word(self):
        words = self.text.split()
        freq = {}
        for w in words:
            if w in freq:
                freq[w] += 1
            else:
                freq[w] = 1
        return max(freq, key=freq.get)

    def unique_words(self):
        words = self.text.split()
        return list(set(words))

    @classmethod
    def from_file(cls, file_path):
        with open(file_path, "r") as f:
            content = f.read()
        return cls(content)


class TextModification(Text):
    def remove_punctuation(self):
        return self.text.translate(str.maketrans("", "", string.punctuation))

    def remove_stop_words(self):
        stop_words = {
            "i", "me", "my", "myself", "we", "our", "ours", "ourselves", "you",
            "your", "yours", "yourself", "yourselves", "he", "him", "his", "himself",
            "she", "her", "hers", "herself", "it", "its", "itself", "they", "them",
            "their", "theirs", "themselves", "what", "which", "who", "whom", "this",
            "that", "these", "those", "am", "is", "are", "was", "were", "be", "been",
            "being", "have", "has", "had", "having", "do", "does", "did", "doing",
            "a", "an", "the", "and", "but", "if", "or", "because", "as", "until",
            "while", "of", "at", "by", "for", "with", "about", "against", "between",
            "into", "through", "during", "before", "after", "above", "below", "to",
            "from", "up", "down", "in", "out", "on", "off", "over", "under", "then",
            "once", "here", "there", "when", "where", "why", "how", "all", "both",
            "each", "few", "more", "most", "other", "some", "such", "no", "nor",
            "not", "only", "own", "same", "so", "than", "too", "very", "s", "t",
            "can", "will", "just", "don", "should", "now"
        }
        words = self.text.split()
        filtered = [w for w in words if w.lower() not in stop_words]
        return " ".join(filtered)

    def remove_special_characters(self):
        return re.sub(r"[^a-zA-Z0-9\s]", "", self.text)


sample = "the quick brown fox jumps over the lazy dog the fox"

t = Text(sample)
print(t.word_frequency("the"))
print(t.word_frequency("fox"))
print(t.word_frequency("cat"))
print(t.most_common_word())
print(t.unique_words())

tm = TextModification("Hello, World! This is a test... with some special chars @#$%.")
print(tm.remove_punctuation())
print(tm.remove_stop_words())
print(tm.remove_special_characters())
