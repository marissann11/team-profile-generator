const Engineer = require("../lib/Engineer");

test("is engineer an object", () => {
  const e = new Engineer();
  expect(typeof e).toBe("object");
});
test("can we set name property", () => {
  const name = "Dane";
  const e = new Engineer(name);
  expect(e.name).toBe(name);
});
test("can we set id property", () => {
  const id = 1;
  const e = new Engineer("Dane", id);
  expect(e.id).toBe(id);
});
test("can we set email property", () => {
  const email = "email@email.com";
  const e = new Engineer("Dane", 1, email);
  expect(e.email).toBe(email);
});
test("get engineer name", () => {
  const name = "Dane";
  const e = new Engineer(name);
  expect(e.getName()).toBe(name);
});
test("get engineer id", () => {
  const id = 1;
  const e = new Engineer("Dane", 1);
  expect(e.getId()).toBe(id);
});
test("get engineer email", () => {
  const email = "email@email.com";
  const e = new Engineer("Dane", 1, email);
  expect(e.getEmail()).toBe(email);
});
test("get engineer github", () => {
  const github = "github.user";
  const e = new Engineer("Dane", 1, "email@email.com", github);
  expect(e.getGithub()).toBe(github);
});
test("get engineer role", () => {
  const e = new Engineer();
  expect(e.getRole()).toBe("Engineer");
});
