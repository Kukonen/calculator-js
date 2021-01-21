let text = ""

$(".helpImg").click(() => {
    $(".enableFormulsBlock").toggle();
});

$(".inputFormuls").on('input keyup', () => {
    text = $(".inputFormuls").val();
})

$(".calculateBtn").click(() => {
    let resultNumber = text.replaceAll("sqrt", "Math.sqrt");
    resultNumber = resultNumber.replaceAll("π", "Math.PI");
    resultNumber = resultNumber.replaceAll("cos", "Math.cos");
    resultNumber = resultNumber.replaceAll("sin", "Math.sin");
    resultNumber = resultNumber.replaceAll("tg", "Math.tan");
    resultNumber = resultNumber.replaceAll("ctg", "Math.tan2");
    resultNumber = resultNumber.replaceAll("^", "**");
    resultNumber = eval(resultNumber);
    $(".result").text(resultNumber);
})