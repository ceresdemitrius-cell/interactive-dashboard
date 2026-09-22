document.getElementById("metric-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let input_value = document.getElementById("metric-value").value;
    let conversion = document.getElementById("conversion-type");
    let selected_index = conversion.selectedIndex;
    let conversion_type = conversion.options[selected_index].value;

    input_value = parseFloat(input_value);

    let result;
    let message;

    if (conversion_type === "inch to centimeter") {
        result = input_value * 2.54;
        message = input_value + " inches is " + result.toFixed(2) + " centimeters";
    } else if (conversion_type === "foot to centimeter") {
        result = input_value * 30.48;
        message = input_value + " feet is " + result.toFixed(2) + " centimeters";
    } else if (conversion_type === "yard to meter") {
        result = input_value * 0.91;
        message = input_value + " yards is " + result.toFixed(2) + " meters";
    } else if (conversion_type === "mile to kilometer") {
        result = input_value * 1.61;
        message = input_value + " miles is " + result.toFixed(2) + " kilometers";
    } else if (conversion_type === "centimeter to inch") {
        result = input_value * 0.39;
        message = input_value + " centimeters is " + result.toFixed(2) + " inches";
    } else if (conversion_type === "centimeter to foot") {
        result = input_value * 0.0328;
        message = input_value + " centimeters is " + result.toFixed(2) + " feet";
    } else if (conversion_type === "meter to yard") {
        result = input_value * 1.09;
        message = input_value + " meters is " + result.toFixed(2) + " yards";
    } else if (conversion_type === "kilometer to mile") {
        result = input_value * 0.62;
        message = input_value + " kilometers is " + result.toFixed(2) + " miles";
    } else {
        message = "Invalid conversion";
    }

    document.getElementById("conversion-result").innerHTML = message;
});