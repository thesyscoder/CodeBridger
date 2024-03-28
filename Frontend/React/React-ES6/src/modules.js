/**
 * JavaScript modules allow you to break up your code into separate files.
 * This makes it easier to maintain the code-base.
 * ES Modules rely on the import and export statements
 * @syntax import or export
 * @file modules.js
 * @author thesyscoder
 */

const greetUser = (user) => {
  return `Welcome to Javascript World, ${user}`;
};

export default greetUser;
