

function doPost(e) {
    var sheet = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID").getSheetByName("Sheet1"); // Replace YOUR_SPREADSHEET_ID
    var params = JSON.parse(e.postData.contents);
    sheet.appendRow([params.email]); // 'email' should match the key you send in your POST request
    return ContentService.createTextOutput(JSON.stringify({status: 'success'})).setMimeType(ContentService.MimeType.JSON);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("email-form").addEventListener("submit", function(event) {
        event.preventDefault();
        var email = document.getElementById("email").value;
        // Sending a POST request to Google Apps Script
        fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
            method: "POST",
            mode: "no-cors", // Important
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email }),
        })
        .then((response) => {
            console.log("Email sent:", response);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    });
});