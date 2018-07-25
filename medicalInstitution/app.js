function eventLog(type)
{
    let date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth()+1; 
    let yyyy = date.getFullYear();
    let hh = date.getHours(); 
    let m = date.getMinutes();

    console.log('[ ' + dd + '.' + mm + '.' + yyyy + ' ' + hh + ':' + m + ' ] ' + type);
}
class Doctor {
    constructor (firstName, lastName, speciality) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.speciality = speciality;
        this.patients = []
        eventLog('Kreiran doktor "' + firstName + '"');
    }

    appointControl (patient, date, time, type) {
        let appointment = {'Date': date, 'Time': time, 'Type': type};
        patient.appointments.push(appointment)
    }
}

class Patient {
    constructor (firstName, lastName, jmbg, recordsId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jmbg = jmbg;
        this.recordsId = recordsId;
        this.appointments=[] 
        eventLog('Kreiran pacijent "' + firstName + '"');
    }

    chooseDoctor (doctor) {
        this.doctor = doctor;
        doctor.patients.push(this);
        eventLog('Pacijent "' + this.firstName + '" izabrao doktora "' + doctor.firstName + '"');
    }
    doTheControl (type,values) {
        let appointmentToRemove;
        for( let i = 0; i < this.appointments.length; i++)
        {
            const appointment = this.appointments[i];
            if( appointment.type == type )
            {
                appointmentToRemove = i;
            }
        }
        this.appointments.splice(appointmentToRemove,1);
        if(type == 'BP')
            eventLog('Dragan obavlja merenje krvnog pritiska, gornja vrednost je: '
                + values.upperValue + ', donja vrednost je: '
                + values.lowerValue + ', puls je: ' + 
                values.puls);
        if(type == 'SIB')
            eventLog('Dragan obavlja merenje secera u krvi, vrednost je: '
                + values.value + ', vreme zadnjeg obroka je: '
                + values.meal);
        if(type == 'CIB')
            eventLog('Dragan obavlja merenje nivoa holesterola u krvi, vrednost je: '
                + values.value + ', vreme zadnjeg obroka je: '
                + values.meal);
    }
}

let doc = new Doctor('Milan', 'Doca', 'Ko zna');

let pac = new Patient('Dragan', 'Pecar', '3123214', '123213214');

pac.chooseDoctor(doc);

doc.appointControl(pac, '02.05.2003', '12:00', 'SIB');

doc.appointControl(pac, '02.05.2003', '12:00', 'BP');

pac.doTheControl('SIB', {'value': '150', 'meal': '09:00'});

pac.doTheControl('BP', {'upperValue': '150', 'lowerValue': '100', 'puls': '120'});