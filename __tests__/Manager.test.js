const Manager = require('../lib/Manager');

test ("is manager an object", () => {
    const e = new Manager();
    expect(typeof(e)).toBe("object");
})
test ("can we set name property", () => {
    const name = "Dane"
    const e = new Manager(name);
    expect(e.name).toBe(name);
})
test ("can we set id property", () => {
    const id = 1
    const e = new Manager("Dane", id);
    expect(e.id).toBe(id);
})
test ("can we set email property", () => {
    const email = "email@email.com"
    const e = new Manager("Dane", 1, email);
    expect(e.email).toBe(email);
})
test ("get manager name", () => {
    const name = "Dane";
    const e = new Manager(name);
    expect(e.getName()).toBe(name);
})
test ("get manager id", () => {
    const id = 1;
    const e = new Manager("Dane", 1);
    expect(e.getId()).toBe(id);
})
test ("get manager email", () => {
    const email = "email@email.com";
    const e = new Manager("Dane", 1, email);
    expect(e.getEmail()).toBe(email);
})
test ("get manager office number", () => {
    const officeNumber = 2;
    const e = new Manager("Dane", 1, "email@email.com", officeNumber);
    expect(e.getOfficeNumber()).toBe(officeNumber);
})
test ("get manager role", () => {
    const e = new Manager();
    expect(e.getRole()).toBe("Manager");
})