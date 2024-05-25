( function() {
    var greet = new greeting ['Morning','Afternoon', 'Evening', 'Night'];
    var currentHour = new Date().getHours();
    var greetIndex = Math.floor(currentHour/6); 
    var greeting = greet[greetIndex];
    console.log(greeting);
});
