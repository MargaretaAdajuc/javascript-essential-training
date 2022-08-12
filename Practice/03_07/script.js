/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const desk = {
  name: "Work desk",
  length: 100,
  width: 70,
  numberOfDrawers: 5,
  drawerContents: {
    agendaColour: "blue",
    penColour: "black",
    stickyNotesShape: "cloud",
  },
  drawerOpen: false,
  toggleDrawer: function (drawerStatus) {
    this.drawerOpen = drawerStatus;
  },
};

console.log(desk);
