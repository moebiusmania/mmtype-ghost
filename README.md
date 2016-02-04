# MoebiusManiaType
### Ghost blog/website image-free theme

Simple and clean layout with typographic/icon-fonts elements only, so... faster loading times ;-)

### Install
* Git clone this repo or download the zip from [here](https://github.com/moebiusmania/mmtype-ghost/archive/master.zip)
* move the **mmtype-ghost** folder inside the **content/themes** folder inside your Ghost installation
* if Ghost is already running restart it  
* go to themes option in the main settings to enable this theme.

### How to use
-work in progress-

### How to develop
There are two main Gulp actions for development, but first you have to install all the needed packages.
Open the terminal on theme folder and type the command

  bower install

to install frontend dependencies, and install the Gulp plugins with the command

  npm install

You can use the default task

  gulp

To watch all the .scss files in the assets/scss and compile them on save to plain css and concat + minify in the styles.min.css file.
Running

  gulp build

recompiles all the files like the default task and copy the fonts folder from the Fontawesome package inside the assets folder, this is good if you need to re-deploy the theme to a server after development changes.

### Credits
Theme designed and developed by [Salvatore Laisa](http://www.salvatorelaisa.me/) (aka [Moebiusmania](https://github.com/moebiusmania/)).

### Copyright & License
Copyright (c) 2016 Salvatore Laisa (aka MoebiusMania) - Released under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
