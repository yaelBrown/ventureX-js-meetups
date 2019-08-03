let musicians = []
musicians.push('diplo')
musicians[1] = 'skrillex'
musicians.push('hardwell')
musicians.push('dillionFrancis')
musicians.push('dyro')

console.log(musicians)

let hasDyro = musicians.find(musicians => musicians === 'dyro')

console.log(hasDyro)