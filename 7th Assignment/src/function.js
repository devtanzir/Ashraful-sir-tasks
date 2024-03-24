const isYouTubeVideoID = (code) => {
  // Regular expression to match the YouTube video ID format
  const videoIDRegex = /^[a-zA-Z0-9_-]{11}$/;

  // Test if the code matches the YouTube video ID format
  return videoIDRegex.test(code);
};
const isFacebookVideoId = (str) => {
  // Regular expression to match the format of Facebook video IDs
  const facebookVideoIdRegex = /^[0-9]+$/;

  // Test if the string matches the format of a Facebook video ID
  return facebookVideoIdRegex.test(str);
};

const filterLinks = (link) => {
  if (link) {
    const isYoutube = isYouTubeVideoID(link);
    const isFacebook = isFacebookVideoId(link);
    if (isYoutube) {
      return `<iframe width="100%" height="450px" src="https://www.youtube.com/embed/${link}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (isFacebook) {
      return `<iframe src="https://www.facebook.com/plugins/video.php?height=420&href=https%3A%2F%2Fwww.facebook.com%2F61553619308662%2Fvideos%2F${link}%2F&show_text=false&width=560&t=0" width="100%" height="425" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>`;
    } else {
      return `<div class="post-media">
              <img src="${link}" alt="Post Image">
            
              </div>`;
    }
  }

  return " ";
};
const findContent = (content) => {
  if (content) {
    return `<div class="post-body">
                <div class="post-content">
                  <p>
                    ${content}
                  </p>
                </div>
              </div>`;
  }
  return " ";
};

const postStatusIcon = (status) => {
  if (status == "privet") {
    return `<i class="fa-solid fa-lock only-me-icon"></i>`;
  } else if (status == "friends") {
    return `<svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" title="Shared with Your friends" class="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq" style="--color: var(--secondary-icon);"><title>Shared with Your friends</title><g fill-rule="evenodd" transform="translate(-448 -544)"><path d="M459.75 551c-1.24 0-2.25-1.121-2.25-2.5 0-1.542.863-2.5 2.25-2.5s2.25.958 2.25 2.5c0 1.379-1.01 2.5-2.25 2.5m.692 1h-1.384c-.105 0-.21.005-.312.014a.3.3 0 0 0-.186.509 5.03 5.03 0 0 1 1.44 3.53v1.147a.3.3 0 0 0 .3.3h2.015c.929 0 1.685-.756 1.685-1.685v-.257a3.562 3.562 0 0 0-3.558-3.558m-3.032 6.5h-7.82c-.877 0-1.59-.714-1.59-1.59v-.857a4.057 4.057 0 0 1 4.053-4.053h2.894a4.057 4.057 0 0 1 4.053 4.053v.856c0 .877-.713 1.591-1.59 1.591m-3.91-7.5c-1.379 0-2.5-1.346-2.5-3 0-1.879.935-3 2.5-3s2.5 1.121 2.5 3c0 1.654-1.121 3-2.5 3"></path></g></svg>`;
  } else {
    return `<svg
       fill="currentColor"
       viewBox="0 0 16 16"
       width="1em"
       height="1em"
       class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 x1kpxq89 xsmyaan"
       title="Shared with Public"
     >
       <title>Shared with Public</title>
       <g fill-rule="evenodd" transform="translate(-448 -544)">
         <g>
           <path
             d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434"
             transform="translate(354 143.5)"
           ></path>
           <path
             d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096"
             transform="translate(354 143.5)"
           ></path>
           <path
             fill-rule="nonzero"
             d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
             transform="translate(354 143.5)"
           ></path>
         </g>
       </g>
     </svg>`;
  }
};

/**
 * id generator
 * @returns
 */

const createId = () => {
  const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
  const machineId = "xxxxxxxxxxxx".replace(/[x]/g, function () {
    return ((Math.random() * 16) | 0).toString(16);
  });
  const processId = (Math.floor(Math.random() * 1000) % 1000)
    .toString(16)
    .padStart(3, "0");
  const counter = ((Math.random() * 16777216) | 0)
    .toString(16)
    .padStart(6, "0");

  return timestamp + machineId + processId + counter;
};

/**
 * get time ago
 * @param {*} postDate
 * @returns
 */

function formatPostTime(postDate) {
  const currentDate = new Date();
  const diff = currentDate - postDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 7) {
    return postDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } else if (days > 1) {
    return `${days} days ago`;
  } else if (days === 1) {
    return "Yesterday";
  } else if (hours >= 1) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes >= 1) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return "Just now";
  }
}

/**
 * Custom Alert Created
 * @param {*} msg
 * @param {*} type
 * @returns
 */

const setAlert = (msg, type = "danger") => {
  return `<p class="alert alert-${type} d-flex justify-content-between">${msg}<button data-bs-dismiss="alert" class="btn-close"></button></p>`;
};
