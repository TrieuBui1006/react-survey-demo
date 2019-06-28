export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const checkValidity = ( value, rules ) => {
    let isValid = true;
    if ( !rules ) {
        return true;
    }

    if ( rules.required ) {
        isValid = value.trim() !== '' && isValid;
    }

    if ( rules.minLength ) {
        isValid = value.length >= rules.minLength && isValid
    }

    if ( rules.maxLength ) {
        isValid = value.length <= rules.maxLength && isValid
    }

    if ( rules.isEmail ) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test( value ) && isValid
    }

    if ( rules.isNumeric ) {
        const pattern = /^\d+$/;
        isValid = pattern.test( value ) && isValid
    }
    
    return isValid;
}

export const isEmty = (obj) => {
    for(let key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export const lastSubmitDate = (results, creatorDate) => {
    let lastDate = new Date(creatorDate);
    results.forEach(result => {
        if(new Date(result.submitDate) > lastDate) {
            lastDate = new Date(result.submitDate)
        }
    })
    return lastDate.toString();
}

export const currentResultToday = (results) => {
    let currentSubmit = 0;
    const today = new Date().toDateString();
    results.forEach(results => {
        if(new Date(results.submitDate).toDateString() === today) {
            currentSubmit++;
        }
    })
    return currentSubmit;
}

export const arrayContainsAnotherArray = (needle, haystack) => {
    for(var i = 0; i < needle.length; i++){
      if(haystack.indexOf(needle[i]) === -1)
         return false;
    }
    return true;
}