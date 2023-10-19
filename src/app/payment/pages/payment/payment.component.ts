import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {StripeCardComponent, StripeService} from "ngx-stripe";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PaymentService} from "../../services/payment.service";
import {Router} from "@angular/router";
import {Payment} from "../../model/payment";
import {
  Stripe,
  StripeCardElement,
  StripeCardElementOptions,
  StripeElement,
  StripeElements,
  StripeElementsOptions
} from "@stripe/stripe-js";
// import {StripeElement} from "@stripe/stripe-js";
// import { StripeService, Elements, ElementsOptions, Element as StripeElement, Token } from "ngx-stripe";


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @Input() topic!: string;
  @Input() date!: string;
  @Input() hour!: string;
  @Input() price!: number;

  error: any;

  @ViewChild(StripeCardComponent) card!: StripeCardComponent;

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };


  // @ts-ignore
  // elements: Elements;

  // card: StripeElement;

  // elementsOptions: ElementsOptions = {
  //   locale: 'es'
  // };
  elementsOptions: StripeElementsOptions = {
    locale: 'es'
  };


  stripeForm!: FormGroup;

  constructor(
    private stripeService: StripeService,
    private paymentService: PaymentService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // this.card = {} as StripeElement;
  }


  ngOnInit() {
    this.stripeForm = this.fb.group({
      name: ['', [Validators.required]]
    });


    // this.stripeService.elements()
    //   .subscribe(elements => {
    //     this.elements = elements;
    //     // Only mount the element the first time
    //     if (!this.card) {
    //       this.card = this.elements.create('card', {
    //         style: {
    //           base: {
    //             iconColor: '#666EE8',
    //             color: '#31325F',
    //             lineHeight: '40px',
    //             fontWeight: 300,
    //             fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    //             fontSize: '18px',
    //             '::placeholder': {
    //               color: '#CFD7E0'
    //             }
    //           }
    //         }
    //       });
    //       this.card.mount('#card-element');
    //     }
    //   });
  }

  // name: any = "";
  // buy() {
  //   const name = this.stripeForm.get('name')!.value as string;
  //   this.stripeService
  //     .createToken(this.card, { name })
  //     .subscribe(result => {
  //       if (result.token) {
  //         const paymentIntentDto: Payment = {
  //           token: result.token.id,
  //           amount: this.price,
  //           currency: 'EUR'
  //         };
  //         this.paymentService.payment(paymentIntentDto).subscribe(
  //           data => {
  //             this.router.navigate(['/physiotherapist-list']);
  //           }
  //         );
  //         this.error = undefined;
  //       } else if (result.error) {
  //         this.error = result.error.message;
  //       }
  //     });
  // }

  createToken(): void {
    const name = this.stripeForm.get('name')!.value;
    this.stripeService
      .createToken(this.card.element, {name})
      .subscribe((result) => {
        if (result.token) {
          const paymentIntentDto: Payment = {
            token: result.token.id,
            amount: this.price,
            currency: 'PEN'
          };
          this.paymentService.payment(paymentIntentDto).subscribe((response: any) =>  {
            console.log("pago realizado con exito" + response);
              this.router.navigate(['/physiotherapist-list']);
          });
          this.error = undefined;
        } else if (result.error) {
          this.error = result.error.message;
        }
      });
  }


}
