

// latest content list
var outputMarquee = " ";
var list = ["Do you know you can get a loan of up to 200% of your contributions?", " ", "You can also meet up with your yearly savings target for that Christmas treat you always wanted. Ever wondered how?", " ", "Just give us a call or contact us on 07062401681 from our contact page."];

for (var i = 0; i < list.length; i++) {
	outputMarquee += list[i];
}

document.getElementById("marquee_list").innerHTML = outputMarquee;

