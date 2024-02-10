
$(document).ready(function () {
    // Function to calculate the total cost
    function calculateTotal(event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Get the values from the input fields
        var hours = parseFloat($("#hours").val());
        var hourlyRate = parseFloat($("#hourlyRate").val().substring(1)); // Remove "$" and convert to a number

        // Validate if the entered hours is a positive number
        if (isNaN(hours) || hours < 0) {
            alert("Please enter a valid positive number for hours.");
            return;
        }

        // Calculate the total cost
        var total = hours * hourlyRate;

        // Display the total in the output paragraph
        $("#total").text("Total Cost: $" + total.toFixed(2));
    }

    // Attach submit event to the form
    $("#calculatorForm").submit(calculateTotal);
});
