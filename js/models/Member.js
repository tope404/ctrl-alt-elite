import { Person } from './Person.js';

export class Member extends Person {
  constructor(data) {
    super(data);

    this.academics = {
      favoriteSubject: data.academics.favoriteSubject,
      favoriteLanguage: data.academics.favoriteLanguage,
      languagesKnown: [...data.academics.languagesKnown],
      preferredSpecialization: data.academics.preferredSpecialization,
      favoriteSoftware: data.academics.favoriteSoftware,
      skillToLearn: data.academics.skillToLearn
    };

    this.interests = {
      hobbies: [...data.interests.hobbies],
      favoriteMusicGenre: data.interests.favoriteMusicGenre,
      favoriteMovieOrSeries: data.interests.favoriteMovieOrSeries,
      favoriteFood: data.interests.favoriteFood,
      favoriteColor: data.interests.favoriteColor
    };

    this.personality = {
      threeWords: [...data.personality.threeWords],
      biggestPetPeeve: data.personality.biggestPetPeeve,
      personalMotto: data.personality.personalMotto,
      randomFact: data.personality.randomFact
    };

    this.goals = {
      dreamCountry: data.goals.dreamCountry,
      biggestCareerGoal: data.goals.biggestCareerGoal
    };
  }

  getSummaryCardData() {
    const base = super.getSummaryCardData();
    return {
      ...base,
      badge: this.academics.preferredSpecialization,
      primaryLang: this.academics.favoriteLanguage
    };
  }

  renderPreview() {
    return `${this.nickname} — ${this.academics.preferredSpecialization}`;
  }
}