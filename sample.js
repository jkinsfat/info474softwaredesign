
$(function() {
	var george = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness,it was the epoch of belief, it was the epoch of incredulity,it was the season of Light, it was the season of Darkness,it was the spring of hope, it was the winter of despair we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way--in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only."
	var tim = "hello there my name is tim hello hello tim here is tim my name name name name"
	var myChart = wordCloudModule()
	.maxColor('0000ff')
	.minColor('0000ff')
	.scale(5)
	.width(1200)

	var wrapper = d3.select("#sampleChart")
	    
	wrapper.datum(george).call(myChart);
	
	document.getElementById('button').onclick = function() {

    wrapper.datum(tim).call(myChart);

    return false; // don't reload the page
  }
});
