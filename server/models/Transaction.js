var mongoose = require('mongoose');
var User = mongoose.model('User');

var TransactionSchema = new mongoose.Schema({
    steps: String,
    formType: String,
    email: String,
    transactionId: String,
    createdAt: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  }, {
    timestamps: true,
    usePushEach: true});

TransactionSchema.methods.toJSON = function(user){
    return {
        steps: this.steps,
        formType: this.formType,
        email: this.email,
        transactionId: this.transactionId,
        createdAt: this.createdAt,
        user: this.user ? this.user.toProfileJSONFor(user) : undefined
    };
};

mongoose.model('Transaction', TransactionSchema);