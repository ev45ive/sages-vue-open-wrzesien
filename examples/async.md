
```js
// UI Tasks
$0.onkeydown = e => console.log(e.target.value)

console.log(1)

// Macrotask Queue:
setTimeout(()=>console.log(2),0)

// Microtask Queue:
Promise.resolve(3).then(console.log)

console.log(4)

now = Date.now()

while (now + 5_000 > Date.now()) {}

console.log(5)

// 1
// 4
// 5
// 3

// keyup: ala ma kota

// 2
```

## The Loop
https://www.youtube.com/watch?v=cCOL7MC4Pl0&ab_channel=JSConf