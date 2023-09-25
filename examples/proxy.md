## Proxy

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy


```js

app
// Proxy(Object) {…}
//     [[Handler]]: Object
//     [[Target]]: Object
//     [[IsRevoked]]: false

proxyV2 = {
    _secret: '',
    get value(){
        console.log('start tracking "value" ')
        return this._secret
    },
    set value(s){
        console.log('trigger (rerender) "value" ')
        this._secret = s
    }
}
proxyV2.value = 123
// trigger (rerender) "value"
123

proxyV2.value
// start tracking "value"
123

```
