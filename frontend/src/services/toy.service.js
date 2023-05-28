
// import { storageService } from './async-storage.service.js'
// import { utilService } from './util.service.js'
// import { userService } from './user.service.js'
import { httpService } from './http.service.js'
// const STORAGE_KEY = 'toyDB'
// _createToys()
const BASE_URL = 'toy/'

export const toyService = {
    query,
    getById,
    save,
    remove,
    getDefaultFilter,
    getEmptyToy,
}


function query(filterBy = {}) {
    return httpService.get(BASE_URL, filterBy)
    // return storageService.query(STORAGE_KEY)
}
function getById(toyId) {
    console.log('toyId', toyId)
    return httpService.get(BASE_URL + toyId)
    // return storageService.get(STORAGE_KEY, toyId)
}
function remove(toyId) {
    // return Promise.reject('Not now!')
    return httpService.delete(BASE_URL + toyId)
    // return storageService.remove(STORAGE_KEY, toyId)
}
function save(toy) {
    const method = (toy._id) ? 'put' : 'post'
    return httpService[method](BASE_URL, toy)
    // return httpService.put(BASE_URL, toy)
    // return storageService.put(STORAGE_KEY, toy)

    // when switching to backend - remove the next line
    // return storageService.post(STORAGE_KEY, toy)
}


function getEmptyToy() {
    return {
        name: '',
        price: 0,
        labels: ['Doll', 'Battery Powered', 'Baby'],
        createdAt: Date.now(),
        inStock: true,
    }
}

// function _createToys() {
//     return storageService.query(STORAGE_KEY)
//         .then((toys) => {
//             // console.log('toys', toys)
//             if (!toys || !toys.length) {
//                 toys = [{
//                     _id: 't101',
//                     name: 'Talking Doll',
//                     price: 123,
//                     labels: ['Doll', 'Battery Powered', 'Baby'],
//                     createdAt: 1631031801011,
//                     inStock: true,
//                 },
//                 {
//                     _id: 't102',
//                     name: 'Talking Doll',
//                     price: 123,
//                     labels: ['Doll', 'Battery Powered', 'Baby'],
//                     createdAt: 1631031801011,
//                     inStock: false,
//                 }
//                 ]
//                 console.log('toys', toys)
//                 localStorage.setItem(STORAGE_KEY, JSON.stringify(toys))
//             }
//             return toys
//         })
//         .catch(err => 'Could not create toys')

// }

function getDefaultFilter() {
    return { txt: '', inStock: '' }
}



