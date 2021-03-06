import "../../common"
import "../../Cards/findRoomCard/findRoomCard"
import "./landingPage.scss"


const imagePaths =
	[
		require('../../assets/images/room-big-1.jpg'),
		require('../../assets/images/room-big-2.jpg'),
		require('../../assets/images/room-big-3.jpg')
	];
$('.landingPage__roomContainer').each(function () {
	const $container = $(this);

	const randomNum = Math.floor(Math.random() * imagePaths.length);
	$container.css('background-image', `url(${imagePaths[randomNum]})`);
});

$(".findRoomCard__button").click(function () {
	window.location.href = "searchRoom.html";
});
