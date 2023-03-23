export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = typeof name === 'string' ? name : (() => { throw new TypeError('Name must be a string'); })();
    this._length = typeof length === 'number' ? length : (() => { throw new TypeError('Length must be a number'); })();
    this._students = Array.isArray(students) ? students : [];
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = typeof value === 'string' ? value : (() => { throw new TypeError('Name must be a string'); })();
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = typeof value === 'number' ? value : (() => { throw new TypeError('Length must be a number'); })();
  }

  get students() {
    return this._students;
  }

  set students(value) {
    this._students = Array.isArray(value) ? value : [];
  }
}
