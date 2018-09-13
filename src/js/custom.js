// d3.csv("data/data2.csv", function (data) {
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
var height = d3.select("#display_area").node().getBoundingClientRect().height,
		width = d3.select("#display_area").node().getBoundingClientRect().width
		console.log(width, height);
var x = d3.select("#spade").node().getBBox().x,
	y = d3.select("#spade").node().getBBox().y,
	w = d3.select("#spade").node().getBBox().width,
	h = d3.select("#spade").node().getBBox().height;
d3.select("#svg")
		.attr("height", height)
		.attr("width", width)
		.attr("viewBox", x +" " + y +" "+ w + " "+ h);
d3.select("#Layer_1")
		.attr("height", height)
		.attr("width", width)
		.attr("viewBox", x +" " + y +" "+ w + " "+ h);
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

//Global state variables
var global_view = "default",
	filter_state = "closed";

// Adding hierarchy highlight functioality.
// On mouse hover of Executive Producer of each Hub
	$(".ep").on("mouseover",function (e) {
			$(".desk").css("opacity", 0.3);
			$(".hub-table").css("opacity",0.3);
			this.parentNode.style.opacity = 1;
	})
// On mouse out of Executive Producer of each Hub
	$(".ep").on("mouseout",function (e) {
			$(".desk").css("opacity", 1);
			$(".hub-table").css("opacity",1);
	});

// On mouseover of sp highlight the tripod.
	$(".sp").on("mouseover", function(e) {
		$(".tripod").css("opacity", 0.3);
		$(".connection").css("opacity", 0.3);
		$(".ep").css("opacity", 0.3);
		$(".hub-table").css("opacity",0.3);

		var elem = $(this),
			tripod = elem.parent();

		tripod.css("opacity", 1);
	});
// On mouseout of sp revert to og.
	$(".sp").on("mouseout", function(e) {
		$(".tripod").css("opacity", 1);
		$(".connection").css("opacity", 1);
		$(".ep").css("opacity", 1);
		$(".hub-table").css("opacity", 1);
	});

// On mouseover of junior highlight only that particular junior.
	$('.junior').on("mouseover", function (e) {
		$(".junior").css("opacity", 0.3);
		$(".sp").css("opacity", 0.3);
		$(".ep").css("opacity", 0.3);
		$(".hub-table").css("opacity", 0.3);
		$(".connection").css("opacity", 0.3);
		$(".hole").css("opacity", 0.3);

		$(this).css("opacity", 1);
	});

	$('.junior').on("mouseout", function () {
		$(".junior").css("opacity", 1);
		$(".sp").css("opacity", 1);
		$(".ep").css("opacity", 1);
		$(".hub-table").css("opacity", 1);
		$(".connection").css("opacity", 1);
		$(".hole").css("opacity", 1);
	});

var step = 1,x1,y1,h1,h2,
	x2,y2,h2,w2,
	x3,y3,h3,w3,
	x4,y4,h4,w4,
	x5,y5,h5,w5,
	x6,y6,h6,w6,
	desc_var;

	$('#explore').on("click", function() {
		var global_reset = $(".reset-icon-area").css("display"),
			filter_reset = $(".reset-filters").css("display");

		if (filter_state === "open") {
			$("#nav-toggle-cross").click();
		}

		if (global_reset === "block" || filter_reset === "inline-block") {
			resetAll();
			$('#explore').css("display", "none");
			$('#intro').css("display", "none");
			$('#desc-text').css("display", "block");
			$(".reset-icon-area").css("display", "block");
		} else {
			$('#explore').css("display", "none");
			$('#intro').css("display", "none");
			$('#desc-text').css("display", "block");
			$(".reset-icon-area").css("display", "block");
			$(".explore-tooltip").remove();
		}

		x1 = d3.select("#s_ep5_sp2").node().getBBox().x;
		y1 = d3.select("#s_ep5_sp2").node().getBBox().y;
		h1 = d3.select("#s_ep5_sp2").node().getBBox().height;
		w1= d3.select("#s_ep5_sp2").node().getBBox().width;
		d3.select("svg").transition()
			.duration(2000)
			.attr("viewBox", x1 +" " + y1 +" "+ w1 + " "+ h1)
			.attr("preserveAspectRatio","xMidYMid meet")

		$("#hub-2").css("opacity", 0.1);
		$("#hub-3").css("opacity", 0.1);
		$("#hub-4").css("opacity", 0.1);
		$("#s_mp").css("opacity", 0.1);
		$("#hole_4_").css("opacity", 0.1);
		$(".others").css("opacity", 0.1);

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

		$("#desk5 .connection").css("opacity", 0.1)
		$("#s_ep5").css("opacity", 0.1)
		$("#s_ep5_sp2_emp2").css("opacity", 0.1)
		$("#s_ep5_sp2_emp1").css("opacity", 0.1)

		desc_var = d3.select("#desc-text")
		desc_var.html("")
		desc_var.html('<div class="sub-heading">Workstation</div><p>A Workstation is the most basic component in the SPADE work/organisation structure. The one seen here, as will become clear in the next steps, is occupied by specialists with five or more years of experience, designated as Chief or Senior Producers.</p>')

		$("#prev").addClass("disabled-button");
		$('#prev').css("display", "block");
		$('#next').css("display", "block");
		$('#explore-title').css("display", "none");
		$("#svg").css("pointer-events", "none");

		var st = setTimeout(function () {
			attachTooltipEvents("1");
			clearTimeout(st);
		}, 2000);
		blockExplorePrevAndNext();
		var blockUnblockST = setTimeout(function () {
			unblockExplorePrevAndNext();
			clearTimeout(blockUnblockST);
		}, 2000);
		if ($(".reset-filters").css("display") === "inline-block") {
			$(".reset-filters").click();
		}
	});

	$('#next').on("click", function() {
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
	});
	$('#prev').on("click", function() {
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
	});

	function transition(step, reverse_mode){
		reverse_mode = reverse_mode === undefined ? false : reverse_mode;
		if ($(".reset-filters").css("display") === "inline-block") {
			$(".reset-filters").click();
		}
		$(".explore-tooltip").remove();
		blockExplorePrevAndNext();
		var blockUnblockST = setTimeout(function () {
			unblockExplorePrevAndNext();
			clearTimeout(blockUnblockST);
		}, 2000);
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
					var st = setTimeout(function () {
						attachTooltipEvents(step);
						clearTimeout(st);
					},2000);
					desc_var.html("")
					desc_var.html('<div class="sub-heading">Workstation</div><p>A Workstation is the most basic component in the SPADE work/organisation structure. The one seen here, as will become clear in the next steps, is occupied by specialists widthh five or more years of experience, designated as Chief or Senior Producers.</p>')
				} else {
					x2 = d3.select("#tripod-table-2_3_").node().getBBox().x;
					y2 = d3.select("#tripod-table-2_3_").node().getBBox().y;
					h2 = d3.select("#tripod-table-2_3_").node().getBBox().height;
					w2= d3.select("#tripod-table-2_3_").node().getBBox().width;
					d3.select("svg").transition()
						.duration(2000)
						.attr("viewBox", x2 +" " + y2 +" "+ w2 + " "+ h2)
						.attr("preserveAspectRatio","xMidYMid meet")
					$("#chair_214_").unbind("mouseover");
					$("#chair_214_").unbind("mouseout");
					$("#keyboard_19_").unbind("mouseover");
					$("#keyboard_19_").unbind("mouseout");
					$("#pc-screen_67_").unbind("mouseover");
					$("#pc-screen_67_").unbind("mouseout");
					desc_var.html("")
					desc_var.html('<div class="sub-heading">Tripod</div><p>Three workstations form a Tripod. The two outer workstations are occupied by beginners with at most three years of experience, designated Associate, Assistant or Trainee Producers.</p><p>Each tripod is hired, mentored and led by its Chief/Senior Producer. This person ensures that received assignments are clear to everyone and get done on time.</p><p>Tripod meetings are open, quick and easy because all that the three producers need to do is talk across the table.</p>')
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
				document.getElementById('explore-title').style.display = "none"
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
					desc_var.html("")
					desc_var.html('<div class="sub-heading">Tripod</div><p>Three workstations form a Tripod. The two outer workstations are occupied by beginners with at most three years of experience, designated Associate, Assistant or Trainee Producers.</p><p>Each tripod is hired, mentored and led by its Chief/Senior Producer. This person ensures that received assignments are clear to everyone and get done on time.</p><p>Tripod meetings are open, quick and easy because all that the three producers need to do is talk across the table.</p>')
				} else {
					x3 = d3.select("#hub-1 #desk5").node().getBBox().x;
					y3 = d3.select("#hub-1 #desk5").node().getBBox().y;
					h3 = d3.select("#hub-1 #desk5").node().getBBox().height;
					w3= d3.select("#hub-1 #desk5").node().getBBox().width;
					d3.select("svg").transition()
						.duration(2000)
						.attr("viewBox", x3 +" " + y3 +" "+ w3 + " "+ h3)
						.attr("preserveAspectRatio","xMidYMid meet")
					desc_var.html("")
					desc_var.html('<div class="sub-heading">Desk</div><p>Three tripods — and the quad-mounted vertical screens between them — form a Desk. Each tripod in a desk specialises in a particular sub-function.</p><p>The producers across each such desk bring in diverse skillsets and toolkits, but are all organised to collaborate towards a shared deliverable.</p>')
				}
				d3.select("#tripod-table-1_3_").transition()
					.duration(2000)
					.delay(1000)
					.style("opacity", reverse_mode ? 0.1 : 1)
				d3.select("#tripod-table-3_3_").transition()
					.duration(2000)
					.delay(2000)
					.style("opacity", reverse_mode ? 0.1 : 1)
				d3.select("#connection-1_3_").transition()
					.duration(2000)
					// .delay(1000)
					.style("opacity", reverse_mode ? 0.1 : 1)
				d3.select("#connection-2_3_").transition()
					.duration(2000)
					// .delay(1000)
					.style("opacity", reverse_mode ? 0.1 : 1)
				var st = setTimeout(function () {
					attachTooltipEvents(step);
					clearTimeout(st);
				},2000);
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
					var st = setTimeout(function () {
						attachTooltipEvents("2");
						clearTimeout(st);
					},2000);
					desc_var.html("")
					desc_var.html('<div class="sub-heading">Desk</div><p>Three tripods — and the quad-mounted vertical screens between them — form a Desk. Each tripod in a desk specialises in a particular sub-function.</p><p>The producers across each such desk bring in diverse skillsets and toolkits, but are all organised to collaborate towards a shared deliverable.</p>')
				} else {
					d3.select("svg").transition()
						.duration(2000)
						.attr("viewBox", x3 +" " + y3 +" "+ w3 + " "+ h3)
						.attr("preserveAspectRatio","xMidYMid meet")
					desc_var.html("")
					desc_var.html('<div class="sub-heading">Desk lead</div><p>Each chief/senior producer — and hence the whole desk — is hired, mentored and led by an Executive Producer, with at least eight years of experience. This person brings daily operational oversight, which includes allocating shifts, tasks, priorities, targets, experiments, and ensuring compliance with frameworks.</p><p>Desk meetings too are open, quick and easy because all that the chief/senior producers leading each tripod need to do is turn around.</p>')
				}
				d3.select("#s_ep5").transition()
					.duration(2000)
					.style("opacity", reverse_mode ? 0.1 : 1);
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
					desc_var.html("")
					desc_var.html('<div class="sub-heading">Desk lead</div><p>Each chief/senior producer — and hence the whole desk — is hired, mentored and led by an Executive Producer, with at least eight years of experience. This person brings daily operational oversight, which includes allocating shifts, tasks, priorities, targets, experiments, and ensuring compliance with frameworks.</p><p>Desk meetings too are open, quick and easy because all that the chief/senior producers leading each tripod need to do is turn around.</p>')
				} else {
					x4 = d3.select("#hub-1").node().getBBox().x;
					y4 = d3.select("#hub-1").node().getBBox().y;
					h4 = d3.select("#hub-1").node().getBBox().height;
					w4= d3.select("#hub-1").node().getBBox().width;
					d3.select("svg").transition()
						.duration(2000)
						.attr("viewBox", x4+" " + y4 +" "+ w4 + " "+ h4)
						.attr("preserveAspectRatio","xMidYMid meet")
					desc_var.html("")
					desc_var.html('<div class="sub-heading">Hub</div><p>Six desks form a Hub. Each desk in a hub is accountable for a distinct set of deliverables, which collectively complete a whole stage in the content supply chain.</p><p>Each desk is positioned next to others in the same or adjacent hub, basis its dependence on the others deliverables.</p>')
				}
				d3.select("#hub-1 #desk6").transition()
					.duration(2000)
					.delay(1000)
					.style("opacity", reverse_mode ? 0.1 : 1)
				d3.select("#hub-1 #desk1").transition()
					.duration(2000)
					.delay(1500)
					.style("opacity", reverse_mode ? 0.1 : 1)
				d3.select("#hub-1 #desk2").transition()
					.duration(2000)
					.delay(2000)
					.style("opacity", reverse_mode ? 0.1 : 1)
				d3.select("#hub-1 #desk3").transition()
					.duration(2000)
					.delay(2500)
					.style("opacity", reverse_mode ? 0.1 : 1)
				d3.select("#hub-1 #desk4").transition()
					.duration(2000)
					.delay(3000)
					.style("opacity", reverse_mode ? 0.1 : 1)
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
					desc_var.html("")
					desc_var.html('<div class="sub-heading">Hub</div><p>Six desks form a Hub. Each desk in a hub is accountable for a distinct set of deliverables, which collectively complete a whole stage in the content supply chain.</p><p>Each desk is positioned next to others in the same or adjacent hub, basis its dependence on the others deliverables.</p>')
				} else {
					d3.select("svg").transition()
						.duration(2000)
						.attr("viewBox", x4+" " + y4 +" "+ w4 + " "+ h4)
						.attr("preserveAspectRatio","xMidYMid meet")
					desc_var.html("")
					desc_var.html('<div class="sub-heading">Hub lead</div><p>Each Executive Producer — and hence the whole hub — is hired, mentored and led by a Managing or Deputy Managing Producer, with at least eight years of experience. This duo brings strategic oversight, which includes building the right team, communicating the vision, and ensuring access to resources and training.</p><p>Hub meetings too are open, quick and easy because all that the executive producers leading each desk need to do is turn around. That said, the central conference table does have room in/outside along it’s perimeter for larger discussions.</p>')
				}
				d3.select("#s_mp").transition()
					.duration(2000)
					.style("opacity", reverse_mode ? 0.1 : 1)
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
					desc_var.html("")
					desc_var.html('<div class="sub-heading">Hub lead</div><p>Each Executive Producer — and hence the whole hub — is hired, mentored and led by a Managing or Deputy Managing Producer, with at least eight years of experience. This duo brings strategic oversight, which includes building the right team, communicating the vision, and ensuring access to resources and training.</p><p>Hub meetings too are open, quick and easy because all that the executive producers leading each desk need to do is turn around. That said, the central conference table does have room in/outside along it’s perimeter for larger discussions.</p>')
				} else {
					x5 = d3.select("#hubs").node().getBBox().x;
					y5 = d3.select("#hubs").node().getBBox().y;
					h5 = d3.select("#hubs").node().getBBox().height;
					w5= d3.select("#hubs").node().getBBox().width;
					d3.select("svg").transition()
						.duration(2000)
						.attr("viewBox", x5+" " + y5 +" "+ w5 + " "+ h5)
						.attr("preserveAspectRatio","xMidYMid meet")
					desc_var.html("")
					desc_var.html('<div class="sub-heading">Newsroom</div><p>Four hubs — one each for Sourcing, Production, Assembling and Distribution — complete the omnimedia content supply chain.</p><p>Use the filters menu to your left, for a functional and hierarchical drilldown of hubs, desks and tripods.</p><p>Use the label mode toggle to push the drawing back and focus on the positions of various desks and their relationships with each other.</p>')
					$("#svg").css("pointer-events", "none");
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
					desc_var.html("")
					desc_var.html('<div class="sub-heading">Newsroom</div><p>Four hubs - multi-screen Sourcing, Production, Assembling, Distribution (SPADe) - complete the omnimedia content supply chain. </p>')
				} else {
					x6 = d3.select("#spade").node().getBBox().x;
					y6 = d3.select("#spade").node().getBBox().y;
					h6 = d3.select("#spade").node().getBBox().height;
					w6= d3.select("#spade").node().getBBox().width;
					d3.select("svg").transition()
						.duration(2000)
						.attr("viewBox", x6+" " + y6 +" "+ w6+ " "+ h6)
						.attr("preserveAspectRatio","xMidYMid meet")
					desc_var.html("")
					desc_var.html('<div class="sub-heading">explore workflow</div><p>Use the filters menu to your left, for a functional and hierarchical drilldown of hubs, desks and tripods.</p><p>Use the label mode toggle to push the drawing back and focus on the positions of various desks and their relationships with each other.</p>')
				}
				d3.selectAll(".others").style("opacity", reverse_mode ? 0.1 : 0.1);
				$("#svg").css("pointer-events", "all");
			break;
		}
	}

	$(".hub-table").on("mouseover", function (e) {
		$(".hub").css("opacity", 0.3);
		this.parentNode.style.opacity = 1;
		$(".others").css("opacity", 0.1);
	});
	$(".hub-table").on("mouseout", function (e) {
		$(".hub").css("opacity", 1);
		$(".others").css("opacity",0.1);
	});

	$(".washroom .overlay-rect").on("mouseover", function (e) {
		$(".washroom").css("opacity", 1);
	});
	$(".washroom .overlay-rect").on("mouseout", function (e) {
		if (global_view === "default") {
			$(".washroom").css("opacity", 0.1);
		}
	});

	$(".reading-room .overlay-rect").on("mouseover", function (e) {
		$(".reading-room").css("opacity", 1);
	});
	$(".reading-room .overlay-rect").on("mouseout", function (e) {
		if (global_view === "default") {
			$(".reading-room").css("opacity", 0.1);
		}
	});

	$(".operations-room .overlay-rect").on("mouseover", function (e) {
		$(".operations-room").css("opacity", 1);
	});
	$(".operations-room .overlay-rect").on("mouseout", function (e) {
		if (global_view === "default") {
			$(".operations-room").css("opacity", 0.1);
		}
	});

	$(".makeup-room .overlay-rect").on("mouseover", function (e) {
		$(".makeup-room").css("opacity", 1);
	});
	$(".makeup-room .overlay-rect").on("mouseout", function (e) {
		if (global_view === "default") {
			$(".makeup-room").css("opacity", 0.1)
		}
	});

	$(".booth .overlay-rect").on("mouseover", function (e) {
		$(".booth").css("opacity", 1);
	});
	$(".booth .overlay-rect").on("mouseout", function (e) {
		if (global_view === "default") {
			$(".booth").css("opacity", 0.1);
		}
	});

	$(".small-stage .overlay-rect").on("mouseover", function (e) {
		$(".small-stage").css("opacity", 1);
	});
	$(".small-stage .overlay-rect").on("mouseout", function (e) {
		if (global_view === "default") {
			$(".small-stage").css("opacity", 0.1);
		}
	});

	$(".recording-booth .overlay-rect").on("mouseover", function (e) {
		$(".recording-booth").css("opacity", 1);
	});
	$(".recording-booth .overlay-rect").on("mouseout", function (e) {
		if (global_view === "default") {
			$(".recording-booth").css("opacity", 0.1);
		}
	});

	$(".studio .overlay-rect").on("mouseover", function (e) {
		$(".studio").css("opacity", 1);
	});
	$(".studio .overlay-rect").on("mouseout", function (e) {
		if (global_view === "default") {
			$(".studio").css("opacity", 0.1);
		}
	});

	$("#lobby").on("mouseover", function(){
		d3.select("#lobby").style("opacity", 1)
	});
	$("#lobby").on("mouseout", function(){
		if (global_view === "default") {
			d3.select("#lobby").style("opacity", 0.1)
		}
	});
	$("#server-room").on("mouseover", function(){
		d3.select("#server-room").style("opacity", 1)
	});
	$("#server-room").on("mouseout", function(){
		if (global_view === "default") {
			d3.select("#server-room").style("opacity", 0.1)
		}
	});
	$("#cafe").on("mouseover", function(){
		d3.select("#cafe").style("opacity", 1)
	});
	$("#cafe").on("mouseout", function(){
		if (global_view === "default") {
			d3.select("#cafe").style("opacity", 0.1)
		}
	});
	$("#side-area-right").on("mouseover", function(){
		d3.select("#side-area-right").style("opacity", 1)
	});
	$("#side-area-right").on("mouseout", function(){
		if (global_view === "default") {
			d3.select("#side-area-right").style("opacity", 0.1)
		}
	});
	$("#side-area").on("mouseover", function(){
		d3.select("#side-area").style("opacity", 1)
	});
	$("#side-area").on("mouseout", function(){
		if (global_view === "default") {
			d3.select("#side-area").style("opacity", 0.1)
		}
	});
	$("#hall").on("mouseover", function(){
		d3.select("#hall").style("opacity", 1)
	});
	$("#hall").on("mouseout", function(){
		if (global_view === "default") {
			d3.select("#hall").style("opacity", 0.1)
		}
	});
	$("#extra").on("mouseover", function(){
		d3.select("#hall").style("opacity", 1)
	});
	$("#extra").on("mouseout", function(){
		if (global_view === "default") {
			d3.select("#hall").style("opacity", 0.1)
		}
	});
	$("#stage-hub .overlay-rect").on("mouseover", function(){
		d3.select("#stage-hub").style("opacity", 1)
	});
	$("#stage-hub .overlay-rect").on("mouseout", function(){
		if (global_view === "default") {
			d3.select("#stage-hub").style("opacity", 0.1)
		}
	});
	$("#center-hub .overlay-rect").on("mouseover", function(){
		d3.select("#center-hub").style("opacity", 1)
	});
	$("#center-hub .overlay-rect").on("mouseout", function(){
		if (global_view === "default") {
			d3.select("#center-hub").style("opacity", 0.1)
		}
	});

	var count =0;
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
			url: "https://spadecms.pro.to/reference_list",
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
							["Alerts Desk", "Assignment Desk", "Research Desk", "Control Desk", "Culture Desk", "Support Desk"],
							["Home Bureau", "Copy Desk", "Design Desk", "Multimedia Desk", "Interactives Desk", "Studio Desk"],
							["Mobile Desk", "Web Desk", "ePrint Desk", "Radio Desk", "TV Desk", "Shows Desk"],
							["Seeding Desk", "Engagement Desk", "Growth Desk", "Campaigns Desk", "Events Desk", "Ads Desk"]
						],
						i,
						j;
					// seniority = ["Managing Producer", "Executive Producer", "Chief Producer", "Senior Producer", "Producer", "Associate Producer", "Assistant Producer", "Trainee Producer"];
					console.log(skills, toolset, availability, seniority, hub, desk, shifts);
		   			var svg_label_toogle = '<div style="position: relative;">' +
						'<div class="available-filter" value="' + "label-toogle" + '">' + "Labels" + '</div>' +
						'<input type="checkbox" class="available" id="' + "label_toogle" + '" name="" value="' + "label_toogle" + '"><div class="toggle"><label for="' + "label_toogle" + '"><i></i></label></div>' +
						'</div>';

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
					// for (i = 0; i < seniority.length; i++) {
					for (var key in experience_text) {
						seniority_selection_div += '<div class="seniority-option" value="'+ key +'">'+ key + " (" + experience_text[key] + ")" + '</div>';
					}
					seniority_selection_div +='</div>' +
					'</div>';

					//Skills Dropdown
					var skills_selection_div = '<div class="searchable-filter-div">' +
						'<div class="filter-title">Skillset</div>' +
						'<input type="text" id="skill_search" class="filter-search" placeholder="Search"></input>' +
						'<div class="skills-options">';
					for (i = 0; i < skills.length; i++) {
						skills_selection_div += '<div class="skills-option" value="'+ skills[i] +'">'+ skills[i].split("-").join("—")+'</div>';
					}
					skills_selection_div +='</div>' +
					'</div>';

					//Tools Dropdown
					var tools_selection_div = '<div class="searchable-filter-div">' +
						'<div class="filter-title">Toolkit</div>' +
						'<input type="text" id="toolset_search" class="filter-search" placeholder="Search"></input>' +
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

					filters.innerHTML = svg_label_toogle + hub_desk_selection_div + seniority_selection_div + skills_selection_div + tools_selection_div + available_dropdown + shifts_div;
					// document.getElementById("filters").style.display = "block";
					$(".hub-option-collapsable").on("click", function () {
						$(".seniority-option").removeClass("active");
						$(".skills-option").removeClass("active");
						$(".toolset-option").removeClass("active");
						$("#hiring")[0].checked = false;
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
						$("#hiring")[0].checked = false;
						$(".shifts").attr("checked", null);
						if ($(this).hasClass("active")) {
							$(this).removeClass("active");
						} else {
							$(this).addClass("active");
						}
						filteredData();
						showFilterReset();
					});
					$(".seniority-option").on("click", function () {
						if ($(this).hasClass("active")) {
							$(this).removeClass("active");
						} else {
							$(".seniority-option").removeClass("active");
							$(".hub-option").removeClass("active");
							$(".hub-desk-option").removeClass("active");
							$(".shifts").attr("checked", null);
							$("#hiring")[0].checked = false;
							$(this).addClass("active");
						}
						filteredData();
						showFilterReset();
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
							$("#hiring")[0].checked = false;
							$(this).addClass("active");
						}
						filteredData();
						showFilterReset();
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
							$("#hiring")[0].checked = false;
							$(this).addClass("active");
						}
						filteredData();
						showFilterReset();
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
						$("#hiring")[0].checked = false;
						$(this).addClass("active");
						filteredData();
						showFilterReset();
					});
					$(".shift-options-collapsable").on("click", function () {
						if ($(this).parent().find(".shift-options").css("display") === "none") {
							$(this).parent().find(".shift-options").css("display", "block");
							$(".filter-area").scrollTop($(".filter-area").height());
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
						showFilterReset();
					});
					$(".shifts").on("change", function () {
						$(".shifts[value!=" + this.value + "]").attr("checked", null);
						filteredData();
						showFilterReset();
					});
					$("#label_toogle").on("change", function () {
						if (this.checked) {
							$("#label_display").css("display", "block");
						} else {
							$("#label_display").css("display", "none");
						}
					});
					$(".reset-filters").on("click", function () {
						$(".hub-option").removeClass("active");
						$(".hub-desk-option").removeClass("active");
						$(".seniority-option").removeClass("active");
						$(".skills-option").removeClass("active");
						$(".toolset-option").removeClass("active");
						$("#hiring")[0].checked = false;
						$(".shifts").attr("checked", null);
						filteredData(true);
						hideFilterReset();
					});
					// $("#label_toogle").click();
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
		if (filter_state === "open") {
			$("#nav-toggle-cross").click();
		}
		// $("#filter-tab").click();
		$(".reset-icon-area").css("display", "block");
		$("#intro").css("display", "none");
		$(".explore-action-area").css("display", "none");
		var id = $(this).parent().closest('g').attr("id");
		ele = $("#" + id).attr("class");
		ele1 = $("#" + id).parents();
		str = "" +id;
		s = str.includes("s_");
		p = str.includes("p_");
		a = str.includes("a_");
		d = str.includes("d_");

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
	})

	var other,o_x,o_y,o_w,o_h;
	$(".others .overlay-rect").each(function (i,d) {
		d.onclick = function() {
			if (filter_state === "open") {
				$("#nav-toggle-cross").click();
			}
			$("#desc-text").html("")

			global_view = "zoomed";
			other = d.closest("g").id;
			$(".reset-icon-area").css("display", "block");
			$("#desc-text").css("display", "none");
			$("#intro").css("display", "none");
			$("#description_panel").css("display", "none");
			$('#spade-explore').css("display", "none");
			$(".reset-icon-area").css("display", "block");
			$(".explore-tooltip").remove();

			$("#svg").css("pointer-events", "none");
			o_x = d3.select("#" + other).node().getBBox().x;
			o_y = d3.select("#" + other).node().getBBox().y;
			o_w = d3.select("#" + other).node().getBBox().width;
			o_h = d3.select("#" + other).node().getBBox().height;
			d3.select("svg").transition()
				.duration(2000)
				.attr("viewBox", o_x +" " + (o_y - 20) +" "+ o_w + " "+ (o_h + 40));
			d3.selectAll("#" + other).style("opacity",1);
			d3.select("#hubs").style("opacity",0.1);

			var parent_elem = $(this).parent(),
				tooltip_text;

			if (parent_elem.attr("class").split(" ")[1] === "booth") {
				tooltip_text = "WebEx Booth";
			} else if (parent_elem.attr("class").split(" ")[1] === "small-stage") {
				tooltip_text = "Standups Stage";
			} else if (parent_elem.attr("class").split(" ")[1] === "recording-booth") {
				tooltip_text = "Voiceover Booth";
			} else if (parent_elem.attr("class").split(" ")[1] === "operations-room") {
				tooltip_text = "TV PCR";
			} else if (parent_elem.attr("class").split(" ")[1] === "studio") {
				tooltip_text = "TV studio";
			} else if (parent_elem.attr("class").split(" ")[1] === "washroom") {
				tooltip_text = "Washroom";
			} else if (parent_elem.attr("class").split(" ")[1] === "makeup-room") {
				tooltip_text = "Dressing Room";
			} else if (parent_elem.attr("class").split(" ")[1] === "reading-room") {
				tooltip_text = "Records Room";
			} else if (parent_elem.attr("id") === "lobby") {
				tooltip_text = "Reception";
			} else if (parent_elem.attr("id") === "server-room") {
				tooltip_text = "Server Room";
			} else if (parent_elem.attr("id") === "extra") {
				tooltip_text = "Extra";
			} else if (parent_elem.attr("id") === "hall") {
				tooltip_text = "Training Room";
			} else if (parent_elem.attr("id") === "cafe") {
				tooltip_text = "Cafeteria";
			} else if (parent_elem.attr("id") === "side-area-right") {
				tooltip_text = "Sleeping Lounge";
			} else if (parent_elem.attr("id") === "side-area") {
				tooltip_text = "Meeting Lounge";
			} else if (parent_elem.attr("id") === "center-hub") {
				tooltip_text = "Conference Room";
			} else if (parent_elem.attr("id") === "stage-hub") {
				tooltip_text = "Auditorium + PCR";
			} else {
			}

			setTimeout(function() {
				showOthersTooltip(tooltip_text, parent_elem);
			}, 2000)
		}
	})

	function showOthersTooltip(tooltip_text, $elem) {
		var bbox = $elem[0].getBoundingClientRect(),
			id = $elem.attr("id");

		$("body").append('<div class="explore-tooltip" value="' + id + '"><div class="explore-tooltip-text">' + tooltip_text + '</div><div class="dropup-caret"></div></div>');
		var tooltip_width = +$(".explore-tooltip[value='" + id + "']").css("width").split("px")[0],
			left = bbox.left + (bbox.width / 2) - (tooltip_width / 2) - 10;

		$(".explore-tooltip[value='" + id + "']").css("left", left + "px").css("top", (bbox.top - 35) + "px");
		$(".explore-tooltip[value='" + id + "'] .dropup-caret").css("left", (tooltip_width / 2) + 5 + "px");
	}


	var info;
	function showDescription(id) {
		$.ajax({
			type: "GET",
			url: "https://spadecms.pro.to/descriptions/"+id,
			headers: {
				'Content-Type': 'application/json'
			},
			success: function (response) {
				if(response.success){
					var data, info = document.getElementById("description_panel");
					desc_data = response.description;
					filter_data = response.filter;

					info.innerHTML = "";
					var html = '<div class="slug-title">' + filter_data["slug"] + '</div>';
					if (desc_data["hub_description"] !== "") {
						html += '<div>'+filter_data["hub"] +' Hub</div>' + desc_data["hub_description"];
					}

					if (desc_data["desk_description"] !== "") {
						if (filter_data["desk"] === "Home Bureau") {
							html += '</br><div>'+filter_data["desk"] +'</div>' + desc_data["desk_description"];
						} else {
							html += '</br><div>'+filter_data["desk"] +' Desk</div>' + desc_data["desk_description"];
						}
					}

					if (desc_data["role_description"] !== "") {
						html += '</br><div> Role Description</div>' + desc_data["role_description"];
					}

					if (desc_data["persona_description"] !== "") {
						html += '</br><div> Persona Description</div>' + desc_data["persona_description"];
					}

					if (filter_data["skills"] !== "") {
						var og_skill_list = filter_data["skills"].split(","),
							skills_with_logdash = filter_data["skills"].split("-").join("—"),
							length,
							clickable_skill_list = "",
							i;

						skills_with_logdash = skills_with_logdash.split(",");
						length = skills_with_logdash.length;

						for (i = 0; i < length; i++ ) {
							clickable_skill_list += "<span class='skills-in-description' data-skill='"+og_skill_list[i]+"'>"+skills_with_logdash[i]+"</span>,";
						}

						html += '</br><div> Skillset</div>' + clickable_skill_list;
					}

					if (filter_data["toolset"] !== "") {
						var filter_data_list = filter_data["toolset"].split(",").join(",  ");
						filter_data_list = filter_data_list.split("-").join("—");
						html += '</br><div> Toolkit</div>' + filter_data_list;
					}
					info.innerHTML = html;
					$(".skills-in-description").on("click", function (){
						onClickOfSkills(this);
					});
					document.getElementById("description_panel").style.display = "block"
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
	function filteredData (isReset) {
		// var hubs_dom = $(".hub-option.active"),
		var hubs = "",
			desks_dom = $(".hub-desk-option.active"),
			desks = "",
			availability = $("#hiring")[0].checked ? "Hiring" : "",
			shifts = $(".shifts:checked").val(),
			seniority_dom = $(".seniority-option.active"),
			seniority = "";
		// hubs_dom.map(function (i, d) {
		// 	hubs += d.innerHTML.split(" Hub")[0];
		// 	if (i < hubs_dom.length - 1) {
		// 		hubs += ",";
		// 	}
		// });
		desks_dom.map(function (i, d) {
			desks += d.innerHTML.split(" Desk")[0];
			if (i < desks_dom.length - 1) {
				desks += ",";
			}
		});
		seniority_dom.map(function (i, d) {
			seniority += d.getAttribute("value");
			if (i < seniority_dom.length - 1) {
				seniority += ",";
			}
		});
		shifts = shifts === "All" ? undefined : shifts;
		var data = {
			"filter" : {
				"hub": hubs,
				"desk": desks,
				"seniority": seniority,
				"shifts": shifts,
				"availability": availability,
				"skills": $(".skills-option.active").attr("value"),
				"toolset": $(".toolset-option.active").text()
			}
		};
		var count_of_empty_values = 0,
			key;
		for (key in data.filter) {
			if (data.filter[key] === "" || data.filter[key] === undefined) {
				count_of_empty_values++;
			}
		}
		if (count_of_empty_values === 7) {
			// make opacity normal for all the tables
			deHighlightAll();
			highlightAll();
			if (isReset) {
				hideFilterReset();
			}
			return;
		}
		$.ajax({
			type: "POST",
			url: "https://spadecms.pro.to/filters/query",
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
						var elem = $("#" + result[i].seat_id),
						table = elem.find(".table");
						elem.attr("data-og-opacity", 1);
						elem.css("opacity", 1);
						elem.attr('is_clicked', "yes");
					}
				}
			},
			error: function (response) {
				console.log("ERROR : ", response);
			}
		});
	}

	function updateSkillsAndToolsetFilters (update) {
		var seniority_dom = $(".seniority-option.active"),
			seniority = "";
		seniority_dom.map(function (i, d) {
			seniority += d.getAttribute("value");
			if (i < seniority_dom.length - 1) {
				seniority += ",";
			}
		});
		var data = {
			"filter" : {
				"hub": "",
				"desk": "",
				"seniority": seniority,
				"shifts": "",
				"availability": "",
				"skills": "",
				"toolset": ""
			}
		};
		if (update === "toolset") {
			var skills_dom = $(".skills-option.active"),
				skills = "";
			skills_dom.map(function (i, d) {
				skills += d.getAttribute("value");
				if (i < skills_dom.length - 1) {
					skills += ",";
				}
			});
			data.filter.skills = skills;
		}
		$.ajax({
			type: "POST",
			url: "https://spadecms.pro.to/filters/query",
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
								$(d).removeClass("active");
							}
						});
					}
					$(".toolset-option").map(function (i, d) {
						if (toolset.indexOf(d.getAttribute("value")) === -1) {
							d.style.opacity = "0.5";
							d.style.pointerEvents = "none";
							$(d).removeClass("active");
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
				g.css("opacity", 0.3);
			}
		});
		$(".connection").css("opacity", 0.3);
		$(".hole").css("opacity", 0.3);
	}

function highlightAll() {
	$("#hubs .table").each(function (i, e) {
		var elem = $(e),
			g = elem.closest("g");
		if (g.attr("data-bypass") !== "true") {
			g.css("opacity", 1);
		}
	});
	$(".connection").css("opacity", 1);
	$(".hole").css("opacity", 1);
}

$("#nav-toggle-cross").on( "click", function() {
	var filter_main_div = $(".collapsable-filters-div");
	filter_main_div.css("left", "-250px");
	$(".hamburger-container").css("display", "block");
  $(".explore-tooltip").remove();
	filter_state = "closed";
});

$(".hamburger-container").on( "click", function() {
	var filter_main_div = $(".collapsable-filters-div");
	$(".hamburger-container").css("display", "none");
	filter_main_div.css("left", "0px");
  $(".explore-tooltip").remove();
  resetView();
  $(".reset-icon-area").click();
  deHighlightAll();
  highlightAll();
	filter_state = "open";
});

$(document).on("click", function (event) {
	var element = $(event.srcElement);
	element = element.parent().closest(".collapsable-filters-div");
	if (!element[0]) {
		$("#label_display").css("display", "none");
		$("#label_toogle")[0].checked = false;
	}
});

function showTooltip(text, bbox, value) {
	$("body").append('<div class="explore-tooltip" value="' + value + '"><div class="explore-tooltip-text">' + text + '</div><div class="dropup-caret"></div></div>');
	var tooltip_width = +$(".explore-tooltip[value='" + value + "']").css("width").split("px")[0],
		left = bbox.left + (bbox.width / 2) - (tooltip_width / 2) - 10;
	if (text === "Table") {
		$(".explore-tooltip[value='" + value + "']").css("left", (left + 30) + "px").css("top", (bbox.top + 30) + "px");
	} else if (text === "Connection Table") {
		$(".explore-tooltip[value='" + value + "']").css("left", (left + 30) + "px").css("top", (bbox.top - 10) + "px");
	} else if (text === "Vertical Screen") {
		$(".explore-tooltip[value='" + value + "']").css("left", left + "px").css("top", (bbox.top - 30) + "px");
	} else {
		$(".explore-tooltip[value='" + value + "']").css("left", left + "px").css("top", (bbox.top - 30) + "px");
	}
	$(".explore-tooltip[value='" + value + "'] .dropup-caret").css("left", (tooltip_width / 2) + 5 + "px");
}

function attachTooltipEvents(step) {
	switch (step) {
		case "1":
			showTooltip("Chair", $("#chair_214_")[0].getBoundingClientRect(), "chair_214_");
			showTooltip("Keyboard", $("#keyboard_19_")[0].getBoundingClientRect(), "keyboard_19_");
			showTooltip("Screen", $("#pc-screen_67_")[0].getBoundingClientRect(), "pc-screen_67_");
			showTooltip("Table", $("#sp-table_17_")[0].getBoundingClientRect(), "sp-table_17_");
			break;
		case "2":
			showTooltip("Connection Table", $("#connection-table_8_")[0].getBoundingClientRect(), "connection-table_8_");
			showTooltip("Vertical Screen", $("#stand_4_")[0].getBoundingClientRect(), "stand_4_");
			break;
	}
}


function onClickOfSkills(clicked_elem) {
	resetAll();
	document.querySelector(".hamburger-container").click();
	$(".skills-option[value='"+clicked_elem.getAttribute("data-skill")+"']").click();
}

$(".reset-icon-area").on("click", function () {
	resetAll();
});

function resetAll() {
	resetView();
	resetExplore();
	$("#hubs").css("opacity", 1);
	$(".others").css("opacity", 0.1);
	$(".reset-filters").click();
	$(".info-panel").css("display", "none");
	$("svg").css("pointer-events", "")
	$(".reset-icon-area").css("display", "none");

	$("#spade-explore").css("display", "block");
	$("#intro").css("display", "block");
	$("#description_panel").css("display", "none");
	$(".explore-action-area").css("display", "block");
	$("#desc-text").css("display", "none");
	filter_state = "closed";
	global_view = "default";
}

function resetExplore(argument) {
	$("#hub-2").css("opacity", 1);
	$("#hub-3").css("opacity", 1);
	$("#hub-4").css("opacity", 1);
	$("#s_mp").css("opacity", 1);
	$("#hole_4_").css("opacity", 1);

	$("#hub-1 .desk").css("opacity", 1);
	$("#desk5 .tripod").css("opacity", 1);
	$("#desk5 .connection").css("opacity", 1);

	$("#s_ep5").css("opacity", 1);
	$("#s_ep5_sp2_emp2").css("opacity", 1);
	$("#s_ep5_sp2_emp1").css("opacity", 1);

	$("#explore").css("display", "block");
	$("#explore-title").css("display", "inline-block");
	$("#prev").css("display", "none");
	$("#next").css("display", "none");

	$("#prev").attr("data-step", "1");
	$("#prev").removeClass("disabled-button");

	$("#next").attr("data-step", "1");
	$("#next").removeClass("disabled-button");

	$("#transition_text").html("");
}

function showFilterReset() {
	$("#svg").css("pointer-events", "none");
	$(".reset-filters").css("display", "inline-block");
}

function hideFilterReset() {
	$("#svg").css("pointer-events", "all");
	$(".reset-filters").css("display", "none");
}

function resetView() {
	var x6 = d3.select("#spade").node().getBBox().x,
		y6 = d3.select("#spade").node().getBBox().y,
		h6 = d3.select("#spade").node().getBBox().height,
		w6= d3.select("#spade").node().getBBox().width;
	d3.select("svg").transition()
		.duration(2000)
		.attr("viewBox", x6+" " + y6 +" "+ w6+ " "+ h6)
		.attr("preserveAspectRatio","xMidYMid meet");
	$("#svg").css("pointer-events", "all");
	$(".explore-tooltip").remove();
    var st = setTimeout(function () {
    	$(".explore-tooltip").remove();
    	clearTimeout(st);
    }, 2000);
}

function blockExplorePrevAndNext() {
	$("#prev").css("opacity", "0.5").css("pointer-events", "none");
	$("#next").css("opacity", "0.5").css("pointer-events", "none");
	$("#nav-toggle").css("opacity", "0.5").css("pointer-events", "none");
	$(".reset-icon-area").css("opacity", "0.5").css("pointer-events", "none");
}

function unblockExplorePrevAndNext() {
	$("#prev").css("opacity", "").css("pointer-events", "");
	$("#next").css("opacity", "").css("pointer-events", "");
	$("#nav-toggle").css("opacity", "").css("pointer-events", "");
	$(".reset-icon-area").css("opacity", "").css("pointer-events", "");
}

$(".read-more-button").on("click", function () {
	$(this).remove();
	$("#read_more_text").css("display", "");
});
