const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Quimica",                
]

const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado",
]

function getSubject(subjectNumber){
    const possition = subjectNumber - 1
    return subjects[possition]
}

function convertHourToMinutes(time) {
    const [hour, minute] = time.split(":")
    return Number((hour * 60) + minute)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHourToMinutes
}