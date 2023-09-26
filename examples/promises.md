```js

function echo(msg){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
           resolve(msg)
        },2_000)
    })
    
}

// echo('Ala  ', wynik1 => {
//     echo(wynik1+' ma ', wynik2 => {
//         echo(wynik2 + 'kota', msg =>  {
//              console.log('A',msg)
//         } )
//     })
// })

p = echo('Ala')
p2 = p.then(res => res + ' ma ')
p3 = p2.then(res => echo(res + ' kota'))

p3.then(console.log) 



// Promise {<pending>}
// Ala ma  kota

```

## Promise all,allSettled,any

```js

p2 = echo('Ala')
.then(res => res + ' ma ')

p3A = p2.then(res => echo(res + ' kota'))
p3B = p2.then(res => echo(res + ' psa'))

Promise.all([p3A,p3B]).then(console.log) 
 
// Promise {<pending>}
/* (2) ['Ala ma  kota', 'Ala ma  psa'] */

```

## Promise errors / reject

```js

function echo(msg, err){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
           err? reject(err) : resolve(msg)
        },2_000)
    })
    
}

p2 = echo('Ala','Ups...')
    .then(res => res + ' ma ')
    .catch(err => echo('Nikt nie ma '))

p3A = p2.then(res => echo(res + ' kota'))
p3B = p2.then(res => echo(res + ' psa'))

Promise.all([p3A,p3B]).then(console.log) 
 
// Promise {<pending>}
{/* (2) ['Nikt nie ma  kota', 'Nikt nie ma  psa'] */}

```