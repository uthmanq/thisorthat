function viewPost (_id){
    console.log(_id);
    $.ajax({
        url: "/posts/view",
        type: "get", //send it through get method
        data: { 
          _id: _id
        },
        success: function(response) {
          //Do Something
        },
        error: function(xhr) {
          //Do Something to handle error
        }
      });
}