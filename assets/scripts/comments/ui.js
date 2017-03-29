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

const onError = function () {

};

const onUpdateSuccess = function () {
  $(".show-all-blogs").click();
};



module.exports = {
  showComments,
  onError,
  onPatchSuccess,
  onPostSuccess,
  onCreateError,
  onUpdateSuccess
};
