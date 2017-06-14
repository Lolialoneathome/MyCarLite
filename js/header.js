function enableSearch()
{
  let searchForm = $("#search-form");
  let headerTitle = $("#header_title");
  let inputSearch = $("#input-search");
  if (searchForm.css('display') === "none")
  {
    searchForm.css('display','block');
    headerTitle.css('display','none');
    inputSearch.focus();
  }
  else {
    searchForm.css('display','none');
    headerTitle.css('display','inline');
  }
}
