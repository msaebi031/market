const ZarinpalCheckout = require("zarinpal-checkout");

const zarinpal = ZarinpalCheckout.create(
  "653fa8d8-8a22-48e8-9d16-abc9a2588251",
  false
);

const CreatePay = (req, res) => {
  const { Amount, Mobile, Id } = req.query;
  zarinpal
    .PaymentRequest({
      Amount,
      CallbackURL: `https://demo.target-designer.com/PaymentVerification/${Amount}/${Id}`,
      Description: "Buy Shop Nasim",
      Mobile,
      Id,
    })
    .then(function (response) {
      if (response.status == 100) {
        res.redirect(response.url);
      }
    })
    .catch(function (err) {
      console.log(err);
      res.redirect("/");
    });
};

const VerifyPay = (req, res) => {
  zarinpal
    .PaymentVerification({
      Amount: req.params.Amount,
      Authority: req.query.Authority,
    })
    .then(function (response) {
      if (response.status == 101) {
        console.log("Verified! Ref ID: " + response.RefID, req.params.Id);
      } else {
        console.log(response);
      }
      res.redirect("/showcart");
    })
    .catch(function (err) {
      console.log(err);
    });
};

module.exports = { CreatePay, VerifyPay };
