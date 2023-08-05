const radioButtons = document.getElementsByName("event-type");

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", () => {
    const showEvent = document.querySelector("." + radioButton.id);
    const showEvent2 = document.querySelector("." + radioButton.id + "2");
    const allEvents = document.querySelectorAll("div[class$='-ev']");
    const allPictures = document.querySelectorAll("picture[class$='-ev2']");

    allEvents.forEach((event) => {
      event.style.display = "none";
    });

    if (showEvent) {
      showEvent.style.display = "block";
    }

    allPictures.forEach((picture) => {
      picture.style.display = "none";
    });

    if (showEvent) {
      showEvent.style.display = "block";
      showEvent2.style.display = "block";
    }

    const allLabels = document.querySelectorAll(
      'input[name="event-type"] + label'
    );

    allLabels.forEach((label) => {
      label.style.color = "gray";
    });

    const labelEvent = document.querySelector(
      'input[name="event-type"]:checked + label'
    );

    if (labelEvent) {
      labelEvent.style.color = "black";
    }
  });
});
