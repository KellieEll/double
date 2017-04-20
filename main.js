var results,
	number1;
//This is called a 'global variable' bc the variables will affect elements throughout the entire document. //

$(document).ready(function () {
	/*This is an object used to store many things.*/


	/*Cannot have spaces in these variable names.*/
	/* semicolons ends a thought. Commas mean another thought is coming.*/

	$("#submit").on("click", function (e) {
		e.preventDefault();
		console.log("button click works");
		/*var operation = $("input[name='operation']:checked").val();*/
		number1 = parseFloat($("#anyNumber").val());
		console.log("this is the input", number1);

		results = multiply(number1);
		console.log("return number", results);

		$(".results").text(results);

		// $(".results").text(writeText(sum));

		/*$(".btn").click(function () {
			var userAmount = parseFloat($(".budget").val());
			var userCity = $("#citiesSelector").val();
			var userCityRent = averageRents[userCity];

			$(".results").text(writeText(userAmount, userCity, userCityRent))

		});*/

		function multiply(number1) {

			return number1 * 2;

		};



		function numberWithCommas(x) {
			x = x.toString();
			var pattern = /(-?\d+)(\d{3})/;
			while (pattern.test(x))
				x = x.replace(pattern, "$1,$2");
			return x;
		}
	})

})
