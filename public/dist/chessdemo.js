(function () {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties$1(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass$1(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$1(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized$1(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized$1(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray$1(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
  }

  function _arrayLikeToArray$1(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var noop$1 = {value: () => {}};

  function dispatch() {
    for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
      if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
      _[t] = [];
    }
    return new Dispatch(_);
  }

  function Dispatch(_) {
    this._ = _;
  }

  function parseTypenames$1(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
      var name = "", i = t.indexOf(".");
      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
      if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
      return {type: t, name: name};
    });
  }

  Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function(typename, callback) {
      var _ = this._,
          T = parseTypenames$1(typename + "", _),
          t,
          i = -1,
          n = T.length;

      // If no callback was specified, return the callback of the given type and name.
      if (arguments.length < 2) {
        while (++i < n) if ((t = (typename = T[i]).type) && (t = get$1(_[t], typename.name))) return t;
        return;
      }

      // If a type was specified, set the callback for the given type and name.
      // Otherwise, if a null callback was specified, remove callbacks of the given name.
      if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
      while (++i < n) {
        if (t = (typename = T[i]).type) _[t] = set$1(_[t], typename.name, callback);
        else if (callback == null) for (t in _) _[t] = set$1(_[t], typename.name, null);
      }

      return this;
    },
    copy: function() {
      var copy = {}, _ = this._;
      for (var t in _) copy[t] = _[t].slice();
      return new Dispatch(copy);
    },
    call: function(type, that) {
      if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
      for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
    },
    apply: function(type, that, args) {
      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
      for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
    }
  };

  function get$1(type, name) {
    for (var i = 0, n = type.length, c; i < n; ++i) {
      if ((c = type[i]).name === name) {
        return c.value;
      }
    }
  }

  function set$1(type, name, callback) {
    for (var i = 0, n = type.length; i < n; ++i) {
      if (type[i].name === name) {
        type[i] = noop$1, type = type.slice(0, i).concat(type.slice(i + 1));
        break;
      }
    }
    if (callback != null) type.push({name: name, value: callback});
    return type;
  }

  var xhtml = "http://www.w3.org/1999/xhtml";

  var namespaces = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };

  function namespace(name) {
    var prefix = name += "", i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name; // eslint-disable-line no-prototype-builtins
  }

  function creatorInherit(name) {
    return function() {
      var document = this.ownerDocument,
          uri = this.namespaceURI;
      return uri === xhtml && document.documentElement.namespaceURI === xhtml
          ? document.createElement(name)
          : document.createElementNS(uri, name);
    };
  }

  function creatorFixed(fullname) {
    return function() {
      return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
  }

  function creator(name) {
    var fullname = namespace(name);
    return (fullname.local
        ? creatorFixed
        : creatorInherit)(fullname);
  }

  function none() {}

  function selector(selector) {
    return selector == null ? none : function() {
      return this.querySelector(selector);
    };
  }

  function selection_select(select) {
    if (typeof select !== "function") select = selector(select);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
        }
      }
    }

    return new Selection$1(subgroups, this._parents);
  }

  function array(x) {
    return typeof x === "object" && "length" in x
      ? x // Array, TypedArray, NodeList, array-like
      : Array.from(x); // Map, Set, iterable, string, or anything else
  }

  function empty() {
    return [];
  }

  function selectorAll(selector) {
    return selector == null ? empty : function() {
      return this.querySelectorAll(selector);
    };
  }

  function arrayAll(select) {
    return function() {
      var group = select.apply(this, arguments);
      return group == null ? [] : array(group);
    };
  }

  function selection_selectAll(select) {
    if (typeof select === "function") select = arrayAll(select);
    else select = selectorAll(select);

    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          subgroups.push(select.call(node, node.__data__, i, group));
          parents.push(node);
        }
      }
    }

    return new Selection$1(subgroups, parents);
  }

  function matcher(selector) {
    return function() {
      return this.matches(selector);
    };
  }

  function childMatcher(selector) {
    return function(node) {
      return node.matches(selector);
    };
  }

  var find = Array.prototype.find;

  function childFind(match) {
    return function() {
      return find.call(this.children, match);
    };
  }

  function childFirst() {
    return this.firstElementChild;
  }

  function selection_selectChild(match) {
    return this.select(match == null ? childFirst
        : childFind(typeof match === "function" ? match : childMatcher(match)));
  }

  var filter = Array.prototype.filter;

  function children() {
    return this.children;
  }

  function childrenFilter(match) {
    return function() {
      return filter.call(this.children, match);
    };
  }

  function selection_selectChildren(match) {
    return this.selectAll(match == null ? children
        : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
  }

  function selection_filter(match) {
    if (typeof match !== "function") match = matcher(match);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }

    return new Selection$1(subgroups, this._parents);
  }

  function sparse(update) {
    return new Array(update.length);
  }

  function selection_enter() {
    return new Selection$1(this._enter || this._groups.map(sparse), this._parents);
  }

  function EnterNode(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
  }

  EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
    insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
    querySelector: function(selector) { return this._parent.querySelector(selector); },
    querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
  };

  function constant$2(x) {
    return function() {
      return x;
    };
  }

  function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0,
        node,
        groupLength = group.length,
        dataLength = data.length;

    // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for (; i < dataLength; ++i) {
      if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    }

    // Put any non-null nodes that don’t fit into exit.
    for (; i < groupLength; ++i) {
      if (node = group[i]) {
        exit[i] = node;
      }
    }
  }

  function bindKey(parent, group, enter, update, exit, data, key) {
    var i,
        node,
        nodeByKeyValue = new Map,
        groupLength = group.length,
        dataLength = data.length,
        keyValues = new Array(groupLength),
        keyValue;

    // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.
    for (i = 0; i < groupLength; ++i) {
      if (node = group[i]) {
        keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
        if (nodeByKeyValue.has(keyValue)) {
          exit[i] = node;
        } else {
          nodeByKeyValue.set(keyValue, node);
        }
      }
    }

    // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.
    for (i = 0; i < dataLength; ++i) {
      keyValue = key.call(parent, data[i], i, data) + "";
      if (node = nodeByKeyValue.get(keyValue)) {
        update[i] = node;
        node.__data__ = data[i];
        nodeByKeyValue.delete(keyValue);
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    }

    // Add any remaining nodes that were not bound to data to exit.
    for (i = 0; i < groupLength; ++i) {
      if ((node = group[i]) && (nodeByKeyValue.get(keyValues[i]) === node)) {
        exit[i] = node;
      }
    }
  }

  function datum(node) {
    return node.__data__;
  }

  function selection_data(value, key) {
    if (!arguments.length) return Array.from(this, datum);

    var bind = key ? bindKey : bindIndex,
        parents = this._parents,
        groups = this._groups;

    if (typeof value !== "function") value = constant$2(value);

    for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
      var parent = parents[j],
          group = groups[j],
          groupLength = group.length,
          data = array(value.call(parent, parent && parent.__data__, j, parents)),
          dataLength = data.length,
          enterGroup = enter[j] = new Array(dataLength),
          updateGroup = update[j] = new Array(dataLength),
          exitGroup = exit[j] = new Array(groupLength);

      bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

      // Now connect the enter nodes to their following update node, such that
      // appendChild can insert the materialized enter node before this node,
      // rather than at the end of the parent node.
      for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
        if (previous = enterGroup[i0]) {
          if (i0 >= i1) i1 = i0 + 1;
          while (!(next = updateGroup[i1]) && ++i1 < dataLength);
          previous._next = next || null;
        }
      }
    }

    update = new Selection$1(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
  }

  function selection_exit() {
    return new Selection$1(this._exit || this._groups.map(sparse), this._parents);
  }

  function selection_join(onenter, onupdate, onexit) {
    var enter = this.enter(), update = this, exit = this.exit();
    enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
    if (onupdate != null) update = onupdate(update);
    if (onexit == null) exit.remove(); else onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
  }

  function selection_merge(selection) {
    if (!(selection instanceof Selection$1)) throw new Error("invalid merge");

    for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }

    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }

    return new Selection$1(merges, this._parents);
  }

  function selection_order() {

    for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
      for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
        if (node = group[i]) {
          if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }

    return this;
  }

  function selection_sort(compare) {
    if (!compare) compare = ascending;

    function compareNode(a, b) {
      return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }

    for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          sortgroup[i] = node;
        }
      }
      sortgroup.sort(compareNode);
    }

    return new Selection$1(sortgroups, this._parents).order();
  }

  function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }

  function selection_call() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
  }

  function selection_nodes() {
    return Array.from(this);
  }

  function selection_node() {

    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
        var node = group[i];
        if (node) return node;
      }
    }

    return null;
  }

  function selection_size() {
    let size = 0;
    for (const node of this) ++size; // eslint-disable-line no-unused-vars
    return size;
  }

  function selection_empty() {
    return !this.node();
  }

  function selection_each(callback) {

    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
        if (node = group[i]) callback.call(node, node.__data__, i, group);
      }
    }

    return this;
  }

  function attrRemove$1(name) {
    return function() {
      this.removeAttribute(name);
    };
  }

  function attrRemoveNS$1(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }

  function attrConstant$1(name, value) {
    return function() {
      this.setAttribute(name, value);
    };
  }

  function attrConstantNS$1(fullname, value) {
    return function() {
      this.setAttributeNS(fullname.space, fullname.local, value);
    };
  }

  function attrFunction$1(name, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) this.removeAttribute(name);
      else this.setAttribute(name, v);
    };
  }

  function attrFunctionNS$1(fullname, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
      else this.setAttributeNS(fullname.space, fullname.local, v);
    };
  }

  function selection_attr(name, value) {
    var fullname = namespace(name);

    if (arguments.length < 2) {
      var node = this.node();
      return fullname.local
          ? node.getAttributeNS(fullname.space, fullname.local)
          : node.getAttribute(fullname);
    }

    return this.each((value == null
        ? (fullname.local ? attrRemoveNS$1 : attrRemove$1) : (typeof value === "function"
        ? (fullname.local ? attrFunctionNS$1 : attrFunction$1)
        : (fullname.local ? attrConstantNS$1 : attrConstant$1)))(fullname, value));
  }

  function defaultView(node) {
    return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
        || (node.document && node) // node is a Window
        || node.defaultView; // node is a Document
  }

  function styleRemove$1(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }

  function styleConstant$1(name, value, priority) {
    return function() {
      this.style.setProperty(name, value, priority);
    };
  }

  function styleFunction$1(name, value, priority) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) this.style.removeProperty(name);
      else this.style.setProperty(name, v, priority);
    };
  }

  function selection_style(name, value, priority) {
    return arguments.length > 1
        ? this.each((value == null
              ? styleRemove$1 : typeof value === "function"
              ? styleFunction$1
              : styleConstant$1)(name, value, priority == null ? "" : priority))
        : styleValue(this.node(), name);
  }

  function styleValue(node, name) {
    return node.style.getPropertyValue(name)
        || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
  }

  function propertyRemove(name) {
    return function() {
      delete this[name];
    };
  }

  function propertyConstant(name, value) {
    return function() {
      this[name] = value;
    };
  }

  function propertyFunction(name, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) delete this[name];
      else this[name] = v;
    };
  }

  function selection_property(name, value) {
    return arguments.length > 1
        ? this.each((value == null
            ? propertyRemove : typeof value === "function"
            ? propertyFunction
            : propertyConstant)(name, value))
        : this.node()[name];
  }

  function classArray(string) {
    return string.trim().split(/^|\s+/);
  }

  function classList(node) {
    return node.classList || new ClassList(node);
  }

  function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
  }

  ClassList.prototype = {
    add: function(name) {
      var i = this._names.indexOf(name);
      if (i < 0) {
        this._names.push(name);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    remove: function(name) {
      var i = this._names.indexOf(name);
      if (i >= 0) {
        this._names.splice(i, 1);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    contains: function(name) {
      return this._names.indexOf(name) >= 0;
    }
  };

  function classedAdd(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n) list.add(names[i]);
  }

  function classedRemove(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n) list.remove(names[i]);
  }

  function classedTrue(names) {
    return function() {
      classedAdd(this, names);
    };
  }

  function classedFalse(names) {
    return function() {
      classedRemove(this, names);
    };
  }

  function classedFunction(names, value) {
    return function() {
      (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
  }

  function selection_classed(name, value) {
    var names = classArray(name + "");

    if (arguments.length < 2) {
      var list = classList(this.node()), i = -1, n = names.length;
      while (++i < n) if (!list.contains(names[i])) return false;
      return true;
    }

    return this.each((typeof value === "function"
        ? classedFunction : value
        ? classedTrue
        : classedFalse)(names, value));
  }

  function textRemove() {
    this.textContent = "";
  }

  function textConstant$1(value) {
    return function() {
      this.textContent = value;
    };
  }

  function textFunction$1(value) {
    return function() {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    };
  }

  function selection_text(value) {
    return arguments.length
        ? this.each(value == null
            ? textRemove : (typeof value === "function"
            ? textFunction$1
            : textConstant$1)(value))
        : this.node().textContent;
  }

  function htmlRemove() {
    this.innerHTML = "";
  }

  function htmlConstant(value) {
    return function() {
      this.innerHTML = value;
    };
  }

  function htmlFunction(value) {
    return function() {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    };
  }

  function selection_html(value) {
    return arguments.length
        ? this.each(value == null
            ? htmlRemove : (typeof value === "function"
            ? htmlFunction
            : htmlConstant)(value))
        : this.node().innerHTML;
  }

  function raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
  }

  function selection_raise() {
    return this.each(raise);
  }

  function lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }

  function selection_lower() {
    return this.each(lower);
  }

  function selection_append(name) {
    var create = typeof name === "function" ? name : creator(name);
    return this.select(function() {
      return this.appendChild(create.apply(this, arguments));
    });
  }

  function constantNull() {
    return null;
  }

  function selection_insert(name, before) {
    var create = typeof name === "function" ? name : creator(name),
        select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
    return this.select(function() {
      return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
  }

  function remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
  }

  function selection_remove() {
    return this.each(remove);
  }

  function selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }

  function selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }

  function selection_clone(deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
  }

  function selection_datum(value) {
    return arguments.length
        ? this.property("__data__", value)
        : this.node().__data__;
  }

  function contextListener(listener) {
    return function(event) {
      listener.call(this, event, this.__data__);
    };
  }

  function parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
      var name = "", i = t.indexOf(".");
      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
      return {type: t, name: name};
    });
  }

  function onRemove(typename) {
    return function() {
      var on = this.__on;
      if (!on) return;
      for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
        if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
        } else {
          on[++i] = o;
        }
      }
      if (++i) on.length = i;
      else delete this.__on;
    };
  }

  function onAdd(typename, value, options) {
    return function() {
      var on = this.__on, o, listener = contextListener(value);
      if (on) for (var j = 0, m = on.length; j < m; ++j) {
        if ((o = on[j]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
          this.addEventListener(o.type, o.listener = listener, o.options = options);
          o.value = value;
          return;
        }
      }
      this.addEventListener(typename.type, listener, options);
      o = {type: typename.type, name: typename.name, value: value, listener: listener, options: options};
      if (!on) this.__on = [o];
      else on.push(o);
    };
  }

  function selection_on(typename, value, options) {
    var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

    if (arguments.length < 2) {
      var on = this.node().__on;
      if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
        for (i = 0, o = on[j]; i < n; ++i) {
          if ((t = typenames[i]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
      return;
    }

    on = value ? onAdd : onRemove;
    for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
    return this;
  }

  function dispatchEvent(node, type, params) {
    var window = defaultView(node),
        event = window.CustomEvent;

    if (typeof event === "function") {
      event = new event(type, params);
    } else {
      event = window.document.createEvent("Event");
      if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
      else event.initEvent(type, false, false);
    }

    node.dispatchEvent(event);
  }

  function dispatchConstant(type, params) {
    return function() {
      return dispatchEvent(this, type, params);
    };
  }

  function dispatchFunction(type, params) {
    return function() {
      return dispatchEvent(this, type, params.apply(this, arguments));
    };
  }

  function selection_dispatch(type, params) {
    return this.each((typeof params === "function"
        ? dispatchFunction
        : dispatchConstant)(type, params));
  }

  function* selection_iterator() {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
        if (node = group[i]) yield node;
      }
    }
  }

  var root = [null];

  function Selection$1(groups, parents) {
    this._groups = groups;
    this._parents = parents;
  }

  function selection() {
    return new Selection$1([[document.documentElement]], root);
  }

  function selection_selection() {
    return this;
  }

  Selection$1.prototype = selection.prototype = {
    constructor: Selection$1,
    select: selection_select,
    selectAll: selection_selectAll,
    selectChild: selection_selectChild,
    selectChildren: selection_selectChildren,
    filter: selection_filter,
    data: selection_data,
    enter: selection_enter,
    exit: selection_exit,
    join: selection_join,
    merge: selection_merge,
    selection: selection_selection,
    order: selection_order,
    sort: selection_sort,
    call: selection_call,
    nodes: selection_nodes,
    node: selection_node,
    size: selection_size,
    empty: selection_empty,
    each: selection_each,
    attr: selection_attr,
    style: selection_style,
    property: selection_property,
    classed: selection_classed,
    text: selection_text,
    html: selection_html,
    raise: selection_raise,
    lower: selection_lower,
    append: selection_append,
    insert: selection_insert,
    remove: selection_remove,
    clone: selection_clone,
    datum: selection_datum,
    on: selection_on,
    dispatch: selection_dispatch,
    [Symbol.iterator]: selection_iterator
  };

  function select(selector) {
    return typeof selector === "string"
        ? new Selection$1([[document.querySelector(selector)]], [document.documentElement])
        : new Selection$1([[selector]], root);
  }

  function create$1(name) {
    return select(creator(name).call(document.documentElement));
  }

  function sourceEvent(event) {
    let sourceEvent;
    while (sourceEvent = event.sourceEvent) event = sourceEvent;
    return event;
  }

  function pointer(event, node) {
    event = sourceEvent(event);
    if (node === undefined) node = event.currentTarget;
    if (node) {
      var svg = node.ownerSVGElement || node;
      if (svg.createSVGPoint) {
        var point = svg.createSVGPoint();
        point.x = event.clientX, point.y = event.clientY;
        point = point.matrixTransform(node.getScreenCTM().inverse());
        return [point.x, point.y];
      }
      if (node.getBoundingClientRect) {
        var rect = node.getBoundingClientRect();
        return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
      }
    }
    return [event.pageX, event.pageY];
  }

  function nopropagation(event) {
    event.stopImmediatePropagation();
  }

  function noevent(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  function dragDisable(view) {
    var root = view.document.documentElement,
        selection = select(view).on("dragstart.drag", noevent, true);
    if ("onselectstart" in root) {
      selection.on("selectstart.drag", noevent, true);
    } else {
      root.__noselect = root.style.MozUserSelect;
      root.style.MozUserSelect = "none";
    }
  }

  function yesdrag(view, noclick) {
    var root = view.document.documentElement,
        selection = select(view).on("dragstart.drag", null);
    if (noclick) {
      selection.on("click.drag", noevent, true);
      setTimeout(function() { selection.on("click.drag", null); }, 0);
    }
    if ("onselectstart" in root) {
      selection.on("selectstart.drag", null);
    } else {
      root.style.MozUserSelect = root.__noselect;
      delete root.__noselect;
    }
  }

  var constant$1 = x => () => x;

  function DragEvent(type, {
    sourceEvent,
    subject,
    target,
    identifier,
    active,
    x, y, dx, dy,
    dispatch
  }) {
    Object.defineProperties(this, {
      type: {value: type, enumerable: true, configurable: true},
      sourceEvent: {value: sourceEvent, enumerable: true, configurable: true},
      subject: {value: subject, enumerable: true, configurable: true},
      target: {value: target, enumerable: true, configurable: true},
      identifier: {value: identifier, enumerable: true, configurable: true},
      active: {value: active, enumerable: true, configurable: true},
      x: {value: x, enumerable: true, configurable: true},
      y: {value: y, enumerable: true, configurable: true},
      dx: {value: dx, enumerable: true, configurable: true},
      dy: {value: dy, enumerable: true, configurable: true},
      _: {value: dispatch}
    });
  }

  DragEvent.prototype.on = function() {
    var value = this._.on.apply(this._, arguments);
    return value === this._ ? this : value;
  };

  // Ignore right-click, since that should open the context menu.
  function defaultFilter(event) {
    return !event.ctrlKey && !event.button;
  }

  function defaultContainer() {
    return this.parentNode;
  }

  function defaultSubject(event, d) {
    return d == null ? {x: event.x, y: event.y} : d;
  }

  function defaultTouchable() {
    return navigator.maxTouchPoints || ("ontouchstart" in this);
  }

  function drag() {
    var filter = defaultFilter,
        container = defaultContainer,
        subject = defaultSubject,
        touchable = defaultTouchable,
        gestures = {},
        listeners = dispatch("start", "drag", "end"),
        active = 0,
        mousedownx,
        mousedowny,
        mousemoving,
        touchending,
        clickDistance2 = 0;

    function drag(selection) {
      selection
          .on("mousedown.drag", mousedowned)
        .filter(touchable)
          .on("touchstart.drag", touchstarted)
          .on("touchmove.drag", touchmoved)
          .on("touchend.drag touchcancel.drag", touchended)
          .style("touch-action", "none")
          .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }

    function mousedowned(event, d) {
      if (touchending || !filter.call(this, event, d)) return;
      var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
      if (!gesture) return;
      select(event.view).on("mousemove.drag", mousemoved, true).on("mouseup.drag", mouseupped, true);
      dragDisable(event.view);
      nopropagation(event);
      mousemoving = false;
      mousedownx = event.clientX;
      mousedowny = event.clientY;
      gesture("start", event);
    }

    function mousemoved(event) {
      noevent(event);
      if (!mousemoving) {
        var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
        mousemoving = dx * dx + dy * dy > clickDistance2;
      }
      gestures.mouse("drag", event);
    }

    function mouseupped(event) {
      select(event.view).on("mousemove.drag mouseup.drag", null);
      yesdrag(event.view, mousemoving);
      noevent(event);
      gestures.mouse("end", event);
    }

    function touchstarted(event, d) {
      if (!filter.call(this, event, d)) return;
      var touches = event.changedTouches,
          c = container.call(this, event, d),
          n = touches.length, i, gesture;

      for (i = 0; i < n; ++i) {
        if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
          nopropagation(event);
          gesture("start", event, touches[i]);
        }
      }
    }

    function touchmoved(event) {
      var touches = event.changedTouches,
          n = touches.length, i, gesture;

      for (i = 0; i < n; ++i) {
        if (gesture = gestures[touches[i].identifier]) {
          noevent(event);
          gesture("drag", event, touches[i]);
        }
      }
    }

    function touchended(event) {
      var touches = event.changedTouches,
          n = touches.length, i, gesture;

      if (touchending) clearTimeout(touchending);
      touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
      for (i = 0; i < n; ++i) {
        if (gesture = gestures[touches[i].identifier]) {
          nopropagation(event);
          gesture("end", event, touches[i]);
        }
      }
    }

    function beforestart(that, container, event, d, identifier, touch) {
      var dispatch = listeners.copy(),
          p = pointer(touch || event, container), dx, dy,
          s;

      if ((s = subject.call(that, new DragEvent("beforestart", {
          sourceEvent: event,
          target: drag,
          identifier,
          active,
          x: p[0],
          y: p[1],
          dx: 0,
          dy: 0,
          dispatch
        }), d)) == null) return;

      dx = s.x - p[0] || 0;
      dy = s.y - p[1] || 0;

      return function gesture(type, event, touch) {
        var p0 = p, n;
        switch (type) {
          case "start": gestures[identifier] = gesture, n = active++; break;
          case "end": delete gestures[identifier], --active; // nobreak
          case "drag": p = pointer(touch || event, container), n = active; break;
        }
        dispatch.call(
          type,
          that,
          new DragEvent(type, {
            sourceEvent: event,
            subject: s,
            target: drag,
            identifier,
            active: n,
            x: p[0] + dx,
            y: p[1] + dy,
            dx: p[0] - p0[0],
            dy: p[1] - p0[1],
            dispatch
          }),
          d
        );
      };
    }

    drag.filter = function(_) {
      return arguments.length ? (filter = typeof _ === "function" ? _ : constant$1(!!_), drag) : filter;
    };

    drag.container = function(_) {
      return arguments.length ? (container = typeof _ === "function" ? _ : constant$1(_), drag) : container;
    };

    drag.subject = function(_) {
      return arguments.length ? (subject = typeof _ === "function" ? _ : constant$1(_), drag) : subject;
    };

    drag.touchable = function(_) {
      return arguments.length ? (touchable = typeof _ === "function" ? _ : constant$1(!!_), drag) : touchable;
    };

    drag.on = function() {
      var value = listeners.on.apply(listeners, arguments);
      return value === listeners ? drag : value;
    };

    drag.clickDistance = function(_) {
      return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
    };

    return drag;
  }

  function define(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
  }

  function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for (var key in definition) prototype[key] = definition[key];
    return prototype;
  }

  function Color() {}

  var darker = 0.7;
  var brighter = 1 / darker;

  var reI = "\\s*([+-]?\\d+)\\s*",
      reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      reHex = /^#([0-9a-f]{3,8})$/,
      reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
      reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
      reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
      reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
      reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
      reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

  var named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
  };

  define(Color, color, {
    copy: function(channels) {
      return Object.assign(new this.constructor, this, channels);
    },
    displayable: function() {
      return this.rgb().displayable();
    },
    hex: color_formatHex, // Deprecated! Use color.formatHex.
    formatHex: color_formatHex,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
  });

  function color_formatHex() {
    return this.rgb().formatHex();
  }

  function color_formatHsl() {
    return hslConvert(this).formatHsl();
  }

  function color_formatRgb() {
    return this.rgb().formatRgb();
  }

  function color(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
        : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
        : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
        : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
        : null) // invalid hex
        : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
        : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
        : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
        : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
        : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
        : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
        : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
        : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
        : null;
  }

  function rgbn(n) {
    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
  }

  function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
  }

  function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb;
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
  }

  function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
  }

  function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
  }

  define(Rgb, rgb, extend(Color, {
    brighter: function(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker: function(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb: function() {
      return this;
    },
    displayable: function() {
      return (-0.5 <= this.r && this.r < 255.5)
          && (-0.5 <= this.g && this.g < 255.5)
          && (-0.5 <= this.b && this.b < 255.5)
          && (0 <= this.opacity && this.opacity <= 1);
    },
    hex: rgb_formatHex, // Deprecated! Use color.formatHex.
    formatHex: rgb_formatHex,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
  }));

  function rgb_formatHex() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
  }

  function rgb_formatRgb() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }

  function hex(value) {
    value = Math.max(0, Math.min(255, Math.round(value) || 0));
    return (value < 16 ? "0" : "") + value.toString(16);
  }

  function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
  }

  function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl;
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255,
        g = o.g / 255,
        b = o.b / 255,
        min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        h = NaN,
        s = max - min,
        l = (max + min) / 2;
    if (s) {
      if (r === max) h = (g - b) / s + (g < b) * 6;
      else if (g === max) h = (b - r) / s + 2;
      else h = (r - g) / s + 4;
      s /= l < 0.5 ? max + min : 2 - max - min;
      h *= 60;
    } else {
      s = l > 0 && l < 1 ? 0 : h;
    }
    return new Hsl(h, s, l, o.opacity);
  }

  function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
  }

  function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
  }

  define(Hsl, hsl, extend(Color, {
    brighter: function(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function() {
      var h = this.h % 360 + (this.h < 0) * 360,
          s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
          l = this.l,
          m2 = l + (l < 0.5 ? l : 1 - l) * s,
          m1 = 2 * l - m2;
      return new Rgb(
        hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
        hsl2rgb(h, m1, m2),
        hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
        this.opacity
      );
    },
    displayable: function() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s))
          && (0 <= this.l && this.l <= 1)
          && (0 <= this.opacity && this.opacity <= 1);
    },
    formatHsl: function() {
      var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
      return (a === 1 ? "hsl(" : "hsla(")
          + (this.h || 0) + ", "
          + (this.s || 0) * 100 + "%, "
          + (this.l || 0) * 100 + "%"
          + (a === 1 ? ")" : ", " + a + ")");
    }
  }));

  /* From FvD 13.37, CSS Color Module Level 3 */
  function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60
        : h < 180 ? m2
        : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
        : m1) * 255;
  }

  var constant = x => () => x;

  function linear(a, d) {
    return function(t) {
      return a + t * d;
    };
  }

  function exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
      return Math.pow(a + t * b, y);
    };
  }

  function gamma(y) {
    return (y = +y) === 1 ? nogamma : function(a, b) {
      return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
    };
  }

  function nogamma(a, b) {
    var d = b - a;
    return d ? linear(a, d) : constant(isNaN(a) ? b : a);
  }

  var interpolateRgb = (function rgbGamma(y) {
    var color = gamma(y);

    function rgb$1(start, end) {
      var r = color((start = rgb(start)).r, (end = rgb(end)).r),
          g = color(start.g, end.g),
          b = color(start.b, end.b),
          opacity = nogamma(start.opacity, end.opacity);
      return function(t) {
        start.r = r(t);
        start.g = g(t);
        start.b = b(t);
        start.opacity = opacity(t);
        return start + "";
      };
    }

    rgb$1.gamma = rgbGamma;

    return rgb$1;
  })(1);

  function interpolateNumber(a, b) {
    return a = +a, b = +b, function(t) {
      return a * (1 - t) + b * t;
    };
  }

  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      reB = new RegExp(reA.source, "g");

  function zero(b) {
    return function() {
      return b;
    };
  }

  function one(b) {
    return function(t) {
      return b(t) + "";
    };
  }

  function interpolateString(a, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
        am, // current match in a
        bm, // current match in b
        bs, // string preceding current number in b, if any
        i = -1, // index in s
        s = [], // string constants and placeholders
        q = []; // number interpolators

    // Coerce inputs to strings.
    a = a + "", b = b + "";

    // Interpolate pairs of numbers in a & b.
    while ((am = reA.exec(a))
        && (bm = reB.exec(b))) {
      if ((bs = bm.index) > bi) { // a string precedes the next number in b
        bs = b.slice(bi, bs);
        if (s[i]) s[i] += bs; // coalesce with previous string
        else s[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
        if (s[i]) s[i] += bm; // coalesce with previous string
        else s[++i] = bm;
      } else { // interpolate non-matching numbers
        s[++i] = null;
        q.push({i: i, x: interpolateNumber(am, bm)});
      }
      bi = reB.lastIndex;
    }

    // Add remains of b.
    if (bi < b.length) {
      bs = b.slice(bi);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }

    // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.
    return s.length < 2 ? (q[0]
        ? one(q[0].x)
        : zero(b))
        : (b = q.length, function(t) {
            for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
            return s.join("");
          });
  }

  var degrees = 180 / Math.PI;

  var identity = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
  };

  function decompose(a, b, c, d, e, f) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
    if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
    if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
    if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
    return {
      translateX: e,
      translateY: f,
      rotate: Math.atan2(b, a) * degrees,
      skewX: Math.atan(skewX) * degrees,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }

  var svgNode;

  /* eslint-disable no-undef */
  function parseCss(value) {
    const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
    return m.isIdentity ? identity : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
  }

  function parseSvg(value) {
    if (value == null) return identity;
    if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
    value = value.matrix;
    return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
  }

  function interpolateTransform(parse, pxComma, pxParen, degParen) {

    function pop(s) {
      return s.length ? s.pop() + " " : "";
    }

    function translate(xa, ya, xb, yb, s, q) {
      if (xa !== xb || ya !== yb) {
        var i = s.push("translate(", null, pxComma, null, pxParen);
        q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
      } else if (xb || yb) {
        s.push("translate(" + xb + pxComma + yb + pxParen);
      }
    }

    function rotate(a, b, s, q) {
      if (a !== b) {
        if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
        q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: interpolateNumber(a, b)});
      } else if (b) {
        s.push(pop(s) + "rotate(" + b + degParen);
      }
    }

    function skewX(a, b, s, q) {
      if (a !== b) {
        q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: interpolateNumber(a, b)});
      } else if (b) {
        s.push(pop(s) + "skewX(" + b + degParen);
      }
    }

    function scale(xa, ya, xb, yb, s, q) {
      if (xa !== xb || ya !== yb) {
        var i = s.push(pop(s) + "scale(", null, ",", null, ")");
        q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
      } else if (xb !== 1 || yb !== 1) {
        s.push(pop(s) + "scale(" + xb + "," + yb + ")");
      }
    }

    return function(a, b) {
      var s = [], // string constants and placeholders
          q = []; // number interpolators
      a = parse(a), b = parse(b);
      translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
      rotate(a.rotate, b.rotate, s, q);
      skewX(a.skewX, b.skewX, s, q);
      scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
      a = b = null; // gc
      return function(t) {
        var i = -1, n = q.length, o;
        while (++i < n) s[(o = q[i]).i] = o.x(t);
        return s.join("");
      };
    };
  }

  var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
  var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

  var frame = 0, // is an animation frame pending?
      timeout$1 = 0, // is a timeout pending?
      interval = 0, // are any timers active?
      pokeDelay = 1000, // how frequently we check for clock skew
      taskHead,
      taskTail,
      clockLast = 0,
      clockNow = 0,
      clockSkew = 0,
      clock = typeof performance === "object" && performance.now ? performance : Date,
      setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

  function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
  }

  function clearNow() {
    clockNow = 0;
  }

  function Timer() {
    this._call =
    this._time =
    this._next = null;
  }

  Timer.prototype = timer$1.prototype = {
    constructor: Timer,
    restart: function(callback, delay, time) {
      if (typeof callback !== "function") throw new TypeError("callback is not a function");
      time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
      if (!this._next && taskTail !== this) {
        if (taskTail) taskTail._next = this;
        else taskHead = this;
        taskTail = this;
      }
      this._call = callback;
      this._time = time;
      sleep();
    },
    stop: function() {
      if (this._call) {
        this._call = null;
        this._time = Infinity;
        sleep();
      }
    }
  };

  function timer$1(callback, delay, time) {
    var t = new Timer;
    t.restart(callback, delay, time);
    return t;
  }

  function timerFlush() {
    now(); // Get the current time, if not already set.
    ++frame; // Pretend we’ve set an alarm, if we haven’t already.
    var t = taskHead, e;
    while (t) {
      if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
      t = t._next;
    }
    --frame;
  }

  function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout$1 = 0;
    try {
      timerFlush();
    } finally {
      frame = 0;
      nap();
      clockNow = 0;
    }
  }

  function poke() {
    var now = clock.now(), delay = now - clockLast;
    if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
  }

  function nap() {
    var t0, t1 = taskHead, t2, time = Infinity;
    while (t1) {
      if (t1._call) {
        if (time > t1._time) time = t1._time;
        t0 = t1, t1 = t1._next;
      } else {
        t2 = t1._next, t1._next = null;
        t1 = t0 ? t0._next = t2 : taskHead = t2;
      }
    }
    taskTail = t0;
    sleep(time);
  }

  function sleep(time) {
    if (frame) return; // Soonest alarm already set, or will be.
    if (timeout$1) timeout$1 = clearTimeout(timeout$1);
    var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
    if (delay > 24) {
      if (time < Infinity) timeout$1 = setTimeout(wake, time - clock.now() - clockSkew);
      if (interval) interval = clearInterval(interval);
    } else {
      if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
      frame = 1, setFrame(wake);
    }
  }

  function timeout(callback, delay, time) {
    var t = new Timer;
    delay = delay == null ? 0 : +delay;
    t.restart(elapsed => {
      t.stop();
      callback(elapsed + delay);
    }, delay, time);
    return t;
  }

  var emptyOn = dispatch("start", "end", "cancel", "interrupt");
  var emptyTween = [];

  var CREATED = 0;
  var SCHEDULED = 1;
  var STARTING = 2;
  var STARTED = 3;
  var RUNNING = 4;
  var ENDING = 5;
  var ENDED = 6;

  function schedule(node, name, id, index, group, timing) {
    var schedules = node.__transition;
    if (!schedules) node.__transition = {};
    else if (id in schedules) return;
    create(node, id, {
      name: name,
      index: index, // For context during callback.
      group: group, // For context during callback.
      on: emptyOn,
      tween: emptyTween,
      time: timing.time,
      delay: timing.delay,
      duration: timing.duration,
      ease: timing.ease,
      timer: null,
      state: CREATED
    });
  }

  function init(node, id) {
    var schedule = get(node, id);
    if (schedule.state > CREATED) throw new Error("too late; already scheduled");
    return schedule;
  }

  function set(node, id) {
    var schedule = get(node, id);
    if (schedule.state > STARTED) throw new Error("too late; already running");
    return schedule;
  }

  function get(node, id) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
    return schedule;
  }

  function create(node, id, self) {
    var schedules = node.__transition,
        tween;

    // Initialize the self timer when the transition is created.
    // Note the actual delay is not known until the first callback!
    schedules[id] = self;
    self.timer = timer$1(schedule, 0, self.time);

    function schedule(elapsed) {
      self.state = SCHEDULED;
      self.timer.restart(start, self.delay, self.time);

      // If the elapsed delay is less than our first sleep, start immediately.
      if (self.delay <= elapsed) start(elapsed - self.delay);
    }

    function start(elapsed) {
      var i, j, n, o;

      // If the state is not SCHEDULED, then we previously errored on start.
      if (self.state !== SCHEDULED) return stop();

      for (i in schedules) {
        o = schedules[i];
        if (o.name !== self.name) continue;

        // While this element already has a starting transition during this frame,
        // defer starting an interrupting transition until that transition has a
        // chance to tick (and possibly end); see d3/d3-transition#54!
        if (o.state === STARTED) return timeout(start);

        // Interrupt the active transition, if any.
        if (o.state === RUNNING) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("interrupt", node, node.__data__, o.index, o.group);
          delete schedules[i];
        }

        // Cancel any pre-empted transitions.
        else if (+i < id) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("cancel", node, node.__data__, o.index, o.group);
          delete schedules[i];
        }
      }

      // Defer the first tick to end of the current frame; see d3/d3#1576.
      // Note the transition may be canceled after start and before the first tick!
      // Note this must be scheduled before the start event; see d3/d3-transition#16!
      // Assuming this is successful, subsequent callbacks go straight to tick.
      timeout(function() {
        if (self.state === STARTED) {
          self.state = RUNNING;
          self.timer.restart(tick, self.delay, self.time);
          tick(elapsed);
        }
      });

      // Dispatch the start event.
      // Note this must be done before the tween are initialized.
      self.state = STARTING;
      self.on.call("start", node, node.__data__, self.index, self.group);
      if (self.state !== STARTING) return; // interrupted
      self.state = STARTED;

      // Initialize the tween, deleting null tween.
      tween = new Array(n = self.tween.length);
      for (i = 0, j = -1; i < n; ++i) {
        if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
          tween[++j] = o;
        }
      }
      tween.length = j + 1;
    }

    function tick(elapsed) {
      var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
          i = -1,
          n = tween.length;

      while (++i < n) {
        tween[i].call(node, t);
      }

      // Dispatch the end event.
      if (self.state === ENDING) {
        self.on.call("end", node, node.__data__, self.index, self.group);
        stop();
      }
    }

    function stop() {
      self.state = ENDED;
      self.timer.stop();
      delete schedules[id];
      for (var i in schedules) return; // eslint-disable-line no-unused-vars
      delete node.__transition;
    }
  }

  function interrupt(node, name) {
    var schedules = node.__transition,
        schedule,
        active,
        empty = true,
        i;

    if (!schedules) return;

    name = name == null ? null : name + "";

    for (i in schedules) {
      if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
      active = schedule.state > STARTING && schedule.state < ENDING;
      schedule.state = ENDED;
      schedule.timer.stop();
      schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
      delete schedules[i];
    }

    if (empty) delete node.__transition;
  }

  function selection_interrupt(name) {
    return this.each(function() {
      interrupt(this, name);
    });
  }

  function tweenRemove(id, name) {
    var tween0, tween1;
    return function() {
      var schedule = set(this, id),
          tween = schedule.tween;

      // If this node shared tween with the previous node,
      // just assign the updated shared tween and we’re done!
      // Otherwise, copy-on-write.
      if (tween !== tween0) {
        tween1 = tween0 = tween;
        for (var i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1 = tween1.slice();
            tween1.splice(i, 1);
            break;
          }
        }
      }

      schedule.tween = tween1;
    };
  }

  function tweenFunction(id, name, value) {
    var tween0, tween1;
    if (typeof value !== "function") throw new Error;
    return function() {
      var schedule = set(this, id),
          tween = schedule.tween;

      // If this node shared tween with the previous node,
      // just assign the updated shared tween and we’re done!
      // Otherwise, copy-on-write.
      if (tween !== tween0) {
        tween1 = (tween0 = tween).slice();
        for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1[i] = t;
            break;
          }
        }
        if (i === n) tween1.push(t);
      }

      schedule.tween = tween1;
    };
  }

  function transition_tween(name, value) {
    var id = this._id;

    name += "";

    if (arguments.length < 2) {
      var tween = get(this.node(), id).tween;
      for (var i = 0, n = tween.length, t; i < n; ++i) {
        if ((t = tween[i]).name === name) {
          return t.value;
        }
      }
      return null;
    }

    return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
  }

  function tweenValue(transition, name, value) {
    var id = transition._id;

    transition.each(function() {
      var schedule = set(this, id);
      (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });

    return function(node) {
      return get(node, id).value[name];
    };
  }

  function interpolate(a, b) {
    var c;
    return (typeof b === "number" ? interpolateNumber
        : b instanceof color ? interpolateRgb
        : (c = color(b)) ? (b = c, interpolateRgb)
        : interpolateString)(a, b);
  }

  function attrRemove(name) {
    return function() {
      this.removeAttribute(name);
    };
  }

  function attrRemoveNS(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }

  function attrConstant(name, interpolate, value1) {
    var string00,
        string1 = value1 + "",
        interpolate0;
    return function() {
      var string0 = this.getAttribute(name);
      return string0 === string1 ? null
          : string0 === string00 ? interpolate0
          : interpolate0 = interpolate(string00 = string0, value1);
    };
  }

  function attrConstantNS(fullname, interpolate, value1) {
    var string00,
        string1 = value1 + "",
        interpolate0;
    return function() {
      var string0 = this.getAttributeNS(fullname.space, fullname.local);
      return string0 === string1 ? null
          : string0 === string00 ? interpolate0
          : interpolate0 = interpolate(string00 = string0, value1);
    };
  }

  function attrFunction(name, interpolate, value) {
    var string00,
        string10,
        interpolate0;
    return function() {
      var string0, value1 = value(this), string1;
      if (value1 == null) return void this.removeAttribute(name);
      string0 = this.getAttribute(name);
      string1 = value1 + "";
      return string0 === string1 ? null
          : string0 === string00 && string1 === string10 ? interpolate0
          : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }

  function attrFunctionNS(fullname, interpolate, value) {
    var string00,
        string10,
        interpolate0;
    return function() {
      var string0, value1 = value(this), string1;
      if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
      string0 = this.getAttributeNS(fullname.space, fullname.local);
      string1 = value1 + "";
      return string0 === string1 ? null
          : string0 === string00 && string1 === string10 ? interpolate0
          : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }

  function transition_attr(name, value) {
    var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate;
    return this.attrTween(name, typeof value === "function"
        ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value))
        : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
        : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
  }

  function attrInterpolate(name, i) {
    return function(t) {
      this.setAttribute(name, i.call(this, t));
    };
  }

  function attrInterpolateNS(fullname, i) {
    return function(t) {
      this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
    };
  }

  function attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
      return t0;
    }
    tween._value = value;
    return tween;
  }

  function attrTween(name, value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
      return t0;
    }
    tween._value = value;
    return tween;
  }

  function transition_attrTween(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    var fullname = namespace(name);
    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
  }

  function delayFunction(id, value) {
    return function() {
      init(this, id).delay = +value.apply(this, arguments);
    };
  }

  function delayConstant(id, value) {
    return value = +value, function() {
      init(this, id).delay = value;
    };
  }

  function transition_delay(value) {
    var id = this._id;

    return arguments.length
        ? this.each((typeof value === "function"
            ? delayFunction
            : delayConstant)(id, value))
        : get(this.node(), id).delay;
  }

  function durationFunction(id, value) {
    return function() {
      set(this, id).duration = +value.apply(this, arguments);
    };
  }

  function durationConstant(id, value) {
    return value = +value, function() {
      set(this, id).duration = value;
    };
  }

  function transition_duration(value) {
    var id = this._id;

    return arguments.length
        ? this.each((typeof value === "function"
            ? durationFunction
            : durationConstant)(id, value))
        : get(this.node(), id).duration;
  }

  function easeConstant(id, value) {
    if (typeof value !== "function") throw new Error;
    return function() {
      set(this, id).ease = value;
    };
  }

  function transition_ease(value) {
    var id = this._id;

    return arguments.length
        ? this.each(easeConstant(id, value))
        : get(this.node(), id).ease;
  }

  function easeVarying(id, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (typeof v !== "function") throw new Error;
      set(this, id).ease = v;
    };
  }

  function transition_easeVarying(value) {
    if (typeof value !== "function") throw new Error;
    return this.each(easeVarying(this._id, value));
  }

  function transition_filter(match) {
    if (typeof match !== "function") match = matcher(match);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }

    return new Transition(subgroups, this._parents, this._name, this._id);
  }

  function transition_merge(transition) {
    if (transition._id !== this._id) throw new Error;

    for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }

    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }

    return new Transition(merges, this._parents, this._name, this._id);
  }

  function start$3(name) {
    return (name + "").trim().split(/^|\s+/).every(function(t) {
      var i = t.indexOf(".");
      if (i >= 0) t = t.slice(0, i);
      return !t || t === "start";
    });
  }

  function onFunction(id, name, listener) {
    var on0, on1, sit = start$3(name) ? init : set;
    return function() {
      var schedule = sit(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

      schedule.on = on1;
    };
  }

  function transition_on(name, listener) {
    var id = this._id;

    return arguments.length < 2
        ? get(this.node(), id).on.on(name)
        : this.each(onFunction(id, name, listener));
  }

  function removeFunction(id) {
    return function() {
      var parent = this.parentNode;
      for (var i in this.__transition) if (+i !== id) return;
      if (parent) parent.removeChild(this);
    };
  }

  function transition_remove() {
    return this.on("end.remove", removeFunction(this._id));
  }

  function transition_select(select) {
    var name = this._name,
        id = this._id;

    if (typeof select !== "function") select = selector(select);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
          schedule(subgroup[i], name, id, i, subgroup, get(node, id));
        }
      }
    }

    return new Transition(subgroups, this._parents, name, id);
  }

  function transition_selectAll(select) {
    var name = this._name,
        id = this._id;

    if (typeof select !== "function") select = selectorAll(select);

    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          for (var children = select.call(node, node.__data__, i, group), child, inherit = get(node, id), k = 0, l = children.length; k < l; ++k) {
            if (child = children[k]) {
              schedule(child, name, id, k, children, inherit);
            }
          }
          subgroups.push(children);
          parents.push(node);
        }
      }
    }

    return new Transition(subgroups, parents, name, id);
  }

  var Selection = selection.prototype.constructor;

  function transition_selection() {
    return new Selection(this._groups, this._parents);
  }

  function styleNull(name, interpolate) {
    var string00,
        string10,
        interpolate0;
    return function() {
      var string0 = styleValue(this, name),
          string1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1 ? null
          : string0 === string00 && string1 === string10 ? interpolate0
          : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
  }

  function styleRemove(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }

  function styleConstant(name, interpolate, value1) {
    var string00,
        string1 = value1 + "",
        interpolate0;
    return function() {
      var string0 = styleValue(this, name);
      return string0 === string1 ? null
          : string0 === string00 ? interpolate0
          : interpolate0 = interpolate(string00 = string0, value1);
    };
  }

  function styleFunction(name, interpolate, value) {
    var string00,
        string10,
        interpolate0;
    return function() {
      var string0 = styleValue(this, name),
          value1 = value(this),
          string1 = value1 + "";
      if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1 ? null
          : string0 === string00 && string1 === string10 ? interpolate0
          : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }

  function styleMaybeRemove(id, name) {
    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
    return function() {
      var schedule = set(this, id),
          on = schedule.on,
          listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

      schedule.on = on1;
    };
  }

  function transition_style(name, value, priority) {
    var i = (name += "") === "transform" ? interpolateTransformCss : interpolate;
    return value == null ? this
        .styleTween(name, styleNull(name, i))
        .on("end.style." + name, styleRemove(name))
      : typeof value === "function" ? this
        .styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value)))
        .each(styleMaybeRemove(this._id, name))
      : this
        .styleTween(name, styleConstant(name, i, value), priority)
        .on("end.style." + name, null);
  }

  function styleInterpolate(name, i, priority) {
    return function(t) {
      this.style.setProperty(name, i.call(this, t), priority);
    };
  }

  function styleTween(name, value, priority) {
    var t, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
      return t;
    }
    tween._value = value;
    return tween;
  }

  function transition_styleTween(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
  }

  function textConstant(value) {
    return function() {
      this.textContent = value;
    };
  }

  function textFunction(value) {
    return function() {
      var value1 = value(this);
      this.textContent = value1 == null ? "" : value1;
    };
  }

  function transition_text(value) {
    return this.tween("text", typeof value === "function"
        ? textFunction(tweenValue(this, "text", value))
        : textConstant(value == null ? "" : value + ""));
  }

  function textInterpolate(i) {
    return function(t) {
      this.textContent = i.call(this, t);
    };
  }

  function textTween(value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
      return t0;
    }
    tween._value = value;
    return tween;
  }

  function transition_textTween(value) {
    var key = "text";
    if (arguments.length < 1) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, textTween(value));
  }

  function transition_transition() {
    var name = this._name,
        id0 = this._id,
        id1 = newId();

    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          var inherit = get(node, id0);
          schedule(node, name, id1, i, group, {
            time: inherit.time + inherit.delay + inherit.duration,
            delay: 0,
            duration: inherit.duration,
            ease: inherit.ease
          });
        }
      }
    }

    return new Transition(groups, this._parents, name, id1);
  }

  function transition_end() {
    var on0, on1, that = this, id = that._id, size = that.size();
    return new Promise(function(resolve, reject) {
      var cancel = {value: reject},
          end = {value: function() { if (--size === 0) resolve(); }};

      that.each(function() {
        var schedule = set(this, id),
            on = schedule.on;

        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0) {
          on1 = (on0 = on).copy();
          on1._.cancel.push(cancel);
          on1._.interrupt.push(cancel);
          on1._.end.push(end);
        }

        schedule.on = on1;
      });

      // The selection was empty, resolve end immediately
      if (size === 0) resolve();
    });
  }

  var id = 0;

  function Transition(groups, parents, name, id) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id;
  }

  function newId() {
    return ++id;
  }

  var selection_prototype = selection.prototype;

  Transition.prototype = {
    constructor: Transition,
    select: transition_select,
    selectAll: transition_selectAll,
    filter: transition_filter,
    merge: transition_merge,
    selection: transition_selection,
    transition: transition_transition,
    call: selection_prototype.call,
    nodes: selection_prototype.nodes,
    node: selection_prototype.node,
    size: selection_prototype.size,
    empty: selection_prototype.empty,
    each: selection_prototype.each,
    on: transition_on,
    attr: transition_attr,
    attrTween: transition_attrTween,
    style: transition_style,
    styleTween: transition_styleTween,
    text: transition_text,
    textTween: transition_textTween,
    remove: transition_remove,
    tween: transition_tween,
    delay: transition_delay,
    duration: transition_duration,
    ease: transition_ease,
    easeVarying: transition_easeVarying,
    end: transition_end,
    [Symbol.iterator]: selection_prototype[Symbol.iterator]
  };

  function cubicInOut(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  }

  var defaultTiming = {
    time: null, // Set on use.
    delay: 0,
    duration: 250,
    ease: cubicInOut
  };

  function inherit$1(node, id) {
    var timing;
    while (!(timing = node.__transition) || !(timing = timing[id])) {
      if (!(node = node.parentNode)) {
        throw new Error(`transition ${id} not found`);
      }
    }
    return timing;
  }

  function selection_transition(name) {
    var id,
        timing;

    if (name instanceof Transition) {
      id = name._id, name = name._name;
    } else {
      id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
    }

    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          schedule(node, name, id, i, group, timing || inherit$1(node, id));
        }
      }
    }

    return new Transition(groups, this._parents, name, id);
  }

  selection.prototype.interrupt = selection_interrupt;
  selection.prototype.transition = selection_transition;

  // A = new dragdiv() ...

  var dragdiv = /*#__PURE__*/function () {
    function dragdiv() {
      _classCallCheck(this, dragdiv); // Make a new div.


      var obj = this; // Absolute or relative position??

      obj.div = create$1("div").style("position", "absolute").style("left", 0 + "px").style("top", 0 + "px"); // Container that will hold the mouse coordinates.

      obj.mouseorigin = {}; // Apply dragging to it. Store the movement data on the dragdiv object instead? So as to not pollute the actual object?

      var dragobj = drag().on("start", function (event) {
        obj.div.raise();
        obj.mouseorigin = obj.mouseposition(event);
      }).on("drag", function (event) {
        // let position = obj.position()
        var movement = obj.movement(event); // Rounding positions to full pixel value hasn't helped much. Maybe it's the css holding everything back?
        // Move the wrapper.

        obj.div.style("left", obj.position.x + movement.x + "px").style("top", obj.position.y + movement.y + "px"); // Update the last mouse position

        obj.mouseorigin = obj.mouseposition(event);
      }).on("end", function (event) {// The parent should update it's position automatically. How do I do that? Maybe the parent should listen to some action? Or maybe it's position should just be calculated when it's needed?
      });
      obj.div.call(dragobj);
      obj.node = obj.div.node();
    } // constructor


    _createClass$1(dragdiv, [{
      key: "position",
      get: function get() {
        // Get the position of the dragdiv.
        var obj = this;
        var divdom = obj.div.node();
        return {
          x: parseInt(divdom.style.left),
          y: parseInt(divdom.style.top),
          w: divdom.offsetWidth,
          h: divdom.offsetHeight
        };
      } // position

    }, {
      key: "movement",
      value: function movement(event) {
        // Get the delta of the movement from hte origin to the current mouse position.
        var obj = this;
        var origin = obj.mouseorigin;
        var current = obj.mouseposition(event);
        return {
          x: current.x - origin.x,
          y: current.y - origin.y
        };
      } // movement

    }, {
      key: "mouseposition",
      value: function mouseposition(event) {
        return {
          x: event.sourceEvent.clientX,
          y: event.sourceEvent.clientY
        };
      } // mouseposition

    }]);

    return dragdiv;
  }(); // dragdiv

  // Could the filtering plots also be sprites?? Then they could be set up into groups also. Maybe this could be interesting for story telling??
  // GENERAL SPRITE
  // If the renderer needs to be passed in, then some background coding has to happen anyway. So maybe it's better to just provide different sprites at that point. And the sprite type will handle the rendering. Yes - abstract to sprite level!!
  // Should have task, file, graphic. Both the task and the file should be passed in from outside - this ensures that an outside process handles the data loading. Furthermore, data to be used for clustering and embedding must be made available. This is passed in as `datahandler', and can be the data object directly, or an accessor that returns the data from the `file object'.
  // This is an abstract sprite class that serves as a basis for sprite groups and specific sprite implementations (e.g.: `spritegroup', 'chesssprite', `webglsprite', `imagesprite', ...). As such it only contains the bare minimum to make a sprite frame, and position or resize it. 

  var sprite = /*#__PURE__*/function () {
    function sprite() {
      _classCallCheck(this, sprite);

      var obj = this;
      obj.graphic = undefined; // Currently no on drag-start/move/end functionality is prescribed. But it will be needed for webgl sprites, as a canvas element will have to be added to the sprite to contain the dragged sprite. Furthermore the main canvas will have to be redrawn on start and end. This would have to be passed in somehow, and it should collect the object along the way too. Maybe the dragdiv should just execute any onstart that it can find? maybe the event was only visible because there was no data object attached to the div yet?

      var div = new dragdiv(); // Create teh DOM element corresponding to this contour, and add it to hte wrapper. Keep it without d3?

      var d3wrapper = select(div.node).attr("class", "sprite-item").datum(obj);
      d3wrapper.append("div").attr("class", "scene-element");
      d3wrapper.append("div").attr("class", "description-element"); // Create a connection from the object instance to the DOM element. The vice versa has already been established above.

      obj.node = div.node;
    } // constructor
    // POSITIONING.
    // Just set the DOM coordinates, and let another module worry about the internal values. In cases where relative positions should be stored it should be the task of the broader module to do that.


    _createClass$1(sprite, [{
      key: "position",
      get: // position
      function get() {
        // Get the DOM position of the contour relative to the canvas.
        var wrapper = this.node;
        return [parseInt(wrapper.style.left), parseInt(wrapper.style.top)];
      } // position
      ,
      set: function set(point) {
        // Position the DOM wrapper to the coordinates in point.
        this.node.style.left = point[0] + "px";
        this.node.style.top = point[1] + "px";
      }
    }, {
      key: "midpoint",
      get: function get() {
        var wrapper = this.node;
        return [parseInt(wrapper.style.left) + wrapper.offsetWidth / 2, parseInt(wrapper.style.top) + wrapper.offsetHeight / 2];
      } // midpoint

    }, {
      key: "size",
      set: function set(_size) {
        // When sizing size the scene element.
        var obj = this;
        var width = _size[0];
        var height = _size[1];
        select(obj.node).select("div.scene-element").style("width", width + "px").style("height", height + "px");
      } // size
      // Hide and show.

    }, {
      key: "show",
      value: function show() {
        this.node.style.display = "block";
      } // show

    }, {
      key: "hide",
      value: function hide() {
        this.node.style.display = "none";
      } // hide

    }]);

    return sprite;
  }(); // sprite

  var _Array$prototype;
  var colors = ['white', 'black'];
  var files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  var ranks = ['1', '2', '3', '4', '5', '6', '7', '8'];
  var invRanks = [].concat(ranks).reverse();

  var allKeys = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, _toConsumableArray(files.map(function (c) {
    return ranks.map(function (r) {
      return c + r;
    });
  })));

  var pos2key = function pos2key(pos) {
    return allKeys[8 * pos[0] + pos[1]];
  };

  var key2pos = function key2pos(k) {
    return [k.charCodeAt(0) - 97, k.charCodeAt(1) - 49];
  };

  var allPos = allKeys.map(key2pos);

  function memo(f) {
    var v;

    var ret = function ret() {
      if (v === undefined) v = f();
      return v;
    };

    ret.clear = function () {
      v = undefined;
    };

    return ret;
  }

  var timer = function timer() {
    var startAt;
    return {
      start: function start() {
        startAt = performance.now();
      },
      cancel: function cancel() {
        startAt = undefined;
      },
      stop: function stop() {
        if (!startAt) return 0;
        var time = performance.now() - startAt;
        startAt = undefined;
        return time;
      }
    };
  };

  var opposite = function opposite(c) {
    return c === 'white' ? 'black' : 'white';
  };

  var distanceSq = function distanceSq(pos1, pos2) {
    var dx = pos1[0] - pos2[0],
        dy = pos1[1] - pos2[1];
    return dx * dx + dy * dy;
  };

  var samePiece = function samePiece(p1, p2) {
    return p1.role === p2.role && p1.color === p2.color;
  };

  var posToTranslateBase = function posToTranslateBase(pos, asWhite, xFactor, yFactor) {
    return [(asWhite ? pos[0] : 7 - pos[0]) * xFactor, (asWhite ? 7 - pos[1] : pos[1]) * yFactor];
  };

  var posToTranslateAbs = function posToTranslateAbs(bounds) {
    var xFactor = bounds.width / 8,
        yFactor = bounds.height / 8;
    return function (pos, asWhite) {
      return posToTranslateBase(pos, asWhite, xFactor, yFactor);
    };
  };

  var posToTranslateRel = function posToTranslateRel(pos, asWhite) {
    return posToTranslateBase(pos, asWhite, 100, 100);
  };

  var translateAbs = function translateAbs(el, pos) {
    el.style.transform = "translate(".concat(pos[0], "px,").concat(pos[1], "px)");
  };

  var translateRel = function translateRel(el, percents) {
    el.style.transform = "translate(".concat(percents[0], "%,").concat(percents[1], "%)");
  };

  var setVisible = function setVisible(el, v) {
    el.style.visibility = v ? 'visible' : 'hidden';
  };

  var eventPosition = function eventPosition(e) {
    var _a;

    if (e.clientX || e.clientX === 0) return [e.clientX, e.clientY];
    if ((_a = e.targetTouches) === null || _a === void 0 ? void 0 : _a[0]) return [e.targetTouches[0].clientX, e.targetTouches[0].clientY];
    return;
  };

  var isRightButton = function isRightButton(e) {
    return e.buttons === 2 || e.button === 2;
  };

  var createEl = function createEl(tagName, className) {
    var el = document.createElement(tagName);
    if (className) el.className = className;
    return el;
  };

  function computeSquareCenter(key, asWhite, bounds) {
    var pos = key2pos(key);

    if (!asWhite) {
      pos[0] = 7 - pos[0];
      pos[1] = 7 - pos[1];
    }

    return [bounds.left + bounds.width * pos[0] / 8 + bounds.width / 16, bounds.top + bounds.height * (7 - pos[1]) / 8 + bounds.height / 16];
  }

  function diff(a, b) {
    return Math.abs(a - b);
  }

  function pawn(color) {
    return function (x1, y1, x2, y2) {
      return diff(x1, x2) < 2 && (color === 'white' ? y2 === y1 + 1 || y1 <= 1 && y2 === y1 + 2 && x1 === x2 : y2 === y1 - 1 || y1 >= 6 && y2 === y1 - 2 && x1 === x2);
    };
  }

  var knight = function knight(x1, y1, x2, y2) {
    var xd = diff(x1, x2);
    var yd = diff(y1, y2);
    return xd === 1 && yd === 2 || xd === 2 && yd === 1;
  };

  var bishop = function bishop(x1, y1, x2, y2) {
    return diff(x1, x2) === diff(y1, y2);
  };

  var rook = function rook(x1, y1, x2, y2) {
    return x1 === x2 || y1 === y2;
  };

  var queen = function queen(x1, y1, x2, y2) {
    return bishop(x1, y1, x2, y2) || rook(x1, y1, x2, y2);
  };

  function king(color, rookFiles, canCastle) {
    return function (x1, y1, x2, y2) {
      return diff(x1, x2) < 2 && diff(y1, y2) < 2 || canCastle && y1 === y2 && y1 === (color === 'white' ? 0 : 7) && (x1 === 4 && (x2 === 2 && rookFiles.includes(0) || x2 === 6 && rookFiles.includes(7)) || rookFiles.includes(x2));
    };
  }

  function rookFilesOf(pieces, color) {
    var backrank = color === 'white' ? '1' : '8';
    var files = [];

    var _iterator = _createForOfIteratorHelper(pieces),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
            key = _step$value[0],
            piece = _step$value[1];

        if (key[1] === backrank && piece.color === color && piece.role === 'rook') {
          files.push(key2pos(key)[0]);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return files;
  }

  function premove(pieces, key, canCastle) {
    var piece = pieces.get(key);
    if (!piece) return [];
    var pos = key2pos(key),
        r = piece.role,
        mobility = r === 'pawn' ? pawn(piece.color) : r === 'knight' ? knight : r === 'bishop' ? bishop : r === 'rook' ? rook : r === 'queen' ? queen : king(piece.color, rookFilesOf(pieces, piece.color), canCastle);
    return allPos.filter(function (pos2) {
      return (pos[0] !== pos2[0] || pos[1] !== pos2[1]) && mobility(pos[0], pos[1], pos2[0], pos2[1]);
    }).map(pos2key);
  }

  function callUserFunction(f) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (f) setTimeout(function () {
      return f.apply(void 0, args);
    }, 1);
  }

  function toggleOrientation(state) {
    state.orientation = opposite(state.orientation);
    state.animation.current = state.draggable.current = state.selected = undefined;
  }

  function _setPieces(state, pieces) {
    var _iterator2 = _createForOfIteratorHelper(pieces),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _step2$value = _slicedToArray(_step2.value, 2),
            key = _step2$value[0],
            piece = _step2$value[1];

        if (piece) state.pieces.set(key, piece);else state.pieces["delete"](key);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  function setCheck(state, color) {
    state.check = undefined;
    if (color === true) color = state.turnColor;

    if (color) {
      var _iterator3 = _createForOfIteratorHelper(state.pieces),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = _slicedToArray(_step3.value, 2),
              k = _step3$value[0],
              p = _step3$value[1];

          if (p.role === 'king' && p.color === color) {
            state.check = k;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }

  function setPremove(state, orig, dest, meta) {
    unsetPredrop(state);
    state.premovable.current = [orig, dest];
    callUserFunction(state.premovable.events.set, orig, dest, meta);
  }

  function unsetPremove(state) {
    if (state.premovable.current) {
      state.premovable.current = undefined;
      callUserFunction(state.premovable.events.unset);
    }
  }

  function setPredrop(state, role, key) {
    unsetPremove(state);
    state.predroppable.current = {
      role: role,
      key: key
    };
    callUserFunction(state.predroppable.events.set, role, key);
  }

  function unsetPredrop(state) {
    var pd = state.predroppable;

    if (pd.current) {
      pd.current = undefined;
      callUserFunction(pd.events.unset);
    }
  }

  function tryAutoCastle(state, orig, dest) {
    if (!state.autoCastle) return false;
    var king = state.pieces.get(orig);
    if (!king || king.role !== 'king') return false;
    var origPos = key2pos(orig);
    var destPos = key2pos(dest);
    if (origPos[1] !== 0 && origPos[1] !== 7 || origPos[1] !== destPos[1]) return false;

    if (origPos[0] === 4 && !state.pieces.has(dest)) {
      if (destPos[0] === 6) dest = pos2key([7, destPos[1]]);else if (destPos[0] === 2) dest = pos2key([0, destPos[1]]);
    }

    var rook = state.pieces.get(dest);
    if (!rook || rook.color !== king.color || rook.role !== 'rook') return false;
    state.pieces["delete"](orig);
    state.pieces["delete"](dest);

    if (origPos[0] < destPos[0]) {
      state.pieces.set(pos2key([6, destPos[1]]), king);
      state.pieces.set(pos2key([5, destPos[1]]), rook);
    } else {
      state.pieces.set(pos2key([2, destPos[1]]), king);
      state.pieces.set(pos2key([3, destPos[1]]), rook);
    }

    return true;
  }

  function baseMove(state, orig, dest) {
    var origPiece = state.pieces.get(orig),
        destPiece = state.pieces.get(dest);
    if (orig === dest || !origPiece) return false;
    var captured = destPiece && destPiece.color !== origPiece.color ? destPiece : undefined;
    if (dest === state.selected) unselect(state);
    callUserFunction(state.events.move, orig, dest, captured);

    if (!tryAutoCastle(state, orig, dest)) {
      state.pieces.set(dest, origPiece);
      state.pieces["delete"](orig);
    }

    state.lastMove = [orig, dest];
    state.check = undefined;
    callUserFunction(state.events.change);
    return captured || true;
  }

  function baseNewPiece(state, piece, key, force) {
    if (state.pieces.has(key)) {
      if (force) state.pieces["delete"](key);else return false;
    }

    callUserFunction(state.events.dropNewPiece, piece, key);
    state.pieces.set(key, piece);
    state.lastMove = [key];
    state.check = undefined;
    callUserFunction(state.events.change);
    state.movable.dests = undefined;
    state.turnColor = opposite(state.turnColor);
    return true;
  }

  function baseUserMove(state, orig, dest) {
    var result = baseMove(state, orig, dest);

    if (result) {
      state.movable.dests = undefined;
      state.turnColor = opposite(state.turnColor);
      state.animation.current = undefined;
    }

    return result;
  }

  function userMove(state, orig, dest) {
    if (canMove(state, orig, dest)) {
      var result = baseUserMove(state, orig, dest);

      if (result) {
        var holdTime = state.hold.stop();
        unselect(state);
        var metadata = {
          premove: false,
          ctrlKey: state.stats.ctrlKey,
          holdTime: holdTime
        };
        if (result !== true) metadata.captured = result;
        callUserFunction(state.movable.events.after, orig, dest, metadata);
        return true;
      }
    } else if (canPremove(state, orig, dest)) {
      setPremove(state, orig, dest, {
        ctrlKey: state.stats.ctrlKey
      });
      unselect(state);
      return true;
    }

    unselect(state);
    return false;
  }

  function dropNewPiece(state, orig, dest, force) {
    var piece = state.pieces.get(orig);

    if (piece && (canDrop(state, orig, dest) || force)) {
      state.pieces["delete"](orig);
      baseNewPiece(state, piece, dest, force);
      callUserFunction(state.movable.events.afterNewPiece, piece.role, dest, {
        premove: false,
        predrop: false
      });
    } else if (piece && canPredrop(state, orig, dest)) {
      setPredrop(state, piece.role, dest);
    } else {
      unsetPremove(state);
      unsetPredrop(state);
    }

    state.pieces["delete"](orig);
    unselect(state);
  }

  function _selectSquare(state, key, force) {
    callUserFunction(state.events.select, key);

    if (state.selected) {
      if (state.selected === key && !state.draggable.enabled) {
        unselect(state);
        state.hold.cancel();
        return;
      } else if ((state.selectable.enabled || force) && state.selected !== key) {
        if (userMove(state, state.selected, key)) {
          state.stats.dragged = false;
          return;
        }
      }
    }

    if (isMovable(state, key) || isPremovable(state, key)) {
      setSelected(state, key);
      state.hold.start();
    }
  }

  function setSelected(state, key) {
    state.selected = key;

    if (isPremovable(state, key)) {
      state.premovable.dests = premove(state.pieces, key, state.premovable.castle);
    } else state.premovable.dests = undefined;
  }

  function unselect(state) {
    state.selected = undefined;
    state.premovable.dests = undefined;
    state.hold.cancel();
  }

  function isMovable(state, orig) {
    var piece = state.pieces.get(orig);
    return !!piece && (state.movable.color === 'both' || state.movable.color === piece.color && state.turnColor === piece.color);
  }

  function canMove(state, orig, dest) {
    var _a, _b;

    return orig !== dest && isMovable(state, orig) && (state.movable.free || !!((_b = (_a = state.movable.dests) === null || _a === void 0 ? void 0 : _a.get(orig)) === null || _b === void 0 ? void 0 : _b.includes(dest)));
  }

  function canDrop(state, orig, dest) {
    var piece = state.pieces.get(orig);
    return !!piece && (orig === dest || !state.pieces.has(dest)) && (state.movable.color === 'both' || state.movable.color === piece.color && state.turnColor === piece.color);
  }

  function isPremovable(state, orig) {
    var piece = state.pieces.get(orig);
    return !!piece && state.premovable.enabled && state.movable.color === piece.color && state.turnColor !== piece.color;
  }

  function canPremove(state, orig, dest) {
    return orig !== dest && isPremovable(state, orig) && premove(state.pieces, orig, state.premovable.castle).includes(dest);
  }

  function canPredrop(state, orig, dest) {
    var piece = state.pieces.get(orig);
    var destPiece = state.pieces.get(dest);
    return !!piece && (!destPiece || destPiece.color !== state.movable.color) && state.predroppable.enabled && (piece.role !== 'pawn' || dest[1] !== '1' && dest[1] !== '8') && state.movable.color === piece.color && state.turnColor !== piece.color;
  }

  function isDraggable(state, orig) {
    var piece = state.pieces.get(orig);
    return !!piece && state.draggable.enabled && (state.movable.color === 'both' || state.movable.color === piece.color && (state.turnColor === piece.color || state.premovable.enabled));
  }

  function _playPremove(state) {
    var move = state.premovable.current;
    if (!move) return false;
    var orig = move[0],
        dest = move[1];
    var success = false;

    if (canMove(state, orig, dest)) {
      var result = baseUserMove(state, orig, dest);

      if (result) {
        var metadata = {
          premove: true
        };
        if (result !== true) metadata.captured = result;
        callUserFunction(state.movable.events.after, orig, dest, metadata);
        success = true;
      }
    }

    unsetPremove(state);
    return success;
  }

  function _playPredrop(state, validate) {
    var drop = state.predroppable.current;
    var success = false;
    if (!drop) return false;

    if (validate(drop)) {
      var piece = {
        role: drop.role,
        color: state.movable.color
      };

      if (baseNewPiece(state, piece, drop.key)) {
        callUserFunction(state.movable.events.afterNewPiece, drop.role, drop.key, {
          premove: false,
          predrop: true
        });
        success = true;
      }
    }

    unsetPredrop(state);
    return success;
  }

  function _cancelMove(state) {
    unsetPremove(state);
    unsetPredrop(state);
    unselect(state);
  }

  function _stop(state) {
    state.movable.color = state.movable.dests = state.animation.current = undefined;

    _cancelMove(state);
  }

  function _getKeyAtDomPos(pos, asWhite, bounds) {
    var file = Math.floor(8 * (pos[0] - bounds.left) / bounds.width);
    if (!asWhite) file = 7 - file;
    var rank = 7 - Math.floor(8 * (pos[1] - bounds.top) / bounds.height);
    if (!asWhite) rank = 7 - rank;
    return file >= 0 && file < 8 && rank >= 0 && rank < 8 ? pos2key([file, rank]) : undefined;
  }

  function getSnappedKeyAtDomPos(orig, pos, asWhite, bounds) {
    var origPos = key2pos(orig);
    var validSnapPos = allPos.filter(function (pos2) {
      return queen(origPos[0], origPos[1], pos2[0], pos2[1]) || knight(origPos[0], origPos[1], pos2[0], pos2[1]);
    });
    var validSnapCenters = validSnapPos.map(function (pos2) {
      return computeSquareCenter(pos2key(pos2), asWhite, bounds);
    });
    var validSnapDistances = validSnapCenters.map(function (pos2) {
      return distanceSq(pos, pos2);
    });

    var _validSnapDistances$r = validSnapDistances.reduce(function (a, b, index) {
      return a[0] < b ? a : [b, index];
    }, [validSnapDistances[0], 0]),
        _validSnapDistances$r2 = _slicedToArray(_validSnapDistances$r, 2),
        closestSnapIndex = _validSnapDistances$r2[1];

    return pos2key(validSnapPos[closestSnapIndex]);
  }

  function whitePov(s) {
    return s.orientation === 'white';
  }

  var initial = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
  var roles = {
    p: 'pawn',
    r: 'rook',
    n: 'knight',
    b: 'bishop',
    q: 'queen',
    k: 'king'
  };
  var letters = {
    pawn: 'p',
    rook: 'r',
    knight: 'n',
    bishop: 'b',
    queen: 'q',
    king: 'k'
  };

  function read(fen) {
    if (fen === 'start') fen = initial;
    var pieces = new Map();
    var row = 7,
        col = 0;

    var _iterator4 = _createForOfIteratorHelper(fen),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var c = _step4.value;

        switch (c) {
          case ' ':
            return pieces;

          case '/':
            --row;
            if (row < 0) return pieces;
            col = 0;
            break;

          case '~':
            var piece = pieces.get(pos2key([col, row]));
            if (piece) piece.promoted = true;
            break;

          default:
            var nb = c.charCodeAt(0);
            if (nb < 57) col += nb - 48;else {
              var role = c.toLowerCase();
              pieces.set(pos2key([col, row]), {
                role: roles[role],
                color: c === role ? 'black' : 'white'
              });
              ++col;
            }
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    return pieces;
  }

  function write(pieces) {
    return invRanks.map(function (y) {
      return files.map(function (x) {
        var piece = pieces.get(x + y);

        if (piece) {
          var letter = letters[piece.role];
          return piece.color === 'white' ? letter.toUpperCase() : letter;
        } else return '1';
      }).join('');
    }).join('/').replace(/1{2,}/g, function (s) {
      return s.length.toString();
    });
  }

  function configure(state, config) {
    var _a;

    if ((_a = config.movable) === null || _a === void 0 ? void 0 : _a.dests) state.movable.dests = undefined;
    merge(state, config);

    if (config.fen) {
      state.pieces = read(config.fen);
      state.drawable.shapes = [];
    }

    if (config.hasOwnProperty('check')) setCheck(state, config.check || false);
    if (config.hasOwnProperty('lastMove') && !config.lastMove) state.lastMove = undefined;else if (config.lastMove) state.lastMove = config.lastMove;
    if (state.selected) setSelected(state, state.selected);
    if (!state.animation.duration || state.animation.duration < 100) state.animation.enabled = false;

    if (!state.movable.rookCastle && state.movable.dests) {
      var rank = state.movable.color === 'white' ? '1' : '8',
          kingStartPos = 'e' + rank,
          dests = state.movable.dests.get(kingStartPos),
          _king = state.pieces.get(kingStartPos);

      if (!dests || !_king || _king.role !== 'king') return;
      state.movable.dests.set(kingStartPos, dests.filter(function (d) {
        return !(d === 'a' + rank && dests.includes('c' + rank)) && !(d === 'h' + rank && dests.includes('g' + rank));
      }));
    }
  }

  function merge(base, extend) {
    for (var key in extend) {
      if (isObject$1(base[key]) && isObject$1(extend[key])) merge(base[key], extend[key]);else base[key] = extend[key];
    }
  }

  function isObject$1(o) {
    return _typeof(o) === 'object';
  }

  function anim(mutation, state) {
    return state.animation.enabled ? animate(mutation, state) : render$1(mutation, state);
  }

  function render$1(mutation, state) {
    var result = mutation(state);
    state.dom.redraw();
    return result;
  }

  function makePiece(key, piece) {
    return {
      key: key,
      pos: key2pos(key),
      piece: piece
    };
  }

  function closer(piece, pieces) {
    return pieces.sort(function (p1, p2) {
      return distanceSq(piece.pos, p1.pos) - distanceSq(piece.pos, p2.pos);
    })[0];
  }

  function computePlan(prevPieces, current) {
    var anims = new Map(),
        animedOrigs = [],
        fadings = new Map(),
        missings = [],
        news = [],
        prePieces = new Map();
    var curP, preP, vector;

    var _iterator5 = _createForOfIteratorHelper(prevPieces),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _step5$value = _slicedToArray(_step5.value, 2),
            k = _step5$value[0],
            _p = _step5$value[1];

        prePieces.set(k, makePiece(k, _p));
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    var _iterator6 = _createForOfIteratorHelper(allKeys),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var key = _step6.value;
        curP = current.pieces.get(key);
        preP = prePieces.get(key);

        if (curP) {
          if (preP) {
            if (!samePiece(curP, preP.piece)) {
              missings.push(preP);
              news.push(makePiece(key, curP));
            }
          } else news.push(makePiece(key, curP));
        } else if (preP) missings.push(preP);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }

    var _loop = function _loop() {
      var newP = _news[_i];
      preP = closer(newP, missings.filter(function (p) {
        return samePiece(newP.piece, p.piece);
      }));

      if (preP) {
        vector = [preP.pos[0] - newP.pos[0], preP.pos[1] - newP.pos[1]];
        anims.set(newP.key, vector.concat(vector));
        animedOrigs.push(preP.key);
      }
    };

    for (var _i = 0, _news = news; _i < _news.length; _i++) {
      _loop();
    }

    for (var _i2 = 0, _missings = missings; _i2 < _missings.length; _i2++) {
      var p = _missings[_i2];
      if (!animedOrigs.includes(p.key)) fadings.set(p.key, p.piece);
    }

    return {
      anims: anims,
      fadings: fadings
    };
  }

  function step(state, now) {
    var cur = state.animation.current;

    if (cur === undefined) {
      if (!state.dom.destroyed) state.dom.redrawNow();
      return;
    }

    var rest = 1 - (now - cur.start) * cur.frequency;

    if (rest <= 0) {
      state.animation.current = undefined;
      state.dom.redrawNow();
    } else {
      var ease = easing(rest);

      var _iterator7 = _createForOfIteratorHelper(cur.plan.anims.values()),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var cfg = _step7.value;
          cfg[2] = cfg[0] * ease;
          cfg[3] = cfg[1] * ease;
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      state.dom.redrawNow(true);
      requestAnimationFrame(function () {
        var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : performance.now();
        return step(state, now);
      });
    }
  }

  function animate(mutation, state) {
    var prevPieces = new Map(state.pieces);
    var result = mutation(state);
    var plan = computePlan(prevPieces, state);

    if (plan.anims.size || plan.fadings.size) {
      var alreadyRunning = state.animation.current && state.animation.current.start;
      state.animation.current = {
        start: performance.now(),
        frequency: 1 / state.animation.duration,
        plan: plan
      };
      if (!alreadyRunning) step(state, performance.now());
    } else {
      state.dom.redraw();
    }

    return result;
  }

  function easing(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }

  var brushes = ['green', 'red', 'blue', 'yellow'];

  function start$2(state, e) {
    if (e.touches && e.touches.length > 1) return;
    e.stopPropagation();
    e.preventDefault();
    e.ctrlKey ? unselect(state) : _cancelMove(state);

    var pos = eventPosition(e),
        orig = _getKeyAtDomPos(pos, whitePov(state), state.dom.bounds());

    if (!orig) return;
    state.drawable.current = {
      orig: orig,
      pos: pos,
      brush: eventBrush(e),
      snapToValidMove: state.drawable.defaultSnapToValidMove
    };
    processDraw(state);
  }

  function processDraw(state) {
    requestAnimationFrame(function () {
      var cur = state.drawable.current;

      if (cur) {
        var keyAtDomPos = _getKeyAtDomPos(cur.pos, whitePov(state), state.dom.bounds());

        if (!keyAtDomPos) {
          cur.snapToValidMove = false;
        }

        var mouseSq = cur.snapToValidMove ? getSnappedKeyAtDomPos(cur.orig, cur.pos, whitePov(state), state.dom.bounds()) : keyAtDomPos;

        if (mouseSq !== cur.mouseSq) {
          cur.mouseSq = mouseSq;
          cur.dest = mouseSq !== cur.orig ? mouseSq : undefined;
          state.dom.redrawNow();
        }

        processDraw(state);
      }
    });
  }

  function move$1(state, e) {
    if (state.drawable.current) state.drawable.current.pos = eventPosition(e);
  }

  function end$1(state) {
    var cur = state.drawable.current;

    if (cur) {
      if (cur.mouseSq) addShape(state.drawable, cur);
      cancel$1(state);
    }
  }

  function cancel$1(state) {
    if (state.drawable.current) {
      state.drawable.current = undefined;
      state.dom.redraw();
    }
  }

  function clear(state) {
    if (state.drawable.shapes.length) {
      state.drawable.shapes = [];
      state.dom.redraw();
      onChange(state.drawable);
    }
  }

  function eventBrush(e) {
    var _a;

    var modA = (e.shiftKey || e.ctrlKey) && isRightButton(e);
    var modB = e.altKey || e.metaKey || ((_a = e.getModifierState) === null || _a === void 0 ? void 0 : _a.call(e, 'AltGraph'));
    return brushes[(modA ? 1 : 0) + (modB ? 2 : 0)];
  }

  function addShape(drawable, cur) {
    var sameShape = function sameShape(s) {
      return s.orig === cur.orig && s.dest === cur.dest;
    };

    var similar = drawable.shapes.find(sameShape);
    if (similar) drawable.shapes = drawable.shapes.filter(function (s) {
      return !sameShape(s);
    });
    if (!similar || similar.brush !== cur.brush) drawable.shapes.push(cur);
    onChange(drawable);
  }

  function onChange(drawable) {
    if (drawable.onChange) drawable.onChange(drawable.shapes);
  }

  function start$1(s, e) {
    if (!e.isTrusted || e.button !== undefined && e.button !== 0) return;
    if (e.touches && e.touches.length > 1) return;

    var bounds = s.dom.bounds(),
        position = eventPosition(e),
        orig = _getKeyAtDomPos(position, whitePov(s), bounds);

    if (!orig) return;
    var piece = s.pieces.get(orig);
    var previouslySelected = s.selected;
    if (!previouslySelected && s.drawable.enabled && (s.drawable.eraseOnClick || !piece || piece.color !== s.turnColor)) clear(s);
    if (e.cancelable !== false && (!e.touches || !s.movable.color || piece || previouslySelected || pieceCloseTo(s, position))) e.preventDefault();
    var hadPremove = !!s.premovable.current;
    var hadPredrop = !!s.predroppable.current;
    s.stats.ctrlKey = e.ctrlKey;

    if (s.selected && canMove(s, s.selected, orig)) {
      anim(function (state) {
        return _selectSquare(state, orig);
      }, s);
    } else {
      _selectSquare(s, orig);
    }

    var stillSelected = s.selected === orig;
    var element = pieceElementByKey(s, orig);

    if (piece && element && stillSelected && isDraggable(s, orig)) {
      s.draggable.current = {
        orig: orig,
        piece: piece,
        origPos: position,
        pos: position,
        started: s.draggable.autoDistance && s.stats.dragged,
        element: element,
        previouslySelected: previouslySelected,
        originTarget: e.target
      };
      element.cgDragging = true;
      element.classList.add('dragging');
      var ghost = s.dom.elements.ghost;

      if (ghost) {
        ghost.className = "ghost ".concat(piece.color, " ").concat(piece.role);
        translateAbs(ghost, posToTranslateAbs(bounds)(key2pos(orig), whitePov(s)));
        setVisible(ghost, true);
      }

      processDrag(s);
    } else {
      if (hadPremove) unsetPremove(s);
      if (hadPredrop) unsetPredrop(s);
    }

    s.dom.redraw();
  }

  function pieceCloseTo(s, pos) {
    var asWhite = whitePov(s),
        bounds = s.dom.bounds(),
        radiusSq = Math.pow(bounds.width / 8, 2);

    for (var key in s.pieces) {
      var center = computeSquareCenter(key, asWhite, bounds);
      if (distanceSq(center, pos) <= radiusSq) return true;
    }

    return false;
  }

  function _dragNewPiece(s, piece, e, force) {
    var key = 'a0';
    s.pieces.set(key, piece);
    s.dom.redraw();
    var position = eventPosition(e);
    s.draggable.current = {
      orig: key,
      piece: piece,
      origPos: position,
      pos: position,
      started: true,
      element: function element() {
        return pieceElementByKey(s, key);
      },
      originTarget: e.target,
      newPiece: true,
      force: !!force
    };
    processDrag(s);
  }

  function processDrag(s) {
    requestAnimationFrame(function () {
      var _a;

      var cur = s.draggable.current;
      if (!cur) return;
      if ((_a = s.animation.current) === null || _a === void 0 ? void 0 : _a.plan.anims.has(cur.orig)) s.animation.current = undefined;
      var origPiece = s.pieces.get(cur.orig);
      if (!origPiece || !samePiece(origPiece, cur.piece)) cancel(s);else {
        if (!cur.started && distanceSq(cur.pos, cur.origPos) >= Math.pow(s.draggable.distance, 2)) cur.started = true;

        if (cur.started) {
          if (typeof cur.element === 'function') {
            var found = cur.element();
            if (!found) return;
            found.cgDragging = true;
            found.classList.add('dragging');
            cur.element = found;
          }

          var bounds = s.dom.bounds();
          translateAbs(cur.element, [cur.pos[0] - bounds.left - bounds.width / 16, cur.pos[1] - bounds.top - bounds.height / 16]);
        }
      }
      processDrag(s);
    });
  }

  function move(s, e) {
    if (s.draggable.current && (!e.touches || e.touches.length < 2)) {
      s.draggable.current.pos = eventPosition(e);
    }
  }

  function end(s, e) {
    var cur = s.draggable.current;
    if (!cur) return;
    if (e.type === 'touchend' && e.cancelable !== false) e.preventDefault();

    if (e.type === 'touchend' && cur.originTarget !== e.target && !cur.newPiece) {
      s.draggable.current = undefined;
      return;
    }

    unsetPremove(s);
    unsetPredrop(s);
    var eventPos = eventPosition(e) || cur.pos;

    var dest = _getKeyAtDomPos(eventPos, whitePov(s), s.dom.bounds());

    if (dest && cur.started && cur.orig !== dest) {
      if (cur.newPiece) dropNewPiece(s, cur.orig, dest, cur.force);else {
        s.stats.ctrlKey = e.ctrlKey;
        if (userMove(s, cur.orig, dest)) s.stats.dragged = true;
      }
    } else if (cur.newPiece) {
      s.pieces["delete"](cur.orig);
    } else if (s.draggable.deleteOnDropOff && !dest) {
      s.pieces["delete"](cur.orig);
      callUserFunction(s.events.change);
    }

    if (cur.orig === cur.previouslySelected && (cur.orig === dest || !dest)) unselect(s);else if (!s.selectable.enabled) unselect(s);
    removeDragElements(s);
    s.draggable.current = undefined;
    s.dom.redraw();
  }

  function cancel(s) {
    var cur = s.draggable.current;

    if (cur) {
      if (cur.newPiece) s.pieces["delete"](cur.orig);
      s.draggable.current = undefined;
      unselect(s);
      removeDragElements(s);
      s.dom.redraw();
    }
  }

  function removeDragElements(s) {
    var e = s.dom.elements;
    if (e.ghost) setVisible(e.ghost, false);
  }

  function pieceElementByKey(s, key) {
    var el = s.dom.elements.board.firstChild;

    while (el) {
      if (el.cgKey === key && el.tagName === 'PIECE') return el;
      el = el.nextSibling;
    }

    return;
  }

  function explosion(state, keys) {
    state.exploding = {
      stage: 1,
      keys: keys
    };
    state.dom.redraw();
    setTimeout(function () {
      setStage(state, 2);
      setTimeout(function () {
        return setStage(state, undefined);
      }, 120);
    }, 120);
  }

  function setStage(state, stage) {
    if (state.exploding) {
      if (stage) state.exploding.stage = stage;else state.exploding = undefined;
      state.dom.redraw();
    }
  }

  function start(state, redrawAll) {
    function toggleOrientation$1() {
      toggleOrientation(state);
      redrawAll();
    }

    return {
      set: function set(config) {
        if (config.orientation && config.orientation !== state.orientation) toggleOrientation$1();
        (config.fen ? anim : render$1)(function (state) {
          return configure(state, config);
        }, state);
      },
      state: state,
      getFen: function getFen() {
        return write(state.pieces);
      },
      toggleOrientation: toggleOrientation$1,
      setPieces: function setPieces(pieces) {
        anim(function (state) {
          return _setPieces(state, pieces);
        }, state);
      },
      selectSquare: function selectSquare(key, force) {
        if (key) anim(function (state) {
          return _selectSquare(state, key, force);
        }, state);else if (state.selected) {
          unselect(state);
          state.dom.redraw();
        }
      },
      move: function move(orig, dest) {
        anim(function (state) {
          return baseMove(state, orig, dest);
        }, state);
      },
      newPiece: function newPiece(piece, key) {
        anim(function (state) {
          return baseNewPiece(state, piece, key);
        }, state);
      },
      playPremove: function playPremove() {
        if (state.premovable.current) {
          if (anim(_playPremove, state)) return true;
          state.dom.redraw();
        }

        return false;
      },
      playPredrop: function playPredrop(validate) {
        if (state.predroppable.current) {
          var result = _playPredrop(state, validate);

          state.dom.redraw();
          return result;
        }

        return false;
      },
      cancelPremove: function cancelPremove() {
        render$1(unsetPremove, state);
      },
      cancelPredrop: function cancelPredrop() {
        render$1(unsetPredrop, state);
      },
      cancelMove: function cancelMove() {
        render$1(function (state) {
          _cancelMove(state);

          cancel(state);
        }, state);
      },
      stop: function stop() {
        render$1(function (state) {
          _stop(state);

          cancel(state);
        }, state);
      },
      explode: function explode(keys) {
        explosion(state, keys);
      },
      setAutoShapes: function setAutoShapes(shapes) {
        render$1(function (state) {
          return state.drawable.autoShapes = shapes;
        }, state);
      },
      setShapes: function setShapes(shapes) {
        render$1(function (state) {
          return state.drawable.shapes = shapes;
        }, state);
      },
      getKeyAtDomPos: function getKeyAtDomPos(pos) {
        return _getKeyAtDomPos(pos, whitePov(state), state.dom.bounds());
      },
      redrawAll: redrawAll,
      dragNewPiece: function dragNewPiece(piece, event, force) {
        _dragNewPiece(state, piece, event, force);
      },
      destroy: function destroy() {
        _stop(state);

        state.dom.unbind && state.dom.unbind();
        state.dom.destroyed = true;
      }
    };
  }

  function defaults() {
    return {
      pieces: read(initial),
      orientation: 'white',
      turnColor: 'white',
      coordinates: true,
      autoCastle: true,
      viewOnly: false,
      disableContextMenu: false,
      resizable: true,
      addPieceZIndex: false,
      pieceKey: false,
      highlight: {
        lastMove: true,
        check: true
      },
      animation: {
        enabled: true,
        duration: 200
      },
      movable: {
        free: true,
        color: 'both',
        showDests: true,
        events: {},
        rookCastle: true
      },
      premovable: {
        enabled: true,
        showDests: true,
        castle: true,
        events: {}
      },
      predroppable: {
        enabled: false,
        events: {}
      },
      draggable: {
        enabled: true,
        distance: 3,
        autoDistance: true,
        showGhost: true,
        deleteOnDropOff: false
      },
      dropmode: {
        active: false
      },
      selectable: {
        enabled: true
      },
      stats: {
        dragged: !('ontouchstart' in window)
      },
      events: {},
      drawable: {
        enabled: true,
        visible: true,
        defaultSnapToValidMove: true,
        eraseOnClick: true,
        shapes: [],
        autoShapes: [],
        brushes: {
          green: {
            key: 'g',
            color: '#15781B',
            opacity: 1,
            lineWidth: 10
          },
          red: {
            key: 'r',
            color: '#882020',
            opacity: 1,
            lineWidth: 10
          },
          blue: {
            key: 'b',
            color: '#003088',
            opacity: 1,
            lineWidth: 10
          },
          yellow: {
            key: 'y',
            color: '#e68f00',
            opacity: 1,
            lineWidth: 10
          },
          paleBlue: {
            key: 'pb',
            color: '#003088',
            opacity: 0.4,
            lineWidth: 15
          },
          paleGreen: {
            key: 'pg',
            color: '#15781B',
            opacity: 0.4,
            lineWidth: 15
          },
          paleRed: {
            key: 'pr',
            color: '#882020',
            opacity: 0.4,
            lineWidth: 15
          },
          paleGrey: {
            key: 'pgr',
            color: '#4a4a4a',
            opacity: 0.35,
            lineWidth: 15
          }
        },
        pieces: {
          baseUrl: 'https://lichess1.org/assets/piece/cburnett/'
        },
        prevSvgHash: ''
      },
      hold: timer()
    };
  }

  function createElement(tagName) {
    return document.createElementNS('http://www.w3.org/2000/svg', tagName);
  }

  function renderSvg(state, svg, customSvg) {
    var d = state.drawable,
        curD = d.current,
        cur = curD && curD.mouseSq ? curD : undefined,
        arrowDests = new Map(),
        bounds = state.dom.bounds();

    var _iterator8 = _createForOfIteratorHelper(d.shapes.concat(d.autoShapes).concat(cur ? [cur] : [])),
        _step8;

    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var s = _step8.value;
        if (s.dest) arrowDests.set(s.dest, (arrowDests.get(s.dest) || 0) + 1);
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }

    var shapes = d.shapes.concat(d.autoShapes).map(function (s) {
      return {
        shape: s,
        current: false,
        hash: shapeHash(s, arrowDests, false, bounds)
      };
    });
    if (cur) shapes.push({
      shape: cur,
      current: true,
      hash: shapeHash(cur, arrowDests, true, bounds)
    });
    var fullHash = shapes.map(function (sc) {
      return sc.hash;
    }).join(';');
    if (fullHash === state.drawable.prevSvgHash) return;
    state.drawable.prevSvgHash = fullHash;
    var defsEl = svg.querySelector('defs');
    var shapesEl = svg.querySelector('g');
    var customSvgsEl = customSvg.querySelector('g');
    syncDefs(d, shapes, defsEl);
    syncShapes(state, shapes.filter(function (s) {
      return !s.shape.customSvg;
    }), d.brushes, arrowDests, shapesEl);
    syncShapes(state, shapes.filter(function (s) {
      return s.shape.customSvg;
    }), d.brushes, arrowDests, customSvgsEl);
  }

  function syncDefs(d, shapes, defsEl) {
    var brushes = new Map();
    var brush;

    var _iterator9 = _createForOfIteratorHelper(shapes),
        _step9;

    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var s = _step9.value;

        if (s.shape.dest) {
          brush = d.brushes[s.shape.brush];
          if (s.shape.modifiers) brush = makeCustomBrush(brush, s.shape.modifiers);
          brushes.set(brush.key, brush);
        }
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }

    var keysInDom = new Set();
    var el = defsEl.firstChild;

    while (el) {
      keysInDom.add(el.getAttribute('cgKey'));
      el = el.nextSibling;
    }

    var _iterator10 = _createForOfIteratorHelper(brushes.entries()),
        _step10;

    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var _step10$value = _slicedToArray(_step10.value, 2),
            key = _step10$value[0],
            _brush = _step10$value[1];

        if (!keysInDom.has(key)) defsEl.appendChild(renderMarker(_brush));
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
  }

  function syncShapes(state, shapes, brushes, arrowDests, root) {
    var bounds = state.dom.bounds(),
        hashesInDom = new Map(),
        toRemove = [];

    var _iterator11 = _createForOfIteratorHelper(shapes),
        _step11;

    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var sc = _step11.value;
        hashesInDom.set(sc.hash, false);
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }

    var el = root.firstChild,
        elHash;

    while (el) {
      elHash = el.getAttribute('cgHash');
      if (hashesInDom.has(elHash)) hashesInDom.set(elHash, true);else toRemove.push(el);
      el = el.nextSibling;
    }

    for (var _i3 = 0, _toRemove = toRemove; _i3 < _toRemove.length; _i3++) {
      var _el = _toRemove[_i3];
      root.removeChild(_el);
    }

    var _iterator12 = _createForOfIteratorHelper(shapes),
        _step12;

    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
        var _sc = _step12.value;
        if (!hashesInDom.get(_sc.hash)) root.appendChild(renderShape(state, _sc, brushes, arrowDests, bounds));
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
  }

  function shapeHash(_ref, arrowDests, current, bounds) {
    var orig = _ref.orig,
        dest = _ref.dest,
        brush = _ref.brush,
        piece = _ref.piece,
        modifiers = _ref.modifiers,
        customSvg = _ref.customSvg;
    return [bounds.width, bounds.height, current, orig, dest, brush, dest && (arrowDests.get(dest) || 0) > 1, piece && pieceHash(piece), modifiers && modifiersHash(modifiers), customSvg && customSvgHash(customSvg)].filter(function (x) {
      return x;
    }).join(',');
  }

  function pieceHash(piece) {
    return [piece.color, piece.role, piece.scale].filter(function (x) {
      return x;
    }).join(',');
  }

  function modifiersHash(m) {
    return '' + (m.lineWidth || '');
  }

  function customSvgHash(s) {
    var h = 0;

    for (var i = 0; i < s.length; i++) {
      h = (h << 5) - h + s.charCodeAt(i) >>> 0;
    }

    return 'custom-' + h.toString();
  }

  function renderShape(state, _ref2, brushes, arrowDests, bounds) {
    var shape = _ref2.shape,
        current = _ref2.current,
        hash = _ref2.hash;
    var el;

    if (shape.customSvg) {
      var orig = orient(key2pos(shape.orig), state.orientation);
      el = renderCustomSvg(shape.customSvg, orig, bounds);
    } else if (shape.piece) el = renderPiece(state.drawable.pieces.baseUrl, orient(key2pos(shape.orig), state.orientation), shape.piece, bounds);else {
      var _orig = orient(key2pos(shape.orig), state.orientation);

      if (shape.dest) {
        var brush = brushes[shape.brush];
        if (shape.modifiers) brush = makeCustomBrush(brush, shape.modifiers);
        el = renderArrow(brush, _orig, orient(key2pos(shape.dest), state.orientation), current, (arrowDests.get(shape.dest) || 0) > 1, bounds);
      } else el = renderCircle(brushes[shape.brush], _orig, current, bounds);
    }

    el.setAttribute('cgHash', hash);
    return el;
  }

  function renderCustomSvg(customSvg, pos, bounds) {
    var width = bounds.width,
        height = bounds.height;
    var w = width / 8;
    var h = height / 8;
    var x = pos[0] * w;
    var y = (7 - pos[1]) * h;
    var g = setAttributes(createElement('g'), {
      transform: "translate(".concat(x, ",").concat(y, ")")
    });
    var svg = setAttributes(createElement('svg'), {
      width: w,
      height: h,
      viewBox: '0 0 100 100'
    });
    g.appendChild(svg);
    svg.innerHTML = customSvg;
    return g;
  }

  function renderCircle(brush, pos, current, bounds) {
    var o = pos2px(pos, bounds),
        widths = circleWidth(bounds),
        radius = (bounds.width + bounds.height) / 32;
    return setAttributes(createElement('circle'), {
      stroke: brush.color,
      'stroke-width': widths[current ? 0 : 1],
      fill: 'none',
      opacity: opacity(brush, current),
      cx: o[0],
      cy: o[1],
      r: radius - widths[1] / 2
    });
  }

  function renderArrow(brush, orig, dest, current, shorten, bounds) {
    var m = arrowMargin(bounds, shorten && !current),
        a = pos2px(orig, bounds),
        b = pos2px(dest, bounds),
        dx = b[0] - a[0],
        dy = b[1] - a[1],
        angle = Math.atan2(dy, dx),
        xo = Math.cos(angle) * m,
        yo = Math.sin(angle) * m;
    return setAttributes(createElement('line'), {
      stroke: brush.color,
      'stroke-width': lineWidth(brush, current, bounds),
      'stroke-linecap': 'round',
      'marker-end': 'url(#arrowhead-' + brush.key + ')',
      opacity: opacity(brush, current),
      x1: a[0],
      y1: a[1],
      x2: b[0] - xo,
      y2: b[1] - yo
    });
  }

  function renderPiece(baseUrl, pos, piece, bounds) {
    var o = pos2px(pos, bounds),
        size = bounds.width / 8 * (piece.scale || 1),
        name = piece.color[0] + (piece.role === 'knight' ? 'n' : piece.role[0]).toUpperCase();
    return setAttributes(createElement('image'), {
      className: "".concat(piece.role, " ").concat(piece.color),
      x: o[0] - size / 2,
      y: o[1] - size / 2,
      width: size,
      height: size,
      href: baseUrl + name + '.svg'
    });
  }

  function renderMarker(brush) {
    var marker = setAttributes(createElement('marker'), {
      id: 'arrowhead-' + brush.key,
      orient: 'auto',
      markerWidth: 4,
      markerHeight: 8,
      refX: 2.05,
      refY: 2.01
    });
    marker.appendChild(setAttributes(createElement('path'), {
      d: 'M0,0 V4 L3,2 Z',
      fill: brush.color
    }));
    marker.setAttribute('cgKey', brush.key);
    return marker;
  }

  function setAttributes(el, attrs) {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }

    return el;
  }

  function orient(pos, color) {
    return color === 'white' ? pos : [7 - pos[0], 7 - pos[1]];
  }

  function makeCustomBrush(base, modifiers) {
    return {
      color: base.color,
      opacity: Math.round(base.opacity * 10) / 10,
      lineWidth: Math.round(modifiers.lineWidth || base.lineWidth),
      key: [base.key, modifiers.lineWidth].filter(function (x) {
        return x;
      }).join('')
    };
  }

  function circleWidth(bounds) {
    var base = bounds.width / 512;
    return [3 * base, 4 * base];
  }

  function lineWidth(brush, current, bounds) {
    return (brush.lineWidth || 10) * (current ? 0.85 : 1) / 512 * bounds.width;
  }

  function opacity(brush, current) {
    return (brush.opacity || 1) * (current ? 0.9 : 1);
  }

  function arrowMargin(bounds, shorten) {
    return (shorten ? 20 : 10) / 512 * bounds.width;
  }

  function pos2px(pos, bounds) {
    return [(pos[0] + 0.5) * bounds.width / 8, (7.5 - pos[1]) * bounds.height / 8];
  }

  function renderWrap(element, s, relative) {
    element.innerHTML = '';
    element.classList.add('cg-wrap');

    var _iterator13 = _createForOfIteratorHelper(colors),
        _step13;

    try {
      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
        var c = _step13.value;
        element.classList.toggle('orientation-' + c, s.orientation === c);
      }
    } catch (err) {
      _iterator13.e(err);
    } finally {
      _iterator13.f();
    }

    element.classList.toggle('manipulable', !s.viewOnly);
    var helper = createEl('cg-helper');
    element.appendChild(helper);
    var container = createEl('cg-container');
    helper.appendChild(container);
    var board = createEl('cg-board');
    container.appendChild(board);
    var svg;
    var customSvg;

    if (s.drawable.visible && !relative) {
      svg = setAttributes(createElement('svg'), {
        'class': 'cg-shapes'
      });
      svg.appendChild(createElement('defs'));
      svg.appendChild(createElement('g'));
      customSvg = setAttributes(createElement('svg'), {
        'class': 'cg-custom-svgs'
      });
      customSvg.appendChild(createElement('g'));
      container.appendChild(svg);
      container.appendChild(customSvg);
    }

    if (s.coordinates) {
      var orientClass = s.orientation === 'black' ? ' black' : '';
      container.appendChild(renderCoords(ranks, 'ranks' + orientClass));
      container.appendChild(renderCoords(files, 'files' + orientClass));
    }

    var ghost;

    if (s.draggable.showGhost && !relative) {
      ghost = createEl('piece', 'ghost');
      setVisible(ghost, false);
      container.appendChild(ghost);
    }

    return {
      board: board,
      container: container,
      ghost: ghost,
      svg: svg,
      customSvg: customSvg
    };
  }

  function renderCoords(elems, className) {
    var el = createEl('coords', className);
    var f;

    var _iterator14 = _createForOfIteratorHelper(elems),
        _step14;

    try {
      for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
        var elem = _step14.value;
        f = createEl('coord');
        f.textContent = elem;
        el.appendChild(f);
      }
    } catch (err) {
      _iterator14.e(err);
    } finally {
      _iterator14.f();
    }

    return el;
  }

  function drop(s, e) {
    if (!s.dropmode.active) return;
    unsetPremove(s);
    unsetPredrop(s);
    var piece = s.dropmode.piece;

    if (piece) {
      s.pieces.set('a0', piece);
      var position = eventPosition(e);

      var dest = position && _getKeyAtDomPos(position, whitePov(s), s.dom.bounds());

      if (dest) dropNewPiece(s, 'a0', dest);
    }

    s.dom.redraw();
  }

  function bindBoard(s, boundsUpdated) {
    var boardEl = s.dom.elements.board;

    if (!s.dom.relative && s.resizable && 'ResizeObserver' in window) {
      var observer = new window['ResizeObserver'](boundsUpdated);
      observer.observe(boardEl);
    }

    if (s.viewOnly) return;
    var onStart = startDragOrDraw(s);
    boardEl.addEventListener('touchstart', onStart, {
      passive: false
    });
    boardEl.addEventListener('mousedown', onStart, {
      passive: false
    });

    if (s.disableContextMenu || s.drawable.enabled) {
      boardEl.addEventListener('contextmenu', function (e) {
        return e.preventDefault();
      });
    }
  }

  function bindDocument(s, boundsUpdated) {
    var unbinds = [];

    if (!s.dom.relative && s.resizable && !('ResizeObserver' in window)) {
      unbinds.push(unbindable(document.body, 'chessground.resize', boundsUpdated));
    }

    if (!s.viewOnly) {
      var onmove = dragOrDraw(s, move, move$1);
      var onend = dragOrDraw(s, end, end$1);

      for (var _i4 = 0, _arr = ['touchmove', 'mousemove']; _i4 < _arr.length; _i4++) {
        var ev = _arr[_i4];
        unbinds.push(unbindable(document, ev, onmove));
      }

      for (var _i5 = 0, _arr2 = ['touchend', 'mouseup']; _i5 < _arr2.length; _i5++) {
        var _ev = _arr2[_i5];
        unbinds.push(unbindable(document, _ev, onend));
      }

      var onScroll = function onScroll() {
        return s.dom.bounds.clear();
      };

      unbinds.push(unbindable(document, 'scroll', onScroll, {
        capture: true,
        passive: true
      }));
      unbinds.push(unbindable(window, 'resize', onScroll, {
        passive: true
      }));
    }

    return function () {
      return unbinds.forEach(function (f) {
        return f();
      });
    };
  }

  function unbindable(el, eventName, callback, options) {
    el.addEventListener(eventName, callback, options);
    return function () {
      return el.removeEventListener(eventName, callback, options);
    };
  }

  function startDragOrDraw(s) {
    return function (e) {
      if (s.draggable.current) cancel(s);else if (s.drawable.current) cancel$1(s);else if (e.shiftKey || isRightButton(e)) {
        if (s.drawable.enabled) start$2(s, e);
      } else if (!s.viewOnly) {
        if (s.dropmode.active) drop(s, e);else start$1(s, e);
      }
    };
  }

  function dragOrDraw(s, withDrag, withDraw) {
    return function (e) {
      if (s.drawable.current) {
        if (s.drawable.enabled) withDraw(s, e);
      } else if (!s.viewOnly) withDrag(s, e);
    };
  }

  function render(s) {
    var asWhite = whitePov(s),
        posToTranslate = s.dom.relative ? posToTranslateRel : posToTranslateAbs(s.dom.bounds()),
        translate = s.dom.relative ? translateRel : translateAbs,
        boardEl = s.dom.elements.board,
        pieces = s.pieces,
        curAnim = s.animation.current,
        anims = curAnim ? curAnim.plan.anims : new Map(),
        fadings = curAnim ? curAnim.plan.fadings : new Map(),
        curDrag = s.draggable.current,
        squares = computeSquareClasses(s),
        samePieces = new Set(),
        sameSquares = new Set(),
        movedPieces = new Map(),
        movedSquares = new Map();
    var k, el, pieceAtKey, elPieceName, anim, fading, pMvdset, pMvd, sMvdset, sMvd;
    el = boardEl.firstChild;

    while (el) {
      k = el.cgKey;

      if (isPieceNode(el)) {
        pieceAtKey = pieces.get(k);
        anim = anims.get(k);
        fading = fadings.get(k);
        elPieceName = el.cgPiece;

        if (el.cgDragging && (!curDrag || curDrag.orig !== k)) {
          el.classList.remove('dragging');
          translate(el, posToTranslate(key2pos(k), asWhite));
          el.cgDragging = false;
        }

        if (!fading && el.cgFading) {
          el.cgFading = false;
          el.classList.remove('fading');
        }

        if (pieceAtKey) {
          if (anim && el.cgAnimating && elPieceName === pieceNameOf(pieceAtKey)) {
            var pos = key2pos(k);
            pos[0] += anim[2];
            pos[1] += anim[3];
            el.classList.add('anim');
            translate(el, posToTranslate(pos, asWhite));
          } else if (el.cgAnimating) {
            el.cgAnimating = false;
            el.classList.remove('anim');
            translate(el, posToTranslate(key2pos(k), asWhite));
            if (s.addPieceZIndex) el.style.zIndex = posZIndex(key2pos(k), asWhite);
          }

          if (elPieceName === pieceNameOf(pieceAtKey) && (!fading || !el.cgFading)) {
            samePieces.add(k);
          } else {
            if (fading && elPieceName === pieceNameOf(fading)) {
              el.classList.add('fading');
              el.cgFading = true;
            } else {
              appendValue(movedPieces, elPieceName, el);
            }
          }
        } else {
          appendValue(movedPieces, elPieceName, el);
        }
      } else if (isSquareNode(el)) {
        var cn = el.className;
        if (squares.get(k) === cn) sameSquares.add(k);else appendValue(movedSquares, cn, el);
      }

      el = el.nextSibling;
    }

    var _iterator15 = _createForOfIteratorHelper(squares),
        _step15;

    try {
      for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
        var _step15$value = _slicedToArray(_step15.value, 2),
            sk = _step15$value[0],
            className = _step15$value[1];

        if (!sameSquares.has(sk)) {
          sMvdset = movedSquares.get(className);
          sMvd = sMvdset && sMvdset.pop();
          var translation = posToTranslate(key2pos(sk), asWhite);

          if (sMvd) {
            sMvd.cgKey = sk;
            translate(sMvd, translation);
          } else {
            var squareNode = createEl('square', className);
            squareNode.cgKey = sk;
            translate(squareNode, translation);
            boardEl.insertBefore(squareNode, boardEl.firstChild);
          }
        }
      }
    } catch (err) {
      _iterator15.e(err);
    } finally {
      _iterator15.f();
    }

    var _iterator16 = _createForOfIteratorHelper(pieces),
        _step16;

    try {
      for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
        var _step16$value = _slicedToArray(_step16.value, 2),
            _k = _step16$value[0],
            p = _step16$value[1];

        anim = anims.get(_k);

        if (!samePieces.has(_k)) {
          pMvdset = movedPieces.get(pieceNameOf(p));
          pMvd = pMvdset && pMvdset.pop();

          if (pMvd) {
            pMvd.cgKey = _k;

            if (pMvd.cgFading) {
              pMvd.classList.remove('fading');
              pMvd.cgFading = false;
            }

            var _pos = key2pos(_k);

            if (s.addPieceZIndex) pMvd.style.zIndex = posZIndex(_pos, asWhite);

            if (anim) {
              pMvd.cgAnimating = true;
              pMvd.classList.add('anim');
              _pos[0] += anim[2];
              _pos[1] += anim[3];
            }

            translate(pMvd, posToTranslate(_pos, asWhite));
          } else {
            var pieceName = pieceNameOf(p),
                pieceNode = createEl('piece', pieceName),
                _pos2 = key2pos(_k);

            pieceNode.cgPiece = pieceName;
            pieceNode.cgKey = _k;

            if (anim) {
              pieceNode.cgAnimating = true;
              _pos2[0] += anim[2];
              _pos2[1] += anim[3];
            }

            translate(pieceNode, posToTranslate(_pos2, asWhite));
            if (s.addPieceZIndex) pieceNode.style.zIndex = posZIndex(_pos2, asWhite);
            boardEl.appendChild(pieceNode);
          }
        }
      }
    } catch (err) {
      _iterator16.e(err);
    } finally {
      _iterator16.f();
    }

    var _iterator17 = _createForOfIteratorHelper(movedPieces.values()),
        _step17;

    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
        var nodes = _step17.value;
        removeNodes(s, nodes);
      }
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }

    var _iterator18 = _createForOfIteratorHelper(movedSquares.values()),
        _step18;

    try {
      for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
        var _nodes = _step18.value;
        removeNodes(s, _nodes);
      }
    } catch (err) {
      _iterator18.e(err);
    } finally {
      _iterator18.f();
    }
  }

  function updateBounds(s) {
    if (s.dom.relative) return;
    var asWhite = whitePov(s),
        posToTranslate = posToTranslateAbs(s.dom.bounds());
    var el = s.dom.elements.board.firstChild;

    while (el) {
      if (isPieceNode(el) && !el.cgAnimating || isSquareNode(el)) {
        translateAbs(el, posToTranslate(key2pos(el.cgKey), asWhite));
      }

      el = el.nextSibling;
    }
  }

  function isPieceNode(el) {
    return el.tagName === 'PIECE';
  }

  function isSquareNode(el) {
    return el.tagName === 'SQUARE';
  }

  function removeNodes(s, nodes) {
    var _iterator19 = _createForOfIteratorHelper(nodes),
        _step19;

    try {
      for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
        var node = _step19.value;
        s.dom.elements.board.removeChild(node);
      }
    } catch (err) {
      _iterator19.e(err);
    } finally {
      _iterator19.f();
    }
  }

  function posZIndex(pos, asWhite) {
    var z = 2 + pos[1] * 8 + (7 - pos[0]);
    if (asWhite) z = 67 - z;
    return z + '';
  }

  function pieceNameOf(piece) {
    return "".concat(piece.color, " ").concat(piece.role);
  }

  function computeSquareClasses(s) {
    var _a;

    var squares = new Map();

    if (s.lastMove && s.highlight.lastMove) {
      var _iterator20 = _createForOfIteratorHelper(s.lastMove),
          _step20;

      try {
        for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
          var k = _step20.value;
          addSquare(squares, k, 'last-move');
        }
      } catch (err) {
        _iterator20.e(err);
      } finally {
        _iterator20.f();
      }
    }

    if (s.check && s.highlight.check) addSquare(squares, s.check, 'check');

    if (s.selected) {
      addSquare(squares, s.selected, 'selected');

      if (s.movable.showDests) {
        var dests = (_a = s.movable.dests) === null || _a === void 0 ? void 0 : _a.get(s.selected);

        if (dests) {
          var _iterator21 = _createForOfIteratorHelper(dests),
              _step21;

          try {
            for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
              var _k2 = _step21.value;
              addSquare(squares, _k2, 'move-dest' + (s.pieces.has(_k2) ? ' oc' : ''));
            }
          } catch (err) {
            _iterator21.e(err);
          } finally {
            _iterator21.f();
          }
        }

        var pDests = s.premovable.dests;

        if (pDests) {
          var _iterator22 = _createForOfIteratorHelper(pDests),
              _step22;

          try {
            for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
              var _k3 = _step22.value;
              addSquare(squares, _k3, 'premove-dest' + (s.pieces.has(_k3) ? ' oc' : ''));
            }
          } catch (err) {
            _iterator22.e(err);
          } finally {
            _iterator22.f();
          }
        }
      }
    }

    var premove = s.premovable.current;

    if (premove) {
      var _iterator23 = _createForOfIteratorHelper(premove),
          _step23;

      try {
        for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
          var _k4 = _step23.value;
          addSquare(squares, _k4, 'current-premove');
        }
      } catch (err) {
        _iterator23.e(err);
      } finally {
        _iterator23.f();
      }
    } else if (s.predroppable.current) addSquare(squares, s.predroppable.current.key, 'current-premove');

    var o = s.exploding;

    if (o) {
      var _iterator24 = _createForOfIteratorHelper(o.keys),
          _step24;

      try {
        for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
          var _k5 = _step24.value;
          addSquare(squares, _k5, 'exploding' + o.stage);
        }
      } catch (err) {
        _iterator24.e(err);
      } finally {
        _iterator24.f();
      }
    }

    return squares;
  }

  function addSquare(squares, key, klass) {
    var classes = squares.get(key);
    if (classes) squares.set(key, "".concat(classes, " ").concat(klass));else squares.set(key, klass);
  }

  function appendValue(map, key, value) {
    var arr = map.get(key);
    if (arr) arr.push(value);else map.set(key, [value]);
  }

  function Chessground(element, config) {
    var maybeState = defaults();
    configure(maybeState, config || {});

    function redrawAll() {
      var prevUnbind = 'dom' in maybeState ? maybeState.dom.unbind : undefined;

      var relative = maybeState.viewOnly && !maybeState.drawable.visible,
          elements = renderWrap(element, maybeState, relative),
          bounds = memo(function () {
        return elements.board.getBoundingClientRect();
      }),
          redrawNow = function redrawNow(skipSvg) {
        render(state);
        if (!skipSvg && elements.svg) renderSvg(state, elements.svg, elements.customSvg);
      },
          boundsUpdated = function boundsUpdated() {
        bounds.clear();
        updateBounds(state);
        if (elements.svg) renderSvg(state, elements.svg, elements.customSvg);
      };

      var state = maybeState;
      state.dom = {
        elements: elements,
        bounds: bounds,
        redraw: debounceRedraw(redrawNow),
        redrawNow: redrawNow,
        unbind: prevUnbind,
        relative: relative
      };
      state.drawable.prevSvgHash = '';
      redrawNow(false);
      bindBoard(state, boundsUpdated);
      if (!prevUnbind) state.dom.unbind = bindDocument(state, boundsUpdated);
      state.events.insert && state.events.insert(elements);
      return state;
    }

    return start(redrawAll(), redrawAll);
  }

  function debounceRedraw(redrawNow) {
    var redrawing = false;
    return function () {
      if (redrawing) return;
      redrawing = true;
      requestAnimationFrame(function () {
        redrawNow();
        redrawing = false;
      });
    };
  }

  /*
   * Copyright (c) 2021, Jeff Hlywa (jhlywa@gmail.com)
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice,
   *    this list of conditions and the following disclaimer.
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   *    this list of conditions and the following disclaimer in the documentation
   *    and/or other materials provided with the distribution.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
   * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
   * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
   * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
   * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
   * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
   * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
   * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
   * POSSIBILITY OF SUCH DAMAGE.
   *
   *----------------------------------------------------------------------------*/

  function Chess(fen) {
    var BLACK = 'b';
    var WHITE = 'w';
    var EMPTY = -1;
    var PAWN = 'p';
    var KNIGHT = 'n';
    var BISHOP = 'b';
    var ROOK = 'r';
    var QUEEN = 'q';
    var KING = 'k';
    var SYMBOLS = 'pnbrqkPNBRQK';
    var DEFAULT_POSITION = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
    var POSSIBLE_RESULTS = ['1-0', '0-1', '1/2-1/2', '*'];
    var PAWN_OFFSETS = {
      b: [16, 32, 17, 15],
      w: [-16, -32, -17, -15]
    };
    var PIECE_OFFSETS = {
      n: [-18, -33, -31, -14, 18, 33, 31, 14],
      b: [-17, -15, 17, 15],
      r: [-16, 1, 16, -1],
      q: [-17, -16, -15, 1, 17, 16, 15, -1],
      k: [-17, -16, -15, 1, 17, 16, 15, -1]
    }; // prettier-ignore

    var ATTACKS = [20, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 20, 0, 0, 20, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 20, 0, 0, 0, 0, 24, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 24, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 24, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 2, 24, 2, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 53, 56, 53, 2, 0, 0, 0, 0, 0, 0, 24, 24, 24, 24, 24, 24, 56, 0, 56, 24, 24, 24, 24, 24, 24, 0, 0, 0, 0, 0, 0, 2, 53, 56, 53, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 2, 24, 2, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 24, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 24, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 24, 0, 0, 0, 0, 20, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 20, 0, 0, 20, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 20]; // prettier-ignore

    var RAYS = [17, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 15, 0, 0, 17, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 17, 0, 0, 0, 0, 16, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 16, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 16, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 16, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 16, 15, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, -15, -16, -17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -15, 0, -16, 0, -17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -15, 0, 0, -16, 0, 0, -17, 0, 0, 0, 0, 0, 0, 0, 0, -15, 0, 0, 0, -16, 0, 0, 0, -17, 0, 0, 0, 0, 0, 0, -15, 0, 0, 0, 0, -16, 0, 0, 0, 0, -17, 0, 0, 0, 0, -15, 0, 0, 0, 0, 0, -16, 0, 0, 0, 0, 0, -17, 0, 0, -15, 0, 0, 0, 0, 0, 0, -16, 0, 0, 0, 0, 0, 0, -17];
    var SHIFTS = {
      p: 0,
      n: 1,
      b: 2,
      r: 3,
      q: 4,
      k: 5
    };
    var FLAGS = {
      NORMAL: 'n',
      CAPTURE: 'c',
      BIG_PAWN: 'b',
      EP_CAPTURE: 'e',
      PROMOTION: 'p',
      KSIDE_CASTLE: 'k',
      QSIDE_CASTLE: 'q'
    };
    var BITS = {
      NORMAL: 1,
      CAPTURE: 2,
      BIG_PAWN: 4,
      EP_CAPTURE: 8,
      PROMOTION: 16,
      KSIDE_CASTLE: 32,
      QSIDE_CASTLE: 64
    };
    var RANK_1 = 7;
    var RANK_2 = 6;
    var RANK_7 = 1;
    var RANK_8 = 0; // prettier-ignore

    var SQUARES = {
      a8: 0,
      b8: 1,
      c8: 2,
      d8: 3,
      e8: 4,
      f8: 5,
      g8: 6,
      h8: 7,
      a7: 16,
      b7: 17,
      c7: 18,
      d7: 19,
      e7: 20,
      f7: 21,
      g7: 22,
      h7: 23,
      a6: 32,
      b6: 33,
      c6: 34,
      d6: 35,
      e6: 36,
      f6: 37,
      g6: 38,
      h6: 39,
      a5: 48,
      b5: 49,
      c5: 50,
      d5: 51,
      e5: 52,
      f5: 53,
      g5: 54,
      h5: 55,
      a4: 64,
      b4: 65,
      c4: 66,
      d4: 67,
      e4: 68,
      f4: 69,
      g4: 70,
      h4: 71,
      a3: 80,
      b3: 81,
      c3: 82,
      d3: 83,
      e3: 84,
      f3: 85,
      g3: 86,
      h3: 87,
      a2: 96,
      b2: 97,
      c2: 98,
      d2: 99,
      e2: 100,
      f2: 101,
      g2: 102,
      h2: 103,
      a1: 112,
      b1: 113,
      c1: 114,
      d1: 115,
      e1: 116,
      f1: 117,
      g1: 118,
      h1: 119
    };
    var ROOKS = {
      w: [{
        square: SQUARES.a1,
        flag: BITS.QSIDE_CASTLE
      }, {
        square: SQUARES.h1,
        flag: BITS.KSIDE_CASTLE
      }],
      b: [{
        square: SQUARES.a8,
        flag: BITS.QSIDE_CASTLE
      }, {
        square: SQUARES.h8,
        flag: BITS.KSIDE_CASTLE
      }]
    };

    var _board = new Array(128);

    var kings = {
      w: EMPTY,
      b: EMPTY
    };
    var _turn = WHITE;
    var castling = {
      w: 0,
      b: 0
    };
    var ep_square = EMPTY;
    var half_moves = 0;
    var move_number = 1;
    var _history = [];
    var header = {};
    var comments = {};
    /* if the user passes in a fen string, load it, else default to
     * starting position
     */

    if (typeof fen === 'undefined') {
      _load(DEFAULT_POSITION);
    } else {
      _load(fen);
    }

    function _clear(keep_headers) {
      if (typeof keep_headers === 'undefined') {
        keep_headers = false;
      }

      _board = new Array(128);
      kings = {
        w: EMPTY,
        b: EMPTY
      };
      _turn = WHITE;
      castling = {
        w: 0,
        b: 0
      };
      ep_square = EMPTY;
      half_moves = 0;
      move_number = 1;
      _history = [];
      if (!keep_headers) header = {};
      comments = {};
      update_setup(generate_fen());
    }

    function prune_comments() {
      var reversed_history = [];
      var current_comments = {};

      var copy_comment = function copy_comment(fen) {
        if (fen in comments) {
          current_comments[fen] = comments[fen];
        }
      };

      while (_history.length > 0) {
        reversed_history.push(undo_move());
      }

      copy_comment(generate_fen());

      while (reversed_history.length > 0) {
        make_move(reversed_history.pop());
        copy_comment(generate_fen());
      }

      comments = current_comments;
    }

    function _reset() {
      _load(DEFAULT_POSITION);
    }

    function _load(fen, keep_headers) {
      if (typeof keep_headers === 'undefined') {
        keep_headers = false;
      }

      var tokens = fen.split(/\s+/);
      var position = tokens[0];
      var square = 0;

      if (!_validate_fen(fen).valid) {
        return false;
      }

      _clear(keep_headers);

      for (var i = 0; i < position.length; i++) {
        var piece = position.charAt(i);

        if (piece === '/') {
          square += 8;
        } else if (is_digit(piece)) {
          square += parseInt(piece, 10);
        } else {
          var color = piece < 'a' ? WHITE : BLACK;

          _put({
            type: piece.toLowerCase(),
            color: color
          }, algebraic(square));

          square++;
        }
      }

      _turn = tokens[1];

      if (tokens[2].indexOf('K') > -1) {
        castling.w |= BITS.KSIDE_CASTLE;
      }

      if (tokens[2].indexOf('Q') > -1) {
        castling.w |= BITS.QSIDE_CASTLE;
      }

      if (tokens[2].indexOf('k') > -1) {
        castling.b |= BITS.KSIDE_CASTLE;
      }

      if (tokens[2].indexOf('q') > -1) {
        castling.b |= BITS.QSIDE_CASTLE;
      }

      ep_square = tokens[3] === '-' ? EMPTY : SQUARES[tokens[3]];
      half_moves = parseInt(tokens[4], 10);
      move_number = parseInt(tokens[5], 10);
      update_setup(generate_fen());
      return true;
    }
    /* TODO: this function is pretty much crap - it validates structure but
     * completely ignores content (e.g. doesn't verify that each side has a king)
     * ... we should rewrite this, and ditch the silly error_number field while
     * we're at it
     */


    function _validate_fen(fen) {
      var errors = {
        0: 'No errors.',
        1: 'FEN string must contain six space-delimited fields.',
        2: '6th field (move number) must be a positive integer.',
        3: '5th field (half move counter) must be a non-negative integer.',
        4: '4th field (en-passant square) is invalid.',
        5: '3rd field (castling availability) is invalid.',
        6: '2nd field (side to move) is invalid.',
        7: "1st field (piece positions) does not contain 8 '/'-delimited rows.",
        8: '1st field (piece positions) is invalid [consecutive numbers].',
        9: '1st field (piece positions) is invalid [invalid piece].',
        10: '1st field (piece positions) is invalid [row too large].',
        11: 'Illegal en-passant square'
      };
      /* 1st criterion: 6 space-seperated fields? */

      var tokens = fen.split(/\s+/);

      if (tokens.length !== 6) {
        return {
          valid: false,
          error_number: 1,
          error: errors[1]
        };
      }
      /* 2nd criterion: move number field is a integer value > 0? */


      if (isNaN(tokens[5]) || parseInt(tokens[5], 10) <= 0) {
        return {
          valid: false,
          error_number: 2,
          error: errors[2]
        };
      }
      /* 3rd criterion: half move counter is an integer >= 0? */


      if (isNaN(tokens[4]) || parseInt(tokens[4], 10) < 0) {
        return {
          valid: false,
          error_number: 3,
          error: errors[3]
        };
      }
      /* 4th criterion: 4th field is a valid e.p.-string? */


      if (!/^(-|[abcdefgh][36])$/.test(tokens[3])) {
        return {
          valid: false,
          error_number: 4,
          error: errors[4]
        };
      }
      /* 5th criterion: 3th field is a valid castle-string? */


      if (!/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(tokens[2])) {
        return {
          valid: false,
          error_number: 5,
          error: errors[5]
        };
      }
      /* 6th criterion: 2nd field is "w" (white) or "b" (black)? */


      if (!/^(w|b)$/.test(tokens[1])) {
        return {
          valid: false,
          error_number: 6,
          error: errors[6]
        };
      }
      /* 7th criterion: 1st field contains 8 rows? */


      var rows = tokens[0].split('/');

      if (rows.length !== 8) {
        return {
          valid: false,
          error_number: 7,
          error: errors[7]
        };
      }
      /* 8th criterion: every row is valid? */


      for (var i = 0; i < rows.length; i++) {
        /* check for right sum of fields AND not two numbers in succession */
        var sum_fields = 0;
        var previous_was_number = false;

        for (var k = 0; k < rows[i].length; k++) {
          if (!isNaN(rows[i][k])) {
            if (previous_was_number) {
              return {
                valid: false,
                error_number: 8,
                error: errors[8]
              };
            }

            sum_fields += parseInt(rows[i][k], 10);
            previous_was_number = true;
          } else {
            if (!/^[prnbqkPRNBQK]$/.test(rows[i][k])) {
              return {
                valid: false,
                error_number: 9,
                error: errors[9]
              };
            }

            sum_fields += 1;
            previous_was_number = false;
          }
        }

        if (sum_fields !== 8) {
          return {
            valid: false,
            error_number: 10,
            error: errors[10]
          };
        }
      }

      if (tokens[3][1] == '3' && tokens[1] == 'w' || tokens[3][1] == '6' && tokens[1] == 'b') {
        return {
          valid: false,
          error_number: 11,
          error: errors[11]
        };
      }
      /* everything's okay! */


      return {
        valid: true,
        error_number: 0,
        error: errors[0]
      };
    }

    function generate_fen() {
      var empty = 0;
      var fen = '';

      for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
        if (_board[i] == null) {
          empty++;
        } else {
          if (empty > 0) {
            fen += empty;
            empty = 0;
          }

          var color = _board[i].color;
          var piece = _board[i].type;
          fen += color === WHITE ? piece.toUpperCase() : piece.toLowerCase();
        }

        if (i + 1 & 0x88) {
          if (empty > 0) {
            fen += empty;
          }

          if (i !== SQUARES.h1) {
            fen += '/';
          }

          empty = 0;
          i += 8;
        }
      }

      var cflags = '';

      if (castling[WHITE] & BITS.KSIDE_CASTLE) {
        cflags += 'K';
      }

      if (castling[WHITE] & BITS.QSIDE_CASTLE) {
        cflags += 'Q';
      }

      if (castling[BLACK] & BITS.KSIDE_CASTLE) {
        cflags += 'k';
      }

      if (castling[BLACK] & BITS.QSIDE_CASTLE) {
        cflags += 'q';
      }
      /* do we have an empty castling flag? */


      cflags = cflags || '-';
      var epflags = ep_square === EMPTY ? '-' : algebraic(ep_square);
      return [fen, _turn, cflags, epflags, half_moves, move_number].join(' ');
    }

    function set_header(args) {
      for (var i = 0; i < args.length; i += 2) {
        if (typeof args[i] === 'string' && typeof args[i + 1] === 'string') {
          header[args[i]] = args[i + 1];
        }
      }

      return header;
    }
    /* called when the initial board setup is changed with put() or remove().
     * modifies the SetUp and FEN properties of the header object.  if the FEN is
     * equal to the default position, the SetUp and FEN are deleted
     * the setup is only updated if history.length is zero, ie moves haven't been
     * made.
     */


    function update_setup(fen) {
      if (_history.length > 0) return;

      if (fen !== DEFAULT_POSITION) {
        header['SetUp'] = '1';
        header['FEN'] = fen;
      } else {
        delete header['SetUp'];
        delete header['FEN'];
      }
    }

    function _get(square) {
      var piece = _board[SQUARES[square]];
      return piece ? {
        type: piece.type,
        color: piece.color
      } : null;
    }

    function _put(piece, square) {
      /* check for valid piece object */
      if (!('type' in piece && 'color' in piece)) {
        return false;
      }
      /* check for piece */


      if (SYMBOLS.indexOf(piece.type.toLowerCase()) === -1) {
        return false;
      }
      /* check for valid square */


      if (!(square in SQUARES)) {
        return false;
      }

      var sq = SQUARES[square];
      /* don't let the user place more than one king */

      if (piece.type == KING && !(kings[piece.color] == EMPTY || kings[piece.color] == sq)) {
        return false;
      }

      _board[sq] = {
        type: piece.type,
        color: piece.color
      };

      if (piece.type === KING) {
        kings[piece.color] = sq;
      }

      update_setup(generate_fen());
      return true;
    }

    function _remove(square) {
      var piece = _get(square);

      _board[SQUARES[square]] = null;

      if (piece && piece.type === KING) {
        kings[piece.color] = EMPTY;
      }

      update_setup(generate_fen());
      return piece;
    }

    function build_move(board, from, to, flags, promotion) {
      var move = {
        color: _turn,
        from: from,
        to: to,
        flags: flags,
        piece: board[from].type
      };

      if (promotion) {
        move.flags |= BITS.PROMOTION;
        move.promotion = promotion;
      }

      if (board[to]) {
        move.captured = board[to].type;
      } else if (flags & BITS.EP_CAPTURE) {
        move.captured = PAWN;
      }

      return move;
    }

    function generate_moves(options) {
      function add_move(board, moves, from, to, flags) {
        /* if pawn promotion */
        if (board[from].type === PAWN && (rank(to) === RANK_8 || rank(to) === RANK_1)) {
          var pieces = [QUEEN, ROOK, BISHOP, KNIGHT];

          for (var i = 0, len = pieces.length; i < len; i++) {
            moves.push(build_move(board, from, to, flags, pieces[i]));
          }
        } else {
          moves.push(build_move(board, from, to, flags));
        }
      }

      var moves = [];
      var us = _turn;
      var them = swap_color(us);
      var second_rank = {
        b: RANK_7,
        w: RANK_2
      };
      var first_sq = SQUARES.a8;
      var last_sq = SQUARES.h1;
      var single_square = false;
      /* do we want legal moves? */

      var legal = typeof options !== 'undefined' && 'legal' in options ? options.legal : true;
      var piece_type = typeof options !== 'undefined' && 'piece' in options && typeof options.piece === 'string' ? options.piece.toLowerCase() : true;
      /* are we generating moves for a single square? */

      if (typeof options !== 'undefined' && 'square' in options) {
        if (options.square in SQUARES) {
          first_sq = last_sq = SQUARES[options.square];
          single_square = true;
        } else {
          /* invalid square */
          return [];
        }
      }

      for (var i = first_sq; i <= last_sq; i++) {
        /* did we run off the end of the board */
        if (i & 0x88) {
          i += 7;
          continue;
        }

        var piece = _board[i];

        if (piece == null || piece.color !== us) {
          continue;
        }

        if (piece.type === PAWN && (piece_type === true || piece_type === PAWN)) {
          /* single square, non-capturing */
          var square = i + PAWN_OFFSETS[us][0];

          if (_board[square] == null) {
            add_move(_board, moves, i, square, BITS.NORMAL);
            /* double square */

            var square = i + PAWN_OFFSETS[us][1];

            if (second_rank[us] === rank(i) && _board[square] == null) {
              add_move(_board, moves, i, square, BITS.BIG_PAWN);
            }
          }
          /* pawn captures */


          for (j = 2; j < 4; j++) {
            var square = i + PAWN_OFFSETS[us][j];
            if (square & 0x88) continue;

            if (_board[square] != null && _board[square].color === them) {
              add_move(_board, moves, i, square, BITS.CAPTURE);
            } else if (square === ep_square) {
              add_move(_board, moves, i, ep_square, BITS.EP_CAPTURE);
            }
          }
        } else if (piece_type === true || piece_type === piece.type) {
          for (var j = 0, len = PIECE_OFFSETS[piece.type].length; j < len; j++) {
            var offset = PIECE_OFFSETS[piece.type][j];
            var square = i;

            while (true) {
              square += offset;
              if (square & 0x88) break;

              if (_board[square] == null) {
                add_move(_board, moves, i, square, BITS.NORMAL);
              } else {
                if (_board[square].color === us) break;
                add_move(_board, moves, i, square, BITS.CAPTURE);
                break;
              }
              /* break, if knight or king */


              if (piece.type === 'n' || piece.type === 'k') break;
            }
          }
        }
      }
      /* check for castling if: a) we're generating all moves, or b) we're doing
       * single square move generation on the king's square
       */


      if (piece_type === true || piece_type === KING) {
        if (!single_square || last_sq === kings[us]) {
          /* king-side castling */
          if (castling[us] & BITS.KSIDE_CASTLE) {
            var castling_from = kings[us];
            var castling_to = castling_from + 2;

            if (_board[castling_from + 1] == null && _board[castling_to] == null && !attacked(them, kings[us]) && !attacked(them, castling_from + 1) && !attacked(them, castling_to)) {
              add_move(_board, moves, kings[us], castling_to, BITS.KSIDE_CASTLE);
            }
          }
          /* queen-side castling */


          if (castling[us] & BITS.QSIDE_CASTLE) {
            var castling_from = kings[us];
            var castling_to = castling_from - 2;

            if (_board[castling_from - 1] == null && _board[castling_from - 2] == null && _board[castling_from - 3] == null && !attacked(them, kings[us]) && !attacked(them, castling_from - 1) && !attacked(them, castling_to)) {
              add_move(_board, moves, kings[us], castling_to, BITS.QSIDE_CASTLE);
            }
          }
        }
      }
      /* return all pseudo-legal moves (this includes moves that allow the king
       * to be captured)
       */


      if (!legal) {
        return moves;
      }
      /* filter out illegal moves */


      var legal_moves = [];

      for (var i = 0, len = moves.length; i < len; i++) {
        make_move(moves[i]);

        if (!king_attacked(us)) {
          legal_moves.push(moves[i]);
        }

        undo_move();
      }

      return legal_moves;
    }
    /* convert a move from 0x88 coordinates to Standard Algebraic Notation
     * (SAN)
     *
     * @param {boolean} sloppy Use the sloppy SAN generator to work around over
     * disambiguation bugs in Fritz and Chessbase.  See below:
     *
     * r1bqkbnr/ppp2ppp/2n5/1B1pP3/4P3/8/PPPP2PP/RNBQK1NR b KQkq - 2 4
     * 4. ... Nge7 is overly disambiguated because the knight on c6 is pinned
     * 4. ... Ne7 is technically the valid SAN
     */


    function move_to_san(move, moves) {
      var output = '';

      if (move.flags & BITS.KSIDE_CASTLE) {
        output = 'O-O';
      } else if (move.flags & BITS.QSIDE_CASTLE) {
        output = 'O-O-O';
      } else {
        if (move.piece !== PAWN) {
          var disambiguator = get_disambiguator(move, moves);
          output += move.piece.toUpperCase() + disambiguator;
        }

        if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
          if (move.piece === PAWN) {
            output += algebraic(move.from)[0];
          }

          output += 'x';
        }

        output += algebraic(move.to);

        if (move.flags & BITS.PROMOTION) {
          output += '=' + move.promotion.toUpperCase();
        }
      }

      make_move(move);

      if (_in_check()) {
        if (_in_checkmate()) {
          output += '#';
        } else {
          output += '+';
        }
      }

      undo_move();
      return output;
    } // parses all of the decorators out of a SAN string


    function stripped_san(move) {
      return move.replace(/=/, '').replace(/[+#]?[?!]*$/, '');
    }

    function attacked(color, square) {
      for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
        /* did we run off the end of the board */
        if (i & 0x88) {
          i += 7;
          continue;
        }
        /* if empty square or wrong color */


        if (_board[i] == null || _board[i].color !== color) continue;
        var piece = _board[i];
        var difference = i - square;
        var index = difference + 119;

        if (ATTACKS[index] & 1 << SHIFTS[piece.type]) {
          if (piece.type === PAWN) {
            if (difference > 0) {
              if (piece.color === WHITE) return true;
            } else {
              if (piece.color === BLACK) return true;
            }

            continue;
          }
          /* if the piece is a knight or a king */


          if (piece.type === 'n' || piece.type === 'k') return true;
          var offset = RAYS[index];
          var j = i + offset;
          var blocked = false;

          while (j !== square) {
            if (_board[j] != null) {
              blocked = true;
              break;
            }

            j += offset;
          }

          if (!blocked) return true;
        }
      }

      return false;
    }

    function king_attacked(color) {
      return attacked(swap_color(color), kings[color]);
    }

    function _in_check() {
      return king_attacked(_turn);
    }

    function _in_checkmate() {
      return _in_check() && generate_moves().length === 0;
    }

    function _in_stalemate() {
      return !_in_check() && generate_moves().length === 0;
    }

    function _insufficient_material() {
      var pieces = {};
      var bishops = [];
      var num_pieces = 0;
      var sq_color = 0;

      for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
        sq_color = (sq_color + 1) % 2;

        if (i & 0x88) {
          i += 7;
          continue;
        }

        var piece = _board[i];

        if (piece) {
          pieces[piece.type] = piece.type in pieces ? pieces[piece.type] + 1 : 1;

          if (piece.type === BISHOP) {
            bishops.push(sq_color);
          }

          num_pieces++;
        }
      }
      /* k vs. k */


      if (num_pieces === 2) {
        return true;
      } else if (
      /* k vs. kn .... or .... k vs. kb */
      num_pieces === 3 && (pieces[BISHOP] === 1 || pieces[KNIGHT] === 1)) {
        return true;
      } else if (num_pieces === pieces[BISHOP] + 2) {
        /* kb vs. kb where any number of bishops are all on the same color */
        var sum = 0;
        var len = bishops.length;

        for (var i = 0; i < len; i++) {
          sum += bishops[i];
        }

        if (sum === 0 || sum === len) {
          return true;
        }
      }

      return false;
    }

    function _in_threefold_repetition() {
      /* TODO: while this function is fine for casual use, a better
       * implementation would use a Zobrist key (instead of FEN). the
       * Zobrist key would be maintained in the make_move/undo_move functions,
       * avoiding the costly that we do below.
       */
      var moves = [];
      var positions = {};
      var repetition = false;

      while (true) {
        var move = undo_move();
        if (!move) break;
        moves.push(move);
      }

      while (true) {
        /* remove the last two fields in the FEN string, they're not needed
         * when checking for draw by rep */
        var fen = generate_fen().split(' ').slice(0, 4).join(' ');
        /* has the position occurred three or move times */

        positions[fen] = fen in positions ? positions[fen] + 1 : 1;

        if (positions[fen] >= 3) {
          repetition = true;
        }

        if (!moves.length) {
          break;
        }

        make_move(moves.pop());
      }

      return repetition;
    }

    function push(move) {
      _history.push({
        move: move,
        kings: {
          b: kings.b,
          w: kings.w
        },
        turn: _turn,
        castling: {
          b: castling.b,
          w: castling.w
        },
        ep_square: ep_square,
        half_moves: half_moves,
        move_number: move_number
      });
    }

    function make_move(move) {
      var us = _turn;
      var them = swap_color(us);
      push(move);
      _board[move.to] = _board[move.from];
      _board[move.from] = null;
      /* if ep capture, remove the captured pawn */

      if (move.flags & BITS.EP_CAPTURE) {
        if (_turn === BLACK) {
          _board[move.to - 16] = null;
        } else {
          _board[move.to + 16] = null;
        }
      }
      /* if pawn promotion, replace with new piece */


      if (move.flags & BITS.PROMOTION) {
        _board[move.to] = {
          type: move.promotion,
          color: us
        };
      }
      /* if we moved the king */


      if (_board[move.to].type === KING) {
        kings[_board[move.to].color] = move.to;
        /* if we castled, move the rook next to the king */

        if (move.flags & BITS.KSIDE_CASTLE) {
          var castling_to = move.to - 1;
          var castling_from = move.to + 1;
          _board[castling_to] = _board[castling_from];
          _board[castling_from] = null;
        } else if (move.flags & BITS.QSIDE_CASTLE) {
          var castling_to = move.to + 1;
          var castling_from = move.to - 2;
          _board[castling_to] = _board[castling_from];
          _board[castling_from] = null;
        }
        /* turn off castling */


        castling[us] = '';
      }
      /* turn off castling if we move a rook */


      if (castling[us]) {
        for (var i = 0, len = ROOKS[us].length; i < len; i++) {
          if (move.from === ROOKS[us][i].square && castling[us] & ROOKS[us][i].flag) {
            castling[us] ^= ROOKS[us][i].flag;
            break;
          }
        }
      }
      /* turn off castling if we capture a rook */


      if (castling[them]) {
        for (var i = 0, len = ROOKS[them].length; i < len; i++) {
          if (move.to === ROOKS[them][i].square && castling[them] & ROOKS[them][i].flag) {
            castling[them] ^= ROOKS[them][i].flag;
            break;
          }
        }
      }
      /* if big pawn move, update the en passant square */


      if (move.flags & BITS.BIG_PAWN) {
        if (_turn === 'b') {
          ep_square = move.to - 16;
        } else {
          ep_square = move.to + 16;
        }
      } else {
        ep_square = EMPTY;
      }
      /* reset the 50 move counter if a pawn is moved or a piece is captured */


      if (move.piece === PAWN) {
        half_moves = 0;
      } else if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
        half_moves = 0;
      } else {
        half_moves++;
      }

      if (_turn === BLACK) {
        move_number++;
      }

      _turn = swap_color(_turn);
    }

    function undo_move() {
      var old = _history.pop();

      if (old == null) {
        return null;
      }

      var move = old.move;
      kings = old.kings;
      _turn = old.turn;
      castling = old.castling;
      ep_square = old.ep_square;
      half_moves = old.half_moves;
      move_number = old.move_number;
      var us = _turn;
      var them = swap_color(_turn);
      _board[move.from] = _board[move.to];
      _board[move.from].type = move.piece; // to undo any promotions

      _board[move.to] = null;

      if (move.flags & BITS.CAPTURE) {
        _board[move.to] = {
          type: move.captured,
          color: them
        };
      } else if (move.flags & BITS.EP_CAPTURE) {
        var index;

        if (us === BLACK) {
          index = move.to - 16;
        } else {
          index = move.to + 16;
        }

        _board[index] = {
          type: PAWN,
          color: them
        };
      }

      if (move.flags & (BITS.KSIDE_CASTLE | BITS.QSIDE_CASTLE)) {
        var castling_to, castling_from;

        if (move.flags & BITS.KSIDE_CASTLE) {
          castling_to = move.to + 1;
          castling_from = move.to - 1;
        } else if (move.flags & BITS.QSIDE_CASTLE) {
          castling_to = move.to - 2;
          castling_from = move.to + 1;
        }

        _board[castling_to] = _board[castling_from];
        _board[castling_from] = null;
      }

      return move;
    }
    /* this function is used to uniquely identify ambiguous moves */


    function get_disambiguator(move, moves) {
      var from = move.from;
      var to = move.to;
      var piece = move.piece;
      var ambiguities = 0;
      var same_rank = 0;
      var same_file = 0;

      for (var i = 0, len = moves.length; i < len; i++) {
        var ambig_from = moves[i].from;
        var ambig_to = moves[i].to;
        var ambig_piece = moves[i].piece;
        /* if a move of the same piece type ends on the same to square, we'll
         * need to add a disambiguator to the algebraic notation
         */

        if (piece === ambig_piece && from !== ambig_from && to === ambig_to) {
          ambiguities++;

          if (rank(from) === rank(ambig_from)) {
            same_rank++;
          }

          if (file(from) === file(ambig_from)) {
            same_file++;
          }
        }
      }

      if (ambiguities > 0) {
        /* if there exists a similar moving piece on the same rank and file as
         * the move in question, use the square as the disambiguator
         */
        if (same_rank > 0 && same_file > 0) {
          return algebraic(from);
        } else if (same_file > 0) {
          /* if the moving piece rests on the same file, use the rank symbol as the
           * disambiguator
           */
          return algebraic(from).charAt(1);
        } else {
          /* else use the file symbol */
          return algebraic(from).charAt(0);
        }
      }

      return '';
    }

    function infer_piece_type(san) {
      var piece_type = san.charAt(0);

      if (piece_type >= 'a' && piece_type <= 'h') {
        var matches = san.match(/[a-h]\d.*[a-h]\d/);

        if (matches) {
          return undefined;
        }

        return PAWN;
      }

      piece_type = piece_type.toLowerCase();

      if (piece_type === 'o') {
        return KING;
      }

      return piece_type;
    }

    function _ascii() {
      var s = '   +------------------------+\n';

      for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
        /* display the rank */
        if (file(i) === 0) {
          s += ' ' + '87654321'[rank(i)] + ' |';
        }
        /* empty piece */


        if (_board[i] == null) {
          s += ' . ';
        } else {
          var piece = _board[i].type;
          var color = _board[i].color;
          var symbol = color === WHITE ? piece.toUpperCase() : piece.toLowerCase();
          s += ' ' + symbol + ' ';
        }

        if (i + 1 & 0x88) {
          s += '|\n';
          i += 8;
        }
      }

      s += '   +------------------------+\n';
      s += '     a  b  c  d  e  f  g  h\n';
      return s;
    } // convert a move from Standard Algebraic Notation (SAN) to 0x88 coordinates


    function move_from_san(move, sloppy) {
      // strip off any move decorations: e.g Nf3+?!
      var clean_move = stripped_san(move); // if we're using the sloppy parser run a regex to grab piece, to, and from
      // this should parse invalid SAN like: Pe2-e4, Rc1c4, Qf3xf7

      if (sloppy) {
        var matches = clean_move.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/);

        if (matches) {
          var piece = matches[1];
          var from = matches[2];
          var to = matches[3];
          var promotion = matches[4];
        }
      }

      var piece_type = infer_piece_type(clean_move);
      var moves = null;
      var legalMoves = generate_moves({
        legal: true,
        piece: piece ? piece : piece_type
      });
      moves = legalMoves;

      if (sloppy) {
        var illegalMoves = generate_moves({
          legal: false,
          piece: piece ? piece : piece_type
        });
        moves = illegalMoves;
      }

      for (var i = 0, len = moves.length; i < len; i++) {
        // try the strict parser first, then the sloppy parser if requested
        // by the user
        if (clean_move === stripped_san(move_to_san(moves[i], legalMoves)) || sloppy && clean_move === stripped_san(move_to_san(moves[i], illegalMoves))) {
          return moves[i];
        } else {
          if (matches && (!piece || piece.toLowerCase() == moves[i].piece) && SQUARES[from] == moves[i].from && SQUARES[to] == moves[i].to && (!promotion || promotion.toLowerCase() == moves[i].promotion)) {
            return moves[i];
          }
        }
      }

      return null;
    }
    /*****************************************************************************
     * UTILITY FUNCTIONS
     ****************************************************************************/


    function rank(i) {
      return i >> 4;
    }

    function file(i) {
      return i & 15;
    }

    function algebraic(i) {
      var f = file(i),
          r = rank(i);
      return 'abcdefgh'.substring(f, f + 1) + '87654321'.substring(r, r + 1);
    }

    function swap_color(c) {
      return c === WHITE ? BLACK : WHITE;
    }

    function is_digit(c) {
      return '0123456789'.indexOf(c) !== -1;
    }
    /* pretty = external move object */


    function make_pretty(ugly_move) {
      var move = clone(ugly_move);
      move.san = move_to_san(move, generate_moves({
        legal: true
      }));
      move.to = algebraic(move.to);
      move.from = algebraic(move.from);
      var flags = '';

      for (var flag in BITS) {
        if (BITS[flag] & move.flags) {
          flags += FLAGS[flag];
        }
      }

      move.flags = flags;
      return move;
    }

    function clone(obj) {
      var dupe = obj instanceof Array ? [] : {};

      for (var property in obj) {
        if (_typeof(property) === 'object') {
          dupe[property] = clone(obj[property]);
        } else {
          dupe[property] = obj[property];
        }
      }

      return dupe;
    }

    function trim(str) {
      return str.replace(/^\s+|\s+$/g, '');
    }
    /*****************************************************************************
     * DEBUGGING UTILITIES
     ****************************************************************************/


    function _perft(depth) {
      var moves = generate_moves({
        legal: false
      });
      var nodes = 0;
      var color = _turn;

      for (var i = 0, len = moves.length; i < len; i++) {
        make_move(moves[i]);

        if (!king_attacked(color)) {
          if (depth - 1 > 0) {
            var child_nodes = _perft(depth - 1);

            nodes += child_nodes;
          } else {
            nodes++;
          }
        }

        undo_move();
      }

      return nodes;
    }

    return {
      /***************************************************************************
       * PUBLIC CONSTANTS (is there a better way to do this?)
       **************************************************************************/
      WHITE: WHITE,
      BLACK: BLACK,
      PAWN: PAWN,
      KNIGHT: KNIGHT,
      BISHOP: BISHOP,
      ROOK: ROOK,
      QUEEN: QUEEN,
      KING: KING,
      SQUARES: function () {
        /* from the ECMA-262 spec (section 12.6.4):
         * "The mechanics of enumerating the properties ... is
         * implementation dependent"
         * so: for (var sq in SQUARES) { keys.push(sq); } might not be
         * ordered correctly
         */
        var keys = [];

        for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
          if (i & 0x88) {
            i += 7;
            continue;
          }

          keys.push(algebraic(i));
        }

        return keys;
      }(),
      FLAGS: FLAGS,

      /***************************************************************************
       * PUBLIC API
       **************************************************************************/
      load: function load(fen) {
        return _load(fen);
      },
      reset: function reset() {
        return _reset();
      },
      moves: function moves(options) {
        /* The internal representation of a chess move is in 0x88 format, and
         * not meant to be human-readable.  The code below converts the 0x88
         * square coordinates to algebraic coordinates.  It also prunes an
         * unnecessary move keys resulting from a verbose call.
         */
        var ugly_moves = generate_moves(options);
        var moves = [];

        for (var i = 0, len = ugly_moves.length; i < len; i++) {
          /* does the user want a full move object (most likely not), or just
           * SAN
           */
          if (typeof options !== 'undefined' && 'verbose' in options && options.verbose) {
            moves.push(make_pretty(ugly_moves[i]));
          } else {
            moves.push(move_to_san(ugly_moves[i], generate_moves({
              legal: true
            })));
          }
        }

        return moves;
      },
      in_check: function in_check() {
        return _in_check();
      },
      in_checkmate: function in_checkmate() {
        return _in_checkmate();
      },
      in_stalemate: function in_stalemate() {
        return _in_stalemate();
      },
      in_draw: function in_draw() {
        return half_moves >= 100 || _in_stalemate() || _insufficient_material() || _in_threefold_repetition();
      },
      insufficient_material: function insufficient_material() {
        return _insufficient_material();
      },
      in_threefold_repetition: function in_threefold_repetition() {
        return _in_threefold_repetition();
      },
      game_over: function game_over() {
        return half_moves >= 100 || _in_checkmate() || _in_stalemate() || _insufficient_material() || _in_threefold_repetition();
      },
      validate_fen: function validate_fen(fen) {
        return _validate_fen(fen);
      },
      fen: function fen() {
        return generate_fen();
      },
      board: function board() {
        var output = [],
            row = [];

        for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
          if (_board[i] == null) {
            row.push(null);
          } else {
            row.push({
              type: _board[i].type,
              color: _board[i].color
            });
          }

          if (i + 1 & 0x88) {
            output.push(row);
            row = [];
            i += 8;
          }
        }

        return output;
      },
      pgn: function pgn(options) {
        /* using the specification from http://www.chessclub.com/help/PGN-spec
         * example for html usage: .pgn({ max_width: 72, newline_char: "<br />" })
         */
        var newline = _typeof(options) === 'object' && typeof options.newline_char === 'string' ? options.newline_char : '\n';
        var max_width = _typeof(options) === 'object' && typeof options.max_width === 'number' ? options.max_width : 0;
        var result = [];
        var header_exists = false;
        /* add the PGN header headerrmation */

        for (var i in header) {
          /* TODO: order of enumerated properties in header object is not
           * guaranteed, see ECMA-262 spec (section 12.6.4)
           */
          result.push('[' + i + ' "' + header[i] + '"]' + newline);
          header_exists = true;
        }

        if (header_exists && _history.length) {
          result.push(newline);
        }

        var append_comment = function append_comment(move_string) {
          var comment = comments[generate_fen()];

          if (typeof comment !== 'undefined') {
            var delimiter = move_string.length > 0 ? ' ' : '';
            move_string = "".concat(move_string).concat(delimiter, "{").concat(comment, "}");
          }

          return move_string;
        };
        /* pop all of history onto reversed_history */


        var reversed_history = [];

        while (_history.length > 0) {
          reversed_history.push(undo_move());
        }

        var moves = [];
        var move_string = '';
        /* special case of a commented starting position with no moves */

        if (reversed_history.length === 0) {
          moves.push(append_comment(''));
        }
        /* build the list of moves.  a move_string looks like: "3. e3 e6" */


        while (reversed_history.length > 0) {
          move_string = append_comment(move_string);
          var move = reversed_history.pop();
          /* if the position started with black to move, start PGN with 1. ... */

          if (!_history.length && move.color === 'b') {
            move_string = move_number + '. ...';
          } else if (move.color === 'w') {
            /* store the previous generated move_string if we have one */
            if (move_string.length) {
              moves.push(move_string);
            }

            move_string = move_number + '.';
          }

          move_string = move_string + ' ' + move_to_san(move, generate_moves({
            legal: false
          }));
          make_move(move);
        }
        /* are there any other leftover moves? */


        if (move_string.length) {
          moves.push(append_comment(move_string));
        }
        /* is there a result? */


        if (typeof header.Result !== 'undefined') {
          moves.push(header.Result);
        }
        /* history should be back to what it was before we started generating PGN,
         * so join together moves
         */


        if (max_width === 0) {
          return result.join('') + moves.join(' ');
        }

        var strip = function strip() {
          if (result.length > 0 && result[result.length - 1] === ' ') {
            result.pop();
            return true;
          }

          return false;
        };
        /* NB: this does not preserve comment whitespace. */


        var wrap_comment = function wrap_comment(width, move) {
          var _iterator = _createForOfIteratorHelper(move.split(' ')),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var token = _step.value;

              if (!token) {
                continue;
              }

              if (width + token.length > max_width) {
                while (strip()) {
                  width--;
                }

                result.push(newline);
                width = 0;
              }

              result.push(token);
              width += token.length;
              result.push(' ');
              width++;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          if (strip()) {
            width--;
          }

          return width;
        };
        /* wrap the PGN output at max_width */


        var current_width = 0;

        for (var i = 0; i < moves.length; i++) {
          if (current_width + moves[i].length > max_width) {
            if (moves[i].includes('{')) {
              current_width = wrap_comment(current_width, moves[i]);
              continue;
            }
          }
          /* if the current move will push past max_width */


          if (current_width + moves[i].length > max_width && i !== 0) {
            /* don't end the line with whitespace */
            if (result[result.length - 1] === ' ') {
              result.pop();
            }

            result.push(newline);
            current_width = 0;
          } else if (i !== 0) {
            result.push(' ');
            current_width++;
          }

          result.push(moves[i]);
          current_width += moves[i].length;
        }

        return result.join('');
      },
      load_pgn: function load_pgn(pgn, options) {
        // allow the user to specify the sloppy move parser to work around over
        // disambiguation bugs in Fritz and Chessbase
        var sloppy = typeof options !== 'undefined' && 'sloppy' in options ? options.sloppy : false;

        function mask(str) {
          return str.replace(/\\/g, '\\');
        }

        function has_keys(object) {
          for (var key in object) {
            return true;
          }

          return false;
        }

        function parse_pgn_header(header, options) {
          var newline_char = _typeof(options) === 'object' && typeof options.newline_char === 'string' ? options.newline_char : '\r?\n';
          var header_obj = {};
          var headers = header.split(new RegExp(mask(newline_char)));
          var key = '';
          var value = '';

          for (var i = 0; i < headers.length; i++) {
            key = headers[i].replace(/^\[([A-Z][A-Za-z]*)\s.*\]$/, '$1');
            value = headers[i].replace(/^\[[A-Za-z]+\s"(.*)"\ *\]$/, '$1');

            if (trim(key).length > 0) {
              header_obj[key] = value;
            }
          }

          return header_obj;
        }

        var newline_char = _typeof(options) === 'object' && typeof options.newline_char === 'string' ? options.newline_char : '\r?\n'; // RegExp to split header. Takes advantage of the fact that header and movetext
        // will always have a blank line between them (ie, two newline_char's).
        // With default newline_char, will equal: /^(\[((?:\r?\n)|.)*\])(?:\r?\n){2}/

        var header_regex = new RegExp('^(\\[((?:' + mask(newline_char) + ')|.)*\\])' + '(?:' + mask(newline_char) + '){2}'); // If no header given, begin with moves.

        var header_string = header_regex.test(pgn) ? header_regex.exec(pgn)[1] : ''; // Put the board in the starting position

        _reset();
        /* parse PGN header */


        var headers = parse_pgn_header(header_string, options);

        for (var key in headers) {
          set_header([key, headers[key]]);
        }
        /* load the starting position indicated by [Setup '1'] and
         * [FEN position] */


        if (headers['SetUp'] === '1') {
          if (!('FEN' in headers && _load(headers['FEN'], true))) {
            // second argument to load: don't clear the headers
            return false;
          }
        }
        /* NB: the regexes below that delete move numbers, recursive
         * annotations, and numeric annotation glyphs may also match
         * text in comments. To prevent this, we transform comments
         * by hex-encoding them in place and decoding them again after
         * the other tokens have been deleted.
         *
         * While the spec states that PGN files should be ASCII encoded,
         * we use {en,de}codeURIComponent here to support arbitrary UTF8
         * as a convenience for modern users */


        var to_hex = function to_hex(string) {
          return Array.from(string).map(function (c) {
            /* encodeURI doesn't transform most ASCII characters,
             * so we handle these ourselves */
            return c.charCodeAt(0) < 128 ? c.charCodeAt(0).toString(16) : encodeURIComponent(c).replace(/\%/g, '').toLowerCase();
          }).join('');
        };

        var from_hex = function from_hex(string) {
          return string.length == 0 ? '' : decodeURIComponent('%' + string.match(/.{1,2}/g).join('%'));
        };

        var encode_comment = function encode_comment(string) {
          string = string.replace(new RegExp(mask(newline_char), 'g'), ' ');
          return "{".concat(to_hex(string.slice(1, string.length - 1)), "}");
        };

        var decode_comment = function decode_comment(string) {
          if (string.startsWith('{') && string.endsWith('}')) {
            return from_hex(string.slice(1, string.length - 1));
          }
        };
        /* delete header to get the moves */


        var ms = pgn.replace(header_string, '').replace(
        /* encode comments so they don't get deleted below */
        new RegExp("({[^}]*})+?|;([^".concat(mask(newline_char), "]*)"), 'g'), function (match, bracket, semicolon) {
          return bracket !== undefined ? encode_comment(bracket) : ' ' + encode_comment("{".concat(semicolon.slice(1), "}"));
        }).replace(new RegExp(mask(newline_char), 'g'), ' ');
        /* delete recursive annotation variations */

        var rav_regex = /(\([^\(\)]+\))+?/g;

        while (rav_regex.test(ms)) {
          ms = ms.replace(rav_regex, '');
        }
        /* delete move numbers */


        ms = ms.replace(/\d+\.(\.\.)?/g, '');
        /* delete ... indicating black to move */

        ms = ms.replace(/\.\.\./g, '');
        /* delete numeric annotation glyphs */

        ms = ms.replace(/\$\d+/g, '');
        /* trim and get array of moves */

        var moves = trim(ms).split(new RegExp(/\s+/));
        /* delete empty entries */

        moves = moves.join(',').replace(/,,+/g, ',').split(',');
        var move = '';

        for (var half_move = 0; half_move < moves.length - 1; half_move++) {
          var comment = decode_comment(moves[half_move]);

          if (comment !== undefined) {
            comments[generate_fen()] = comment;
            continue;
          }

          move = move_from_san(moves[half_move], sloppy);
          /* move not possible! (don't clear the board to examine to show the
           * latest valid position)
           */

          if (move == null) {
            return false;
          } else {
            make_move(move);
          }
        }

        comment = decode_comment(moves[moves.length - 1]);

        if (comment !== undefined) {
          comments[generate_fen()] = comment;
          moves.pop();
        }
        /* examine last move */


        move = moves[moves.length - 1];

        if (POSSIBLE_RESULTS.indexOf(move) > -1) {
          if (has_keys(header) && typeof header.Result === 'undefined') {
            set_header(['Result', move]);
          }
        } else {
          move = move_from_san(move, sloppy);

          if (move == null) {
            return false;
          } else {
            make_move(move);
          }
        }

        return true;
      },
      header: function header() {
        return set_header(arguments);
      },
      ascii: function ascii() {
        return _ascii();
      },
      turn: function turn() {
        return _turn;
      },
      move: function move(_move, options) {
        /* The move function can be called with in the following parameters:
         *
         * .move('Nxb7')      <- where 'move' is a case-sensitive SAN string
         *
         * .move({ from: 'h7', <- where the 'move' is a move object (additional
         *         to :'h8',      fields are ignored)
         *         promotion: 'q',
         *      })
         */
        // allow the user to specify the sloppy move parser to work around over
        // disambiguation bugs in Fritz and Chessbase
        var sloppy = typeof options !== 'undefined' && 'sloppy' in options ? options.sloppy : false;
        var move_obj = null;

        if (typeof _move === 'string') {
          move_obj = move_from_san(_move, sloppy);
        } else if (_typeof(_move) === 'object') {
          var moves = generate_moves();
          /* convert the pretty move object to an ugly move object */

          for (var i = 0, len = moves.length; i < len; i++) {
            if (_move.from === algebraic(moves[i].from) && _move.to === algebraic(moves[i].to) && (!('promotion' in moves[i]) || _move.promotion === moves[i].promotion)) {
              move_obj = moves[i];
              break;
            }
          }
        }
        /* failed to find move */


        if (!move_obj) {
          return null;
        }
        /* need to make a copy of move because we can't generate SAN after the
         * move is made
         */


        var pretty_move = make_pretty(move_obj);
        make_move(move_obj);
        return pretty_move;
      },
      undo: function undo() {
        var move = undo_move();
        return move ? make_pretty(move) : null;
      },
      clear: function clear() {
        return _clear();
      },
      put: function put(piece, square) {
        return _put(piece, square);
      },
      get: function get(square) {
        return _get(square);
      },
      remove: function remove(square) {
        return _remove(square);
      },
      perft: function perft(depth) {
        return _perft(depth);
      },
      square_color: function square_color(square) {
        if (square in SQUARES) {
          var sq_0x88 = SQUARES[square];
          return (rank(sq_0x88) + file(sq_0x88)) % 2 === 0 ? 'light' : 'dark';
        }

        return null;
      },
      history: function history(options) {
        var reversed_history = [];
        var move_history = [];
        var verbose = typeof options !== 'undefined' && 'verbose' in options && options.verbose;

        while (_history.length > 0) {
          reversed_history.push(undo_move());
        }

        while (reversed_history.length > 0) {
          var move = reversed_history.pop();

          if (verbose) {
            move_history.push(make_pretty(move));
          } else {
            move_history.push(move_to_san(move, generate_moves({
              legal: true
            })));
          }

          make_move(move);
        }

        return move_history;
      },
      get_comment: function get_comment() {
        return comments[generate_fen()];
      },
      set_comment: function set_comment(comment) {
        comments[generate_fen()] = comment.replace('{', '[').replace('}', ']');
      },
      delete_comment: function delete_comment() {
        var comment = comments[generate_fen()];
        delete comments[generate_fen()];
        return comment;
      },
      get_comments: function get_comments() {
        prune_comments();
        return Object.keys(comments).map(function (fen) {
          return {
            fen: fen,
            comment: comments[fen]
          };
        });
      },
      delete_comments: function delete_comments() {
        prune_comments();
        return Object.keys(comments).map(function (fen) {
          var comment = comments[fen];
          delete comments[fen];
          return {
            fen: fen,
            comment: comment
          };
        });
      }
    };
  }

  var niceErrors = {
    0: "Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'",
    1: function _(annotationType, key) {
      return "Cannot apply '" + annotationType + "' to '" + key.toString() + "': Field not found.";
    },
    5: "'keys()' can only be used on observable objects, arrays, sets and maps",
    6: "'values()' can only be used on observable objects, arrays, sets and maps",
    7: "'entries()' can only be used on observable objects, arrays and maps",
    8: "'set()' can only be used on observable objects, arrays and maps",
    9: "'remove()' can only be used on observable objects, arrays and maps",
    10: "'has()' can only be used on observable objects, arrays and maps",
    11: "'get()' can only be used on observable objects, arrays and maps",
    12: "Invalid annotation",
    13: "Dynamic observable objects cannot be frozen",
    14: "Intercept handlers should return nothing or a change object",
    15: "Observable arrays cannot be frozen",
    16: "Modification exception: the internal structure of an observable array was changed.",
    17: function _(index, length) {
      return "[mobx.array] Index out of bounds, " + index + " is larger than " + length;
    },
    18: "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js",
    19: function _(other) {
      return "Cannot initialize from classes that inherit from Map: " + other.constructor.name;
    },
    20: function _(other) {
      return "Cannot initialize map from " + other;
    },
    21: function _(dataStructure) {
      return "Cannot convert to map from '" + dataStructure + "'";
    },
    22: "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js",
    23: "It is not possible to get index atoms from arrays",
    24: function _(thing) {
      return "Cannot obtain administration from " + thing;
    },
    25: function _(property, name) {
      return "the entry '" + property + "' does not exist in the observable map '" + name + "'";
    },
    26: "please specify a property",
    27: function _(property, name) {
      return "no observable property '" + property.toString() + "' found on the observable object '" + name + "'";
    },
    28: function _(thing) {
      return "Cannot obtain atom from " + thing;
    },
    29: "Expecting some object",
    30: "invalid action stack. did you forget to finish an action?",
    31: "missing option for computed: get",
    32: function _(name, derivation) {
      return "Cycle detected in computation " + name + ": " + derivation;
    },
    33: function _(name) {
      return "The setter of computed value '" + name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?";
    },
    34: function _(name) {
      return "[ComputedValue '" + name + "'] It is not possible to assign a new value to a computed value.";
    },
    35: "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`",
    36: "isolateGlobalState should be called before MobX is running any reactions",
    37: function _(method) {
      return "[mobx] `observableArray." + method + "()` mutates the array in-place, which is not allowed inside a derivation. Use `array.slice()." + method + "()` instead";
    }
  };
  var errors = niceErrors ;
  function die(error) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    {
      var e = typeof error === "string" ? error : errors[error];
      if (typeof e === "function") e = e.apply(null, args);
      throw new Error("[MobX] " + e);
    }
  }

  var mockGlobal = {};
  function getGlobal() {
    if (typeof globalThis !== "undefined") {
      return globalThis;
    }

    if (typeof window !== "undefined") {
      return window;
    }

    if (typeof global !== "undefined") {
      return global;
    }

    if (typeof self !== "undefined") {
      return self;
    }

    return mockGlobal;
  }

  var assign = Object.assign;
  var getDescriptor = Object.getOwnPropertyDescriptor;
  var defineProperty = Object.defineProperty;
  var objectPrototype = Object.prototype;
  var EMPTY_ARRAY = [];
  Object.freeze(EMPTY_ARRAY);
  var EMPTY_OBJECT = {};
  Object.freeze(EMPTY_OBJECT);
  var hasProxy = typeof Proxy !== "undefined";
  var plainObjectString = /*#__PURE__*/Object.toString();
  function assertProxies() {
    if (!hasProxy) {
      die("`Proxy` objects are not available in the current environment. Please configure MobX to enable a fallback implementation.`" );
    }
  }
  function warnAboutProxyRequirement(msg) {
    if (globalState.verifyProxies) {
      die("MobX is currently configured to be able to run in ES5 mode, but in ES5 MobX won't be able to " + msg);
    }
  }
  function getNextId() {
    return ++globalState.mobxGuid;
  }
  /**
   * Makes sure that the provided function is invoked at most once.
   */

  function once(func) {
    var invoked = false;
    return function () {
      if (invoked) return;
      invoked = true;
      return func.apply(this, arguments);
    };
  }
  var noop = function noop() {};
  function isFunction(fn) {
    return typeof fn === "function";
  }
  function isStringish(value) {
    var t = typeof value;

    switch (t) {
      case "string":
      case "symbol":
      case "number":
        return true;
    }

    return false;
  }
  function isObject(value) {
    return value !== null && typeof value === "object";
  }
  function isPlainObject(value) {
    var _proto$constructor;

    if (!isObject(value)) return false;
    var proto = Object.getPrototypeOf(value);
    if (proto == null) return true;
    return ((_proto$constructor = proto.constructor) == null ? void 0 : _proto$constructor.toString()) === plainObjectString;
  } // https://stackoverflow.com/a/37865170

  function isGenerator(obj) {
    var constructor = obj == null ? void 0 : obj.constructor;
    if (!constructor) return false;
    if ("GeneratorFunction" === constructor.name || "GeneratorFunction" === constructor.displayName) return true;
    return false;
  }
  function addHiddenProp(object, propName, value) {
    defineProperty(object, propName, {
      enumerable: false,
      writable: true,
      configurable: true,
      value: value
    });
  }
  function addHiddenFinalProp(object, propName, value) {
    defineProperty(object, propName, {
      enumerable: false,
      writable: false,
      configurable: true,
      value: value
    });
  }
  function createInstanceofPredicate(name, theClass) {
    var propName = "isMobX" + name;
    theClass.prototype[propName] = true;
    return function (x) {
      return isObject(x) && x[propName] === true;
    };
  }
  function isES6Map(thing) {
    return thing instanceof Map;
  }
  function isES6Set(thing) {
    return thing instanceof Set;
  }
  var hasGetOwnPropertySymbols = typeof Object.getOwnPropertySymbols !== "undefined";
  /**
   * Returns the following: own enumerable keys and symbols.
   */

  function getPlainObjectKeys(object) {
    var keys = Object.keys(object); // Not supported in IE, so there are not going to be symbol props anyway...

    if (!hasGetOwnPropertySymbols) return keys;
    var symbols = Object.getOwnPropertySymbols(object);
    if (!symbols.length) return keys;
    return [].concat(keys, symbols.filter(function (s) {
      return objectPrototype.propertyIsEnumerable.call(object, s);
    }));
  } // From Immer utils
  // Returns all own keys, including non-enumerable and symbolic

  var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : hasGetOwnPropertySymbols ? function (obj) {
    return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
  } :
  /* istanbul ignore next */
  Object.getOwnPropertyNames;
  function stringifyKey(key) {
    if (typeof key === "string") return key;
    if (typeof key === "symbol") return key.toString();
    return new String(key).toString();
  }
  function toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
  }
  function hasProp(target, prop) {
    return objectPrototype.hasOwnProperty.call(target, prop);
  } // From Immer utils

  var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(target) {
    // Polyfill needed for Hermes and IE, see https://github.com/facebook/hermes/issues/274
    var res = {}; // Note: without polyfill for ownKeys, symbols won't be picked up

    ownKeys(target).forEach(function (key) {
      res[key] = getDescriptor(target, key);
    });
    return res;
  };

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        return function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    it = o[Symbol.iterator]();
    return it.next.bind(it);
  }

  var storedAnnotationsSymbol = /*#__PURE__*/Symbol("mobx-stored-annotations");
  /**
   * Creates a function that acts as
   * - decorator
   * - annotation object
   */

  function createDecoratorAnnotation(annotation) {
    function decorator(target, property) {
      storeAnnotation(target, property, annotation);
    }

    return Object.assign(decorator, annotation);
  }
  /**
   * Stores annotation to prototype,
   * so it can be inspected later by `makeObservable` called from constructor
   */

  function storeAnnotation(prototype, key, annotation) {
    if (!hasProp(prototype, storedAnnotationsSymbol)) {
      addHiddenProp(prototype, storedAnnotationsSymbol, _extends({}, prototype[storedAnnotationsSymbol]));
    } // @override must override something


    if (isOverride(annotation) && !hasProp(prototype[storedAnnotationsSymbol], key)) {
      var fieldName = prototype.constructor.name + ".prototype." + key.toString();
      die("'" + fieldName + "' is decorated with 'override', " + "but no such decorated member was found on prototype.");
    } // Cannot re-decorate


    assertNotDecorated(prototype, annotation, key); // Ignore override

    if (!isOverride(annotation)) {
      prototype[storedAnnotationsSymbol][key] = annotation;
    }
  }

  function assertNotDecorated(prototype, annotation, key) {
    if (!isOverride(annotation) && hasProp(prototype[storedAnnotationsSymbol], key)) {
      var fieldName = prototype.constructor.name + ".prototype." + key.toString();
      var currentAnnotationType = prototype[storedAnnotationsSymbol][key].annotationType_;
      var requestedAnnotationType = annotation.annotationType_;
      die("Cannot apply '@" + requestedAnnotationType + "' to '" + fieldName + "':" + ("\nThe field is already decorated with '@" + currentAnnotationType + "'.") + "\nRe-decorating fields is not allowed." + "\nUse '@override' decorator for methods overriden by subclass.");
    }
  }
  /**
   * Collects annotations from prototypes and stores them on target (instance)
   */


  function collectStoredAnnotations(target) {
    if (!hasProp(target, storedAnnotationsSymbol)) {
      if (!target[storedAnnotationsSymbol]) {
        die("No annotations were passed to makeObservable, but no decorated members have been found either");
      } // We need a copy as we will remove annotation from the list once it's applied.


      addHiddenProp(target, storedAnnotationsSymbol, _extends({}, target[storedAnnotationsSymbol]));
    }

    return target[storedAnnotationsSymbol];
  }

  var $mobx = /*#__PURE__*/Symbol("mobx administration");
  var Atom = /*#__PURE__*/function () {
    // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed

    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function Atom(name_) {
      if (name_ === void 0) {
        name_ = "Atom@" + getNextId() ;
      }

      this.name_ = void 0;
      this.isPendingUnobservation_ = false;
      this.isBeingObserved_ = false;
      this.observers_ = new Set();
      this.diffValue_ = 0;
      this.lastAccessedBy_ = 0;
      this.lowestObserverState_ = IDerivationState_.NOT_TRACKING_;
      this.onBOL = void 0;
      this.onBUOL = void 0;
      this.name_ = name_;
    } // onBecomeObservedListeners


    var _proto = Atom.prototype;

    _proto.onBO = function onBO() {
      if (this.onBOL) {
        this.onBOL.forEach(function (listener) {
          return listener();
        });
      }
    };

    _proto.onBUO = function onBUO() {
      if (this.onBUOL) {
        this.onBUOL.forEach(function (listener) {
          return listener();
        });
      }
    }
    /**
     * Invoke this method to notify mobx that your atom has been used somehow.
     * Returns true if there is currently a reactive context.
     */
    ;

    _proto.reportObserved = function reportObserved$1() {
      return reportObserved(this);
    }
    /**
     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
     */
    ;

    _proto.reportChanged = function reportChanged() {
      startBatch();
      propagateChanged(this);
      endBatch();
    };

    _proto.toString = function toString() {
      return this.name_;
    };

    return Atom;
  }();
  var isAtom = /*#__PURE__*/createInstanceofPredicate("Atom", Atom);
  function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
    if (onBecomeObservedHandler === void 0) {
      onBecomeObservedHandler = noop;
    }

    if (onBecomeUnobservedHandler === void 0) {
      onBecomeUnobservedHandler = noop;
    }

    var atom = new Atom(name); // default `noop` listener will not initialize the hook Set

    if (onBecomeObservedHandler !== noop) {
      onBecomeObserved(atom, onBecomeObservedHandler);
    }

    if (onBecomeUnobservedHandler !== noop) {
      onBecomeUnobserved(atom, onBecomeUnobservedHandler);
    }

    return atom;
  }

  function identityComparer(a, b) {
    return a === b;
  }

  function structuralComparer(a, b) {
    return deepEqual(a, b);
  }

  function shallowComparer(a, b) {
    return deepEqual(a, b, 1);
  }

  function defaultComparer(a, b) {
    return Object.is(a, b);
  }

  var comparer = {
    identity: identityComparer,
    structural: structuralComparer,
    "default": defaultComparer,
    shallow: shallowComparer
  };

  function deepEnhancer(v, _, name) {
    // it is an observable already, done
    if (isObservable(v)) return v; // something that can be converted and mutated?

    if (Array.isArray(v)) return observable.array(v, {
      name: name
    });
    if (isPlainObject(v)) return observable.object(v, undefined, {
      name: name
    });
    if (isES6Map(v)) return observable.map(v, {
      name: name
    });
    if (isES6Set(v)) return observable.set(v, {
      name: name
    });

    if (typeof v === "function" && !isAction(v) && !isFlow(v)) {
      if (isGenerator(v)) {
        return flow(v);
      } else {
        return autoAction(name, v);
      }
    }

    return v;
  }
  function shallowEnhancer(v, _, name) {
    if (v === undefined || v === null) return v;
    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v)) return v;
    if (Array.isArray(v)) return observable.array(v, {
      name: name,
      deep: false
    });
    if (isPlainObject(v)) return observable.object(v, undefined, {
      name: name,
      deep: false
    });
    if (isES6Map(v)) return observable.map(v, {
      name: name,
      deep: false
    });
    if (isES6Set(v)) return observable.set(v, {
      name: name,
      deep: false
    });
    die("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
  }
  function referenceEnhancer(newValue) {
    // never turn into an observable
    return newValue;
  }
  function refStructEnhancer(v, oldValue) {
    if (isObservable(v)) die("observable.struct should not be used with observable values");
    if (deepEqual(v, oldValue)) return oldValue;
    return v;
  }

  var OVERRIDE = "override";
  function isOverride(annotation) {
    return annotation.annotationType_ === OVERRIDE;
  }

  function createActionAnnotation(name, options) {
    return {
      annotationType_: name,
      options_: options,
      make_: make_$1,
      extend_: extend_$1
    };
  }

  function make_$1(adm, key, descriptor, source) {
    var _this$options_;

    // bound
    if ((_this$options_ = this.options_) == null ? void 0 : _this$options_.bound) {
      return this.extend_(adm, key, descriptor, false) === null ? 0
      /* Cancel */
      : 1
      /* Break */
      ;
    } // own


    if (source === adm.target_) {
      return this.extend_(adm, key, descriptor, false) === null ? 0
      /* Cancel */
      : 2
      /* Continue */
      ;
    } // prototype


    if (isAction(descriptor.value)) {
      // A prototype could have been annotated already by other constructor,
      // rest of the proto chain must be annotated already
      return 1
      /* Break */
      ;
    }

    var actionDescriptor = createActionDescriptor(adm, this, key, descriptor, false);
    defineProperty(source, key, actionDescriptor);
    return 2
    /* Continue */
    ;
  }

  function extend_$1(adm, key, descriptor, proxyTrap) {
    var actionDescriptor = createActionDescriptor(adm, this, key, descriptor);
    return adm.defineProperty_(key, actionDescriptor, proxyTrap);
  }

  function assertActionDescriptor(adm, _ref, key, _ref2) {
    var annotationType_ = _ref.annotationType_;
    var value = _ref2.value;

    if (!isFunction(value)) {
      die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on properties with a function value."));
    }
  }

  function createActionDescriptor(adm, annotation, key, descriptor, // provides ability to disable safeDescriptors for prototypes
  safeDescriptors) {
    var _annotation$options_, _annotation$options_$, _annotation$options_2, _annotation$options_$2, _annotation$options_3;

    if (safeDescriptors === void 0) {
      safeDescriptors = globalState.safeDescriptors;
    }

    assertActionDescriptor(adm, annotation, key, descriptor);
    var value = descriptor.value;

    if ((_annotation$options_ = annotation.options_) == null ? void 0 : _annotation$options_.bound) {
      var _adm$proxy_;

      value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
    }

    return {
      value: createAction((_annotation$options_$ = (_annotation$options_2 = annotation.options_) == null ? void 0 : _annotation$options_2.name) != null ? _annotation$options_$ : key.toString(), value, (_annotation$options_$2 = (_annotation$options_3 = annotation.options_) == null ? void 0 : _annotation$options_3.autoAction) != null ? _annotation$options_$2 : false),
      // Non-configurable for classes
      // prevents accidental field redefinition in subclass
      configurable: safeDescriptors ? adm.isPlainObject_ : true,
      // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
      enumerable: false,
      // Non-obsevable, therefore non-writable
      // Also prevents rewriting in subclass constructor
      writable: safeDescriptors ? false : true
    };
  }

  function createFlowAnnotation(name, options) {
    return {
      annotationType_: name,
      options_: options,
      make_: make_$2,
      extend_: extend_$2
    };
  }

  function make_$2(adm, key, descriptor, source) {
    // own
    if (source === adm.target_) {
      return this.extend_(adm, key, descriptor, false) === null ? 0
      /* Cancel */
      : 2
      /* Continue */
      ;
    } // prototype


    if (isFlow(descriptor.value)) {
      // A prototype could have been annotated already by other constructor,
      // rest of the proto chain must be annotated already
      return 1
      /* Break */
      ;
    }

    var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, false);
    defineProperty(source, key, flowDescriptor);
    return 2
    /* Continue */
    ;
  }

  function extend_$2(adm, key, descriptor, proxyTrap) {
    var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor);
    return adm.defineProperty_(key, flowDescriptor, proxyTrap);
  }

  function assertFlowDescriptor(adm, _ref, key, _ref2) {
    var annotationType_ = _ref.annotationType_;
    var value = _ref2.value;

    if (!isFunction(value)) {
      die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on properties with a generator function value."));
    }
  }

  function createFlowDescriptor(adm, annotation, key, descriptor, // provides ability to disable safeDescriptors for prototypes
  safeDescriptors) {
    if (safeDescriptors === void 0) {
      safeDescriptors = globalState.safeDescriptors;
    }

    assertFlowDescriptor(adm, annotation, key, descriptor);
    return {
      value: flow(descriptor.value),
      // Non-configurable for classes
      // prevents accidental field redefinition in subclass
      configurable: safeDescriptors ? adm.isPlainObject_ : true,
      // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
      enumerable: false,
      // Non-obsevable, therefore non-writable
      // Also prevents rewriting in subclass constructor
      writable: safeDescriptors ? false : true
    };
  }

  function createComputedAnnotation(name, options) {
    return {
      annotationType_: name,
      options_: options,
      make_: make_$3,
      extend_: extend_$3
    };
  }

  function make_$3(adm, key, descriptor) {
    return this.extend_(adm, key, descriptor, false) === null ? 0
    /* Cancel */
    : 1
    /* Break */
    ;
  }

  function extend_$3(adm, key, descriptor, proxyTrap) {
    assertComputedDescriptor(adm, this, key, descriptor);
    return adm.defineComputedProperty_(key, _extends({}, this.options_, {
      get: descriptor.get,
      set: descriptor.set
    }), proxyTrap);
  }

  function assertComputedDescriptor(adm, _ref, key, _ref2) {
    var annotationType_ = _ref.annotationType_;
    var get = _ref2.get;

    if (!get) {
      die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on getter(+setter) properties."));
    }
  }

  function createObservableAnnotation(name, options) {
    return {
      annotationType_: name,
      options_: options,
      make_: make_$4,
      extend_: extend_$4
    };
  }

  function make_$4(adm, key, descriptor) {
    return this.extend_(adm, key, descriptor, false) === null ? 0
    /* Cancel */
    : 1
    /* Break */
    ;
  }

  function extend_$4(adm, key, descriptor, proxyTrap) {
    var _this$options_$enhanc, _this$options_;

    assertObservableDescriptor(adm, this, key, descriptor);
    return adm.defineObservableProperty_(key, descriptor.value, (_this$options_$enhanc = (_this$options_ = this.options_) == null ? void 0 : _this$options_.enhancer) != null ? _this$options_$enhanc : deepEnhancer, proxyTrap);
  }

  function assertObservableDescriptor(adm, _ref, key, descriptor) {
    var annotationType_ = _ref.annotationType_;

    if (!("value" in descriptor)) {
      die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' cannot be used on getter/setter properties"));
    }
  }

  var AUTO = "true";
  var autoAnnotation = /*#__PURE__*/createAutoAnnotation();
  function createAutoAnnotation(options) {
    return {
      annotationType_: AUTO,
      options_: options,
      make_: make_$5,
      extend_: extend_$5
    };
  }

  function make_$5(adm, key, descriptor, source) {
    var _this$options_2, _this$options_3;

    // getter -> computed
    if (descriptor.get) {
      return computed.make_(adm, key, descriptor, source);
    } // lone setter -> action setter


    if (descriptor.set) {
      // TODO make action applicable to setter and delegate to action.make_
      var set = createAction(key.toString(), descriptor.set); // own

      if (source === adm.target_) {
        return adm.defineProperty_(key, {
          configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
          set: set
        }) === null ? 0
        /* Cancel */
        : 2
        /* Continue */
        ;
      } // proto


      defineProperty(source, key, {
        configurable: true,
        set: set
      });
      return 2
      /* Continue */
      ;
    } // function on proto -> autoAction/flow


    if (source !== adm.target_ && typeof descriptor.value === "function") {
      var _this$options_;

      if (isGenerator(descriptor.value)) {
        return flow.make_(adm, key, descriptor, source);
      }

      var actionAnnotation = ((_this$options_ = this.options_) == null ? void 0 : _this$options_.autoBind) ? autoAction.bound : autoAction;
      return actionAnnotation.make_(adm, key, descriptor, source);
    } // other -> observable
    // Copy props from proto as well, see test:
    // "decorate should work with Object.create"


    var observableAnnotation = ((_this$options_2 = this.options_) == null ? void 0 : _this$options_2.deep) === false ? observable.ref : observable; // if function respect autoBind option

    if (typeof descriptor.value === "function" && ((_this$options_3 = this.options_) == null ? void 0 : _this$options_3.autoBind)) {
      var _adm$proxy_;

      descriptor.value = descriptor.value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
    }

    return observableAnnotation.make_(adm, key, descriptor, source);
  }

  function extend_$5(adm, key, descriptor, proxyTrap) {
    var _this$options_4, _this$options_5;

    // getter -> computed
    if (descriptor.get) {
      return computed.extend_(adm, key, descriptor, proxyTrap);
    } // lone setter -> action setter


    if (descriptor.set) {
      // TODO make action applicable to setter and delegate to action.extend_
      return adm.defineProperty_(key, {
        configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
        set: createAction(key.toString(), descriptor.set)
      }, proxyTrap);
    } // other -> observable
    // if function respect autoBind option


    if (typeof descriptor.value === "function" && ((_this$options_4 = this.options_) == null ? void 0 : _this$options_4.autoBind)) {
      var _adm$proxy_2;

      descriptor.value = descriptor.value.bind((_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_);
    }

    var observableAnnotation = ((_this$options_5 = this.options_) == null ? void 0 : _this$options_5.deep) === false ? observable.ref : observable;
    return observableAnnotation.extend_(adm, key, descriptor, proxyTrap);
  }

  // in the majority of cases

  var defaultCreateObservableOptions = {
    deep: true,
    name: undefined,
    defaultDecorator: undefined,
    proxy: true
  };
  Object.freeze(defaultCreateObservableOptions);
  function asCreateObservableOptions(thing) {
    return thing || defaultCreateObservableOptions;
  }
  var observableAnnotation = /*#__PURE__*/createObservableAnnotation("observable");
  var observableRefAnnotation = /*#__PURE__*/createObservableAnnotation("observable.ref", {
    enhancer: referenceEnhancer
  });
  var observableShallowAnnotation = /*#__PURE__*/createObservableAnnotation("observable.shallow", {
    enhancer: shallowEnhancer
  });
  var observableStructAnnotation = /*#__PURE__*/createObservableAnnotation("observable.struct", {
    enhancer: refStructEnhancer
  });
  var observableDecoratorAnnotation = /*#__PURE__*/createDecoratorAnnotation(observableAnnotation);
  function getEnhancerFromOptions(options) {
    return options.deep === true ? deepEnhancer : options.deep === false ? referenceEnhancer : getEnhancerFromAnnotation(options.defaultDecorator);
  }
  function getAnnotationFromOptions(options) {
    var _options$defaultDecor;

    return options ? (_options$defaultDecor = options.defaultDecorator) != null ? _options$defaultDecor : createAutoAnnotation(options) : undefined;
  }
  function getEnhancerFromAnnotation(annotation) {
    var _annotation$options_$, _annotation$options_;

    return !annotation ? deepEnhancer : (_annotation$options_$ = (_annotation$options_ = annotation.options_) == null ? void 0 : _annotation$options_.enhancer) != null ? _annotation$options_$ : deepEnhancer;
  }
  /**
   * Turns an object, array or function into a reactive structure.
   * @param v the value which should become observable.
   */

  function createObservable(v, arg2, arg3) {
    // @observable someProp;
    if (isStringish(arg2)) {
      storeAnnotation(v, arg2, observableAnnotation);
      return;
    } // already observable - ignore


    if (isObservable(v)) return v; // plain object

    if (isPlainObject(v)) return observable.object(v, arg2, arg3); // Array

    if (Array.isArray(v)) return observable.array(v, arg2); // Map

    if (isES6Map(v)) return observable.map(v, arg2); // Set

    if (isES6Set(v)) return observable.set(v, arg2); // other object - ignore

    if (typeof v === "object" && v !== null) return v; // anything else

    return observable.box(v, arg2);
  }

  Object.assign(createObservable, observableDecoratorAnnotation);
  var observableFactories = {
    box: function box(value, options) {
      var o = asCreateObservableOptions(options);
      return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
    },
    array: function array(initialValues, options) {
      var o = asCreateObservableOptions(options);
      return (globalState.useProxies === false || o.proxy === false ? createLegacyArray : createObservableArray)(initialValues, getEnhancerFromOptions(o), o.name);
    },
    map: function map(initialValues, options) {
      var o = asCreateObservableOptions(options);
      return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
    },
    set: function set(initialValues, options) {
      var o = asCreateObservableOptions(options);
      return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
    },
    object: function object(props, decorators, options) {
      return extendObservable(globalState.useProxies === false || (options == null ? void 0 : options.proxy) === false ? asObservableObject({}, options) : asDynamicObservableObject({}, options), props, decorators);
    },
    ref: /*#__PURE__*/createDecoratorAnnotation(observableRefAnnotation),
    shallow: /*#__PURE__*/createDecoratorAnnotation(observableShallowAnnotation),
    deep: observableDecoratorAnnotation,
    struct: /*#__PURE__*/createDecoratorAnnotation(observableStructAnnotation)
  }; // eslint-disable-next-line

  var observable = /*#__PURE__*/assign(createObservable, observableFactories);

  var COMPUTED = "computed";
  var COMPUTED_STRUCT = "computed.struct";
  var computedAnnotation = /*#__PURE__*/createComputedAnnotation(COMPUTED);
  var computedStructAnnotation = /*#__PURE__*/createComputedAnnotation(COMPUTED_STRUCT, {
    equals: comparer.structural
  });
  /**
   * Decorator for class properties: @computed get value() { return expr; }.
   * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
   */

  var computed = function computed(arg1, arg2) {
    if (isStringish(arg2)) {
      // @computed
      return storeAnnotation(arg1, arg2, computedAnnotation);
    }

    if (isPlainObject(arg1)) {
      // @computed({ options })
      return createDecoratorAnnotation(createComputedAnnotation(COMPUTED, arg1));
    } // computed(expr, options?)


    {
      if (!isFunction(arg1)) die("First argument to `computed` should be an expression.");
      if (isFunction(arg2)) die("A setter as second argument is no longer supported, use `{ set: fn }` option instead");
    }

    var opts = isPlainObject(arg2) ? arg2 : {};
    opts.get = arg1;
    opts.name || (opts.name = arg1.name || "");
    /* for generated name */

    return new ComputedValue(opts);
  };
  Object.assign(computed, computedAnnotation);
  computed.struct = /*#__PURE__*/createDecoratorAnnotation(computedStructAnnotation);

  var _getDescriptor$config, _getDescriptor;
  // mobx versions

  var currentActionId = 0;
  var nextActionId = 1;
  var isFunctionNameConfigurable = (_getDescriptor$config = (_getDescriptor = /*#__PURE__*/getDescriptor(function () {}, "name")) == null ? void 0 : _getDescriptor.configurable) != null ? _getDescriptor$config : false; // we can safely recycle this object

  var tmpNameDescriptor = {
    value: "action",
    configurable: true,
    writable: false,
    enumerable: false
  };
  function createAction(actionName, fn, autoAction, ref) {
    if (autoAction === void 0) {
      autoAction = false;
    }

    {
      if (!isFunction(fn)) die("`action` can only be invoked on functions");
      if (typeof actionName !== "string" || !actionName) die("actions should have valid names, got: '" + actionName + "'");
    }

    function res() {
      return executeAction(actionName, autoAction, fn, ref || this, arguments);
    }

    res.isMobxAction = true;

    if (isFunctionNameConfigurable) {
      tmpNameDescriptor.value = actionName;
      Object.defineProperty(res, "name", tmpNameDescriptor);
    }

    return res;
  }
  function executeAction(actionName, canRunAsDerivation, fn, scope, args) {
    var runInfo = _startAction(actionName, canRunAsDerivation, scope, args);

    try {
      return fn.apply(scope, args);
    } catch (err) {
      runInfo.error_ = err;
      throw err;
    } finally {
      _endAction(runInfo);
    }
  }
  function _startAction(actionName, canRunAsDerivation, // true for autoAction
  scope, args) {
    var notifySpy_ = isSpyEnabled() && !!actionName;
    var startTime_ = 0;

    if (notifySpy_) {
      startTime_ = Date.now();
      var flattenedArgs = args ? Array.from(args) : EMPTY_ARRAY;
      spyReportStart({
        type: ACTION,
        name: actionName,
        object: scope,
        arguments: flattenedArgs
      });
    }

    var prevDerivation_ = globalState.trackingDerivation;
    var runAsAction = !canRunAsDerivation || !prevDerivation_;
    startBatch();
    var prevAllowStateChanges_ = globalState.allowStateChanges; // by default preserve previous allow

    if (runAsAction) {
      untrackedStart();
      prevAllowStateChanges_ = allowStateChangesStart(true);
    }

    var prevAllowStateReads_ = allowStateReadsStart(true);
    var runInfo = {
      runAsAction_: runAsAction,
      prevDerivation_: prevDerivation_,
      prevAllowStateChanges_: prevAllowStateChanges_,
      prevAllowStateReads_: prevAllowStateReads_,
      notifySpy_: notifySpy_,
      startTime_: startTime_,
      actionId_: nextActionId++,
      parentActionId_: currentActionId
    };
    currentActionId = runInfo.actionId_;
    return runInfo;
  }
  function _endAction(runInfo) {
    if (currentActionId !== runInfo.actionId_) {
      die(30);
    }

    currentActionId = runInfo.parentActionId_;

    if (runInfo.error_ !== undefined) {
      globalState.suppressReactionErrors = true;
    }

    allowStateChangesEnd(runInfo.prevAllowStateChanges_);
    allowStateReadsEnd(runInfo.prevAllowStateReads_);
    endBatch();
    if (runInfo.runAsAction_) untrackedEnd(runInfo.prevDerivation_);

    if (runInfo.notifySpy_) {
      spyReportEnd({
        time: Date.now() - runInfo.startTime_
      });
    }

    globalState.suppressReactionErrors = false;
  }
  function allowStateChangesStart(allowStateChanges) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges;
    return prev;
  }
  function allowStateChangesEnd(prev) {
    globalState.allowStateChanges = prev;
  }

  var _Symbol$toPrimitive;
  var CREATE = "create";
  _Symbol$toPrimitive = Symbol.toPrimitive;
  var ObservableValue = /*#__PURE__*/function (_Atom) {
    _inheritsLoose(ObservableValue, _Atom);

    function ObservableValue(value, enhancer, name_, notifySpy, equals) {
      var _this;

      if (name_ === void 0) {
        name_ = "ObservableValue@" + getNextId() ;
      }

      if (notifySpy === void 0) {
        notifySpy = true;
      }

      if (equals === void 0) {
        equals = comparer["default"];
      }

      _this = _Atom.call(this, name_) || this;
      _this.enhancer = void 0;
      _this.name_ = void 0;
      _this.equals = void 0;
      _this.hasUnreportedChange_ = false;
      _this.interceptors_ = void 0;
      _this.changeListeners_ = void 0;
      _this.value_ = void 0;
      _this.dehancer = void 0;
      _this.enhancer = enhancer;
      _this.name_ = name_;
      _this.equals = equals;
      _this.value_ = enhancer(value, undefined, name_);

      if (notifySpy && isSpyEnabled()) {
        // only notify spy if this is a stand-alone observable
        spyReport({
          type: CREATE,
          object: _assertThisInitialized(_this),
          observableKind: "value",
          debugObjectName: _this.name_,
          newValue: "" + _this.value_
        });
      }

      return _this;
    }

    var _proto = ObservableValue.prototype;

    _proto.dehanceValue = function dehanceValue(value) {
      if (this.dehancer !== undefined) return this.dehancer(value);
      return value;
    };

    _proto.set = function set(newValue) {
      var oldValue = this.value_;
      newValue = this.prepareNewValue_(newValue);

      if (newValue !== globalState.UNCHANGED) {
        var notifySpy = isSpyEnabled();

        if (notifySpy) {
          spyReportStart({
            type: UPDATE,
            object: this,
            observableKind: "value",
            debugObjectName: this.name_,
            newValue: newValue,
            oldValue: oldValue
          });
        }

        this.setNewValue_(newValue);
        if (notifySpy) spyReportEnd();
      }
    };

    _proto.prepareNewValue_ = function prepareNewValue_(newValue) {
      checkIfStateModificationsAreAllowed(this);

      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this,
          type: UPDATE,
          newValue: newValue
        });
        if (!change) return globalState.UNCHANGED;
        newValue = change.newValue;
      } // apply modifier


      newValue = this.enhancer(newValue, this.value_, this.name_);
      return this.equals(this.value_, newValue) ? globalState.UNCHANGED : newValue;
    };

    _proto.setNewValue_ = function setNewValue_(newValue) {
      var oldValue = this.value_;
      this.value_ = newValue;
      this.reportChanged();

      if (hasListeners(this)) {
        notifyListeners(this, {
          type: UPDATE,
          object: this,
          newValue: newValue,
          oldValue: oldValue
        });
      }
    };

    _proto.get = function get() {
      this.reportObserved();
      return this.dehanceValue(this.value_);
    };

    _proto.intercept_ = function intercept_(handler) {
      return registerInterceptor(this, handler);
    };

    _proto.observe_ = function observe_(listener, fireImmediately) {
      if (fireImmediately) listener({
        observableKind: "value",
        debugObjectName: this.name_,
        object: this,
        type: UPDATE,
        newValue: this.value_,
        oldValue: undefined
      });
      return registerListener(this, listener);
    };

    _proto.raw = function raw() {
      // used by MST ot get undehanced value
      return this.value_;
    };

    _proto.toJSON = function toJSON() {
      return this.get();
    };

    _proto.toString = function toString() {
      return this.name_ + "[" + this.value_ + "]";
    };

    _proto.valueOf = function valueOf() {
      return toPrimitive(this.get());
    };

    _proto[_Symbol$toPrimitive] = function () {
      return this.valueOf();
    };

    return ObservableValue;
  }(Atom);

  var _Symbol$toPrimitive$1;
  /**
   * A node in the state dependency root that observes other nodes, and can be observed itself.
   *
   * ComputedValue will remember the result of the computation for the duration of the batch, or
   * while being observed.
   *
   * During this time it will recompute only when one of its direct dependencies changed,
   * but only when it is being accessed with `ComputedValue.get()`.
   *
   * Implementation description:
   * 1. First time it's being accessed it will compute and remember result
   *    give back remembered result until 2. happens
   * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
   * 3. When it's being accessed, recompute if any shallow dependency changed.
   *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
   *    go to step 2. either way
   *
   * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
   */

  _Symbol$toPrimitive$1 = Symbol.toPrimitive;
  var ComputedValue = /*#__PURE__*/function () {
    // nodes we are looking at. Our value depends on these nodes
    // during tracking it's an array with new observed observers
    // to check for cycles
    // N.B: unminified as it is used by MST

    /**
     * Create a new computed value based on a function expression.
     *
     * The `name` property is for debug purposes only.
     *
     * The `equals` property specifies the comparer function to use to determine if a newly produced
     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
     * compares based on identity comparison (===), and `structuralComparer` deeply compares the structure.
     * Structural comparison can be convenient if you always produce a new aggregated object and
     * don't want to notify observers if it is structurally the same.
     * This is useful for working with vectors, mouse coordinates etc.
     */
    function ComputedValue(options) {
      this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
      this.observing_ = [];
      this.newObserving_ = null;
      this.isBeingObserved_ = false;
      this.isPendingUnobservation_ = false;
      this.observers_ = new Set();
      this.diffValue_ = 0;
      this.runId_ = 0;
      this.lastAccessedBy_ = 0;
      this.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
      this.unboundDepsCount_ = 0;
      this.value_ = new CaughtException(null);
      this.name_ = void 0;
      this.triggeredBy_ = void 0;
      this.isComputing_ = false;
      this.isRunningSetter_ = false;
      this.derivation = void 0;
      this.setter_ = void 0;
      this.isTracing_ = TraceMode.NONE;
      this.scope_ = void 0;
      this.equals_ = void 0;
      this.requiresReaction_ = void 0;
      this.keepAlive_ = void 0;
      this.onBOL = void 0;
      this.onBUOL = void 0;
      if (!options.get) die(31);
      this.derivation = options.get;
      this.name_ = options.name || ("ComputedValue@" + getNextId() );

      if (options.set) {
        this.setter_ = createAction(this.name_ + "-setter" , options.set);
      }

      this.equals_ = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer["default"]);
      this.scope_ = options.context;
      this.requiresReaction_ = !!options.requiresReaction;
      this.keepAlive_ = !!options.keepAlive;
    }

    var _proto = ComputedValue.prototype;

    _proto.onBecomeStale_ = function onBecomeStale_() {
      propagateMaybeChanged(this);
    };

    _proto.onBO = function onBO() {
      if (this.onBOL) {
        this.onBOL.forEach(function (listener) {
          return listener();
        });
      }
    };

    _proto.onBUO = function onBUO() {
      if (this.onBUOL) {
        this.onBUOL.forEach(function (listener) {
          return listener();
        });
      }
    }
    /**
     * Returns the current value of this computed value.
     * Will evaluate its computation first if needed.
     */
    ;

    _proto.get = function get() {
      if (this.isComputing_) die(32, this.name_, this.derivation);

      if (globalState.inBatch === 0 && // !globalState.trackingDerivatpion &&
      this.observers_.size === 0 && !this.keepAlive_) {
        if (shouldCompute(this)) {
          this.warnAboutUntrackedRead_();
          startBatch(); // See perf test 'computed memoization'

          this.value_ = this.computeValue_(false);
          endBatch();
        }
      } else {
        reportObserved(this);

        if (shouldCompute(this)) {
          var prevTrackingContext = globalState.trackingContext;
          if (this.keepAlive_ && !prevTrackingContext) globalState.trackingContext = this;
          if (this.trackAndCompute()) propagateChangeConfirmed(this);
          globalState.trackingContext = prevTrackingContext;
        }
      }

      var result = this.value_;
      if (isCaughtException(result)) throw result.cause;
      return result;
    };

    _proto.set = function set(value) {
      if (this.setter_) {
        if (this.isRunningSetter_) die(33, this.name_);
        this.isRunningSetter_ = true;

        try {
          this.setter_.call(this.scope_, value);
        } finally {
          this.isRunningSetter_ = false;
        }
      } else die(34, this.name_);
    };

    _proto.trackAndCompute = function trackAndCompute() {
      // N.B: unminified as it is used by MST
      var oldValue = this.value_;
      var wasSuspended =
      /* see #1208 */
      this.dependenciesState_ === IDerivationState_.NOT_TRACKING_;
      var newValue = this.computeValue_(true);

      if (isSpyEnabled()) {
        spyReport({
          observableKind: "computed",
          debugObjectName: this.name_,
          object: this.scope_,
          type: "update",
          oldValue: this.value_,
          newValue: newValue
        });
      }

      var changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals_(oldValue, newValue);

      if (changed) {
        this.value_ = newValue;
      }

      return changed;
    };

    _proto.computeValue_ = function computeValue_(track) {
      this.isComputing_ = true; // don't allow state changes during computation

      var prev = allowStateChangesStart(false);
      var res;

      if (track) {
        res = trackDerivedFunction(this, this.derivation, this.scope_);
      } else {
        if (globalState.disableErrorBoundaries === true) {
          res = this.derivation.call(this.scope_);
        } else {
          try {
            res = this.derivation.call(this.scope_);
          } catch (e) {
            res = new CaughtException(e);
          }
        }
      }

      allowStateChangesEnd(prev);
      this.isComputing_ = false;
      return res;
    };

    _proto.suspend_ = function suspend_() {
      if (!this.keepAlive_) {
        clearObserving(this);
        this.value_ = undefined; // don't hold on to computed value!
      }
    };

    _proto.observe_ = function observe_(listener, fireImmediately) {
      var _this = this;

      var firstTime = true;
      var prevValue = undefined;
      return autorun(function () {
        // TODO: why is this in a different place than the spyReport() function? in all other observables it's called in the same place
        var newValue = _this.get();

        if (!firstTime || fireImmediately) {
          var prevU = untrackedStart();
          listener({
            observableKind: "computed",
            debugObjectName: _this.name_,
            type: UPDATE,
            object: _this,
            newValue: newValue,
            oldValue: prevValue
          });
          untrackedEnd(prevU);
        }

        firstTime = false;
        prevValue = newValue;
      });
    };

    _proto.warnAboutUntrackedRead_ = function warnAboutUntrackedRead_() {

      if (this.requiresReaction_ === true) {
        die("[mobx] Computed value " + this.name_ + " is read outside a reactive context");
      }

      if (this.isTracing_ !== TraceMode.NONE) {
        console.log("[mobx.trace] '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute");
      }

      if (globalState.computedRequiresReaction) {
        console.warn("[mobx] Computed value " + this.name_ + " is being read outside a reactive context. Doing a full recompute");
      }
    };

    _proto.toString = function toString() {
      return this.name_ + "[" + this.derivation.toString() + "]";
    };

    _proto.valueOf = function valueOf() {
      return toPrimitive(this.get());
    };

    _proto[_Symbol$toPrimitive$1] = function () {
      return this.valueOf();
    };

    return ComputedValue;
  }();
  var isComputedValue = /*#__PURE__*/createInstanceofPredicate("ComputedValue", ComputedValue);

  var IDerivationState_;

  (function (IDerivationState_) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState_[IDerivationState_["NOT_TRACKING_"] = -1] = "NOT_TRACKING_"; // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast

    IDerivationState_[IDerivationState_["UP_TO_DATE_"] = 0] = "UP_TO_DATE_"; // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed

    IDerivationState_[IDerivationState_["POSSIBLY_STALE_"] = 1] = "POSSIBLY_STALE_"; // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.

    IDerivationState_[IDerivationState_["STALE_"] = 2] = "STALE_";
  })(IDerivationState_ || (IDerivationState_ = {}));

  var TraceMode;

  (function (TraceMode) {
    TraceMode[TraceMode["NONE"] = 0] = "NONE";
    TraceMode[TraceMode["LOG"] = 1] = "LOG";
    TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
  })(TraceMode || (TraceMode = {}));

  var CaughtException = function CaughtException(cause) {
    this.cause = void 0;
    this.cause = cause; // Empty
  };
  function isCaughtException(e) {
    return e instanceof CaughtException;
  }
  /**
   * Finds out whether any dependency of the derivation has actually changed.
   * If dependenciesState is 1 then it will recalculate dependencies,
   * if any dependency changed it will propagate it by changing dependenciesState to 2.
   *
   * By iterating over the dependencies in the same order that they were reported and
   * stopping on the first change, all the recalculations are only called for ComputedValues
   * that will be tracked by derivation. That is because we assume that if the first x
   * dependencies of the derivation doesn't change then the derivation should run the same way
   * up until accessing x-th dependency.
   */

  function shouldCompute(derivation) {
    switch (derivation.dependenciesState_) {
      case IDerivationState_.UP_TO_DATE_:
        return false;

      case IDerivationState_.NOT_TRACKING_:
      case IDerivationState_.STALE_:
        return true;

      case IDerivationState_.POSSIBLY_STALE_:
        {
          // state propagation can occur outside of action/reactive context #2195
          var prevAllowStateReads = allowStateReadsStart(true);
          var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.

          var obs = derivation.observing_,
              l = obs.length;

          for (var i = 0; i < l; i++) {
            var obj = obs[i];

            if (isComputedValue(obj)) {
              if (globalState.disableErrorBoundaries) {
                obj.get();
              } else {
                try {
                  obj.get();
                } catch (e) {
                  // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                  untrackedEnd(prevUntracked);
                  allowStateReadsEnd(prevAllowStateReads);
                  return true;
                }
              } // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
              // and `derivation` is an observer of `obj`
              // invariantShouldCompute(derivation)


              if (derivation.dependenciesState_ === IDerivationState_.STALE_) {
                untrackedEnd(prevUntracked);
                allowStateReadsEnd(prevAllowStateReads);
                return true;
              }
            }
          }

          changeDependenciesStateTo0(derivation);
          untrackedEnd(prevUntracked);
          allowStateReadsEnd(prevAllowStateReads);
          return false;
        }
    }
  }
  function checkIfStateModificationsAreAllowed(atom) {

    var hasObservers = atom.observers_.size > 0; // Should not be possible to change observed state outside strict mode, except during initialization, see #563

    if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "always")) console.warn("[MobX] " + (globalState.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + atom.name_);
  }
  function checkIfStateReadsAreAllowed(observable) {
    if (!globalState.allowStateReads && globalState.observableRequiresReaction) {
      console.warn("[mobx] Observable " + observable.name_ + " being read outside a reactive context");
    }
  }
  /**
   * Executes the provided function `f` and tracks which observables are being accessed.
   * The tracking information is stored on the `derivation` object and the derivation is registered
   * as observer of any of the accessed observables.
   */

  function trackDerivedFunction(derivation, f, context) {
    var prevAllowStateReads = allowStateReadsStart(true); // pre allocate array allocation + room for variation in deps
    // array will be trimmed by bindDependencies

    changeDependenciesStateTo0(derivation);
    derivation.newObserving_ = new Array(derivation.observing_.length + 100);
    derivation.unboundDepsCount_ = 0;
    derivation.runId_ = ++globalState.runId;
    var prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = derivation;
    globalState.inBatch++;
    var result;

    if (globalState.disableErrorBoundaries === true) {
      result = f.call(context);
    } else {
      try {
        result = f.call(context);
      } catch (e) {
        result = new CaughtException(e);
      }
    }

    globalState.inBatch--;
    globalState.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    warnAboutDerivationWithoutDependencies(derivation);
    allowStateReadsEnd(prevAllowStateReads);
    return result;
  }

  function warnAboutDerivationWithoutDependencies(derivation) {
    if (derivation.observing_.length !== 0) return;

    if (globalState.reactionRequiresObservable || derivation.requiresObservable_) {
      console.warn("[mobx] Derivation " + derivation.name_ + " is created/updated without reading any observable value");
    }
  }
  /**
   * diffs newObserving with observing.
   * update observing to be newObserving with unique observables
   * notify observers that become observed/unobserved
   */


  function bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing_;
    var observing = derivation.observing_ = derivation.newObserving_;
    var lowestNewObservingDerivationState = IDerivationState_.UP_TO_DATE_; // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurrence, change to 1 and keep it
    //   1: extra occurrence, drop it

    var i0 = 0,
        l = derivation.unboundDepsCount_;

    for (var i = 0; i < l; i++) {
      var dep = observing[i];

      if (dep.diffValue_ === 0) {
        dep.diffValue_ = 1;
        if (i0 !== i) observing[i0] = dep;
        i0++;
      } // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
      // not hitting the condition


      if (dep.dependenciesState_ > lowestNewObservingDerivationState) {
        lowestNewObservingDerivationState = dep.dependenciesState_;
      }
    }

    observing.length = i0;
    derivation.newObserving_ = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0

    l = prevObserving.length;

    while (l--) {
      var _dep = prevObserving[l];

      if (_dep.diffValue_ === 0) {
        removeObserver(_dep, derivation);
      }

      _dep.diffValue_ = 0;
    } // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0


    while (i0--) {
      var _dep2 = observing[i0];

      if (_dep2.diffValue_ === 1) {
        _dep2.diffValue_ = 0;
        addObserver(_dep2, derivation);
      }
    } // Some new observed derivations may become stale during this derivation computation
    // so they have had no chance to propagate staleness (#916)


    if (lowestNewObservingDerivationState !== IDerivationState_.UP_TO_DATE_) {
      derivation.dependenciesState_ = lowestNewObservingDerivationState;
      derivation.onBecomeStale_();
    }
  }

  function clearObserving(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing_;
    derivation.observing_ = [];
    var i = obs.length;

    while (i--) {
      removeObserver(obs[i], derivation);
    }

    derivation.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
  }
  function untracked(action) {
    var prev = untrackedStart();

    try {
      return action();
    } finally {
      untrackedEnd(prev);
    }
  }
  function untrackedStart() {
    var prev = globalState.trackingDerivation;
    globalState.trackingDerivation = null;
    return prev;
  }
  function untrackedEnd(prev) {
    globalState.trackingDerivation = prev;
  }
  function allowStateReadsStart(allowStateReads) {
    var prev = globalState.allowStateReads;
    globalState.allowStateReads = allowStateReads;
    return prev;
  }
  function allowStateReadsEnd(prev) {
    globalState.allowStateReads = prev;
  }
  /**
   * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
   *
   */

  function changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState_ === IDerivationState_.UP_TO_DATE_) return;
    derivation.dependenciesState_ = IDerivationState_.UP_TO_DATE_;
    var obs = derivation.observing_;
    var i = obs.length;

    while (i--) {
      obs[i].lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    }
  }
  var MobXGlobals = function MobXGlobals() {
    this.version = 6;
    this.UNCHANGED = {};
    this.trackingDerivation = null;
    this.trackingContext = null;
    this.runId = 0;
    this.mobxGuid = 0;
    this.inBatch = 0;
    this.pendingUnobservations = [];
    this.pendingReactions = [];
    this.isRunningReactions = false;
    this.allowStateChanges = false;
    this.allowStateReads = true;
    this.enforceActions = true;
    this.spyListeners = [];
    this.globalReactionErrorHandlers = [];
    this.computedRequiresReaction = false;
    this.reactionRequiresObservable = false;
    this.observableRequiresReaction = false;
    this.disableErrorBoundaries = false;
    this.suppressReactionErrors = false;
    this.useProxies = true;
    this.verifyProxies = false;
    this.safeDescriptors = true;
  };
  var canMergeGlobalState = true;
  var globalState = /*#__PURE__*/function () {
    var global = /*#__PURE__*/getGlobal();
    if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals) canMergeGlobalState = false;
    if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version) canMergeGlobalState = false;

    if (!canMergeGlobalState) {
      setTimeout(function () {
        {
          die(35);
        }
      }, 1);
      return new MobXGlobals();
    } else if (global.__mobxGlobals) {
      global.__mobxInstanceCount += 1;
      if (!global.__mobxGlobals.UNCHANGED) global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible

      return global.__mobxGlobals;
    } else {
      global.__mobxInstanceCount = 1;
      return global.__mobxGlobals = /*#__PURE__*/new MobXGlobals();
    }
  }();
  //     const list = observable.observers
  //     const map = observable.observersIndexes
  //     const l = list.length
  //     for (let i = 0; i < l; i++) {
  //         const id = list[i].__mapid
  //         if (i) {
  //             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
  //         } else {
  //             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
  //         }
  //     }
  //     invariant(
  //         list.length === 0 || Object.keys(map).length === list.length - 1,
  //         "INTERNAL ERROR there is no junk in map"
  //     )
  // }

  function addObserver(observable, node) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    observable.observers_.add(node);
    if (observable.lowestObserverState_ > node.dependenciesState_) observable.lowestObserverState_ = node.dependenciesState_; // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
  }
  function removeObserver(observable, node) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    observable.observers_["delete"](node);

    if (observable.observers_.size === 0) {
      // deleting last observer
      queueForUnobservation(observable);
    } // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");

  }
  function queueForUnobservation(observable) {
    if (observable.isPendingUnobservation_ === false) {
      // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
      observable.isPendingUnobservation_ = true;
      globalState.pendingUnobservations.push(observable);
    }
  }
  /**
   * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
   * During a batch `onBecomeUnobserved` will be called at most once per observable.
   * Avoids unnecessary recalculations.
   */

  function startBatch() {
    globalState.inBatch++;
  }
  function endBatch() {
    if (--globalState.inBatch === 0) {
      runReactions(); // the batch is actually about to finish, all unobserving should happen here.

      var list = globalState.pendingUnobservations;

      for (var i = 0; i < list.length; i++) {
        var observable = list[i];
        observable.isPendingUnobservation_ = false;

        if (observable.observers_.size === 0) {
          if (observable.isBeingObserved_) {
            // if this observable had reactive observers, trigger the hooks
            observable.isBeingObserved_ = false;
            observable.onBUO();
          }

          if (observable instanceof ComputedValue) {
            // computed values are automatically teared down when the last observer leaves
            // this process happens recursively, this computed might be the last observabe of another, etc..
            observable.suspend_();
          }
        }
      }

      globalState.pendingUnobservations = [];
    }
  }
  function reportObserved(observable) {
    checkIfStateReadsAreAllowed(observable);
    var derivation = globalState.trackingDerivation;

    if (derivation !== null) {
      /**
       * Simple optimization, give each derivation run an unique id (runId)
       * Check if last time this observable was accessed the same runId is used
       * if this is the case, the relation is already known
       */
      if (derivation.runId_ !== observable.lastAccessedBy_) {
        observable.lastAccessedBy_ = derivation.runId_; // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...

        derivation.newObserving_[derivation.unboundDepsCount_++] = observable;

        if (!observable.isBeingObserved_ && globalState.trackingContext) {
          observable.isBeingObserved_ = true;
          observable.onBO();
        }
      }

      return true;
    } else if (observable.observers_.size === 0 && globalState.inBatch > 0) {
      queueForUnobservation(observable);
    }

    return false;
  } // function invariantLOS(observable: IObservable, msg: string) {
  //     // it's expensive so better not run it in produciton. but temporarily helpful for testing
  //     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
  //     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
  //     throw new Error(
  //         "lowestObserverState is wrong for " +
  //             msg +
  //             " because " +
  //             min +
  //             " < " +
  //             observable.lowestObserverState
  //     )
  // }

  /**
   * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
   * It will propagate changes to observers from previous run
   * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
   * Hopefully self reruning autoruns aren't a feature people should depend on
   * Also most basic use cases should be ok
   */
  // Called by Atom when its value changes

  function propagateChanged(observable) {
    // invariantLOS(observable, "changed start");
    if (observable.lowestObserverState_ === IDerivationState_.STALE_) return;
    observable.lowestObserverState_ = IDerivationState_.STALE_; // Ideally we use for..of here, but the downcompiled version is really slow...

    observable.observers_.forEach(function (d) {
      if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
        if (d.isTracing_ !== TraceMode.NONE) {
          logTraceInfo(d, observable);
        }

        d.onBecomeStale_();
      }

      d.dependenciesState_ = IDerivationState_.STALE_;
    }); // invariantLOS(observable, "changed end");
  } // Called by ComputedValue when it recalculate and its value changed

  function propagateChangeConfirmed(observable) {
    // invariantLOS(observable, "confirmed start");
    if (observable.lowestObserverState_ === IDerivationState_.STALE_) return;
    observable.lowestObserverState_ = IDerivationState_.STALE_;
    observable.observers_.forEach(function (d) {
      if (d.dependenciesState_ === IDerivationState_.POSSIBLY_STALE_) {
        d.dependenciesState_ = IDerivationState_.STALE_;

        if (d.isTracing_ !== TraceMode.NONE) {
          logTraceInfo(d, observable);
        }
      } else if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_ // this happens during computing of `d`, just keep lowestObserverState up to date.
      ) {
          observable.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
        }
    }); // invariantLOS(observable, "confirmed end");
  } // Used by computed when its dependency changed, but we don't wan't to immediately recompute.

  function propagateMaybeChanged(observable) {
    // invariantLOS(observable, "maybe start");
    if (observable.lowestObserverState_ !== IDerivationState_.UP_TO_DATE_) return;
    observable.lowestObserverState_ = IDerivationState_.POSSIBLY_STALE_;
    observable.observers_.forEach(function (d) {
      if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
        d.dependenciesState_ = IDerivationState_.POSSIBLY_STALE_;
        d.onBecomeStale_();
      }
    }); // invariantLOS(observable, "maybe end");
  }

  function logTraceInfo(derivation, observable) {
    console.log("[mobx.trace] '" + derivation.name_ + "' is invalidated due to a change in: '" + observable.name_ + "'");

    if (derivation.isTracing_ === TraceMode.BREAK) {
      var lines = [];
      printDepTree(getDependencyTree(derivation), lines, 1); // prettier-ignore

      new Function("debugger;\n/*\nTracing '" + derivation.name_ + "'\n\nYou are entering this break point because derivation '" + derivation.name_ + "' is being traced and '" + observable.name_ + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
    }
  }

  function printDepTree(tree, lines, depth) {
    if (lines.length >= 1000) {
      lines.push("(and many more)");
      return;
    }

    lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)

    if (tree.dependencies) tree.dependencies.forEach(function (child) {
      return printDepTree(child, lines, depth + 1);
    });
  }

  var Reaction = /*#__PURE__*/function () {
    // nodes we are looking at. Our value depends on these nodes
    function Reaction(name_, onInvalidate_, errorHandler_, requiresObservable_) {
      if (name_ === void 0) {
        name_ = "Reaction@" + getNextId() ;
      }

      if (requiresObservable_ === void 0) {
        requiresObservable_ = false;
      }

      this.name_ = void 0;
      this.onInvalidate_ = void 0;
      this.errorHandler_ = void 0;
      this.requiresObservable_ = void 0;
      this.observing_ = [];
      this.newObserving_ = [];
      this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
      this.diffValue_ = 0;
      this.runId_ = 0;
      this.unboundDepsCount_ = 0;
      this.isDisposed_ = false;
      this.isScheduled_ = false;
      this.isTrackPending_ = false;
      this.isRunning_ = false;
      this.isTracing_ = TraceMode.NONE;
      this.name_ = name_;
      this.onInvalidate_ = onInvalidate_;
      this.errorHandler_ = errorHandler_;
      this.requiresObservable_ = requiresObservable_;
    }

    var _proto = Reaction.prototype;

    _proto.onBecomeStale_ = function onBecomeStale_() {
      this.schedule_();
    };

    _proto.schedule_ = function schedule_() {
      if (!this.isScheduled_) {
        this.isScheduled_ = true;
        globalState.pendingReactions.push(this);
        runReactions();
      }
    };

    _proto.isScheduled = function isScheduled() {
      return this.isScheduled_;
    }
    /**
     * internal, use schedule() if you intend to kick off a reaction
     */
    ;

    _proto.runReaction_ = function runReaction_() {
      if (!this.isDisposed_) {
        startBatch();
        this.isScheduled_ = false;
        var prev = globalState.trackingContext;
        globalState.trackingContext = this;

        if (shouldCompute(this)) {
          this.isTrackPending_ = true;

          try {
            this.onInvalidate_();

            if ("development" !== "production" && this.isTrackPending_ && isSpyEnabled()) {
              // onInvalidate didn't trigger track right away..
              spyReport({
                name: this.name_,
                type: "scheduled-reaction"
              });
            }
          } catch (e) {
            this.reportExceptionInDerivation_(e);
          }
        }

        globalState.trackingContext = prev;
        endBatch();
      }
    };

    _proto.track = function track(fn) {
      if (this.isDisposed_) {
        return; // console.warn("Reaction already disposed") // Note: Not a warning / error in mobx 4 either
      }

      startBatch();
      var notify = isSpyEnabled();
      var startTime;

      if (notify) {
        startTime = Date.now();
        spyReportStart({
          name: this.name_,
          type: "reaction"
        });
      }

      this.isRunning_ = true;
      var prevReaction = globalState.trackingContext; // reactions could create reactions...

      globalState.trackingContext = this;
      var result = trackDerivedFunction(this, fn, undefined);
      globalState.trackingContext = prevReaction;
      this.isRunning_ = false;
      this.isTrackPending_ = false;

      if (this.isDisposed_) {
        // disposed during last run. Clean up everything that was bound after the dispose call.
        clearObserving(this);
      }

      if (isCaughtException(result)) this.reportExceptionInDerivation_(result.cause);

      if (notify) {
        spyReportEnd({
          time: Date.now() - startTime
        });
      }

      endBatch();
    };

    _proto.reportExceptionInDerivation_ = function reportExceptionInDerivation_(error) {
      var _this = this;

      if (this.errorHandler_) {
        this.errorHandler_(error, this);
        return;
      }

      if (globalState.disableErrorBoundaries) throw error;
      var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'" ;

      if (!globalState.suppressReactionErrors) {
        console.error(message, error);
        /** If debugging brought you here, please, read the above message :-). Tnx! */
      } else console.warn("[mobx] (error in reaction '" + this.name_ + "' suppressed, fix error of causing action below)"); // prettier-ignore


      if (isSpyEnabled()) {
        spyReport({
          type: "error",
          name: this.name_,
          message: message,
          error: "" + error
        });
      }

      globalState.globalReactionErrorHandlers.forEach(function (f) {
        return f(error, _this);
      });
    };

    _proto.dispose = function dispose() {
      if (!this.isDisposed_) {
        this.isDisposed_ = true;

        if (!this.isRunning_) {
          // if disposed while running, clean up later. Maybe not optimal, but rare case
          startBatch();
          clearObserving(this);
          endBatch();
        }
      }
    };

    _proto.getDisposer_ = function getDisposer_() {
      var r = this.dispose.bind(this);
      r[$mobx] = this;
      return r;
    };

    _proto.toString = function toString() {
      return "Reaction[" + this.name_ + "]";
    };

    _proto.trace = function trace$1(enterBreakPoint) {
      if (enterBreakPoint === void 0) {
        enterBreakPoint = false;
      }

      trace(this, enterBreakPoint);
    };

    return Reaction;
  }();
  /**
   * Magic number alert!
   * Defines within how many times a reaction is allowed to re-trigger itself
   * until it is assumed that this is gonna be a never ending loop...
   */

  var MAX_REACTION_ITERATIONS = 100;

  var reactionScheduler = function reactionScheduler(f) {
    return f();
  };

  function runReactions() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if (globalState.inBatch > 0 || globalState.isRunningReactions) return;
    reactionScheduler(runReactionsHelper);
  }

  function runReactionsHelper() {
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0; // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.

    while (allReactions.length > 0) {
      if (++iterations === MAX_REACTION_ITERATIONS) {
        console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." + (" Probably there is a cycle in the reactive function: " + allReactions[0]) );
        allReactions.splice(0); // clear reactions
      }

      var remainingReactions = allReactions.splice(0);

      for (var i = 0, l = remainingReactions.length; i < l; i++) {
        remainingReactions[i].runReaction_();
      }
    }

    globalState.isRunningReactions = false;
  }

  var isReaction = /*#__PURE__*/createInstanceofPredicate("Reaction", Reaction);

  function isSpyEnabled() {
    return !!globalState.spyListeners.length;
  }
  function spyReport(event) {

    if (!globalState.spyListeners.length) return;
    var listeners = globalState.spyListeners;

    for (var i = 0, l = listeners.length; i < l; i++) {
      listeners[i](event);
    }
  }
  function spyReportStart(event) {

    var change = _extends({}, event, {
      spyReportStart: true
    });

    spyReport(change);
  }
  var END_EVENT = {
    type: "report-end",
    spyReportEnd: true
  };
  function spyReportEnd(change) {
    if (change) spyReport(_extends({}, change, {
      type: "report-end",
      spyReportEnd: true
    }));else spyReport(END_EVENT);
  }
  function spy(listener) {
    {
      globalState.spyListeners.push(listener);
      return once(function () {
        globalState.spyListeners = globalState.spyListeners.filter(function (l) {
          return l !== listener;
        });
      });
    }
  }

  var ACTION = "action";
  var ACTION_BOUND = "action.bound";
  var AUTOACTION = "autoAction";
  var AUTOACTION_BOUND = "autoAction.bound";
  var DEFAULT_ACTION_NAME = "<unnamed action>";
  var actionAnnotation = /*#__PURE__*/createActionAnnotation(ACTION);
  var actionBoundAnnotation = /*#__PURE__*/createActionAnnotation(ACTION_BOUND, {
    bound: true
  });
  var autoActionAnnotation = /*#__PURE__*/createActionAnnotation(AUTOACTION, {
    autoAction: true
  });
  var autoActionBoundAnnotation = /*#__PURE__*/createActionAnnotation(AUTOACTION_BOUND, {
    autoAction: true,
    bound: true
  });

  function createActionFactory(autoAction) {
    var res = function action(arg1, arg2) {
      // action(fn() {})
      if (isFunction(arg1)) return createAction(arg1.name || DEFAULT_ACTION_NAME, arg1, autoAction); // action("name", fn() {})

      if (isFunction(arg2)) return createAction(arg1, arg2, autoAction); // @action

      if (isStringish(arg2)) {
        return storeAnnotation(arg1, arg2, autoAction ? autoActionAnnotation : actionAnnotation);
      } // action("name") & @action("name")


      if (isStringish(arg1)) {
        return createDecoratorAnnotation(createActionAnnotation(autoAction ? AUTOACTION : ACTION, {
          name: arg1,
          autoAction: autoAction
        }));
      }

      die("Invalid arguments for `action`");
    };

    return res;
  }

  var action = /*#__PURE__*/createActionFactory(false);
  Object.assign(action, actionAnnotation);
  var autoAction = /*#__PURE__*/createActionFactory(true);
  Object.assign(autoAction, autoActionAnnotation);
  action.bound = /*#__PURE__*/createDecoratorAnnotation(actionBoundAnnotation);
  autoAction.bound = /*#__PURE__*/createDecoratorAnnotation(autoActionBoundAnnotation);
  function isAction(thing) {
    return isFunction(thing) && thing.isMobxAction === true;
  }

  /**
   * Creates a named reactive view and keeps it alive, so that the view is always
   * updated if one of the dependencies changes, even when the view is not further used by something else.
   * @param view The reactive view
   * @returns disposer function, which can be used to stop the view from being updated in the future.
   */

  function autorun(view, opts) {
    var _opts$name, _opts;

    if (opts === void 0) {
      opts = EMPTY_OBJECT;
    }

    {
      if (!isFunction(view)) die("Autorun expects a function as first argument");
      if (isAction(view)) die("Autorun does not accept actions since actions are untrackable");
    }

    var name = (_opts$name = (_opts = opts) == null ? void 0 : _opts.name) != null ? _opts$name : view.name || "Autorun@" + getNextId() ;
    var runSync = !opts.scheduler && !opts.delay;
    var reaction;

    if (runSync) {
      // normal autorun
      reaction = new Reaction(name, function () {
        this.track(reactionRunner);
      }, opts.onError, opts.requiresObservable);
    } else {
      var scheduler = createSchedulerFromOptions(opts); // debounced autorun

      var isScheduled = false;
      reaction = new Reaction(name, function () {
        if (!isScheduled) {
          isScheduled = true;
          scheduler(function () {
            isScheduled = false;
            if (!reaction.isDisposed_) reaction.track(reactionRunner);
          });
        }
      }, opts.onError, opts.requiresObservable);
    }

    function reactionRunner() {
      view(reaction);
    }

    reaction.schedule_();
    return reaction.getDisposer_();
  }

  var run = function run(f) {
    return f();
  };

  function createSchedulerFromOptions(opts) {
    return opts.scheduler ? opts.scheduler : opts.delay ? function (f) {
      return setTimeout(f, opts.delay);
    } : run;
  }

  var ON_BECOME_OBSERVED = "onBO";
  var ON_BECOME_UNOBSERVED = "onBUO";
  function onBecomeObserved(thing, arg2, arg3) {
    return interceptHook(ON_BECOME_OBSERVED, thing, arg2, arg3);
  }
  function onBecomeUnobserved(thing, arg2, arg3) {
    return interceptHook(ON_BECOME_UNOBSERVED, thing, arg2, arg3);
  }

  function interceptHook(hook, thing, arg2, arg3) {
    var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
    var cb = isFunction(arg3) ? arg3 : arg2;
    var listenersKey = hook + "L";

    if (atom[listenersKey]) {
      atom[listenersKey].add(cb);
    } else {
      atom[listenersKey] = new Set([cb]);
    }

    return function () {
      var hookListeners = atom[listenersKey];

      if (hookListeners) {
        hookListeners["delete"](cb);

        if (hookListeners.size === 0) {
          delete atom[listenersKey];
        }
      }
    };
  }

  function extendObservable(target, properties, annotations, options) {
    {
      if (arguments.length > 4) die("'extendObservable' expected 2-4 arguments");
      if (typeof target !== "object") die("'extendObservable' expects an object as first argument");
      if (isObservableMap(target)) die("'extendObservable' should not be used on maps, use map.merge instead");
      if (!isPlainObject(properties)) die("'extendObservabe' only accepts plain objects as second argument");
      if (isObservable(properties) || isObservable(annotations)) die("Extending an object with another observable (object) is not supported");
    } // Pull descriptors first, so we don't have to deal with props added by administration ($mobx)


    var descriptors = getOwnPropertyDescriptors(properties);
    var adm = asObservableObject(target, options)[$mobx];
    startBatch();

    try {
      ownKeys(descriptors).forEach(function (key) {
        adm.extend_(key, descriptors[key], // must pass "undefined" for { key: undefined }
        !annotations ? true : key in annotations ? annotations[key] : true);
      });
    } finally {
      endBatch();
    }

    return target;
  }

  function getDependencyTree(thing, property) {
    return nodeToDependencyTree(getAtom(thing, property));
  }

  function nodeToDependencyTree(node) {
    var result = {
      name: node.name_
    };
    if (node.observing_ && node.observing_.length > 0) result.dependencies = unique(node.observing_).map(nodeToDependencyTree);
    return result;
  }

  function unique(list) {
    return Array.from(new Set(list));
  }

  var generatorId = 0;
  function FlowCancellationError() {
    this.message = "FLOW_CANCELLED";
  }
  FlowCancellationError.prototype = /*#__PURE__*/Object.create(Error.prototype);
  var flowAnnotation = /*#__PURE__*/createFlowAnnotation("flow");
  var flow = /*#__PURE__*/Object.assign(function flow(arg1, arg2) {
    // @flow
    if (isStringish(arg2)) {
      return storeAnnotation(arg1, arg2, flowAnnotation);
    } // flow(fn)


    if (arguments.length !== 1) die("Flow expects single argument with generator function");
    var generator = arg1;
    var name = generator.name || "<unnamed flow>"; // Implementation based on https://github.com/tj/co/blob/master/index.js

    var res = function res() {
      var ctx = this;
      var args = arguments;
      var runId = ++generatorId;
      var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
      var rejector;
      var pendingPromise = undefined;
      var promise = new Promise(function (resolve, reject) {
        var stepId = 0;
        rejector = reject;

        function onFulfilled(res) {
          pendingPromise = undefined;
          var ret;

          try {
            ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
          } catch (e) {
            return reject(e);
          }

          next(ret);
        }

        function onRejected(err) {
          pendingPromise = undefined;
          var ret;

          try {
            ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen["throw"]).call(gen, err);
          } catch (e) {
            return reject(e);
          }

          next(ret);
        }

        function next(ret) {
          if (isFunction(ret == null ? void 0 : ret.then)) {
            // an async iterator
            ret.then(next, reject);
            return;
          }

          if (ret.done) return resolve(ret.value);
          pendingPromise = Promise.resolve(ret.value);
          return pendingPromise.then(onFulfilled, onRejected);
        }

        onFulfilled(undefined); // kick off the process
      });
      promise.cancel = action(name + " - runid: " + runId + " - cancel", function () {
        try {
          if (pendingPromise) cancelPromise(pendingPromise); // Finally block can return (or yield) stuff..

          var _res = gen["return"](undefined); // eat anything that promise would do, it's cancelled!


          var yieldedPromise = Promise.resolve(_res.value);
          yieldedPromise.then(noop, noop);
          cancelPromise(yieldedPromise); // maybe it can be cancelled :)
          // reject our original promise

          rejector(new FlowCancellationError());
        } catch (e) {
          rejector(e); // there could be a throwing finally block
        }
      });
      return promise;
    };

    res.isMobXFlow = true;
    return res;
  }, flowAnnotation);

  function cancelPromise(promise) {
    if (isFunction(promise.cancel)) promise.cancel();
  }
  function isFlow(fn) {
    return (fn == null ? void 0 : fn.isMobXFlow) === true;
  }

  function _isObservable(value, property) {
    if (!value) return false;

    if (property !== undefined) {
      if ((isObservableMap(value) || isObservableArray(value))) return die("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");

      if (isObservableObject(value)) {
        return value[$mobx].values_.has(property);
      }

      return false;
    } // For first check, see #701


    return isObservableObject(value) || !!value[$mobx] || isAtom(value) || isReaction(value) || isComputedValue(value);
  }

  function isObservable(value) {
    if (arguments.length !== 1) die("isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isObservable(value);
  }

  function trace() {
    var enterBreakPoint = false;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[args.length - 1] === "boolean") enterBreakPoint = args.pop();
    var derivation = getAtomFromArgs(args);

    if (!derivation) {
      return die("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    }

    if (derivation.isTracing_ === TraceMode.NONE) {
      console.log("[mobx.trace] '" + derivation.name_ + "' tracing enabled");
    }

    derivation.isTracing_ = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
  }

  function getAtomFromArgs(args) {
    switch (args.length) {
      case 0:
        return globalState.trackingDerivation;

      case 1:
        return getAtom(args[0]);

      case 2:
        return getAtom(args[0], args[1]);
    }
  }

  /**
   * During a transaction no views are updated until the end of the transaction.
   * The transaction will be run synchronously nonetheless.
   *
   * @param action a function that updates some reactive state
   * @returns any value that was returned by the 'action' parameter.
   */

  function transaction(action, thisArg) {
    if (thisArg === void 0) {
      thisArg = undefined;
    }

    startBatch();

    try {
      return action.apply(thisArg);
    } finally {
      endBatch();
    }
  }

  function getAdm(target) {
    return target[$mobx];
  } // Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
  // and skip either the internal values map, or the base object with its property descriptors!


  var objectProxyTraps = {
    has: function has(target, name) {
      if (globalState.trackingDerivation) warnAboutProxyRequirement("detect new properties using the 'in' operator. Use 'has' from 'mobx' instead.");
      return getAdm(target).has_(name);
    },
    get: function get(target, name) {
      return getAdm(target).get_(name);
    },
    set: function set(target, name, value) {
      var _getAdm$set_;

      if (!isStringish(name)) return false;

      if (!getAdm(target).values_.has(name)) {
        warnAboutProxyRequirement("add a new observable property through direct assignment. Use 'set' from 'mobx' instead.");
      } // null (intercepted) -> true (success)


      return (_getAdm$set_ = getAdm(target).set_(name, value, true)) != null ? _getAdm$set_ : true;
    },
    deleteProperty: function deleteProperty(target, name) {
      var _getAdm$delete_;

      {
        warnAboutProxyRequirement("delete properties from an observable object. Use 'remove' from 'mobx' instead.");
      }

      if (!isStringish(name)) return false; // null (intercepted) -> true (success)

      return (_getAdm$delete_ = getAdm(target).delete_(name, true)) != null ? _getAdm$delete_ : true;
    },
    defineProperty: function defineProperty(target, name, descriptor) {
      var _getAdm$definePropert;

      {
        warnAboutProxyRequirement("define property on an observable object. Use 'defineProperty' from 'mobx' instead.");
      } // null (intercepted) -> true (success)


      return (_getAdm$definePropert = getAdm(target).defineProperty_(name, descriptor)) != null ? _getAdm$definePropert : true;
    },
    ownKeys: function ownKeys(target) {
      if (globalState.trackingDerivation) warnAboutProxyRequirement("iterate keys to detect added / removed properties. Use `keys` from 'mobx' instead.");
      return getAdm(target).ownKeys_();
    },
    preventExtensions: function preventExtensions(target) {
      die(13);
    }
  };
  function asDynamicObservableObject(target, options) {
    var _target$$mobx, _target$$mobx$proxy_;

    assertProxies();
    target = asObservableObject(target, options);
    return (_target$$mobx$proxy_ = (_target$$mobx = target[$mobx]).proxy_) != null ? _target$$mobx$proxy_ : _target$$mobx.proxy_ = new Proxy(target, objectProxyTraps);
  }

  function hasInterceptors(interceptable) {
    return interceptable.interceptors_ !== undefined && interceptable.interceptors_.length > 0;
  }
  function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors_ || (interceptable.interceptors_ = []);
    interceptors.push(handler);
    return once(function () {
      var idx = interceptors.indexOf(handler);
      if (idx !== -1) interceptors.splice(idx, 1);
    });
  }
  function interceptChange(interceptable, change) {
    var prevU = untrackedStart();

    try {
      // Interceptor can modify the array, copy it to avoid concurrent modification, see #1950
      var interceptors = [].concat(interceptable.interceptors_ || []);

      for (var i = 0, l = interceptors.length; i < l; i++) {
        change = interceptors[i](change);
        if (change && !change.type) die(14);
        if (!change) break;
      }

      return change;
    } finally {
      untrackedEnd(prevU);
    }
  }

  function hasListeners(listenable) {
    return listenable.changeListeners_ !== undefined && listenable.changeListeners_.length > 0;
  }
  function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners_ || (listenable.changeListeners_ = []);
    listeners.push(handler);
    return once(function () {
      var idx = listeners.indexOf(handler);
      if (idx !== -1) listeners.splice(idx, 1);
    });
  }
  function notifyListeners(listenable, change) {
    var prevU = untrackedStart();
    var listeners = listenable.changeListeners_;
    if (!listeners) return;
    listeners = listeners.slice();

    for (var i = 0, l = listeners.length; i < l; i++) {
      listeners[i](change);
    }

    untrackedEnd(prevU);
  }

  function makeObservable(target, annotations, options) {
    var adm = asObservableObject(target, options)[$mobx];
    startBatch();

    try {
      var _annotations;

      // Default to decorators
      (_annotations = annotations) != null ? _annotations : annotations = collectStoredAnnotations(target); // Annotate

      ownKeys(annotations).forEach(function (key) {
        return adm.make_(key, annotations[key]);
      });
    } finally {
      endBatch();
    }

    return target;
  } // proto[keysSymbol] = new Set<PropertyKey>()

  var SPLICE = "splice";
  var UPDATE = "update";
  var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859

  var arrayTraps = {
    get: function get(target, name) {
      var adm = target[$mobx];
      if (name === $mobx) return adm;
      if (name === "length") return adm.getArrayLength_();

      if (typeof name === "string" && !isNaN(name)) {
        return adm.get_(parseInt(name));
      }

      if (hasProp(arrayExtensions, name)) {
        return arrayExtensions[name];
      }

      return target[name];
    },
    set: function set(target, name, value) {
      var adm = target[$mobx];

      if (name === "length") {
        adm.setArrayLength_(value);
      }

      if (typeof name === "symbol" || isNaN(name)) {
        target[name] = value;
      } else {
        // numeric string
        adm.set_(parseInt(name), value);
      }

      return true;
    },
    preventExtensions: function preventExtensions() {
      die(15);
    }
  };
  var ObservableArrayAdministration = /*#__PURE__*/function () {
    // this is the prop that gets proxied, so can't replace it!
    function ObservableArrayAdministration(name, enhancer, owned_, legacyMode_) {
      if (name === void 0) {
        name = "ObservableArray@" + getNextId() ;
      }

      this.owned_ = void 0;
      this.legacyMode_ = void 0;
      this.atom_ = void 0;
      this.values_ = [];
      this.interceptors_ = void 0;
      this.changeListeners_ = void 0;
      this.enhancer_ = void 0;
      this.dehancer = void 0;
      this.proxy_ = void 0;
      this.lastKnownLength_ = 0;
      this.owned_ = owned_;
      this.legacyMode_ = legacyMode_;
      this.atom_ = new Atom(name);

      this.enhancer_ = function (newV, oldV) {
        return enhancer(newV, oldV, name + "[..]" );
      };
    }

    var _proto = ObservableArrayAdministration.prototype;

    _proto.dehanceValue_ = function dehanceValue_(value) {
      if (this.dehancer !== undefined) return this.dehancer(value);
      return value;
    };

    _proto.dehanceValues_ = function dehanceValues_(values) {
      if (this.dehancer !== undefined && values.length > 0) return values.map(this.dehancer);
      return values;
    };

    _proto.intercept_ = function intercept_(handler) {
      return registerInterceptor(this, handler);
    };

    _proto.observe_ = function observe_(listener, fireImmediately) {
      if (fireImmediately === void 0) {
        fireImmediately = false;
      }

      if (fireImmediately) {
        listener({
          observableKind: "array",
          object: this.proxy_,
          debugObjectName: this.atom_.name_,
          type: "splice",
          index: 0,
          added: this.values_.slice(),
          addedCount: this.values_.length,
          removed: [],
          removedCount: 0
        });
      }

      return registerListener(this, listener);
    };

    _proto.getArrayLength_ = function getArrayLength_() {
      this.atom_.reportObserved();
      return this.values_.length;
    };

    _proto.setArrayLength_ = function setArrayLength_(newLength) {
      if (typeof newLength !== "number" || newLength < 0) die("Out of range: " + newLength);
      var currentLength = this.values_.length;
      if (newLength === currentLength) return;else if (newLength > currentLength) {
        var newItems = new Array(newLength - currentLength);

        for (var i = 0; i < newLength - currentLength; i++) {
          newItems[i] = undefined;
        } // No Array.fill everywhere...


        this.spliceWithArray_(currentLength, 0, newItems);
      } else this.spliceWithArray_(newLength, currentLength - newLength);
    };

    _proto.updateArrayLength_ = function updateArrayLength_(oldLength, delta) {
      if (oldLength !== this.lastKnownLength_) die(16);
      this.lastKnownLength_ += delta;
      if (this.legacyMode_ && delta > 0) reserveArrayBuffer(oldLength + delta + 1);
    };

    _proto.spliceWithArray_ = function spliceWithArray_(index, deleteCount, newItems) {
      var _this = this;

      checkIfStateModificationsAreAllowed(this.atom_);
      var length = this.values_.length;
      if (index === undefined) index = 0;else if (index > length) index = length;else if (index < 0) index = Math.max(0, length + index);
      if (arguments.length === 1) deleteCount = length - index;else if (deleteCount === undefined || deleteCount === null) deleteCount = 0;else deleteCount = Math.max(0, Math.min(deleteCount, length - index));
      if (newItems === undefined) newItems = EMPTY_ARRAY;

      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_,
          type: SPLICE,
          index: index,
          removedCount: deleteCount,
          added: newItems
        });
        if (!change) return EMPTY_ARRAY;
        deleteCount = change.removedCount;
        newItems = change.added;
      }

      newItems = newItems.length === 0 ? newItems : newItems.map(function (v) {
        return _this.enhancer_(v, undefined);
      });

      if (this.legacyMode_ || "development" !== "production") {
        var lengthDelta = newItems.length - deleteCount;
        this.updateArrayLength_(length, lengthDelta); // checks if internal array wasn't modified
      }

      var res = this.spliceItemsIntoValues_(index, deleteCount, newItems);
      if (deleteCount !== 0 || newItems.length !== 0) this.notifyArraySplice_(index, newItems, res);
      return this.dehanceValues_(res);
    };

    _proto.spliceItemsIntoValues_ = function spliceItemsIntoValues_(index, deleteCount, newItems) {
      if (newItems.length < MAX_SPLICE_SIZE) {
        var _this$values_;

        return (_this$values_ = this.values_).splice.apply(_this$values_, [index, deleteCount].concat(newItems));
      } else {
        var res = this.values_.slice(index, index + deleteCount);
        var oldItems = this.values_.slice(index + deleteCount);
        this.values_.length = index + newItems.length - deleteCount;

        for (var i = 0; i < newItems.length; i++) {
          this.values_[index + i] = newItems[i];
        }

        for (var _i = 0; _i < oldItems.length; _i++) {
          this.values_[index + newItems.length + _i] = oldItems[_i];
        }

        return res;
      }
    };

    _proto.notifyArrayChildUpdate_ = function notifyArrayChildUpdate_(index, newValue, oldValue) {
      var notifySpy = !this.owned_ && isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "array",
        object: this.proxy_,
        type: UPDATE,
        debugObjectName: this.atom_.name_,
        index: index,
        newValue: newValue,
        oldValue: oldValue
      } : null; // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
      // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled

      if (notifySpy) spyReportStart(change);
      this.atom_.reportChanged();
      if (notify) notifyListeners(this, change);
      if (notifySpy) spyReportEnd();
    };

    _proto.notifyArraySplice_ = function notifyArraySplice_(index, added, removed) {
      var notifySpy = !this.owned_ && isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "array",
        object: this.proxy_,
        debugObjectName: this.atom_.name_,
        type: SPLICE,
        index: index,
        removed: removed,
        added: added,
        removedCount: removed.length,
        addedCount: added.length
      } : null;
      if (notifySpy) spyReportStart(change);
      this.atom_.reportChanged(); // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe

      if (notify) notifyListeners(this, change);
      if (notifySpy) spyReportEnd();
    };

    _proto.get_ = function get_(index) {
      if (index < this.values_.length) {
        this.atom_.reportObserved();
        return this.dehanceValue_(this.values_[index]);
      }

      console.warn("[mobx] Out of bounds read: " + index );
    };

    _proto.set_ = function set_(index, newValue) {
      var values = this.values_;

      if (index < values.length) {
        // update at index in range
        checkIfStateModificationsAreAllowed(this.atom_);
        var oldValue = values[index];

        if (hasInterceptors(this)) {
          var change = interceptChange(this, {
            type: UPDATE,
            object: this.proxy_,
            index: index,
            newValue: newValue
          });
          if (!change) return;
          newValue = change.newValue;
        }

        newValue = this.enhancer_(newValue, oldValue);
        var changed = newValue !== oldValue;

        if (changed) {
          values[index] = newValue;
          this.notifyArrayChildUpdate_(index, newValue, oldValue);
        }
      } else if (index === values.length) {
        // add a new item
        this.spliceWithArray_(index, 0, [newValue]);
      } else {
        // out of bounds
        die(17, index, values.length);
      }
    };

    return ObservableArrayAdministration;
  }();
  function createObservableArray(initialValues, enhancer, name, owned) {
    if (name === void 0) {
      name = "ObservableArray@" + getNextId() ;
    }

    if (owned === void 0) {
      owned = false;
    }

    assertProxies();
    var adm = new ObservableArrayAdministration(name, enhancer, owned, false);
    addHiddenFinalProp(adm.values_, $mobx, adm);
    var proxy = new Proxy(adm.values_, arrayTraps);
    adm.proxy_ = proxy;

    if (initialValues && initialValues.length) {
      var prev = allowStateChangesStart(true);
      adm.spliceWithArray_(0, 0, initialValues);
      allowStateChangesEnd(prev);
    }

    return proxy;
  } // eslint-disable-next-line

  var arrayExtensions = {
    clear: function clear() {
      return this.splice(0);
    },
    replace: function replace(newItems) {
      var adm = this[$mobx];
      return adm.spliceWithArray_(0, adm.values_.length, newItems);
    },
    // Used by JSON.stringify
    toJSON: function toJSON() {
      return this.slice();
    },

    /*
     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
     * since these functions alter the inner structure of the array, the have side effects.
     * Because the have side effects, they should not be used in computed function,
     * and for that reason the do not call dependencyState.notifyObserved
     */
    splice: function splice(index, deleteCount) {
      for (var _len = arguments.length, newItems = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        newItems[_key - 2] = arguments[_key];
      }

      var adm = this[$mobx];

      switch (arguments.length) {
        case 0:
          return [];

        case 1:
          return adm.spliceWithArray_(index);

        case 2:
          return adm.spliceWithArray_(index, deleteCount);
      }

      return adm.spliceWithArray_(index, deleteCount, newItems);
    },
    spliceWithArray: function spliceWithArray(index, deleteCount, newItems) {
      return this[$mobx].spliceWithArray_(index, deleteCount, newItems);
    },
    push: function push() {
      var adm = this[$mobx];

      for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        items[_key2] = arguments[_key2];
      }

      adm.spliceWithArray_(adm.values_.length, 0, items);
      return adm.values_.length;
    },
    pop: function pop() {
      return this.splice(Math.max(this[$mobx].values_.length - 1, 0), 1)[0];
    },
    shift: function shift() {
      return this.splice(0, 1)[0];
    },
    unshift: function unshift() {
      var adm = this[$mobx];

      for (var _len3 = arguments.length, items = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        items[_key3] = arguments[_key3];
      }

      adm.spliceWithArray_(0, 0, items);
      return adm.values_.length;
    },
    reverse: function reverse() {
      // reverse by default mutates in place before returning the result
      // which makes it both a 'derivation' and a 'mutation'.
      if (globalState.trackingDerivation) {
        die(37, "reverse");
      }

      this.replace(this.slice().reverse());
      return this;
    },
    sort: function sort() {
      // sort by default mutates in place before returning the result
      // which goes against all good practices. Let's not change the array in place!
      if (globalState.trackingDerivation) {
        die(37, "sort");
      }

      var copy = this.slice();
      copy.sort.apply(copy, arguments);
      this.replace(copy);
      return this;
    },
    remove: function remove(value) {
      var adm = this[$mobx];
      var idx = adm.dehanceValues_(adm.values_).indexOf(value);

      if (idx > -1) {
        this.splice(idx, 1);
        return true;
      }

      return false;
    }
  };
  /**
   * Wrap function from prototype
   * Without this, everything works as well, but this works
   * faster as everything works on unproxied values
   */

  addArrayExtension("concat", simpleFunc);
  addArrayExtension("flat", simpleFunc);
  addArrayExtension("includes", simpleFunc);
  addArrayExtension("indexOf", simpleFunc);
  addArrayExtension("join", simpleFunc);
  addArrayExtension("lastIndexOf", simpleFunc);
  addArrayExtension("slice", simpleFunc);
  addArrayExtension("toString", simpleFunc);
  addArrayExtension("toLocaleString", simpleFunc); // map

  addArrayExtension("every", mapLikeFunc);
  addArrayExtension("filter", mapLikeFunc);
  addArrayExtension("find", mapLikeFunc);
  addArrayExtension("findIndex", mapLikeFunc);
  addArrayExtension("flatMap", mapLikeFunc);
  addArrayExtension("forEach", mapLikeFunc);
  addArrayExtension("map", mapLikeFunc);
  addArrayExtension("some", mapLikeFunc); // reduce

  addArrayExtension("reduce", reduceLikeFunc);
  addArrayExtension("reduceRight", reduceLikeFunc);

  function addArrayExtension(funcName, funcFactory) {
    if (typeof Array.prototype[funcName] === "function") {
      arrayExtensions[funcName] = funcFactory(funcName);
    }
  } // Report and delegate to dehanced array


  function simpleFunc(funcName) {
    return function () {
      var adm = this[$mobx];
      adm.atom_.reportObserved();
      var dehancedValues = adm.dehanceValues_(adm.values_);
      return dehancedValues[funcName].apply(dehancedValues, arguments);
    };
  } // Make sure callbacks recieve correct array arg #2326


  function mapLikeFunc(funcName) {
    return function (callback, thisArg) {
      var _this2 = this;

      var adm = this[$mobx];
      adm.atom_.reportObserved();
      var dehancedValues = adm.dehanceValues_(adm.values_);
      return dehancedValues[funcName](function (element, index) {
        return callback.call(thisArg, element, index, _this2);
      });
    };
  } // Make sure callbacks recieve correct array arg #2326


  function reduceLikeFunc(funcName) {
    return function () {
      var _this3 = this;

      var adm = this[$mobx];
      adm.atom_.reportObserved();
      var dehancedValues = adm.dehanceValues_(adm.values_); // #2432 - reduce behavior depends on arguments.length

      var callback = arguments[0];

      arguments[0] = function (accumulator, currentValue, index) {
        return callback(accumulator, currentValue, index, _this3);
      };

      return dehancedValues[funcName].apply(dehancedValues, arguments);
    };
  }

  var isObservableArrayAdministration = /*#__PURE__*/createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
  function isObservableArray(thing) {
    return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
  }

  var _Symbol$iterator, _Symbol$toStringTag;
  var ObservableMapMarker = {};
  var ADD = "add";
  var DELETE = "delete"; // just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
  // But: https://github.com/mobxjs/mobx/issues/1556

  _Symbol$iterator = Symbol.iterator;
  _Symbol$toStringTag = Symbol.toStringTag;
  var ObservableMap = /*#__PURE__*/function () {
    // hasMap, not hashMap >-).
    function ObservableMap(initialData, enhancer_, name_) {
      if (enhancer_ === void 0) {
        enhancer_ = deepEnhancer;
      }

      if (name_ === void 0) {
        name_ = "ObservableMap@" + getNextId() ;
      }

      this.enhancer_ = void 0;
      this.name_ = void 0;
      this[$mobx] = ObservableMapMarker;
      this.data_ = void 0;
      this.hasMap_ = void 0;
      this.keysAtom_ = void 0;
      this.interceptors_ = void 0;
      this.changeListeners_ = void 0;
      this.dehancer = void 0;
      this.enhancer_ = enhancer_;
      this.name_ = name_;

      if (!isFunction(Map)) {
        die(18);
      }

      this.keysAtom_ = createAtom(this.name_ + ".keys()" );
      this.data_ = new Map();
      this.hasMap_ = new Map();
      this.merge(initialData);
    }

    var _proto = ObservableMap.prototype;

    _proto.has_ = function has_(key) {
      return this.data_.has(key);
    };

    _proto.has = function has(key) {
      var _this = this;

      if (!globalState.trackingDerivation) return this.has_(key);
      var entry = this.hasMap_.get(key);

      if (!entry) {
        var newEntry = entry = new ObservableValue(this.has_(key), referenceEnhancer, this.name_ + "." + stringifyKey(key) + "?" , false);
        this.hasMap_.set(key, newEntry);
        onBecomeUnobserved(newEntry, function () {
          return _this.hasMap_["delete"](key);
        });
      }

      return entry.get();
    };

    _proto.set = function set(key, value) {
      var hasKey = this.has_(key);

      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: hasKey ? UPDATE : ADD,
          object: this,
          newValue: value,
          name: key
        });
        if (!change) return this;
        value = change.newValue;
      }

      if (hasKey) {
        this.updateValue_(key, value);
      } else {
        this.addValue_(key, value);
      }

      return this;
    };

    _proto["delete"] = function _delete(key) {
      var _this2 = this;

      checkIfStateModificationsAreAllowed(this.keysAtom_);

      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: DELETE,
          object: this,
          name: key
        });
        if (!change) return false;
      }

      if (this.has_(key)) {
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);

        var _change = notify || notifySpy ? {
          observableKind: "map",
          debugObjectName: this.name_,
          type: DELETE,
          object: this,
          oldValue: this.data_.get(key).value_,
          name: key
        } : null;

        if (notifySpy) spyReportStart(_change);
        transaction(function () {
          _this2.keysAtom_.reportChanged();

          _this2.updateHasMapEntry_(key, false);

          var observable = _this2.data_.get(key);

          observable.setNewValue_(undefined);

          _this2.data_["delete"](key);
        });
        if (notify) notifyListeners(this, _change);
        if (notifySpy) spyReportEnd();
        return true;
      }

      return false;
    };

    _proto.updateHasMapEntry_ = function updateHasMapEntry_(key, value) {
      var entry = this.hasMap_.get(key);

      if (entry) {
        entry.setNewValue_(value);
      }
    };

    _proto.updateValue_ = function updateValue_(key, newValue) {
      var observable = this.data_.get(key);
      newValue = observable.prepareNewValue_(newValue);

      if (newValue !== globalState.UNCHANGED) {
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy ? {
          observableKind: "map",
          debugObjectName: this.name_,
          type: UPDATE,
          object: this,
          oldValue: observable.value_,
          name: key,
          newValue: newValue
        } : null;
        if (notifySpy) spyReportStart(change);
        observable.setNewValue_(newValue);
        if (notify) notifyListeners(this, change);
        if (notifySpy) spyReportEnd();
      }
    };

    _proto.addValue_ = function addValue_(key, newValue) {
      var _this3 = this;

      checkIfStateModificationsAreAllowed(this.keysAtom_);
      transaction(function () {
        var observable = new ObservableValue(newValue, _this3.enhancer_, _this3.name_ + "." + stringifyKey(key) , false);

        _this3.data_.set(key, observable);

        newValue = observable.value_; // value might have been changed

        _this3.updateHasMapEntry_(key, true);

        _this3.keysAtom_.reportChanged();
      });
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: ADD,
        object: this,
        name: key,
        newValue: newValue
      } : null;
      if (notifySpy) spyReportStart(change);
      if (notify) notifyListeners(this, change);
      if (notifySpy) spyReportEnd();
    };

    _proto.get = function get(key) {
      if (this.has(key)) return this.dehanceValue_(this.data_.get(key).get());
      return this.dehanceValue_(undefined);
    };

    _proto.dehanceValue_ = function dehanceValue_(value) {
      if (this.dehancer !== undefined) {
        return this.dehancer(value);
      }

      return value;
    };

    _proto.keys = function keys() {
      this.keysAtom_.reportObserved();
      return this.data_.keys();
    };

    _proto.values = function values() {
      var self = this;
      var keys = this.keys();
      return makeIterable({
        next: function next() {
          var _keys$next = keys.next(),
              done = _keys$next.done,
              value = _keys$next.value;

          return {
            done: done,
            value: done ? undefined : self.get(value)
          };
        }
      });
    };

    _proto.entries = function entries() {
      var self = this;
      var keys = this.keys();
      return makeIterable({
        next: function next() {
          var _keys$next2 = keys.next(),
              done = _keys$next2.done,
              value = _keys$next2.value;

          return {
            done: done,
            value: done ? undefined : [value, self.get(value)]
          };
        }
      });
    };

    _proto[_Symbol$iterator] = function () {
      return this.entries();
    };

    _proto.forEach = function forEach(callback, thisArg) {
      for (var _iterator = _createForOfIteratorHelperLoose(this), _step; !(_step = _iterator()).done;) {
        var _step$value = _step.value,
            key = _step$value[0],
            value = _step$value[1];
        callback.call(thisArg, value, key, this);
      }
    }
    /** Merge another object into this object, returns this. */
    ;

    _proto.merge = function merge(other) {
      var _this4 = this;

      if (isObservableMap(other)) {
        other = new Map(other);
      }

      transaction(function () {
        if (isPlainObject(other)) getPlainObjectKeys(other).forEach(function (key) {
          return _this4.set(key, other[key]);
        });else if (Array.isArray(other)) other.forEach(function (_ref) {
          var key = _ref[0],
              value = _ref[1];
          return _this4.set(key, value);
        });else if (isES6Map(other)) {
          if (other.constructor !== Map) die(19, other);
          other.forEach(function (value, key) {
            return _this4.set(key, value);
          });
        } else if (other !== null && other !== undefined) die(20, other);
      });
      return this;
    };

    _proto.clear = function clear() {
      var _this5 = this;

      transaction(function () {
        untracked(function () {
          for (var _iterator2 = _createForOfIteratorHelperLoose(_this5.keys()), _step2; !(_step2 = _iterator2()).done;) {
            var key = _step2.value;

            _this5["delete"](key);
          }
        });
      });
    };

    _proto.replace = function replace(values) {
      var _this6 = this;

      // Implementation requirements:
      // - respect ordering of replacement map
      // - allow interceptors to run and potentially prevent individual operations
      // - don't recreate observables that already exist in original map (so we don't destroy existing subscriptions)
      // - don't _keysAtom.reportChanged if the keys of resulting map are indentical (order matters!)
      // - note that result map may differ from replacement map due to the interceptors
      transaction(function () {
        // Convert to map so we can do quick key lookups
        var replacementMap = convertToMap(values);
        var orderedData = new Map(); // Used for optimization

        var keysReportChangedCalled = false; // Delete keys that don't exist in replacement map
        // if the key deletion is prevented by interceptor
        // add entry at the beginning of the result map

        for (var _iterator3 = _createForOfIteratorHelperLoose(_this6.data_.keys()), _step3; !(_step3 = _iterator3()).done;) {
          var key = _step3.value;

          // Concurrently iterating/deleting keys
          // iterator should handle this correctly
          if (!replacementMap.has(key)) {
            var deleted = _this6["delete"](key); // Was the key removed?


            if (deleted) {
              // _keysAtom.reportChanged() was already called
              keysReportChangedCalled = true;
            } else {
              // Delete prevented by interceptor
              var value = _this6.data_.get(key);

              orderedData.set(key, value);
            }
          }
        } // Merge entries


        for (var _iterator4 = _createForOfIteratorHelperLoose(replacementMap.entries()), _step4; !(_step4 = _iterator4()).done;) {
          var _step4$value = _step4.value,
              _key = _step4$value[0],
              _value = _step4$value[1];

          // We will want to know whether a new key is added
          var keyExisted = _this6.data_.has(_key); // Add or update value


          _this6.set(_key, _value); // The addition could have been prevent by interceptor


          if (_this6.data_.has(_key)) {
            // The update could have been prevented by interceptor
            // and also we want to preserve existing values
            // so use value from _data map (instead of replacement map)
            var _value2 = _this6.data_.get(_key);

            orderedData.set(_key, _value2); // Was a new key added?

            if (!keyExisted) {
              // _keysAtom.reportChanged() was already called
              keysReportChangedCalled = true;
            }
          }
        } // Check for possible key order change


        if (!keysReportChangedCalled) {
          if (_this6.data_.size !== orderedData.size) {
            // If size differs, keys are definitely modified
            _this6.keysAtom_.reportChanged();
          } else {
            var iter1 = _this6.data_.keys();

            var iter2 = orderedData.keys();
            var next1 = iter1.next();
            var next2 = iter2.next();

            while (!next1.done) {
              if (next1.value !== next2.value) {
                _this6.keysAtom_.reportChanged();

                break;
              }

              next1 = iter1.next();
              next2 = iter2.next();
            }
          }
        } // Use correctly ordered map


        _this6.data_ = orderedData;
      });
      return this;
    };

    _proto.toString = function toString() {
      return "[object ObservableMap]";
    };

    _proto.toJSON = function toJSON() {
      return Array.from(this);
    };

    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    _proto.observe_ = function observe_(listener, fireImmediately) {
      if (fireImmediately === true) die("`observe` doesn't support fireImmediately=true in combination with maps.");
      return registerListener(this, listener);
    };

    _proto.intercept_ = function intercept_(handler) {
      return registerInterceptor(this, handler);
    };

    _createClass(ObservableMap, [{
      key: "size",
      get: function get() {
        this.keysAtom_.reportObserved();
        return this.data_.size;
      }
    }, {
      key: _Symbol$toStringTag,
      get: function get() {
        return "Map";
      }
    }]);

    return ObservableMap;
  }(); // eslint-disable-next-line

  var isObservableMap = /*#__PURE__*/createInstanceofPredicate("ObservableMap", ObservableMap);

  function convertToMap(dataStructure) {
    if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
      return dataStructure;
    } else if (Array.isArray(dataStructure)) {
      return new Map(dataStructure);
    } else if (isPlainObject(dataStructure)) {
      var map = new Map();

      for (var key in dataStructure) {
        map.set(key, dataStructure[key]);
      }

      return map;
    } else {
      return die(21, dataStructure);
    }
  }

  var _Symbol$iterator$1, _Symbol$toStringTag$1;
  var ObservableSetMarker = {};
  _Symbol$iterator$1 = Symbol.iterator;
  _Symbol$toStringTag$1 = Symbol.toStringTag;
  var ObservableSet = /*#__PURE__*/function () {
    function ObservableSet(initialData, enhancer, name_) {
      if (enhancer === void 0) {
        enhancer = deepEnhancer;
      }

      if (name_ === void 0) {
        name_ = "ObservableSet@" + getNextId() ;
      }

      this.name_ = void 0;
      this[$mobx] = ObservableSetMarker;
      this.data_ = new Set();
      this.atom_ = void 0;
      this.changeListeners_ = void 0;
      this.interceptors_ = void 0;
      this.dehancer = void 0;
      this.enhancer_ = void 0;
      this.name_ = name_;

      if (!isFunction(Set)) {
        die(22);
      }

      this.atom_ = createAtom(this.name_);

      this.enhancer_ = function (newV, oldV) {
        return enhancer(newV, oldV, name_);
      };

      if (initialData) {
        this.replace(initialData);
      }
    }

    var _proto = ObservableSet.prototype;

    _proto.dehanceValue_ = function dehanceValue_(value) {
      if (this.dehancer !== undefined) {
        return this.dehancer(value);
      }

      return value;
    };

    _proto.clear = function clear() {
      var _this = this;

      transaction(function () {
        untracked(function () {
          for (var _iterator = _createForOfIteratorHelperLoose(_this.data_.values()), _step; !(_step = _iterator()).done;) {
            var value = _step.value;

            _this["delete"](value);
          }
        });
      });
    };

    _proto.forEach = function forEach(callbackFn, thisArg) {
      for (var _iterator2 = _createForOfIteratorHelperLoose(this), _step2; !(_step2 = _iterator2()).done;) {
        var value = _step2.value;
        callbackFn.call(thisArg, value, value, this);
      }
    };

    _proto.add = function add(value) {
      var _this2 = this;

      checkIfStateModificationsAreAllowed(this.atom_);

      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: ADD,
          object: this,
          newValue: value
        });
        if (!change) return this; // ideally, value = change.value would be done here, so that values can be
        // changed by interceptor. Same applies for other Set and Map api's.
      }

      if (!this.has(value)) {
        transaction(function () {
          _this2.data_.add(_this2.enhancer_(value, undefined));

          _this2.atom_.reportChanged();
        });
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);

        var _change = notify || notifySpy ? {
          observableKind: "set",
          debugObjectName: this.name_,
          type: ADD,
          object: this,
          newValue: value
        } : null;

        if (notifySpy && "development" !== "production") spyReportStart(_change);
        if (notify) notifyListeners(this, _change);
        if (notifySpy && "development" !== "production") spyReportEnd();
      }

      return this;
    };

    _proto["delete"] = function _delete(value) {
      var _this3 = this;

      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: DELETE,
          object: this,
          oldValue: value
        });
        if (!change) return false;
      }

      if (this.has(value)) {
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);

        var _change2 = notify || notifySpy ? {
          observableKind: "set",
          debugObjectName: this.name_,
          type: DELETE,
          object: this,
          oldValue: value
        } : null;

        if (notifySpy && "development" !== "production") spyReportStart(_change2);
        transaction(function () {
          _this3.atom_.reportChanged();

          _this3.data_["delete"](value);
        });
        if (notify) notifyListeners(this, _change2);
        if (notifySpy && "development" !== "production") spyReportEnd();
        return true;
      }

      return false;
    };

    _proto.has = function has(value) {
      this.atom_.reportObserved();
      return this.data_.has(this.dehanceValue_(value));
    };

    _proto.entries = function entries() {
      var nextIndex = 0;
      var keys = Array.from(this.keys());
      var values = Array.from(this.values());
      return makeIterable({
        next: function next() {
          var index = nextIndex;
          nextIndex += 1;
          return index < values.length ? {
            value: [keys[index], values[index]],
            done: false
          } : {
            done: true
          };
        }
      });
    };

    _proto.keys = function keys() {
      return this.values();
    };

    _proto.values = function values() {
      this.atom_.reportObserved();
      var self = this;
      var nextIndex = 0;
      var observableValues = Array.from(this.data_.values());
      return makeIterable({
        next: function next() {
          return nextIndex < observableValues.length ? {
            value: self.dehanceValue_(observableValues[nextIndex++]),
            done: false
          } : {
            done: true
          };
        }
      });
    };

    _proto.replace = function replace(other) {
      var _this4 = this;

      if (isObservableSet(other)) {
        other = new Set(other);
      }

      transaction(function () {
        if (Array.isArray(other)) {
          _this4.clear();

          other.forEach(function (value) {
            return _this4.add(value);
          });
        } else if (isES6Set(other)) {
          _this4.clear();

          other.forEach(function (value) {
            return _this4.add(value);
          });
        } else if (other !== null && other !== undefined) {
          die("Cannot initialize set from " + other);
        }
      });
      return this;
    };

    _proto.observe_ = function observe_(listener, fireImmediately) {
      // ... 'fireImmediately' could also be true?
      if (fireImmediately === true) die("`observe` doesn't support fireImmediately=true in combination with sets.");
      return registerListener(this, listener);
    };

    _proto.intercept_ = function intercept_(handler) {
      return registerInterceptor(this, handler);
    };

    _proto.toJSON = function toJSON() {
      return Array.from(this);
    };

    _proto.toString = function toString() {
      return "[object ObservableSet]";
    };

    _proto[_Symbol$iterator$1] = function () {
      return this.values();
    };

    _createClass(ObservableSet, [{
      key: "size",
      get: function get() {
        this.atom_.reportObserved();
        return this.data_.size;
      }
    }, {
      key: _Symbol$toStringTag$1,
      get: function get() {
        return "Set";
      }
    }]);

    return ObservableSet;
  }(); // eslint-disable-next-line

  var isObservableSet = /*#__PURE__*/createInstanceofPredicate("ObservableSet", ObservableSet);

  var descriptorCache = /*#__PURE__*/Object.create(null);
  var REMOVE = "remove";
  var ObservableObjectAdministration = /*#__PURE__*/function () {
    function ObservableObjectAdministration(target_, values_, name_, // Used anytime annotation is not explicitely provided
    defaultAnnotation_) {
      if (values_ === void 0) {
        values_ = new Map();
      }

      if (defaultAnnotation_ === void 0) {
        defaultAnnotation_ = autoAnnotation;
      }

      this.target_ = void 0;
      this.values_ = void 0;
      this.name_ = void 0;
      this.defaultAnnotation_ = void 0;
      this.keysAtom_ = void 0;
      this.changeListeners_ = void 0;
      this.interceptors_ = void 0;
      this.proxy_ = void 0;
      this.isPlainObject_ = void 0;
      this.appliedAnnotations_ = void 0;
      this.pendingKeys_ = void 0;
      this.target_ = target_;
      this.values_ = values_;
      this.name_ = name_;
      this.defaultAnnotation_ = defaultAnnotation_;
      this.keysAtom_ = new Atom(this.name_ + ".keys" ); // Optimization: we use this frequently

      this.isPlainObject_ = isPlainObject(this.target_);

      if (!isAnnotation(this.defaultAnnotation_)) {
        die("defaultAnnotation must be valid annotation");
      }

      {
        // Prepare structure for tracking which fields were already annotated
        this.appliedAnnotations_ = {};
      }
    }

    var _proto = ObservableObjectAdministration.prototype;

    _proto.getObservablePropValue_ = function getObservablePropValue_(key) {
      return this.values_.get(key).get();
    };

    _proto.setObservablePropValue_ = function setObservablePropValue_(key, newValue) {
      var observable = this.values_.get(key);

      if (observable instanceof ComputedValue) {
        observable.set(newValue);
        return true;
      } // intercept


      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: UPDATE,
          object: this.proxy_ || this.target_,
          name: key,
          newValue: newValue
        });
        if (!change) return null;
        newValue = change.newValue;
      }

      newValue = observable.prepareNewValue_(newValue); // notify spy & observers

      if (newValue !== globalState.UNCHANGED) {
        var notify = hasListeners(this);
        var notifySpy = isSpyEnabled();

        var _change = notify || notifySpy ? {
          type: UPDATE,
          observableKind: "object",
          debugObjectName: this.name_,
          object: this.proxy_ || this.target_,
          oldValue: observable.value_,
          name: key,
          newValue: newValue
        } : null;

        if (notifySpy) spyReportStart(_change);
        observable.setNewValue_(newValue);
        if (notify) notifyListeners(this, _change);
        if (notifySpy) spyReportEnd();
      }

      return true;
    };

    _proto.get_ = function get_(key) {
      if (globalState.trackingDerivation && !hasProp(this.target_, key)) {
        // Key doesn't exist yet, subscribe for it in case it's added later
        this.has_(key);
      }

      return this.target_[key];
    }
    /**
     * @param {PropertyKey} key
     * @param {any} value
     * @param {Annotation|boolean} annotation true - use default annotation, false - copy as is
     * @param {boolean} proxyTrap whether it's called from proxy trap
     * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
     */
    ;

    _proto.set_ = function set_(key, value, proxyTrap) {
      if (proxyTrap === void 0) {
        proxyTrap = false;
      }

      // Don't use .has(key) - we care about own
      if (hasProp(this.target_, key)) {
        // Existing prop
        if (this.values_.has(key)) {
          // Observable (can be intercepted)
          return this.setObservablePropValue_(key, value);
        } else if (proxyTrap) {
          // Non-observable - proxy
          return Reflect.set(this.target_, key, value);
        } else {
          // Non-observable
          this.target_[key] = value;
          return true;
        }
      } else {
        // New prop
        return this.extend_(key, {
          value: value,
          enumerable: true,
          writable: true,
          configurable: true
        }, this.defaultAnnotation_, proxyTrap);
      }
    } // Trap for "in"
    ;

    _proto.has_ = function has_(key) {
      if (!globalState.trackingDerivation) {
        // Skip key subscription outside derivation
        return key in this.target_;
      }

      this.pendingKeys_ || (this.pendingKeys_ = new Map());
      var entry = this.pendingKeys_.get(key);

      if (!entry) {
        entry = new ObservableValue(key in this.target_, referenceEnhancer, this.name_ + "." + stringifyKey(key) + "?" , false);
        this.pendingKeys_.set(key, entry);
      }

      return entry.get();
    }
    /**
     * @param {PropertyKey} key
     * @param {Annotation|boolean} annotation true - use default annotation, false - ignore prop
     */
    ;

    _proto.make_ = function make_(key, annotation) {
      if (annotation === true) {
        annotation = this.defaultAnnotation_;
      }

      if (annotation === false) {
        return;
      }

      assertAnnotable(this, annotation, key);

      if (!(key in this.target_)) {
        var _this$target_$storedA;

        // Throw on missing key, except for decorators:
        // Decorator annotations are collected from whole prototype chain.
        // When called from super() some props may not exist yet.
        // However we don't have to worry about missing prop,
        // because the decorator must have been applied to something.
        if ((_this$target_$storedA = this.target_[storedAnnotationsSymbol]) == null ? void 0 : _this$target_$storedA[key]) {
          return; // will be annotated by subclass constructor
        } else {
          die(1, annotation.annotationType_, this.name_ + "." + key.toString());
        }
      }

      var source = this.target_;

      while (source && source !== objectPrototype) {
        var descriptor = getDescriptor(source, key);

        if (descriptor) {
          var outcome = annotation.make_(this, key, descriptor, source);
          if (outcome === 0
          /* Cancel */
          ) return;
          if (outcome === 1
          /* Break */
          ) break;
        }

        source = Object.getPrototypeOf(source);
      }

      recordAnnotationApplied(this, annotation, key);
    }
    /**
     * @param {PropertyKey} key
     * @param {PropertyDescriptor} descriptor
     * @param {Annotation|boolean} annotation true - use default annotation, false - copy as is
     * @param {boolean} proxyTrap whether it's called from proxy trap
     * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
     */
    ;

    _proto.extend_ = function extend_(key, descriptor, annotation, proxyTrap) {
      if (proxyTrap === void 0) {
        proxyTrap = false;
      }

      if (annotation === true) {
        annotation = this.defaultAnnotation_;
      }

      if (annotation === false) {
        return this.defineProperty_(key, descriptor, proxyTrap);
      }

      assertAnnotable(this, annotation, key);
      var outcome = annotation.extend_(this, key, descriptor, proxyTrap);

      if (outcome) {
        recordAnnotationApplied(this, annotation, key);
      }

      return outcome;
    }
    /**
     * @param {PropertyKey} key
     * @param {PropertyDescriptor} descriptor
     * @param {boolean} proxyTrap whether it's called from proxy trap
     * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
     */
    ;

    _proto.defineProperty_ = function defineProperty_(key, descriptor, proxyTrap) {
      if (proxyTrap === void 0) {
        proxyTrap = false;
      }

      try {
        startBatch(); // Delete

        var deleteOutcome = this.delete_(key);

        if (!deleteOutcome) {
          // Failure or intercepted
          return deleteOutcome;
        } // ADD interceptor


        if (hasInterceptors(this)) {
          var change = interceptChange(this, {
            object: this.proxy_ || this.target_,
            name: key,
            type: ADD,
            newValue: descriptor.value
          });
          if (!change) return null;
          var newValue = change.newValue;

          if (descriptor.value !== newValue) {
            descriptor = _extends({}, descriptor, {
              value: newValue
            });
          }
        } // Define


        if (proxyTrap) {
          if (!Reflect.defineProperty(this.target_, key, descriptor)) {
            return false;
          }
        } else {
          defineProperty(this.target_, key, descriptor);
        } // Notify


        this.notifyPropertyAddition_(key, descriptor.value);
      } finally {
        endBatch();
      }

      return true;
    } // If original descriptor becomes relevant, move this to annotation directly
    ;

    _proto.defineObservableProperty_ = function defineObservableProperty_(key, value, enhancer, proxyTrap) {
      if (proxyTrap === void 0) {
        proxyTrap = false;
      }

      try {
        startBatch(); // Delete

        var deleteOutcome = this.delete_(key);

        if (!deleteOutcome) {
          // Failure or intercepted
          return deleteOutcome;
        } // ADD interceptor


        if (hasInterceptors(this)) {
          var change = interceptChange(this, {
            object: this.proxy_ || this.target_,
            name: key,
            type: ADD,
            newValue: value
          });
          if (!change) return null;
          value = change.newValue;
        }

        var cachedDescriptor = getCachedObservablePropDescriptor(key);
        var descriptor = {
          configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
          enumerable: true,
          get: cachedDescriptor.get,
          set: cachedDescriptor.set
        }; // Define

        if (proxyTrap) {
          if (!Reflect.defineProperty(this.target_, key, descriptor)) {
            return false;
          }
        } else {
          defineProperty(this.target_, key, descriptor);
        }

        var observable = new ObservableValue(value, enhancer, "development" !== "production" ? this.name_ + "." + key.toString() : "ObservableObject.key", false);
        this.values_.set(key, observable); // Notify (value possibly changed by ObservableValue)

        this.notifyPropertyAddition_(key, observable.value_);
      } finally {
        endBatch();
      }

      return true;
    } // If original descriptor becomes relevant, move this to annotation directly
    ;

    _proto.defineComputedProperty_ = function defineComputedProperty_(key, options, proxyTrap) {
      if (proxyTrap === void 0) {
        proxyTrap = false;
      }

      try {
        startBatch(); // Delete

        var deleteOutcome = this.delete_(key);

        if (!deleteOutcome) {
          // Failure or intercepted
          return deleteOutcome;
        } // ADD interceptor


        if (hasInterceptors(this)) {
          var change = interceptChange(this, {
            object: this.proxy_ || this.target_,
            name: key,
            type: ADD,
            newValue: undefined
          });
          if (!change) return null;
        }

        options.name || (options.name = "development" !== "production" ? this.name_ + "." + key.toString() : "ObservableObject.key");
        options.context = this.proxy_ || this.target_;
        var cachedDescriptor = getCachedObservablePropDescriptor(key);
        var descriptor = {
          configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
          enumerable: false,
          get: cachedDescriptor.get,
          set: cachedDescriptor.set
        }; // Define

        if (proxyTrap) {
          if (!Reflect.defineProperty(this.target_, key, descriptor)) {
            return false;
          }
        } else {
          defineProperty(this.target_, key, descriptor);
        }

        this.values_.set(key, new ComputedValue(options)); // Notify

        this.notifyPropertyAddition_(key, undefined);
      } finally {
        endBatch();
      }

      return true;
    }
    /**
     * @param {PropertyKey} key
     * @param {PropertyDescriptor} descriptor
     * @param {boolean} proxyTrap whether it's called from proxy trap
     * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
     */
    ;

    _proto.delete_ = function delete_(key, proxyTrap) {
      if (proxyTrap === void 0) {
        proxyTrap = false;
      }

      // No such prop
      if (!hasProp(this.target_, key)) {
        return true;
      } // Intercept


      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: REMOVE
        }); // Cancelled

        if (!change) return null;
      } // Delete


      try {
        var _this$pendingKeys_, _this$pendingKeys_$ge;

        startBatch();
        var notify = hasListeners(this);
        var notifySpy = "development" !== "production" && isSpyEnabled();
        var observable = this.values_.get(key); // Value needed for spies/listeners

        var value = undefined; // Optimization: don't pull the value unless we will need it

        if (!observable && (notify || notifySpy)) {
          var _getDescriptor;

          value = (_getDescriptor = getDescriptor(this.target_, key)) == null ? void 0 : _getDescriptor.value;
        } // delete prop (do first, may fail)


        if (proxyTrap) {
          if (!Reflect.deleteProperty(this.target_, key)) {
            return false;
          }
        } else {
          delete this.target_[key];
        } // Allow re-annotating this field


        if ("development" !== "production") {
          delete this.appliedAnnotations_[key];
        } // Clear observable


        if (observable) {
          this.values_["delete"](key); // for computed, value is undefined

          if (observable instanceof ObservableValue) {
            value = observable.value_;
          } // Notify: autorun(() => obj[key]), see #1796


          propagateChanged(observable);
        } // Notify "keys/entries/values" observers


        this.keysAtom_.reportChanged(); // Notify "has" observers
        // "in" as it may still exist in proto

        (_this$pendingKeys_ = this.pendingKeys_) == null ? void 0 : (_this$pendingKeys_$ge = _this$pendingKeys_.get(key)) == null ? void 0 : _this$pendingKeys_$ge.set(key in this.target_); // Notify spies/listeners

        if (notify || notifySpy) {
          var _change2 = {
            type: REMOVE,
            observableKind: "object",
            object: this.proxy_ || this.target_,
            debugObjectName: this.name_,
            oldValue: value,
            name: key
          };
          if ("development" !== "production" && notifySpy) spyReportStart(_change2);
          if (notify) notifyListeners(this, _change2);
          if ("development" !== "production" && notifySpy) spyReportEnd();
        }
      } finally {
        endBatch();
      }

      return true;
    }
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ;

    _proto.observe_ = function observe_(callback, fireImmediately) {
      if (fireImmediately === true) die("`observe` doesn't support the fire immediately property for observable objects.");
      return registerListener(this, callback);
    };

    _proto.intercept_ = function intercept_(handler) {
      return registerInterceptor(this, handler);
    };

    _proto.notifyPropertyAddition_ = function notifyPropertyAddition_(key, value) {
      var _this$pendingKeys_2, _this$pendingKeys_2$g;

      var notify = hasListeners(this);
      var notifySpy = isSpyEnabled();

      if (notify || notifySpy) {
        var change = notify || notifySpy ? {
          type: ADD,
          observableKind: "object",
          debugObjectName: this.name_,
          object: this.proxy_ || this.target_,
          name: key,
          newValue: value
        } : null;
        if (notifySpy) spyReportStart(change);
        if (notify) notifyListeners(this, change);
        if (notifySpy) spyReportEnd();
      }

      (_this$pendingKeys_2 = this.pendingKeys_) == null ? void 0 : (_this$pendingKeys_2$g = _this$pendingKeys_2.get(key)) == null ? void 0 : _this$pendingKeys_2$g.set(true); // Notify "keys/entries/values" observers

      this.keysAtom_.reportChanged();
    };

    _proto.ownKeys_ = function ownKeys_() {
      this.keysAtom_.reportObserved();
      return ownKeys(this.target_);
    };

    _proto.keys_ = function keys_() {
      // Returns enumerable && own, but unfortunately keysAtom will report on ANY key change.
      // There is no way to distinguish between Object.keys(object) and Reflect.ownKeys(object) - both are handled by ownKeys trap.
      // We can either over-report in Object.keys(object) or under-report in Reflect.ownKeys(object)
      // We choose to over-report in Object.keys(object), because:
      // - typically it's used with simple data objects
      // - when symbolic/non-enumerable keys are relevant Reflect.ownKeys works as expected
      this.keysAtom_.reportObserved();
      return Object.keys(this.target_);
    };

    return ObservableObjectAdministration;
  }();
  function asObservableObject(target, options) {
    var _options$name;

    if (options && isObservableObject(target)) {
      die("Options can't be provided for already observable objects.");
    }

    if (hasProp(target, $mobx)) {
      if (!(getAdministration(target) instanceof ObservableObjectAdministration)) {
        die("Cannot convert '" + getDebugName(target) + "' into observable object:" + "\nThe target is already observable of different type." + "\nExtending builtins is not supported.");
      }

      return target;
    }

    if (!Object.isExtensible(target)) die("Cannot make the designated object observable; it is not extensible");
    var name = (_options$name = options == null ? void 0 : options.name) != null ? _options$name : (isPlainObject(target) ? "ObservableObject" : target.constructor.name) + "@" + getNextId() ;
    var adm = new ObservableObjectAdministration(target, new Map(), String(name), getAnnotationFromOptions(options));
    addHiddenProp(target, $mobx, adm);
    return target;
  }
  var isObservableObjectAdministration = /*#__PURE__*/createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);

  function getCachedObservablePropDescriptor(key) {
    return descriptorCache[key] || (descriptorCache[key] = {
      get: function get() {
        return this[$mobx].getObservablePropValue_(key);
      },
      set: function set(value) {
        return this[$mobx].setObservablePropValue_(key, value);
      }
    });
  }

  function isObservableObject(thing) {
    if (isObject(thing)) {
      return isObservableObjectAdministration(thing[$mobx]);
    }

    return false;
  }
  function recordAnnotationApplied(adm, annotation, key) {
    var _adm$target_$storedAn;

    {
      adm.appliedAnnotations_[key] = annotation;
    } // Remove applied decorator annotation so we don't try to apply it again in subclass constructor


    (_adm$target_$storedAn = adm.target_[storedAnnotationsSymbol]) == null ? true : delete _adm$target_$storedAn[key];
  }

  function assertAnnotable(adm, annotation, key) {
    // Valid annotation
    if (!isAnnotation(annotation)) {
      die("Cannot annotate '" + adm.name_ + "." + key.toString() + "': Invalid annotation.");
    }
    /*
    // Configurable, not sealed, not frozen
    // Possibly not needed, just a little better error then the one thrown by engine.
    // Cases where this would be useful the most (subclass field initializer) are not interceptable by this.
    if (__DEV__) {
        const configurable = getDescriptor(adm.target_, key)?.configurable
        const frozen = Object.isFrozen(adm.target_)
        const sealed = Object.isSealed(adm.target_)
        if (!configurable || frozen || sealed) {
            const fieldName = `${adm.name_}.${key.toString()}`
            const requestedAnnotationType = annotation.annotationType_
            let error = `Cannot apply '${requestedAnnotationType}' to '${fieldName}':`
            if (frozen) {
                error += `\nObject is frozen.`
            }
            if (sealed) {
                error += `\nObject is sealed.`
            }
            if (!configurable) {
                error += `\nproperty is not configurable.`
                // Mention only if caused by us to avoid confusion
                if (hasProp(adm.appliedAnnotations!, key)) {
                    error += `\nTo prevent accidental re-definition of a field by a subclass, `
                    error += `all annotated fields of non-plain objects (classes) are not configurable.`
                }
            }
            die(error)
        }
    }
    */
    // Not annotated


    if (!isOverride(annotation) && hasProp(adm.appliedAnnotations_, key)) {
      var fieldName = adm.name_ + "." + key.toString();
      var currentAnnotationType = adm.appliedAnnotations_[key].annotationType_;
      var requestedAnnotationType = annotation.annotationType_;
      die("Cannot apply '" + requestedAnnotationType + "' to '" + fieldName + "':" + ("\nThe field is already annotated with '" + currentAnnotationType + "'.") + "\nRe-annotating fields is not allowed." + "\nUse 'override' annotation for methods overriden by subclass.");
    }
  }

  /**
   * This array buffer contains two lists of properties, so that all arrays
   * can recycle their property definitions, which significantly improves performance of creating
   * properties on the fly.
   */

  var OBSERVABLE_ARRAY_BUFFER_SIZE = 0; // Typescript workaround to make sure ObservableArray extends Array

  var StubArray = function StubArray() {};

  function inherit(ctor, proto) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(ctor.prototype, proto);
    } else if (ctor.prototype.__proto__ !== undefined) {
      ctor.prototype.__proto__ = proto;
    } else {
      ctor.prototype = proto;
    }
  }

  inherit(StubArray, Array.prototype); // Weex proto freeze protection was here,
  // but it is unclear why the hack is need as MobX never changed the prototype
  // anyway, so removed it in V6

  var LegacyObservableArray = /*#__PURE__*/function (_StubArray) {
    _inheritsLoose(LegacyObservableArray, _StubArray);

    function LegacyObservableArray(initialValues, enhancer, name, owned) {
      var _this;

      if (name === void 0) {
        name = "ObservableArray@" + getNextId() ;
      }

      if (owned === void 0) {
        owned = false;
      }

      _this = _StubArray.call(this) || this;
      var adm = new ObservableArrayAdministration(name, enhancer, owned, true);
      adm.proxy_ = _assertThisInitialized(_this);
      addHiddenFinalProp(_assertThisInitialized(_this), $mobx, adm);

      if (initialValues && initialValues.length) {
        var prev = allowStateChangesStart(true); // @ts-ignore

        _this.spliceWithArray(0, 0, initialValues);

        allowStateChangesEnd(prev);
      }

      return _this;
    }

    var _proto = LegacyObservableArray.prototype;

    _proto.concat = function concat() {
      this[$mobx].atom_.reportObserved();

      for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
        arrays[_key] = arguments[_key];
      }

      return Array.prototype.concat.apply(this.slice(), //@ts-ignore
      arrays.map(function (a) {
        return isObservableArray(a) ? a.slice() : a;
      }));
    };

    _proto[Symbol.iterator] = function () {
      var self = this;
      var nextIndex = 0;
      return makeIterable({
        next: function next() {
          // @ts-ignore
          return nextIndex < self.length ? {
            value: self[nextIndex++],
            done: false
          } : {
            done: true,
            value: undefined
          };
        }
      });
    };

    _createClass(LegacyObservableArray, [{
      key: "length",
      get: function get() {
        return this[$mobx].getArrayLength_();
      },
      set: function set(newLength) {
        this[$mobx].setArrayLength_(newLength);
      }
    }, {
      key: Symbol.toStringTag,
      get: function get() {
        return "Array";
      }
    }]);

    return LegacyObservableArray;
  }(StubArray);

  Object.entries(arrayExtensions).forEach(function (_ref) {
    var prop = _ref[0],
        fn = _ref[1];
    if (prop !== "concat") addHiddenProp(LegacyObservableArray.prototype, prop, fn);
  });

  function createArrayEntryDescriptor(index) {
    return {
      enumerable: false,
      configurable: true,
      get: function get() {
        return this[$mobx].get_(index);
      },
      set: function set(value) {
        this[$mobx].set_(index, value);
      }
    };
  }

  function createArrayBufferItem(index) {
    defineProperty(LegacyObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
  }

  function reserveArrayBuffer(max) {
    if (max > OBSERVABLE_ARRAY_BUFFER_SIZE) {
      for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max + 100; index++) {
        createArrayBufferItem(index);
      }

      OBSERVABLE_ARRAY_BUFFER_SIZE = max;
    }
  }
  reserveArrayBuffer(1000);
  function createLegacyArray(initialValues, enhancer, name) {
    return new LegacyObservableArray(initialValues, enhancer, name);
  }

  function getAtom(thing, property) {
    if (typeof thing === "object" && thing !== null) {
      if (isObservableArray(thing)) {
        if (property !== undefined) die(23);
        return thing[$mobx].atom_;
      }

      if (isObservableSet(thing)) {
        return thing[$mobx];
      }

      if (isObservableMap(thing)) {
        if (property === undefined) return thing.keysAtom_;
        var observable = thing.data_.get(property) || thing.hasMap_.get(property);
        if (!observable) die(25, property, getDebugName(thing));
        return observable;
      }

      if (isObservableObject(thing)) {
        if (!property) return die(26);

        var _observable = thing[$mobx].values_.get(property);

        if (!_observable) die(27, property, getDebugName(thing));
        return _observable;
      }

      if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
        return thing;
      }
    } else if (isFunction(thing)) {
      if (isReaction(thing[$mobx])) {
        // disposer function
        return thing[$mobx];
      }
    }

    die(28);
  }
  function getAdministration(thing, property) {
    if (!thing) die(29);
    if (property !== undefined) return getAdministration(getAtom(thing, property));
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) return thing;
    if (isObservableMap(thing) || isObservableSet(thing)) return thing;
    if (thing[$mobx]) return thing[$mobx];
    die(24, thing);
  }
  function getDebugName(thing, property) {
    var named;

    if (property !== undefined) {
      named = getAtom(thing, property);
    } else if (isAction(thing)) {
      return thing.name;
    } else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing)) {
      named = getAdministration(thing);
    } else {
      // valid for arrays as well
      named = getAtom(thing);
    }

    return named.name_;
  }

  var toString = objectPrototype.toString;
  function deepEqual(a, b, depth) {
    if (depth === void 0) {
      depth = -1;
    }

    return eq(a, b, depth);
  } // Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
  // Internal recursive comparison function for `isEqual`.

  function eq(a, b, depth, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b; // `null` or `undefined` only equal to itself (strict comparison).

    if (a == null || b == null) return false; // `NaN`s are equivalent, but non-reflexive.

    if (a !== a) return b !== b; // Exhaust primitive checks

    var type = typeof a;
    if (!isFunction(type) && type !== "object" && typeof b != "object") return false; // Compare `[[Class]]` names.

    var className = toString.call(a);
    if (className !== toString.call(b)) return false;

    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case "[object RegExp]": // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')

      case "[object String]":
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return "" + a === "" + b;

      case "[object Number]":
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN.
        if (+a !== +a) return +b !== +b; // An `egal` comparison is performed for other numeric values.

        return +a === 0 ? 1 / +a === 1 / b : +a === +b;

      case "[object Date]":
      case "[object Boolean]":
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;

      case "[object Symbol]":
        return typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b);

      case "[object Map]":
      case "[object Set]":
        // Maps and Sets are unwrapped to arrays of entry-pairs, adding an incidental level.
        // Hide this extra level by increasing the depth.
        if (depth >= 0) {
          depth++;
        }

        break;
    } // Unwrap any wrapped objects.


    a = unwrap(a);
    b = unwrap(b);
    var areArrays = className === "[object Array]";

    if (!areArrays) {
      if (typeof a != "object" || typeof b != "object") return false; // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.

      var aCtor = a.constructor,
          bCtor = b.constructor;

      if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
        return false;
      }
    }

    if (depth === 0) {
      return false;
    } else if (depth < 0) {
      depth = -1;
    } // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.


    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;

    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    } // Add the first object to the stack of traversed objects.


    aStack.push(a);
    bStack.push(b); // Recursively compare objects and arrays.

    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false; // Deep compare the contents, ignoring non-numeric properties.

      while (length--) {
        if (!eq(a[length], b[length], depth - 1, aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = Object.keys(a);
      var key;
      length = keys.length; // Ensure that both objects contain the same number of properties before comparing deep equality.

      if (Object.keys(b).length !== length) return false;

      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(hasProp(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack))) return false;
      }
    } // Remove the first object from the stack of traversed objects.


    aStack.pop();
    bStack.pop();
    return true;
  }

  function unwrap(a) {
    if (isObservableArray(a)) return a.slice();
    if (isES6Map(a) || isObservableMap(a)) return Array.from(a.entries());
    if (isES6Set(a) || isObservableSet(a)) return Array.from(a.entries());
    return a;
  }

  function makeIterable(iterator) {
    iterator[Symbol.iterator] = getSelf;
    return iterator;
  }

  function getSelf() {
    return this;
  }

  function isAnnotation(thing) {
    return (// Can be function
      thing instanceof Object && typeof thing.annotationType_ === "string" && isFunction(thing.make_) && isFunction(thing.extend_)
    );
  }

  /**
   * (c) Michel Weststrate 2015 - 2020
   * MIT Licensed
   *
   * Welcome to the mobx sources! To get an global overview of how MobX internally works,
   * this is a good place to start:
   * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
   *
   * Source folders:
   * ===============
   *
   * - api/     Most of the public static methods exposed by the module can be found here.
   * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
   * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
   * - utils/   Utility stuff.
   *
   */
  ["Symbol", "Map", "Set", "Symbol"].forEach(function (m) {
    var g = getGlobal();

    if (typeof g[m] === "undefined") {
      die("MobX requires global '" + m + "' to be available or polyfilled");
    }
  });

  if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    // See: https://github.com/andykog/mobx-devtools/
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
      spy: spy,
      extras: {
        getDebugName: getDebugName
      },
      $mobx: $mobx
    });
  }

  // Let's see if I can make a custom chess sprite now.

  var chesssprite = /*#__PURE__*/function (_sprite) {
    _inherits(chesssprite, _sprite);

    var _super = _createSuper(chesssprite);

    function chesssprite(game, datahandler) {
      var _this;

      _classCallCheck(this, chesssprite); // `game' contains some metadata, and the pgn in game.Game.
      // Construct a basic sprite.


      _this = _super.call(this);

      var obj = _assertThisInitialized$1(_this); // Add a chessboard into the scene element. `.chessboard' is defined in the `chessground.css', and defines the initial size of the board in pixel.


      var drawdiv = select(obj.node).select("div.scene-element").append("div").attr("class", "chessboard"); // `Chess' finds the available legal moves.

      obj.chess = new Chess(); // `pgn' is teh sequence of moves played, `fen' is the current state of the game.

      obj.pgn = game.Game;
      obj.fen = obj.chess.fen(); // Position within the series.

      obj.plies = game.Game.split(" ").filter(function (v, i) {
        return i % 3 != 0;
      });
      obj.plyind = -1; // The first increment will make plyind=0, which is the first index of an array.
      // Configure the chess board renderer.

      obj.board = Chessground(drawdiv.node(), {
        viewOnly: true
      }); // Make the class observable.

      makeObservable(obj, {
        ply: action,
        fen: observable,
        data: computed
      });
      autorun(function () {
        obj.render();
      });
      return _this;
    } // constructor
    // Basic functionality.


    _createClass$1(chesssprite, [{
      key: "render",
      value: function render() {
        var obj = this; // The FEN changed, therefore redraw.

        obj.board.set({
          fen: obj.fen
        });
      } // render

    }, {
      key: "data",
      get: function get() {
        // Find the pawn positions in the fen.
        var obj = this; // COMPUTED VALUE!!

        var fen = obj.fen; // this is the observed value!
        // Each of the 16 dimensions is a file for one side. Since FEN notation begins with rank 8

        var emptystructure = [];

        for (var i = 0; i < 16; i++) {
          emptystructure.push([]);
        } // for


        var pawnstructure = fen.split(" ")[0].split("/").reduce(function (a, pieces, row) {
          var col = 0;

          var vals = _toConsumableArray(pieces);

          vals.forEach(function (v) {
            var v_ = parseInt(v);

            if (v_) {
              // Empty squares
              col += v_;
            } else {
              // Some piece.
              switch (v) {
                case "P":
                  // White pieces.
                  a[col].push(7 - row);
                  break;

                case "p":
                  // Black pieces.
                  a[8 + col].push(7 - row);
                  break;
              } // switch


              col += 1;
            } // if

          });
          return a;
        }, emptystructure);
        return pawnstructure;
      } // get data
      // Specific functionality.

    }, {
      key: "ply",
      value: function ply() {
        // This increments the plyind. I could then even make a computed value of `fen`, and only then ask the rerender.
        var obj = this;
        obj.plyind += 1; // Find and play the next ply.

        var ply = obj.plies[obj.plyind];
        obj.chess.move(ply);
        obj.fen = obj.chess.fen();
      } // ply

    }]);

    return chesssprite;
  }(sprite); // chesssprite

  /* 
  First setup a webpage that will display the result.

  In this example first include:
  	- WORKS!! arrow functions
  	- WORKS!! classes
  	- WORKS!! nested methods in classes (as static!)
  	- WORKS!! promises
  	- NOT CLEAR HOW TO PROCEED: promise.allSettled
  */
  // Cant use piling js because then you have to use their chosen webGL renderer.

  d3.select("#app").append("h1").html("Hello World!");
  var state = {
    games: [],
    groups: {}
  }; // Ply functionality

  d3.select("#ply").on("click", function () {
    state.games.forEach(function (game) {
      game.ply();
    });
  });
  var container = document.getElementById("tabletop");
  /*
  // Wrap the chess game further. Put it into a card that can be dragged around, and move the ply button elsewhere - to the header.
  let annotatedgamefile = "./data/lichess_study_kasparov-vs-topalov-1999-annotated_kasparov-g_custom.json"
  d3.json(annotatedgamefile).then(function(game){
  	let sprite = new chesssprite(game);
  	state.games.push(sprite)
  	
  	// Finally add the sprite to the container.
  	container.appendChild(sprite.node)
  }) // then
  */
  // Make another module which creates a draggable div into which the graphic can be placed?

  d3.json("./data/lichess_db_subset.json").then(function (json) {
    // make 10 sprites - should be enough to test making groups etc.
    for (var i = 0; i < 10; i++) {
      var sprite = new chesssprite(json.games[i]);
      state.games.push(sprite);
      container.appendChild(sprite.node);
    } // for


    console.log(state.games);
  }); // then

}());
//# sourceMappingURL=chessdemo.js.map
