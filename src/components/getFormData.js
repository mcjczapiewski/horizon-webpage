export function getFormData(form) {
    var elements = form.elements;
    var honeypot;

    var fields = Object.keys(elements)
        .filter(function (k) {
            if (elements[k].name === "honeypot") {
                honeypot = elements[k].value;
                return false;
            }
            return true;
        })
        .map(function (k) {
            if (
                elements[k].name !== undefined &&
                elements[k].name !== "submit"
            ) {
                return elements[k].name;
                // special case for Edge's html collection
            } else if (
                elements[k].length > 0 &&
                elements[k].name !== "submit"
            ) {
                return elements[k].item(0).name;
            }
            return null;
        })
        .filter(function (item, pos, self) {
            return self.indexOf(item) === pos && item;
        });

    var formData = {};
    fields.forEach(function (name) {
        var element = elements[name];

        // singular form elements just have one value
        formData[name] = element.value;

        // when our element has multiple items, get their values
        if (element.length) {
            var data = [];
            for (var i = 0; i < element.length; i++) {
                var item = element.item(i);
                if (item.checked || item.selected) {
                    data.push(item.value);
                }
            }
            formData[name] = data.join(", ");
        }
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

    // setFormData({ data: formData, honeypot: honeypot });
    return { data: formData, honeypot: honeypot };
}
