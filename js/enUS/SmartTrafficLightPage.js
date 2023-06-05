
// Search //

async function searchSmartTrafficLight($formFilters, success, error) {
	var filters = searchSmartTrafficLightFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSmartTrafficLightVals(filters, success, error);
}

function searchSmartTrafficLightFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var filterEntityId = $formFilters.find('.valueEntityId').val();
		if(filterEntityId != null && filterEntityId !== '')
			filters.push({ name: 'fq', value: 'entityId:' + filterEntityId });

		var filterSmartTrafficLightName = $formFilters.find('.valueSmartTrafficLightName').val();
		if(filterSmartTrafficLightName != null && filterSmartTrafficLightName !== '')
			filters.push({ name: 'fq', value: 'smartTrafficLightName:' + filterSmartTrafficLightName });

		var filterRouteIdNorth = $formFilters.find('.valueRouteIdNorth').val();
		if(filterRouteIdNorth != null && filterRouteIdNorth !== '')
			filters.push({ name: 'fq', value: 'routeIdNorth:' + filterRouteIdNorth });

		var filterRouteIdEast = $formFilters.find('.valueRouteIdEast').val();
		if(filterRouteIdEast != null && filterRouteIdEast !== '')
			filters.push({ name: 'fq', value: 'routeIdEast:' + filterRouteIdEast });

		var filterParamAvgVehiclePerMinFromWestToEast = $formFilters.find('.valueParamAvgVehiclePerMinFromWestToEast').val();
		if(filterParamAvgVehiclePerMinFromWestToEast != null && filterParamAvgVehiclePerMinFromWestToEast !== '')
			filters.push({ name: 'fq', value: 'paramAvgVehiclePerMinFromWestToEast:' + filterParamAvgVehiclePerMinFromWestToEast });

		var filterParamAvgVehiclePerMinFromSouthToNorth = $formFilters.find('.valueParamAvgVehiclePerMinFromSouthToNorth').val();
		if(filterParamAvgVehiclePerMinFromSouthToNorth != null && filterParamAvgVehiclePerMinFromSouthToNorth !== '')
			filters.push({ name: 'fq', value: 'paramAvgVehiclePerMinFromSouthToNorth:' + filterParamAvgVehiclePerMinFromSouthToNorth });

		var filterParamVehicleDemandScalingFactor = $formFilters.find('.valueParamVehicleDemandScalingFactor').val();
		if(filterParamVehicleDemandScalingFactor != null && filterParamVehicleDemandScalingFactor !== '')
			filters.push({ name: 'fq', value: 'paramVehicleDemandScalingFactor:' + filterParamVehicleDemandScalingFactor });

		var filterParamAvgPedestrianPerMinFromWestToEast = $formFilters.find('.valueParamAvgPedestrianPerMinFromWestToEast').val();
		if(filterParamAvgPedestrianPerMinFromWestToEast != null && filterParamAvgPedestrianPerMinFromWestToEast !== '')
			filters.push({ name: 'fq', value: 'paramAvgPedestrianPerMinFromWestToEast:' + filterParamAvgPedestrianPerMinFromWestToEast });

		var filterParamAvgPedestrianPerMinFromSouthToNorth = $formFilters.find('.valueParamAvgPedestrianPerMinFromSouthToNorth').val();
		if(filterParamAvgPedestrianPerMinFromSouthToNorth != null && filterParamAvgPedestrianPerMinFromSouthToNorth !== '')
			filters.push({ name: 'fq', value: 'paramAvgPedestrianPerMinFromSouthToNorth:' + filterParamAvgPedestrianPerMinFromSouthToNorth });

		var filterParamPedestrianDemandScalingFactor = $formFilters.find('.valueParamPedestrianDemandScalingFactor').val();
		if(filterParamPedestrianDemandScalingFactor != null && filterParamPedestrianDemandScalingFactor !== '')
			filters.push({ name: 'fq', value: 'paramPedestrianDemandScalingFactor:' + filterParamPedestrianDemandScalingFactor });

		var filterParamMinGreenTimeSecWestEast = $formFilters.find('.valueParamMinGreenTimeSecWestEast').val();
		if(filterParamMinGreenTimeSecWestEast != null && filterParamMinGreenTimeSecWestEast !== '')
			filters.push({ name: 'fq', value: 'paramMinGreenTimeSecWestEast:' + filterParamMinGreenTimeSecWestEast });

		var filterParamMaxGreenTimeSecWestEast = $formFilters.find('.valueParamMaxGreenTimeSecWestEast').val();
		if(filterParamMaxGreenTimeSecWestEast != null && filterParamMaxGreenTimeSecWestEast !== '')
			filters.push({ name: 'fq', value: 'paramMaxGreenTimeSecWestEast:' + filterParamMaxGreenTimeSecWestEast });

		var filterParamMinGreenTimeSecSouthNorth = $formFilters.find('.valueParamMinGreenTimeSecSouthNorth').val();
		if(filterParamMinGreenTimeSecSouthNorth != null && filterParamMinGreenTimeSecSouthNorth !== '')
			filters.push({ name: 'fq', value: 'paramMinGreenTimeSecSouthNorth:' + filterParamMinGreenTimeSecSouthNorth });

		var filterParamMaxGreenTimeSecSouthNorth = $formFilters.find('.valueParamMaxGreenTimeSecSouthNorth').val();
		if(filterParamMaxGreenTimeSecSouthNorth != null && filterParamMaxGreenTimeSecSouthNorth !== '')
			filters.push({ name: 'fq', value: 'paramMaxGreenTimeSecSouthNorth:' + filterParamMaxGreenTimeSecSouthNorth });

		var filterParamPedestrianWaitThresholdSecNorthSouth = $formFilters.find('.valueParamPedestrianWaitThresholdSecNorthSouth').val();
		if(filterParamPedestrianWaitThresholdSecNorthSouth != null && filterParamPedestrianWaitThresholdSecNorthSouth !== '')
			filters.push({ name: 'fq', value: 'paramPedestrianWaitThresholdSecNorthSouth:' + filterParamPedestrianWaitThresholdSecNorthSouth });

		var filterParamPedestrianWaitThresholdSecWestEast = $formFilters.find('.valueParamPedestrianWaitThresholdSecWestEast').val();
		if(filterParamPedestrianWaitThresholdSecWestEast != null && filterParamPedestrianWaitThresholdSecWestEast !== '')
			filters.push({ name: 'fq', value: 'paramPedestrianWaitThresholdSecWestEast:' + filterParamPedestrianWaitThresholdSecWestEast });

		var filterParamVehicleQueueThresholdWestEast = $formFilters.find('.valueParamVehicleQueueThresholdWestEast').val();
		if(filterParamVehicleQueueThresholdWestEast != null && filterParamVehicleQueueThresholdWestEast !== '')
			filters.push({ name: 'fq', value: 'paramVehicleQueueThresholdWestEast:' + filterParamVehicleQueueThresholdWestEast });

		var filterParamVehicleQueueThresholdSouthNorth = $formFilters.find('.valueParamVehicleQueueThresholdSouthNorth').val();
		if(filterParamVehicleQueueThresholdSouthNorth != null && filterParamVehicleQueueThresholdSouthNorth !== '')
			filters.push({ name: 'fq', value: 'paramVehicleQueueThresholdSouthNorth:' + filterParamVehicleQueueThresholdSouthNorth });

		var filterParamPedestrianQueueThresholdNorthSouth = $formFilters.find('.valueParamPedestrianQueueThresholdNorthSouth').val();
		if(filterParamPedestrianQueueThresholdNorthSouth != null && filterParamPedestrianQueueThresholdNorthSouth !== '')
			filters.push({ name: 'fq', value: 'paramPedestrianQueueThresholdNorthSouth:' + filterParamPedestrianQueueThresholdNorthSouth });

		var filterParamPedestrianQueueThresholdWestEast = $formFilters.find('.valueParamPedestrianQueueThresholdWestEast').val();
		if(filterParamPedestrianQueueThresholdWestEast != null && filterParamPedestrianQueueThresholdWestEast !== '')
			filters.push({ name: 'fq', value: 'paramPedestrianQueueThresholdWestEast:' + filterParamPedestrianQueueThresholdWestEast });

		var filterParamRunTime = $formFilters.find('.valueParamRunTime').val();
		if(filterParamRunTime != null && filterParamRunTime !== '')
			filters.push({ name: 'fq', value: 'paramRunTime:' + filterParamRunTime });

		var filterParamStepSize = $formFilters.find('.valueParamStepSize').val();
		if(filterParamStepSize != null && filterParamStepSize !== '')
			filters.push({ name: 'fq', value: 'paramStepSize:' + filterParamStepSize });

		var filterParamItersPerPar = $formFilters.find('.valueParamItersPerPar').val();
		if(filterParamItersPerPar != null && filterParamItersPerPar !== '')
			filters.push({ name: 'fq', value: 'paramItersPerPar:' + filterParamItersPerPar });

		var filterParamTotalIterNum = $formFilters.find('.valueParamTotalIterNum').val();
		if(filterParamTotalIterNum != null && filterParamTotalIterNum !== '')
			filters.push({ name: 'fq', value: 'paramTotalIterNum:' + filterParamTotalIterNum });

		var filterReportKeys = $formFilters.find('.valueReportKeys').val();
		if(filterReportKeys != null && filterReportKeys !== '')
			filters.push({ name: 'fq', value: 'reportKeys:' + filterReportKeys });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
		if(filterPageUrlApi != null && filterPageUrlApi !== '')
			filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterTrafficFlowObservedIds = $formFilters.find('.valueTrafficFlowObservedIds').val();
		if(filterTrafficFlowObservedIds != null && filterTrafficFlowObservedIds !== '')
			filters.push({ name: 'fq', value: 'trafficFlowObservedIds:' + filterTrafficFlowObservedIds });

		var filterParamDemandScale = $formFilters.find('.valueParamDemandScale').val();
		if(filterParamDemandScale != null && filterParamDemandScale !== '')
			filters.push({ name: 'fq', value: 'paramDemandScale:' + filterParamDemandScale });
	}
	return filters;
}

function searchSmartTrafficLightVals(filters, success, error) {


	$.ajax({
		url: '/api/smart-traffic-light?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSmartTrafficLightObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fad fa-traffic-light-stop ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSmartTrafficLightVals($formFilters, success, error);
}

function suggestSmartTrafficLightReportKeys(filters, $list, pk = null, relate=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-file-chart-column ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			var val = o['smartTrafficLightKey'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_reportKeys_' + pk + '_smartTrafficLightKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueReportKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_reportKeys_" + pk + "_smartTrafficLightKey_" + o['pk'] + "'); patchSmartTrafficLightVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'ReportKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(relate)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SmartTrafficLightForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSimulationReportVals(filters, success, error);
}

// GET //

async function getSmartTrafficLight(pk) {
	$.ajax({
		url: '/api/smart-traffic-light/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSmartTrafficLight($formFilters, $formValues, pk, success, error) {
	var filters = patchSmartTrafficLightFilters($formFilters);

	var vals = {};

	var valuePk = $formValues.find('.valuePk').val();
	var removePk = $formValues.find('.removePk').val() === 'true';
	var setPk = removePk ? null : $formValues.find('.setPk').val();
	var addPk = $formValues.find('.addPk').val();
	if(removePk || setPk != null && setPk !== '')
		vals['setPk'] = setPk;
	if(addPk != null && addPk !== '')
		vals['addPk'] = addPk;
	var removePk = $formValues.find('.removePk').val();
	if(removePk != null && removePk !== '')
		vals['removePk'] = removePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	var removeCreated = $formValues.find('.removeCreated').val() === 'true';
	var setCreated = removeCreated ? null : $formValues.find('.setCreated').val();
	var addCreated = $formValues.find('.addCreated').val();
	if(removeCreated || setCreated != null && setCreated !== '')
		vals['setCreated'] = setCreated;
	if(addCreated != null && addCreated !== '')
		vals['addCreated'] = addCreated;
	var removeCreated = $formValues.find('.removeCreated').val();
	if(removeCreated != null && removeCreated !== '')
		vals['removeCreated'] = removeCreated;

	var valueModified = $formValues.find('.valueModified').val();
	var removeModified = $formValues.find('.removeModified').val() === 'true';
	var setModified = removeModified ? null : $formValues.find('.setModified').val();
	var addModified = $formValues.find('.addModified').val();
	if(removeModified || setModified != null && setModified !== '')
		vals['setModified'] = setModified;
	if(addModified != null && addModified !== '')
		vals['addModified'] = addModified;
	var removeModified = $formValues.find('.removeModified').val();
	if(removeModified != null && removeModified !== '')
		vals['removeModified'] = removeModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	var removeObjectId = $formValues.find('.removeObjectId').val() === 'true';
	var setObjectId = removeObjectId ? null : $formValues.find('.setObjectId').val();
	var addObjectId = $formValues.find('.addObjectId').val();
	if(removeObjectId || setObjectId != null && setObjectId !== '')
		vals['setObjectId'] = setObjectId;
	if(addObjectId != null && addObjectId !== '')
		vals['addObjectId'] = addObjectId;
	var removeObjectId = $formValues.find('.removeObjectId').val();
	if(removeObjectId != null && removeObjectId !== '')
		vals['removeObjectId'] = removeObjectId;

	var valueArchived = $formValues.find('.valueArchived').val();
	var removeArchived = $formValues.find('.removeArchived').val() === 'true';
	var valueArchivedSelectVal = $formValues.find('select.setArchived').val();
	if(valueArchivedSelectVal != null && valueArchivedSelectVal !== '')
		valueArchived = valueArchivedSelectVal == 'true';
	var setArchived = removeArchived ? null : valueArchived;
	var addArchived = $formValues.find('.addArchived').prop('checked');
	if(removeArchived || setArchived != null && setArchived !== '')
		vals['setArchived'] = setArchived;
	if(addArchived != null && addArchived !== '')
		vals['addArchived'] = addArchived;
	var removeArchived = $formValues.find('.removeArchived').prop('checked');
	if(removeArchived != null && removeArchived !== '')
		vals['removeArchived'] = removeArchived;

	var valueDeleted = $formValues.find('.valueDeleted').val();
	var removeDeleted = $formValues.find('.removeDeleted').val() === 'true';
	var valueDeletedSelectVal = $formValues.find('select.setDeleted').val();
	if(valueDeletedSelectVal != null && valueDeletedSelectVal !== '')
		valueDeleted = valueDeletedSelectVal == 'true';
	var setDeleted = removeDeleted ? null : valueDeleted;
	var addDeleted = $formValues.find('.addDeleted').prop('checked');
	if(removeDeleted || setDeleted != null && setDeleted !== '')
		vals['setDeleted'] = setDeleted;
	if(addDeleted != null && addDeleted !== '')
		vals['addDeleted'] = addDeleted;
	var removeDeleted = $formValues.find('.removeDeleted').prop('checked');
	if(removeDeleted != null && removeDeleted !== '')
		vals['removeDeleted'] = removeDeleted;

	var valueEntityId = $formValues.find('.valueEntityId').val();
	var removeEntityId = $formValues.find('.removeEntityId').val() === 'true';
	var setEntityId = removeEntityId ? null : $formValues.find('.setEntityId').val();
	var addEntityId = $formValues.find('.addEntityId').val();
	if(removeEntityId || setEntityId != null && setEntityId !== '')
		vals['setEntityId'] = setEntityId;
	if(addEntityId != null && addEntityId !== '')
		vals['addEntityId'] = addEntityId;
	var removeEntityId = $formValues.find('.removeEntityId').val();
	if(removeEntityId != null && removeEntityId !== '')
		vals['removeEntityId'] = removeEntityId;

	var valueSmartTrafficLightName = $formValues.find('.valueSmartTrafficLightName').val();
	var removeSmartTrafficLightName = $formValues.find('.removeSmartTrafficLightName').val() === 'true';
	var setSmartTrafficLightName = removeSmartTrafficLightName ? null : $formValues.find('.setSmartTrafficLightName').val();
	var addSmartTrafficLightName = $formValues.find('.addSmartTrafficLightName').val();
	if(removeSmartTrafficLightName || setSmartTrafficLightName != null && setSmartTrafficLightName !== '')
		vals['setSmartTrafficLightName'] = setSmartTrafficLightName;
	if(addSmartTrafficLightName != null && addSmartTrafficLightName !== '')
		vals['addSmartTrafficLightName'] = addSmartTrafficLightName;
	var removeSmartTrafficLightName = $formValues.find('.removeSmartTrafficLightName').val();
	if(removeSmartTrafficLightName != null && removeSmartTrafficLightName !== '')
		vals['removeSmartTrafficLightName'] = removeSmartTrafficLightName;

	var valueRouteIdNorth = $formValues.find('.valueRouteIdNorth').val();
	var removeRouteIdNorth = $formValues.find('.removeRouteIdNorth').val() === 'true';
	var setRouteIdNorth = removeRouteIdNorth ? null : $formValues.find('.setRouteIdNorth').val();
	var addRouteIdNorth = $formValues.find('.addRouteIdNorth').val();
	if(removeRouteIdNorth || setRouteIdNorth != null && setRouteIdNorth !== '')
		vals['setRouteIdNorth'] = setRouteIdNorth;
	if(addRouteIdNorth != null && addRouteIdNorth !== '')
		vals['addRouteIdNorth'] = addRouteIdNorth;
	var removeRouteIdNorth = $formValues.find('.removeRouteIdNorth').val();
	if(removeRouteIdNorth != null && removeRouteIdNorth !== '')
		vals['removeRouteIdNorth'] = removeRouteIdNorth;

	var valueRouteIdEast = $formValues.find('.valueRouteIdEast').val();
	var removeRouteIdEast = $formValues.find('.removeRouteIdEast').val() === 'true';
	var setRouteIdEast = removeRouteIdEast ? null : $formValues.find('.setRouteIdEast').val();
	var addRouteIdEast = $formValues.find('.addRouteIdEast').val();
	if(removeRouteIdEast || setRouteIdEast != null && setRouteIdEast !== '')
		vals['setRouteIdEast'] = setRouteIdEast;
	if(addRouteIdEast != null && addRouteIdEast !== '')
		vals['addRouteIdEast'] = addRouteIdEast;
	var removeRouteIdEast = $formValues.find('.removeRouteIdEast').val();
	if(removeRouteIdEast != null && removeRouteIdEast !== '')
		vals['removeRouteIdEast'] = removeRouteIdEast;

	var valueParamAvgVehiclePerMinFromWestToEast = $formValues.find('.valueParamAvgVehiclePerMinFromWestToEast').val();
	var removeParamAvgVehiclePerMinFromWestToEast = $formValues.find('.removeParamAvgVehiclePerMinFromWestToEast').val() === 'true';
	var setParamAvgVehiclePerMinFromWestToEast = removeParamAvgVehiclePerMinFromWestToEast ? null : $formValues.find('.setParamAvgVehiclePerMinFromWestToEast').val();
	var addParamAvgVehiclePerMinFromWestToEast = $formValues.find('.addParamAvgVehiclePerMinFromWestToEast').val();
	if(removeParamAvgVehiclePerMinFromWestToEast || setParamAvgVehiclePerMinFromWestToEast != null && setParamAvgVehiclePerMinFromWestToEast !== '')
		vals['setParamAvgVehiclePerMinFromWestToEast'] = setParamAvgVehiclePerMinFromWestToEast;
	if(addParamAvgVehiclePerMinFromWestToEast != null && addParamAvgVehiclePerMinFromWestToEast !== '')
		vals['addParamAvgVehiclePerMinFromWestToEast'] = addParamAvgVehiclePerMinFromWestToEast;
	var removeParamAvgVehiclePerMinFromWestToEast = $formValues.find('.removeParamAvgVehiclePerMinFromWestToEast').val();
	if(removeParamAvgVehiclePerMinFromWestToEast != null && removeParamAvgVehiclePerMinFromWestToEast !== '')
		vals['removeParamAvgVehiclePerMinFromWestToEast'] = removeParamAvgVehiclePerMinFromWestToEast;

	var valueParamAvgVehiclePerMinFromSouthToNorth = $formValues.find('.valueParamAvgVehiclePerMinFromSouthToNorth').val();
	var removeParamAvgVehiclePerMinFromSouthToNorth = $formValues.find('.removeParamAvgVehiclePerMinFromSouthToNorth').val() === 'true';
	var setParamAvgVehiclePerMinFromSouthToNorth = removeParamAvgVehiclePerMinFromSouthToNorth ? null : $formValues.find('.setParamAvgVehiclePerMinFromSouthToNorth').val();
	var addParamAvgVehiclePerMinFromSouthToNorth = $formValues.find('.addParamAvgVehiclePerMinFromSouthToNorth').val();
	if(removeParamAvgVehiclePerMinFromSouthToNorth || setParamAvgVehiclePerMinFromSouthToNorth != null && setParamAvgVehiclePerMinFromSouthToNorth !== '')
		vals['setParamAvgVehiclePerMinFromSouthToNorth'] = setParamAvgVehiclePerMinFromSouthToNorth;
	if(addParamAvgVehiclePerMinFromSouthToNorth != null && addParamAvgVehiclePerMinFromSouthToNorth !== '')
		vals['addParamAvgVehiclePerMinFromSouthToNorth'] = addParamAvgVehiclePerMinFromSouthToNorth;
	var removeParamAvgVehiclePerMinFromSouthToNorth = $formValues.find('.removeParamAvgVehiclePerMinFromSouthToNorth').val();
	if(removeParamAvgVehiclePerMinFromSouthToNorth != null && removeParamAvgVehiclePerMinFromSouthToNorth !== '')
		vals['removeParamAvgVehiclePerMinFromSouthToNorth'] = removeParamAvgVehiclePerMinFromSouthToNorth;

	var valueParamVehicleDemandScalingFactor = $formValues.find('.valueParamVehicleDemandScalingFactor').val();
	var removeParamVehicleDemandScalingFactor = $formValues.find('.removeParamVehicleDemandScalingFactor').val() === 'true';
	var setParamVehicleDemandScalingFactor = removeParamVehicleDemandScalingFactor ? null : $formValues.find('.setParamVehicleDemandScalingFactor').val();
	var addParamVehicleDemandScalingFactor = $formValues.find('.addParamVehicleDemandScalingFactor').val();
	if(removeParamVehicleDemandScalingFactor || setParamVehicleDemandScalingFactor != null && setParamVehicleDemandScalingFactor !== '')
		vals['setParamVehicleDemandScalingFactor'] = setParamVehicleDemandScalingFactor;
	if(addParamVehicleDemandScalingFactor != null && addParamVehicleDemandScalingFactor !== '')
		vals['addParamVehicleDemandScalingFactor'] = addParamVehicleDemandScalingFactor;
	var removeParamVehicleDemandScalingFactor = $formValues.find('.removeParamVehicleDemandScalingFactor').val();
	if(removeParamVehicleDemandScalingFactor != null && removeParamVehicleDemandScalingFactor !== '')
		vals['removeParamVehicleDemandScalingFactor'] = removeParamVehicleDemandScalingFactor;

	var valueParamAvgPedestrianPerMinFromWestToEast = $formValues.find('.valueParamAvgPedestrianPerMinFromWestToEast').val();
	var removeParamAvgPedestrianPerMinFromWestToEast = $formValues.find('.removeParamAvgPedestrianPerMinFromWestToEast').val() === 'true';
	var setParamAvgPedestrianPerMinFromWestToEast = removeParamAvgPedestrianPerMinFromWestToEast ? null : $formValues.find('.setParamAvgPedestrianPerMinFromWestToEast').val();
	var addParamAvgPedestrianPerMinFromWestToEast = $formValues.find('.addParamAvgPedestrianPerMinFromWestToEast').val();
	if(removeParamAvgPedestrianPerMinFromWestToEast || setParamAvgPedestrianPerMinFromWestToEast != null && setParamAvgPedestrianPerMinFromWestToEast !== '')
		vals['setParamAvgPedestrianPerMinFromWestToEast'] = setParamAvgPedestrianPerMinFromWestToEast;
	if(addParamAvgPedestrianPerMinFromWestToEast != null && addParamAvgPedestrianPerMinFromWestToEast !== '')
		vals['addParamAvgPedestrianPerMinFromWestToEast'] = addParamAvgPedestrianPerMinFromWestToEast;
	var removeParamAvgPedestrianPerMinFromWestToEast = $formValues.find('.removeParamAvgPedestrianPerMinFromWestToEast').val();
	if(removeParamAvgPedestrianPerMinFromWestToEast != null && removeParamAvgPedestrianPerMinFromWestToEast !== '')
		vals['removeParamAvgPedestrianPerMinFromWestToEast'] = removeParamAvgPedestrianPerMinFromWestToEast;

	var valueParamAvgPedestrianPerMinFromSouthToNorth = $formValues.find('.valueParamAvgPedestrianPerMinFromSouthToNorth').val();
	var removeParamAvgPedestrianPerMinFromSouthToNorth = $formValues.find('.removeParamAvgPedestrianPerMinFromSouthToNorth').val() === 'true';
	var setParamAvgPedestrianPerMinFromSouthToNorth = removeParamAvgPedestrianPerMinFromSouthToNorth ? null : $formValues.find('.setParamAvgPedestrianPerMinFromSouthToNorth').val();
	var addParamAvgPedestrianPerMinFromSouthToNorth = $formValues.find('.addParamAvgPedestrianPerMinFromSouthToNorth').val();
	if(removeParamAvgPedestrianPerMinFromSouthToNorth || setParamAvgPedestrianPerMinFromSouthToNorth != null && setParamAvgPedestrianPerMinFromSouthToNorth !== '')
		vals['setParamAvgPedestrianPerMinFromSouthToNorth'] = setParamAvgPedestrianPerMinFromSouthToNorth;
	if(addParamAvgPedestrianPerMinFromSouthToNorth != null && addParamAvgPedestrianPerMinFromSouthToNorth !== '')
		vals['addParamAvgPedestrianPerMinFromSouthToNorth'] = addParamAvgPedestrianPerMinFromSouthToNorth;
	var removeParamAvgPedestrianPerMinFromSouthToNorth = $formValues.find('.removeParamAvgPedestrianPerMinFromSouthToNorth').val();
	if(removeParamAvgPedestrianPerMinFromSouthToNorth != null && removeParamAvgPedestrianPerMinFromSouthToNorth !== '')
		vals['removeParamAvgPedestrianPerMinFromSouthToNorth'] = removeParamAvgPedestrianPerMinFromSouthToNorth;

	var valueParamPedestrianDemandScalingFactor = $formValues.find('.valueParamPedestrianDemandScalingFactor').val();
	var removeParamPedestrianDemandScalingFactor = $formValues.find('.removeParamPedestrianDemandScalingFactor').val() === 'true';
	var setParamPedestrianDemandScalingFactor = removeParamPedestrianDemandScalingFactor ? null : $formValues.find('.setParamPedestrianDemandScalingFactor').val();
	var addParamPedestrianDemandScalingFactor = $formValues.find('.addParamPedestrianDemandScalingFactor').val();
	if(removeParamPedestrianDemandScalingFactor || setParamPedestrianDemandScalingFactor != null && setParamPedestrianDemandScalingFactor !== '')
		vals['setParamPedestrianDemandScalingFactor'] = setParamPedestrianDemandScalingFactor;
	if(addParamPedestrianDemandScalingFactor != null && addParamPedestrianDemandScalingFactor !== '')
		vals['addParamPedestrianDemandScalingFactor'] = addParamPedestrianDemandScalingFactor;
	var removeParamPedestrianDemandScalingFactor = $formValues.find('.removeParamPedestrianDemandScalingFactor').val();
	if(removeParamPedestrianDemandScalingFactor != null && removeParamPedestrianDemandScalingFactor !== '')
		vals['removeParamPedestrianDemandScalingFactor'] = removeParamPedestrianDemandScalingFactor;

	var valueParamMinGreenTimeSecWestEast = $formValues.find('.valueParamMinGreenTimeSecWestEast').val();
	var removeParamMinGreenTimeSecWestEast = $formValues.find('.removeParamMinGreenTimeSecWestEast').val() === 'true';
	var setParamMinGreenTimeSecWestEast = removeParamMinGreenTimeSecWestEast ? null : $formValues.find('.setParamMinGreenTimeSecWestEast').val();
	var addParamMinGreenTimeSecWestEast = $formValues.find('.addParamMinGreenTimeSecWestEast').val();
	if(removeParamMinGreenTimeSecWestEast || setParamMinGreenTimeSecWestEast != null && setParamMinGreenTimeSecWestEast !== '')
		vals['setParamMinGreenTimeSecWestEast'] = setParamMinGreenTimeSecWestEast;
	if(addParamMinGreenTimeSecWestEast != null && addParamMinGreenTimeSecWestEast !== '')
		vals['addParamMinGreenTimeSecWestEast'] = addParamMinGreenTimeSecWestEast;
	var removeParamMinGreenTimeSecWestEast = $formValues.find('.removeParamMinGreenTimeSecWestEast').val();
	if(removeParamMinGreenTimeSecWestEast != null && removeParamMinGreenTimeSecWestEast !== '')
		vals['removeParamMinGreenTimeSecWestEast'] = removeParamMinGreenTimeSecWestEast;

	var valueParamMaxGreenTimeSecWestEast = $formValues.find('.valueParamMaxGreenTimeSecWestEast').val();
	var removeParamMaxGreenTimeSecWestEast = $formValues.find('.removeParamMaxGreenTimeSecWestEast').val() === 'true';
	var setParamMaxGreenTimeSecWestEast = removeParamMaxGreenTimeSecWestEast ? null : $formValues.find('.setParamMaxGreenTimeSecWestEast').val();
	var addParamMaxGreenTimeSecWestEast = $formValues.find('.addParamMaxGreenTimeSecWestEast').val();
	if(removeParamMaxGreenTimeSecWestEast || setParamMaxGreenTimeSecWestEast != null && setParamMaxGreenTimeSecWestEast !== '')
		vals['setParamMaxGreenTimeSecWestEast'] = setParamMaxGreenTimeSecWestEast;
	if(addParamMaxGreenTimeSecWestEast != null && addParamMaxGreenTimeSecWestEast !== '')
		vals['addParamMaxGreenTimeSecWestEast'] = addParamMaxGreenTimeSecWestEast;
	var removeParamMaxGreenTimeSecWestEast = $formValues.find('.removeParamMaxGreenTimeSecWestEast').val();
	if(removeParamMaxGreenTimeSecWestEast != null && removeParamMaxGreenTimeSecWestEast !== '')
		vals['removeParamMaxGreenTimeSecWestEast'] = removeParamMaxGreenTimeSecWestEast;

	var valueParamMinGreenTimeSecSouthNorth = $formValues.find('.valueParamMinGreenTimeSecSouthNorth').val();
	var removeParamMinGreenTimeSecSouthNorth = $formValues.find('.removeParamMinGreenTimeSecSouthNorth').val() === 'true';
	var setParamMinGreenTimeSecSouthNorth = removeParamMinGreenTimeSecSouthNorth ? null : $formValues.find('.setParamMinGreenTimeSecSouthNorth').val();
	var addParamMinGreenTimeSecSouthNorth = $formValues.find('.addParamMinGreenTimeSecSouthNorth').val();
	if(removeParamMinGreenTimeSecSouthNorth || setParamMinGreenTimeSecSouthNorth != null && setParamMinGreenTimeSecSouthNorth !== '')
		vals['setParamMinGreenTimeSecSouthNorth'] = setParamMinGreenTimeSecSouthNorth;
	if(addParamMinGreenTimeSecSouthNorth != null && addParamMinGreenTimeSecSouthNorth !== '')
		vals['addParamMinGreenTimeSecSouthNorth'] = addParamMinGreenTimeSecSouthNorth;
	var removeParamMinGreenTimeSecSouthNorth = $formValues.find('.removeParamMinGreenTimeSecSouthNorth').val();
	if(removeParamMinGreenTimeSecSouthNorth != null && removeParamMinGreenTimeSecSouthNorth !== '')
		vals['removeParamMinGreenTimeSecSouthNorth'] = removeParamMinGreenTimeSecSouthNorth;

	var valueParamMaxGreenTimeSecSouthNorth = $formValues.find('.valueParamMaxGreenTimeSecSouthNorth').val();
	var removeParamMaxGreenTimeSecSouthNorth = $formValues.find('.removeParamMaxGreenTimeSecSouthNorth').val() === 'true';
	var setParamMaxGreenTimeSecSouthNorth = removeParamMaxGreenTimeSecSouthNorth ? null : $formValues.find('.setParamMaxGreenTimeSecSouthNorth').val();
	var addParamMaxGreenTimeSecSouthNorth = $formValues.find('.addParamMaxGreenTimeSecSouthNorth').val();
	if(removeParamMaxGreenTimeSecSouthNorth || setParamMaxGreenTimeSecSouthNorth != null && setParamMaxGreenTimeSecSouthNorth !== '')
		vals['setParamMaxGreenTimeSecSouthNorth'] = setParamMaxGreenTimeSecSouthNorth;
	if(addParamMaxGreenTimeSecSouthNorth != null && addParamMaxGreenTimeSecSouthNorth !== '')
		vals['addParamMaxGreenTimeSecSouthNorth'] = addParamMaxGreenTimeSecSouthNorth;
	var removeParamMaxGreenTimeSecSouthNorth = $formValues.find('.removeParamMaxGreenTimeSecSouthNorth').val();
	if(removeParamMaxGreenTimeSecSouthNorth != null && removeParamMaxGreenTimeSecSouthNorth !== '')
		vals['removeParamMaxGreenTimeSecSouthNorth'] = removeParamMaxGreenTimeSecSouthNorth;

	var valueParamPedestrianWaitThresholdSecNorthSouth = $formValues.find('.valueParamPedestrianWaitThresholdSecNorthSouth').val();
	var removeParamPedestrianWaitThresholdSecNorthSouth = $formValues.find('.removeParamPedestrianWaitThresholdSecNorthSouth').val() === 'true';
	var setParamPedestrianWaitThresholdSecNorthSouth = removeParamPedestrianWaitThresholdSecNorthSouth ? null : $formValues.find('.setParamPedestrianWaitThresholdSecNorthSouth').val();
	var addParamPedestrianWaitThresholdSecNorthSouth = $formValues.find('.addParamPedestrianWaitThresholdSecNorthSouth').val();
	if(removeParamPedestrianWaitThresholdSecNorthSouth || setParamPedestrianWaitThresholdSecNorthSouth != null && setParamPedestrianWaitThresholdSecNorthSouth !== '')
		vals['setParamPedestrianWaitThresholdSecNorthSouth'] = setParamPedestrianWaitThresholdSecNorthSouth;
	if(addParamPedestrianWaitThresholdSecNorthSouth != null && addParamPedestrianWaitThresholdSecNorthSouth !== '')
		vals['addParamPedestrianWaitThresholdSecNorthSouth'] = addParamPedestrianWaitThresholdSecNorthSouth;
	var removeParamPedestrianWaitThresholdSecNorthSouth = $formValues.find('.removeParamPedestrianWaitThresholdSecNorthSouth').val();
	if(removeParamPedestrianWaitThresholdSecNorthSouth != null && removeParamPedestrianWaitThresholdSecNorthSouth !== '')
		vals['removeParamPedestrianWaitThresholdSecNorthSouth'] = removeParamPedestrianWaitThresholdSecNorthSouth;

	var valueParamPedestrianWaitThresholdSecWestEast = $formValues.find('.valueParamPedestrianWaitThresholdSecWestEast').val();
	var removeParamPedestrianWaitThresholdSecWestEast = $formValues.find('.removeParamPedestrianWaitThresholdSecWestEast').val() === 'true';
	var setParamPedestrianWaitThresholdSecWestEast = removeParamPedestrianWaitThresholdSecWestEast ? null : $formValues.find('.setParamPedestrianWaitThresholdSecWestEast').val();
	var addParamPedestrianWaitThresholdSecWestEast = $formValues.find('.addParamPedestrianWaitThresholdSecWestEast').val();
	if(removeParamPedestrianWaitThresholdSecWestEast || setParamPedestrianWaitThresholdSecWestEast != null && setParamPedestrianWaitThresholdSecWestEast !== '')
		vals['setParamPedestrianWaitThresholdSecWestEast'] = setParamPedestrianWaitThresholdSecWestEast;
	if(addParamPedestrianWaitThresholdSecWestEast != null && addParamPedestrianWaitThresholdSecWestEast !== '')
		vals['addParamPedestrianWaitThresholdSecWestEast'] = addParamPedestrianWaitThresholdSecWestEast;
	var removeParamPedestrianWaitThresholdSecWestEast = $formValues.find('.removeParamPedestrianWaitThresholdSecWestEast').val();
	if(removeParamPedestrianWaitThresholdSecWestEast != null && removeParamPedestrianWaitThresholdSecWestEast !== '')
		vals['removeParamPedestrianWaitThresholdSecWestEast'] = removeParamPedestrianWaitThresholdSecWestEast;

	var valueParamVehicleQueueThresholdWestEast = $formValues.find('.valueParamVehicleQueueThresholdWestEast').val();
	var removeParamVehicleQueueThresholdWestEast = $formValues.find('.removeParamVehicleQueueThresholdWestEast').val() === 'true';
	var setParamVehicleQueueThresholdWestEast = removeParamVehicleQueueThresholdWestEast ? null : $formValues.find('.setParamVehicleQueueThresholdWestEast').val();
	var addParamVehicleQueueThresholdWestEast = $formValues.find('.addParamVehicleQueueThresholdWestEast').val();
	if(removeParamVehicleQueueThresholdWestEast || setParamVehicleQueueThresholdWestEast != null && setParamVehicleQueueThresholdWestEast !== '')
		vals['setParamVehicleQueueThresholdWestEast'] = setParamVehicleQueueThresholdWestEast;
	if(addParamVehicleQueueThresholdWestEast != null && addParamVehicleQueueThresholdWestEast !== '')
		vals['addParamVehicleQueueThresholdWestEast'] = addParamVehicleQueueThresholdWestEast;
	var removeParamVehicleQueueThresholdWestEast = $formValues.find('.removeParamVehicleQueueThresholdWestEast').val();
	if(removeParamVehicleQueueThresholdWestEast != null && removeParamVehicleQueueThresholdWestEast !== '')
		vals['removeParamVehicleQueueThresholdWestEast'] = removeParamVehicleQueueThresholdWestEast;

	var valueParamVehicleQueueThresholdSouthNorth = $formValues.find('.valueParamVehicleQueueThresholdSouthNorth').val();
	var removeParamVehicleQueueThresholdSouthNorth = $formValues.find('.removeParamVehicleQueueThresholdSouthNorth').val() === 'true';
	var setParamVehicleQueueThresholdSouthNorth = removeParamVehicleQueueThresholdSouthNorth ? null : $formValues.find('.setParamVehicleQueueThresholdSouthNorth').val();
	var addParamVehicleQueueThresholdSouthNorth = $formValues.find('.addParamVehicleQueueThresholdSouthNorth').val();
	if(removeParamVehicleQueueThresholdSouthNorth || setParamVehicleQueueThresholdSouthNorth != null && setParamVehicleQueueThresholdSouthNorth !== '')
		vals['setParamVehicleQueueThresholdSouthNorth'] = setParamVehicleQueueThresholdSouthNorth;
	if(addParamVehicleQueueThresholdSouthNorth != null && addParamVehicleQueueThresholdSouthNorth !== '')
		vals['addParamVehicleQueueThresholdSouthNorth'] = addParamVehicleQueueThresholdSouthNorth;
	var removeParamVehicleQueueThresholdSouthNorth = $formValues.find('.removeParamVehicleQueueThresholdSouthNorth').val();
	if(removeParamVehicleQueueThresholdSouthNorth != null && removeParamVehicleQueueThresholdSouthNorth !== '')
		vals['removeParamVehicleQueueThresholdSouthNorth'] = removeParamVehicleQueueThresholdSouthNorth;

	var valueParamPedestrianQueueThresholdNorthSouth = $formValues.find('.valueParamPedestrianQueueThresholdNorthSouth').val();
	var removeParamPedestrianQueueThresholdNorthSouth = $formValues.find('.removeParamPedestrianQueueThresholdNorthSouth').val() === 'true';
	var setParamPedestrianQueueThresholdNorthSouth = removeParamPedestrianQueueThresholdNorthSouth ? null : $formValues.find('.setParamPedestrianQueueThresholdNorthSouth').val();
	var addParamPedestrianQueueThresholdNorthSouth = $formValues.find('.addParamPedestrianQueueThresholdNorthSouth').val();
	if(removeParamPedestrianQueueThresholdNorthSouth || setParamPedestrianQueueThresholdNorthSouth != null && setParamPedestrianQueueThresholdNorthSouth !== '')
		vals['setParamPedestrianQueueThresholdNorthSouth'] = setParamPedestrianQueueThresholdNorthSouth;
	if(addParamPedestrianQueueThresholdNorthSouth != null && addParamPedestrianQueueThresholdNorthSouth !== '')
		vals['addParamPedestrianQueueThresholdNorthSouth'] = addParamPedestrianQueueThresholdNorthSouth;
	var removeParamPedestrianQueueThresholdNorthSouth = $formValues.find('.removeParamPedestrianQueueThresholdNorthSouth').val();
	if(removeParamPedestrianQueueThresholdNorthSouth != null && removeParamPedestrianQueueThresholdNorthSouth !== '')
		vals['removeParamPedestrianQueueThresholdNorthSouth'] = removeParamPedestrianQueueThresholdNorthSouth;

	var valueParamPedestrianQueueThresholdWestEast = $formValues.find('.valueParamPedestrianQueueThresholdWestEast').val();
	var removeParamPedestrianQueueThresholdWestEast = $formValues.find('.removeParamPedestrianQueueThresholdWestEast').val() === 'true';
	var setParamPedestrianQueueThresholdWestEast = removeParamPedestrianQueueThresholdWestEast ? null : $formValues.find('.setParamPedestrianQueueThresholdWestEast').val();
	var addParamPedestrianQueueThresholdWestEast = $formValues.find('.addParamPedestrianQueueThresholdWestEast').val();
	if(removeParamPedestrianQueueThresholdWestEast || setParamPedestrianQueueThresholdWestEast != null && setParamPedestrianQueueThresholdWestEast !== '')
		vals['setParamPedestrianQueueThresholdWestEast'] = setParamPedestrianQueueThresholdWestEast;
	if(addParamPedestrianQueueThresholdWestEast != null && addParamPedestrianQueueThresholdWestEast !== '')
		vals['addParamPedestrianQueueThresholdWestEast'] = addParamPedestrianQueueThresholdWestEast;
	var removeParamPedestrianQueueThresholdWestEast = $formValues.find('.removeParamPedestrianQueueThresholdWestEast').val();
	if(removeParamPedestrianQueueThresholdWestEast != null && removeParamPedestrianQueueThresholdWestEast !== '')
		vals['removeParamPedestrianQueueThresholdWestEast'] = removeParamPedestrianQueueThresholdWestEast;

	var valueParamRunTime = $formValues.find('.valueParamRunTime').val();
	var removeParamRunTime = $formValues.find('.removeParamRunTime').val() === 'true';
	var setParamRunTime = removeParamRunTime ? null : $formValues.find('.setParamRunTime').val();
	var addParamRunTime = $formValues.find('.addParamRunTime').val();
	if(removeParamRunTime || setParamRunTime != null && setParamRunTime !== '')
		vals['setParamRunTime'] = setParamRunTime;
	if(addParamRunTime != null && addParamRunTime !== '')
		vals['addParamRunTime'] = addParamRunTime;
	var removeParamRunTime = $formValues.find('.removeParamRunTime').val();
	if(removeParamRunTime != null && removeParamRunTime !== '')
		vals['removeParamRunTime'] = removeParamRunTime;

	var valueParamStepSize = $formValues.find('.valueParamStepSize').val();
	var removeParamStepSize = $formValues.find('.removeParamStepSize').val() === 'true';
	var setParamStepSize = removeParamStepSize ? null : $formValues.find('.setParamStepSize').val();
	var addParamStepSize = $formValues.find('.addParamStepSize').val();
	if(removeParamStepSize || setParamStepSize != null && setParamStepSize !== '')
		vals['setParamStepSize'] = setParamStepSize;
	if(addParamStepSize != null && addParamStepSize !== '')
		vals['addParamStepSize'] = addParamStepSize;
	var removeParamStepSize = $formValues.find('.removeParamStepSize').val();
	if(removeParamStepSize != null && removeParamStepSize !== '')
		vals['removeParamStepSize'] = removeParamStepSize;

	var valueParamItersPerPar = $formValues.find('.valueParamItersPerPar').val();
	var removeParamItersPerPar = $formValues.find('.removeParamItersPerPar').val() === 'true';
	var setParamItersPerPar = removeParamItersPerPar ? null : $formValues.find('.setParamItersPerPar').val();
	var addParamItersPerPar = $formValues.find('.addParamItersPerPar').val();
	if(removeParamItersPerPar || setParamItersPerPar != null && setParamItersPerPar !== '')
		vals['setParamItersPerPar'] = setParamItersPerPar;
	if(addParamItersPerPar != null && addParamItersPerPar !== '')
		vals['addParamItersPerPar'] = addParamItersPerPar;
	var removeParamItersPerPar = $formValues.find('.removeParamItersPerPar').val();
	if(removeParamItersPerPar != null && removeParamItersPerPar !== '')
		vals['removeParamItersPerPar'] = removeParamItersPerPar;

	var valueParamTotalIterNum = $formValues.find('.valueParamTotalIterNum').val();
	var removeParamTotalIterNum = $formValues.find('.removeParamTotalIterNum').val() === 'true';
	var setParamTotalIterNum = removeParamTotalIterNum ? null : $formValues.find('.setParamTotalIterNum').val();
	var addParamTotalIterNum = $formValues.find('.addParamTotalIterNum').val();
	if(removeParamTotalIterNum || setParamTotalIterNum != null && setParamTotalIterNum !== '')
		vals['setParamTotalIterNum'] = setParamTotalIterNum;
	if(addParamTotalIterNum != null && addParamTotalIterNum !== '')
		vals['addParamTotalIterNum'] = addParamTotalIterNum;
	var removeParamTotalIterNum = $formValues.find('.removeParamTotalIterNum').val();
	if(removeParamTotalIterNum != null && removeParamTotalIterNum !== '')
		vals['removeParamTotalIterNum'] = removeParamTotalIterNum;

	var valueReportKeys = $formValues.find('input.valueReportKeys:checked').val();
	if(valueReportKeys != null && valueReportKeys !== '')
		vals['addReportKeys'] = valueReportKeys;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	var removeInheritPk = $formValues.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formValues.find('.setInheritPk').val();
	var addInheritPk = $formValues.find('.addInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formValues.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	var removeSessionId = $formValues.find('.removeSessionId').val() === 'true';
	var setSessionId = removeSessionId ? null : $formValues.find('.setSessionId').val();
	var addSessionId = $formValues.find('.addSessionId').val();
	if(removeSessionId || setSessionId != null && setSessionId !== '')
		vals['setSessionId'] = setSessionId;
	if(addSessionId != null && addSessionId !== '')
		vals['addSessionId'] = addSessionId;
	var removeSessionId = $formValues.find('.removeSessionId').val();
	if(removeSessionId != null && removeSessionId !== '')
		vals['removeSessionId'] = removeSessionId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	var removeUserKey = $formValues.find('.removeUserKey').val() === 'true';
	var setUserKey = removeUserKey ? null : $formValues.find('.setUserKey').val();
	var addUserKey = $formValues.find('.addUserKey').val();
	if(removeUserKey || setUserKey != null && setUserKey !== '')
		vals['setUserKey'] = setUserKey;
	if(addUserKey != null && addUserKey !== '')
		vals['addUserKey'] = addUserKey;
	var removeUserKey = $formValues.find('.removeUserKey').val();
	if(removeUserKey != null && removeUserKey !== '')
		vals['removeUserKey'] = removeUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val() === 'true';
	var setObjectTitle = removeObjectTitle ? null : $formValues.find('.setObjectTitle').val();
	var addObjectTitle = $formValues.find('.addObjectTitle').val();
	if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
		vals['setObjectTitle'] = setObjectTitle;
	if(addObjectTitle != null && addObjectTitle !== '')
		vals['addObjectTitle'] = addObjectTitle;
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val();
	if(removeObjectTitle != null && removeObjectTitle !== '')
		vals['removeObjectTitle'] = removeObjectTitle;

	patchSmartTrafficLightVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchSmartTrafficLightFilters($formFilters) {
	var filters = [];
	if($formFilters) {
		filters.push({ name: 'softCommit', value: 'true' });

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var filterEntityId = $formFilters.find('.valueEntityId').val();
		if(filterEntityId != null && filterEntityId !== '')
			filters.push({ name: 'fq', value: 'entityId:' + filterEntityId });

		var filterSmartTrafficLightName = $formFilters.find('.valueSmartTrafficLightName').val();
		if(filterSmartTrafficLightName != null && filterSmartTrafficLightName !== '')
			filters.push({ name: 'fq', value: 'smartTrafficLightName:' + filterSmartTrafficLightName });

		var filterRouteIdNorth = $formFilters.find('.valueRouteIdNorth').val();
		if(filterRouteIdNorth != null && filterRouteIdNorth !== '')
			filters.push({ name: 'fq', value: 'routeIdNorth:' + filterRouteIdNorth });

		var filterRouteIdEast = $formFilters.find('.valueRouteIdEast').val();
		if(filterRouteIdEast != null && filterRouteIdEast !== '')
			filters.push({ name: 'fq', value: 'routeIdEast:' + filterRouteIdEast });

		var filterParamAvgVehiclePerMinFromWestToEast = $formFilters.find('.valueParamAvgVehiclePerMinFromWestToEast').val();
		if(filterParamAvgVehiclePerMinFromWestToEast != null && filterParamAvgVehiclePerMinFromWestToEast !== '')
			filters.push({ name: 'fq', value: 'paramAvgVehiclePerMinFromWestToEast:' + filterParamAvgVehiclePerMinFromWestToEast });

		var filterParamAvgVehiclePerMinFromSouthToNorth = $formFilters.find('.valueParamAvgVehiclePerMinFromSouthToNorth').val();
		if(filterParamAvgVehiclePerMinFromSouthToNorth != null && filterParamAvgVehiclePerMinFromSouthToNorth !== '')
			filters.push({ name: 'fq', value: 'paramAvgVehiclePerMinFromSouthToNorth:' + filterParamAvgVehiclePerMinFromSouthToNorth });

		var filterParamVehicleDemandScalingFactor = $formFilters.find('.valueParamVehicleDemandScalingFactor').val();
		if(filterParamVehicleDemandScalingFactor != null && filterParamVehicleDemandScalingFactor !== '')
			filters.push({ name: 'fq', value: 'paramVehicleDemandScalingFactor:' + filterParamVehicleDemandScalingFactor });

		var filterParamAvgPedestrianPerMinFromWestToEast = $formFilters.find('.valueParamAvgPedestrianPerMinFromWestToEast').val();
		if(filterParamAvgPedestrianPerMinFromWestToEast != null && filterParamAvgPedestrianPerMinFromWestToEast !== '')
			filters.push({ name: 'fq', value: 'paramAvgPedestrianPerMinFromWestToEast:' + filterParamAvgPedestrianPerMinFromWestToEast });

		var filterParamAvgPedestrianPerMinFromSouthToNorth = $formFilters.find('.valueParamAvgPedestrianPerMinFromSouthToNorth').val();
		if(filterParamAvgPedestrianPerMinFromSouthToNorth != null && filterParamAvgPedestrianPerMinFromSouthToNorth !== '')
			filters.push({ name: 'fq', value: 'paramAvgPedestrianPerMinFromSouthToNorth:' + filterParamAvgPedestrianPerMinFromSouthToNorth });

		var filterParamPedestrianDemandScalingFactor = $formFilters.find('.valueParamPedestrianDemandScalingFactor').val();
		if(filterParamPedestrianDemandScalingFactor != null && filterParamPedestrianDemandScalingFactor !== '')
			filters.push({ name: 'fq', value: 'paramPedestrianDemandScalingFactor:' + filterParamPedestrianDemandScalingFactor });

		var filterParamMinGreenTimeSecWestEast = $formFilters.find('.valueParamMinGreenTimeSecWestEast').val();
		if(filterParamMinGreenTimeSecWestEast != null && filterParamMinGreenTimeSecWestEast !== '')
			filters.push({ name: 'fq', value: 'paramMinGreenTimeSecWestEast:' + filterParamMinGreenTimeSecWestEast });

		var filterParamMaxGreenTimeSecWestEast = $formFilters.find('.valueParamMaxGreenTimeSecWestEast').val();
		if(filterParamMaxGreenTimeSecWestEast != null && filterParamMaxGreenTimeSecWestEast !== '')
			filters.push({ name: 'fq', value: 'paramMaxGreenTimeSecWestEast:' + filterParamMaxGreenTimeSecWestEast });

		var filterParamMinGreenTimeSecSouthNorth = $formFilters.find('.valueParamMinGreenTimeSecSouthNorth').val();
		if(filterParamMinGreenTimeSecSouthNorth != null && filterParamMinGreenTimeSecSouthNorth !== '')
			filters.push({ name: 'fq', value: 'paramMinGreenTimeSecSouthNorth:' + filterParamMinGreenTimeSecSouthNorth });

		var filterParamMaxGreenTimeSecSouthNorth = $formFilters.find('.valueParamMaxGreenTimeSecSouthNorth').val();
		if(filterParamMaxGreenTimeSecSouthNorth != null && filterParamMaxGreenTimeSecSouthNorth !== '')
			filters.push({ name: 'fq', value: 'paramMaxGreenTimeSecSouthNorth:' + filterParamMaxGreenTimeSecSouthNorth });

		var filterParamPedestrianWaitThresholdSecNorthSouth = $formFilters.find('.valueParamPedestrianWaitThresholdSecNorthSouth').val();
		if(filterParamPedestrianWaitThresholdSecNorthSouth != null && filterParamPedestrianWaitThresholdSecNorthSouth !== '')
			filters.push({ name: 'fq', value: 'paramPedestrianWaitThresholdSecNorthSouth:' + filterParamPedestrianWaitThresholdSecNorthSouth });

		var filterParamPedestrianWaitThresholdSecWestEast = $formFilters.find('.valueParamPedestrianWaitThresholdSecWestEast').val();
		if(filterParamPedestrianWaitThresholdSecWestEast != null && filterParamPedestrianWaitThresholdSecWestEast !== '')
			filters.push({ name: 'fq', value: 'paramPedestrianWaitThresholdSecWestEast:' + filterParamPedestrianWaitThresholdSecWestEast });

		var filterParamVehicleQueueThresholdWestEast = $formFilters.find('.valueParamVehicleQueueThresholdWestEast').val();
		if(filterParamVehicleQueueThresholdWestEast != null && filterParamVehicleQueueThresholdWestEast !== '')
			filters.push({ name: 'fq', value: 'paramVehicleQueueThresholdWestEast:' + filterParamVehicleQueueThresholdWestEast });

		var filterParamVehicleQueueThresholdSouthNorth = $formFilters.find('.valueParamVehicleQueueThresholdSouthNorth').val();
		if(filterParamVehicleQueueThresholdSouthNorth != null && filterParamVehicleQueueThresholdSouthNorth !== '')
			filters.push({ name: 'fq', value: 'paramVehicleQueueThresholdSouthNorth:' + filterParamVehicleQueueThresholdSouthNorth });

		var filterParamPedestrianQueueThresholdNorthSouth = $formFilters.find('.valueParamPedestrianQueueThresholdNorthSouth').val();
		if(filterParamPedestrianQueueThresholdNorthSouth != null && filterParamPedestrianQueueThresholdNorthSouth !== '')
			filters.push({ name: 'fq', value: 'paramPedestrianQueueThresholdNorthSouth:' + filterParamPedestrianQueueThresholdNorthSouth });

		var filterParamPedestrianQueueThresholdWestEast = $formFilters.find('.valueParamPedestrianQueueThresholdWestEast').val();
		if(filterParamPedestrianQueueThresholdWestEast != null && filterParamPedestrianQueueThresholdWestEast !== '')
			filters.push({ name: 'fq', value: 'paramPedestrianQueueThresholdWestEast:' + filterParamPedestrianQueueThresholdWestEast });

		var filterParamRunTime = $formFilters.find('.valueParamRunTime').val();
		if(filterParamRunTime != null && filterParamRunTime !== '')
			filters.push({ name: 'fq', value: 'paramRunTime:' + filterParamRunTime });

		var filterParamStepSize = $formFilters.find('.valueParamStepSize').val();
		if(filterParamStepSize != null && filterParamStepSize !== '')
			filters.push({ name: 'fq', value: 'paramStepSize:' + filterParamStepSize });

		var filterParamItersPerPar = $formFilters.find('.valueParamItersPerPar').val();
		if(filterParamItersPerPar != null && filterParamItersPerPar !== '')
			filters.push({ name: 'fq', value: 'paramItersPerPar:' + filterParamItersPerPar });

		var filterParamTotalIterNum = $formFilters.find('.valueParamTotalIterNum').val();
		if(filterParamTotalIterNum != null && filterParamTotalIterNum !== '')
			filters.push({ name: 'fq', value: 'paramTotalIterNum:' + filterParamTotalIterNum });

		var filterReportKeys = $formFilters.find('.valueReportKeys').val();
		if(filterReportKeys != null && filterReportKeys !== '')
			filters.push({ name: 'fq', value: 'reportKeys:' + filterReportKeys });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
		if(filterPageUrlApi != null && filterPageUrlApi !== '')
			filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterTrafficFlowObservedIds = $formFilters.find('.valueTrafficFlowObservedIds').val();
		if(filterTrafficFlowObservedIds != null && filterTrafficFlowObservedIds !== '')
			filters.push({ name: 'fq', value: 'trafficFlowObservedIds:' + filterTrafficFlowObservedIds });

		var filterParamDemandScale = $formFilters.find('.valueParamDemandScale').val();
		if(filterParamDemandScale != null && filterParamDemandScale !== '')
			filters.push({ name: 'fq', value: 'paramDemandScale:' + filterParamDemandScale });
	}
	return filters;
}

function patchSmartTrafficLightVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSmartTrafficLightVals(filters, vals, success, error);
}

function patchSmartTrafficLightVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/smart-traffic-light?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// POST //

async function postSmartTrafficLight($formValues, success, error) {
	var vals = {};
	if(success == null) {
		success = function( data, textStatus, jQxhr ) {
			addGlow($formValues.next('button'));
			var url = data['pageUrlPk'];
			if(url)
				window.location.href = url;
		};
	}
	if(error == null) {
		error = function( jqXhr, textStatus, errorThrown ) {
			addError($formValues.next('button'));
		};
	}

	var valuePk = $formValues.find('.valuePk').val();
	if(valuePk != null && valuePk !== '')
		vals['pk'] = valuePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	if(valueCreated != null && valueCreated !== '')
		vals['created'] = valueCreated;

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
		vals['modified'] = valueModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	if(valueObjectId != null && valueObjectId !== '')
		vals['objectId'] = valueObjectId;

	var valueArchived = $formValues.find('.valueArchived').val();
	if(valueArchived != null && valueArchived !== '')
		vals['archived'] = valueArchived == 'true';

	var valueDeleted = $formValues.find('.valueDeleted').val();
	if(valueDeleted != null && valueDeleted !== '')
		vals['deleted'] = valueDeleted == 'true';

	var valueEntityId = $formValues.find('.valueEntityId').val();
	if(valueEntityId != null && valueEntityId !== '')
		vals['entityId'] = valueEntityId;

	var valueSmartTrafficLightName = $formValues.find('.valueSmartTrafficLightName').val();
	if(valueSmartTrafficLightName != null && valueSmartTrafficLightName !== '')
		vals['smartTrafficLightName'] = valueSmartTrafficLightName;

	var valueRouteIdNorth = $formValues.find('.valueRouteIdNorth').val();
	if(valueRouteIdNorth != null && valueRouteIdNorth !== '')
		vals['routeIdNorth'] = valueRouteIdNorth;

	var valueRouteIdEast = $formValues.find('.valueRouteIdEast').val();
	if(valueRouteIdEast != null && valueRouteIdEast !== '')
		vals['routeIdEast'] = valueRouteIdEast;

	var valueParamAvgVehiclePerMinFromWestToEast = $formValues.find('.valueParamAvgVehiclePerMinFromWestToEast').val();
	if(valueParamAvgVehiclePerMinFromWestToEast != null && valueParamAvgVehiclePerMinFromWestToEast !== '')
		vals['paramAvgVehiclePerMinFromWestToEast'] = valueParamAvgVehiclePerMinFromWestToEast;

	var valueParamAvgVehiclePerMinFromSouthToNorth = $formValues.find('.valueParamAvgVehiclePerMinFromSouthToNorth').val();
	if(valueParamAvgVehiclePerMinFromSouthToNorth != null && valueParamAvgVehiclePerMinFromSouthToNorth !== '')
		vals['paramAvgVehiclePerMinFromSouthToNorth'] = valueParamAvgVehiclePerMinFromSouthToNorth;

	var valueParamVehicleDemandScalingFactor = $formValues.find('.valueParamVehicleDemandScalingFactor').val();
	if(valueParamVehicleDemandScalingFactor != null && valueParamVehicleDemandScalingFactor !== '')
		vals['paramVehicleDemandScalingFactor'] = valueParamVehicleDemandScalingFactor;

	var valueParamAvgPedestrianPerMinFromWestToEast = $formValues.find('.valueParamAvgPedestrianPerMinFromWestToEast').val();
	if(valueParamAvgPedestrianPerMinFromWestToEast != null && valueParamAvgPedestrianPerMinFromWestToEast !== '')
		vals['paramAvgPedestrianPerMinFromWestToEast'] = valueParamAvgPedestrianPerMinFromWestToEast;

	var valueParamAvgPedestrianPerMinFromSouthToNorth = $formValues.find('.valueParamAvgPedestrianPerMinFromSouthToNorth').val();
	if(valueParamAvgPedestrianPerMinFromSouthToNorth != null && valueParamAvgPedestrianPerMinFromSouthToNorth !== '')
		vals['paramAvgPedestrianPerMinFromSouthToNorth'] = valueParamAvgPedestrianPerMinFromSouthToNorth;

	var valueParamPedestrianDemandScalingFactor = $formValues.find('.valueParamPedestrianDemandScalingFactor').val();
	if(valueParamPedestrianDemandScalingFactor != null && valueParamPedestrianDemandScalingFactor !== '')
		vals['paramPedestrianDemandScalingFactor'] = valueParamPedestrianDemandScalingFactor;

	var valueParamMinGreenTimeSecWestEast = $formValues.find('.valueParamMinGreenTimeSecWestEast').val();
	if(valueParamMinGreenTimeSecWestEast != null && valueParamMinGreenTimeSecWestEast !== '')
		vals['paramMinGreenTimeSecWestEast'] = valueParamMinGreenTimeSecWestEast;

	var valueParamMaxGreenTimeSecWestEast = $formValues.find('.valueParamMaxGreenTimeSecWestEast').val();
	if(valueParamMaxGreenTimeSecWestEast != null && valueParamMaxGreenTimeSecWestEast !== '')
		vals['paramMaxGreenTimeSecWestEast'] = valueParamMaxGreenTimeSecWestEast;

	var valueParamMinGreenTimeSecSouthNorth = $formValues.find('.valueParamMinGreenTimeSecSouthNorth').val();
	if(valueParamMinGreenTimeSecSouthNorth != null && valueParamMinGreenTimeSecSouthNorth !== '')
		vals['paramMinGreenTimeSecSouthNorth'] = valueParamMinGreenTimeSecSouthNorth;

	var valueParamMaxGreenTimeSecSouthNorth = $formValues.find('.valueParamMaxGreenTimeSecSouthNorth').val();
	if(valueParamMaxGreenTimeSecSouthNorth != null && valueParamMaxGreenTimeSecSouthNorth !== '')
		vals['paramMaxGreenTimeSecSouthNorth'] = valueParamMaxGreenTimeSecSouthNorth;

	var valueParamPedestrianWaitThresholdSecNorthSouth = $formValues.find('.valueParamPedestrianWaitThresholdSecNorthSouth').val();
	if(valueParamPedestrianWaitThresholdSecNorthSouth != null && valueParamPedestrianWaitThresholdSecNorthSouth !== '')
		vals['paramPedestrianWaitThresholdSecNorthSouth'] = valueParamPedestrianWaitThresholdSecNorthSouth;

	var valueParamPedestrianWaitThresholdSecWestEast = $formValues.find('.valueParamPedestrianWaitThresholdSecWestEast').val();
	if(valueParamPedestrianWaitThresholdSecWestEast != null && valueParamPedestrianWaitThresholdSecWestEast !== '')
		vals['paramPedestrianWaitThresholdSecWestEast'] = valueParamPedestrianWaitThresholdSecWestEast;

	var valueParamVehicleQueueThresholdWestEast = $formValues.find('.valueParamVehicleQueueThresholdWestEast').val();
	if(valueParamVehicleQueueThresholdWestEast != null && valueParamVehicleQueueThresholdWestEast !== '')
		vals['paramVehicleQueueThresholdWestEast'] = valueParamVehicleQueueThresholdWestEast;

	var valueParamVehicleQueueThresholdSouthNorth = $formValues.find('.valueParamVehicleQueueThresholdSouthNorth').val();
	if(valueParamVehicleQueueThresholdSouthNorth != null && valueParamVehicleQueueThresholdSouthNorth !== '')
		vals['paramVehicleQueueThresholdSouthNorth'] = valueParamVehicleQueueThresholdSouthNorth;

	var valueParamPedestrianQueueThresholdNorthSouth = $formValues.find('.valueParamPedestrianQueueThresholdNorthSouth').val();
	if(valueParamPedestrianQueueThresholdNorthSouth != null && valueParamPedestrianQueueThresholdNorthSouth !== '')
		vals['paramPedestrianQueueThresholdNorthSouth'] = valueParamPedestrianQueueThresholdNorthSouth;

	var valueParamPedestrianQueueThresholdWestEast = $formValues.find('.valueParamPedestrianQueueThresholdWestEast').val();
	if(valueParamPedestrianQueueThresholdWestEast != null && valueParamPedestrianQueueThresholdWestEast !== '')
		vals['paramPedestrianQueueThresholdWestEast'] = valueParamPedestrianQueueThresholdWestEast;

	var valueParamRunTime = $formValues.find('.valueParamRunTime').val();
	if(valueParamRunTime != null && valueParamRunTime !== '')
		vals['paramRunTime'] = valueParamRunTime;

	var valueParamStepSize = $formValues.find('.valueParamStepSize').val();
	if(valueParamStepSize != null && valueParamStepSize !== '')
		vals['paramStepSize'] = valueParamStepSize;

	var valueParamItersPerPar = $formValues.find('.valueParamItersPerPar').val();
	if(valueParamItersPerPar != null && valueParamItersPerPar !== '')
		vals['paramItersPerPar'] = valueParamItersPerPar;

	var valueParamTotalIterNum = $formValues.find('.valueParamTotalIterNum').val();
	if(valueParamTotalIterNum != null && valueParamTotalIterNum !== '')
		vals['paramTotalIterNum'] = valueParamTotalIterNum;

	var valueReportKeys = [];
	$formValues.find('input.valueReportKeys:checked').each(function(index) {
		valueReportKeys.push($(this).val());
	});
	if(valueReportKeys.length > 0)
		vals['reportKeys'] = valueReportKeys;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	if(valueSessionId != null && valueSessionId !== '')
		vals['sessionId'] = valueSessionId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
		vals['userKey'] = valueUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	$.ajax({
		url: '/api/smart-traffic-light'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSmartTrafficLightVals(vals, success, error) {
	$.ajax({
		url: '/api/smart-traffic-light'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportSmartTrafficLight($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_searchList').val();
	if(json != null && json !== '')
		putimportSmartTrafficLightVals(JSON.parse(json), success, error);
}

function putimportSmartTrafficLightVals(json, success, error) {
	$.ajax({
		url: '/api/smart-traffic-light-import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

async function websocketSmartTrafficLight(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSmartTrafficLight', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#SmartTrafficLightForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-2017-shaded-spruce ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'fad fa-traffic-light-stop w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify smart traffic lights in ' + json.timeRemaining);
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-2017-shaded-spruce ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
			$card.append($header);
			$header.append($i);
			$header.append($headerSpan);
			$header.append($x);
			$body.append($bar);
			$bar.append($progress);
			$card.append($body);
			$box.append($margin);
			$margin.append($card);
			if(numPATCH < numFound) {
				var $old_box = $('.box-' + id);
				if(!$old_box.size()) {
					$('.top-box').append($box);
				} else if($old_box && $old_box.attr('data-numPATCH') < numFound) {
					$('.box-' + id).html($margin);
				}
			} else {
				$('.box-' + id).remove();
			}
			if(pk && pkPage && pk == pkPage) {
				if(success)
					success(json);
			}
		});

		window.eventBus.registerHandler('websocketSimulationReport', function (error, message) {
			$('#Page_reportKeys').trigger('oninput');
			$('#Page_reportKeys_add').text('add a simulation report');
			$('#Page_reportKeys_add').removeClass('w3-disabled');
			$('#Page_reportKeys_add').attr('disabled', false);
		});
	}
}
async function websocketSmartTrafficLightInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSmartTrafficLightVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputSmartTrafficLight' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputSmartTrafficLight' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputSmartTrafficLight' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputSmartTrafficLight' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputSmartTrafficLight' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputSmartTrafficLight' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['entityId'];
			if(vars.includes('entityId')) {
				$('.inputSmartTrafficLight' + pk + 'EntityId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'EntityId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['smartTrafficLightName'];
			if(vars.includes('smartTrafficLightName')) {
				$('.inputSmartTrafficLight' + pk + 'SmartTrafficLightName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'SmartTrafficLightName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['routeIdNorth'];
			if(vars.includes('routeIdNorth')) {
				$('.inputSmartTrafficLight' + pk + 'RouteIdNorth').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'RouteIdNorth').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['routeIdEast'];
			if(vars.includes('routeIdEast')) {
				$('.inputSmartTrafficLight' + pk + 'RouteIdEast').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'RouteIdEast').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramAvgVehiclePerMinFromWestToEast'];
			if(vars.includes('paramAvgVehiclePerMinFromWestToEast')) {
				$('.inputSmartTrafficLight' + pk + 'ParamAvgVehiclePerMinFromWestToEast').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'ParamAvgVehiclePerMinFromWestToEast').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramAvgVehiclePerMinFromSouthToNorth'];
			if(vars.includes('paramAvgVehiclePerMinFromSouthToNorth')) {
				$('.inputSmartTrafficLight' + pk + 'ParamAvgVehiclePerMinFromSouthToNorth').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'ParamAvgVehiclePerMinFromSouthToNorth').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramVehicleDemandScalingFactor'];
			if(vars.includes('paramVehicleDemandScalingFactor')) {
				$('.inputSmartTrafficLight' + pk + 'ParamVehicleDemandScalingFactor').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'ParamVehicleDemandScalingFactor').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramAvgPedestrianPerMinFromWestToEast'];
			if(vars.includes('paramAvgPedestrianPerMinFromWestToEast')) {
				$('.inputSmartTrafficLight' + pk + 'ParamAvgPedestrianPerMinFromWestToEast').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'ParamAvgPedestrianPerMinFromWestToEast').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramAvgPedestrianPerMinFromSouthToNorth'];
			if(vars.includes('paramAvgPedestrianPerMinFromSouthToNorth')) {
				$('.inputSmartTrafficLight' + pk + 'ParamAvgPedestrianPerMinFromSouthToNorth').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'ParamAvgPedestrianPerMinFromSouthToNorth').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramPedestrianDemandScalingFactor'];
			if(vars.includes('paramPedestrianDemandScalingFactor')) {
				$('.inputSmartTrafficLight' + pk + 'ParamPedestrianDemandScalingFactor').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'ParamPedestrianDemandScalingFactor').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramMinGreenTimeSecWestEast'];
			if(vars.includes('paramMinGreenTimeSecWestEast')) {
				$('.inputSmartTrafficLight' + pk + 'ParamMinGreenTimeSecWestEast').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'ParamMinGreenTimeSecWestEast').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramMaxGreenTimeSecWestEast'];
			if(vars.includes('paramMaxGreenTimeSecWestEast')) {
				$('.inputSmartTrafficLight' + pk + 'ParamMaxGreenTimeSecWestEast').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'ParamMaxGreenTimeSecWestEast').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramMinGreenTimeSecSouthNorth'];
			if(vars.includes('paramMinGreenTimeSecSouthNorth')) {
				$('.inputSmartTrafficLight' + pk + 'ParamMinGreenTimeSecSouthNorth').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'ParamMinGreenTimeSecSouthNorth').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramMaxGreenTimeSecSouthNorth'];
			if(vars.includes('paramMaxGreenTimeSecSouthNorth')) {
				$('.inputSmartTrafficLight' + pk + 'ParamMaxGreenTimeSecSouthNorth').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'ParamMaxGreenTimeSecSouthNorth').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramPedestrianWaitThresholdSecNorthSouth'];
			if(vars.includes('paramPedestrianWaitThresholdSecNorthSouth')) {
				$('.inputSmartTrafficLight' + pk + 'ParamPedestrianWaitThresholdSecNorthSouth').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'ParamPedestrianWaitThresholdSecNorthSouth').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramPedestrianWaitThresholdSecWestEast'];
			if(vars.includes('paramPedestrianWaitThresholdSecWestEast')) {
				$('.inputSmartTrafficLight' + pk + 'ParamPedestrianWaitThresholdSecWestEast').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'ParamPedestrianWaitThresholdSecWestEast').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramVehicleQueueThresholdWestEast'];
			if(vars.includes('paramVehicleQueueThresholdWestEast')) {
				$('.inputSmartTrafficLight' + pk + 'ParamVehicleQueueThresholdWestEast').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'ParamVehicleQueueThresholdWestEast').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramVehicleQueueThresholdSouthNorth'];
			if(vars.includes('paramVehicleQueueThresholdSouthNorth')) {
				$('.inputSmartTrafficLight' + pk + 'ParamVehicleQueueThresholdSouthNorth').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'ParamVehicleQueueThresholdSouthNorth').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramPedestrianQueueThresholdNorthSouth'];
			if(vars.includes('paramPedestrianQueueThresholdNorthSouth')) {
				$('.inputSmartTrafficLight' + pk + 'ParamPedestrianQueueThresholdNorthSouth').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'ParamPedestrianQueueThresholdNorthSouth').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramPedestrianQueueThresholdWestEast'];
			if(vars.includes('paramPedestrianQueueThresholdWestEast')) {
				$('.inputSmartTrafficLight' + pk + 'ParamPedestrianQueueThresholdWestEast').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'ParamPedestrianQueueThresholdWestEast').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramRunTime'];
			if(vars.includes('paramRunTime')) {
				$('.inputSmartTrafficLight' + pk + 'ParamRunTime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'ParamRunTime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramStepSize'];
			if(vars.includes('paramStepSize')) {
				$('.inputSmartTrafficLight' + pk + 'ParamStepSize').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'ParamStepSize').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramItersPerPar'];
			if(vars.includes('paramItersPerPar')) {
				$('.inputSmartTrafficLight' + pk + 'ParamItersPerPar').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'ParamItersPerPar').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramTotalIterNum'];
			if(vars.includes('paramTotalIterNum')) {
				$('.inputSmartTrafficLight' + pk + 'ParamTotalIterNum').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'ParamTotalIterNum').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['reportKeys'];
			if(vars.includes('reportKeys')) {
				$('.inputSmartTrafficLight' + pk + 'ReportKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'ReportKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputSmartTrafficLight' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputSmartTrafficLight' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputSmartTrafficLight' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputSmartTrafficLight' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputSmartTrafficLight' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputSmartTrafficLight' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputSmartTrafficLight' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputSmartTrafficLight' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['objectSuggest'];
			if(vars.includes('objectSuggest')) {
				$('.inputSmartTrafficLight' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['objectText'];
			if(vars.includes('objectText')) {
				$('.inputSmartTrafficLight' + pk + 'ObjectText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'ObjectText').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputSmartTrafficLight' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputSmartTrafficLight' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputSmartTrafficLight' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputSmartTrafficLight' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['trafficFlowObservedIds'];
			if(vars.includes('trafficFlowObservedIds')) {
				$('.inputSmartTrafficLight' + pk + 'TrafficFlowObservedIds').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'TrafficFlowObservedIds').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramDemandScale'];
			if(vars.includes('paramDemandScale')) {
				$('.inputSmartTrafficLight' + pk + 'ParamDemandScale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSmartTrafficLight' + pk + 'ParamDemandScale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
		});
	}
}

function pageGraph(apiRequest) {
	var r = $('.pageForm .pageResponse').val();
	if(r) {
	var json = JSON.parse(r);
		if(json['facetCounts']) {
			var facetCounts = json.facetCounts;
			if(facetCounts['facetPivot'] && facetCounts['facetRanges']) {
				var numPivots = json.responseHeader.params['facet.pivot'].split(',').length;
				var range = facetCounts.facetRanges.ranges[Object.keys(facetCounts.facetRanges.ranges)[0]];
				var rangeName;
				var rangeVar;
				var rangeVarFq;
				var rangeCounts;
				var rangeVals;
				if(range) {
					rangeName = range.name;
					rangeVar = rangeName.substring(0, rangeName.indexOf('_'));
					rangeVarFq = window.varsFq[rangeVar];
					rangeCounts = range.counts;
					rangeVals = Object.keys(rangeCounts).map(key => key);
				}
				var pivot1Name = Object.keys(facetCounts.facetPivot.pivotMap)[0];
				var pivot1VarIndexed = pivot1Name;
				if(pivot1VarIndexed.includes(','))
					pivot1VarIndexed = pivot1VarIndexed.substring(0, pivot1VarIndexed.indexOf(','));
				var pivot1VarObj = Object.values(window.varsFq).find(o => o.varIndexed === pivot1VarIndexed);
				var pivot1VarFq = pivot1VarObj ? pivot1VarObj.var : 'classSimpleName';
				var pivot1Map = facetCounts.facetPivot.pivotMap[pivot1Name].pivotMap;
				var pivot1Vals = Object.keys(pivot1Map);
				var data = [];
				var layout = {};
				if(pivot1VarObj.classSimpleName === 'Point') {
					layout['showlegend'] = true;
					layout['dragmode'] = 'zoom';
					layout['uirevision'] = 'true';
					if(window['DEFAULT_MAP_LOCATION'] && window['DEFAULT_MAP_ZOOM'])
						layout['mapbox'] = { style: 'open-street-map', center: { lat: window['DEFAULT_MAP_LOCATION']['lat'], lon: window['DEFAULT_MAP_LOCATION']['lon'] }, zoom: window['DEFAULT_MAP_ZOOM'] };
					else if(window['DEFAULT_MAP_ZOOM'])
						layout['mapbox'] = { style: 'open-street-map', zoom: window['DEFAULT_MAP_ZOOM'] };
					else if(window['DEFAULT_MAP_LOCATION'])
						layout['mapbox'] = { style: 'open-street-map', center: { lat: window['DEFAULT_MAP_LOCATION']['lat'], lon: window['DEFAULT_MAP_LOCATION']['lon'] } };
					else
						layout['mapbox'] = { style: 'open-street-map' };
					layout['margin'] = { r: 0, t: 0, b: 0, l: 0 };
					var trace = {};
					trace['showlegend'] = true;
					trace['type'] = 'scattermapbox';
					var colors = [];
					var lat = [];
					var lon = [];
					var text = [];
					var customdata = [];
					trace['lat'] = lat;
					trace['lon'] = lon;
					trace['text'] = text;
					trace['customdata'] = customdata;
					json.response.docs.forEach((record) => {
						var location = record.fields[pivot1VarIndexed];
						if(location) {
							var locationParts = location.split(',');
							text.push('pivot1Val');
							lat.push(parseFloat(locationParts[0]));
							lon.push(parseFloat(locationParts[1]));
							colors.push('fuchsia');
							var vals = {};
							var hovertemplate = '';
							Object.entries(window.varsFq).forEach(([key, data]) => {
								if(data.displayName) {
									vals[data.var] = record.fields[data.varStored];
									hovertemplate += '<b>' + data.displayName + ': %{customdata.' + data.var + '}</b><br>';
								}
								customdata.push(vals);
							});
							customdata.push(vals);
							trace['hovertemplate'] = hovertemplate;
						}
					});
					trace['marker'] = { color: colors, size: 10 };
					data.push(trace);
				} else if(range) {
					layout['title'] = 'SmartTrafficLight';
					layout['xaxis'] = {
						title: rangeVarFq.displayName
					}
					if(pivot1Vals.length > 0 && pivot1Map[pivot1Vals[0]].pivotMap && Object.keys(pivot1Map[pivot1Vals[0]].pivotMap).length > 0) {
						var pivot2VarIndexed = pivot1Map[pivot1Vals[0]].pivotMap[Object.keys(pivot1Map[pivot1Vals[0]].pivotMap)[0]].field;
						var pivot2VarObj = Object.values(window.varsFq).find(o => o.varIndexed === pivot2VarIndexed);
						var pivot2VarFq = pivot2VarObj ? pivot2VarObj.var : 'classSimpleName';
						layout['yaxis'] = {
							title: pivot2VarObj.displayName
						}
						pivot1Vals.forEach((pivot1Val) => {
							var pivot1 = pivot1Map[pivot1Val];
							var pivot1Counts = pivot1.ranges[rangeName].counts;
							var pivot2Map = pivot1.pivotMap;
							var trace = {};
							var facetField;
							trace['showlegend'] = true;
							trace['mode'] = 'lines+markers';
							trace['name'] = pivot1Val;
							trace['x'] = Object.keys(pivot1Counts).map(key => key);
							if(pivot2Map) {
								var xs = [];
								var ys = [];
								var pivot2Vals = Object.keys(pivot2Map);
								pivot2Vals.forEach((pivot2Val) => {
									var pivot2 = pivot2Map[pivot2Val];
									var pivot2Counts = pivot2.ranges[rangeName].counts;
									Object.entries(pivot2Counts).forEach(([key, count]) => {
										xs.push(key);
										ys.push(parseFloat(pivot2Val));
									});
								});
								trace['y'] = ys;
								trace['x'] = xs;
							} else {
								trace['x'] = Object.keys(pivot1Counts).map(key => key);
								trace['y'] = Object.entries(pivot1Counts).map(([key, count]) => count);
							}
							data.push(trace);
						});
					} else {
						layout['yaxis'] = {
							title: pivot1VarObj.displayName
						}
						pivot1Vals.forEach((pivot1Val) => {
							var pivot1 = pivot1Map[pivot1Val];
							var pivot1Counts = pivot1.ranges[rangeName].counts;
							var pivot2Map = pivot1.pivotMap;
							var trace = {};
							var facetField;
							trace['showlegend'] = true;
							trace['mode'] = 'lines+markers';
							trace['name'] = pivot1Val;
							if(window.varsRange[window.defaultRangeVar].classSimpleName == 'ZonedDateTime') {
								trace['x'] = Object.keys(pivot1Counts).map(key => moment.tz(key, Intl.DateTimeFormat().resolvedOptions().timeZone).format('YYYY-MM-DDTHH:mm:ss.SSSS'));
							} else {
								trace['x'] = Object.keys(pivot1Counts).map(key => key);
							}
							trace['y'] = Object.entries(pivot1Counts).map(([key, count]) => count);
							data.push(trace);
						});
					}
				}
				Plotly.react('htmBodyGraphBaseModelPage', data, layout);
			}
		}
	}
}

function animateStats() {
	let speedRate = parseFloat($('#animateStatsSpeed').val()) * 1000;
	let xStep = parseFloat($('#animateStatsStep').val());
	let xMin = parseFloat($('#animateStatsMin').val());
	let xMax = parseFloat($('#animateStatsMax').val());
	let x = xMin;

	let animateInterval = window.setInterval(() => {
	x = x + xStep;
	if (x > xMax || x < 0) {
		clearInterval(animateInterval);
	}
	$('#fqSmartTrafficLight_time').val(x);
	$('#fqSmartTrafficLight_time').change();
	searchPage();
	}, speedRate);
}