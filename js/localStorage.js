// Global variables


	// var tbPets = localStorage.getItem("pet");  // create tbPets variable and attempt to retrieve any data from it
	

// if tbPets does not exist create an array to populate
	//if (tbPets == null) {
	//	tbPets = [];
	//}

	var petName;
	var pet;

function initialize() {

	if (pet != null) {

		// if tbPets contains data, we extract the numer of pets and create a button containing 
		// the pet name that links to a page for that pet containing a summary of all its information.

			// for each key pair with key 'pet_name' and value != null
			// create a button. Add the petName as the content for that button.

		//tbPets = JSON.parse(tbPets); // convert data to object

		//var pet = tbPets;

		var pets = JSON.parse(localStorage.getItem('pet'));
		
		//var petName;

		console.log('The full contents of tbPets are: ' + pets);

		pet.forEach(function(pet_name) {
			if (pet.pet_name != null || null);
			console.log(pet);
			console.log(pet_name);
		});

		if(pets != null)
			{
		// First element is always empty values, so i is set to 1 to prevent creating empty buttons.
		for(i = 0; i < pets.length; i++) 
			{
				
				// remove each element of the array - this contains all information about one pet.
				var currentPet = pets.slice(i);
				petName = pets.pet_name;
				
				
				//console.log('The current pet should be:' + currentPet);
				//console.log('The current pet name should be: ' + currentPet.pet_name);

				console.log('Iteration: ' + i + ' Make this many buttons!');


					$("#startPageButtonArea").append("<a data-role='button' data-theme = 'c' href=#informationSummary data-corners='true' data-shadow='true' data-wrapperels='span' class='ui-btn ui-shadow ui-btn-corner-all ui-btn-up-c' onclick='getPet()'><span class='ui-btn-inner'><span class='ui-btn-text'>" + petName + "</span></span></a>");

				}

			  // "+buttonPetName+"
				//document.getElementById('petButtonLabel').innerHTML = 'buttonPetName';

				//<a data-role="button" href="#informationSummary">
              	//	Dog 1
          		//</a>
          		//console.log('tbPets length - I should make this many buttons: ' + i);
          		//console.log('');

			}



		// get pet names from localStorage

		// create a button for each name

		// link those buttons to the summary page
		// only need one summary page, just need to extract the right information from localStorage
		// for that pet.
		}

	// else we only show the add pet button.
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
		localStorage.removeItem("pet_name");
		localStorage.removeItem("pet_photo");
		localStorage.removeItem("pet_breed");
		localStorage.removeItem("pet_age");
		localStorage.removeItem("pet_wt");
		localStorage.removeItem("vet_name");
		localStorage.removeItem("vet_number");
		localStorage.removeItem("vet_oohcontact");
		localStorage.removeItem("ins_name");
		localStorage.removeItem("ins_policyNo");
		localStorage.removeItem("ins_contact");
	}


// ++++++++++++++ A way of collecting data for a specific pet.  ++++++++++++++++++
// !!!!!! Need to pull the infor from tbPets array !!!!!!!
function getPet() 
	{
		console.log("getPet called.");

		for (var i in pet) {
			console.log(pet[i]);  // this is returning each character of the string
			var allpet = JSON.parse(pet[i]);  // getting an unexpected end error
			console.log(allpet.pet_name);
		}

	}

// Adds a pet to the JSON array, creates array if no array exists (first time it is clicked)
function createPet() {

	// Creating JSON object for a pet
		var pet = {					// was session
		    'petDetails' : [],		// was screens
		    'state' : true
		};

		pet.petDetails.push({
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
		localStorage.setItem('pet', JSON.stringify(pet));

		// Example of how to transform the String generated through 
		// JSON.stringify and saved in localStorage in JSON object again
		var restoredPet = JSON.parse(localStorage.getItem('pet'));

		// Now restoredSession variable contains the object that was saved
		// in localStorage
		console.log(restoredPet.pet_name);

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