function displayAlert() {
    const firstName = document.getElementById('First Name').value;
    const lastName = document.getElementById('Last Name').value;
    const phoneNumber = document.getElementById('Phone Number').value;
    const emailId = document.getElementById('Email ID').value;

    // Fixing the string interpolation
    alert(`First Name: ${firstName}\nLast Name: ${lastName}\nPhone Number: ${phoneNumber}\nEmail ID: ${emailId}`);
}
