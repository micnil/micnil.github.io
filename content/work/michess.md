---
key: "work"
title: "Chessmonky"
subtitle: "Chess game platform"
tags: ["leisure", "typescript"]
thumbnail: "../images/michess.png"
start: "2021"
---
In 2019 I rediscovered my childhood hobby: Chess. As an avid player on [Lichess.org](www.lichess.org) and a programmer by profession, I couldn't help myself to try creating my own chess platform [Chessmonky](https://chessmonky.com). [Github](https://github.com/micnil/michess). 

<!-- end -->

The goal was originally to create a chess AI good enough to beat myself. In the process, I instead build a whole chess game platform where you can play against bots or other players. Get a rating in different time formats. Eventually you'll play different variants as well.

The technologies used are typescript, react, node, postgres, redis, bullmq, socket.io, radix-ui, drizzle, tanstack. Everything is organized in a madular way in a nx monorepo. 

The application is deployed on a Hetzner VPS using Dokploy.