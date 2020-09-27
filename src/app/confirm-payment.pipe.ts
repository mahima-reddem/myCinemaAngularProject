import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'confirmPayment'
})
export class ConfirmPaymentPipe implements PipeTransform {

  transform(noOfTickets : any) :any {
    if(noOfTickets === 1){
      return 600;
    }
    
  }

}
