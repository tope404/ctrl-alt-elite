export class SharedInterest {
  constructor({ categoryTitle, accentColor, extractorFn }) {
    this.categoryTitle = categoryTitle;
    this.accentColor = accentColor;
    this.extractorFn = extractorFn;
  }

  analyze(members) {
    const map = new Map();

    members.forEach((member) => {
      const rawValue = this.extractorFn(member);
      const values = Array.isArray(rawValue) ? rawValue : [rawValue];

      values.forEach((item) => {
        const key = item.trim().toLowerCase();
        if (!map.has(key)) {
          map.set(key, {
            label: item.trim(),
            members: []
          });
        }
        map.get(key).members.push(member.nickname);
      });
    });

    return Array.from(map.values()).sort((a, b) => b.members.length - a.members.length);
  }
}