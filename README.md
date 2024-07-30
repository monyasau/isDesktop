# is-Desktop

An utility to detect if a user is on a desktop device.

## Installation


```
npm install is-desktop
```

# Usage
The package provides a boolean value indicating whether the user is on a desktop device.
#### With Import
```
import isDesktop from 'is-desktop';

if (isDesktop) {
    //do what ever you want to do if on desktop/laptop
    console.log("User is on a desktop device.");
} else {
    //do what ever you want to do if not on desktop/laptop
    console.log("User is on a mobile device.");
}
```
#### With Require
```
const isDesktop = require('is-desktop');

if (isDesktop) {
    //do what ever you want to do if on desktop/laptop
    console.log("User is on a desktop device.");
} else {
    //do what ever you want to do if not on desktop/laptop
    console.log("User is on a mobile device.");
}
```

# How It Works
The is-desktop package uses several detection methods to determine if the user is on a desktop device:

* User-Agent Analysis: Checks the user-agent string for desktop operating systems and excludes mobile devices.
* Screen Size Detection: Assumes desktop devices have a screen width greater than 1024 pixels.
* Feature Detection: Detects the presence of mouse and context menu support.
* Device Memory: Assumes desktop devices have more memory.(will be depreciated soon)
* Behavioral Analysis: Checks for mouse movement and touch events to differentiate between desktop and mobile behavior.(may be depreciated soon)

# Contributions
 Contributions are welcome and you can find the source code and contribute at the GitHub repository.

### Reporting Issues
If you encounter any issues or have feature/pull requests, please report them at the issue tab/tracker.

### License
This project is open-source and is licensed under the MIT License - see the LICENSE file for details.

# Author
<a href="https://monyasau.netlify.app" target="_blank">Olanrewaju Olajide</a>

#### Misc
<a href="https://x.com/_monyasau" target="_blank">_monyasau</a> on Twitter.