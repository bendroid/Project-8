var bio = {
	"name" : "Ben Collins",
	"role" : "Cake Master",
	"welcomeMessage" : "Lemon drops liquorice lollipop icing halvah chocolate bar. Donut macaroon biscuit caramels croissant cake bear claw. Candy danish liquorice. ", 
	"biopic" : "images/pink_muffin.png",
	"contacts" : [{
		"mobile" : "(555) 555-5555",
		"github" : "bendroid",
		"location" : "Rochester, NY",
		"twitter" : "@nanocakes",
		"email" : "myemail@email.com"
	}],	
	"skills" : ["Cakes","Cookies","Ice Cream", "Cupcakes"]
};

var work = {
	"jobs" : [{
		"employer" : "Latest Job",
		"title" : "Cakes",
		"dates" : "2013 - 2015",
		"location" : "Rochester, NY",
		"description" : "Gingerbread gummies cookie. Sweet jujubes jelly beans chocolate bar chupa chups tart jujubes. Sweet icing lemon drops cotton candy jelly beans. Gummi bears caramels gummies oat cake. "
	},
	{
		"employer" : "Second Job",
		"title" : "Cupcakes",
		"dates" : "2011 - 2013",
		"location" : "New York, NY",
		"description" : "Jelly beans caramels dragée. Chocolate bar caramels gummies pudding. Pudding apple pie wafer marzipan gummi bears. Marzipan chocolate bar sweet. Lemon drops powder cupcake macaroon. Gingerbread donut pastry tootsie roll fruitcake pastry carrot cake."
	}]
};

var projects = {
	"project" : [{
		"title" : "Gingerbread",
		"dates" : "2013",
		"description" : "Ice cream topping topping liquorice gummi bears gummi bears macaroon croissant apple pie. Chocolate cake oat cake danish cotton candy bonbon cake marzipan donut. Lollipop fruitcake liquorice biscuit candy gingerbread candy canes cookie oat cake. ", 
		"images" : ["http://www.cupcakeipsum.com/assets/green_muffin.png","http://www.cupcakeipsum.com/assets/light_pink_muffin.png", "http://www.cupcakeipsum.com/assets/blue_muffin.png","http://www.cupcakeipsum.com/assets/pink_pie.png"]
	},
	{
		"title" : "Macaroon",
		"dates" : "2014", 
		"description" : "Dessert ice cream carrot cake. Cupcake liquorice carrot cake gummi bears bonbon pudding. Jelly beans chocolate tiramisu. Soufflé bonbon dessert tiramisu. Bonbon dessert cookie sweet roll.", 
		"images" : ["http://www.cupcakeipsum.com/assets/pink_pie.png","http://www.cupcakeipsum.com/assets/green_muffin.png","http://www.cupcakeipsum.com/assets/blue_muffin.png","http://www.cupcakeipsum.com/assets/light_pink_muffin.png"]
	}]
};

var education = {
	"schools" : [
	{
		"name" : "Chocolate bar oat cake",
		"location" : "Rochester, NY",
		"degree" : "Bachelor",
		"majors" : "Cupcakes",
		"dates" : "2001 - 2005",
		"url" : "https://google.com"
	},
	{
		"name" : "Chupa chups chupa chups",
		"location" : "Los Angeles, CA",
		"degree" : "Master",
		"majors" : "Cakes",
		"dates" : "2005 - 2006",
		"url" : "https://google.com"
	}],
	"online courses" : [{
		"title" : "Front-End Web Developer Nanodegree",
		"school" : "udacity",
		"dates" : "2014 - 2015",
		"url" : "https://www.udacity.com/course/nd001"
	}]
};


bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
	var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);

	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedBiopic,formattedMessage);
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};

	for(contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
		var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts[contact].twitter);
		var formattedGithub = HTMLcontactGeneric.replace("%contact%","github").replace("%data%",bio.contacts[contact].github);
		$("#footerContacts").append(formattedMobile,formattedEmail,formattedTwitter,formattedGithub);
	};
};

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}
};

work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription);
	}
};

projects.display = function(){
	for(item in projects.project){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[item].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[item].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[item].description);
		
		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
		for (image in projects.project[item].images) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.project[item].images[image]);
			$(".project-entry:last").append(formattedImage);
		};
		

		
	}
};

function inName(name){
	console.log(name);
	var newName = name;
	newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase(); 

	return newName;
};

work.display();
projects.display();
education.display();
bio.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);