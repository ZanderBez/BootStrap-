let allStudents = [];

addStudent = () => {
    let nameSurname = document.getElementById("nameSurname").value
    let email = document.getElementById("email").value
    let number = +document.getElementById("number").value
    let subject = document.getElementById("subject").value
    let newsletterCheckbox = document.getElementById("checkbox").checked;

    if(newsletterCheckbox){
        
        allStudents.push({
            studentNameSurname: nameSurname,
            studentEmail: email,
            studentNumber: number,
            studentObject: subject
        });


        alert("Welcome " + nameSurname + "! Thank you for your interest in " + subject + "! We will contact you via email provided:  " + email + " or alternatively on the phone number: " + number);
    } else {
        alert("Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested " + nameSurname + "! If you want to sign up, you better CHECK that newsletter box!");
    }

    console.log(allStudents);

    document.getElementById("studentForm").reset();

}