document.addEventListener('DOMContentLoaded',() => {
    var x = document.querySelectorAll(".card");
    console.log(x);
    VanillaTilt.init(document.querySelectorAll(".card"), {
		    max: 15,
        speed: 200,
        glare: true,
        "max-glare":0.5,
	});
},false)
