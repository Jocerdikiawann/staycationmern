import React from "react";
import Fade from "react-reveal/Fade";

import { InputText, InputFile } from "elements/Form";

import bca from "assets/images/logo_bca.jpg";
import mandiri from "assets/images/logo_mandiri.jpg";

export default function Payment(props) {
  const { data, itemDetails, checkout } = props;
  const tax = 10;
  const subtotal = itemDetails.price * checkout.duration;
  const grandtotal = ((subtotal * tax) / 100) * subtotal;

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <p className="mb-4">Transfer Pembayaran</p>
              <p>Tax: {tax}%</p>
              <p>Sub Total: ${subtotal} USD</p>
              <p>Total: ${grandtotal} USD</p>
              <div className="row mt-4">
                <div className="col-3 text-right">
                  <img src={bca} alt="BCA" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Central Asia</dd>
                    <dd>2208 1996</dd>
                    <dd>Cerdikiawan</dd>
                  </dl>
                </div>
              </div>

              <div className="row">
                <div className="col-3 text-right">
                  <img src={mandiri} alt="mandiri" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Mandiri</dd>
                    <dd>2208 1996</dd>
                    <dd>Cerdikiawan</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>

          <div className="col-5 py-5" style={{ paddingRight: 80 }}>
            <Fade dleay={600}>
              <label htmlFor="proofPayment">Upload Bukti Transfer</label>
              <InputFile
                accept="image/*"
                id="proofPayment"
                name="proofPayment"
                value={data.proofPayment}
                onChange={props.onChange}
              />

              <label htmlFor="bankName">Asal Bank</label>
              <InputText
                id="bankName"
                name="bankName"
                type="text"
                value={data.bankName}
                onChange={props.onChange}
              />

              <label htmlFor="bankHolder">Nama Pengirim</label>
              <InputText
                id="bankHolder"
                name="bankHolder"
                type="text"
                value={data.bankHolder}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
