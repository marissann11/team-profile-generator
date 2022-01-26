const Employee = require("../lib/Employee");

test("is employee an object", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});
test("can we set name property", () => {
  const name = "Dane";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});
test("can we set id property", () => {
  const id = 1;
  const e = new Employee("Dane", id);
  expect(e.id).toBe(id);
});
test("can we set email property", () => {
  const email = "email@email.com";
  const e = new Employee("Dane", 1, email);
  expect(e.email).toBe(email);
});
test("get employee name", () => {
  const name = "Dane";
  const e = new Employee(name);
  expect(e.getName()).toBe(name);
});
test("get employee id", () => {
  const id = 1;
  const e = new Employee("Dane", 1);
  expect(e.getId()).toBe(id);
});
test("get employee email", () => {
  const email = "email@email.com";
  const e = new Employee("Dane", 1, email);
  expect(e.getEmail()).toBe(email);
});
test("get employee role", () => {
  const e = new Employee();
  expect(e.getRole()).toBe("Employee");
});
