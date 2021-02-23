const gulp = require('gulp')
const sftp = require('gulp-sftp-up4')
const sftpConfig = {
  host: 'xxx', // 正式环境服务器
  port: 22,
  user: 'root',
  pass: 'qcloud',
  remotePath: '/opt/html',
  timeout: 10000000
}
gulp.task('upload', function () {
  return gulp.src('dist/**').pipe(sftp(sftpConfig))
})
