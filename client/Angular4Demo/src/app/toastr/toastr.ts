import { Injectable, ViewContainerRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class Toastr {

    constructor(private toastr: ToastrService) {
        // this.toastr.setRootViewContainerRef(vRef);
    }

    setViewContainerRef(vRef) {
        // this.toastr.setRootViewContainerRef(vRef);
    }

    showSuccess(message: string = null, title: string = null) {
        message = (message === null) ? "Process done Successfully!" : message;
        title = (title === null) ? "Success!" : title;
        this.toastr.success(message, title);
    }

    showError(message: string = null, title: string = null) {
        message = (message === null) ? "Something went wrong, please try again later!" : message;
        title = (title === null) ? "Oops!" : title;
        this.toastr.error(message, title);
    }

    showWarning(message: string = null, title: string = null) {
        message = (message === null) ? "You're being just warned!" : message;
        title = (title === null) ? "Alert!" : title;
        this.toastr.warning(message, title);
    }

    showInfo(message: string = null, title: string = null) {
        message = (message === null) ? "Just some information for you!" : message;
        title = (title === null) ? "Info!" : title;
        this.toastr.info(message, title);
    }

    // showCustom(message: string, title: string) {
    //     this.toastr.custom(message, title, {enableHTML: true});
    // }

}
