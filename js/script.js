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
    resultNumber = resultNumber.replaceAll("ctg", "1/tg");
    resultNumber = resultNumber.replaceAll("tg", "Math.tan");
    resultNumber = resultNumber.replaceAll("^", "**");
    resultNumber = eval(resultNumber);
    $(".result").text(resultNumber);
})

$(".enableFormulsSpan").click(() => {
    const textBtnAdd = $(event.target)[0].textContent;
    const textBefore = $(".inputFormuls").val();
    const textAfter = textBefore + textBtnAdd;
    console.log(textAfter)
    $(".inputFormuls").val(textAfter);
})