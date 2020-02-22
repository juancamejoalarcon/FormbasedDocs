import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html'
})
export class GuideComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    document.title = 'Automatik Docs | Guía';
  }

  ngOnDestroy() {
    document.title = 'Automatik Docs';
  }

  topMenuNav(e: any) {
    e.preventDefault();
    const menuLinks: NodeListOf<HTMLElement> = document.querySelectorAll('.sub-menu-button') as NodeListOf<HTMLElement>;
    const contentSection: HTMLElement = document.querySelector('.container') as HTMLElement;
    const contentDivs: NodeListOf<HTMLElement> = document.querySelectorAll('.content') as NodeListOf<HTMLElement>;
    if (e.target.tagName === 'A') {
      if (!e.target.classList.contains('current')) {
            // Remove class current from menu buttons
            menuLinks.forEach((button) => {
                button.parentElement.classList.remove('current');
            });
            e.target.parentElement.classList.add('current');
            const target = e.target.getAttribute('href');
            contentSection.classList.add('animation-outro');
            contentSection.classList.remove('animation-intro');
            setTimeout(function() {
                contentDivs.forEach((div) => {
                    if (div.id === target) {
                        div.style.display = 'flex';
                    } else {
                        div.style.display = 'none';
                    }
                });
                contentSection.classList.add('animation-intro');
                contentSection.classList.remove('animation-outro');
            }, 400);
        }
    }
  }
}
