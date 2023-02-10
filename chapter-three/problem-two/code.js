



const getInformation = (subject)=>{

	subjects = {

		physical: ["Perez","pedro","pepito","cofla","maria"],
		programming: ["Dalto","pedro","juan","pepito"],
		logic: ["Hernandez","pedro","juan","pepito","cofla","maria"],
		chemistry: ["Rodriguez","pedro","juan","pepito","cofla","maria"],
	}

	if(subjects[subject] != undefined){

		return [subjects[subject],subject,subjects];
	}else{

		return subjects;
	}
}


const showInformation = (subject) =>{

	let information = getInformation(subject);

if (information != false){

	let teacher = information[0][0];
	let students = information[0];
	students.shift();

	document.write(`The teacher of <b>${information[1]}:</b> <b style='color:red'>  ${teacher}</b><br>
		The students are: <b style="color:blue">${students}</b> <br><br>

		`);
}
}





const amountOfClasses = (student)=>{

		let information = getInformation();
		let presentClasses = [];

		let totalQuantity = 0;

		for(info in information){

				
				if (information[info].includes(student)){

					presentClasses.push(" " + info);
					totalQuantity++;

				}
		}

		return `<b style='color:blue'>
		${student}</b> It's in <b>${totalQuantity}</b> classes: <b style='color:green'>${presentClasses}</b><br><br>
		`;

}




showInformation("physical")
showInformation("chemistry")
showInformation("programming")
showInformation("logic")

document.write(amountOfClasses("cofla"));

document.write(amountOfClasses("pedro"));