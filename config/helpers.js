var path = require('path');
var fs = require('fs');
const yaml = require('js-yaml');
const merge = require('lodash/merge');

const EVENT = process.env.npm_lifecycle_event || '';

// Helper functions
var ROOT = path.resolve(__dirname, '..');

function hasProcessFlag(flag) {
  return process.argv.join('').indexOf(flag) > -1;
}

function hasNpmFlag(flag) {
  return EVENT.includes(flag);
}

function isWebpackDevServer() {
  return process.argv[1] && !! (/webpack-dev-server/.exec(process.argv[1]));
}

var root = path.join.bind(path, ROOT);

const p = path.resolve(ROOT, 'config/profiles');

function getConfigPath(profile) {
  if ('default' === profile) {
    return p + '/config.yml';
  }
  return p + '/' + profile + '.config.yml';
}

function getConfigProfile(profile) {
  const configPath = getConfigPath(profile);
  const data = fs.readFileSync(configPath, 'utf8');
  try {
    return yaml.load(data);
  } catch (e) {
    return {};
  }
}

function getConfig(defaultConfig = {}) {
  var profile = process.env.PROFILE;
  const ENV = process.env.ENV = process.env.NODE_ENV || 'development';
  const HOST = process.env.HOST || '0.0.0.0';
  const PORT = process.env.PORT || 3002;
  const HMR = hasProcessFlag('hot');
  const config = [
    {
      METADATA: {
        title: '宋昕冉资源站',
        baseUrl: '/',
        isDevServer: isWebpackDevServer(),
        host: HOST,
        port: PORT,
        ENV: ENV,
        HMR: HMR
      }
    },
    defaultConfig,
    getConfigProfile('default')
  ];

  if (profile) {
		profile = profile.toLowerCase();
    config.push(getConfigProfile(profile));
  }

  return merge.apply(undefined, [{}].concat(config));
}

// function getConfigStringify(profil) {
//   try {
//     return JSON.stringify(getConfig(profil));
//   } catch (e) {
//     return "{}";
//   }
// }

exports.hasProcessFlag = hasProcessFlag;
exports.hasNpmFlag = hasNpmFlag;
exports.isWebpackDevServer = isWebpackDevServer;
exports.root = root;
exports.getConfig = getConfig;
