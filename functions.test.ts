const {shuffleArray} = require('./utils')

const array1=[1,2,3,4,5]
const array2=['sun','moon','star']
const array3=[]

describe('shuffleArray should', () => {
    // CODE HERE

    test('return an array', ()=>{

        expect(Array.isArray(shuffleArray(array1))).toBe(true)
        expect(Array.isArray(shuffleArray(array2))).toBe(true)
        expect(Array.isArray(shuffleArray(array3))).toBe(true)

    })

    test('returns an array of the same length as the argument sent in',()=>{

        expect(shuffleArray(array1)).toHaveLength(array1.length)
        expect(shuffleArray(array2)).toHaveLength(array1.length)
        expect(shuffleArray(array3)).toHaveLength(array1.length)

        
    })
})