function foo(words) {
    const ana = {};

    words.forEach(word => {
        const sorted = word.split('').sort().join('');

        if (ana[sorted]) {
            ana[sorted].push(word);
        } else {
            ana[sorted] = [word];
        }
    });
   

    return Object.values(ana);
}


const input = ["bat", "tap", "cat", "tab", "pat"];
const output = foo(input);

console.log(output);