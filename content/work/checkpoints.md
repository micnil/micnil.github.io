---
key: "work"
title: "Checkpoints"
subtitle: "Visual Studio Code extension"
tags: ["leisure", "typescript"]
thumbnail: "../images/checkpoints-thumbnail.png"
start: 2018
---
Checkpoints is a Visual Studio Code extension used in between commits for keeping a local short-term history of work in progress, like bookmarks in you undo-stack.
<!-- end -->

Every now and then I comment away code i'm working on so that I can try rewriting it in a different way. Also, sometimes when modifying files that are ignored by vcs, I have to create a backup copy of them first (like configuration files or when exploring the source of node_modules). Sometimes I just want to go back to a previous state and notice that my undo stack is gone. These are the cases I am trying to solve with this vscode extension. 

Apply the command "Add Checkpoint" (CTRL+ALT+S), and the current file is stashed away in local storage. Continue working and whenever you feel like you've gone the wrong direction, you can restore the file to it's previous state. If you find old checkpoints, you can compare them with the current version (or any other checkpoint) using Visual Studio Codes diff view. The extension is written in **TypeScript** and has no dependencies.

For more information, checkout the package on [visual studio marketplace](https://marketplace.visualstudio.com/items?itemName=micnil.vscode-checkpoints) or take a look at the source code on [github](https://github.com/micnil/vscode-checkpoints).