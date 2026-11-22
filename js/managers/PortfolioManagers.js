import { SharedInterest } from '../models/SharedInterest.js';

export class PortfolioManager {
  #members;
  #projects;
  #triviaItems;
  #interestAnalyzers;

  constructor({ members = [], projects = [], triviaItems = [] }) {
    this.#members = members;
    this.#projects = projects;
    this.#triviaItems = triviaItems;

    this.#interestAnalyzers = [
      new SharedInterest({
        categoryTitle: 'Favorite IT Subjects',
        accentColor: 'bg-coral',
        extractorFn: (m) => m.academics.favoriteSubject
      }),
      new SharedInterest({
        categoryTitle: 'Skills & Languages to Learn',
        accentColor: 'bg-yellow',
        extractorFn: (m) => m.academics.skillToLearn
      }),
      new SharedInterest({
        categoryTitle: 'Common Hobbies',
        accentColor: 'bg-teal',
        extractorFn: (m) => m.interests.hobbies
      }),
      new SharedInterest({
        categoryTitle: 'Entertainment & Series',
        accentColor: 'bg-lavender',
        extractorFn: (m) => m.interests.favoriteMovieOrSeries
      }),
      new SharedInterest({
        categoryTitle: 'Career Aspirations',
        accentColor: 'bg-peach',
        extractorFn: (m) => m.goals.biggestCareerGoal
      }),
      new SharedInterest({
        categoryTitle: 'Known Tech Stack',
        accentColor: 'bg-yellow',
        extractorFn: (m) => m.academics.languagesKnown
      })
    ];
  }

  getAllMembers() {
    return [...this.#members];
  }

  getMemberById(id) {
    return this.#members.find((m) => m.id === id) || null;
  }

  getAllProjects() {
    return [...this.#projects];
  }

  getTriviaItems() {
    return this.#triviaItems.map((item) => ({
      ...item,
      member: this.getMemberById(item.memberId)
    }));
  }

  computeAllSharedInterests() {
    return this.#interestAnalyzers.map((analyzer) => ({
      categoryTitle: analyzer.categoryTitle,
      accentColor: analyzer.accentColor,
      entries: analyzer.analyze(this.#members)
    }));
  }
}