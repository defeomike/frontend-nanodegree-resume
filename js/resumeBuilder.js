/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 /*
    var awesomeThoughts;
    awesomeThoughts = "I am Mike and I am AWESOME!";
    console.log(awesomeThoughts);
    var dopeThoughts;
    dopeThoughts = awesomeThoughts.replace("AWESOME","DOPE");
    $("#main").append(dopeThoughts);
 */

/*
    var name = "Mike DeFeo"
    var formattedName = HTMLheaderName.replace("%data%",name)


    var role = "Product Manager"
    var formattedRole = HTMLheaderRole.replace("%data%",role)
    
    $("#header").prepend(formattedRole)
    $("#header").prepend(formattedName)
*/

/*
    var skills = ["smartness", "strength", "charm"];

    var bio = {
    	"name" : formattedName,
    	"role" : formattedRole,
    	"contact" : "defeo.mike@gmail.com",
    	"picURL" : "images/me.jpg",
    	"welcomeMessage" : "Welcome to my resume!",
    	"skills" : skills
    };

    $("#main").append(bio.name);
    $("#main").append(bio.role);
    $("#main").append(bio.contact);
    $("#main").append("<img src="+bio.picURL+">");
    $("#main").append(bio.welcomeMessage);
    $("#main").append(bio.skills);
*/

    var work = {
    	"jobs" : [
    	{
    		"employer" : "JP Morgan, CFA",
    		"title" : "Analyst",
    		"location" : "New York City",
    		"dates" : "2013-2015",
    		"description" : "Worked with CFO."
    	},
    	{
    		"employer" : "JP Morgan, TMT",
    		"title" : "Analyst",
    		"location" : "New York City",
    		"dates" : "2015-2016",
    		"description" : "Worked with TMT clients."
    	}]

    };

  	var projects = {
  		"projects" : [
  		{
  			"title" : "Revend recycle",
  			"dates" : "2013",
  			"description" : "Reverse vending machine for recycling aluminum cans.",
  			"images" : ["images/teampic.png","images/CAD.png"]
  		},
  		{
  			"title" : "Drake tix",
  			"dates" : "2010",
  			"description" : "Helped school with fulfilling student demand for Drake tickets.",
  			"images" : []
  		}]
  	}

  	var bio = {
  		"name" : "Mike DeFeo",
  		"role" : "Product Manager",
  		"welcomeMessage" : "Thanks for checking out my resume!",
  		"biopic" : "images/me.jpg",
  		contacts : {
  			"mobile" : "860.614.9759",
  			"email" : "defeo.mike@gmail.com",
  			"github" : "defeomike",
  			"twitter" : "defeomike",
  			"location" : "NYC"
  		},
  		skills: ["charm", "intelligence", "athleticism"]
  	}


    var education = {
    	"schools" : [
    	{
    		"name" : "Columbia",
    		"location" : "NYC",
    		"degree dates" : "2011-2013",
    		"url" : "columbia.edu",
    		"majors" : ["EE"]
    	},
    	{
    		"name" : "Holy Cross",
    		"location" : "Worcester",
    		"degree dates" : "2008-2011",
    		"url" : "holycross.edu",
    		"majors" : ["Physics"]
    	}],
    	"onlineCourses" : [
    	{
    		"title" : "JavaScript Basics",
    		"school" : "Udacity",
    		"dates" : "2016",
    		"url" : "udacity.com"
    	}]
    };

    $("#header").prepend(HTMLheaderName.replace("%data%",bio.name));

    if (bio.skills.length > 0) {
    	$("#header").append(HTMLskillsStart);

    	$("#skills").append(HTMLskills.replace("%data%",bio.skills[0]))
    	$("#skills").append(HTMLskills.replace("%data%",bio.skills[1]))
    	$("#skills").append(HTMLskills.replace("%data%",bio.skills[2]))
    }

	 function displayWork()  {  
	    for (job in work.jobs) {
	    	$("#workExperience").append(HTMLworkStart);
	    	$(".work-entry:last").append(HTMLworkEmployer.replace("%data%",work.jobs[job].employer)+HTMLworkTitle.replace("%data%",work.jobs[job].title));
	    	$(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[job].dates));
	    	$(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[job].location));
	    	if (work.jobs[job].description !== "") {$(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[job].description));}
	    }
	}

	displayWork();

	$(document).click(function(loc) {
		logClicks(loc.pageX,loc.pageY);
	} )


/*
    education["name"] = "Columbia";
    education["years"] = "2011-2013";
    education["city"] = "New York City";

    var project = {};
    project.title = "Revend Recycle";
    project.year = "2013";
*/

/*
    $("#main").append(work["position"]);
    $("#main").append(education.name);
*/

/*
    var education2 = {
    	"schools" : [
    	{
    		"name" : "Columbia",
    		"city" : "NYC",
    		"major" : "EE",
    		"graduation" : "2013"
    	},
    	{
    		"name" : "Holy Cross",
    		"city" : "Worcester",
    		"major" : "Physics",
    		"graduation" : "2013"
    	}],
    	"Online" : [
    	{
    		"name" : "Udacity"
    	},
    	{
    		"name" : "Coursera"
    	}]
    }
*/