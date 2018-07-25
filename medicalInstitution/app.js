function eventLog(type)
{
    let date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth()+1; 
    let yyyy = date.getFullYear();
    let hh = date.getHours(); 
    let m = date.getMinutes();

    console.log(`[ ${dd}.${mm}.${yyyy} ${hh}:${m} ] ${type}`);
}
class Doctor {
    constructor (firstName, lastName, speciality) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.speciality = speciality;
        this.patients = []
        eventLog(`Kreiran doktor "${firstName}"`);
    }

    addPatient (patient) {
        this.patients.push(patient);
    }
}
class Appointment {
    constructor (date, time, type) {
        this.date = date;
        this.time = time;
        this.type = type;
    }
    preformBPExamination (patient) {
        const upperValue = Math.floor(Math.random() * (200 - 100) + 100);
        const lowerValue = Math.floor(Math.random() * (100 - 50) + 50);
        const puls = Math.floor(Math.random() * (80 - 50) + 50);
        const log = `${patient.firstName} obavlja merenje krvnog pritiska, gornja vrednost je: 
                        ${upperValue}, donja vrednost je: 
                        ${lowerValue}, puls je: 
                        ${puls}`;
        eventLog(log);
    }
    preformSIBExamination (patient) {
        const sugarInBlood = Math.floor(Math.random() * (200 - 100) + 100);
        const day = Math.floor(Math.random() * (30 - 1) + 1);
        const month = Math.floor(Math.random() * (12 - 1) + 1);
        const date = `${day}.${month}.2018`;
        const log = `${patient.firstName} obavlja merenje secera u krvi, vrednost je: 
                        ${sugarInBlood}, vreme zadnjeg obroka je: 
                        ${date}`;
        eventLog(log);
    }
    preformCIBExamination (patient) {
        const chloresterolInBlood = Math.floor(Math.random() * (200 - 100) + 100);
        const day = Math.floor(Math.random() * (30 - 1) + 1);
        const month = Math.floor(Math.random() * (12 - 1) + 1);
        const date = `${day}.${month}.2018`;
        const log = `${patient.firstName} obavlja merenje nivoa holesterola u krvi, vrednost je: 
                        ${chloresterolInBlood}, vreme zadnjeg obroka je: 
                        ${date}`;
        eventLog(log);
    }
}
class Patient {
    constructor (firstName, lastName, jmbg) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jmbg = jmbg;
        this.appointments = [];
        eventLog(`Kreiran pacijent "${firstName}"`);
    }

    chooseDoctor (doctor) {
        this.doctor = doctor;
        doctor.addPatient(this);
        eventLog(`Pacijent "${this.firstName}" izabrao doktora "${doctor.firstName}"`);
    }

    appointControl (date, time, type) {
        const appointment = new Appointment(date, time, type);
        this.appointments.push(appointment)
    }

    performExamination (type) {
        const appointment = this.appointments.filter(appointment => appointment.type === type)[0]
        this.appointments = this.appointments.filter(appointment => appointment.type !== type)
        console.log(appointment)
        console.log(this.appointments);
        if(type === 'BP')
            appointment.preformBPExamination(this);
        if(type === 'SIB')
            appointment.preformSIBExamination(this);
        if(type === 'CIB')
            appointment.preformCIBExamination(this);
    }
}

let doc = new Doctor('Milan', 'Doca', 'Ko zna');

let pac = new Patient('Dragan', 'Pecar', '3123214');

pac.chooseDoctor(doc);

pac.appointControl('02.05.2003', '12:00', 'SIB');
console.log("123");
pac.appointControl('02.05.2003', '12:00', 'BP');
console.log("123");
pac.performExamination('SIB');

pac.performExamination('BP');