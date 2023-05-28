
export const chartService = {
    getAvgPricePerLabel,
    getToyCountByLabel
}

function getAvgPricePerLabel(toys) {
    const pricesByLabel = toys.reduce((acc, toy) => {
        if (toy.labels.length) {
            toy.labels.forEach((label) => {
                if (acc[label]) {
                    acc[label].price += toy.price
                } else {
                    acc[label] = {
                        count: 0,
                        price: toy.price,
                    }
                }
                acc[label].count++
            })
        }
        return acc
    }, {})

    const avgPricePerLabel = []
    for (const label in pricesByLabel) {
        avgPricePerLabel.push(pricesByLabel[label].price / pricesByLabel[label].count).toFixed(0)
    }

    const res = {
        labels: Object.keys(pricesByLabel),
        values: avgPricePerLabel
    }
    return res
}

function getToyCountByLabel(toys) {
    const toyCountByLabel = toys.reduce((acc, toy) => {
        if (toy.labels.length) {
            toy.labels.forEach(label => {
                if (!acc[label]) acc[label] = {
                    count: 0,
                    inStock: 0,
                    // perc:
                }
                if (toy.inStock) acc[label].inStock++
                acc[label].count++
            })
        }
        return acc
    }, {})

    const percentageValues = []
    for (const label in toyCountByLabel) {
        toyCountByLabel[label].percentage = toyCountByLabel[label].inStock / toyCountByLabel[label].count * 100
        percentageValues.push(toyCountByLabel[label].percentage)
    }
    const res = {
        labels: Object.keys(toyCountByLabel),
        values: percentageValues
    }
    return res
}