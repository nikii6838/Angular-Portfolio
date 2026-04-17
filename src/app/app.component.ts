import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { NgFor } from '@angular/common';
import Typed from 'typed.js';
import {
  CONTACT,
  DECLARATION,
  EDUCATION,
  HERO_TAGLINE,
  OTHER_DETAILS,
  PROFESSIONAL_SUMMARY,
  PROJECTS,
  SERVICES_OFFERED,
  TECHNICAL_SKILLS,
} from './portfolio-data';

type SectionId =
  | 'home'
  | 'about'
  | 'services'
  | 'skills'
  | 'project'
  | 'contact';

const SECTION_IDS: readonly SectionId[] = [
  'home',
  'about',
  'services',
  'skills',
  'project',
  'contact',
];

@Component({
  selector: 'app-root',
  imports: [NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild('typedText', { static: true })
  typedText!: ElementRef<HTMLSpanElement>;
  @ViewChild('profileInner', { static: true })
  profileInner!: ElementRef<HTMLDivElement>;
  @ViewChild('profileImage', { static: true })
  profileImage!: ElementRef<HTMLImageElement>;

  readonly contact = CONTACT;
  readonly heroTagline = HERO_TAGLINE;
  readonly summary = PROFESSIONAL_SUMMARY;
  readonly servicesOffered = SERVICES_OFFERED;
  readonly technicalSkills = TECHNICAL_SKILLS;
  readonly projects = PROJECTS;
  readonly education = EDUCATION;
  readonly otherDetails = OTHER_DETAILS;
  readonly declaration = DECLARATION;

  readonly profilePhotoUrl = '/images/Nikita.png';

  activeSection: SectionId = 'home';

  private typed?: Typed;
  private sectionObserver?: IntersectionObserver;
  private profileStyleObserver?: MutationObserver;
  private readonly onHashOrPopBound = (): void => {
    // Defer state updates to avoid NG0100 during change detection.
    setTimeout(() => this.syncActiveFromLocation(false));
  };

  ngAfterViewInit(): void {
    this.typed = new Typed(this.typedText.nativeElement, {
      strings: ['Angular Developer', 'Frontend Developer'],
      typeSpeed: 85,
      backSpeed: 55,
      backDelay: 1400,
      loop: true,
      smartBackspace: true,
    });

    this.setupSectionObserver();
    // Run after the initial check so active nav class does not flip in same cycle.
    setTimeout(() => this.syncActiveFromLocation(true));
    this.protectProfileVisibility();
    window.addEventListener('hashchange', this.onHashOrPopBound);
    window.addEventListener('popstate', this.onHashOrPopBound);
  }

  ngOnDestroy(): void {
    this.typed?.destroy();
    this.sectionObserver?.disconnect();
    this.profileStyleObserver?.disconnect();
    window.removeEventListener('hashchange', this.onHashOrPopBound);
    window.removeEventListener('popstate', this.onHashOrPopBound);
  }

  goTo(event: Event, section: SectionId): void {
    event.preventDefault();
    this.scrollToSection(section, true);
  }

  private scrollToSection(section: SectionId, pushHash: boolean): void {
    const el = document.getElementById(section);
    if (!el) {
      return;
    }

    this.activeSection = section;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (pushHash) {
      const next = `#${section}`;
      if (location.hash !== next) {
        history.pushState(null, '', next);
      }
    }
  }

  private syncActiveFromLocation(scrollToMatch: boolean): void {
    const raw = location.hash.replace(/^#/, '');
    const section = this.parseSectionId(raw);

    this.activeSection = section;

    if (scrollToMatch) {
      queueMicrotask(() => {
        document
          .getElementById(section)
          ?.scrollIntoView({ behavior: 'auto', block: 'start' });
      });
    }
  }

  private parseSectionId(raw: string): SectionId {
    return SECTION_IDS.includes(raw as SectionId)
      ? (raw as SectionId)
      : 'home';
  }

  private setupSectionObserver(): void {
    const nodes = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (n): n is HTMLElement => Boolean(n),
    );

    if (!nodes.length) {
      return;
    }

    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible?.target.id) {
          return;
        }

        const id = this.parseSectionId(visible.target.id);
        // Observer can fire during/just after init; defer to next macrotask.
        setTimeout(() => {
          this.activeSection = id;
        });
      },
      { root: null, rootMargin: '-35% 0px -45% 0px', threshold: [0, 0.2, 0.4] },
    );

    nodes.forEach((node) => this.sectionObserver!.observe(node));
  }

  private protectProfileVisibility(): void {
    const inner = this.profileInner?.nativeElement;
    const image = this.profileImage?.nativeElement;

    if (!inner || !image) {
      return;
    }

    const clearHiddenStyles = (): void => {
      inner.style.removeProperty('display');
      inner.style.removeProperty('visibility');
      image.style.removeProperty('display');
      image.style.removeProperty('visibility');
    };

    clearHiddenStyles();

    this.profileStyleObserver = new MutationObserver(() => {
      clearHiddenStyles();
    });

    this.profileStyleObserver.observe(inner, {
      attributes: true,
      attributeFilter: ['style', 'class'],
    });
    this.profileStyleObserver.observe(image, {
      attributes: true,
      attributeFilter: ['style', 'class'],
    });
  }
}
