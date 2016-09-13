// d3.csv("data/data2.csv", function (data) {
	var experience_text = {
		"Managing Producer" : "10+ yrs",
		"Executive Producer" : "8+ yrs",
		"Chief Producer" : "5+ yrs",
		"Senior Producer" : "5+ yrs",
		"Producer" : "3+ yrs",
		"Associate Producer" : "3+ yrs",
		"Assistant Producer" : "1+ yrs",
		"Trainee Producer" : "0 yrs"
	};
	var step = 1,x1,y1,h1,h2,
			x2,y2,h2,w2,
			x3,y3,h3,w3,
			x4,y4,h4,w4,
			x5,y5,h5,w5,
			x6,y6,h6,w6;
	document.getElementById('explore').onclick = function() {
		document.getElementById('explore').style.display = "none"
		x1 = d3.select("#s_ep5_sp2").node().getBBox().x;
		y1 = d3.select("#s_ep5_sp2").node().getBBox().y;
		h1 = d3.select("#s_ep5_sp2").node().getBBox().height;
		w1= d3.select("#s_ep5_sp2").node().getBBox().width;
		d3.select("svg").transition()
			.duration(2000)
			.attr("viewBox", x1 +" " + y1 +" "+ w1 + " "+ h1)
			.attr("preserveAspectRatio","xMidYMid meet")
		// d3.select("#stage-hub").style("opacity", 0.1)
		// d3.select("#center-hub").style("opacity", 0.1)
		d3.select("#hub-2").style("opacity",0.1);
		d3.select("#hub-3").style("opacity",0.1);
		d3.select("#hub-4").style("opacity",0.1);
		d3.select("#s_mp").style("opacity",0.1);
		d3.select("#hole_4_").style("opacity",0.1);
		d3.selectAll(".others").style("opacity", 0.1);
		d3.selectAll("#hub-1 .desk")
			.filter(function (d,i){
				return this.id !== "desk5";
			})
			.style("opacity",0.1)
		d3.selectAll("#desk5 .tripod")
			.filter(function (d,i) {
				return this.id !== "tripod-table-2_3_"
			})
			.style("opacity",0.1)
		d3.selectAll("#desk5 .connection").style("opacity",0.1)
		d3.select("#s_ep5").style("opacity",0.1)
		d3.select("#s_ep5_sp2_emp2").style("opacity",0.1)
		d3.select("#s_ep5_sp2_emp1").style("opacity",0.1)

		d3.select("#transition_text")
			.append("text")
			.text('This is smallest component of the SPADE known as seat')

		$("#prev").addClass("disabled-button");
		document.getElementById('prev').style.display = "block"
		document.getElementById('next').style.display = "block"
		document.getElementById('explore-title').style.display = "none"
	}

	document.getElementById('next').onclick = function() {
		var cur_step = this.getAttribute("data-step");
		transition(cur_step);
		cur_step = (+cur_step) + 1;

		if (cur_step >= 1) {
			$(".left-arrow").removeClass("disabled-button");
		}

		if (cur_step === 8) {
			$(".right-arrow").addClass("disabled-button");
		}

		$(".left-arrow").attr("data-step", cur_step);
		$(".right-arrow").attr("data-step", cur_step);
	}
	document.getElementById('prev').onclick = function() {
		var cur_step = this.getAttribute("data-step");
		cur_step = (+cur_step) - 1;

		if (cur_step === 1) {
			$(".left-arrow").addClass("disabled-button");
		}

		if (cur_step <= 7) {
			$(".right-arrow").removeClass("disabled-button");
		}

		transition(cur_step.toString(), true);
		$(".left-arrow").attr("data-step", cur_step);
		$(".right-arrow").attr("data-step", cur_step);
		// step++;
	}

	function transition(step, reverse_mode=false){
		switch (step) {
			case "1":
				console.log("execute step 1");
				if (reverse_mode) {
					x1 = d3.select("#s_ep5_sp2").node().getBBox().x;
					y1 = d3.select("#s_ep5_sp2").node().getBBox().y;
					h1 = d3.select("#s_ep5_sp2").node().getBBox().height;
					w1= d3.select("#s_ep5_sp2").node().getBBox().width;
					d3.select("svg").transition()
						.duration(2000)
						.attr("viewBox", x1 +" " + y1 +" "+ w1 + " "+ h1)
						.attr("preserveAspectRatio","xMidYMid meet")
				} else {
					x2 = d3.select("#tripod-table-2_3_").node().getBBox().x;
					y2 = d3.select("#tripod-table-2_3_").node().getBBox().y;
					h2 = d3.select("#tripod-table-2_3_").node().getBBox().height;
					w2= d3.select("#tripod-table-2_3_").node().getBBox().width;
					d3.select("svg").transition()
						.duration(2000)
						.attr("viewBox", x2 +" " + y2 +" "+ w2 + " "+ h2)
						.attr("preserveAspectRatio","xMidYMid meet")
				}
				d3.select("#s_ep5_sp2_emp1").transition()
					.duration(2000)
					.style("opacity", reverse_mode ? 0.1 : 1)
				d3.select("#s_ep5_sp2_emp2").transition()
					.duration(2000)
					.delay(1000)
					.style("opacity", reverse_mode ? 0.1 : 1)
				d3.select("#hole_4_").transition()
					.duration(2000)
					.style("opacity", reverse_mode ? 0.1 : 1);

				// d3.select("#explore-title").style("display","none")
				document.getElementById('explore-title').style.display = "none"
				// debugger;

				d3.select("#transition_text ").select("text").remove()
				d3.select("#transition_text")
					.append("text")
					.text('There are 2 such seats available for junior positions')
			break;
			case "2":
				console.log("execute step 2");
				if (reverse_mode) {
					x2 = d3.select("#tripod-table-2_3_").node().getBBox().x;
					y2 = d3.select("#tripod-table-2_3_").node().getBBox().y;
					h2 = d3.select("#tripod-table-2_3_").node().getBBox().height;
					w2= d3.select("#tripod-table-2_3_").node().getBBox().width;
					d3.select("svg").transition()
						.duration(2000)
						.attr("viewBox", x2 +" " + y2 +" "+ w2 + " "+ h2)
						.attr("preserveAspectRatio","xMidYMid meet")
				} else {
					x3 = d3.select("#hub-1 #desk5").node().getBBox().x;
					y3 = d3.select("#hub-1 #desk5").node().getBBox().y;
					h3 = d3.select("#hub-1 #desk5").node().getBBox().height;
					w3= d3.select("#hub-1 #desk5").node().getBBox().width;
					d3.select("svg").transition()
						.duration(2000)
						.attr("viewBox", x3 +" " + y3 +" "+ w3 + " "+ h3)
						.attr("preserveAspectRatio","xMidYMid meet")
				}
				d3.select("#tripod-table-1_3_").transition()
					.duration(2000)
					.delay(1000)
					.style("opacity", reverse_mode ? 0.1 : 1)
				d3.select("#tripod-table-3_3_").transition()
					.duration(2000)
					.delay(1000)
					.style("opacity", reverse_mode ? 0.1 : 1)
				d3.select("#connection-1_3_").transition()
					.duration(2000)
					.delay(1000)
					.style("opacity", reverse_mode ? 0.1 : 1)
				d3.select("#connection-2_3_").transition()
					.duration(2000)
					.delay(1000)
					.style("opacity", reverse_mode ? 0.1 : 1)
				// d3.select("#s_ep5").transition()
				// 	.duration(2000)
				// 	.delay(1000)
				// 	.style("opacity", reverse_mode ? 1 : 0.1);

				d3.select("#transition_text ").select("text").remove()
				d3.select("#transition_text")
					.append("text")
					.text('There are 2 such seats available for junior positions')
			break;
			case "3":
				console.log("execute step 3");
				if (reverse_mode) {
					x3 = d3.select("#hub-1 #desk5").node().getBBox().x;
					y3 = d3.select("#hub-1 #desk5").node().getBBox().y;
					h3 = d3.select("#hub-1 #desk5").node().getBBox().height;
					w3= d3.select("#hub-1 #desk5").node().getBBox().width;
					d3.select("svg").transition()
						.duration(2000)
						.attr("viewBox", x3 +" " + y3 +" "+ w3 + " "+ h3)
						.attr("preserveAspectRatio","xMidYMid meet")
				} else {
					d3.select("svg").transition()
						.duration(2000)
						.attr("viewBox", x3 +" " + y3 +" "+ w3 + " "+ h3)
						.attr("preserveAspectRatio","xMidYMid meet")
				}

				d3.select("#s_ep5").transition()
					.duration(2000)
					.style("opacity", reverse_mode ? 0.1 : 1);

				d3.select("#transition_text ").select("text").remove()
				d3.select("#transition_text")
					.append("text")
					.text('There are 2 such seats available for junior positions')
			break;
			case "4":
				console.log("execute step 4");
				if (reverse_mode) {
					x3 = d3.select("#hub-1 #desk5").node().getBBox().x;
					y3 = d3.select("#hub-1 #desk5").node().getBBox().y;
					h3 = d3.select("#hub-1 #desk5").node().getBBox().height;
					w3= d3.select("#hub-1 #desk5").node().getBBox().width;
					d3.select("svg").transition()
						.duration(2000)
						.attr("viewBox", x3 +" " + y3 +" "+ w3 + " "+ h3)
						.attr("preserveAspectRatio","xMidYMid meet")
				} else {
					x4 = d3.select("#hub-1").node().getBBox().x;
					y4 = d3.select("#hub-1").node().getBBox().y;
					h4 = d3.select("#hub-1").node().getBBox().height;
					w4= d3.select("#hub-1").node().getBBox().width;
					d3.select("svg").transition()
						.duration(2000)
						.attr("viewBox", x4+" " + y4 +" "+ w4 + " "+ h4)
						.attr("preserveAspectRatio","xMidYMid meet")
				}

				d3.select("#s_mp").transition()
					.duration(2000)
					.style("opacity", reverse_mode ? 0.1 : 1)

				d3.select("#hub-1 #desk1").style("opacity", 0.1)
				d3.select("#hub-1 #desk2").style("opacity", 0.1)
				d3.select("#hub-1 #desk3").style("opacity", 0.1)
				d3.select("#hub-1 #desk4").style("opacity", 0.1)
				d3.select("#hub-1 #desk6").style("opacity", 0.1)

				d3.select("#transition_text ").select("text").remove()
				d3.select("#transition_text")
					.append("text")
					.text('There are 2 such seats available for junior positions')
			break;
			case "5":
				console.log("execute step 5");
				if (reverse_mode) {
					x4 = d3.select("#hub-1").node().getBBox().x;
					y4 = d3.select("#hub-1").node().getBBox().y;
					h4 = d3.select("#hub-1").node().getBBox().height;
					w4= d3.select("#hub-1").node().getBBox().width;
					d3.select("svg").transition()
						.duration(2000)
						.attr("viewBox", x4+" " + y4 +" "+ w4 + " "+ h4)
						.attr("preserveAspectRatio","xMidYMid meet")
				} else {
					d3.select("svg").transition()
						.duration(2000)
						.attr("viewBox", x4+" " + y4 +" "+ w4 + " "+ h4)
						.attr("preserveAspectRatio","xMidYMid meet")
				}

				d3.select("#hub-1 #desk6").transition()
					.duration(2000)
					.style("opacity", reverse_mode ? 0.1 : 1)
				d3.select("#hub-1 #desk1").transition()
					.duration(2000)
					.style("opacity", reverse_mode ? 0.1 : 1)
				d3.select("#hub-1 #desk2").transition()
					.duration(2000)
					.style("opacity", reverse_mode ? 0.1 : 1)
				d3.select("#hub-1 #desk3").transition()
					.duration(2000)
					.style("opacity", reverse_mode ? 0.1 : 1)
				d3.select("#hub-1 #desk4").transition()
					.duration(2000)
					.style("opacity", reverse_mode ? 0.1 : 1)

				d3.select("#transition_text ").select("text").remove()
				d3.select("#transition_text")
					.append("text")
					.text('There are 2 such seats available for junior positions')
			break;
			case "6":
				console.log("execute step 6");
				if (reverse_mode) {
					x4 = d3.select("#hub-1").node().getBBox().x;
					y4 = d3.select("#hub-1").node().getBBox().y;
					h4 = d3.select("#hub-1").node().getBBox().height;
					w4= d3.select("#hub-1").node().getBBox().width;
					d3.select("svg").transition()
						.duration(2000)
						.attr("viewBox", x4+" " + y4 +" "+ w4 + " "+ h4)
						.attr("preserveAspectRatio","xMidYMid meet")
				} else {
					x5 = d3.select("#hubs").node().getBBox().x;
					y5 = d3.select("#hubs").node().getBBox().y;
					h5 = d3.select("#hubs").node().getBBox().height;
					w5= d3.select("#hubs").node().getBBox().width;
					d3.select("svg").transition()
						.duration(2000)
						.attr("viewBox", x5+" " + y5 +" "+ w5 + " "+ h5)
						.attr("preserveAspectRatio","xMidYMid meet")
				}
				d3.select("#hub-2").transition()
					.duration(2000)
					.delay(1000)
					.style("opacity", reverse_mode ? 0.1 : 1)
				d3.select("#hub-3").transition()
					.duration(2000)
					.delay(1500)
					.style("opacity", reverse_mode ? 0.1 : 1)
				d3.select("#hub-4").transition()
					.duration(2000)
					.delay(2000)
					.style("opacity", reverse_mode ? 0.1 : 1)

				d3.select("#transition_text ").select("text").remove()
				d3.select("#transition_text")
					.append("text")
					.text('There are 2 such seats available for junior positions')
			break;
			case "7":
				console.log("execute step 7");
				if (reverse_mode) {
					x5 = d3.select("#hubs").node().getBBox().x;
					y5 = d3.select("#hubs").node().getBBox().y;
					h5 = d3.select("#hubs").node().getBBox().height;
					w5= d3.select("#hubs").node().getBBox().width;
					d3.select("svg").transition()
						.duration(2000)
						.attr("viewBox", x5+" " + y5 +" "+ w5 + " "+ h5)
						.attr("preserveAspectRatio","xMidYMid meet")
				} else {
					x6 = d3.select("#spade").node().getBBox().x;
					y6 = d3.select("#spade").node().getBBox().y;
					h6 = d3.select("#spade").node().getBBox().height;
					w6= d3.select("#spade").node().getBBox().width;
					d3.select("svg").transition()
						.duration(2000)
						.attr("viewBox", x6+" " + y6 +" "+ w6+ " "+ h6)
						.attr("preserveAspectRatio","xMidYMid meet")
				}

				d3.selectAll(".others").style("opacity", reverse_mode ? 0.1 : 0.1);

				d3.select("#transition_text ").select("text").remove()
				d3.select("#transition_text")
					.append("text")
					.text('There are 2 such seats available for junior positions')
				// document.getElementById('prev').style.display = "block"
				// document.getElementById('next').style.display = "none"
				// document.getElementById('link').style.display = "block"
			break;
		}
	}
// On mouse hover of Executive Producer of each Hub
	$(".ep").each(function (i,d){
		d.onmouseover = function(){
			d3.selectAll(".desk").style("opacity", 0.3);
			d3.selectAll(".hub-table").style("opacity",0.3)
			d3.selectAll(".others").style("opacity",0.1)
			this.parentNode.style.opacity = 1;
		}
	})
	// document.querySelectorAll(".ep").forEach(function(d) {
	// 	d.onmouseover = function(){
	// 		d3.selectAll(".desk").style("opacity", 0.3);
	// 		// d3.select("#center-hub").style("opacity",0.1);
	// 		// d3.select("#stage-hub").style("opacity",0.1)
	// 		d3.selectAll(".hub-table").style("opacity",0.3)
	// 		d3.selectAll(".others").style("opacity",0.3)
	// 		this.parentNode.style.opacity = 1;
	// 	}
	// })
// On mouse out of Executive Producer of each Hub
	$(".ep").each(function (i,d) {
		d.onmouseout = function(){
			d3.selectAll(".desk").style("opacity", 1);
			// d3.select("#center-hub").style("opacity",0.1);
			// d3.select("#stage-hub").style("opacity",0.1)
			d3.selectAll(".hub-table").style("opacity",1)
			d3.selectAll(".others").style("opacity",0.1)
		}
	})
	$(".hub-table").each(function (i,d) {
		d.onmouseover = function(){
			d3.selectAll(".hub").style("opacity", 0.3);
			this.parentNode.style.opacity = 1;
			// d3.select("#center-hub").style("opacity",0.3);
			// d3.select("#stage-hub").style("opacity",0.3)
			d3.selectAll(".others").style("opacity",0.1)
		}
	})
	$(".hub-table").each(function (i,d) {
		d.onmouseout = function(){
			d3.selectAll(".hub").style("opacity", 1);
			// d3.select("#center-hub").style("opacity",0.1);
			// d3.select("#stage-hub").style("opacity",0.1)
			d3.selectAll(".others").style("opacity",0.1)
		}
	})
	// document.getElementById("link").onclick = function() {
	// 	sideBar();
	// }
	var count =0
	// document.getElementById("filter-tab").onclick = function() {
	// 	$("#explore-tab").removeClass("active");
	// 	$("#filter-tab").addClass("active");
	// 	if (count <= 0){
	// 		console.log(count, "if")
	// 		// sideBar();
	// 		count++;
	// 	} else {
	// 		console.log(count, "else")
	// 		document.getElementById("spade-explore").style.display = "none";
	// 		document.getElementById("filters").style.display = "block";
	// 		count++;
	// 	}
	// }
	// document.getElementById("explore-tab").onclick = function() {
	// 	$("#filter-tab").removeClass("active");
	// 	$("#explore-tab").addClass("active");
	// 	document.getElementById("spade-explore").style.display = "block"
	// 	// document.getElementById("filters").style.display = "none"
	// };

	var filters,
		d,
		sidebar = document.getElementById("sidebar"),
		collapsable_filter = document.getElementById("filters_div");
	sideBar();

	function sideBar() {
		// document.getElementById("spade-explore").style.display = "none";
		filters = document.createElement("div")
			filters.id = "filters"
			filters.className ="filter-area"
			collapsable_filter.appendChild(filters);
		$.ajax({
			type: "GET",
			url: "http://139.59.31.17/reference_list",
			headers: {
				'Content-Type': 'application/json'
			},
			success: function (response) {
				if(response.success){
					console.log(response,"----------")
					d = response.data;
					var skills = d["skills"],
						toolset = d["toolset"],
						availability = d["availability"],
						seniority = d["seniority"],
						hub = d["hub"],
						desk = d["desk"],
						shifts = d["shifts"],
						hubs = ["Sourcing", "Production", "Assembling", "Distribution"],
						desks = [
							["Alerts", "Assignment", "Research", "Control", "Culture", "Support"],
							["Home Bureau", "Copy", "Design", "Multimedia", "Interactives", "Studio"],
							["Mobile", "Web", "ePrint", "Audio", "TV", "Shows"],
							["Seeding", "Engagement", "Growth", "Campaigns", "Events", "Ads"]
						],
						i,
						j;
					console.log(skills, toolset, availability, seniority, hub, desk, shifts);
					//shifts dropdown
					var shifts_div = "<div>" +
		      			'<div class="shift-options-collapsable">' +
				      		'<div class="shift-options-title">' + "Shifts" + '</div>' +
				      		'<div class="arrow-down"></div>' +
				      	'</div>' +
			      		'<div class="shift-options" style="display:none;">';
			      	shifts.unshift("All");
			      	for (i = 0; i < shifts.length; i++) {
						shifts_div += '<div style="position: relative;">';
						shifts_div += '<div class="shift-filter" value="' + shifts[i] + '">' + shifts[i] + '</div>';
						shifts_div += '<input type="checkbox" class="shifts" id="' + shifts[i] + '" name="" value="' + shifts[i] + '"><div class="toggle"><label for="' + shifts[i] + '"><i></i></label></div>';
						shifts_div += '</div>';
			      	}
			      	shifts_div += '</div>';

			      	// Hubs and desks selection
					var hub_desk_selection_div = "<div>";
					for (i = 0; i < hubs.length; i++) {
						hub_desk_selection_div += '<div>' +
			      			'<div class="hub-option-collapsable">' +
					      		'<div class="hub-option">' + hubs[i] + ' Hub</div>' +
					      		'<div class="arrow-down"></div>' +
					      	'</div>' +
				      		'<div class="hub-desk-options" style="display:none;">';
				      	for (j = 0; j < desks[i].length; j++) {
				      		hub_desk_selection_div += '<div class="hub-desk-option">' + desks[i][j] + '</div>';
				      	}
				      	hub_desk_selection_div += '</div></div>';
					}
					// Seniority Dropdown
					var seniority_selection_div = '<div class="searchable-filter-div">' +
						'<div class="filter-title">Seniority</div>' +
						// '<input type="text" id="seniority_search" class="filter-search" placeholder="Search Seniority"></input>' +
						'<div class="seniority-options">';
					for (i = 0; i < seniority.length; i++) {
						seniority_selection_div += '<div class="seniority-option" value="'+ seniority[i] +'">'+ seniority[i] + " (" + experience_text[seniority[i]] + ")" + '</div>';
					}
					seniority_selection_div +='</div>' +
					'</div>';

					//Skills Dropdown
					var skills_selection_div = '<div class="searchable-filter-div">' +
						'<div class="filter-title">Skills</div>' +
						'<input type="text" id="skill_search" class="filter-search" placeholder="Search Skills"></input>' +
						'<div class="skills-options">';
					for (i = 0; i < skills.length; i++) {
						skills_selection_div += '<div class="skills-option" value="'+ skills[i] +'">'+ skills[i]+'</div>';
					}
					skills_selection_div +='</div>' +
					'</div>';

					//Tools Dropdown
					var tools_selection_div = '<div class="searchable-filter-div">' +
						'<div class="filter-title">Toolset</div>' +
						'<input type="text" id="toolset_search" class="filter-search" placeholder="Search Toolset"></input>' +
						'<div class="toolset-options">';
					for (i = 0; i < toolset.length; i++) {
						tools_selection_div += '<div class="toolset-option" value="' + toolset[i] + '">' + toolset[i] + '</div>';
					}
					tools_selection_div +='</div>' +
					'</div>';

					//Available dropdown
		   			var available_dropdown = '<div style="position: relative;">' +
						'<div class="available-filter" value="' + "hiring" + '">' + "Hiring" + '</div>' +
						'<input type="checkbox" class="available" id="' + "hiring" + '" name="" value="' + "hiring" + '"><div class="toggle"><label for="' + "hiring" + '"><i></i></label></div>' +
						'</div>';

					filters.innerHTML = hub_desk_selection_div + seniority_selection_div + skills_selection_div + tools_selection_div + available_dropdown + shifts_div;
					// document.getElementById("filters").style.display = "block";
					$(".hub-option-collapsable").on("click", function () {
						$(".seniority-option").removeClass("active");
						$(".skills-option").removeClass("active");
						$(".toolset-option").removeClass("active");
						$("#hiring")[0].checked = false
						$(".shifts").attr("checked", null);
						if ($(this).parent().find(".hub-desk-options").css("display") === "none") {
							var hub_option = $(this).find(".hub-option");
							$(".hub-option").removeClass("active");
							hub_option.addClass("active");
							$(this).parent().find(".hub-desk-options").css("display", "block");
						} else {
							$(this).parent().find(".hub-desk-options").css("display", "none");
						}
					});
					$(".hub-desk-option").on("click", function () {
						$(".seniority-option").removeClass("active");
						$(".skills-option").removeClass("active");
						$(".toolset-option").removeClass("active");
						$("#hiring")[0].checked = false
						$(".shifts").attr("checked", null);
						if ($(this).hasClass("active")) {
							$(this).removeClass("active");
						} else {
							$(this).addClass("active");
						}
						filteredData();
					});
					$(".seniority-option").on("click", function () {
						if ($(this).hasClass("active")) {
							$(this).removeClass("active");
						} else {
							$(".seniority-option").removeClass("active");
							$(".hub-option").removeClass("active");
							$(".hub-desk-option").removeClass("active");
							$(".shifts").attr("checked", null);
							$("#hiring")[0].checked = false
							$(this).addClass("active");
						}
						filteredData();
						updateSkillsAndToolsetFilters("both");
					});
					$(".skills-option").on("click", function () {
						if ($(this).hasClass("active")) {
							$(this).removeClass("active");
						} else {
							$(".skills-option").removeClass("active");
							$(".hub-option").removeClass("active");
							$(".hub-desk-option").removeClass("active");
							$(".shifts").attr("checked", null);
							$("#hiring")[0].checked = false
							$(this).addClass("active");
						}
						filteredData();
						updateSkillsAndToolsetFilters("toolset");
					});
					$("#skill_search").on("keyup", function () {
						var value = $(this).val().toLowerCase();
						$(".skills-option").map(function (i, d) {
							if (d.getAttribute("value").toLowerCase().indexOf(value) === -1) {
								d.style.display = "none";
							} else {
								d.style.display = "block";
							}
						});
					});
					$(".toolset-option").on("click", function () {
						if ($(this).hasClass("active")) {
							$(this).removeClass("active");
						} else {
							$(".toolset-option").removeClass("active");
							$(".hub-option").removeClass("active");
							$(".hub-desk-option").removeClass("active");
							$(".shifts").attr("checked", null);
							$("#hiring")[0].checked = false
							$(this).addClass("active");
						}
						filteredData();
					});
					$("#toolset_search").on("keyup", function () {
						var value = $(this).val().toLowerCase();
						$(".toolset-option").map(function (i, d) {
							if (d.getAttribute("value").toLowerCase().indexOf(value) === -1) {
								d.style.display = "none";
							} else {
								d.style.display = "block";
							}
						});
					});
					// $(".available-filter").on("click", function () {
					// 	$(".hub-option").removeClass("active");
					// 	$(".hub-desk-option").removeClass("active");
					// 	$(".seniority-option").removeClass("active");
					// 	$(".skills-option").removeClass("active");
					// 	$(".toolset-option").removeClass("active");
					// 	$(".shift-filter").removeClass("active");
					// 	$(".available-filter").removeClass("active");
					// 	$(this).addClass("active");
					// 	filteredData();
					// });
					$(".shift-filter").on("click", function () {
						$(".hub-option").removeClass("active");
						$(".hub-desk-option").removeClass("active");
						$(".seniority-option").removeClass("active");
						$(".skills-option").removeClass("active");
						$(".toolset-option").removeClass("active");
						$(".shifts").attr("checked", null);
						$("#hiring")[0].checked = false
						$(this).addClass("active");
						filteredData();
					});
					$(".shift-options-collapsable").on("click", function () {
						if ($(this).parent().find(".shift-options").css("display") === "none") {
							$(this).parent().find(".shift-options").css("display", "block");
						} else {
							$(this).parent().find(".shift-options").css("display", "none");
						}
					});
					$("#hiring").on("change", function () {
						$(".hub-option").removeClass("active");
						$(".hub-desk-option").removeClass("active");
						$(".seniority-option").removeClass("active");
						$(".skills-option").removeClass("active");
						$(".toolset-option").removeClass("active");
						$(".shifts").attr("checked", null);
						filteredData();
					});
					$(".shifts").on("change", function () {
						$(".shifts[value!=" + this.value + "]").attr("checked", null);
						filteredData();
					});
				}
			},
			error: function (response) {
				console.log("ERROR : ", response);
			}
		});
	}
	var zoom;
	// zoom();
	function zoom() {
		zoom = d3.select("#svg")
		  .call(d3.behavior.zoom().scaleExtent([1, 10]).on("zoom", function () {
		  	// console.log(d3.event.translate,d3.event.scale )
		    d3.select("#spade").attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")")
		  }))
	}
// });
	var ele,ele1,str,n,
		e_x1 ,e_y1,e_w1,e_h1,
		e_x2 ,e_y2,e_w2,e_h2,
		e_x3 ,e_y3,e_w3,e_h3,
		e_x4 ,e_y4,e_w4,e_h4;
	$(".table").on("click", function () {
		$("#filter-tab").click();
		var id = $(this).parent().closest('g').attr("id");
		ele = $("#" + id).attr("class")
		ele1 = $("#" + id).parents();
		str = "" +id;
		s = str.includes("s_");
		p = str.includes("p_");
		a = str.includes("a_");
		d = str.includes("d_");
		console.log(s,p,a,d,str, "sssssssssssssss");
		if (s){
			e_x1 = d3.select("#hub-1").node().getBBox().x;
			e_y1 = d3.select("#hub-1").node().getBBox().y;
			e_h1 = d3.select("#hub-1").node().getBBox().height;
			e_w1 = d3.select("#hub-1").node().getBBox().width;
			d3.select("#svg").transition()
				.duration(2000)
				.attr("viewBox", e_x1 +" " + e_y1 +" "+ e_w1 + " "+ e_h1);
		} else if(p) {
			e_x2 = d3.select("#hub-2").node().getBBox().x;
			e_y2 = d3.select("#hub-2").node().getBBox().y;
			e_h2 = d3.select("#hub-2").node().getBBox().height;
			e_w2 = d3.select("#hub-2").node().getBBox().width;
			d3.select("#svg").transition()
				.duration(2000)
				.attr("viewBox", e_x2 +" " + e_y2 +" "+ e_w2 + " "+ e_h2);
		} else if(a) {
			e_x3 = d3.select("#hub-3").node().getBBox().x;
			e_y3 = d3.select("#hub-3").node().getBBox().y;
			e_h3 = d3.select("#hub-3").node().getBBox().height;
			e_w3 = d3.select("#hub-3").node().getBBox().width;
			d3.select("#svg").transition()
				.duration(2000)
				.attr("viewBox", e_x3 +" " + e_y3 +" "+ e_w3 + " "+ e_h3);
		} else if(d) {
			e_x4 = d3.select("#hub-4").node().getBBox().x;
			e_y4 = d3.select("#hub-4").node().getBBox().y;
			e_h4 = d3.select("#hub-4").node().getBBox().height;
			e_w4 = d3.select("#hub-4").node().getBBox().width;
			d3.select("#svg").transition()
				.duration(2000)
				.attr("viewBox", e_x4 +" " + e_y4 +" "+ e_w4 + " "+ e_h4);
		}
		showDescription(id);
		console.log(str,n,"---------------")
	})

	var other,o_x,o_y,o_w,o_h;
	$(".others .overlay-rect").each(function (i,d) {
		// console.log(d,"dddddd")
		d.onclick = function() {
			other = d.closest("g").id;
			console.log(other, "hey")
			console.log(d3.select("#"+other))
			o_x = d3.select("#" + other).node().getBBox().x;
			o_y = d3.select("#" + other).node().getBBox().y;
			o_w = d3.select("#" + other).node().getBBox().width;
			o_h = d3.select("#" + other).node().getBBox().height;
			d3.select("svg").transition()
				.duration(2000)
				.attr("viewBox", o_x +" " + o_y +" "+ o_w + " "+ o_h);
			d3.selectAll("#" + other).style("opacity",1)
			console.log(other, "hey")
			d3.select("#hubs").style("opacity",0.1)
		}
	})

	var info;
	function showDescription(id) {
		$.ajax({
			type: "GET",
			url: "http://cms.spadenewsroom.com/descriptions/"+id,
			headers: {
				'Content-Type': 'application/json'
			},
			success: function (response) {
				if(response.success){
					var data, info = document.getElementById("info-content")
					desc_data = response.description;
					filter_data = response.filter;
					// console.log(response,"dataaa")
					info.innerHTML = "";
					info.innerHTML = '<span> Slug : </span>' + filter_data["slug"] +
					'</br><span> Hub Description : </span>' + desc_data["hub_description"] +
					'</br><span> Desk Description : </span>' + desc_data["desk_description"] +
					'</br><span> Role Description : </span>' + desc_data["role_description"] +
					'</br><span> Persona Description : </span>' + desc_data["persona_description"] +
					'</br><span> Skills Tag : </span>' + filter_data["skills"] +
					'</br><span> Toolset : </span>' + filter_data["toolset"];
					document.getElementById("info-panel").style.display = "block"
				}
			},
			error: function (response) {
			console.log("ERROR : ", response);
			}
		});
	}
	$("#close").on("click", function (){
		document.getElementById("info-panel").style.display = "none"
	})
	var result,a;
	function filteredData (argument) {
		// var hubs_dom = $(".hub-option.active"),
		var hubs = "",
			desks_dom = $(".hub-desk-option.active"),
			desks = "",
			availability = $("#hiring")[0].checked ? "hiring" : "",
			shifts = $(".shifts:checked").val();
		// hubs_dom.map(function (i, d) {
		// 	hubs += d.innerHTML.split(" Hub")[0];
		// 	if (i < hubs_dom.length - 1) {
		// 		hubs += ",";
		// 	}
		// });
		desks_dom.map(function (i, d) {
			desks += d.innerHTML;
			if (i < desks_dom.length - 1) {
				desks += ",";
			}
		});
		shifts = shifts === "All" ? undefined : shifts;
		var data = {
			"filter" : {
				"hub": hubs,
			  	"desk": desks,
			  	"seniority": $(".seniority-option.active").text(),
			  	"shifts": shifts,
			  	"availability": availability,
			  	"skills": $(".skills-option.active").text(),
			  	"toolset": $(".toolset-option.active").text()
			}
		};
		var count_of_empty_values = 0,
			key;
		for (key in data.filter) {
			if (data.filter[key] === "") {
				count_of_empty_values++;
			}
		}
		if (count_of_empty_values === 7) {
			// make opacity normal for all the tables
			deHighlightAll();
			return;
		}
		$.ajax({
			type: "POST",
			url: "http://cms.spadenewsroom.com/filters/query",
			headers: {
				'Content-Type': 'application/json'
			},
			data: JSON.stringify(data),
			success: function (response) {
				console.log(response,"response")
				// make opacity normal for all the tables
				// $(".table").css("opacity", "0.3");
				deHighlightAll();
				if (response.success) {
					console.log(response,"respinse")
					result = response.message;
					var a,
						i;
					for(i = 0; i < result.length; i++) {
						console.log(result[i].seat_id);
						var elem = $("#" + result[i].seat_id),
						table = elem.find(".table");
						// debugger;
						elem.attr("data-og-opacity", 1);
						elem.attr("opacity", 1);
						// table.attr("data-bypass", "true");
						elem.attr('is_clicked', "yes");
						console.log(d3.select('#'+ result[i].seat_id)[0],"-----")
						// a = d3.select('#'+ result[i].seat_id)[0][0];
						// if (a) {
						// 	a = a.id;
						// 	// add opacity to elements to be highlighted
						// 	$($("#" + a).find(".table")[0]).css({fill: "red"});
						// 	// $($("#" + a).find(".table")[0]).css("opacity", "0.5");
						// }
					}
				}
			},
			error: function (response) {
				// $(".table").css("opacity", "0.3");
				console.log("ERROR : ", response);
			}
		});
	}
	// loadDropdowns();

	function updateSkillsAndToolsetFilters (update) {
		var data = {
			"filter" : {
				"hub": "",
			  	"desk": "",
			  	"seniority": $(".seniority-option.active").text(),
			  	"shifts": "",
			  	"availability": "",
			  	"skills": "",
			  	"toolset": ""
			}
		};
		if (update === "toolset") {
			data.filter.skills = $(".skills-option.active").text();
		}
		$.ajax({
			type: "POST",
			url: "http://cms.spadenewsroom.com/filters/query",
			headers: {
				'Content-Type': 'application/json'
			},
			data: JSON.stringify(data),
			success: function (response) {
				if (response.success) {
					result = response.message;
					var skills = [],
						toolset = [],
						temp,
						i;
					for (i = 0; i < result.length; i++) {
						if (update === "both") {
							temp = result[i].skills.split(",");
							for (j = 0; j < temp.length; j++) {
								if (skills.indexOf(temp[j]) === -1) {
									skills.push(temp[j]);
								}
							}
						}
						temp = result[i].toolset.split(",");
						for (j = 0; j < temp.length; j++) {
							if (toolset.indexOf(temp[j]) === -1) {
								toolset.push(temp[j]);
							}
						}
					}
					if (update === "both") {
						$(".skills-option").map(function (i, d) {
							if (skills.indexOf(d.getAttribute("value")) === -1) {
								d.style.opacity = "0.5";
								d.style.pointerEvents = "none";
							}
						});
					}
					$(".toolset-option").map(function (i, d) {
						if (toolset.indexOf(d.getAttribute("value")) === -1) {
							d.style.opacity = "0.5";
							d.style.pointerEvents = "none";
						}
					});
				}
			},
			error: function (response) {
				console.log("ERROR : ", response);
			}
		});
	}
	function deHighlightAll() {
		$("#hubs .table").each(function (i, e) {
			var elem = $(e),
			g = elem.closest("g"),
			og_opacity = g.attr("data-og-opacity");
			if (!og_opacity) {
				g.attr("data-og-opacity", elem.attr("opacity"));
			}
			if (g.attr("data-bypass") !== "true") {
				g.attr("opacity", 0.3);
				$(".connection").attr("opacity",0.3)
				$(".hole").attr("opacity",0.3)
			}
		});
	}


function highlightAll() {
$(".spade-cms-table").each(function (i, e) {
var elem = $(e);
if (elem.attr("data-bypass") !== "true") {
elem.attr("opacity", elem.attr("data-og-opacity"));
}
});
}
function markUsedSeats(array) {
if (array.length > 0) {
array.forEach(function (e) {
var elem = $("#" + e),
table = elem.children(".spade-cms-table");

table.attr("data-og-opacity", 1);
table.attr("opacity", 1);
table.attr("data-bypass", "true");
table.attr('is_clicked', "yes");
});
}
}

document.querySelector("#nav-toggle").addEventListener( "click", function() {
	var filter_main_div = $(".collapsable-filters-div");
	if (filter_main_div.css("left") === "-200px") {
		filter_main_div.css("left", "0px");
	} else {
		filter_main_div.css("left", "-200px");
	}
    this.classList.toggle("active");
});

// $(".loading-background").css("display", "none");

$(document).on("click", function () {
	$("#label_display").css("display", "none");
});