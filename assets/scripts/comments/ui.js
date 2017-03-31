'use strict';

const showComments = function () {
  // this function is defined in blog-stuff/ui.js as onShowBlogComments
};

const onCreateError = function () {
  $('.log').text('Comment must be at least one character');
};

const onPatchSuccess = function () {


};

const onPostSuccess = function () {

};

const onPostSuccess2 = function (data) {
  let current = data.comment.blog_id;
  $(".display-comments[data-id='" + current + "']").empty();
  $(".display-comments[data-id='" + current + "']").text('Comment Successfully Created');
  $(".hide-blog-comments[data-id='" + current + "']").hide();
  $(".show-blog-comments[data-id='" + current + "']").show();
  $(".edit-blog-form[data-id='" + current + "']").fadeOut();
  $("#comment-input[data-id='" + current + "']").val('');
  alertify.success("Comment Successfully Created");
};

const onError = function () {

};

const onDeleteSuccess = function () {
  alertify.success("Comment Successfully Deleted");
}

const onUpdateSuccess = function () {
  $(".show-all-blogs").click();
};



module.exports = {
  showComments,
  onError,
  onPatchSuccess,
  onPostSuccess,
  onCreateError,
  onUpdateSuccess,
  onPostSuccess2
};
