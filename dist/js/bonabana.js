	var geos = [
		{ name: "Western Cape", geoid: "province-WC", active: true },
		{ name: "Northern Cape", geoid: "province-NC" },
		{ name: "Gauteng", geoid: "province-GT" },
		{ name: "North West", geoid: "province-NW" },
		{ name: "Limpopo", geoid: "province-LIM" },
		{ name: "Mpumalanga", geoid: "province-MP" },
		{ name: "KwaZulu-Natal", geoid: "province-KZN" },
		{ name: "Eastern Cape", geoid: "province-EC" },
		{ name: "Free State", geoid: "province-FS" },
	];

	var charts = [
		{ name: "School attendance", chartid: "children-school-school_attendance_distribution", charttype: "pie" },
		{ name: "Children under 18 by gender", chartid: "children-demographics-gender_distribution", charttype: "pie" },
		{ name: "Parents", chartid: "children-demographics-child_adult_distribution", charttype: "pie" },
		{ name: "Children 5 to 17 by school attendance", chartid: "children-school-school_attendance_distribution", charttype: "pie" },
		{ name: "17-year-olds by highest level of education", chartid: "children-school-education17_distribution", charttype: "column", scaled: true },
		{ name: "Employment of 15- to 17-year-olds", chartid: "child_households-type_of_dwelling_distribution", charttype: "pie" },
		{ name: "Households headed by children under 18 years old", chartid: "children-employment-employment_distribution", charttype: "pie" },
		{ name: "Head of child-headed household by gender", chartid: "child_households-head_of_household-gender_distribution", charttype: "pie" },
		{ name: "Annual child-headed household income", chartid: "child_households-annual_income_distribution", charttype: "pie" },
		{ name: "Size of household by age of household head", chartid: "child_households-household_size_distribution", charttype: "grouped_column", scaled: true },
	];

	var geo_template = Handlebars.compile($("#geography_select_template").html());
	$("#geos").html(geo_template({ geos: geos }));

	var pie_template = Handlebars.compile($("#wazichildren_pie_graph").html());
	// var final_html = pie_template(test);
	// $("#test").html(final_html);

	$(".geo").on("click", function() {
		var final_html = [];
		load_geo($(this).attr("data-geoid"));
		$(".geo-item").removeClass("active");
		$(this).parent().addClass("active");
		// var sender = this;
		// charts.forEach(function(chart) {
		// 	var data = {
		// 		title: chart.name,
		// 		geoid: $(sender).attr("data-geoid"),
		// 		chartid: chart.chartid,
		// 		charttype: chart.charttype,
		// 		scaled: chart.scaled,
		// 	}
		// 	final_html.push(pie_template(data));
			
		// });
		// $("#charts").html(final_html.join());
	});

	var load_geo = function(geoid) {
		var final_html = [];
		charts.forEach(function(chart) {
			var data = {
				title: chart.name,
				geoid: geoid,
				chartid: chart.chartid,
				charttype: chart.charttype,
				scaled: chart.scaled,
			}
			final_html.push(pie_template(data));
			
		});
		$("#charts").html(final_html.join());
	}

$(function() {
	load_geo("province-WC");
});