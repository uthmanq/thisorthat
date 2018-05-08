$("#send").click(function () {
    var title = $('#title').val();
    var sectionAText = $('#sectionAText').val();
    var sectionBText = $('#sectionBText').val();
    $.post('/posts/post', { "title": title, "sectionAText": sectionAText, "sectionBText": sectionBText }, function () {
        alert("done successfully");
    });
});