

$(document).ready(function() {
    $('#myForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
             contact_name: {
                validators: {
                    notEmpty: {
                        message: 'Por favor, rellene el campo nombre'
                    },
                    stringLength: {
                        max: 50,
                        message: 'El nombre debe de tener menos de 50 caracteres'
                    }
                }
            },
             contact_apellido: {
                validators: {
                    notEmpty: {
                        message: 'Por favor, rellene el campo apellido'
                    },
                    stringLength: {
                        max: 50,
                        message: 'El apellido debe de tener menos de 50 caracteres'
                    }
                }
            },
            contact_empresa: {
                validators: {
                    notEmpty: {
                        message: 'Por favor, rellene el campo empresa'
                    },
                    stringLength: {
                        max: 100,
                        message: 'La empresa debe de tener menos de 100 caracteres'
                    }
                }
            },
            contact_email: {
                validators: {
                    notEmpty: {
                        message: 'Por favor, rellene el campo email'
                    },
                    stringLength: {
                        max: 70,
                        message: 'El email debe de tener menos de 70 caracteres'
                    },
                    emailAddress: {
                        message: 'No es un email válido'                    }
                }
            },
            contact_message: {
                // The group will be set as default (.form-group)
                validators: {
                   notEmpty: {
                        message: 'Por favor, rellene el campo mensaje'
                    },
                    stringLength: {
                        max: 600,
                        message: 'El mensaje debe de tener menos de 600 caracteres'
                    }
                }
            }
        }
    });
});
