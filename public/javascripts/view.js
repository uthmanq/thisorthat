function viewPost (_id){
      window.location.href = "/posts/view?_id=" + _id;
}

function fixDate (date)
{
      var d = new Date(date);
      var result = d.getDay;
      return result;
}