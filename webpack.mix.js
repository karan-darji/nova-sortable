let mix = require('laravel-mix');
let path = require('path');

require('./nova.mix');

mix
  .setPublicPath('dist')
  .js('resources/js/entry.js', 'js')
  .vue({ version: 3 })
  .nova('outl1ne/nova-sortable')
  .alias({
    '@': path.join(__dirname, 'resources/js/'),
  });
