let names = [
    {firstname: 'Bruce', lastname: 'Wayne'},
    {firstname: 'Clark', lastname: 'Kent'}
]

const getFullNames = (names) => {
    return names.map(name => `${name.firstname} ${name.lastname}`)
}

console.log(getFullNames(names))