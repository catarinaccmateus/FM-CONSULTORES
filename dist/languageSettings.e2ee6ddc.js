// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../data/en.json":[function(require,module,exports) {
module.exports = {
  "navServices": "Services",
  "navPartners": "Partnerships",
  "navAbout": "About",
  "navContacts": "Contacts",
  "titleIntro": "We are a company with over 30 years of experience. We focus on the quality of our services and the relationships with our customers.",
  "aboutAbout": "About us",
  "aboutDescriptionOne": "'FM Consultores Associados' was founded on May 25, 1990.",
  "aboutDescriptionTwo": "Its founder, Fernando Mateus, has a degree in Organization and Business Management and he is registered in the Order of Certified Accountants since August 4, 1987 under number 23776.",
  "aboutDescriptionThree": "He is a member of the Governing Bodies of several private companies. He started his professional activity leading the Accounting Services of the Portuguese Industrial Association.",
  "clientsClients": "Our clients",
  "clientsDescription": "Since its foundation, 'FM Consultores Associados' has always grown and nowadays it has a large portfolio of customers from different sectors.",
  "partnersPartnerships": "Partnerships",
  "servicesServices": "Services",
  "servicesAccountant": "Accounting",
  "servicesTax": "Tax Calculation",
  "servicesClientsManagement": "Clients Management",
  "servicesConsulting": "Consulting",
  "servicesHumanResources": "Human Resources",
  "contactsContacts": "Contacts",
  "contactsAddress": "Address"
};
},{}],"../data/pt.json":[function(require,module,exports) {
module.exports = {
  "navAbout": "Sobre nós",
  "navServices": "Serviços",
  "navPartners": "Parcerias",
  "navContacts": "Contactos",
  "titleIntro": "    A nossa empresa conta com mais de 30 anos de experiência. O nosso foco está na qualidade dos nossos serviços e do relacionamento com os nossos clientes.",
  "aboutAbout": "Sobre nós",
  "aboutDescriptionOne": "A “FM Consultores Associados” foi constituída em 25 de Maio de 1990.",
  "aboutDescriptionTwo": "O seu fundador Fernando Mateus é licenciado em Organização e Gestão de Empresa, inscrito da ordem dos Contabilistas Certificados desde 4 de agosto de 1987 com o numero 23776.",
  "aboutDescriptionThree": "É membro de Órgãos Sociais de diversas empresas privadas tendo iniciado a sua atividade profissional chefiando os Serviços de Contabilidade da Associação Industrial Portuguesa.",
  "clientsClients": "Os nossos clientes",
  "clientsDescription": "Desde da sua fundação a nossa empresa veio sempre a crescer e conta com uma grande carteira de clientes de diferentes setores.",
  "partnersPartnerships": "Parcerias",
  "servicesServices": "Serviços",
  "servicesAccountant": "Contabilidade Organizada",
  "servicesTax": "Fiscalidade",
  "servicesClientsManagement": "Gestão de Clientes",
  "servicesConsulting": "Consultoria",
  "servicesHumanResources": "Recursos Humanos",
  "contactsContacts": "Contactos",
  "contactsAddress": "Morada"
};
},{}],"../../scripts/languageSettings.js":[function(require,module,exports) {
//import {en, pt} from './content'; This content was replaced by a json object as shown below.
var en = require('./../markup/data/en.json');

var pt = require('./../markup/data/pt.json');

document.getElementById('enSelect').addEventListener('click', englishWebsite);
document.getElementById('ptSelect').addEventListener('click', portuguesehWebsite);

function englishWebsite() {
  var enKeys = Object.keys(en);

  for (var _i = 0, _enKeys = enKeys; _i < _enKeys.length; _i++) {
    var key = _enKeys[_i];
    document.getElementById(key).innerHTML = en[key];
    document.getElementById('clientsClients').classList.remove('smallerTitle');
  }
}

;

function portuguesehWebsite() {
  var ptKeys = Object.keys(pt);

  for (var _i2 = 0, _ptKeys = ptKeys; _i2 < _ptKeys.length; _i2++) {
    var key = _ptKeys[_i2];
    document.getElementById(key).innerHTML = pt[key];
    document.getElementById('clientsClients').classList.add('smallerTitle');
  }
}

;
},{"./../markup/data/en.json":"../data/en.json","./../markup/data/pt.json":"../data/pt.json"}],"../../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57770" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../../scripts/languageSettings.js"], null)
//# sourceMappingURL=/languageSettings.e2ee6ddc.js.map