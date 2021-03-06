sMap-responsive
===========

###Introduction

sMap-responsive is a software framework for web maps built with Leaflet and Bootstrap. The purpose of the framework is to facilitate creation of maps which supports a range of different browsers and devices (specified in the wiki). The framework can be extended with Leaflet controls.

For technical questions, contact Johan Lahti (see below).

###Scope

sMap as a product consists of source code developed in the sMap project. This code is released under the Apache Software License 2.0.

The product uses a number of third-party libraries, such as Leaflet and Bootstrap etc. These are not included in the sMap product. The copyright of these libraries belongs to their respective authors and are protected by their own license.

The sMap package (i.e. the contents of this repository) consists of the sMap product on one hand, and the required third-party libraries on the other.

###Important information regarding data sources

Data sources – whether belonging to the sMap project, to the participants of the sMap project, or to anyone else – are not included, neither in the product, nor in the package. You need to seek permission from the publisher and/or from the copyright owner to use these data. This also applies if the data is linked from any other code.

###Get started

To get started, follow these steps:

1. Clone or download the source code of this repository
2. Adapt the file configs/config.js so that it refers to already published data (e.g. WMS or WFS)
3. Upload the entire repository to a web server and point the browser to the index.html file
4. The map can be adapted by adding parameters to the URL, e.g. ?center=13,55.605&zoom=15&config=config.js

###Support

If you are using sMap-responsive to make your own map, or if you change it, we would be grateful if you let us know and share your experiences and your code.

###Questions or suggestions?

We are happy for any type of feed-back.

If you have technical questions regarding smap-reponsive, contact Johan Lahti (System Architect and main developer) (johan.lahti (at) malmo.se).

For more generic questions about the sMap cooperation – contact Product Owner Ulf Minör (ulf.minor (at) malmo.se) or Karl-Magnus Jönsson (karl-magnus.jonsson (at) kristianstad.se).
