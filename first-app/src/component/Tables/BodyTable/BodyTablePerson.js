class BodyTablePerson {

    constructor(id, fullName, director, branch, countTask) {
        this._id = id;
        this._fullName = fullName;
        this._director = director;
        this._branch = branch;
        this._countTask = countTask;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get fullName() {
        return this._fullName;
    }

    set fullName(value) {
        this._fullName = value;
    }

    get director() {
        return this._director;
    }

    set director(value) {
        this._director = value;
    }

    get branch() {
        return this._branch;
    }

    set branch(value) {
        this._branch = value;
    }

    get countTask() {
        return this._countTask;
    }

    set countTask(value) {
        this._countTask = value;
    }
}