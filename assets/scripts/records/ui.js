'use strict';

const showRecordsList = require('../templates/record-templates/record-listing.hbs');

const showRecords = function (data) {
  if (data.records.length === 0) {
    alertify.error("There Are No Records for Sale");
  } else {
    let showRecordsHtml = showRecordsList({ records: data.records });
    $('.main-body').empty();
    $('.main-body').append(showRecordsHtml);
    $('.hamburger').click();
  }
};

const onCreateError = function () {
};

const onPatchSuccess = function () {


};

const onPostSuccess = function () {

};

const onPostSuccess2 = function () {
};

const onError = function () {
};

const onDeleteSuccess = function () {
};

const onUpdateSuccess = function () {

};



module.exports = {
  showRecords,
  onError,
  onPatchSuccess,
  onPostSuccess,
  onCreateError,
  onUpdateSuccess,
  onPostSuccess2,
  onDeleteSuccess
};
