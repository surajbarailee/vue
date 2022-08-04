const data = {
    message: 'Hello!',
    longMessage: 'Hello! World!',
}

const handler = {
    set(target, key, value) {
        if (key === 'message') {
            target.longMessage = value + 'World'
        }
        target.messaage = value
    }
}

const proxy = new Proxy(data, handler);
proxy.message = 'Hello!@#'
console.log(proxy.longMessage)