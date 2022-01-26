const Intern = require("../lib/Intern");

test("is intern an object", () => {
  const e = new Intern();
  expect(typeof e).toBe("object");
});
test("can we set name property", () => {
  const name = "Dane";
  const e = new Intern(name);
  expect(e.name).toBe(name);
});
test("can we set id property", () => {
  const id = 1;
  const e = new Intern("Dane", id);
  expect(e.id).toBe(id);
});
test("can we set email property", () => {
  const email = "email@email.com";
  const e = new Intern("Dane", 1, email);
  expect(e.email).toBe(email);
});
test("get intern name", () => {
  const name = "Dane";
  const e = new Intern(name);
  expect(e.getName()).toBe(name);
});
test("get intern id", () => {
  const id = 1;
  const e = new Intern("Dane", 1);
  expect(e.getId()).toBe(id);
});
test("get intern email", () => {
  const email = "email@email.com";
  const e = new Intern("Dane", 1, email);
  expect(e.getEmail()).toBe(email);
});
test("get intern school", () => {
  const school = "UMD";
  const e = new Intern("Dane", 1, "email@email.com", school);
  expect(e.getSchool()).toBe(school);
});
test("get intern role", () => {
  const e = new Intern();
  expect(e.getRole()).toBe("Intern");
});
