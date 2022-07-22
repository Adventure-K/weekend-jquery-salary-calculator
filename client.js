console.log('js');
$(document).ready(onReady);

function onReady() {
    console.log('DOM ready.');
    $('#submit').on('click', entable);
}

function entable() {
    // console.log('Submit pressed.')
    $('#warning').empty();
    let fName; let lName; let id; let title; let annualSalary;

    // Drop input values into js variables
    fName = $('#fNameIn').val();
    lName = $('#lNameIn').val();
    id = $('#idIn').val();
    title = $('#titleIn').val();
    annualSalary = $('#annualSalaryIn').val();

    // Blank field exclusions
    if (fName.length < 1) {
        $('#warning').append('All fields are required.');
        return false;
    }
    if (lName.length < 1) {
        $('#warning').append('All fields are required.');
        return false;
    }
    if (id.length < 1) {
        $('#warning').append('All fields are required.');
        return false;
    }
    if (title.length < 1) {
        $('#warning').append('All fields are required.');
        return false;
    }
    if (annualSalary.length < 1) {
        $('#warning').append('All fields are required.');
        return false;
    }

    // console.log(fName, lName, id, title, annualSalary);

    // Drop input data into the table
    $('#empTableBody').append(`
    <tr>
        <td>` + fName + `</td>
        <td>` + lName + `</td>
        <td>` + id + `</td>
        <td>` + title + `</td>
        <td>` + annualSalary + `</td>
    </tr> `);

    // Clear input fields
    $('#fNameIn').val('');
    $('#lNameIn').val('');
    $('#idIn').val('');
    $('#titleIn').val('');
    $('#annualSalaryIn').val('');

    // Call monthly cost calc function
    sumMonthly();
}

function sumMonthly() {
    
}