/*
Sheridan IMM 2025
Web Application Development A1
Lina (Do Young) Lee
*/

// PART 1: hospital data structure

const hospital = 
{
    name: "Sheridan General",
    patient: [
        {
            patientID: 5432,
            fullName: "Lina Lee",
            dateOfBirth: "1999-07-18",
            symptoms: [
                "dizziness",
                "headache",
                "nausea"
            ]
        },
        {
            patientID: 4829,
            fullName: "Anthony Baltazar",
            dateOfBirth: "1999-09-05",
            symptoms: [
                "tinnitus",
                "knee pain",
                "swelling"
            ]
        },
        {
            patientID: 1283,
            fullName: "Louis Gilbertson",
            dateOfBirth: "1988-06-18",
            symptoms: [
                "shortness of breath",
                "fatigue",
                "shoulder pain",
                "vomiting"
            ]
        }
    ]
};

// PART 2: showPatients function

function showPatients(hospital) {

    let hName = hospital.name;
    let patient = hospital.patient;
    let patientData = `<h1>${hName}</h1>\n`;

    patient.forEach((p) => {
      patientData += 
      `<h2>${p.fullName}, ${p.dateOfBirth}</h2>\n` +
      `<ul>\n`;

      p.symptoms.forEach((s) => {
        patientData += `\t<li>${s}</li>\n`
      });

      patientData += `</ul>\n\n`;
    })


    return patientData;
};

console.log(showPatients(hospital));

// PART 3: getPatient function

function getPatient(patientArray){

    let patientIDs = [];
    patientArray.forEach((e) => {
      patientIDs.push(e.patientID);
    })

    return patientIDs[Math.floor(Math.random()*patientIDs.length)]
};

console.log(getPatient(hospital.patient));