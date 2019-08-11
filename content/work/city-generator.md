---
key: "work"
title: "City Generator"
tags: ["university", "javascript","webgl"]
start: 2016
---
A web application that generates a procedural city in WebGL.
<!-- end -->
For a course in Procedural methods for Images I created a WebGl city generator. The generator starts out with a rectangular plane and splits it recursively with two rules for size and form. This leaves us with a road network, and inside each block a building is extruded with a **Simplex noise** function. The textures on the buildings and roads are also generated procedurally.

Project can be found on [Github](https://github.com/micnil/city-generator) and this [demopage](http://micnil.github.io/city-generator).