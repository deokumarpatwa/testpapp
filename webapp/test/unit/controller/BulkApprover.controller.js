/*global QUnit*/

sap.ui.define([
	"comintapptics/md_bulkapprover/controller/BulkApprover.controller"
], function (Controller) {
	"use strict";

	QUnit.module("BulkApprover Controller");

	QUnit.test("I should test the BulkApprover controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
