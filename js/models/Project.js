export class Project {
  constructor({ title, category, stack, description, accentColor }) {
    this.title = title;
    this.category = category;
    this.stack = stack;
    this.description = description;
    this.accentColor = accentColor || 'bg-teal';
  }

  renderPreview() {
    return `<strong>${this.title}</strong> (${this.stack.join(', ')})`;
  }
}