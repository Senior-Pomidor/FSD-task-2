import "slick-carousel"
import "../../../node_modules/slick-carousel/slick/slick.css"

import "./carousel.scss"

$(document).ready(function () {
	initCarouselPlugin($("body"))
});

function getCarouselParams($carousel) {
	return {
		arrows: ($carousel.attr("data-arrows").toLowerCase() === 'true'),
		prevArrow: '<label class="slick-prev"><button type="button" >expand_more</button></label>',
		nextArrow: '<label class="slick-next"><button type="button" >expand_more</button></label>',
		dots: ($carousel.attr("data-dots").toLowerCase() === 'true'),
	};
}

export function initCarouselPlugin($parent) {
	$parent.find(".carousel").each(function () {
		const initAttrName = "data-initiated";
		const initAttrValue = "true";

		const $carousel = $(this);
		if ($carousel.attr(initAttrName) === initAttrValue)
			return;

		const params = getCarouselParams($carousel);

		$carousel.slick(params);
		$carousel.attr(initAttrName, initAttrValue);
	});
}
