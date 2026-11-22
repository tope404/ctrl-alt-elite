export class Person {
  #id;
  #fullName;
  #nickname;
  #age;
  #birthday;
  #intro;

  constructor({ id, fullName, nickname, age, birthday, intro, accentColor, avatarSvg }) {
    this.#id = id;
    this.#fullName = fullName;
    this.#nickname = nickname;
    this.#age = age;
    this.#birthday = birthday;
    this.#intro = intro;
    this.accentColor = accentColor || 'bg-coral';
    this.avatarSvg = avatarSvg;
  }

  // Controlled getters (Encapsulation)
  get id() { return this.#id; }
  get fullName() { return this.#fullName; }
  get nickname() { return this.#nickname; }
  get age() { return this.#age; }
  get birthday() { return this.#birthday; }
  get intro() { return this.#intro; }

  getInitials() {
    return this.#fullName
      .split(' ')
      .map((part) => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }

  getSummaryCardData() {
    return {
      title: this.#fullName,
      subtitle: `"${this.#nickname}" • Age ${this.#age}`,
      description: this.#intro,
      badge: 'Person'
    };
  }
}