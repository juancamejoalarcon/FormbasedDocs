var mongoose = require('mongoose');
var User = mongoose.model('User');

var TransactionSchema = new mongoose.Schema({
    steps: String,
    formType: String,
    email: String,
    transactionId: String,
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
        user: this.user.toProfileJSONFor(user)
    };
};

mongoose.model('Transaction', TransactionSchema);