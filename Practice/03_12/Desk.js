class Desk {
  constructor(
    name,
    length,
    width,
    numberOfDrawers,
    agendaColour,
    penColour,
    stickyNotesShape,
    drawerOpen
  ) {
    this.name = name;
    this.length = length;
    this.width = width;
    this.numberOfDrawers = numberOfDrawers;
    this.drawerContents = {
      agendaColour: agendaColour,
      penColour: penColour,
      stickyNotesShape: stickyNotesShape,
    };
    this.drawerOpen = drawerOpen;
  }

  toggleDrawer(drawerStatus) {
    this.drawerOpen = drawerStatus;
  }
  newDrawerContents(agendaColour, penColour, stickyNotesShape) {
    this.drawerContents.agendaColour = agendaColour;
    this.drawerContents.penColour = penColour;
    this.drawerContents.stickyNotesShape = stickyNotesShape;
  }
}

export default Desk;
