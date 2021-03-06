const events = [
	["Sep 9", "Orientation", "Phil / Alex / Marlene"],
	["Sep 10", "Orientation - Day 2", "Alex / Marlene"],
	["Sep 11", "HTML5/CSS3", "Alex Cooper"],
	["Sep 12", "System Analysis & Design", "Alex Cooper"],
	["Sep 13", "HTML5/CSS3", "Alex Cooper"],
	["Sep 16", "HTML5/CSS3", "Alex Cooper"],
	["Sep 17", "Javascript", "Jason Harrison"],
	["Sep 18", "HTML5/CSS3", "Alex Cooper"],
	["Sep 19", "System Analysis & Design", "Alex Cooper"],
	["Sep 20", "Relational Databases", "Phil Weier"],
	["Sep 23", "HTML5/CSS3", "Alex Cooper"],
	["Sep 24", "Javascript", "Jason Harrison"],
	["Sep 25", "Relational Databases", "Phil Weier"],
	["Sep 26", "System Analysis & Design", "Alex Cooper"],
	["Sep 27", "HTML5/CSS3", "Alex Cooper"],
	["Sep 30", "HTML5/CSS3", "Alex Cooper"],
	["Oct 1", "Javascript", "Jason Harrison"],
	["Oct 2", "Relational Databases", "Phil Weier"],
	["Oct 3", "System Analysis & Design", "Alex Cooper"],
	["Oct 4", "HTML5/CSS3", "Alex Cooper"],
	["Oct 7", "HTML5/CSS3", "Alex Cooper"],
	["Oct 8", "HTML5/CSS3", "Alex Cooper"],
	["Oct 9", "Relational Databases", "Phil Weier"],
	["Oct 10", "System Analysis & Design", "Alex Cooper"],
	["Oct 11", "Flex Day", ""],
	["Oct 14", "Thanksgiving Day", ""],
	["Oct 15", "Javascript", "Jason Harrison"],
	["Oct 16", "Relational Databases", "Phil Weier"],
	["Oct 17", "PHP", "Jeff Parker"],
	["Oct 18", "Relational Databases", "Phil Weier"],
	["Oct 21", "HTML5/CSS3", "Alex Cooper"],
	["Oct 22", "Javascript", "Jason Harrison"],
	["Oct 23", "HTML5/CSS3", "Alex Cooper"],
	["Oct 24", "PHP", "Jeff Parker"],
	["Oct 25", "Frontend Project", "Alex Cooper"],
	["Oct 28", "Frontend Project", "Alex Cooper"],
	["Oct 29", "Javascript", "Jason Harrison"],
	["Oct 30", "C# - OOP", "Phil Weier"],
	["Oct 31", "PHP", "Jeff Parker"],
	["Nov 1", "Frontend Project", "Alex Cooper"],
	["Nov 4", "Laravel", "Jason Harrison"],
	["Nov 5", "Presentation Skills", "Marlene Delanghe"],
	["Nov 6", "Angular", "Alex Cooper"],
	["Nov 7", "PHP", "Jeff Parker"],
	["Nov 8", "Frontend Project", "Alex Cooper"],
	["Nov 11", "Remembrance Day", ""],
	["Nov 12", "Angular", "Alex Cooper"],
	["Nov 13", "C# - OOP", "Phil Weier"],
	["Nov 14", "C# - OOP", "Phil Weier"],
	["Nov 15", "Angular", "Alex Cooper"],
	["Nov 18", "Laravel", "Jason Harrison"],
	["Nov 19", "C# - OOP", "Phil Weier"],
	["Nov 20", "Angular", "Alex Cooper"],
	["Nov 21", "C# - OOP", "Phil Weier"],
	["Nov 22", "React", "Michael Whyte"],
	["Nov 25", "Laravel", "Jason Harrison"],
	["Nov 26", "React", "Michael Whyte"],
	["Nov 27", "Full-Stack JS", "Medhat Elmasry"],
	["Nov 28", "C# - OOP", "Phil Weier"],
	["Nov 29", ".NET Core - MVC", "Phil Weier"],
	["Dec 2", "Laravel", "Jason Harrison"],
	["Dec 3", "React", "Michael Whyte"],
	["Dec 4", "Full-Stack JS", "Medhat Elmasry"],
	["Dec 5", ".NET Core - MVC", "Phil Weier"],
	["Dec 6", "React", "Michael Whyte"],
	["Dec 9", "Laravel", "Jason Harrison"],
	["Dec 10", "Resume Writing Essentials", "Marlene Delanghe"],
	["Dec 11", "Full-Stack JS", "Medhat Elmasry"],
	["Dec 12", ".NET Core - MVC", "Phil Weier"],
	["Dec 13", "Portfolio Site Presentation", "Alex Cooper"],
	["Dec 16", "Winter Break", ""],
	["Dec 17", "Winter Break", ""],
	["Dec 18", "Winter Break", ""],
	["Dec 19", "Winter Break", ""],
	["Dec 20", "Winter Break", ""],
	["Dec 23", "Winter Break", ""],
	["Dec 24", "Winter Break", ""],
	["Dec 25", "Winter Break", ""],
	["Dec 26", "Winter Break", ""],
	["Dec 27", "Winter Break", ""],
	["Dec 30", "Winter Break", ""],
	["Dec 31", "Winter Break", ""],
	["Jan 1", "Winter Break", ""],
	["Jan 2", "Winter Break", ""],
	["Jan 3", "Winter Break", ""],
	["Jan 6", "Laravel", "Jason Harrison"],
	["Jan 7", ".NET Core - MVC", "Phil Weier"],
	["Jan 8", "Full-Stack JS", "Medhat Elmasry"],
	["Jan 9", "AWS", "Alex Cooper"],
	["Jan 10", ".NET Core - MVC", "Phil Weier"],
	["Jan 13", "AWS", "Alex Cooper"],
	["Jan 14", ".NET Core - MVC", "Phil Weier"],
	["Jan 15", "Full-Stack JS", "Medhat Elmasry"],
	["Jan 16", ".NET Core - MVC", "Phil Weier"],
	["Jan 17", "AWS", "Alex Cooper"],
	["Jan 20", ".NET Core - MVC", "Phil Weier"],
	["Jan 21", "AWS", "Alex Cooper"],
	["Jan 22", "Full-Stack JS", "Medhat Elmasry"],
	["Jan 23", ".NET Core Web API", "Phil Weier"],
	["Jan 24", "AWS", "Alex Cooper"],
	["Jan 27", "iOS", "Jason Harrison"],
	["Jan 28", "AWS", "Alex Cooper"],
	["Jan 29", "Full-Stack JS", "Medhat Elmasry"],
	["Jan 30", ".NET Core Web API", "Phil Weier"],
	["Jan 31", ".NET Core Web API", "Phil Weier"],
	["Feb 3", "iOS", "Jason Harrison"],
	["Feb 4", "X-Platform Mobile", "Alex Cooper"],
	["Feb 5", ".NET Core Web API", "Phil Weier"],
	["Feb 6", "Android", "Phil Weier"],
	["Feb 7", ".NET Core Web API", "Phil Weier"],
	["Feb 10", "iOS", "Jason Harrison"],
	["Feb 11", "X-Platform Mobile", "Alex Cooper"],
	["Feb 12", "Android", "Phil Weier"],
	["Feb 13", "Flex Day", ""],
	["Feb 14", "Web Application Security", "Pat McGee"],
	["Feb 17", "Family Day", ""],
	["Feb 18", "Flex Day", ""],
	["Feb 19", "Android", "Phil Weier"],
	["Feb 20", "X-Platform Mobile", "Alex Cooper"],
	["Feb 21", "Web Application Security", "Pat McGee"],
	["Feb 24", "iOS", "Jason Harrison"],
	["Feb 25", "Android", "Phil Weier"],
	["Feb 26", "X-Platform Mobile", "Alex Cooper"],
	["Feb 27", "Passion Project", "Alex Cooper"],
	["Feb 28", "Web Application Security", "Pat McGee"],
	["Mar 2", "iOS", "Jason Harrison"],
	["Mar 3", "Android", "Phil Weier"],
	["Mar 4", "X-Platform Mobile", "Alex Cooper"],
	["Mar 5", "Passion Project", "Alex Cooper"],
	["Mar 6", "Web Application Security", "Pat McGee"],
	["Mar 9", "iOS", "Jason Harrison"],
	["Mar 10", "Passion Project", "Alex Cooper"],
	["Mar 11", "Android", "Phil Weier"],
	["Mar 12", "Flex Day", ""],
	["Mar 13", "Web Application Security", "Pat McGee"],
	["Mar 16", "Spring Break", ""],
	["Mar 17", "Spring Break", ""],
	["Mar 18", "Spring Break", ""],
	["Mar 19", "Spring Break", ""],
	["Mar 20", "Spring Break", ""],
	["Mar 23", "Flex Day", ""],
	["Mar 24", "Passion Project (optional Demos)", "Alex Cooper"],
	["Mar 25", "Mobile Project", "Phil Weier"],
	["Mar 26", "Mobile Project", "Phil Weier"],
	["Mar 27", "Mobile Project", "Phil Weier"],
	["Mar 30", "Mobile Project (optional Demos)", "Phil Weier"],
	["Mar 31", "Final Project", "Alex Cooper"],
	["Apr 1", "Interview Skills", "Marlene Delanghe"],
	["Apr 2", "Final Project", "Alex Cooper"],
	["Apr 3", "Final Project", "Alex Cooper"],
	["Apr 6", "Final Project", "Alex Cooper"],
	["Apr 7", "Final Project", "Alex Cooper"],
	["Apr 8", "Final Project (with Demos)", "Alex Cooper"],
	["Apr 9", "Mock Interviews", "Alex/Marlene"],
	["Apr 10", "Good Friday", ""],
	["Apr 13", "Easter Monday", ""],
	["Apr 14", "Industry Projects", "Alex Cooper"],
	["Apr 15", "Industry Projects", "Alex Cooper"],
	["Apr 16", "Industry Projects", "Alex Cooper"],
	["Apr 17", "Industry Projects", "Alex Cooper"],
	["Apr 20", "Industry Projects", "Alex Cooper"],
	["Apr 21", "Industry Projects", "Alex Cooper"],
	["Apr 22", "Industry Projects", "Alex Cooper"],
	["Apr 23", "Industry Projects", "Alex Cooper"],
	["Apr 24", "Industry Projects", "Alex Cooper"],
	["Apr 27", "Industry Projects", "Alex Cooper"],
	["Apr 28", "Industry Projects", "Alex Cooper"],
	["Apr 29", "Industry Projects", "Alex Cooper"],
	["Apr 30", "Industry Projects", "Alex Cooper"],
	["May 1", "Industry Projects", "Alex Cooper"],
	["May 4", "Industry Projects", "Alex Cooper"],
	["May 5", "Industry Projects", "Alex Cooper"],
	["May 6", "Industry Projects", "Alex Cooper"],
	["May 7", "Industry Projects", "Alex Cooper"],
	["May 8", "Demo Day", "Alex Cooper"]
]

var data = convert(events);

function convert(array) {
	let newArray = [];
	for (let i = 0; i < array.length; i++) {

		if ((array[i][0].indexOf("Sep") != -1) || (array[i][0].indexOf("Oct") != -1) || (array[i][0].indexOf("Nov") != -1) || (array[i][0].indexOf("Dec") != -1)) {
			let date = new Date(array[i][0] + " 2019");
			array[i][0] = date.toISOString().split("T")[0];
			newArray.push({
				title: array[i][1] + "\n" + array[i][2] + "\n",
				start: array[i][0]
			});
		} else {
			let date1 = new Date(array[i][0] + " 2020");
			array[i][0] = date1.toISOString().split('T')[0];
			newArray.push({
				title: array[i][1] + '\n' + array[i][2] + '\n',
				start: array[i][0]
			});
		}

	}
	return newArray
}