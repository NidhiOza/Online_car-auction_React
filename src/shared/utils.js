// api value control

const changeDateToString = (date) => {
    var stringDate = new Date(date).toDateString();
    // console.log(stringDate);
    return stringDate;
}

function setAmount(params) {
    var amount;
    amount = params.toFixed(2);
    return amount;
}

function setConfirmationAddress(params) {
    var confirmAddress;
    confirmAddress = params.substring(0, 16) + " ... " + params.substring(params.length - 16);
    return confirmAddress;
}

function setEffort(params) {
    var effort;
    effort = (params*100).toFixed(2) + "%";
    return effort;
}

function setReward(params) {
    var reward;
    reward = params.toFixed(2);
    return reward;
}

function setConfirmationProgress(params) {
    var confirmprogress;
    confirmprogress = (params*100).toFixed(0) + '%';
    return confirmprogress;
}
//UI component
function formatter(unitParameter, fixed) {
    var unit;
    if (unitParameter>1000000000000000000000000) {
        unit = (unitParameter/1000000000000000000000000).toFixed(fixed);
        return unit + ' Y';
    }
    if (unitParameter>1000000000000000000000) {
        unit = (unitParameter/1000000000000000000000).toFixed(fixed);
        return unit + ' Z';
    }        
    if (unitParameter>1000000000000000000) {
        unit = (unitParameter/1000000000000).toFixed(fixed);
        return unit + ' E';
    }
    if (unitParameter>1000000000000000) {
        unit = (unitParameter/1000000000000000).toFixed(fixed);
        return unit + ' P';
    }
    if (unitParameter>1000000000000) {
      unit = (unitParameter/1000000000000).toFixed(fixed);
      return unit + ' T';
    }
    if (unitParameter>1000000000) {
      unit = (unitParameter/1000000000).toFixed(fixed);
      return unit + ' G';
    }
    if (unitParameter>1000000) {
        unit = (unitParameter/1000000).toFixed(fixed);
        return unit + ' M';
    }
    if (unitParameter>1000) {
        unit = (unitParameter/1000).toFixed(fixed);
        return unit + ' K';
    }
    else {
        unit = (unitParameter).toFixed(fixed);
        return unit;
    }
};

function poolIconSelect(params, type) {
    switch(type){
        case 'icon':
            var iconPath = '../../assets/images/img-' + params.toLowerCase() + '.png';
            return iconPath;
        case 'logo':
            var logoPath = '../../assets/images/logo-' + params.toLowerCase() + '.png';
            return logoPath;
    }
}
function setUnit(params) {
    var unit;
    if(params === 'zec' || params === 'zen' ){
        unit = 'Sol/s';
    } else{
        unit = 'H/s';
    }
    return unit;
}

// extra
 

module.exports = {
    changeDateToString,
    setAmount,
    setConfirmationAddress,
    setEffort,
    setReward,
    setConfirmationProgress,
    formatter,
    poolIconSelect,
    setUnit,
}
