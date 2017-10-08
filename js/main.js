var App = {
    launch: function () {
        var earrings_cost = 0; rings_cost = 0; bangles_cost = 0; necklaces_cost = 0;
        total_cost = 0;
        var a = [8, 10, 6, 5];
        var prod_type = "earrings";
        var prod_quant = 2; currencey_value = "$";
        if (document.getElementById("inr").checked) {
            currencey_value = document.getElementById("inr").value;

        }
        for (var i = 0; i < 4; i++) {
            var x = "myNumber" + (i + 1);
            var prod_type = document.getElementById("mySelect" + (i + 1)).value;
            var prod_quant = parseInt(document.getElementById("qty" + (i + 1)).value);
            if (prod_quant >= 0) {
                switch (prod_type) {
                    case "earrings":
                        {
                            earrings_cost += App.computeCost(prod_quant ,a[i]);
                            total_cost += App.computeCost(prod_quant ,a[i]);
                            break;
                        }
                    case "bangles":
                        {
                            bangles_cost += App.computeCost(prod_quant ,a[i]);
                            total_cost += App.computeCost(prod_quant ,a[i]);
                            break;
                        }
                    case "diamond rings":
                        {
                            rings_cost += App.computeCost(prod_quant ,a[i]);
                            total_cost += App.computeCost(prod_quant ,a[i]);
                            break;
                        }
                    case "necklaces":
                        {
                            necklaces_cost += App.computeCost(prod_quant ,a[i]);
                            total_cost += App.computeCost(prod_quant ,a[i]);
                            break;
                        }
                    default:
                        break;

                }
            }
            else {
                alert("please enter values greater than or equal to zero for qty number " + (i + 1) + " and try again");
                earrings_cost = 0; necklaces_cost = 0;
                bangles_cost = 0; rings_cost = 0; total_cost = 0;
                break;
            }

        }
        if (currencey_value == "Rs.") {
            earrings_cost = 65 * earrings_cost; necklaces_cost = 65 * necklaces_cost;
            bangles_cost = 65 * bangles_cost; rings_cost = 65 * rings_cost; total_cost = 65 * total_cost;
        }
        document.getElementById("earrings-total").innerHTML = "Cost of The  Earrings:  " + currencey_value + earrings_cost;
        document.getElementById("necklaces-total").innerHTML = "Cost of The  Necklaces: " + currencey_value + necklaces_cost;
        document.getElementById("bangles-total").innerHTML = "Cost of The  Bangles: " + currencey_value + bangles_cost;
        document.getElementById("rings-total").innerHTML = "Cost of The EarRings: " + currencey_value + rings_cost;
        $("#Cart_Total").html("Final cost for all the items: " + currencey_value + total_cost);
    },
    computeCost : function(param1, param2){
        if(typeof param1 != "number" || typeof param2 != "number"){
            throw Error("Param1/Param2 should be number");
        }
        if(isNaN(param1) || isNaN(param1)){
            throw Error("Param1/Param2 should be number");
        }
        return param1 * param2;
    }
}
