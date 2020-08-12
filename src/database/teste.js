const database = require('./db')
const createProffy = require('./createProffy')

database.then(async (db) => {
    //inserir dados
    proffyValue = {
        name: "joao vitor",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "61 3358974",
        bio: "Artes",
        
    }

    classValue = {
        subject: 1, 
        cost: "500,00", 
        //proffy id vira pelo banco de dados

    }

    classScheduleValue = [
        {
            weekday: 1, 
            time_from: 720, 
            time_to: 1220
        },
        {
            weekday: 0, 
            time_from: 520, 
            time_to: 1220
        }
    ]

   // await createProffy(db, {proffyValue, classValue, classScheduleValue} )
    
    //consultar dados inseridos

    //todos os proffys
    const selectProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectProffys);

    //consultar classes de determinado professor
    //e trazer os seus dados
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys);

    //consultar class_schedule
    const selectClassesSchedule = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    //console.log(selectClassesSchedule);



})