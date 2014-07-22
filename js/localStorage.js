// Global variables

var petName;
var pet;

function initialize() {

		var pets = JSON.parse(localStorage.getItem('petCollection'));

		console.log(pets);
		for (var i in pets) {
			console.log(pets[i]);  // this is returning each character of the string
			//var allpet = JSON.parse(pets);  // getting an unexpected end error
			//console.log(allpet.pet_name);
		}


		if(pets != null)
			{
		// First element is always empty values, so i is set to 1 to prevent creating empty buttons.
			for(var i in pets) 
				{
					console.log('Iteration: ' + i + ' Make this many buttons!');


					$("#startPageButtonArea").append("<a data-role='button' data-theme = 'c' href=#informationSummary data-corners='true' data-shadow='true' data-wrapperels='span' class='ui-btn ui-shadow ui-btn-corner-all ui-btn-up-c' onclick='getPet()'><span class='ui-btn-inner'><span class='ui-btn-text'>" + petName + "</span></span></a>");

				}
			}



		// ***** TO DO : get pet names from localStorage *****

		// ***** create a button for each name

		// ***** link those buttons to the summary page
		// ***** only need one summary page, just need to extract the right information from localStorage
		// ***** for that pet.


		// ***** else we only show the add pet button.
	}

// +++++++++++++++   This function collects data from the text +++++++++++++++
// +++++++++++++++   entry when adding a new pet and save it locally +++++++++

//  THIS WONT BE NECESSARY IF createPet() is used.

//function addPetName(val) 
 //   {
//        var newPetName = JSON.stringify(val);
//        localStorage.setItem("pet_name", newPetName);
//    }

// +++++++++++++++   This function deletes a pet from localStorage - +++++++++++++++
// !!!!!!!!   it will need to be changed to reflect key pair values !!!!!!!!
function clearPet() 
	{

	}


// ++++++++++++++ A way of collecting data for a specific pet.  ++++++++++++++++++
// !!!!!! Need to pull the infor from tbPets array !!!!!!!
function getPet() 
	{
		console.log("getPet called.");

		//for (var i in pet) {
		//	console.log(pet[i]);  // this is returning each character of the string
		//	var allpet = JSON.parse(pet[i]);  // getting an unexpected end error
		//	console.log(allpet.pet_name);
		//}

	}

// Adds a pet to the JSON array, creates array if no array exists (first time it is clicked)
function createPet() {

	
	var petDetails = [];
	var petCollection;

	//collect any data already held in localStorage 
	petCollection = JSON.parse(localStorage.getItem('petCollection'));

	// If there is no petCollection currently stored, create an empty array to put the first pet into
	if(!petCollection)
	{
		petCollection = [];
	}

	for (var i in petCollection)
	{
		console.log(petCollection.pet_name);
		var petDetails = [i];
	}

	// create Object to hold pet details and assign values based on text input from form

	var petDetails = new Array();
		petDetails.pet_name = document.getElementById("textinput1").value;
		petDetails.pet_breed = document.getElementById("textinput2").value;
		petDetails.vet_name = document.getElementById("textinput3").value;
		petDetails.vet_contact = document.getElementById("textinput4").value;
		petDetails.vet_oohcontact = document.getElementById("textinput5").value;
		petDetails.ins_name = document.getElementById("textinput6").value;
		petDetails.ins_contact = document.getElementById("textinput7").value;
		petDetails.ins_policyNo = document.getElementById("textinput8").value;
		petDetails.pet_age = document.getElementById("textinput9").value;
		petDetails.pet_weight = document.getElementById("textinput10").value;
		petDetails.tmt_flea = document.getElementById("textinput11").value;
		petDetails.tmt_worm = document.getElementById("textinput12").value;
		petDetails.tmt_jab = document.getElementById("textinput13").value;

	// Convert the petDetails Object into JSON
	//var pet = JSON.stringify(petDetails);
		

	// We collected the current JSON string previously and parsed it and called it 'pets'
	// Now we push the new pet object into the pets array

	petCollection.push("petDetails");

	//Convert the pets array into JSON
	//JSON.stringify(pets);

	// Re stringify the pets array into JSON and save to local storage again.

	localStorage.setItem("petCollection", JSON.stringify(petCollection));


/*	// Creating JSON object for a pet
		var petCollection = {					// was session
		    'petDetails' : []					// was screens
		    //'state' : true
		};



		petCollection.petDetails.push({  // removed .petDetails after petCollection
			"pet_name": document.getElementById("textinput1").value,
			"pet_breed" : document.getElementById("textinput2").value,
			"vet_name" : document.getElementById("textinput3").value,
			"vet_contact" : document.getElementById("textinput4").value,
			"vet_oohcontact" : document.getElementById("textinput5").value,
			"ins_name" : document.getElementById("textinput6").value,
			"ins_contact" : document.getElementById("textinput7").value,
			"ins_policyNo" : document.getElementById("textinput8").value,
			"pet_age" : document.getElementById("textinput9").value,
			"pet_weight" : document.getElementById("textinput10").value,
			"tmt_flea" : document.getElementById("textinput11").value,
			"tmt_worm" : document.getElementById("textinput12").value,
			"tmt_jab" : document.getElementById("textinput13").value,
		});
	

		// Converting the JSON string with JSON.stringify 
		// then saving with localStorage in the name of session
		localStorage.setItem('petCollection', JSON.stringify(petCollection));

		// Example of how to transform the String generated through 
		// JSON.stringify and saved in localStorage in JSON object again
		var restoredPet = JSON.parse(localStorage.getItem('petCollection'));

		// Now restoredSession variable contains the object that was saved
		// in localStorage
		console.log(restoredPet.pet_name);
*/	
		// to add a new pet to the JSON string, the JSON string needs to be parsed, then the new array pushed in, then stringified again.
		// Therefore:
		// if JSON string exists
		//      parse string
		//      push new array in
		//      stringify

		// else
		//      stringify

	/*
	// create array and add selected pet

		var pet = [];

		pet = ({
			//ID : $("#petID").val(),
			"pet_name" : document.getElementById("textinput1").value,		
			"pet_breed" : document.getElementById("textinput2").value,
			"vet_name" : document.getElementById("textinput3").value,
			"vet_contact" : document.getElementById("textinput4").value,
			"vet_oohcontact" : document.getElementById("textinput5").value,
			"ins_name" : document.getElementById("textinput6").value,
			"ins_contact" : document.getElementById("textinput7").value,
			"ins_policyNo" : document.getElementById("textinput8").value,
			"pet_age" : document.getElementById("textinput9").value,
			"pet_weight" : document.getElementById("textinput10").value,
			"tmt_flea" : document.getElementById("textinput11").value,
			"tmt_worm" : document.getElementById("textinput12").value,
			"tmt_jab" : document.getElementById("textinput13").value,
		});

	tbPets.push(pet);
	localStorage.setItem("tbPets", JSON.stringify(tbPets));
	console.log("the data was saved");

*/

	// else add new pet to existing array (push?)

	// add the pet to the array

}	