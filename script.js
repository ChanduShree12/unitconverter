const dtrbtn = document.getElementById("dtrbtn");
dtrbtn.addEventListener("click",function(){
    let dtrvalue = document.getElementById("dtrbtn").Value;
    let ruppee = parseFloat(dtrvalue)*85;
    document.getElementById("rupee").textcontent = 'the value of $(dtrvalue) in ruppee is Rs.(ruppee)
})