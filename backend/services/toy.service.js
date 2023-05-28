const fs = require('fs')
var toys = require('../data/toy.json')

function query(filterBy = {}) {
    let toysToDisplay = toys
    const parsedInStock = (filterBy.inStock !== undefined && filterBy.inStock !== '') ? JSON.parse(filterBy.inStock) : undefined
    if (filterBy.txt) {
        const regExp = new RegExp(filterBy.txt, 'i')
        toysToDisplay = toysToDisplay.filter(toy => regExp.test(toy.name))
    }
    if (parsedInStock) {
        toysToDisplay = toysToDisplay.filter(toy => toy.inStock === parsedInStock)
    }

    // if (filterBy.maxPrice) {
    //     toysToDisplay = toysToDisplay.filter(toy => toy.price <= filterBy.maxPrice)
    // }

    return Promise.resolve(toysToDisplay)
}

function get(toyId) {
    const toy = toys.find(toy => toy._id === toyId)
    if (!toy) return Promise.reject('toy not found!')
    return Promise.resolve(toy)
}

function remove(toyId) {
    const idx = toys.findIndex(toy => toy._id === toyId)
    if (idx === -1) return Promise.reject('No Such toy')
    const toy = toys[idx]
    toys.splice(idx, 1)
    return _savetoysToFile()

}

function save(toy) {
    if (toy._id) {
        const toyToUpdate = toys.find(currtoy => currtoy._id === toy._id)
        console.log('toyToUpdate', toyToUpdate)
        if (!toyToUpdate) return Promise.reject('Not your toy')
        toyToUpdate.name = toy.name
        toyToUpdate.price = toy.price
        // toyToUpdate.inStock = toy.inStock
        // toyToUpdate.labels = [...toy.labels]
    } else {
        toy._id = _makeId()
        toys.push(toy)
    }

    return _savetoysToFile().then(() => toy)
    // return Promise.resolve(toy)
}

function _makeId(length = 5) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function _savetoysToFile() {
    return new Promise((resolve, reject) => {

        const toysStr = JSON.stringify(toys, null, 2)
        fs.writeFile('data/toy.json', toysStr, (err) => {
            if (err) {
                return console.log(err);
            }
            console.log('The file was saved!');
            resolve()
        });
    })
}

module.exports = {
    query,
    get,
    remove,
    save
}