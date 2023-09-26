```js
function echo(msg, renderuj) {
  setTimeout(() => {
    renderuj(msg);
  }, 2_000);
}

echo("Ala ma kota", renderujA);
echo("Ala ma psa", (wynik) => renderujB(wynik));

function renderujA(msg) {
  console.log("A", msg);
}

function renderujB(msg) {
  console.log("B", msg);
}

// 2sec
// A Ala ma kota
// B Ala ma psa
```

```js
function echo(msg, renderuj) {
  setTimeout(() => {
    renderuj(msg);
  }, 2_000);
}

echo("Ala  ", (wynik1) => {
  echo(wynik1 + " ma ", (wynik2) => {
    echo(wynik2 + "kota", (msg) => {
      console.log("A", msg);
    });
  });
});

// 6 sec..
// A Ala   ma kota
```
