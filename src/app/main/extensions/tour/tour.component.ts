import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ShepherdService } from 'angular-shepherd';

import * as snippet from 'app/main/extensions/tour/tour.snippetcode';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TourComponent implements OnInit {
  // public
  public contentHeader: object;
  public backBtnClass = 'btn btn-sm btn-outline-primary';
  public nextBtnClass = 'btn btn-sm btn-primary btn-next';

  // snippet code variables
  public _snippetCodeTour = snippet.snippetCodeTour;

  /**
   * Constructor
   *
   * @param {ShepherdService} shepherdService
   */
  constructor(private shepherdService: ShepherdService) {}

  // start tour
  startTour() {
    this.shepherdService.start();
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * After View Init
   */
  ngAfterViewInit() {
    // tour steps
    this.shepherdService.defaultStepOptions = {
      cancelIcon: {
        enabled: true
      }
    };
    this.shepherdService.modal = true;

    // this.shepherdService.addSteps([
    //   {
    //     title: 'Navbar',
    //     text: 'This is your navbar',
    //     attachTo: {
    //       element: '.navbar',
    //       on: 'bottom'
    //     },
    //     buttons: [
    //       {
    //         text: 'Skip',
    //         label: 'cancel',
    //         classes: this.backBtnClass
    //       },
    //       {
    //         text: 'Next',
    //         label: 'next',
    //         classes: this.nextBtnClass
    //       }
    //     ],
    //     useModalOverlay: true
    //   },
    //   {
    //     title: 'Card',
    //     text: 'This is a card.',
    //     attachTo: {
    //       element: '.card',
    //       on: 'top'
    //     },
    //     buttons: [
    //       {
    //         text: 'Skip',
    //         label: 'cancel',
    //         classes: this.backBtnClass
    //       },

    //       {
    //         text: 'Back',
    //         label: 'back',
    //         classes: this.backBtnClass
    //       },
    //       {
    //         text: 'Next',
    //         label: 'next',
    //         classes: this.nextBtnClass
    //       }
    //     ]
    //   },
    //   {
    //     title: 'Footer',
    //     text: 'This is the footer.',
    //     attachTo: {
    //       element: '.footer',
    //       on: 'top'
    //     },
    //     buttons: [
    //       {
    //         text: 'Back',
    //         label: 'back',
    //         classes: this.backBtnClass
    //       },
    //       {
    //         text: 'Finish',
    //         label: 'next',
    //         classes: this.nextBtnClass
    //       }
    //     ]
    //   }
    // ]);
  }

  /**
   * On init
   */
  ngOnInit() {
    // content header
    this.contentHeader = {
      headerTitle: 'Tour',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Extensions',
            isLink: true,
            link: '/'
          },
          {
            name: 'Tour',
            isLink: false
          }
        ]
      }
    };
  }
}
