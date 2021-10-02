const pic = [
	{
		src: "img/5.jpg",
		caption: "Gyapanpatra to Prime Minister",
	},
	{
		src: "img/6.jpg",
		caption: "US Visit",
	},
	{
		src: "img/7.jpg",
		caption: "UK Visit",
	},
	{
		src: "img/8.jpg",
		caption: "General Elections 2012",
	},
	{
		src: "img/9.jpg",
		caption: "General",
	},
	{
		src: "img/10.jpg",
		caption: "Nepal Tarun Dal",
	},
	{
		src: "img/11.jpg",
		caption: "Earthquake of 2015",
	},
	{
		src: "img/12.jpg",
		caption: "Samsad Bhawan",
	},
	{
		src: "img/13.jpg",
		caption: "Meetings with prime minister",
	},
	{
		src: "img/14.jpg",
		caption: "Interviews",
	},
];

function createImages(arr) {
	const img = document.querySelector("#image-container");
	console.log(img);
	let htmlImg = "";
	arr.forEach((item) => {
		htmlImg += `
		<div class="md:w-1/4 px-4 mb-8">
			<img class="rounded shadow-md" src="${item.src}" alt="${item.caption}"/>
			<p class="text-center text-gray-600 pt-3">${item.caption}</p>
		</div>`;
		console.log(item.src);
	});
	img.insertAdjacentHTML("beforeend", htmlImg);
}
createImages(pic);
