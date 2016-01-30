dnvm install -r clr 1.0.0-rc1-final 

npm -g install typescript
npm -g install tsd@next
npm -g install gulp
npm -g install del


tsd install react --save
tsd install react-dom --save
tsd install require --save


dnx web
