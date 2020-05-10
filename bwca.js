// Entry points that correspond to ranger stations.
var stations = [];

stations["gunflint"] = ["43", "44", "45", "47", "48", "49", "50", "51", "52", "54", "54A", "55", "55A", "57", "58", "60", "61", "62", "64", "66", "68", "69", "70", "80"];
stations['tofte'] = ["34", "35", "36", "37", "38", "39", "40", "41", "41A", "67", "75", "84"];
stations['la_croix'] = ["1", "8", "9", "12", "12A", "14", "16"];
stations['kawishiwi'] = ["4", "6", "7", "19", "20", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "77"];
stations['lac_la_croix'] = ["71A"];
stations['prairie_portage'] = ["71B"];
stations['cache_bay'] = ["71C"];
stations['laurentian'] = [];

// Info for ranger stations.
var station_info = [];

station_info["gunflint"] = ["Gunflint Ranger Station / District", "Located on the outskirts of Grand Marais at 2020 Highway 61. Permits can be picked up (May 1 – September 30). For more information, please contact 218-387-1750 or TTY 218-387-1750."];
station_info['tofte'] = ["Tofte Ranger Station / District", "Located on Highway 61 in Tofte. Permits can be picked up (May 1 – September 30) between the hours of 7am and 5pm Monday through Sunday. For more information, please contact 218-663-8060 or TTY 218-663-8060."];
station_info['la_croix'] = ["LaCroix Ranger Station / District", "Located at 320 North Highway 53 in Cook, MN. Permits can be picked up between the hours of 7am and 5pm Monday through Sunday (May 1 – September 30). Access highways to Ely are US 169 and Hwy 1. For more information, please contact: 218-666-0020 or TTY 218 666-0020"];
station_info['kawishiwi'] = ["Kawishiwi Ranger Station / District", "Located in Ely at 1396 Hwy 169, 1/2 mile east of Hwy 1, inside the International Wolf Center complex. Permits can be picked up (May 1 – September 30) between the hours of 7am and 5pm Monday through Sunday. Access to Ely via US Highways 169 and Hwy 1. For more information, please contact 218-365-7600."];
station_info['laurentian'] = ["Laurentian Ranger Station", "L318 Forestry Road, Aurora, Minnesota, 55705, Across from football field in Aurora. Open: 8:00 AM – 4:30 PM. Closed on Saturdays, Sundays and Federal Holidays. Telephone: 218-229-8800"];
station_info['lac_la_croix'] = ["Lac la Croix Ranger Station – Canadian Customs", "Access to Quetico Provincial Park. Canoeists entering Quetico from the United States need a Quetico permit and a Canadian Remote Area Border Crossing Permit (CANPASS/RABC). It is advised to apply for the RABC by mail at least 3-4 weeks before your trip to avoid processing delays at the border."];
station_info['prairie_portage'] = ['Prairie Portage Ranger Station – Canadian Customs', "Access to Quetico Provincial Park. Canoeists entering Quetico from the United States need a Quetico permit and a Canadian Remote Area Border Crossing Permit (CANPASS/RABC). It is advised to apply for the RABC by mail at least 3-4 weeks before your trip to avoid processing delays at the border."];
station_info['cache_bay'] = ['Cache Bay Ranger Station – Canadian Customs', "Access to Quetico Provincial Park. Canoeists entering Quetico from the United States need a Quetico permit and a Canadian Remote Area Border Crossing Permit (CANPASS/RABC). It is advised to apply for the RABC by mail at least 3-4 weeks before your trip to avoid processing delays at the border."];

// Info for all entry points.
// x, y, name, descriptive text, 0 - paddle only / 1 - paddle and motorized.
var locations = [];

locations["1"] = [169, 392, "#1 Trout Lake Entry Point", "Access is through Lake Vermilion (very large lake) with either a 60-rod canoe portage or a 180-rod portage (this portage allows use of portage wheels) into Trout Lake. For more information, please contact the LaCroix Ranger Station in Cook at 218-666-0020.", 1];
locations["4"] = [305, 412, "#4 Crab Lake and Cummings Lake Entry Point", "Access is 4 miles across Burntside Lake boat landing with a 360-rod portage to Crab Lake. Several trip options with additional portaging. For more information, please contact the Kawishiwi Ranger Station in Ely at 218-365-7600.", 0];
locations["6"] = [345, 349, "#6 Slim Lake Entry Point", "Access is a 90-rod portage to Slim Lake. Portages to three additional lakes. For more information, please contact the Kawishiwi Ranger Station in Ely at 218-365-7600.", 0];
locations["7"] = [320, 305, "#7 From Big Lake (to LaPond Lake) Entry Point", "Access is through Big Lake with a 160-rod portage into LaPond Lake. Limited trip options. For more information, please contact the Kawishiwi Ranger Station in Ely at 218-365-7600.", 0];
locations["8"] = [249, 294, "#8 Moose River Entry Point—Restricted to travel north of the Echo Trail only.", "Access is a canoe landing with three portages into Big Moose Lake. Limited trip options. For more information, please contact the LaCroix Ranger Station in Cook at 218-666-0020.", 0];
locations["9"] = [214, 261, "#9 Little Indian Sioux River Entry Point—Restricted to travel south of the Echo Trail only.", "Access is from parking area. Difficult route. Storm impacted areas. For more information, please contact the LaCroix Ranger Station in Cook at 218-666-0020", 0];
locations["12"] = [121, 128, "#12 Little Vermilion Lake Entry Point—Note: this is not the entry point for Trout Lake–use EP#1.", "Access is through Crane Lake. Trip options for paddlers with additional portages. For more information, please contact the LaCroix Ranger Station in Cook at 218-666-0020. Access route to Quetico Provincial Park.", 0];
locations["12A"] = [146, 130, "#12A Lac la Croix only—from Little Vermilion Lake Entry Point–Restricted Permit*", "Access is through Crane Lake. *Must camp all nights on Lac la Croix. Day trips to other lakes are permitted. Very difficult to reach Lac la Croix by paddle in one day. For more information, please contact the LaCroix Ranger Station in Cook at 218-666-0020. Access route to Quetico Provincial Park.", 1];
locations["14"] = [235, 237, "#14 Little Indian Sioux River Entry Point—Restricted to travel north of the Echo Trail only.", "Access is from parking area with a 40-rod portage to the river. Many trip options with additional portages. For more information, please contact the LaCroix Ranger Station in Cook at 218-666-0020.", 0];
locations["16"] = [283, 249, "#16 Moose/Portage River Entry Point—Restricted to travel north of the Echo Trail only.", "Access is from parking area with a 160-rod portage to the Moose River. Many trip options with additional portages. For more information, please contact the LaCroix Ranger Station in Cook at 218-666-0020.", 0];
locations["19"] = [314, 265, "#19 Stuart River Entry Point", "Access is a 480-rod portage to the Stuart River. Many trip options with additional portages. For more information, please contact the Kawishiwi Ranger Station in Ely at 218-365-7600.", 0];
locations["20"] = [343, 266, "#20 Angleworm Lake Entry Point", "Access Angleworm Lake with a 640-rod portage. Some trip options with additional portages. For more information, please contact the Kawishiwi Ranger Station in Ely at 218-365-7600.", 0];
locations["22"] = [415, 303, "#22 Mudro Lake Entry Point—Restricted Permit*", "Access is one of three portage options into Mudro Lake ranging from 20 to 185 rods. Many trip options from Mudro with additional portages. *Restriction does not allow camping on Horse Lake. This permit is best used for those headed to Basswood Lake. For more information, please contact the Kawishiwi Ranger Station in Ely at 218-365-7600.", 0];
locations["23"] = [406, 328, "#23 Mudro Lake Entry Point", "Access is one of three portage route options into Mudro Lake ranging from 20 to 185 rods. Many trip options with additional portages. Use this permit if headed to Horse Lake. For more information, please contact the Kawishiwi Ranger Station in Ely at 218-365-7600.", 0];
locations["24"] = [485, 380, "#24 Fall Lake Entry Point", "Access is from parking area. Many trip options for paddlers including portage routes into Basswood Lake. For more information, please contact the Kawishiwi Ranger Station in Ely at 218-365-7600.", 1];
locations["25"] = [550, 341, "#25 Moose Lake Entry Point", "Access is from parking area. Many trip options for paddlers including a 20-rod portage route into Basswood Lake. For more information, please contact the Kawishiwi Ranger Station in Ely at 218-365-7600. Access route to Quetico Provincial Park.", 1];
locations["26"] = [512, 371, "#26 Wood Lake Entry Point", "Access to Wood Lake is a 180-rod portage. Several trip options with additional portages. For more information, please contact the Kawishiwi Ranger Station in Ely at 218-365-7600.", 0];
locations["27"] = [561, 363, "#27 Snowbank Lake Entry Point", "Access options include boat landing or canoe launch at Snowbank Lake. Many trip options for paddlers. For more information, please contact the Kawishiwi Ranger Station in Ely at 218-365-7600.", 1];
locations["28"] = [590, 365, "#28 Snowbank Lake only Entry Point—Restricted Permit*", "Access options include boat landing or canoe launch at Snowbank Lake.*Must camp all nights on Snowbank Lake. Day trips to other lakes are permitted. For more information, please contact the Kawishiwi Ranger Station in Ely at 218-365-7600.", 1];
locations["29"] = [539, 400, "#29 North Kawishiwi River Entry Point", "Access the North Kawishiwi River through Ojibway Lake and Triangle Lake utilizing two portages. Several trip options available with additional portages. For more information, please contact the Kawishiwi Ranger Station in Ely at 218-365-7600.", 0];
locations["30"] = [590, 400, "#30 Lake One Entry Point", "Access is a canoe landing at Lake One. For more information, please contact the Kawishiwi Ranger Station in Ely at 218-365-7561.", 0];
locations["31"] = [463, 415, "#31 Farm Lake Entry Point", "Access is a boat landing on Farm Lake with access to South Farm. Paddlers access North Kawishiwi from Farm Lake. Some trip options available for paddlers with additional portages. For more information, please contact the Kawishiwi Ranger Station in Ely at 218-365-7600.", 1];
locations["32"] = [488, 459, "#32 South Kawishiwi River Entry Point", "Access is a 140-rod portage to the river. Some trip options available with additional portages. For more information, please contact the Kawishiwi Ranger Station in Ely at 218-365-7600.", 0];
locations["33"] = [512, 479, "#33 Little Gabbro Lake Entry Point", "Access is a 200-rod portage from the parking lot to Little Gabbro Lake. Several trip options available with additional portages. For more information, please contact the Kawishiwi Ranger Station in Ely at 218-365-7600.", 0];
locations["34"] = [646, 507, "#34 Island River Entry Point", "Island River has two small portages, which lead to the Isabella River.", 0];
locations["35"] = [676, 499, "#35 Isabella Lake Entry Point", "Access is a 70 rod portage to the lake. For more information, please call the Tofte Ranger Station in Tofte at 218-663-7280.", 0];
locations["36"] = [776, 488, "#36 Hog Creek Entry Point", "Access is a 15-rod portage to Hog Creek leading into Perent Lake. For more information, please call the Tofte Ranger Station in Tofte at 218-663-7280.", 0];
locations["37"] = [759, 464, "#37 Kawishiwi Lake Entry Point", "Access is a canoe landing at Kawishiwi Lake. Some trip options with additional portages. For more information, please contact the Tofte Ranger Station in Tofte at 218-663-8060 or the Forest Service Work Station at 218-323-7722.", 0];
locations["38"] = [855, 431, "#38 Sawbill Lake Entry Point", "Access is a boat landing at Sawbill Lake. Several trip options with additional portages. For more information, please contact the Tofte Ranger Station in Tofte at 218-663-8060.", 0];
locations["39"] = [887, 446, "#39 Baker Lake Entry Point", "Access is a boat landing at Baker Lake with a 10-rod portage into Peterson Lake to reach the first campsite. For more information, please contact the Tofte Ranger Station in Tofte at 218-663-8060.", 0];
locations["40"] = [950, 413, "#40 Homer Lake Entry Point", "Access is a boat landing at Homer Lake. Some trip options with additional portages. For more information, please contact the Tofte Ranger Station in Tofte at 218-663-8060.", 0];
locations["41"] = [983, 398, "#41 Brule Lake Entry Point", "Access is a boat landing at Brule Lake. Very large lake with many campsites. Several trip options with additional portages. For more information, please contact the Tofte Ranger Station in Tofte at 218-663-8060.", 0];
locations["41A"] = [1008, 400, "#41A Brule Lake only Entry Point—Restricted Permit*", "Access is a boat landing at Brule Lake. Very large lake with many campsites. *Must camp all nights on Brule Lake. Day trips to other lakes are permitted. For more information, please contact the Tofte Ranger Station in Tofte at 218-663-8060.", 0];
locations["67"] = [622, 519, "#67 Bog Lake Entry Point", "Bog Lake has four campsites and does not provide access to other lakes. Access is a 232-rod portage into the lake. Bog Lake has four campsites, and does not provide access to other lakes. For more information, please call the Tofte Ranger Station at 218-663-7280.", 0];
locations["75"] = [584, 518, "#75 Little Isabella River Entry Point", "Access is a 20-rod portage to the Little Isabella River. Several short portages before you reach the Isabella River. For more information, please call the Tofte Ranger Station at 218-663-7280.", 0];
locations["84"] = [551, 519, "#84 Snake River Entry Point", "Access is a 160-rod portage to the river and several short portages before reaching Bald Eagle Lake. Another trip option is a 141-rod portage to the Isabella River. For more information, please contact the Tofte Ranger Station in Tofte at 218-663-7280.", 0];
locations["77"] = [371, 318, "#77 South Hegman Lake Entry Point", "Access is an 80-rod portage to South Hegman. Trip options with additional portages. For more information, please contact the Kawishiwi Ranger Station in Ely at 218-365-7600.", 0];
locations["71A"] = [286, 84, "#71 From Canada", "Trips that originate in Canada and then enter the BWCAW use entry permit #71 (see Border crossing from Canada into the BWCA). Note: Trips that originate in the BWCAW, pass into Canada and then return to the BWCAW do not require Permit #71. Reentry into the BWCAW is covered by the permit for their original point of entry.", 0];
locations["71B"] = [610, 304, "#71 From Canada", "Trips that originate in Canada and then enter the BWCAW use entry permit #71 (see Border crossing from Canada into the BWCA). Note: Trips that originate in the BWCAW, pass into Canada and then return to the BWCAW do not require Permit #71. Reentry into the BWCAW is covered by the permit for their original point of entry.", 0];
locations["71C"] = [804, 194, "#71 From Canada", "Trips that originate in Canada and then enter the BWCAW use entry permit #71 (see Border crossing from Canada into the BWCA). Note: Trips that originate in the BWCAW, pass into Canada and then return to the BWCAW do not require Permit #71. Reentry into the BWCAW is covered by the permit for their original point of entry.", 0];
locations["43"] = [1074, 392, "#43 Bower Trout Lake Entry Point", "Access is a 72-rod portage from small parking area into Bower Trout. Some trip options with additional portages. For more information, please contact the Gunflint Ranger Station in Grand Marais at 218-387-1750.", 0];
locations["44"] = [1074, 362, "#44 Ram Lake Entry Point", "Access is a 160-rod portage from the parking area. Some trip options with additional portages. For more information, please contact the Gunflint Ranger Station in Grand Marais at 218-387-1750.", 0];
locations["45"] = [1079, 330, "#45 Morgan Lake (no campsites on this lake)", "Access is a 320-rod portage from parking area into Morgan with additional short portages into either Carl or Lux Lakes for campsites. Trip options with additional portages. For more information, please contact the Gunflint Ranger Station in Grand Marais at 218-387-1750.", 0];
locations["47"] = [1059, 307, "#47 Lizz and Swamp Lakes only—Note: for entry at Meeds Lake see Entry Point #48", "Access through Poplar Lake with a 51-rod portage into Lizz Lake or a 100-rod portage into Swamp Lake. Many options for trips with additional portages. For more information, please contact the Gunflint Ranger Station in Grand Marais at 218-387-1750.", 0];
locations["48"] = [1034, 307, "#48 Meeds Lake only—Note: for entry at Lizz and Swamp Lakes see Entry Point #47", "Access through Poplar Lake with a 220-rod portage into Meeds Lake. Many options for trips with additional portages. For more information, please contact the Gunflint Ranger Station in Grand Marais at 218-387-1750.", 0];
locations["49"] = [1011, 293, "#49 Skipper and Portage Lakes Entry Point", "Access through Poplar Lake with a 320-rod portage into Skipper Lake or through Iron Lake with a 32-rod and a 230-rod portage into Portage Lake. For more information, please contact the Gunflint Ranger Station in Grand Marais at 218-387-1750.", 0];
locations["50"] = [920, 289, "#50 Cross Bay Lake Entry Point", "Access is through the Cross River with a 50 and a 40-rod portage to Ham Lake and a 24-rod portage to Cross Bay Lake. Many trip options with additional portages. For more information, please contact the Gunflint Ranger Station in Grand Marais at 218-387-1750.", 0];
locations["51"] = [886, 288, "#51 Missing Link Lake Entry Point", "Access is a canoe landing at Round Lake with a 142-rod portage to Missing Link. Many trip options with additional portages. For more information, please contact the Gunflint Ranger Station in Grand Marais at 218-387-1750.", 0];
locations["52"] = [866, 272, "#52 Brant Lake Entry Point", "Access through Round Lake with an 85-rod and a 50-rod portages into Brant Lake. Many trip options with additional portages. For more information, please contact the Gunflint Ranger Station in Grand Marais at 218-387-1750.", 0];
locations["54"] = [847, 227, "#54 Seagull Lake Entry Point", "Access at Seagull Lake. Large lake with several campsites. Many trip options with additional portages. For more information, please contact the Gunflint Ranger Station in Grand Marais at 218-387-1750.",  1];
locations["54A"] = [821, 230, "#54A Seagull Lake only—Restricted Permit*", "Access at Seagull Lake. Large lake with several campsites. *Must camp all nights on Seagull. Day trips to other lakes are permitted. For more information, please contact the Gunflint Ranger Station in Grand Marais at 218-387-1750.", 1];
locations["55"] = [852, 192, "#55 Saganaga Lake Entry Point", "Access through the Seagull River. Huge lake with many campsites. Many trip options with additional portages. For more information, please contact the Gunflint Ranger Station in Grand Marais at 218-387-1750. Access route to Queitco Provincial Park.", 1];
locations["55A"] = [877, 195, "#55A Saganaga Lake only—Restricted Permit*", "Access through the Seagull River. Huge lake with many campsites. *Must camp all nights on Saganaga Lake. Day trips to other lakes are permitted. For more information, please contact the Gunflint Ranger Station in Grand Marais at 218-387-1750. Access route to Queitco Provincial Park.", 1];
locations["57"] = [911, 251, "#57 Magnetic Lake (and the Granite River) Entry Point", "Access through Gunflint Lake. For more information, please contact the Gunflint Ranger Station in Grand Marais at 218-387-1750.", 0];
locations["58"] = [1018, 261, "#58 South Lake Entry Point", "Access is from Gunflint Lake (very large lake) with a 10 mile paddle and two short portages to South Lake. For more information, please contact the Gunflint Ranger Station in Grand Marais at 218-387-1750.", 1];
locations["60"] = [1074, 282, "#60 Duncan Lake (access to Rose Lake) Entry Point", "Access through West Bearskin Lake with a 70-rod portage to Duncan Lake. Additional 80-rod portage (Stairway Portage) into Rose Lake. For more information, please contact the Gunflint Ranger Station in Grand Marais at 218-387-1750.", 0];
locations["61"] = [1096, 269, "#61 Daniels Lake (access to Rose Lake) Entry Point", "Access through West Bearskin Lake with a 60-rod portage. Additional 465-rod portage (“Baby Grand Portage”) into Rose Lake. For more information, please contact the Gunflint Ranger Station in Grand Marais at 218-387-1750.", 0];
locations["62"] = [1120, 290, "#62 Clearwater Lake Entry Point", "Access from parking lot. Large lake. Many trip options with additional portages. For more information, please contact the Gunflint Ranger Station in Grand Marais at 218-387-1750.", 1];
locations["64"] = [1108, 313, "#64 East Bearskin Lake Entry Point", "Access from parking lot. Many trip options with additional portages. For more information, please contact the Gunflint Ranger Station in Grand Marais at 218-387-1750.", 1];
locations["66"] = [1159, 307, "#66 Crocodile River Entry Point", "Access Crocodile Lake with a 20-rod portage. For more information, please contact the Gunflint Ranger Station in Grand Marais at 218-387-1750.", 0];
locations["68"] = [1224, 283, "#68 Pine Lake Entry Point", "Access through McFarland Lake with a 2-rod portage. For more information, please contact the Gunflint Ranger Station in Grand Marais at 218-387-1750.", 0];
locations["69"] = [1262, 304, "#69 John Lake Entry Point", "Access through Little John Lake with a 10-rod portage. Many trip options with additional portages. For more information, please contact the Gunflint Ranger Station in Grand Marais at 218-387-1750.", 0];
locations["70"] = [1260, 260, "#70 North Fowl Lake (border lake between United States and Canada)", "Access through Little John and John Lakes. Three carries; 10-rod, 88-rod and a 160-rod portage into North Fowl Lake. For more information, please contact the Gunflint Ranger Station in Grand Marais at 218-387-1750.", 1];
locations["80"] = [883, 235, "#80 Larch Creek Entry Point", "Access from the canoe landing at Larch Creek. For more information, please contact the Gunflint Ranger Station in Grand Marais at 218-387-1750.", 0];


function defaultText() {
	var heading = "<h3>Instructions For Use</h3>";
	var description = "Mouseover ranger station markers (blue diamonds) to see all the entry points associated with that station. Mouseover the numbered entry points for name and additional info."
	$("#info_entry").html(heading);
	$("#info_description").html(description);
}

function showEntries(station) {
	// Loop through entry points associated with this ranger station
	// and highlight them.
	for (var i = 0; i < stations[station].length; i++) {
		var id = stations[station][i];
		$("#circle" + id).fadeIn("slow");
	}

	// Display station info.
	var entry = "<h3>" + station_info[station][0] + "</h3>";
	var description = station_info[station][1];

	$("#info_entry").html(entry);
	$("#info_description").html(description);
}

function hideEntries(station) {
	// Loop through entry points associated with this ranger station
	// and hide the highlights.
	for (var i = 0; i < stations[station].length; i++) {
		var id = stations[station][i];
		$("#circle" + id).fadeOut("slow");
	}
	defaultText();
}

function displayEntry(id) {

	// Display icons for type of allowed craft.
	var entry;

	// Display icon for paddle and or motorized.
	entry = "<img src='images/paddle.gif' class='icon' />";

	if (locations[id][4] == 1) {
		entry += "<img src='images/prop.gif' class='icon' />";
	}
	
	entry += "<h3>" + locations[id][2] + "</h3>";
	var description = locations[id][3];

	$("#circle" + id).fadeIn("slow");

	$("#info_entry").html(entry);
	$("#info_description").html(description);

}

function hideEntry(id) {
	$("#circle" + id).fadeOut("slow");
	defaultText();
}

$(document).ready(function(){
	// Add entry point highlight circles.
	for (var key in locations) {
		var circle = "<circle id='circle" + key + "' class='svg_circle' cx='" + locations[key][0] + "' cy='" + locations[key][1] + "' r='13' stroke=blue stroke-width='4' fill='none' />"
		$("#svg").append(circle);
	}
	// Refresh HTML.
	$("body").html($("body").html());
	// Display map instructions.
	defaultText();
});