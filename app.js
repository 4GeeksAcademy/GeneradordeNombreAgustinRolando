let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let last = [".com", ".org"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let l = 0; l < noun.length; l++) {
      for (let o = 0; o < last.length; o++) {
        console.log(pronoun[i] + adj[j] + noun[l] + last[o]);
      }
    }
  }
}
