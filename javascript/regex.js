function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/; /* FIXME: Regular expression not supported*/
        return re.test(email);
    }
    
console.log(validateEmail('anystring@anystring.anystring'));