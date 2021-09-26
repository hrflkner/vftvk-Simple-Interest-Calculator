// Display Compounding Period Dropdown Menu
$(function(){
  $('#interest-type').on('change', function() {
    if ( this.value == 'compound')
    {
      $(".compound-div").show();
    }
    else
    {
      $(".compound-div").hide();
    }
  });
});

// Compute Interest
function compute() {
    //Name p to avoid double reference to principal id tag
    //Otherwise the focus method won't execute properly
    var p = document.getElementById("principal").value;
    if (p <= 0) {
        alert("Please enter a positive value for the principal.");
            //Upon alert close, brings input back to principal
            principal.focus();
            return false;
    }
    var intType = document.getElementById("interest-type").value;
    var compoundPeriods = document.getElementById("comp").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);
    if (intType == "simple") {
        var interest = p * years * rate / 100;
    } else if (intType == "compound"){
        var interest = p * (1 + (rate / 100) / compoundPeriods)**(years * compoundPeriods) - p
    } else {
        var interest = ((p * Math.E**(rate/100 * years)) - p)
    }
    //Output Solution
    solution = "If you deposit <span class='highlight'>&#165;"+p+"</span>\<br\>at a <span class='highlight'>" + intType + "</span> interest rate of <span class='highlight'>"+rate+"%</span>,\<br\>you will receive an amount of <span class='highlight'>&#165;"+interest.toFixed(2)+"</span>\<br\>in the year <span class='highlight'>"+year+"</span>.\<br\>";  
    document.getElementById("result").innerHTML = solution;
    return solution;   
};
