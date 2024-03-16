const findImage = (images) => {
  if (images) {
    const postPicture = images.map((image) => {
      return `<img
                src="${image.image}" alt="post Images"
              />`;
    });
    return postPicture.join(" ");
  }
  return " ";
};
const findVideo = (link) => {
  if (link) {
    return `       <div class="videoCenter">
            <iframe width="675px" height="500px" src="${link}" title="1 minute funny videos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div/>`;
  }
  return " ";
};
