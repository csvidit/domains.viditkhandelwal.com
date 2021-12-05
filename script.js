function menu()
{
	if($("#menu-items").hasClass("d-none"))
	{
		$("#menu-items").removeClass("d-none");
		$("#menu-items").addClass("d-flex");
		$("#menu-items").addClass("animate__fadeInDown");
	}
	else
	{
		$("#menu-items").removeClass("animate__fadeInDown");
		$("#menu-items").removeClass("d-flex");
		$("#menu-items").addClass("d-none");
	}
}