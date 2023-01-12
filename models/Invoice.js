const mongoose = require('mongoose')

const invoiceSchema = mongoose.Schema({
    addressInfo: {
        address: {
            type: String,
            required: true
        },
        postalCode: {
            type: String,
            required: true
        },
        legalRegistrationNo: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: true
        },
        website: {
            type: String,
            required: true
        },
        contactNo: {
            type: Number,
            required: true
        }
    },
    invoiceNo: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    paymentStatus: {
        type: String,
        required: true,
    },
    totalAmount: {
        type: Number,
        required: true,
        default: 0.0
    },
    billingAddress: {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        phoneNo: {
            type: String,
            required: true
        },
        postalCode: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    },
    shippingAddress: {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        phoneNo: {
            type: String,
            required: true
        },
        postalCode: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    },
    productDetails: 
        {
            productName: {
                type: String,
                required: true
            },
            productDetails: {
                type: String,
                required: true
            },
            rate: {
                type: Number,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            amount: {
                type: Number,
                required: true,
                default: 0.0
            }
        },
    

    subTotal: {
        type: Number,
        required: true,
        default: 0.0
    },
    estimatedTax: {
        type: Number,
        required: true,
        default: 0.0
    },
    discount: {
        type: Number,
        required: true,
        default: 0.0
    },
    shippingCharge: {
        type: Number,
        required: true,
        default: 0.0
    },
    total: {
        type: Number,
        required: true,
        default: 0.0
    },
    paymentInfo: {
        paymentMethod: {
            type: String,
            required: true
        },
        cardHolderName: {
            type: String,
            required: true
        },
        cardNumber: {
            type: Number,
            required: true
        },
        amount: {
            type: Number,
            required: true,
            default: 0.0
        },
    },
    
})

module.exports = mongoose.model('Invoice', invoiceSchema)