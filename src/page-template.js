// template for what team.html will look like

function pgTemp (data) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>${title}</h1>
    <h2>${location}</h2>
    <h3>${bio}</h3>
    <h4>${linkedin}</h4>
    <h5>${github}</h5>

</body>
</html>`
}

module.exports = genHtml;
