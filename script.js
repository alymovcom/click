//vars
let clicks = 0
let clicksPr = 0
jQuery(document).ready(function () {
    jQuery("#click").click(function () {
        clicks++
        clicksPr++
        $("#text").text(clicks)
    })
    setInterval(function () {
        let num = $("#text").text()
        if (num != clicks) {
            alert("Find cheats!")
            clicks = 0
            clicksPr = 0
            $("#text").text("0")
        }
        if (clicks != clicksPr) {
            alert("Find cheats!")
            clicks = 0
            clicksPr = 0
            $("#text").text("0")
        }
    }, 100)
})