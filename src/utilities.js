export function wordScore(word) {
    return word.length < 3 ? 0 : word.length - 2
}
