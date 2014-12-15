RATT
====

Really Awesome Timeline Tool - Create a variable-width javascript timeline with navigation through the elements.

RATT is a mostly-responsive timeline tool used for projects that require an embeddable, smart tool to show a timeline that can be scrolled through article-by-article.

RATT is invoked simply by including ratt.js and ratt.css and using the div structure below.

```
<div class="RATTnav RATTnavleft">left</div>
<div class="RATTnav RATTnavright">right</div>

<div class="RATTcontainer">
    <div class="RATTslider">
        <div class="RATTitem1">Item 1</div>
    </div>
</div>
```

You may include as many Items as you like, each one requiring its own div. It must be defined in the ratt.css file and the cumulative widths of the items must equal 100%.

The "RATTslider" div may be as wide as you like but must be a defined width in the ratt.css file.

The "RATTslider" div does not auto-adjust height, but must have the height set manually. The "RATTitem*" divs must also have a height set, but you can customize the interiors of these divs.

A few variables may be passed by invoking the ratt(); function.

    ratt(sliderTime);

If the ratt(); function has not been called, the following default values are set:

    sliderTime = 500


Originally Written 6.26.13
