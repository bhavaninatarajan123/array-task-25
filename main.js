var a=[];
var n=parseInt(prompt("Enter the size of the array"));

	
for (let i=0; i<n; i++){
	a[i]=parseInt(prompt("Enter the" + (i+1) +" value"));
}

document.write("Given Array = "+a+"<br><br>");

var b=[];
var temp

for (let i=0; i<a.length;  i++){
	for (let j=i+1; j<a.length; j++){
		if(a[i]<a[j]){
			temp=a[i];
			a[i]=a[j];
			a[j]=temp;
		}
	}
		b.push(a[i]);
}
var c=b[0];
document.write("the largest number in the array is"+" "+b[0])