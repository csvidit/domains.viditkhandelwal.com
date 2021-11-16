function menu()
{
	if($("#menu-items").hasClass("d-none"))
	{
		$("#menu-items").removeClass("d-none");
		$("#menu-items").addClass("d-flex");
	}
	else
	{
		$("#menu-items").removeClass("d-flex");
		$("#menu-items").addClass("d-none");
	}
}