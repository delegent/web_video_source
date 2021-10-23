console.log("Yay we are learning javascript!");
// odd even
// let x = 7;
// if(x % 2 === 0){
// 	console.log("No. is even");
// }else{
// 	console.log("No is odd");
// }

// alert("Hello" );

// % -> remainder
// BMI = kg/m2
// let weight = Number(prompt("Enter your Weight"));
// let height = Number(prompt("Enter your Height"));

// let BMI = weight / (height * height);
// alert(`Your BMI Index is ${BMI} for the ${weight}kg weight and ${height}m height`);
// console.log(BMI);

console.log();
// Math.floor((Math.random() * 10) + 1);

// let male = prompt("Enter boy's name");
// let female = prompt("Enter girl's name");
// let percentage =  Math.floor((Math.random() * 100) + 1);
// if(male != null && female != null){
// 	document.write(`${male} and ${female} you love ${percentage}% to each other! we hope you best for the future`);
// }
let btn = document.getElementById('btn');
// console.log(btn);
let r = Math.floor((Math.random() * 256));

btn.addEventListener('click',function(){
	// btn.preventDefault();	
	
	// alert("You clicked the button");
	document.body.style.backgroundColor = `rgb(${r},${r + 22},${r - 22})`;
});

let h2 = document.getElementById('h2');

	setTimeout(() => {
		h2.style.display = "block";
		
	}, 3000);
	setTimeout(() => {
		document.write(new Date)
	}, 5000);





































