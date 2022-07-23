console.log('js');
$(document).ready(onReady);
let monthTotal = 0;

function onReady() {
    console.log('DOM ready.');
    $('#submit').on('click', entable);
    $('#empTableBody').on('click', 'button', removeEmp); //I was trying without success to get this to point at the delete button's class. I replaced it with "button" as a shot in the dark and it worked.
}

function entable() {
    console.log('Submit pressed.')
    $('#warning').empty();
    let fName; let lName; let eid; let title; let annualSalary;

    // Drop input values into js variables
    fName = $('#fNameIn').val();
    lName = $('#lNameIn').val();
    eid = $('#idIn').val();
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
    if (eid.length < 1) {
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
    <tr class="` + String(eid) + `">
        <td>` + fName + `</td>
        <td>` + lName + `</td>
        <td>` + eid + `</td>
        <td>` + title + `</td>
        <td class="${String(eid)}">` + annualSalary + `</td>
        <td> <button class="${String(eid)}">Delete</button> </td>
    </tr> `);

    // Clear input fields
    // $('#fNameIn').val('');
    // $('#lNameIn').val('');
    // $('#idIn').val('');
    // $('#titleIn').val('');
    // $('#annualSalaryIn').val('');

    // Call monthly cost calc function
    sumMonthly(annualSalary);
}

function sumMonthly(yearSal) {
    let oldTotal = $('#totalMonthly').text();
    // console.log(oldTotal);
    let monthSal = Math.ceil(yearSal / 12);
    let monthSum = Number(oldTotal) + Number(monthSal);
    $('#totalMonthly').text(monthSum);
    // $("h2").css("background-color", "blue");
    // $("h2").css("font-style", "italic");
    // console.log(Number(monthSum));
    if (Number(monthSum) > 19999) {
        // console.log(true)
        $('#totalMonthly').css("background-color", "red"); // Took lots of troubleshooting to get this working. Not sure how I fixed it. Had something to do with removing a colon after "background-color" that I thought I had added partway through troubleshooting.
    }
    monthTotal = monthSum;
    return monthTotal;
}

function removeEmp() {
    // console.log('delete pushed');
    let x = ($(this).attr('class'));
    // console.log(x);
    $('.' + x).remove();
    let oldTotal = $('#totalMonthly').text();
    let newTotal = oldTotal - monthTotal;
    $('#totalMonthly').text(newTotal);
    return monthTotal;

}