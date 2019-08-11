---
key: "work"
title: "B-spline Editor"
tags: ["university", "javascript"]
start: 2014
---
A simple B-spline editor made by me for a 3D Modelling course at Nanyang Technological University (NTU) in singapore
<!-- end -->
The editor is not very advanced or intuitive unfortunatly. The assignment was to be able to render a B-spline with a uniform algorithm and a Adaptive algorithm from a text file that specifies:

* The degree of B-spline
* The number of Control Points
* Knot sequence in 1 row
* Control points, 1 point per row

When this was done, I decided to further develop the the program with another algorithm called DeBoor algorithm and improve the user interface a bit. Now you can create B-splines directly in the Canvas and move the control points around. There is still no way to specify the knot sequence from the interface, so it only renders uniform B-splines

Project can be found on [Github](https://github.com/micnil/B-spline_plotter) and this [demopage](http://micnil.github.io/B-spline_plotter).