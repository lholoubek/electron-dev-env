const gulp = require('gulp');

// Create an electron-connect server to enable reloading
const electron = require('electron-connect').server.create();

gulp.task('start', ()=>{
  electron.start();
  //Watch js files and restart Electron if they change
  gulp.watch(['./app/js/*.js'], electron.restart);
  //watch css files, but only reload (no restart necessary)
  gulp.watch(['./app/css/*.css'], electron.reload);
  //watch html
  gulp.watch(['./index.html'], electron.reload);
});
