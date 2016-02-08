== Winter Seminar 2016 Demo ==
This demo was developped for a winter seminar 2016. 
It uses ASP.NET 5 RC1, ReactJS, ReactJS.NET, TypeScript and Collection+JSON format for RESTful API.

== Installation ==

dnvm install -r clr 1.0.0-rc1-final 

npm -g install typescript
npm -g install tsd@next
npm -g install gulp
npm -g install del

tsd install react --save
tsd install react-dom --save
tsd install require --save
tsd install lodash --save
tsd install jquery --save
tsd install react-bootstrap --save
tsd install bootstrap --save

bower install jquery --save
bower install lodash --save
bower install react --save
bower install requirejs --save
bower install react-bootstrap --save
bower install bootstrap --save

dnx web
