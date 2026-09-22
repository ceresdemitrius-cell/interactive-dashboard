Interactive Productivity Dashboard

This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.

TODO: Future Enhancements

## Weekly Task Goals

The weekly task goal calculator calculates a user's weekly task target by multiplying their daily task goal by five workdays and then adding any bonus tasks they enter.

[ ] Add a metric conversion tool.

[ ] Integrate a task list with array storage.

[ ] Add JavaScript logic for a live clock.

- [x] Add a weekly task goal calculator

## Imperial/Metric Converter

This application includes an Imperial/Metric Converter that allows users to convert measurements between Imperial and Metric units. The converter supports inches, feet, yards, miles, centimeters, meters, and kilometers.

### Logic and Pseudocode

```text
BEGIN

    INPUT value
    INPUT conversion

    IF conversion = "inch to centimeter" THEN
        SET result = value * 2.54
        DISPLAY result

    ELSE IF conversion = "foot to centimeter" THEN
        SET result = value * 30.48
        DISPLAY result

    ELSE IF conversion = "yard to meter" THEN
        SET result = value * 0.91
        DISPLAY result

    ELSE IF conversion = "mile to kilometer" THEN
        SET result = value * 1.61
        DISPLAY result

    ELSE IF conversion = "centimeter to inch" THEN
        SET result = value * 0.39
        DISPLAY result

    ELSE IF conversion = "centimeter to foot" THEN
        SET result = value * 0.0328
        DISPLAY result

    ELSE IF conversion = "meter to yard" THEN
        SET result = value * 1.09
        DISPLAY result

    ELSE IF conversion = "kilometer to mile" THEN
        SET result = value * 0.62
        DISPLAY result

    ELSE
        DISPLAY "Invalid conversion"

END
```


